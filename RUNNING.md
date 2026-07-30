# Running Academy of Testers Locally

How to start the **frontend** and **backend** for local development, plus the
fix for the Postgres port collision that broke the last launch.

---

## TL;DR

```powershell
# From the repo root, in PowerShell:
.\scripts\start-dev.ps1
```

This starts Postgres (Docker), waits for it to be healthy, then opens two
windows running the backend and the frontend.

- Frontend: <http://localhost:5173>
- Backend health: <http://localhost:8080/api/health> -> `{"status":"UP"}`

---

## Prerequisites

- **Docker Desktop** (for Postgres)
- **Java 17+** and **Maven 3.9+** (backend runs from source)
- **Node.js 18+** (frontend)

Frontend deps: `cd web && npm install` (only needed the first time).

---

## Manual start (what the script does)

### 1. Database (Docker)

```powershell
docker compose up -d postgres
```

Postgres is published on the host at **port 5433** (see
[Why port 5433](#why-port-5433-important) below). The container's internal
port is still 5432, so the full Docker stack is unaffected.

### 2. Backend (Spring Boot, from source)

The backend must be told to use the Docker Postgres on **5433**:

```powershell
cd server
$env:SPRING_DATASOURCE_URL      = 'jdbc:postgresql://localhost:5433/aot_db'
$env:SPRING_DATASOURCE_USERNAME = 'aot_user'
$env:SPRING_DATASOURCE_PASSWORD = 'aot_password'
$env:JWT_SECRET                 = 'default-dev-secret-that-is-at-least-32-bytes-long-for-hmac'
mvn spring-boot:run
```

Verify: `curl http://localhost:8080/api/health`

### 3. Frontend (Vite)

```powershell
cd web
npm run dev
```

Opens at <http://localhost:5173> and proxies `/api` to the backend on 8080.

---

## Alternative: full stack in Docker

If you don't need live backend reloads, run everything in containers. This path
uses the internal Docker network (`api` -> `postgres:5432`) and is **immune**
to the port issue described below:

```powershell
docker compose up --build
```

---

## Why port 5433 (important)

**Symptom (last launch):** the backend failed on startup with

```
FATAL: password authentication failed for user "aot_user"
```

even though the `aot-postgres` container was healthy and the password in
`docker-compose.yml` was correct.

**Root cause:** this machine's **WSL2 Ubuntu** distro auto-starts its own
**native PostgreSQL 16** on `127.0.0.1:5432` (via systemd). On Windows,
`localhost:5432` is forwarded by Docker Desktop's `wslrelay` to that WSL
Postgres — **not** to the `aot-postgres` container. So a backend run from
source on the Windows host connected to the wrong database, whose `aot_user`
has a different password. `psql` tests from inside Docker succeeded only
because Docker's internal subnet is granted `trust` in `pg_hba.conf`, which
masked the problem.

**Fix (permanent):** publish the container's Postgres on a collision-free host
port, **5433**, and point the host-run backend there. `localhost:5433` has no
WSL relay in front of it, so it always reaches the real container database.

This is done in **`docker-compose.override.yml`** (git-ignored, machine-local):

```yaml
services:
  postgres:
    ports:
      - "5433:5432"
```

Docker Compose auto-loads that override on top of `docker-compose.yml`. The
`start-dev.ps1` script and the manual steps above both use `5433`, so the
failure cannot recur.

> On a machine **without** a WSL/native Postgres on 5432 you don't need the
> override — but keeping it is harmless, since 5433 is just an extra host port.

### Alternative fixes (not used)

- Stop the WSL Postgres (`wsl -e sudo systemctl disable --now postgresql`).
  Rejected: it's invasive to your WSL environment, which you may use elsewhere.
- Run the backend inside Docker (`docker compose up`). Valid, but loses
  live-reload of backend source.

---

## Stopping

- Close the two PowerShell windows opened by the script (stops backend + web).
- Stop the database: `docker compose stop postgres`
  (use `docker compose down` to remove containers; the data volume persists).

---

## Troubleshooting

| Problem | Check |
| --- | --- |
| `password authentication failed for user "aot_user"` | You're hitting the WSL Postgres on 5432. Use **5433** (see above). Confirm with `docker port aot-postgres`. |
| Backend won't start, `Port 8080 ... in use` | A previous backend is still running: `netstat -ano \| findstr :8080`, then stop that PID. |
| Flyway `checksum mismatch` on startup | A migration file changed after being applied. Reset the dev DB: `docker compose down -v` then `docker compose up -d postgres` (destroys local data). |
| Frontend loads but API calls fail | Backend not up, or not on 8080. Hit `http://localhost:8080/api/health` directly. |
