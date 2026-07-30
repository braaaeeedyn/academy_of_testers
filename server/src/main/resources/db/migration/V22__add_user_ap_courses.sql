-- Per-user AP course selections for the personalized AP planner.
CREATE TABLE user_ap_courses (
    user_id    BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    subject_id BIGINT NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
    added_at   TIMESTAMP NOT NULL DEFAULT now(),
    PRIMARY KEY (user_id, subject_id)
);

CREATE INDEX idx_user_ap_courses_user ON user_ap_courses(user_id);
