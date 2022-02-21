mod config;
mod error;
mod network;
mod pb;
mod service;
mod storage;

use std::{net::SocketAddr, str::FromStr};

pub use config::*;
pub use error::KvError;
pub use network::*;
pub use pb::abi::*;
pub use service::*;
pub use storage::*;

use anyhow::Result;
use s2n_quic::{client::Connect, Client, Server};
use tokio::net::{TcpListener, TcpStream};
use tokio_rustls::client;
use tokio_util::compat::FuturesAsyncReadCompatExt;
use tracing::{info, instrument, span};

/// 通过配置创建 KV 服务器
#[instrument(skip_all)]
pub async fn start_server_with_config(config: &ServerConfig) -> Result<()> {
    let addr = &config.general.addr;
    match config.general.network {
        NetworkType::Tcp => {
            let acceptor = TlsServerAcceptor::new(
                &config.tls.cert,
                &config.tls.key,
                config.tls.ca.as_deref(),
            )?;

            match &config.storage {
                StorageConfig::MemTable => {
                    start_tls_server(addr, MemTable::new(), acceptor).await?
                }
                StorageConfig::SledDb(path) => {
                    start_tls_server(addr, SledDb::new(path), acceptor).await?
                }
            };
        }
        NetworkType::Quic => {
            match &config.storage {
                StorageConfig::MemTable => {
                    start_quic_server(addr, MemTable::new(), &config.tls).await?
                }
                StorageConfig::SledDb(path) => {
                    start_quic_server(addr, SledDb::new(path), &config.tls).await?
                }
            };
        }
    }

    Ok(())
}

/// 通过配置创建 KV 客户端
#[instrument(skip_all)]
pub async fn start_yamux_client_with_config(
    config: &ClientConfig,
) -> Result<YamuxCtrl<client::TlsStream<TcpStream>>> {
    let addr = &config.general.addr;
    let tls = &config.tls;

    let identity = tls.identity.as_ref().map(|(c, k)| (c.as_str(), k.as_str()));
    let connector = TlsClientConnector::new(&tls.domain, identity, tls.ca.as_deref())?;
    let stream = TcpStream::connect(addr).await?;
    let stream = connector.connect(stream).await?;

    // 打开一个 stream
    Ok(YamuxCtrl::new_client(stream, None))
}

#[instrument(skip_all)]
pub async fn start_quic_client_with_config(config: &ClientConfig) -> Result<QuicCtrl> {
    let addr = SocketAddr::from_str(&config.general.addr)?;
    let tls = &config.tls;

    let client = Client::builder()
        .with_tls(tls.ca.as_ref().unwrap().as_str())?
        .with_io("0.0.0.0:0")?
        .start()
        .map_err(|e| anyhow::anyhow!("Failed to start client. Error: {}", e))?;

    let connect = Connect::new(addr).with_server_name("localhost");
    let mut conn = client.connect(connect).await?;

    // ensure the connection doesn't time out with inactivity
    conn.keep_alive(true)?;

    Ok(QuicCtrl::new(conn))
}

async fn start_quic_server<Store: Storage>(
    addr: &str,
    store: Store,
    tls_config: &ServerTlsConfig,
) -> Result<()> {
    let service: Service<Store> = ServiceInner::new(store).into();
    let mut listener = Server::builder()
        .with_tls((tls_config.cert.as_str(), tls_config.key.as_str()))?
        .with_io(addr)?
        .start()
        .map_err(|e| anyhow::anyhow!("Failed to start server. Error: {}", e))?;

    info!("Start listening on {addr}");

    loop {
        let root = span!(tracing::Level::INFO, "server_process");
        let _enter = root.enter();

        if let Some(mut conn) = listener.accept().await {
            info!("Client {} connected", conn.remote_addr()?);
            let svc = service.clone();

            tokio::spawn(async move {
                while let Ok(Some(stream)) = conn.accept_bidirectional_stream().await {
                    info!(
                        "Accepted stream from {}",
                        stream.connection().remote_addr()?
                    );
                    let svc1 = svc.clone();
                    tokio::spawn(async move {
                        let stream = ProstServerStream::new(stream, svc1.clone());
                        stream.process().await.unwrap();
                    });
                }
                Ok::<(), anyhow::Error>(())
            });
        }
    }
}

async fn start_tls_server<Store: Storage>(
    addr: &str,
    store: Store,
    acceptor: TlsServerAcceptor,
) -> Result<()> {
    let service: Service<Store> = ServiceInner::new(store).into();
    let listener = TcpListener::bind(addr).await?;
    info!("Start listening on {}", addr);
    loop {
        let root = span!(tracing::Level::INFO, "server_process");
        let _enter = root.enter();
        let tls = acceptor.clone();
        let (stream, addr) = listener.accept().await?;
        info!("Client {:?} connected", addr);

        let svc = service.clone();
        tokio::spawn(async move {
            let stream = tls.accept(stream).await.unwrap();
            YamuxCtrl::new_server(stream, None, move |stream| {
                let svc1 = svc.clone();
                async move {
                    let stream = ProstServerStream::new(stream.compat(), svc1.clone());
                    stream.process().await.unwrap();
                    Ok(())
                }
            });
        });
    }
}
