RELEASE_TYPE ?= minor

init:
	# do nothing as for now

start:
	@cargo run --bin kvs

build-proto:
	@BUILD_PROTO=1 cargo build

build-release-local:
	@cargo build --release
	@cp ~/.target/release/kvs ./bin

build-release:
	@cargo build --release
	@cp ./target/release/kvs ./bin

bump-release:
	@cargo release $(RELEASE_TYPE) --no-dev-version --skip-publish --skip-tag

show-tag:
	@git tag -l --format='%(contents)' $(TAG)
