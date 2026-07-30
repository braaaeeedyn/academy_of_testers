-- SAT adaptive engine: per-student diagnostic, weight vector, sessions, and audit trail.
-- See SAT_ADAPTIVE_ENGINE.md §5.

CREATE TABLE sat_diagnostic_attempts (
    id           BIGSERIAL PRIMARY KEY,
    user_id      BIGINT    NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    started_at   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP,
    CONSTRAINT uq_sat_diagnostic_user UNIQUE (user_id)
);

CREATE TABLE sat_diagnostic_responses (
    id             BIGSERIAL PRIMARY KEY,
    attempt_id     BIGINT      NOT NULL REFERENCES sat_diagnostic_attempts(id) ON DELETE CASCADE,
    question_id    VARCHAR(64) NOT NULL REFERENCES sat_questions(id) ON DELETE CASCADE,
    selected_index SMALLINT    NOT NULL,
    correct        BOOLEAN     NOT NULL,
    answered_at    TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_sat_diag_response UNIQUE (attempt_id, question_id)
);

-- The weight vector. weight is meaningless without last_updated; always read through
-- MasteryService, which applies the forgetting curve.
CREATE TABLE sat_skill_weights (
    id            BIGSERIAL PRIMARY KEY,
    user_id       BIGINT      NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    skill_id      VARCHAR(64) NOT NULL REFERENCES sat_skills(id) ON DELETE CASCADE,
    weight        REAL        NOT NULL,
    attempts      INTEGER     NOT NULL DEFAULT 0,
    correct_count INTEGER     NOT NULL DEFAULT 0,
    last_updated  TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_sat_weight_user_skill UNIQUE (user_id, skill_id),
    CONSTRAINT chk_weight_range         CHECK (weight > 0.0 AND weight < 1.0)
);

CREATE INDEX idx_sat_weights_user ON sat_skill_weights (user_id);

CREATE TABLE sat_sessions (
    id                  BIGSERIAL PRIMARY KEY,
    user_id             BIGINT      NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    target_length       SMALLINT    NOT NULL DEFAULT 10,
    questions_answered  SMALLINT    NOT NULL DEFAULT 0,
    correct_count       SMALLINT    NOT NULL DEFAULT 0,
    pending_question_id VARCHAR(64) REFERENCES sat_questions(id) ON DELETE SET NULL,
    started_at          TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
    completed_at        TIMESTAMP
);

CREATE INDEX idx_sat_sessions_user ON sat_sessions (user_id, started_at DESC);
CREATE UNIQUE INDEX uq_sat_session_open ON sat_sessions (user_id) WHERE completed_at IS NULL;

-- Append-only audit trail. Largest table; index for the recent-exclusion lookup.
CREATE TABLE sat_responses (
    id                  BIGSERIAL PRIMARY KEY,
    session_id          BIGINT      NOT NULL REFERENCES sat_sessions(id) ON DELETE CASCADE,
    user_id             BIGINT      NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    question_id         VARCHAR(64) NOT NULL REFERENCES sat_questions(id) ON DELETE CASCADE,
    selected_index      SMALLINT,
    answer_text         VARCHAR(32),
    correct             BOOLEAN     NOT NULL,
    weight_before       REAL        NOT NULL,
    weight_after        REAL        NOT NULL,
    theta_at_selection  REAL        NOT NULL,
    ms_elapsed          INTEGER,
    answered_at         TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_response_shape CHECK (
        (selected_index IS NOT NULL AND answer_text IS NULL AND selected_index BETWEEN 0 AND 3)
     OR (selected_index IS NULL AND answer_text IS NOT NULL)
    ),
    CONSTRAINT uq_sat_response_session_question UNIQUE (session_id, question_id)
);

CREATE INDEX idx_sat_responses_user_recent ON sat_responses (user_id, answered_at DESC);
