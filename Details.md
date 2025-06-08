## Check playbook consistency

```shell
ansible-lint playbooks/install-rust.yml
```

# Run Deploy Red OS Murom 7.3 Playbook

```
ansible-playbook playbooks/deploy_redos_murom-7.yml -v
```

# Post Deployment Commands

## Access container shell

```bash
podman exec -it redos-murom bash
```

## Check services

```bash
podman exec redos-murom systemctl list-units
```

## Stop/start container

```bash
podman stop redos-murom-7
podman start redos-murom-7
```

# Run Install Simple Packages Playbook

```shell
ansible-playbook playbooks/install-simple-packages.yml -v
```

# Run Install Rust Playbook

```shell
ansible-playbook playbooks/install-rust.yml -v
```

# Run Install Postgresql Playbook

```shell
ansible-playbook playbooks/deploy-postgresql.yml -v
```

# Run Install PgDoorman Playbook

```shell
ansible-playbook playbooks/install-pg_doorman.yml -v
```

# Connect to Admin database via PgDoorman

```shell
psql -h 127.0.0.1 -p 7432 -U admin -d pgbouncer -W
```

# Run Install Java Playbook

```shell
ansible-playbook playbooks/install-java.yml -v
```

# Run Deploy App Playbook

```shell
ansible-playbook playbooks/deploy-app.yml -v
```