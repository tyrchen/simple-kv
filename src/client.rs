use std::time::Duration;

use anyhow::Result;
use futures::StreamExt;
use simple_kv::{
    start_quic_client_with_config, start_yamux_client_with_config, AppStream, ClientConfig,
    CommandRequest, KvError, NetworkType, ProstClientStream,
};
use tokio::{
    io::{AsyncRead, AsyncWrite},
    time,
};
use tracing::info;

#[tokio::main]
async fn main() -> Result<()> {
    tracing_subscriber::fmt::init();
    let config: ClientConfig = toml::from_str(include_str!("../fixtures/quic_client.conf"))?;

    // 打开一个 yamux ctrl
    match config.general.network {
        NetworkType::Tcp => {
            let ctrl = start_yamux_client_with_config(&config).await?;
            process(ctrl).await?;
        }
        NetworkType::Quic => {
            let ctrl = start_quic_client_with_config(&config).await?;
            process(ctrl).await?;
        }
    }

    println!("Done!");

    Ok(())
}

async fn process<S, T>(mut ctrl: S) -> Result<()>
where
    S: AppStream<InnerStream = T>,
    T: AsyncRead + AsyncWrite + Unpin + Send + 'static,
{
    let channel = "lobby";
    start_publishing(ctrl.open_stream().await?, channel)?;

    let mut stream = ctrl.open_stream().await?;

    // 生成一个 HSET 命令
    let cmd = CommandRequest::new_hset("table1", "hello", "world".to_string().into());

    // 发送 HSET 命令
    let data = stream.execute_unary(&cmd).await?;
    info!("Got response {:?}", data);

    // 生成一个 Subscribe 命令
    let cmd = CommandRequest::new_subscribe(channel);
    let mut stream = stream.execute_streaming(&cmd).await?;
    let id = stream.id;
    start_unsubscribe(ctrl.open_stream().await?, channel, id)?;

    while let Some(Ok(data)) = stream.next().await {
        println!("Got published data: {:?}", data);
    }

    Ok(())
}

fn start_publishing<S>(mut stream: ProstClientStream<S>, name: &str) -> Result<(), KvError>
where
    S: AsyncRead + AsyncWrite + Unpin + Send + 'static,
{
    let cmd = CommandRequest::new_publish(name, vec![1.into(), 2.into(), "hello".into()]);
    tokio::spawn(async move {
        time::sleep(Duration::from_millis(1000)).await;
        let res = stream.execute_unary(&cmd).await.unwrap();
        println!("Finished publishing: {:?}", res);
    });

    Ok(())
}

fn start_unsubscribe<S>(
    mut stream: ProstClientStream<S>,
    name: &str,
    id: u32,
) -> Result<(), KvError>
where
    S: AsyncRead + AsyncWrite + Unpin + Send + 'static,
{
    let cmd = CommandRequest::new_unsubscribe(name, id as _);
    tokio::spawn(async move {
        time::sleep(Duration::from_millis(2000)).await;
        let res = stream.execute_unary(&cmd).await.unwrap();
        println!("Finished unsubscribing: {:?}", res);
    });

    Ok(())
}
