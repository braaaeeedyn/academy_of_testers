-- A named, user-owned subset of cards for one subject. Members may be the user's
-- own flashcards or premade cards, which live client-side and are referenced by
-- their stable string id (e.g. 'ap-biology-u1-q3').
CREATE TABLE stacks (
    id         BIGSERIAL PRIMARY KEY,
    user_id    BIGINT       NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    subject_id BIGINT       NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
    name       VARCHAR(100) NOT NULL,
    created_at TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_stacks_user_subject ON stacks (user_id, subject_id, created_at DESC);

CREATE TABLE stack_cards (
    id           BIGSERIAL PRIMARY KEY,
    stack_id     BIGINT  NOT NULL REFERENCES stacks(id) ON DELETE CASCADE,
    -- Deleting a flashcard silently drops it from every stack that held it.
    flashcard_id BIGINT  REFERENCES flashcards(id) ON DELETE CASCADE,
    premade_id   VARCHAR(120),
    position     INTEGER NOT NULL,

    -- Exactly one of the two references is set.
    CONSTRAINT chk_stack_card_target CHECK (
        (flashcard_id IS NOT NULL AND premade_id IS NULL)
     OR (flashcard_id IS NULL AND premade_id IS NOT NULL)
    )
);

CREATE INDEX idx_stack_cards_stack ON stack_cards (stack_id, position);

-- A card can appear at most once per stack.
CREATE UNIQUE INDEX uq_stack_cards_flashcard
    ON stack_cards (stack_id, flashcard_id) WHERE flashcard_id IS NOT NULL;
CREATE UNIQUE INDEX uq_stack_cards_premade
    ON stack_cards (stack_id, premade_id) WHERE premade_id IS NOT NULL;

-- Per-user mastery for a single card, keyed by 'user:<flashcardId>' or
-- 'premade:<premadeId>'. A card is mastered at 3 total correct AND a 2 streak.
CREATE TABLE card_progress (
    id             BIGSERIAL PRIMARY KEY,
    user_id        BIGINT       NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    subject_id     BIGINT       NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
    card_key       VARCHAR(140) NOT NULL,
    attempts       INTEGER      NOT NULL DEFAULT 0,
    correct_total  INTEGER      NOT NULL DEFAULT 0,
    correct_streak INTEGER      NOT NULL DEFAULT 0,
    mastered       BOOLEAN      NOT NULL DEFAULT FALSE,
    updated_at     TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT uq_card_progress_user_card UNIQUE (user_id, card_key)
);

CREATE INDEX idx_card_progress_user_subject ON card_progress (user_id, subject_id);
