use async_trait::async_trait;
use s2n_quic::{stream::BidirectionalStream, Connection};
use tracing::instrument;

use crate::{AppStream, KvError, ProstClientStream};

pub struct QuicCtrl {
    ctrl: Connection,
}

impl QuicCtrl {
    pub fn new(conn: Connection) -> Self {
        Self { ctrl: conn }
    }
}

#[async_trait]
impl AppStream for QuicCtrl {
    type InnerStream = BidirectionalStream;

    #[instrument(skip_all)]
    async fn open_stream(&mut self) -> Result<ProstClientStream<Self::InnerStream>, KvError> {
        let stream = self.ctrl.open_bidirectional_stream().await?;
        Ok(ProstClientStream::new(stream))
    }
}
