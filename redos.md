https://redos.red-soft.ru/base/redos-7_3/7_3-administation/7_3-containers/7_3-docker-install/#registry

dnf install openssl-devel-1.1.1q-8.el7.3.x86_64 (rpm -qa | grep openssl, выбрать точно какая версия, у меня была 1.1.1q-8.el7.3.x86_64)

dnf install wget
dnf install redhat-lsb-core
dnf install xz

# скачиваем rust standalone (offline):
wget https://static.rust-lang.org/dist/rust-1.87.0-x86_64-unknown-linux-gnu.tar.xz
tar xvf rust-1.87.0-x86_64-unknown-linux-gnu.tar.xz
cd rust-1.87.0-x86_64-unknown-linux-gnu
./install.sh

cd pg_doorman
cargo build --release

[root@50e1a3b49f57 tt]# ./target/release/pg_doorman --help
PgDoorman: Nextgen PostgreSQL Pooler (based on PgCat)

Usage: pg_doorman [OPTIONS] [CONFIG_FILE]

Arguments:
  [CONFIG_FILE]  [env: CONFIG_FILE=] [default: pg_doorman.toml]

Options:
  -l, --log-level <LOG_LEVEL>    [env: LOG_LEVEL=] [default: INFO]
  -F, --log-format <LOG_FORMAT>  [env: LOG_FORMAT=] [default: text] [possible values: text, structured, debug]
  -n, --no-color                 disable colors in the log output [env: NO_COLOR=]
  -d, --daemon                   run as daemon [env: DAEMON=]
  -h, --help                     Print help
  -V, --version                  Print version
[root@50e1a3b49f57 tt]#
