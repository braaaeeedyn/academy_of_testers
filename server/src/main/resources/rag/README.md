# RAG corpus source files

This folder is the **reviewable source of truth** for the retrieval corpus (same idea as
`resources/sat/bank/`). Each `*.json` file is a ready-to-POST request body for
`POST /api/ai/rag/chunks` — i.e. an object with a `chunks` array. Edit these files, then ingest
them (see "Ingesting" below). Re-ingesting the same `refId` overwrites and re-embeds it, so this is
idempotent.

## The three corpora

| corpus        | feeds            | chunk by                  | key metadata                                  |
|---------------|------------------|---------------------------|-----------------------------------------------|
| `ap_rubric`   | essay grader     | scoring dimension (1 row) | `subject`, `dimension`, `promptId` (optional) |
| `ap_exemplar` | essay grader     | essay + score band        | `subject`, `promptId`, `scoreBand`            |
| `curriculum`  | study assistant  | skill node                | `skillId`, `subject` (optional)               |

Keep each chunk small — roughly **300–500 tokens** (~1200–2000 characters). Smaller = more precise
retrieval.

## Field reference

- `corpus` (required): one of `ap_rubric`, `ap_exemplar`, `curriculum`.
- `refId` (required): unique-within-corpus id. **This is the citation students effectively see**, so
  make it readable, e.g. `APLANG-RA:thesis`, `exemplar:aplang-2021-q1:band-5-6`,
  `curriculum:linear-functions:slope-intercept`.
- `subject`: must match the app's subject name **exactly**. Valid AP names include
  `AP English Language`, `AP US History`, `AP Biology`, … and `SAT Math`.
- `promptId`: a stable id for a specific prompt (e.g. `aplang-2021-q1`). On rubric rows that apply to
  every prompt of that type, **omit it** so they match all prompts. On exemplars, set it.
- `dimension` (rubric): the scoring row, e.g. `thesis`, `evidence-commentary`, `sophistication`.
- `scoreBand` (exemplar): e.g. `1-2`, `3-4`, `5-6`.
- `skillId` (curriculum): one of the 8 SAT Math skill ids:
  `arithmetic-percentages`, `algebra-equations`, `linear-functions`, `systems-of-equations`,
  `quadratics-polynomials`, `exponential-functions`, `data-statistics`, `geometry-trigonometry`.
- `title`: short human label (shown in the grader UI / used by chat).
- `content` (required): the actual text to embed and retrieve.

> ⚠️ The `*.example.json` files are **starter scaffolding with placeholder wording**. Replace the
> `content` with the official rubric text / real exemplars / your real lesson content before relying
> on grades. Rename them (drop `.example`) once they hold real content.

## Ingesting

From the repo root, with the backend running and your tokens exported
(`TOKEN`, `RAG_INGEST_TOKEN`):

```bash
bash tools/rag-ingest/ingest.sh server/src/main/resources/rag/rubrics/aplang.example.json
# or ingest every json file under the rag folder:
bash tools/rag-ingest/ingest.sh
```

Then check counts:

```bash
curl -s http://localhost:8080/api/ai/rag/stats \
  -H "Authorization: Bearer $TOKEN" -H "X-Ingest-Token: $RAG_INGEST_TOKEN"
```
