# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Running locally (Windows / PowerShell)

```powershell
.\scripts\start-dev.ps1
```

Starts Docker Postgres, waits for health, then opens the backend and frontend in their own windows.
Frontend <http://localhost:5173>, backend health <http://localhost:8080/api/health>.

Manual equivalent — note the backend **must** point at port **5433**, not 5432:

```powershell
docker compose up -d postgres
cd server
$env:SPRING_DATASOURCE_URL      = 'jdbc:postgresql://localhost:5433/aot_db'
$env:SPRING_DATASOURCE_USERNAME = 'aot_user'
$env:SPRING_DATASOURCE_PASSWORD = 'aot_password'
$env:JWT_SECRET                 = 'default-dev-secret-that-is-at-least-32-bytes-long-for-hmac'
mvn spring-boot:run
# separate shell
cd web && npm run dev
```

Full stack in containers (no backend live-reload, immune to the port issue):
`docker compose up --build`. After backend changes in that mode:
`docker compose build api && docker compose up -d api`.

### Build, lint, format

```bash
cd web && npm run build     # tsc && vite build
cd web && npm run lint      # eslint, --max-warnings 0
cd web && npm run format    # prettier
cd server && mvn compile
cd server && mvn spotless:apply
```

### Tests

**There is no test suite** — no `server/src/test`, no frontend test runner. `spring-boot-starter-test`
was deliberately omitted (see `SAT_ADAPTIVE_ENGINE.md` §0, "Known simplifications"); the adaptive engine
is verified by construction plus manual end-to-end runs. Don't fabricate a test command; if tests are
wanted, the engine classes under `com.aot.sat.engine` are pure and the natural first target.

## The port 5433 rule

`docker-compose.yml` publishes Postgres on 5432, but this machine's WSL2 Ubuntu runs its own native
Postgres 16 that Docker Desktop's `wslrelay` forwards `localhost:5432` to. A host-run backend on 5432
silently hits the **wrong database** and fails with `password authentication failed for user "aot_user"`.

The fix is `docker-compose.override.yml` (git-ignored, machine-local) republishing on `5433:5432`.
If that file is missing on a fresh clone and you see the auth error, that's why. Full writeup in
`RUNNING.md`.

## Architecture

Monorepo: `server/` (Spring Boot 3.2, Java 17, Maven) + `web/` (React 18, TS, Vite, Tailwind),
PostgreSQL 16 with Flyway. Deployed frontend on Vercel, backend + DB on Render.

### Backend

`com.aot` uses a conventional controller / service / repository / entity / dto layering, with
`security/` holding JWT auth (`JwtAuthenticationFilter`, `JwtService`, `SecurityConfig`).
`spring.jpa.hibernate.ddl-auto=none` — **schema changes only ever happen through a Flyway migration**
in `server/src/main/resources/db/migration`. Config is `application.properties` with env-var overrides
(`JWT_SECRET`, `MAIL_*` for Brevo SMTP, `OPENAI_API_KEY`).

Static PDFs/resources are served from `classpath:/static/`, bind-mounted in Docker so files can be
added without a rebuild.

### The SAT adaptive engine — `com.aot.sat`

A self-contained subsystem and the most intricate part of the codebase. **Read
`SAT_ADAPTIVE_ENGINE.md` before touching anything under `com.aot.sat` or `web/src/components/adaptive/`** —
it is the design authority, and §0 tracks live implementation state.

Load-bearing invariants:

- **`sat/engine/` classes are pure functions.** No Spring annotations, no repositories, no
  `LocalDateTime.now()` — clocks and data are passed in. Keep it that way; it's what makes the model
  testable without a DB.
- **`MasteryService` is the only place skill weights are read**, because that's where the forgetting
  curve decay is applied lazily. Reading `sat_skill_weights` anywhere else yields stale values.
- **The client never sees answers.** `AdaptiveQuestionDTO` omits `correctIndex`, `explanation`, `irtB`,
  and difficulty (difficulty is withheld because knowing it changes how students answer, contaminating
  the data used to recalibrate `irt_b`). Answer data only appears in `AnswerResultDTO`, post-submission.
- **No model math in TypeScript.** Weights arrive pre-decayed from `/mastery` and
  `AnswerResultDTO.updatedWeights`. `Math.exp` in `web/` means something went wrong.
- **Question ids are permanent.** `sat_responses` references them forever — never renumber or reuse.
- Fill-in ("grid") questions are designed but deliberately deferred to Phase 6. The generator rejects
  them. Parameterized hooks exist (`pGuess` as an argument, `irt_c` as a per-item column); don't build
  `GridInAnswerChecker` or `GridInInput.tsx`.

Question bank pipeline: JSON at `server/src/main/resources/sat/bank/<skill>.json` is the reviewable
source of truth. `tools/sat-import/normalize.mjs` (deterministic, idempotent — re-run with `--apply`)
converts pristine raw practice-test files into it, and a generator emits the committed Flyway migration
`V15__seed_sat_questions.sql`. The SQL is a build artifact that happens to be checked in — edit the JSON
or the raw files, then re-run, rather than editing SQL by hand.

### Frontend

- `services/api.ts` — all HTTP goes through the `fetchAPI<T>` / `fetchNoContent` helpers, which attach
  the bearer token. `AuthContext` injects the token accessor via `setTokenAccessor` so `api.ts` never
  imports context. Base URL resolves to `/api` (the Vite proxy) whenever the configured host is
  loopback, to avoid CORS when the app is opened as `127.0.0.1`.
- `vite.config.ts` proxies `/api`, `/resources/AP`, and `/resources/sat` to the backend, stripping
  `x-frame-options` on the resource paths so PDFs can be iframed. HMR uses polling because Docker bind
  mounts on Windows don't forward filesystem events.
- **LaTeX rendering is solved** — pass strings to `<MathText>` (`web/src/components/MathText.tsx`),
  which handles `\(...\)` and `\[...\]`. Don't write a second renderer.
- The mastery radar is hand-rolled SVG + the `motion` package, themed via CSS variables
  (`--accent-ink`, etc.) so it inherits every theme in `ThemesPage`. No charting library.
- **Unit overviews**: data lives in `web/src/data/unitOverviews`, most subjects using
  `parseRawOverview(...)`. A file must be imported *and* registered in `SUBJECT_OVERVIEWS` in
  `index.ts` to appear. If an overview exists but isn't visible, check that registration first, then
  whether `subjectName` matches API subject naming or needs an alias mapping.

## Design references

`DESIGN.md` at the root and in `clickhouse/`, `mastercard/`, `miro/`, `resend/`, `wired/` are
design-system *analyses of other companies' sites*, kept as inspiration references. They are not the
spec for this app's UI — don't treat their tokens as authoritative.
