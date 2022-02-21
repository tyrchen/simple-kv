(function() {var implementors = {};
implementors["gen_cert"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/marker/trait.Freeze.html\" title=\"trait core::marker::Freeze\">Freeze</a> for <a class=\"struct\" href=\"gen_cert/struct.CertPem.html\" title=\"struct gen_cert::CertPem\">CertPem</a>","synthetic":true,"types":["gen_cert::CertPem"]}];
implementors["simple_kv"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"simple_kv/struct.ServerConfig.html\" title=\"struct simple_kv::ServerConfig\">ServerConfig</a>","synthetic":true,"types":["simple_kv::config::ServerConfig"]},{"text":"impl Freeze for <a class=\"struct\" href=\"simple_kv/struct.ClientConfig.html\" title=\"struct simple_kv::ClientConfig\">ClientConfig</a>","synthetic":true,"types":["simple_kv::config::ClientConfig"]},{"text":"impl Freeze for <a class=\"struct\" href=\"simple_kv/struct.GeneralConfig.html\" title=\"struct simple_kv::GeneralConfig\">GeneralConfig</a>","synthetic":true,"types":["simple_kv::config::GeneralConfig"]},{"text":"impl Freeze for <a class=\"enum\" href=\"simple_kv/enum.NetworkType.html\" title=\"enum simple_kv::NetworkType\">NetworkType</a>","synthetic":true,"types":["simple_kv::config::NetworkType"]},{"text":"impl Freeze for <a class=\"struct\" href=\"simple_kv/struct.LogConfig.html\" title=\"struct simple_kv::LogConfig\">LogConfig</a>","synthetic":true,"types":["simple_kv::config::LogConfig"]},{"text":"impl Freeze for <a class=\"enum\" href=\"simple_kv/enum.RotationConfig.html\" title=\"enum simple_kv::RotationConfig\">RotationConfig</a>","synthetic":true,"types":["simple_kv::config::RotationConfig"]},{"text":"impl Freeze for <a class=\"enum\" href=\"simple_kv/enum.StorageConfig.html\" title=\"enum simple_kv::StorageConfig\">StorageConfig</a>","synthetic":true,"types":["simple_kv::config::StorageConfig"]},{"text":"impl Freeze for <a class=\"struct\" href=\"simple_kv/struct.ServerTlsConfig.html\" title=\"struct simple_kv::ServerTlsConfig\">ServerTlsConfig</a>","synthetic":true,"types":["simple_kv::config::ServerTlsConfig"]},{"text":"impl Freeze for <a class=\"struct\" href=\"simple_kv/struct.ClientTlsConfig.html\" title=\"struct simple_kv::ClientTlsConfig\">ClientTlsConfig</a>","synthetic":true,"types":["simple_kv::config::ClientTlsConfig"]},{"text":"impl Freeze for <a class=\"enum\" href=\"simple_kv/enum.KvError.html\" title=\"enum simple_kv::KvError\">KvError</a>","synthetic":true,"types":["simple_kv::error::KvError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"simple_kv/struct.QuicCtrl.html\" title=\"struct simple_kv::QuicCtrl\">QuicCtrl</a>","synthetic":true,"types":["simple_kv::network::multiplex::quic_mplex::QuicCtrl"]},{"text":"impl&lt;S&gt; Freeze for <a class=\"struct\" href=\"simple_kv/struct.YamuxCtrl.html\" title=\"struct simple_kv::YamuxCtrl\">YamuxCtrl</a>&lt;S&gt;","synthetic":true,"types":["simple_kv::network::multiplex::yamux_mplex::YamuxCtrl"]},{"text":"impl&lt;S, In, Out&gt; Freeze for <a class=\"struct\" href=\"simple_kv/struct.ProstStream.html\" title=\"struct simple_kv::ProstStream\">ProstStream</a>&lt;S, In, Out&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Freeze,&nbsp;</span>","synthetic":true,"types":["simple_kv::network::stream::ProstStream"]},{"text":"impl Freeze for <a class=\"struct\" href=\"simple_kv/struct.StreamResult.html\" title=\"struct simple_kv::StreamResult\">StreamResult</a>","synthetic":true,"types":["simple_kv::network::stream_result::StreamResult"]},{"text":"impl Freeze for <a class=\"struct\" href=\"simple_kv/struct.TlsServerAcceptor.html\" title=\"struct simple_kv::TlsServerAcceptor\">TlsServerAcceptor</a>","synthetic":true,"types":["simple_kv::network::tls::TlsServerAcceptor"]},{"text":"impl Freeze for <a class=\"struct\" href=\"simple_kv/struct.TlsClientConnector.html\" title=\"struct simple_kv::TlsClientConnector\">TlsClientConnector</a>","synthetic":true,"types":["simple_kv::network::tls::TlsClientConnector"]},{"text":"impl&lt;S, Store&gt; Freeze for <a class=\"struct\" href=\"simple_kv/struct.ProstServerStream.html\" title=\"struct simple_kv::ProstServerStream\">ProstServerStream</a>&lt;S, Store&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Freeze,&nbsp;</span>","synthetic":true,"types":["simple_kv::network::ProstServerStream"]},{"text":"impl&lt;S&gt; Freeze for <a class=\"struct\" href=\"simple_kv/struct.ProstClientStream.html\" title=\"struct simple_kv::ProstClientStream\">ProstClientStream</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Freeze,&nbsp;</span>","synthetic":true,"types":["simple_kv::network::ProstClientStream"]},{"text":"impl !Freeze for <a class=\"enum\" href=\"simple_kv/command_request/enum.RequestData.html\" title=\"enum simple_kv::command_request::RequestData\">RequestData</a>","synthetic":true,"types":["simple_kv::pb::abi::command_request::RequestData"]},{"text":"impl !Freeze for <a class=\"enum\" href=\"simple_kv/value/enum.Value.html\" title=\"enum simple_kv::value::Value\">Value</a>","synthetic":true,"types":["simple_kv::pb::abi::value::Value"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"simple_kv/struct.CommandRequest.html\" title=\"struct simple_kv::CommandRequest\">CommandRequest</a>","synthetic":true,"types":["simple_kv::pb::abi::CommandRequest"]},{"text":"impl Freeze for <a class=\"struct\" href=\"simple_kv/struct.CommandResponse.html\" title=\"struct simple_kv::CommandResponse\">CommandResponse</a>","synthetic":true,"types":["simple_kv::pb::abi::CommandResponse"]},{"text":"impl Freeze for <a class=\"struct\" href=\"simple_kv/struct.Hget.html\" title=\"struct simple_kv::Hget\">Hget</a>","synthetic":true,"types":["simple_kv::pb::abi::Hget"]},{"text":"impl Freeze for <a class=\"struct\" href=\"simple_kv/struct.Hgetall.html\" title=\"struct simple_kv::Hgetall\">Hgetall</a>","synthetic":true,"types":["simple_kv::pb::abi::Hgetall"]},{"text":"impl Freeze for <a class=\"struct\" href=\"simple_kv/struct.Hmget.html\" title=\"struct simple_kv::Hmget\">Hmget</a>","synthetic":true,"types":["simple_kv::pb::abi::Hmget"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"simple_kv/struct.Value.html\" title=\"struct simple_kv::Value\">Value</a>","synthetic":true,"types":["simple_kv::pb::abi::Value"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"simple_kv/struct.Kvpair.html\" title=\"struct simple_kv::Kvpair\">Kvpair</a>","synthetic":true,"types":["simple_kv::pb::abi::Kvpair"]},{"text":"impl !Freeze for <a class=\"struct\" href=\"simple_kv/struct.Hset.html\" title=\"struct simple_kv::Hset\">Hset</a>","synthetic":true,"types":["simple_kv::pb::abi::Hset"]},{"text":"impl Freeze for <a class=\"struct\" href=\"simple_kv/struct.Hmset.html\" title=\"struct simple_kv::Hmset\">Hmset</a>","synthetic":true,"types":["simple_kv::pb::abi::Hmset"]},{"text":"impl Freeze for <a class=\"struct\" href=\"simple_kv/struct.Hdel.html\" title=\"struct simple_kv::Hdel\">Hdel</a>","synthetic":true,"types":["simple_kv::pb::abi::Hdel"]},{"text":"impl Freeze for <a class=\"struct\" href=\"simple_kv/struct.Hmdel.html\" title=\"struct simple_kv::Hmdel\">Hmdel</a>","synthetic":true,"types":["simple_kv::pb::abi::Hmdel"]},{"text":"impl Freeze for <a class=\"struct\" href=\"simple_kv/struct.Hexist.html\" title=\"struct simple_kv::Hexist\">Hexist</a>","synthetic":true,"types":["simple_kv::pb::abi::Hexist"]},{"text":"impl Freeze for <a class=\"struct\" href=\"simple_kv/struct.Hmexist.html\" title=\"struct simple_kv::Hmexist\">Hmexist</a>","synthetic":true,"types":["simple_kv::pb::abi::Hmexist"]},{"text":"impl Freeze for <a class=\"struct\" href=\"simple_kv/struct.Subscribe.html\" title=\"struct simple_kv::Subscribe\">Subscribe</a>","synthetic":true,"types":["simple_kv::pb::abi::Subscribe"]},{"text":"impl Freeze for <a class=\"struct\" href=\"simple_kv/struct.Unsubscribe.html\" title=\"struct simple_kv::Unsubscribe\">Unsubscribe</a>","synthetic":true,"types":["simple_kv::pb::abi::Unsubscribe"]},{"text":"impl Freeze for <a class=\"struct\" href=\"simple_kv/struct.Publish.html\" title=\"struct simple_kv::Publish\">Publish</a>","synthetic":true,"types":["simple_kv::pb::abi::Publish"]},{"text":"impl Freeze for <a class=\"struct\" href=\"simple_kv/struct.Broadcaster.html\" title=\"struct simple_kv::Broadcaster\">Broadcaster</a>","synthetic":true,"types":["simple_kv::service::topic::Broadcaster"]},{"text":"impl&lt;Store&gt; Freeze for <a class=\"struct\" href=\"simple_kv/struct.Service.html\" title=\"struct simple_kv::Service\">Service</a>&lt;Store&gt;","synthetic":true,"types":["simple_kv::service::Service"]},{"text":"impl&lt;Store&gt; Freeze for <a class=\"struct\" href=\"simple_kv/struct.ServiceInner.html\" title=\"struct simple_kv::ServiceInner\">ServiceInner</a>&lt;Store&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Store: Freeze,&nbsp;</span>","synthetic":true,"types":["simple_kv::service::ServiceInner"]},{"text":"impl Freeze for <a class=\"struct\" href=\"simple_kv/struct.MemTable.html\" title=\"struct simple_kv::MemTable\">MemTable</a>","synthetic":true,"types":["simple_kv::storage::memory::MemTable"]},{"text":"impl Freeze for <a class=\"struct\" href=\"simple_kv/struct.SledDb.html\" title=\"struct simple_kv::SledDb\">SledDb</a>","synthetic":true,"types":["simple_kv::storage::sleddb::SledDb"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"simple_kv/struct.StorageIter.html\" title=\"struct simple_kv::StorageIter\">StorageIter</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["simple_kv::storage::StorageIter"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()