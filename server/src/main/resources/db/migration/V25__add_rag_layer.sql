-- Retrieval-Augmented Generation layer, shared by the essay grader and the study assistant.
--
-- Vectors live in Postgres, not a dedicated vector DB: the corpus is small (AP rubrics + a
-- handful of exemplars per prompt + per-skill curriculum), so cosine ranking happens in a pure
-- Java engine (com.aot.rag.engine.VectorMath) over candidate rows pre-filtered by metadata.
-- The embedding is stored as a JSON array of floats in a TEXT column so no pgvector extension
-- is required; swapping to pgvector later is a repository-layer change, not a schema rethink.

CREATE TABLE rag_chunks (
    id              BIGSERIAL   PRIMARY KEY,

    -- Which retrieval corpus this belongs to. 'ap_rubric' and 'ap_exemplar' feed the essay
    -- grader; 'curriculum' feeds the study assistant.
    corpus          VARCHAR(32) NOT NULL,

    -- Retrieval filters. Which of these are populated depends on the corpus:
    --   ap_rubric   -> subject, prompt_id (optional), dimension
    --   ap_exemplar -> subject, prompt_id, score_band
    --   curriculum  -> skill_id (+ optional subject)
    subject         VARCHAR(120),
    prompt_id       VARCHAR(120),
    skill_id        VARCHAR(64),
    dimension       VARCHAR(64),
    score_band      VARCHAR(32),

    -- Human-facing label used as the citation id the model must quote (e.g. "APLANG-RA:thesis"
    -- or "exemplar:aplang-2021-q1:band-5-6"). Unique so citations are unambiguous.
    ref_id          VARCHAR(160) NOT NULL,
    title           VARCHAR(255),

    content         TEXT        NOT NULL,
    token_estimate  INTEGER     NOT NULL DEFAULT 0,

    -- JSON array of floats, e.g. "[0.0123,-0.045,...]". NULL until embed_chunk runs.
    embedding       TEXT,
    embedding_model VARCHAR(64),
    embedding_dims  INTEGER,

    active          BOOLEAN     NOT NULL DEFAULT TRUE,
    created_at      TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT uq_rag_chunk_ref UNIQUE (corpus, ref_id),
    CONSTRAINT chk_rag_corpus CHECK (corpus IN ('ap_rubric', 'ap_exemplar', 'curriculum'))
);

-- Candidate pre-filtering happens on these before cosine ranking in the app.
CREATE INDEX idx_rag_chunks_grader ON rag_chunks (corpus, subject, prompt_id) WHERE active;
CREATE INDEX idx_rag_chunks_skill  ON rag_chunks (corpus, skill_id)          WHERE active;

-- Retrieval quality log (plan step 6 / step 5): one row per grading or chat call that used
-- retrieval, recording exactly which chunks were pulled so a weekly spot-check can confirm the
-- retrieved context actually matched the essay's subject/prompt or the student's skill.
CREATE TABLE rag_retrieval_log (
    id            BIGSERIAL   PRIMARY KEY,
    user_id       BIGINT      REFERENCES users(id) ON DELETE SET NULL,

    -- 'frq_grade' or 'chat'.
    call_kind     VARCHAR(32) NOT NULL,
    corpus        VARCHAR(32) NOT NULL,

    subject       VARCHAR(120),
    prompt_id     VARCHAR(120),
    skill_id      VARCHAR(64),

    -- JSON array of the chunk ref_ids returned, in rank order, with similarity scores. Stored as
    -- text (cast with hits::jsonb in review queries) so JPA writes it without a jsonb bind cast.
    hits          TEXT        NOT NULL,
    hit_count     INTEGER     NOT NULL DEFAULT 0,

    created_at    TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_rag_log_review ON rag_retrieval_log (call_kind, subject, created_at);
