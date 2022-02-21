mod quic_mplex;
mod yamux_mplex;

pub use quic_mplex::*;
pub use yamux_mplex::*;

use crate::{KvError, ProstClientStream};
use async_trait::async_trait;

#[async_trait]
pub trait AppStream {
    type InnerStream;
    async fn open_stream(&mut self) -> Result<ProstClientStream<Self::InnerStream>, KvError>;
}
