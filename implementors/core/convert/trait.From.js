(function() {var implementors = {};
implementors["simple_kv"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/prost/0.9.0/prost/error/struct.EncodeError.html\" title=\"struct prost::error::EncodeError\">EncodeError</a>&gt; for <a class=\"enum\" href=\"simple_kv/enum.KvError.html\" title=\"enum simple_kv::KvError\">KvError</a>","synthetic":false,"types":["simple_kv::error::KvError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/prost/0.9.0/prost/error/struct.DecodeError.html\" title=\"struct prost::error::DecodeError\">DecodeError</a>&gt; for <a class=\"enum\" href=\"simple_kv/enum.KvError.html\" title=\"enum simple_kv::KvError\">KvError</a>","synthetic":false,"types":["simple_kv::error::KvError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"enum\" href=\"simple_kv/enum.KvError.html\" title=\"enum simple_kv::KvError\">KvError</a>","synthetic":false,"types":["simple_kv::error::KvError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.58.1/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"simple_kv/enum.KvError.html\" title=\"enum simple_kv::KvError\">KvError</a>","synthetic":false,"types":["simple_kv::error::KvError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;TLSError&gt; for <a class=\"enum\" href=\"simple_kv/enum.KvError.html\" title=\"enum simple_kv::KvError\">KvError</a>","synthetic":false,"types":["simple_kv::error::KvError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;ConnectionError&gt; for <a class=\"enum\" href=\"simple_kv/enum.KvError.html\" title=\"enum simple_kv::KvError\">KvError</a>","synthetic":false,"types":["simple_kv::error::KvError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/toml/0.5/toml/de/struct.Error.html\" title=\"struct toml::de::Error\">Error</a>&gt; for <a class=\"enum\" href=\"simple_kv/enum.KvError.html\" title=\"enum simple_kv::KvError\">KvError</a>","synthetic":false,"types":["simple_kv::error::KvError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.58.1/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"simple_kv/struct.Value.html\" title=\"struct simple_kv::Value\">Value</a>","synthetic":false,"types":["simple_kv::pb::abi::Value"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.58.1/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"simple_kv/struct.Value.html\" title=\"struct simple_kv::Value\">Value</a>","synthetic":false,"types":["simple_kv::pb::abi::Value"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.58.1/std/primitive.i64.html\">i64</a>&gt; for <a class=\"struct\" href=\"simple_kv/struct.Value.html\" title=\"struct simple_kv::Value\">Value</a>","synthetic":false,"types":["simple_kv::pb::abi::Value"]},{"text":"impl&lt;const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.58.1/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.58.1/std/primitive.array.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.58.1/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.58.1/std/primitive.array.html\">; N]</a>&gt; for <a class=\"struct\" href=\"simple_kv/struct.Value.html\" title=\"struct simple_kv::Value\">Value</a>","synthetic":false,"types":["simple_kv::pb::abi::Value"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Bytes&gt; for <a class=\"struct\" href=\"simple_kv/struct.Value.html\" title=\"struct simple_kv::Value\">Value</a>","synthetic":false,"types":["simple_kv::pb::abi::Value"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"simple_kv/struct.Value.html\" title=\"struct simple_kv::Value\">Value</a>&gt; for <a class=\"struct\" href=\"simple_kv/struct.CommandResponse.html\" title=\"struct simple_kv::CommandResponse\">CommandResponse</a>","synthetic":false,"types":["simple_kv::pb::abi::CommandResponse"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.58.1/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"simple_kv/struct.Kvpair.html\" title=\"struct simple_kv::Kvpair\">Kvpair</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.58.1/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"simple_kv/struct.CommandResponse.html\" title=\"struct simple_kv::CommandResponse\">CommandResponse</a>","synthetic":false,"types":["simple_kv::pb::abi::CommandResponse"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"simple_kv/enum.KvError.html\" title=\"enum simple_kv::KvError\">KvError</a>&gt; for <a class=\"struct\" href=\"simple_kv/struct.CommandResponse.html\" title=\"struct simple_kv::CommandResponse\">CommandResponse</a>","synthetic":false,"types":["simple_kv::pb::abi::CommandResponse"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.58.1/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"simple_kv/struct.Value.html\" title=\"struct simple_kv::Value\">Value</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.58.1/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"simple_kv/struct.CommandResponse.html\" title=\"struct simple_kv::CommandResponse\">CommandResponse</a>","synthetic":false,"types":["simple_kv::pb::abi::CommandResponse"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.58.1/std/primitive.bool.html\">bool</a>&gt; for <a class=\"struct\" href=\"simple_kv/struct.Value.html\" title=\"struct simple_kv::Value\">Value</a>","synthetic":false,"types":["simple_kv::pb::abi::Value"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.58.1/std/primitive.f64.html\">f64</a>&gt; for <a class=\"struct\" href=\"simple_kv/struct.Value.html\" title=\"struct simple_kv::Value\">Value</a>","synthetic":false,"types":["simple_kv::pb::abi::Value"]},{"text":"impl&lt;Store:&nbsp;<a class=\"trait\" href=\"simple_kv/trait.Storage.html\" title=\"trait simple_kv::Storage\">Storage</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"simple_kv/struct.ServiceInner.html\" title=\"struct simple_kv::ServiceInner\">ServiceInner</a>&lt;Store&gt;&gt; for <a class=\"struct\" href=\"simple_kv/struct.Service.html\" title=\"struct simple_kv::Service\">Service</a>&lt;Store&gt;","synthetic":false,"types":["simple_kv::service::Service"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.58.1/std/primitive.tuple.html\">(</a><a class=\"struct\" href=\"https://doc.rust-lang.org/1.58.1/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"struct\" href=\"simple_kv/struct.Value.html\" title=\"struct simple_kv::Value\">Value</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.58.1/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"simple_kv/struct.Kvpair.html\" title=\"struct simple_kv::Kvpair\">Kvpair</a>","synthetic":false,"types":["simple_kv::pb::abi::Kvpair"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.58.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.58.1/std/primitive.tuple.html\">(</a>IVec, IVec<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.58.1/std/primitive.tuple.html\">)</a>, Error&gt;&gt; for <a class=\"struct\" href=\"simple_kv/struct.Kvpair.html\" title=\"struct simple_kv::Kvpair\">Kvpair</a>","synthetic":false,"types":["simple_kv::pb::abi::Kvpair"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()