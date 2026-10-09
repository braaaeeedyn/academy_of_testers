# AI / Data / ML feature ideas for Academy of Testers

Backlog of ways to add or surface AI Engineering, Data Engineering, Data Science,
and ML Engineering capabilities on the site. Grouped by the discipline each one
best demonstrates. The existing base to build on: the pure-function IRT adaptive
engine (`com.aot.sat.engine`), the RAG grounding layer (Postgres + in-app cosine),
OpenAI embeddings, and the FRQ-grader A/B eval harness (`eval/frq-grader`).

Highest-impact, lowest-risk first two: **source-citation UI** and **streaming
responses** — both build directly on what already exists.

---

## ML Engineering

- **Surface the adaptive IRT engine as a visible feature.** A "recommended next
  question" or difficulty-calibration explainer. The engine + mastery radar
  already exist; expose *why* a question was chosen.
- **Model eval dashboard.** Turn the FRQ grader A/B harness (QWK 0.62, ~23% error
  reduction vs. naive baseline) into a live admin page showing grading accuracy
  over time. Strong portfolio piece.
- **Auto-recalibration of `irt_b`** from accumulated `sat_responses` — a scheduled
  job; the natural extension of the adaptive engine.

## AI Engineering

- **Streaming responses on `/testy`** (SSE) instead of wait-for-full-reply. Biggest
  UX upgrade for the chat.
- **Cite-your-sources UI.** RAG already retrieves rubric/exemplar/curriculum chunks
  — render "grounded in: [chunk]" pills under answers. Makes the RAG visible and
  builds trust.
- **Tool-use / function calling.** Let Testy pull a real practice question from the
  bank or the student's own mastery data mid-conversation.
- **Personalized grounding.** Inject the student's weakest skills (from
  `MasteryService`) into the chat context so Testy targets their gaps.

## Data Engineering

- **Ingestion pipeline as a proper job.** Ingestion is currently a manual local
  `python tools/rag-ingest/ingest.py` run. Make it scheduled/idempotent, with the
  `/reembed` reconciliation step already built in.
- **Corpus coverage / health dashboard.** Extend the `/api/ai/rag/stats` endpoint
  into per-subject chunk counts, null-embedding detection, and staleness. Closes
  the loop on the embedding-failure class of bug (see obs 1270).
- **Analytics warehouse.** Aggregate `sat_responses` into study-time / accuracy
  trends for a student progress page.

## Data Science

- **Learning analytics.** Forgetting-curve visualizations (decay is already applied
  lazily in `MasteryService`), predicted score bands, "you're on track for X"
  projections.
- **Question-quality analysis.** Flag items with anomalous response patterns (too
  easy/hard, or IRT-misfitting) for review — feeds back into the question-bank
  pipeline.
- **Essay-grading insight.** Cluster common FRQ mistakes across students and show
  aggregate feedback themes.

---

## Where these plug in (quick reference)

| Area | Existing code to extend |
|---|---|
| IRT / adaptive | `server/.../com/aot/sat/engine/`, `MasteryService`, mastery radar SVG in `web/` |
| RAG chat | `AiChatService.java`, `RagAdminController.java`, `web/src/pages/TestyPage.tsx` |
| Ingestion | `tools/rag-ingest/ingest.py`, corpus JSON in `server/src/main/resources/rag/` |
| Grading eval | `eval/frq-grader/` |
| Student data | `sat_responses`, `sat_skill_weights` tables |

See `SAT_ADAPTIVE_ENGINE.md` before touching anything under `com.aot.sat`.
