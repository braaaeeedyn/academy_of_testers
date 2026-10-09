# Academy of Testers

A full-stack AP and SAT study platform: practice questions for 29 AP subjects, an adaptive SAT Math engine (IRT + Bayesian Knowledge Tracing), AI FRQ grading and a study chatbot grounded with RAG, and a spaced-repetition Mistake Notebook.

## Tech Stack

**Frontend:**
- React 18 + TypeScript + Vite
- TailwindCSS, `motion` for animation
- React Router
- KaTeX for math rendering

**Backend:**
- Spring Boot 3.2
- PostgreSQL 16
- Flyway Migrations
- OpenAI (chat, embeddings) for Testy, FRQ grading, and RAG
- Brevo SMTP for verification email

**Deployment:**
- Frontend: Vercel
- Backend: Render
- Database: Render PostgreSQL

## Quick Start

> **Local dev launch:** see **[RUNNING.md](RUNNING.md)** for the one-command
> launcher (`.\scripts\start-dev.ps1`) and an explanation of the Postgres
> **port 5433** workaround (a WSL2 native Postgres squats on `localhost:5432`).

### Prerequisites
- Docker & Docker Compose
- Java 17+ (for local development)
- Node.js 18+ (for local development)

### Run Entire Stack with Docker

```bash
docker compose up
```

This will start:
- PostgreSQL database on port 5432 (5433 on this machine via `docker-compose.override.yml`)
- Spring Boot API on port 8080

**Verify the backend is running:**
```bash
curl http://localhost:8080/api/health
```

Expected response:
```json
{
  "status": "UP",
  "message": "Academy of Testers API is running"
}
```

### Run Frontend (Development)

```bash
cd web
npm install
npm run dev
```

Frontend will be available at `http://localhost:5173`

### Run Backend Locally (Without Docker)

1. Start PostgreSQL:
```bash
docker compose up postgres -d
```

2. Run Spring Boot (set the env vars from [RUNNING.md](RUNNING.md) first; the datasource must point at port 5433):
```bash
cd server
mvn spring-boot:run
```

## Project Structure

```
academy_of_testers/
├── server/              # Spring Boot API
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/aot/
│   │   │   └── resources/
│   │   │       ├── db/migration/
│   │   │       └── static/
│   ├── Dockerfile
│   └── pom.xml
├── web/                 # React frontend
│   ├── src/
│   ├── package.json
│   └── vite.config.ts
├── tools/               # sat-import (SAT bank pipeline), rag-ingest, frq-release, bank-stats
├── eval/frq-grader/     # offline A/B eval of the RAG FRQ grader
├── scripts/             # start-dev.ps1
└── docker-compose.yml
```

## What the Platform Does

*Current as of 2026-10-07.*

### AP (29 subjects)
- **Exam hubs** for each subject: unit overviews, video resources, and College Board practice exams/PDFs.
- **Unit practice**: 5,160 multiple-choice questions across 172 units (30 per unit, 10 easy / 10 medium
  / 10 hard), plus timed mock exams and an interleaved review mode that mixes units.
- **FRQ practice + AI grading**: the real 2025 released free-response questions, graded by a RAG
  grader that retrieves rubric clauses and score-banded exemplars (see "AI features" below).
- **AP planner**: pick your courses, then get a week-by-week study plan ordered by mastery.
- **Flashcards**: premade decks plus your own stacks, with per-card progress.

### SAT (Math)
- **Adaptive engine** (`/sat/adaptive`): a 24-question diagnostic seeds eight skill weights, then
  10-question sessions pick items with IRT, update mastery with Bayesian Knowledge Tracing, decay it
  with a forgetting curve, and propagate penalties to prerequisite skills. 590 questions in the bank.
  Mastery radar, streak calendar, and a practice builder for focusing on chosen skills.
- **Prep lessons** for each of the eight skills, a **Desmos calculator strategy guide**, and a
  week-by-week **study plan**.

### Across both
- **Testy** (`/testy` and a floating chat): an AI study assistant grounded in AP curriculum,
  rubrics, and exemplars, with per-user hourly limits.
- **Mistake Notebook** (`/notebook`): every missed AP or SAT question goes into a Leitner
  spaced-repetition queue (1/3/7/14/30 days). Reviewing a SAT question here never changes mastery.
