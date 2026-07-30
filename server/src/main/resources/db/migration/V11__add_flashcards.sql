-- User-created flashcards. Premade cards are derived client-side from the
-- practice problem data and are never stored here.
CREATE TABLE flashcards (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL,
    subject_id BIGINT NOT NULL,
    question VARCHAR(1000) NOT NULL,
    answer VARCHAR(2000) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (subject_id) REFERENCES subjects(id) ON DELETE CASCADE
);

-- Every read is "this user's cards for this subject, newest first".
CREATE INDEX idx_flashcards_user_subject ON flashcards (user_id, subject_id, created_at DESC);
