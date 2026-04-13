# TestyAI Authentication & AI Usage Limiting — Implementation Plan

## Table of Contents

1. [Overview](#1-overview)
2. [Authentication Architecture](#2-authentication-architecture)
3. [Database Schema & User Model](#3-database-schema--user-model)
4. [Backend Components](#4-backend-components)
5. [Frontend Components](#5-frontend-components)
6. [Email & Phone Verification Workflows](#6-email--phone-verification-workflows)
7. [Account Creation, Login & Session Management](#7-account-creation-login--session-management)
8. [AI Usage Rate Limiting](#8-ai-usage-rate-limiting)
9. [Security Considerations](#9-security-considerations)
10. [API Endpoints](#10-api-endpoints)
11. [Third-Party Services](#11-third-party-services)
12. [Implementation Phases](#12-implementation-phases)
13. [Deployment & Testing](#13-deployment--testing)

---

## 1. Overview

This plan adds user authentication and per-user AI usage limiting to Academy of Testers. Currently, all endpoints are public, and the AI chat (TestyAI / "Testy") is rate-limited by IP address via the Vite dev server plugin (`web/plugins/aiChatPlugin.ts`). The goal is to:

- Require users to create an account with a **unique email** or **unique phone number**
- Verify ownership of the email/phone before granting access
- Issue JWT-based sessions for authenticated API access
- Enforce a **10 AI uses per hour** limit per authenticated user, tracked in the database with automatic hourly resets
- Move the AI chat endpoint from the Vite plugin to the Spring Boot backend so it sits behind auth middleware

---

## 2. Authentication Architecture

```
┌──────────────┐         ┌───────────────────────┐         ┌────────────┐
│   React App  │──JWT───▶│   Spring Boot API     │────────▶│ PostgreSQL │
│  (Vite/TS)   │◀────────│                       │◀────────│  (aot_db)  │
└──────────────┘         │  ┌─────────────────┐  │         └────────────┘
                         │  │ Auth Filter      │  │
                         │  │ (JWT validation) │  │
                         │  └─────────────────┘  │
                         │  ┌─────────────────┐  │
                         │  │ Rate Limit       │  │
                         │  │ Interceptor      │  │
                         │  └─────────────────┘  │
                         └───────────┬───────────┘
                                     │
                         ┌───────────┴───────────┐
                         │   External Services   │
                         │  - SendGrid (email)   │
                         │  - Twilio (SMS)       │
                         │  - OpenAI (AI chat)   │
                         └───────────────────────┘
```

**Key decisions:**

- **Self-managed JWT auth** (no Firebase/Auth0/Clerk) — keeps the stack simple and avoids vendor lock-in given the project already has a Spring Boot backend and PostgreSQL database.
- **Access + Refresh token pattern** — short-lived access tokens (15 min), long-lived refresh tokens (7 days) stored in the database.
- **AI chat moves to Spring Boot** — the current Vite plugin (`aiChatPlugin.ts`) will be replaced by a Spring Boot controller so the endpoint is behind the auth filter.

---

## 3. Database Schema & User Model

### New Tables (Flyway migration `V7__add_auth_tables.sql`)

```sql
-- Users table
CREATE TABLE users (
    id              BIGSERIAL PRIMARY KEY,
    email           VARCHAR(255) UNIQUE,
    phone           VARCHAR(20)  UNIQUE,
    password_hash   VARCHAR(255) NOT NULL,
    display_name    VARCHAR(100) NOT NULL,
    email_verified  BOOLEAN      NOT NULL DEFAULT FALSE,
    phone_verified  BOOLEAN      NOT NULL DEFAULT FALSE,
    account_locked  BOOLEAN      NOT NULL DEFAULT FALSE,
    created_at      TIMESTAMP    NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMP    NOT NULL DEFAULT NOW(),

    -- At least one identifier required
    CONSTRAINT chk_identifier CHECK (email IS NOT NULL OR phone IS NOT NULL)
);

CREATE INDEX idx_users_email ON users (email);
CREATE INDEX idx_users_phone ON users (phone);

-- Verification codes (email & phone)
CREATE TABLE verification_codes (
    id              BIGSERIAL PRIMARY KEY,
    user_id         BIGINT       NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    code            VARCHAR(6)   NOT NULL,
    type            VARCHAR(10)  NOT NULL CHECK (type IN ('EMAIL', 'PHONE')),
    expires_at      TIMESTAMP    NOT NULL,
    used            BOOLEAN      NOT NULL DEFAULT FALSE,
    created_at      TIMESTAMP    NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_verification_codes_user_id ON verification_codes (user_id);

-- Refresh tokens
CREATE TABLE refresh_tokens (
    id              BIGSERIAL PRIMARY KEY,
    user_id         BIGINT       NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    token_hash      VARCHAR(255) NOT NULL UNIQUE,
    expires_at      TIMESTAMP    NOT NULL,
    revoked         BOOLEAN      NOT NULL DEFAULT FALSE,
    created_at      TIMESTAMP    NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_refresh_tokens_user_id ON refresh_tokens (user_id);

-- AI usage tracking
CREATE TABLE ai_usage (
    id              BIGSERIAL PRIMARY KEY,
    user_id         BIGINT       NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    usage_count     INTEGER      NOT NULL DEFAULT 0,
    window_start    TIMESTAMP    NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_ai_usage_user UNIQUE (user_id)
);
```

### Entity: `User.java`

Key fields: `id`, `email`, `phone`, `passwordHash`, `displayName`, `emailVerified`, `phoneVerified`, `accountLocked`, `createdAt`, `updatedAt`.

### Entity: `AiUsage.java`

Key fields: `id`, `userId`, `usageCount`, `windowStart`. One row per user; upserted on first AI request.

---

## 4. Backend Components

### New packages under `com.aot`

```
com.aot.auth/
  ├── controller/
  │     ├── AuthController.java          # register, login, refresh, logout
  │     └── VerificationController.java  # verify email/phone, resend code
  ├── dto/
  │     ├── RegisterRequest.java
  │     ├── LoginRequest.java
  │     ├── AuthResponse.java            # accessToken, refreshToken, user info
  │     ├── VerifyRequest.java
  │     └── RefreshRequest.java
  ├── entity/
  │     ├── User.java
  │     ├── VerificationCode.java
  │     ├── RefreshToken.java
  │     └── AiUsage.java
  ├── repository/
  │     ├── UserRepository.java
  │     ├── VerificationCodeRepository.java
  │     ├── RefreshTokenRepository.java
  │     └── AiUsageRepository.java
  ├── service/
  │     ├── AuthService.java             # registration, login, token refresh
  │     ├── VerificationService.java     # send/verify codes
  │     ├── JwtService.java              # generate/validate JWTs
  │     ├── AiUsageService.java          # check/increment usage, reset window
  │     └── AiChatService.java           # calls OpenAI (moved from Vite plugin)
  ├── security/
  │     ├── JwtAuthenticationFilter.java # OncePerRequestFilter — extracts & validates JWT
  │     └── SecurityConfig.java          # Spring Security config, endpoint rules
  └── config/
        └── TwilioConfig.java            # Twilio & SendGrid credentials
```

### New controller: `AiChatController.java`

Replaces `web/plugins/aiChatPlugin.ts`. Sits behind the JWT auth filter and the rate-limit check.

```
com.aot.controller/
  └── AiChatController.java
        POST /api/ai/chat       # requires auth, checks usage limit
        GET  /api/ai/chat/usage # returns remaining uses & reset time
```

### Dependencies to add in `server/pom.xml`

```xml
<!-- Spring Security -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>

<!-- JWT (jjwt) -->
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-api</artifactId>
    <version>0.12.6</version>
</dependency>
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-impl</artifactId>
    <version>0.12.6</version>
    <scope>runtime</scope>
</dependency>
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-jackson</artifactId>
    <version>0.12.6</version>
    <scope>runtime</scope>
</dependency>

<!-- SendGrid SDK (email verification) -->
<dependency>
    <groupId>com.sendgrid</groupId>
    <artifactId>sendgrid-java</artifactId>
    <version>4.10.3</version>
</dependency>

<!-- Twilio SDK (phone verification) -->
<dependency>
    <groupId>com.twilio.sdk</groupId>
    <artifactId>twilio</artifactId>
    <version>10.6.4</version>
</dependency>

<!-- OpenAI HTTP calls (already have Spring Web, just need WebClient or RestTemplate) -->
<!-- Spring WebFlux for WebClient (non-blocking OpenAI calls) -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-webflux</artifactId>
</dependency>
```

### Application properties additions

```properties
# JWT
jwt.secret=${JWT_SECRET}
jwt.access-token-expiration-ms=900000
jwt.refresh-token-expiration-ms=604800000

# SendGrid
sendgrid.api-key=${SENDGRID_API_KEY}
sendgrid.from-email=noreply@academyoftesters.com

# Twilio
twilio.account-sid=${TWILIO_ACCOUNT_SID}
twilio.auth-token=${TWILIO_AUTH_TOKEN}
twilio.phone-number=${TWILIO_PHONE_NUMBER}

# OpenAI (moved from frontend env)
openai.api-key=${OPENAI_API_KEY}

# AI Usage
ai.usage.max-per-hour=10
```

---

## 5. Frontend Components

### New files

```
web/src/
  ├── context/
  │     └── AuthContext.tsx          # Auth state, login/logout/register functions
  ├── components/auth/
  │     ├── LoginForm.tsx            # Email/phone + password login
  │     ├── RegisterForm.tsx         # Create account (email or phone + password)
  │     ├── VerifyForm.tsx           # Enter 6-digit verification code
  │     └── ProtectedRoute.tsx       # Wrapper that redirects unauthenticated users
  ├── pages/
  │     ├── LoginPage.tsx
  │     └── RegisterPage.tsx
  └── services/
        └── authApi.ts              # API calls for auth endpoints
```

### AuthContext behavior

- Stores `accessToken` in memory (React state), `refreshToken` in `localStorage`
- On app load, attempts silent refresh if a refresh token exists
- Provides `user`, `isAuthenticated`, `login()`, `register()`, `logout()`, `refreshSession()`
- Attaches `Authorization: Bearer <accessToken>` header to all API calls via the existing `api.ts` service

### Changes to existing files

| File | Change |
|------|--------|
| `web/src/services/api.ts` | Add auth header interceptor; add auth API methods |
| `web/src/components/AiChat.tsx` | Remove IP-based rate limit display; show per-user usage from `/api/ai/chat/usage`; require auth to send messages |
| `web/src/App.tsx` (or router config) | Add login/register routes; wrap AI chat route with `ProtectedRoute` |
| `web/vite.config.ts` | Remove `aiChatPlugin` — AI chat now served by Spring Boot |
| `web/plugins/aiChatPlugin.ts` | Delete this file (logic moves to `AiChatController.java`) |

---

## 6. Email & Phone Verification Workflows

### Email verification

```
1. User registers with email + password
2. Server creates user (emailVerified = false), generates random 6-digit code
3. Server stores code in verification_codes (type=EMAIL, expires in 10 min)
4. Server sends code via SendGrid to user's email
5. User enters code on VerifyForm
6. Server validates code → sets emailVerified = true
7. User can now log in and use AI chat
```

### Phone verification

```
1. User registers with phone + password
2. Server creates user (phoneVerified = false), generates random 6-digit code
3. Server stores code in verification_codes (type=PHONE, expires in 10 min)
4. Server sends code via Twilio SMS
5. User enters code on VerifyForm
6. Server validates code → sets phoneVerified = true
7. User can now log in and use AI chat
```

### Resend logic

- Users can request a new code, but only after a 60-second cooldown (enforced server-side by checking the most recent code's `created_at`)
- Max 5 verification attempts per code before it is invalidated

---

## 7. Account Creation, Login & Session Management

### Registration flow

1. `POST /api/auth/register` with `{ email?, phone?, password, displayName }`
2. Validate: at least one of email/phone provided, password meets complexity rules (8+ chars, 1 uppercase, 1 number)
3. Hash password with **bcrypt** (cost factor 12)
4. Insert user row
5. Send verification code (email or phone)
6. Return `{ message: "Verification code sent", userId }`

### Login flow

1. `POST /api/auth/login` with `{ identifier, password }` — identifier is email or phone
2. Look up user by email or phone
3. Verify password against hash
4. Check that email or phone is verified; reject if not
5. Generate access token (JWT, 15 min) and refresh token (opaque, 7 days)
6. Store refresh token hash in `refresh_tokens`
7. Return `{ accessToken, refreshToken, user: { id, displayName, email, phone } }`

### Token refresh

1. `POST /api/auth/refresh` with `{ refreshToken }`
2. Hash the provided token, look up in `refresh_tokens`
3. Verify not expired and not revoked
4. Issue new access token; optionally rotate the refresh token
5. Return `{ accessToken, refreshToken? }`

### Logout

1. `POST /api/auth/logout` with `{ refreshToken }`
2. Revoke the refresh token in the database
3. Client clears tokens from memory/storage

### Session management details

- **Access token** (JWT): contains `sub` (userId), `displayName`, `iat`, `exp`. Signed with HS256 using the `JWT_SECRET`.
- **Refresh token**: 64 random bytes, base64url-encoded. Only the **bcrypt hash** is stored in the database. Never logged.
- **Concurrent sessions**: allowed (each device gets its own refresh token). Logout revokes only the presented token. A "logout everywhere" endpoint can revoke all tokens for a user.

---

## 8. AI Usage Rate Limiting

### How usage is tracked

Each user has one row in `ai_usage`:

| Column | Purpose |
|--------|---------|
| `user_id` | Foreign key to users |
| `usage_count` | Number of AI requests in the current window |
| `window_start` | Timestamp when the current 1-hour window began |

### Request lifecycle

```
1. Authenticated user sends POST /api/ai/chat
2. JwtAuthenticationFilter validates the access token
3. AiChatController calls AiUsageService.checkAndIncrement(userId)
4. AiUsageService logic:
   a. SELECT usage_count, window_start FROM ai_usage WHERE user_id = ?
   b. If no row exists → INSERT (user_id, usage_count=1, window_start=NOW())
   c. If row exists and window_start is older than 1 hour → reset:
      UPDATE SET usage_count = 1, window_start = NOW()
   d. If row exists and window is still active:
      - If usage_count >= 10 → throw RateLimitExceededException
      - Else → UPDATE SET usage_count = usage_count + 1
5. If allowed, AiChatService calls OpenAI and returns the response
6. If rate-limited, return 429 with JSON:
   { "error": "Rate limit exceeded", "retryAfterSeconds": <seconds until window resets> }
```

### Hourly reset logic

The reset is **lazy** — there is no background cron job. When a user makes a request:

- If `NOW() - window_start >= 1 hour`, the count resets to 1 and `window_start` is set to `NOW()`
- This is simple, stateless, and avoids the need for a scheduled task

The frontend displays remaining uses and the reset time via `GET /api/ai/chat/usage`:

```json
{
  "used": 7,
  "limit": 10,
  "remaining": 3,
  "resetsAt": "2026-04-08T15:30:00Z"
}
```

### Concurrency safety

Use optimistic locking or a database-level `UPDATE ... WHERE usage_count < 10` to prevent race conditions from concurrent requests:

```sql
UPDATE ai_usage
SET usage_count = usage_count + 1
WHERE user_id = :userId
  AND usage_count < 10
  AND window_start > NOW() - INTERVAL '1 hour';
```

If 0 rows updated, either the window expired (reset it) or the limit was reached (return 429).

---

## 9. Security Considerations

### Password security
- **Bcrypt** with cost factor 12 for password hashing
- Minimum 8 characters, at least 1 uppercase letter, 1 number
- Never log or return passwords in API responses

### Token security
- Access tokens: short-lived (15 min), signed with HS256, stored in memory only (not localStorage)
- Refresh tokens: stored hashed in DB, transmitted over HTTPS only
- JWT secret: minimum 256-bit, loaded from environment variable

### Brute-force protection
- **Login**: max 5 failed attempts per identifier per 15 minutes. After 5 failures, lock the account for 15 minutes. Return generic "Invalid credentials" message (don't reveal whether the account exists).
- **Verification codes**: max 5 attempts per code. After 5 failures, invalidate the code and require a resend.
- **Registration**: max 3 registrations per IP per hour to prevent mass account creation.

### Verification abuse prevention
- Verification codes expire after 10 minutes
- 60-second cooldown between resend requests
- Max 5 codes per user per day

### API security
- All endpoints served over HTTPS
- CORS restricted to known frontend origins (already in `CorsConfig.java`)
- Input validation on all request DTOs (email format, phone format, string lengths)
- SQL injection prevented by Spring Data JPA parameterized queries
- XSS prevented by not rendering raw HTML from API responses

### Rate limiting (global)
- Add a global rate limiter (e.g., Bucket4j or Spring Cloud Gateway) at the API gateway level: 100 requests/min per IP across all endpoints
- This is separate from the per-user AI usage limit

---

## 10. API Endpoints

### Auth endpoints (public)

| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/auth/register` | Create account |
| POST | `/api/auth/login` | Log in, receive tokens |
| POST | `/api/auth/refresh` | Refresh access token |
| POST | `/api/auth/logout` | Revoke refresh token |

### Verification endpoints (public)

| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/auth/verify` | Submit 6-digit verification code |
| POST | `/api/auth/verify/resend` | Resend verification code |

### AI Chat endpoints (authenticated)

| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/ai/chat` | Send message to Testy (auth required, usage-limited) |
| GET | `/api/ai/chat/usage` | Get current usage count and reset time |

### User endpoints (authenticated)

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/users/me` | Get current user profile |
| PUT | `/api/users/me` | Update display name |
| POST | `/api/users/me/password` | Change password |

### Existing endpoints (remain public, no auth required)

- `GET /api/health`
- `GET /api/exams`, `GET /api/exams/{id}/subjects`
- `GET /api/subjects/{id}`
- `GET /api/resources`, `GET /api/resources/{id}`

---

## 11. Third-Party Services

| Service | Purpose | Pricing notes |
|---------|---------|---------------|
| **SendGrid** | Email verification codes | Free tier: 100 emails/day — sufficient for early launch |
| **Twilio** | SMS verification codes | ~$0.0079/SMS in US. Budget ~$50/mo for moderate signups |
| **OpenAI** | AI chat (already in use) | Already paying; no change |

### Why not Firebase Auth / Auth0 / Clerk / Supabase?

The project already has a Spring Boot backend and PostgreSQL. Adding a third-party auth provider would:
- Introduce a separate user store that must be synced with the app database
- Add complexity for the AI usage tracking (which needs a local user ID foreign key)
- Increase costs (most charge per MAU beyond free tier)

Self-managed auth with Spring Security + JWT is the simpler path here. If the project scales significantly, migrating to a managed provider can be revisited.

---

## 12. Implementation Stages

### Stage 1: Backend Foundation
**Database, entities, security config, and JWT infrastructure**

1. Add Spring Security, JWT (jjwt), SendGrid, Twilio, and WebFlux dependencies to `pom.xml`
2. Create Flyway migration `V7__add_auth_tables.sql` with all four new tables (`users`, `verification_codes`, `refresh_tokens`, `ai_usage`)
3. Create JPA entities: `User`, `VerificationCode`, `RefreshToken`, `AiUsage`
4. Create Spring Data repositories for each entity
5. Create DTOs: `RegisterRequest`, `LoginRequest`, `AuthResponse`, `VerifyRequest`, `RefreshRequest`
6. Implement `JwtService` (generate/validate access tokens)
7. Implement `JwtAuthenticationFilter` (extract JWT from `Authorization` header, set Spring Security context)
8. Configure `SecurityConfig` (permit public endpoints, require auth on protected endpoints)
9. Add auth-related properties to `application.properties` (JWT secret, token expiration, SendGrid/Twilio/OpenAI keys, AI usage limit)
10. Test: verify migration runs, entities map correctly, security config permits/blocks correctly

### Stage 2: Auth Endpoints & Verification
**Registration, login, session management, email/phone verification**

1. Implement `AuthService` (register, login, refresh, logout, password hashing with bcrypt)
2. Implement `AuthController` (register, login, refresh, logout endpoints)
3. Implement `VerificationService` (generate 6-digit codes, validate codes, resend with cooldown)
4. Integrate SendGrid SDK for email verification delivery
5. Integrate Twilio SDK for SMS verification delivery
6. Implement `VerificationController` (verify, resend endpoints)
7. Add login attempt tracking and account locking (5 failed attempts → 15-min lock)
8. Add registration rate limiting per IP (3 registrations/hour)
9. Add user profile endpoints (`GET /api/users/me`, `PUT /api/users/me`, `POST /api/users/me/password`)
10. Test: full registration → verify → login → refresh → logout flow

### Stage 3: AI Chat Migration & Usage Limiting
**Move AI chat to Spring Boot, per-user usage tracking, rate enforcement**

1. Implement `AiChatService` (port OpenAI call logic from `aiChatPlugin.ts` to Java using WebClient)
2. Implement `AiUsageService` (check/increment usage, lazy hourly window reset, atomic SQL updates)
3. Implement `AiChatController` (`POST /api/ai/chat` and `GET /api/ai/chat/usage` — both require auth)
4. Add `RateLimitExceededException` and map to 429 response in `GlobalExceptionHandler`
5. Add global API rate limiting (Bucket4j: 100 requests/min per IP)
6. Test: send 10 messages, verify 11th is rejected with correct `retryAfterSeconds`, verify reset after 1 hour

### Stage 4: Frontend Integration & Hardening
**Auth UI, protected routes, AI chat updates, E2E testing**

1. Create `AuthContext` with token management and silent refresh on app load
2. Create `LoginForm`, `RegisterForm`, `VerifyForm` components
3. Create `LoginPage` and `RegisterPage`
4. Create `ProtectedRoute` wrapper component
5. Add auth routes in the app router
6. Update `api.ts` to attach `Authorization: Bearer` headers via interceptor
7. Update `AiChat.tsx` to use the new backend endpoint and display per-user usage/reset timer
8. Remove `web/plugins/aiChatPlugin.ts` and its registration in `vite.config.ts`
9. Update CORS config and `docker-compose.yml` with new environment variables
10. Add input validation annotations on all DTOs (`@Email`, `@Size`, `@Pattern`)
11. Write integration tests (Spring Boot Test) and E2E tests (Playwright or Cypress)
12. Test: full end-to-end flow from registration through AI usage limit enforcement

---

## 13. Deployment & Testing

### Environment variables to add

```
# Production (Render)
JWT_SECRET=<generate 256-bit random key>
SENDGRID_API_KEY=<from SendGrid dashboard>
TWILIO_ACCOUNT_SID=<from Twilio console>
TWILIO_AUTH_TOKEN=<from Twilio console>
TWILIO_PHONE_NUMBER=<purchased Twilio number>
OPENAI_API_KEY=<already exists, move to backend>
```

### Database migration

- Flyway handles it automatically on Spring Boot startup
- Test migration on a staging database before deploying to production

### Testing strategy

| Layer | What to test | Tool |
|-------|-------------|------|
| Unit | JwtService, AuthService, AiUsageService | JUnit 5 + Mockito |
| Integration | Full auth flow, database interactions | Spring Boot Test + Testcontainers (PostgreSQL) |
| API | All endpoints (happy path + error cases) | MockMvc or REST Assured |
| Frontend | Auth forms, protected routes, usage display | React Testing Library |
| E2E | Register → verify → login → use AI → hit limit | Playwright or Cypress |

### Pre-deployment checklist

- [ ] All tests passing
- [ ] Flyway migration tested on staging DB
- [ ] Environment variables set in Render
- [ ] CORS config updated for production domain
- [ ] SendGrid sender verified
- [ ] Twilio phone number purchased and verified
- [ ] JWT secret generated and stored securely
- [ ] HTTPS enforced on all endpoints
- [ ] Rate limiting verified under load
- [ ] Verification email/SMS templates reviewed
- [ ] Error messages don't leak sensitive info (no stack traces, no "user not found" vs "wrong password")