- **"Explain my mistake"**: one click pre-fills Testy with the missed question and your answer.
- **Exam logistics** pages for AP and SAT, linking to College Board for dates and policies.
- Accounts with email verification (Brevo SMTP), JWT auth with refresh tokens, a contact form,
  and selectable site themes.

### AI features
- **RAG layer**: chunks stored in Postgres with OpenAI embeddings; retrieval is in-app cosine
  similarity (no pgvector). Corpus loaded via `tools/rag-ingest`.
- **FRQ grader eval** (`eval/frq-grader`): an offline A/B harness against official College Board
  scores. Grounding cut mean absolute error ~23% vs. a no-rubric baseline (QWK 0.62), and held up on
  a fresh APUSH set it was never tuned on.

## API Surface

All under `/api`. Everything except health, exams/subjects/resources, auth, and contact needs a JWT.

| Area | Endpoints |
| --- | --- |
| Health | `GET /health` |
| Catalog | `GET /exams`, `GET /exams/{id}/subjects`, `GET /subjects/{id}`, `GET /resources`, `GET /resources/{id}` |
| Auth | `POST /auth/register`, `/login`, `/refresh`, `/logout`, `/verify`, `/verify/resend` |
| User | `GET`/`PUT /users/me`, `POST /users/me/password` |
| Flashcards | `/flashcards`, `/stacks` (CRUD), `/progress` (GET/POST/DELETE) |
| AP planner | `GET`/`PUT /ap/courses` |
| AI | `POST /ai/chat`, `GET /ai/chat/usage`, `POST /ai/frq/grade` |
| RAG admin | `POST /ai/rag/chunks`, `POST /ai/rag/reembed`, `GET /ai/rag/stats`, `GET /ai/rag/chunk` (ingest token) |
| SAT adaptive | `/sat/adaptive/status`, `/mastery`, `/dashboard`, `/prefs`, `/streak/repair`, `/diagnostic`, `/diagnostic/answer`, `/catalog`, `/session`, `/session/current`, `/session/{id}/answer`, `/session/{id}/summary`, `/session/{id}/end`, `/review/{questionId}`, `/review/{questionId}/check` |
| Contact | `POST /contact` |

## Database and Migrations

Schema lives entirely in Flyway migrations in `server/src/main/resources/db/migration`
(`ddl-auto=none`). Main groups:

- `V1`–`V10`: exams, subjects, study resources, auth tables, SAT resource fixes.
- `V11`–`V12`: flashcards, stacks, card progress.
- `V13`–`V21`: SAT adaptive engine: question bank, skills and prerequisites, per-student weights,
  responses, sessions, streaks, prefs. `V15` and `V21` are generated seeds; edit the JSON in
  `server/src/main/resources/sat/bank/` and regenerate them, never by hand.
- `V22`: users' AP course selections.
- `V23`–`V24`: SAT cleanup (Math only, stem formatting).
- `V25`: RAG chunks + embeddings.

## Tests

`cd server && mvn test` runs JUnit 5 tests for the pure SAT engine classes (`com.aot.sat.engine`).
`web/scripts/acceptance/check.mjs` is a behavior check for the Mistake Notebook / study plan
features. There is no frontend unit test runner.

## Unit Overview System

Unit overview data lives in `web/src/data/unitOverviews`.

- Subject files export `SubjectUnitOverview` objects.
- Most raw-text subjects now use shared parsing:
  - `parseRawOverview(...)` from `parseRawOverview.ts`
- All unit overview files are registered in:
  - `web/src/data/unitOverviews/index.ts`
- Subject page resolution path:
  - `ResourcesPage` -> `getUnitOverviewBySubjectName(subject.name)`

If a unit overview exists but is not visible in UI, the first thing to verify is whether the file is imported and added to `SUBJECT_OVERVIEWS` in `index.ts`, and whether `subjectName` matches API subject naming (or has an alias mapping).

## Development

### Code Formatting

**Backend:**
```bash
cd server
mvn spotless:apply
```

**Frontend:**
```bash
cd web
npm run format
```

## Deployment

Frontend on Vercel, backend and Postgres on Render. UptimeRobot pings the backend to avoid Render
cold starts, and the frontend retries GETs if the backend is waking up.

