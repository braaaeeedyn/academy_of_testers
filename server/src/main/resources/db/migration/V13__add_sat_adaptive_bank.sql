-- SAT adaptive engine: skill taxonomy, prerequisite graph, and the question bank.
-- See SAT_ADAPTIVE_ENGINE.md §3, §5. v1 seeds eight domain skills; sub_skill and
-- parent_skill_id exist for a later split but stay unused/NULL.

CREATE TABLE sat_skills (
    id              VARCHAR(64) PRIMARY KEY,
    parent_skill_id VARCHAR(64) REFERENCES sat_skills(id) ON DELETE CASCADE,
    name            VARCHAR(100) NOT NULL,
    display_order   SMALLINT     NOT NULL,
    created_at      TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Directed edges: prerequisite_id is a prerequisite of skill_id.
CREATE TABLE sat_skill_prerequisites (
    skill_id        VARCHAR(64) NOT NULL REFERENCES sat_skills(id) ON DELETE CASCADE,
    prerequisite_id VARCHAR(64) NOT NULL REFERENCES sat_skills(id) ON DELETE CASCADE,
    strength        REAL        NOT NULL DEFAULT 1.0,
    PRIMARY KEY (skill_id, prerequisite_id),
    CONSTRAINT chk_no_self_prerequisite CHECK (skill_id <> prerequisite_id),
    CONSTRAINT chk_strength_range       CHECK (strength > 0.0 AND strength <= 1.0)
);

-- The question bank. correct_index, accepted_answers, and irt_* never leave the server.
CREATE TABLE sat_questions (
    id               VARCHAR(64) PRIMARY KEY,
    skill_id         VARCHAR(64) NOT NULL REFERENCES sat_skills(id) ON DELETE CASCADE,
    sub_skill        VARCHAR(64),
    stem             TEXT        NOT NULL,
    explanation      TEXT        NOT NULL,

    answer_type      VARCHAR(4)  NOT NULL,
    options          JSONB,
    correct_index    SMALLINT,
    accepted_answers JSONB,

    difficulty       VARCHAR(6)  NOT NULL,
    irt_a            REAL        NOT NULL DEFAULT 1.0,
    irt_b            REAL        NOT NULL,
    irt_c            REAL        NOT NULL,

    is_diagnostic    BOOLEAN     NOT NULL DEFAULT FALSE,
    active           BOOLEAN     NOT NULL DEFAULT TRUE,

    attempts         INTEGER     NOT NULL DEFAULT 0,
    correct_count    INTEGER     NOT NULL DEFAULT 0,

    source           VARCHAR(120),
    created_at       TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT chk_difficulty  CHECK (difficulty IN ('easy', 'medium', 'hard')),
    CONSTRAINT chk_answer_type CHECK (answer_type IN ('mc', 'grid')),
    CONSTRAINT chk_answer_shape CHECK (
        (answer_type = 'mc'
            AND options IS NOT NULL AND jsonb_array_length(options) = 4
            AND correct_index BETWEEN 0 AND 3
            AND accepted_answers IS NULL)
     OR (answer_type = 'grid'
            AND options IS NULL AND correct_index IS NULL
            AND accepted_answers IS NOT NULL AND jsonb_array_length(accepted_answers) >= 1)
    ),
    CONSTRAINT chk_diagnostic_is_mc CHECK (NOT is_diagnostic OR answer_type = 'mc')
);

CREATE INDEX idx_sat_questions_skill      ON sat_questions (skill_id) WHERE active;
CREATE INDEX idx_sat_questions_diagnostic ON sat_questions (skill_id, difficulty) WHERE is_diagnostic;
CREATE UNIQUE INDEX uq_sat_diagnostic_slot
    ON sat_questions (skill_id, difficulty) WHERE is_diagnostic;

-- --- seed the eight skills (radar axis order) ---
INSERT INTO sat_skills (id, name, display_order) VALUES
    ('arithmetic-percentages', 'Arithmetic & Percentages', 1),
    ('algebra-equations',      'Algebra & Equations',      2),
    ('linear-functions',       'Linear Functions',         3),
    ('systems-of-equations',   'Systems of Equations',     4),
    ('quadratics-polynomials', 'Quadratics & Polynomials', 5),
    ('exponential-functions',  'Exponential Functions',    6),
    ('data-statistics',        'Data & Statistics',        7),
    ('geometry-trigonometry',  'Geometry & Trigonometry',  8);

-- --- seed the prerequisite graph (§3) ---
INSERT INTO sat_skill_prerequisites (skill_id, prerequisite_id, strength) VALUES
    ('algebra-equations',      'arithmetic-percentages', 1.0),
    ('linear-functions',       'algebra-equations',      1.0),
    ('systems-of-equations',   'algebra-equations',      1.0),
    ('systems-of-equations',   'linear-functions',       1.0),
    ('quadratics-polynomials', 'algebra-equations',      1.0),
    ('exponential-functions',  'algebra-equations',      1.0),
    ('exponential-functions',  'quadratics-polynomials', 1.0),
    ('data-statistics',        'arithmetic-percentages', 1.0),
    ('geometry-trigonometry',  'algebra-equations',      1.0);
