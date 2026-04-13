-- Users table
CREATE TABLE users (
    id              BIGSERIAL PRIMARY KEY,
    email           VARCHAR(255) NOT NULL UNIQUE,
    password_hash   VARCHAR(255) NOT NULL,
    display_name    VARCHAR(100) NOT NULL,
    email_verified  BOOLEAN      NOT NULL DEFAULT FALSE,
    account_locked  BOOLEAN      NOT NULL DEFAULT FALSE,
    failed_login_attempts INTEGER NOT NULL DEFAULT 0,
    lock_expires_at TIMESTAMP,
    created_at      TIMESTAMP    NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMP    NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_users_email ON users (email);

-- Verification codes (email only)
CREATE TABLE verification_codes (
    id              BIGSERIAL PRIMARY KEY,
    user_id         BIGINT       NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    code            VARCHAR(6)   NOT NULL,
    type            VARCHAR(10)  NOT NULL DEFAULT 'EMAIL',
    expires_at      TIMESTAMP    NOT NULL,
    used            BOOLEAN      NOT NULL DEFAULT FALSE,
    attempts        INTEGER      NOT NULL DEFAULT 0,
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
CREATE INDEX idx_refresh_tokens_token_hash ON refresh_tokens (token_hash);

-- AI usage tracking (one row per user, lazy hourly reset)
CREATE TABLE ai_usage (
    id              BIGSERIAL PRIMARY KEY,
    user_id         BIGINT       NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    usage_count     INTEGER      NOT NULL DEFAULT 0,
    window_start    TIMESTAMP    NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_ai_usage_user UNIQUE (user_id)
);
