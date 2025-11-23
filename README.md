# Academy of Testers

A lightweight web platform providing students with fast, free access to past AP and SAT exam materials.

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
aot/
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

## Database Schema

- **exams**: AP, SAT
- **subjects**: Math, English, Science, etc. (linked to exams)
- **study_resources**: PDFs, guides, past exams (linked to subjects)

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

## License

MIT
