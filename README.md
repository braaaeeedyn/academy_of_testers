# Academy of Testers

A full-stack AP/SAT study platform that provides curated practice exams, subject-specific resources, unit overviews, and topical practice content.

## Tech Stack

**Frontend:**
- React + TypeScript + Vite
- TailwindCSS
- React Router

**Backend:**
- Spring Boot 3.2
- PostgreSQL 16
- Flyway Migrations

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
- PostgreSQL database on port 5432
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

2. Run Spring Boot:
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
└── docker-compose.yml
```

## What the Platform Actually Does

- Browse exams (`AP`, `SAT`) and drill into exam-specific subject hubs.
- Search subjects by name and filter subjects by category in the AP hub.
- Open each subject page and access:
  - Unit Overviews
  - Practice Problems
  - Topical Unit Review (when available)
  - Video Resources
  - Practice Exams (from seeded `study_resources`)

## API Surface (Core Endpoints)

- `GET /api/health` - health check.
- `GET /api/exams` - list all exams.
- `GET /api/exams/{id}/subjects` - list subjects under an exam.
- `GET /api/subjects/{id}` - single subject.
- `GET /api/resources?subjectId=&q=&page=&size=&sort=` - paginated subject resources with optional query.
- `GET /api/resources/{id}` - single resource.

## Database Schema (Used in Production)

Schema is created in `server/src/main/resources/db/migration/V1__create_tables.sql`.

### `exams`
- `id` `BIGSERIAL` primary key
- `name` `VARCHAR(50)` not null, unique
- `description` `VARCHAR(500)`
- `created_at` `TIMESTAMP` default `CURRENT_TIMESTAMP`

### `subjects`
- `id` `BIGSERIAL` primary key
- `name` `VARCHAR(100)` not null
- `description` `VARCHAR(500)`
- `exam_id` `BIGINT` not null, FK -> `exams(id)` with `ON DELETE CASCADE`
- `created_at` `TIMESTAMP` default `CURRENT_TIMESTAMP`

Index:
- `idx_subjects_exam_id` on `subjects(exam_id)`

### `study_resources`
- `id` `BIGSERIAL` primary key
- `title` `VARCHAR(200)` not null
- `description` `VARCHAR(1000)`
- `file_path` `VARCHAR(500)` not null
- `file_type` `VARCHAR(20)`
- `exam_year` `INTEGER`
- `subject_id` `BIGINT` not null, FK -> `subjects(id)` with `ON DELETE CASCADE`
- `created_at` `TIMESTAMP` default `CURRENT_TIMESTAMP`

Indexes:
- `idx_study_resources_subject_id` on `study_resources(subject_id)`
- `idx_study_resources_exam_year` on `study_resources(exam_year)`

## Migrations

Flyway migration files live in `server/src/main/resources/db/migration`.

- `V1__create_tables.sql` - schema creation
- `V2__seed_data.sql` - exam/subject seeds
- `V3__add_sat_resources.sql` - SAT resources
- `V4__add_ap_resources.sql` - AP resources
- `V5__add_ap_research_subject.sql` - AP Research subject
- `V6__remove_ap_foreign_languages.sql` - removes AP Foreign Languages + associated resources

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

See deployment documentation in `/docs` folder (coming soon).

