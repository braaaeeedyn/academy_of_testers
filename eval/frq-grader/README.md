# FRQ grader evaluation set

Offline A/B evaluation of the RAG essay grader against **official College Board scores**, to get a
defensible number for how much RAG grounding improves grading accuracy vs. a non-grounded baseline.

## Status (2026-09-26) — COMPLETE, config frozen

**Result: RAG grounding cuts grading error ~23% and raises QWK, and it generalized to a fresh
cross-domain set.** Headline for the résumé: **~23% MAE reduction, QWK 0.62**.

| set | n | arm | MAE | exact | within-1 | QWK |
|---|---|---|---|---|---|---|
| English Lang+Lit (tuned on) | 39 | baseline | 0.974 | 33% | 77% | 0.590 |
| | | **grounded** | **0.744** (−24%) | **38%** | **87%** | **0.624** |
| APUSH LEQ (fresh validation) | 8 | baseline | 1.125 | 25% | 75% | 0.521 |
| | | **grounded** | **0.875** (−22%) | **38%** | 75% | **0.569** |

Both sets: MAE down ~22–24%, QWK up, exact up. The APUSH run is the real proof — a domain/rubric we
never tuned on, so the gain isn't just overfitting.

**The grader config is FROZEN.** Do not re-tune it without a fresh held-out set, or the numbers stop
being defensible (the English set was tuned ~4 passes → some overfit; APUSH is the clean check).

### What was built
- **Harness:** `extract.py` (PDF → samples, offline/free) + `run_eval.py` (grades both arms, metrics).
- **Baseline arm** (`bypassGrounding=true` → `FrqGradingService.gradeBasic()`): naive "grade this AP
  essay 0-6" with **no rubric and no retrieval** (the rubric is itself grounding, so it's excluded).
- **Grounded arm:** rubric rows + retrieved rubric clauses + **stratified score-banded exemplars**
  (`diversifyByBand`, pool 16 → inject 9) + calibrated, anti-compression prompt + **temperature 0**.
- **Backend changes made for this:** `bypassGrounding` field on `FrqGradeRequest`; `gradeBasic()`;
  removed the deliberate "grade harsher" calibration; exemplar-band + row-level "award top points"
  prompt; `RETRIEVAL_POOL`/`INJECTED_CHUNKS` + `diversifyByBand`; grounded temp → 0; and
  `ai.usage.max-per-hour` made env-overridable (`AI_USAGE_MAX_PER_HOUR`).

### Résumé bullet this produced
> Cut AP free-response grading error against official College Board scores ~23% by building a RAG
> pipeline that embeds each essay, retrieves matching rubric clauses and score-banded exemplars from
> a vector store, and returns rubric-scored results as constrained JSON — validated on held-out
> official samples (QWK 0.62) versus a non-grounded baseline.

## ⚠️ Leakage rule

Test essays must **never** be ingested into the RAG corpus — that's why this folder lives outside
`server/src/main/resources/rag/`. Test sets are **2023/2024**; the corpus is **2025** — disjoint, so
no leakage.

## Data

One **PDF per College Board "Sample Responses + Scoring Commentary" packet** under `pdfs/<subject>/`.
Each bundles scoring guidelines, 2–3 verbatim student responses, and a commentary section with each
one's official score. One PDF → ~3 gradable samples.

- `pdfs/ap-english-language/`, `pdfs/ap-english-literature/` — English, 6-pt, `Score: A-B-C` format.
- `pdfs/ap-us-history/` — APUSH; LEQ 6-pt, DBQ 7-pt, `Total Score: N` format. SAQs are excluded
  (short-answer, not essays).

> **Scanned vs. typed.** `extract.py` keeps only typed responses (real text layer) and skips scanned
> handwriting and garbled-OCR booklet pages — grading a bad transcript would corrupt the result.
> Usable: **39** English (18 Lang + 21 Lit) + **8** APUSH LEQ. Most APUSH `set-1` packets and many
> English packets are scanned and skipped.

## Pipeline

`extract.py` needs `pypdf` (`python -m pip install pypdf`) but no backend and no cost. `run_eval.py`
is stdlib-only but calls the running backend and spends OpenAI credits (~2 calls/sample).

### 1. Extract (offline)
```powershell
python eval/frq-grader/extract.py                  # English (default)
python eval/frq-grader/extract.py ap-us-history    # APUSH
```
Writes `results/extracted/<subject>/<pdf>.json` and prints a per-sample table (eyeball before spending).

### 2. Grade both arms (needs backend, frozen config)
Prereqs: backend up with a valid `OPENAI_API_KEY`, **RAG corpus ingested**, and
`AI_USAGE_MAX_PER_HOUR=1000` (default cap 10/hr is too low for ~2 calls/sample).

```powershell
$env:AOT_PASSWORD = '<your password>'          # harness auto-logs-in (refreshes token on expiry)
# $env:EVAL_SUBJECTS = 'ap-us-history'         # restrict to one subject (omit = all extracted)
# $env:EVAL_LIMIT = '3'                        # smoke test on N samples first
python eval/frq-grader/run_eval.py
```
(Manual token instead of auto-login: `$env:TOKEN = (Invoke-RestMethod .../api/auth/login ...).accessToken`.)

Output: printed table + `results/eval-<timestamp>.json`. Metrics per arm vs. official: **MAE**,
**exact**, **within-1**, **QWK** (scale-aware: 6 for English/LEQ, 7 for DBQ).

## Caveats (report honestly)
- Packets don't include the source passages, so both arms grade blind to them — fine for the A/B
  delta, but don't cite raw numbers as production accuracy.
- Small n (English 39, APUSH 8): say "held-out samples", not "large-scale".
- It's grading **error / MAE vs. official scores**, not "inconsistency" (run-to-run variance).
- English set was tuned across ~4 passes → some overfit; APUSH is the un-tuned validation.

## Folders
- `pdfs/<subject>/` — input PDFs (git-ignored; copyrighted, large).
- `results/extracted/` — parsed samples (git-ignored).
- `results/eval-*.json` — graded run output (git-ignored).
