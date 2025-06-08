# Prereqisitions

Install the [uv](https://docs.astral.sh/uv/) tool, then get a working virtual environment:

```shell
uv python install
uv venv
source .venv/bin/activate
uv sync --all-extras --dev
```

## Upgrade the dependencies

```shell
uv sync --upgrade
uv lock
```

# Run Main Playbook

This Playbook runs follow actions:
- Installs Podman
- Deploys Red OS 7.3 Murom into Podman (exposes ports: 7432 - PgDoorman, 2222 - ssh, 8181 - app);
All further actions are inside container redos-murom-7:
  - Installs Packages, which required by some Ansible collections, PgDoorman and other;
  - Deploy Postgresql (Database: mis, user: mis, pass: SecurePass123!, table: user_activity with 1000 generated records);
  - Installs Rust (for PgDoorman building);
  - Installs PgDoorman;
  - Installs Java 24 (for test app);
  - Deploys test app.
  - Prepares k6 test environment


```shell
ansible-playbook playbooks/main.yml -v
```

## Run test

My advice is open 3 tabs:

1) journald app:

```shell
podman container exec -it redos-murom-7 /bin/bash
journalctl -u pg_doorman-missclick -f
```

2) run k6:

```shell
podman container exec -it redos-murom-7 /bin/bash
k6 run --vus 10 --duration 10m /opt/k6/test.js
```

3) restart postgresql:

```shell
podman container exec -it redos-murom-7 /bin/bash
systemctl restart postgresql-15
```

**Look at app journald tab. Just in short, you will see errors.**

Look at [Details](Details.md)