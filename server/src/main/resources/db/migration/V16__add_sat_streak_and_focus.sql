-- Streak "repair" tokens and focused (per-skill) practice sessions.
-- Daily activity and earned repairs are derived from response history; this table
-- only records repairs the student has spent to restore a specific missed day.

CREATE TABLE sat_streak_repairs (
    id            BIGSERIAL PRIMARY KEY,
    user_id       BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    repaired_date DATE   NOT NULL,
    created_at    TIMESTAMP NOT NULL DEFAULT now(),
    CONSTRAINT uq_sat_repair_user_date UNIQUE (user_id, repaired_date)
);

CREATE INDEX idx_sat_repairs_user ON sat_streak_repairs (user_id);

-- Optional skill focus for a practice session; null means the normal adaptive mix.
ALTER TABLE sat_sessions
    ADD COLUMN focus_skill_id VARCHAR(64) REFERENCES sat_skills(id) ON DELETE SET NULL;
