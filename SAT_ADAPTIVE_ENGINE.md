# SAT Adaptive Learning Engine

> **Status:** design locked. **No code written yet.** Question bank import in progress.
> **Scope:** SAT Math only. Reading & Writing is explicitly out of scope for v1.
> **Questions:** pure text — LaTeX and characters. No images, figures, or diagrams, ever.
> **v1 ships multiple choice only.** Numeric fill-in questions are fully designed (§4.8, §9.5) and the
> schema holds them from day one, but no fill-in code is written and no fill-in question is authored
> until §10 Phase 6. The generator **rejects** them until then — see §9.6, rule 5.
> **Audience:** whoever (human or Claude) picks this up next. Read §0 first, then the whole thing
> before writing code.

---

## 0. Current progress

*Last updated: 2026-07-11. Update this section whenever the state below stops being true.*

### Where things actually stand

**Design is settled and Phases 1–4 are implemented, running, and verified end to end** against the live
Docker stack (Postgres + Spring Boot api + Vite frontend). A user can register, take the 24-question
diagnostic, see their radar chart, and run adaptive 10-question sessions. The bank holds 273 validated
questions with 24 diagnostics marked.

Verified on 2026-07-11 against a real authenticated user: diagnostic initializes the eight weights to
the §4.7 values; sessions serve questions weighted toward the weakest skills (IRT gap term); BKT raises
weights on correct answers and lowers them on misses; the audit trail records weight_before/after/theta;
the idempotency and completion guards return 400.

### Phase status (§10)

| Phase | State | Notes |
| --- | --- | --- |
| 1 — pure engine classes | **done** | `com.aot.sat.engine`: constants, BKT, forgetting, IRT, prereq, selector, diagnostic init. Pure, no Spring. |
| 2 — schema + bank | **done** | V13 (bank + skill/prereq seed), V14 (per-student state), V15 (generated 273-question seed). Applied cleanly. |
| 3 — diagnostic end to end | **done** | Services + `/api/sat/adaptive/*` + `DiagnosticFlow.tsx` + `MasteryRadar.tsx`. |
| 4 — adaptive loop | **done** | `AdaptiveSessionService` (§4.5), session endpoints, `AdaptiveSession.tsx`, `SessionSummary.tsx`. |
| 5 — instrumentation | not started | Audit trail is captured (sat_responses); no analytics/recalibration job yet. |
| 6 — fill-in questions | deliberately deferred | Do not start. See §10 Phase 6. |

### How to run it

1. `docker compose up -d` (Postgres + api; api applies V13–V15 on boot).
2. `cd web && npm run dev`, then open `/sat/adaptive` and sign in.

Rebuild the api after backend changes: `docker compose build api && docker compose up -d api`.

### Known simplifications (fine for v1, revisit later)

- **Selection recency**: `daysSinceSeen` is passed as −1 for all candidates, so the GAMMA seen-penalty
  is effectively off; the hard RECENT_EXCLUSION=30 window is what prevents repeats. Wire real
  last-seen timestamps when tuning.
- **Grid items**: none exist; the whole path is `mc`-only (Phase 6).
- **No JUnit**: engine correctness is by-construction + the end-to-end check above; `spring-boot-starter-test`
  was intentionally not added to avoid an offline-resolution risk. Add it when convenient (§10 Phase 1's
  property tests).

### What exists on disk

| Path | State |
| --- | --- |
| `SAT_ADAPTIVE_ENGINE.md` | this document — complete |
| `server/src/main/resources/sat/bank/README.md` | authoring guide — complete |
| `server/src/main/resources/sat/bank/_TEMPLATE.json` | 3 worked examples + 1 blank; LaTeX verified through KaTeX |
| `server/src/main/resources/sat/bank/<skill>.json` × 8 | **populated: 273 questions, validated, 24 diagnostics marked** |
| `tools/sat-import/raw/practice-test-{4..11}.json` | 273 raw questions, pristine originals (provenance) |
| `tools/sat-import/diagnostics.json` | the 24 diagnostic picks, keyed by stable `source`; edit to reselect |
| `tools/sat-import/normalize.mjs` | converter: renumbers ids, wraps LaTeX, KaTeX-validates, stamps diagnostics |
| `tools/sat-import/normalized/` | per-file converted intermediates + `_id-map.json` (old→new id audit trail) |
| everything else | does not exist |

### Question bank: 273 questions, converted and validated

Eight practice tests (P4–P11) were imported into `tools/sat-import/raw/` and run through
`tools/sat-import/normalize.mjs`, which regroups them into the eight skill files. Re-run it any time
with `node tools/sat-import/normalize.mjs --apply`; it is deterministic and idempotent — so when the
raw files are corrected (as they were on 2026-07-11 to fix wrong `correctIndex` values), one re-run
propagates the fix. Final state, verified by strict KaTeX validation of every expression:

| Skill | easy | medium | hard | total |
| --- | --- | --- | --- | --- |
| `arithmetic-percentages` | 12 | 6 | 2 | 20 |
| `algebra-equations` | 21 | 26 | 16 | 63 |
| `linear-functions` | 8 | 22 | 8 | 38 |
| `systems-of-equations` | 4 | 5 | 6 | 15 |
| `quadratics-polynomials` | 4 | 17 | 17 | 38 |
| `exponential-functions` | 2 | 13 | 13 | 28 |
| `data-statistics` | 4 | 13 | 2 | 19 |
| `geometry-trigonometry` | 5 | 23 | 24 | 52 |
| **total** | 60 | 117 | 96 | **273** |

Target before launch is ≈40 per skill (~320 total). Half the skills are at/near target; the thin ones
to top up are `systems-of-equations` (15), `data-statistics` (19), `arithmetic-percentages` (20), and
`exponential-functions` (28). Every (skill, difficulty) cell now has at least two questions, so all 24
diagnostic slots are fillable.

### What the bank pipeline did (done)

1. **Id collisions — resolved.** P4–P6 were one continuous sequence; P7–P11 each restarted from `0001`,
   so e.g. `alg-0001` had named several different questions. The normalizer renumbers every prefix
   sequentially in file order (243 ids reassigned), giving 273 globally-unique ids. `_id-map.json`
   records every old→new mapping. Ids are now stable and must not change once seeding begins (§9).
2. **LaTeX — resolved.** P4–P10 had bare commands (`\frac`, `\sqrt`, `\newline`, …) that `MathText`
   would render as literal backslash text; P11 was already delimited but used literal `\n`. All math is
   now wrapped in `\( … \)`, `\newline`/`\n` removed, `\le`/`\ge` normalized, `%` escaped inside math.
   Every expression passes `katex.renderToString(…, { throwOnError: true, strict: 'error' })`.
3. **Answers corrected.** Raw files were reworked to fix wrong `correctIndex` values (2026-07-11); a
   re-run propagated them. Note: verified only that each `correctIndex` is a valid 0–3 slot, **not** that
   the keyed option is mathematically the right answer — a spot-audit of that is still worthwhile.
4. **Diagnostics selected.** The 24 diagnostic questions (one per skill × difficulty, all `mc`) are
   chosen in `tools/sat-import/diagnostics.json`, keyed by stable `source`, and stamped into the bank by
   the normalizer. Picks favor self-contained stems and avoid figure/table references; `stat`/`hard`
   necessarily uses a poll question that states all its data inline.

### Remaining bank tasks (optional, not blocking)

1. **Skim skill assignments.** e.g. an early P4 item asks which *system of inequalities* has `(8, 2)` as
   a solution but sits under `algebra-equations`. The id prefix is the skill, and skill drives the whole
   weight vector, so a quick audit is worth it. Any move changes the id, so do it before seeding.
2. **Top up the four thin skills** toward ~40 each before launch: `systems-of-equations` (15),
   `data-statistics` (19), `arithmetic-percentages` (20), `exponential-functions` (28). Phase 4, not 3.

### Next actions

The bank is ready; everything left is code. See §10 Phases 1–3. In order:

1. **Phase 1** — write the pure engine classes (`AdaptiveConstants`, `BayesianKnowledgeTracer`,
   `ForgettingCurve`, `ItemResponseTheory`, `PrerequisitePropagator`, `QuestionSelector`) with unit
   tests. No Spring, no DB. This is the highest-value next step and depends on nothing.
2. **Phase 2 (finish)** — write V13/V14 migrations and the `sat_skills` seed (§5), then the generator
   that emits `V15__seed_sat_questions.sql` from the bank (§9).
3. **Phase 3** — diagnostic end to end: services, endpoints, `DiagnosticFlow.tsx`, `MasteryRadar.tsx`.

### Decisions made along the way

These were live questions at some point and are now settled. Don't reopen them without new information.

| Decision | Outcome |
| --- | --- |
| Bank storage | Postgres, seeded via Flyway from JSON. Not the client bundle. |
| Skill granularity | The 8 domains, nothing finer. `sub_skill` column exists but is unused and unauthored. |
| Scope | SAT Math only. |
| IRT parameters | Hand-labeled easy/medium/hard → seeded `b`; recalibrate from response data later. |
| Diagnostic | Fixed 24 questions, 8 skills × 3 difficulties, multiple choice only. |
| Forgetting curve | Applied lazily on read, no scheduled job. |
| Radar chart | Hand-rolled SVG + the `motion` package. No charting library. |
| Session shape | Fixed sets of 10, reselected after every answer. |
| Fill-in questions | Designed in full, implementation deferred to Phase 6, generator rejects them. |
| Images / figures | Excluded permanently. Bank is text-only. |

---

### What "leave room for fill-in" concretely means

Some of it must be built now, because adding it later is expensive. The rest must **not** be built now,
because unused code rots.

| Build now | Defer to Phase 6 |
| --- | --- |
| `answer_type` column + the nullable column groups + `CHECK` constraints (V13) | `GridInAnswerChecker` |
| `answer_text` column on `sat_responses` (V14) | `GridInInput.tsx` |
| `P(G)` passed to BKT as an **argument**, never read from a constant | The grid branch of `QuestionCard.tsx` |
| `irt_c` as a per-item column, not a constant | Grid validation rules in the generator |
| `answerType` in `AdaptiveQuestionDTO` (always `"mc"` in v1) | Authoring any `"grid"` question |
| A generator rule that **rejects** `"grid"` items with a clear error | |

The rule that matters most is `P(G)`. If `BayesianKnowledgeTracer` hardcodes `0.25` today, Phase 6
means editing the one class whose correctness the entire engine rests on, and re-proving it. If it
takes `pGuess` as a parameter today, Phase 6 passes a different number. Same for `irt_c`. Parameterize
now; that costs nothing and it is the whole reason this document describes the fill-in math at all.

---

## 1. What this is

An adaptive practice engine for the SAT section of Academy of Testers. A logged-in student takes a
one-time diagnostic across all eight Math domains. That diagnostic initializes a **per-skill mastery
weight vector**. From then on, every question they answer updates that vector via **Bayesian
Knowledge Tracing (BKT)**, an **exponential forgetting curve** decays the vector between sessions, and
**Item Response Theory (IRT)** picks the next question by jointly maximizing *skill gap* and
*information gained at the student's current ability*. A live radar chart on the dashboard renders the
eight weights so progress is visible and measurable.

### Three non-negotiable constraints

1. **Authenticated only.** No anonymous access. Every endpoint sits behind `.authenticated()` in
   `SecurityConfig`. There is no local-storage fallback, no guest mode.
2. **All model math runs server-side.** The browser posts a `selectedIndex` and nothing else. It never
   receives a correct answer before submitting, never sees IRT difficulty parameters, and never
   computes a weight. The client is a renderer.
3. **The stored bank is the source of truth.** Questions live in Postgres, not in the JS bundle.

### Why those constraints

The existing practice quizzes ship `correctAnswer` to the client in
`web/src/data/topicalQuestions/*.ts`, which is fine for ungraded practice. An adaptive engine is
different: if the student can read `irt_b` and `correct_index` out of the bundle, the weight vector
becomes meaningless and the radar chart lies. The whole feature's value is that the number is honest.

---

## 2. Vocabulary

| Term | Meaning |
| --- | --- |
| **Skill** | One of the eight Math domains in v1. A row in `sat_skills`. |
| **Weight** (`w`) | A student's mastery of one skill, in `(0, 1)`. Formally BKT's `P(L)` — the probability the student has learned the skill. |
| **Weight vector** | The student's eight weights together. What the radar chart draws. |
| **Theta** (`θ`) | Ability on the IRT logit scale, derived from `w`. Used to score questions. |
| **Item** | A question, with IRT parameters `a`, `b`, `c` attached. |
| **Diagnostic** | The one-time 24-question intake test that initializes the vector. |
| **Session** | A run of 10 adaptively-selected questions. |
| **Mastery** | `w ≥ 0.85`. Displayed as a ring on the radar chart. |

---

## 3. The eight skills

These are the v1 skill set, and they are also the eight radar axes.

| `id` | Name | Prerequisites |
| --- | --- | --- |
| `arithmetic-percentages` | Arithmetic & Percentages | — (root) |
| `algebra-equations` | Algebra & Equations | `arithmetic-percentages` |
| `linear-functions` | Linear Functions | `algebra-equations` |
| `systems-of-equations` | Systems of Equations | `algebra-equations`, `linear-functions` |
| `quadratics-polynomials` | Quadratics & Polynomials | `algebra-equations` |
| `exponential-functions` | Exponential Functions | `algebra-equations`, `quadratics-polynomials` |
| `data-statistics` | Data & Statistics | `arithmetic-percentages` |
| `geometry-trigonometry` | Geometry & Trigonometry | `algebra-equations` |

### The sub-skill escape hatch

**Mastery is tracked at the level of these eight skills and nothing finer.** The weight vector has
exactly eight entries. A question's skill is determined by which bank file it lives in; there is no
per-question skill tag and no sub-skill tag. BKT, the forgetting curve, IRT selection, and the radar
chart all key off `skill_id`.

Domain-level prerequisite propagation is admittedly coarse — missing one quadratic question penalizes
*all of* Algebra & Equations. If the bank later grows big enough to justify splitting a skill
(`vertex-form`, `discriminant`, `polynomial-division`, …), the schema absorbs it without a migration:

- `sat_skills` has a self-referencing nullable `parent_skill_id`. v1 inserts eight rows with
  `parent_skill_id = NULL`. A future version inserts children — a data change.
- `sat_skill_prerequisites` is a separate edge table, so the prerequisite graph can gain depth without
  touching any other table.
- `sat_questions.sub_skill` exists, nullable and unread. v1 writes `NULL` to every row.

**Do not ask authors to tag `subSkill` today.** With a small bank there is no evidence for what the
taxonomy should be, and a guessed taxonomy is worse than none. Sub-skill tags are recoverable later
from the question text itself — a reader can infer `factoring` from `x² − 5x + 6 = 0` — which makes
this genuinely deferrable, unlike `source`, which is unrecoverable once forgotten. Defer it.

---

## 4. The math

Every constant below lives in exactly one place:
`server/src/main/java/com/aot/sat/engine/AdaptiveConstants.java`. Nothing hardcodes these inline.

### 4.1 BKT — updating a weight from one observation

Standard four-parameter BKT. `w` is the prior `P(L)`.

**Parameters**

| Symbol | Constant | Value | Meaning |
| --- | --- | --- | --- |
| `P(T)` | `P_TRANSIT` | `0.10` | Chance of learning the skill from this attempt |
| `P(S)` | `P_SLIP` | `0.10` | Chance of answering wrong despite knowing it |
| `P(G)` | `P_GUESS_MC` | `0.25` | Chance of a correct multiple-choice answer without knowing it (4 options) |
| `P(G)` | `P_GUESS_GRID` | `0.02` | Same, for a fill-in item — you cannot guess your way to `3/4` |

`P_GUESS_GRID` is defined in `AdaptiveConstants` from day one but is unreachable in v1, since no
`'grid'` item exists. It is here so that `BayesianKnowledgeTracer.update(w, correct, pGuess)` takes the
guess floor as an **argument** rather than reading a constant. Do not "simplify" that signature down to
`update(w, correct)` because only one value is currently passed — that is the single change that would
make Phase 6 expensive.

**`P(G)` depends on the item's `answer_type`, not on the skill.** A fill-in question carries almost no
guessing floor, which has two consequences that fall directly out of the formulas above:

- A **correct** fill-in answer moves the weight *up* much harder than a correct multiple-choice
  answer, because the alternative explanation ("they guessed") has been removed.
- An **incorrect** fill-in answer moves the weight *down* more gently, because
  `1 − P_GUESS_GRID ≈ 1`: nearly everyone who doesn't know it gets it wrong, so a miss is weaker
  evidence of not knowing than a miss on multiple choice.

Both are correct and desirable. This is the entire reason the guess parameter is per-item.

`P_GUESS_GRID` is `0.02` rather than `0.0` because a small floor absorbs coincidences — a student who
misreads the question and lands on the right number anyway. At exactly `0.0`, a correct answer drives
the posterior to `w' = 1.0` in one step, which the `[0.01, 0.99]` clamp would then have to rescue. Don't
set it to zero.

**Posterior after observing the answer**

```
correct:    w' = w(1 - P_SLIP) / [ w(1 - P_SLIP) + (1 - w)·P_GUESS ]

incorrect:  w' = w·P_SLIP / [ w·P_SLIP + (1 - w)(1 - P_GUESS) ]
```

**Then apply the learning transition** (they may have learned it by attempting it):

```
w'' = w' + (1 - w')·P_TRANSIT
```

**BKT is difficulty-blind.** A correct answer on a hard item and a correct answer on an easy item move
the weight by exactly the same amount, given the same `P(G)`. Difficulty enters through **which**
question gets asked (§4.4), never through how the answer is scored. This is standard and intentional;
don't "fix" it by scaling the update by `irt_b`, or difficulty gets counted twice.

Answer *format* does affect the update, via `P(G)`. Format and difficulty are different things.

### 4.2 Prerequisite penalty propagation

When an answer is **incorrect**, some of the drop propagates backward to prerequisite skills — getting
a systems-of-equations question wrong is weak evidence your underlying algebra is shaky.

Let `δ = w_before − w_after` (the drop, always positive on a miss). For each direct prerequisite `p` of
the answered skill `s`, with edge strength `σ_p ∈ (0, 1]` from `sat_skill_prerequisites`:

```
w_p := w_p − KAPPA · σ_p · δ
```

- `KAPPA = 0.35`
- **Depth 1 only.** Do not recurse. `systems-of-equations` penalizes `algebra-equations` and
  `linear-functions`, and stops there. Recursion makes every miss dribble down to
  `arithmetic-percentages` and the root skills sink for no reason.
- Correct answers do **not** propagate. Getting a hard systems question right says nothing you didn't
  already learn from the direct update, and propagating credit upward makes weights drift high.
- Each `w_p` must be decayed to *now* (§4.3) **before** the penalty is subtracted.

### 4.3 The forgetting curve

Weights decay toward a floor, not toward zero — you don't forget everything.

```
w_eff = FLOOR + (w_stored − FLOOR) · exp(−LAMBDA · Δt_days)
```

- `FLOOR = 0.20`
- `LAMBDA = 0.0112` per day

**Derivation of LAMBDA.** Target: a skill at `0.90`, untouched for 30 days, should read `≈ 0.70`.

```
0.70 = 0.20 + (0.90 − 0.20)·exp(−30λ)
0.50 / 0.70 = exp(−30λ)
λ = −ln(0.7143) / 30 = 0.0112
```

**Decay is applied lazily, on read.** There is no scheduled job. Each `sat_skill_weights` row stores a
value and a `last_updated` timestamp; every read computes `w_eff` from the elapsed time. A write
persists `w_eff` as the new stored value and stamps `last_updated = now()`.

Consequences, all good: no cron, no drift when a job is missed, exact for any elapsed interval, zero
cost for dormant students, and a student returning after six months gets a correct weight rather than
one that's been ground down by 180 nightly multiplications.

**The stored value is meaningless without its timestamp.** Never `SELECT weight` and use it directly.
Always go through `MasteryService.currentWeights(userId)`, which decays.

### 4.4 IRT — selecting the next question

**Ability.** Map the weight to the logit scale, clamping first so `θ` stays finite:

```
w_c = clamp(w, 0.02, 0.98)
θ_s = ln( w_c / (1 − w_c) )        # w=0.5 → θ=0 ;  w=0.9 → θ≈2.20
```

**Probability of a correct response** (3PL):

```
P(θ) = c + (1 − c) / (1 + exp(−a·(θ − b)))
```

v1 fixes `a = 1.0` (Rasch) for every item. The guessing parameter `c` mirrors BKT's `P(G)` and is set
by the item's format — `0.25` for multiple choice, `0.02` for fill-in — so `b` and `c` both vary. See
§4.6.

**Item information** — how much the answer will tell us. This is the formal version of "a question at
the edge of their ability":

```
I(θ) = a² · [ (P − c) / (1 − c) ]² · [ (1 − P) / P ]
```

Sanity check: at `c = 0` this collapses to `a²·P·(1 − P)`, which peaks at `P = 0.5`, i.e. `θ = b`.
With `c = 0.25` the peak shifts slightly above `b`. Information is highest where the outcome is least
predictable — exactly where a question is worth asking.

**Skill gap** — how far this skill is from mastery:

```
gap(s) = max(0, MASTERY_THRESHOLD − w_s) / MASTERY_THRESHOLD      # MASTERY_THRESHOLD = 0.85
```

**Seen penalty** — soft-discourage repeats, where `Δd` is days since the student last saw this item:

```
seen(q) = exp(−Δd / 7)      # 1.0 if seen today, ~0.24 a fortnight later, 0 if never seen
```

**The score.** For each candidate question `q` in skill `s`:

```
score(q) = ALPHA · gap(s)
         + BETA  · I(θ_s) / I_max
         − GAMMA · seen(q)
```

- `ALPHA = 0.45`, `BETA = 0.40`, `GAMMA = 0.15`
- `I_max` is the maximum information over the current candidate pool — normalizes `I` into `[0, 1]`.

**Candidate pool.** All `active = true` questions, minus:
- the last `RECENT_EXCLUSION = 30` questions this student answered (hard exclusion), and
- anything already served in the current session.

**Selection.** Don't take a strict `argmax` — two students with identical vectors would get identical
questions forever, and one student replaying a session would see the same item. Take the **top 5 by
score and sample proportional to `exp(score / TAU)`** with `TAU = 0.15`. Low temperature: it almost
always picks the best item, but not deterministically.

### 4.5 Order of operations for one answered question

This sequence is load-bearing. Getting it out of order silently corrupts weights.

1. Load `w_s` and every prerequisite weight `w_p` from `sat_skill_weights`.
2. **Decay all of them to `now()`** (§4.3).
3. Record `w_before = w_s`.
4. Apply the BKT posterior for the observed correctness (§4.1).
5. Apply the BKT learning transition.
6. If incorrect: compute `δ = w_before − w_s` and propagate to prerequisites (§4.2).
7. Clamp every touched weight to `[0.01, 0.99]`.
8. Persist all touched rows, stamping `last_updated = now()`.
9. Write the `sat_responses` audit row (`weight_before`, `weight_after`, `theta_at_selection`).
10. Recompute `θ` and select the next question (§4.4).

### 4.6 Where `b` comes from, and how it gets better

Authors tag a coarse `difficulty` label. A seed migration maps it:

```
easy   → irt_b = −1.0        irt_a = 1.0  (fixed)
medium → irt_b =  0.0
hard   → irt_b = +1.0        irt_c = 0.25 if answer_type = 'mc'
                             irt_c = 0.02 if answer_type = 'grid'
```

This solves cold start with zero authoring burden and is good enough to launch.

**The `b` mapping is deliberately shared across both formats.** A "medium" fill-in is genuinely harder
than a "medium" multiple-choice question covering the same content, because there are no options to
eliminate — but that difficulty difference is already captured by `c`, not `b`. Setting `c = 0.02`
drops `P(θ)` for a fill-in across the whole ability range. Shifting `b` upward as well would
double-count the format, exactly as scaling the BKT update by difficulty would double-count difficulty.
Author `difficulty` as *"how hard is this content"*, and let `c` handle *"how hard is this format."*

Recalibration (below) will eventually separate the two properly, because it estimates `b` per item from
real responses.

Every `sat_questions` row also carries `attempts` and `correct_count`, incremented on each response.
Once an item has `attempts ≥ 100`, a batch recalibration job can re-estimate `b` from the observed
proportion correct against the population's `θ` distribution and overwrite the seeded value. **That job
is not part of v1** — but the counters must be incremented from day one, because the data can't be
reconstructed later. Build the counters, defer the job.

### 4.7 Initializing the vector from the diagnostic

24 questions: 8 domains × {easy, medium, hard}. **All 24 are multiple choice**, enforced by a `CHECK`
constraint in §5.

The `w₀` blend below weighs a raw score against a `0.40` prior, and that blend assumes a uniform `0.25`
guessing floor across the items. Three correct fill-ins is much stronger evidence of mastery than three
correct multiple-choice answers (§4.1), so scoring them identically would under-credit the student —
and `w₀` is the foundation every later weight is built on. Keeping the diagnostic format-uniform keeps
it honest. Fill-in items appear everywhere in normal sessions.

Score each domain by difficulty, since a correct hard answer is worth more than a correct easy one:

```
earned  = 1·(easy correct) + 2·(medium correct) + 3·(hard correct)      # 0 … 6
raw     = earned / 6
```

Then shrink toward a prior so one lucky guess can't peg a student at mastery on question one:

```
w₀ = (raw · N + PRIOR · M) / (N + M)
```

- `N = 3.0` (real observations), `M = 1.5` (pseudo-observations), `PRIOR = 0.40`
- Finally clamp to `[0.10, 0.85]` — **nobody starts at mastery.**

Worked values:

| Result | `earned` | `raw` | `w₀` |
| --- | --- | --- | --- |
| all three correct | 6 | 1.000 | **0.800** |
| easy + medium, missed hard | 3 | 0.500 | **0.467** |
| hard only | 3 | 0.500 | **0.467** |
| easy only | 1 | 0.167 | **0.244** |
| all three wrong | 0 | 0.000 | **0.133** |

Note rows 2 and 3 tie. That's correct and intended — with three observations there isn't enough signal
to distinguish "solid on fundamentals, weak on hard" from "erratic," and pretending otherwise
overfits. The first real session will separate them.

### 4.8 Grading a fill-in answer — *designed, not built (Phase 6)*

> Nothing in this section ships in v1. It is recorded now because the decisions were made now, and
> because §5's schema depends on them. Skip it on a first read; return to it at Phase 6.

Fill-in answers are **numeric only** — integers, decimals, or fractions, optionally negative. There is
no word matching, no symbolic algebra, no `x = 3`. The student types a number; the server parses it and
compares it numerically. This means the author writes `3/4` once, and `0.75`, `.75`, `6/8`, and
`0.7500` all match for free.

**Step 1 — accept or reject the input's shape.** Anything not matching this grammar is rejected
outright, before parsing:

```
^-?(\d+|\d*\.\d+|\d+/\d+)$
```

Reject mixed numbers (`1 1/2`) — the real SAT rejects them as ambiguous, and so should we. Reject
whitespace inside the number, `%`, `$`, commas, and exponent notation. Strip leading/trailing spaces
first; reject everything else.

**Step 2 — parse to an exact rational,** not a `double`. `p/q` stays `p/q`. A decimal `0.75` becomes
`75/100`. Use `BigInteger` numerator and denominator, reduced by GCD. Parsing to `double` first and
comparing floats is how you end up accepting `0.1 + 0.2`.

**Step 3 — pick the tolerance from the *accepted* answer, not the student's.** Reduce the accepted
answer to lowest terms `p/q`:

- If `q`'s only prime factors are 2 and 5, the answer **terminates** (`3/4 = 0.75`, `7 = 7/1`). A
  student who knows it can write it exactly. Require near-exact equality:
  `|student − accepted| ≤ EXACT_TOL · max(1, |accepted|)` with `EXACT_TOL = 1e-9`.
- Otherwise the answer **repeats** (`2/3`, `1/7`). The student physically cannot grid it exactly, and
  the real SAT accepts a truncation or rounding filling the whole entry. Use a relative tolerance:
  `|student − accepted| ≤ REPEATING_TOL · |accepted|` with `REPEATING_TOL = 2e-3`.

Worked, for accepted `2/3 = 0.666666…`, relative error against `REPEATING_TOL = 2e-3`:

| Student types | Relative error | |
| --- | --- | --- |
| `2/3` | `0` | accept (exact) |
| `.6667` | `5.0e-5` | accept |
| `.667` | `5.0e-4` | accept |
| `.666` | `1.0e-3` | accept |
| `0.67` | `5.0e-3` | **reject** |
| `0.6` | `1.0e-1` | **reject** |

**Why the tolerance is conditional.** A flat `2e-3` relative tolerance on an accepted answer of `1000`
would accept `998`, which is simply a different number. Terminating answers get no slack because none
is needed. This branch is the whole subtlety of grid-in grading; get it wrong and the engine either
marks correct students wrong or credits wrong ones, and either way the weight vector is garbage.

**Multiple accepted answers.** `accepted_answers` is a JSONB array because some SAT questions ask for
*one possible value* — a quadratic with two roots has two distinct correct answers. The array holds one
entry per **mathematically distinct value**, never one entry per notation. The student's answer matches
if it matches *any* entry under the rules above. If you find yourself writing
`["2/3", ".666", ".667"]`, stop: the parser already handles that, and you've just disabled the
tolerance branch by making `.666` an exact terminating answer.

This all lives in `GridInAnswerChecker`, a pure class with no Spring and no database — the single most
test-worthy piece of code in the feature, and the reason fill-in support is deferred rather than free.

---

## 5. Database schema

Two migrations. Flyway is currently at `V12__add_stacks_and_progress.sql`, so these are **V13** and
**V14**. Follow the existing house style: lowercase snake_case, `BIGSERIAL` surrogate keys, explicit
`CONSTRAINT` names, comments above each table explaining *why*.

### V13 — the bank (`V13__add_sat_adaptive_bank.sql`)

```sql
-- The skill taxonomy. v1 inserts eight domain rows with parent_skill_id = NULL.
-- Sub-skills arrive later as child rows; no schema change needed.
CREATE TABLE sat_skills (
    id              VARCHAR(64) PRIMARY KEY,          -- 'quadratics-polynomials'
    parent_skill_id VARCHAR(64) REFERENCES sat_skills(id) ON DELETE CASCADE,
    name            VARCHAR(100) NOT NULL,
    display_order   SMALLINT     NOT NULL,            -- radar axis order, clockwise from 12 o'clock
    created_at      TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Directed edges: `prerequisite_id` is a prerequisite of `skill_id`.
-- `strength` scales how much of a miss propagates backward (see KAPPA).
CREATE TABLE sat_skill_prerequisites (
    skill_id        VARCHAR(64) NOT NULL REFERENCES sat_skills(id) ON DELETE CASCADE,
    prerequisite_id VARCHAR(64) NOT NULL REFERENCES sat_skills(id) ON DELETE CASCADE,
    strength        REAL        NOT NULL DEFAULT 1.0,

    PRIMARY KEY (skill_id, prerequisite_id),
    CONSTRAINT chk_no_self_prerequisite CHECK (skill_id <> prerequisite_id),
    CONSTRAINT chk_strength_range       CHECK (strength > 0.0 AND strength <= 1.0)
);

-- The question bank. Every item is pure text -- no images, no figures, no diagrams.
-- `correct_index`, `accepted_answers`, and the irt_* columns never leave the server.
--
-- Two shapes share this table, discriminated by `answer_type`:
--   'mc'   -> options (4) + correct_index ;  accepted_answers NULL
--   'grid' -> accepted_answers (>=1)      ;  options and correct_index NULL
--
-- v1 seeds ONLY 'mc' rows. The 'grid' shape is constrained here so that Phase 6 needs no migration;
-- until then the bank generator refuses to emit a 'grid' row. The database is deliberately more
-- permissive than the pipeline that fills it.
CREATE TABLE sat_questions (
    id               VARCHAR(64) PRIMARY KEY,         -- 'quad-0001'
    skill_id         VARCHAR(64) NOT NULL REFERENCES sat_skills(id) ON DELETE CASCADE,
    sub_skill        VARCHAR(64),                     -- always NULL in v1; see 3, "escape hatch"
    stem             TEXT        NOT NULL,            -- LaTeX: \( inline \), \[ display \]
    explanation      TEXT        NOT NULL,

    answer_type      VARCHAR(4)  NOT NULL,            -- 'mc' | 'grid'
    options          JSONB,                           -- mc only:   ["...", "...", "...", "..."]
    correct_index    SMALLINT,                        -- mc only
    -- grid only: one entry per mathematically DISTINCT value (e.g. both roots of a quadratic),
    -- never one entry per notation -- GridInAnswerChecker normalizes notation. See 4.8.
    accepted_answers JSONB,

    difficulty       VARCHAR(6)  NOT NULL,            -- 'easy' | 'medium' | 'hard'
    irt_a            REAL        NOT NULL DEFAULT 1.0,
    irt_b            REAL        NOT NULL,            -- seeded from `difficulty`, recalibrated later
    irt_c            REAL        NOT NULL,            -- 0.25 for 'mc', 0.02 for 'grid'; mirrors P(G)

    is_diagnostic    BOOLEAN     NOT NULL DEFAULT FALSE,
    active           BOOLEAN     NOT NULL DEFAULT TRUE,

    -- Recalibration inputs. Incremented on every response from day one.
    attempts         INTEGER     NOT NULL DEFAULT 0,
    correct_count    INTEGER     NOT NULL DEFAULT 0,

    source           VARCHAR(120),                    -- provenance, e.g. 'CB Practice Test 4 #12'
    created_at       TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT chk_difficulty  CHECK (difficulty IN ('easy', 'medium', 'hard')),
    CONSTRAINT chk_answer_type CHECK (answer_type IN ('mc', 'grid')),

    -- Exactly one of the two shapes is populated, fully.
    CONSTRAINT chk_answer_shape CHECK (
        (answer_type = 'mc'
            AND options IS NOT NULL AND jsonb_array_length(options) = 4
            AND correct_index BETWEEN 0 AND 3
            AND accepted_answers IS NULL)
     OR (answer_type = 'grid'
            AND options IS NULL AND correct_index IS NULL
            AND accepted_answers IS NOT NULL AND jsonb_array_length(accepted_answers) >= 1)
    ),

    -- The diagnostic is multiple choice only, so w0's uniform 0.25 guess floor holds. See 4.7.
    CONSTRAINT chk_diagnostic_is_mc CHECK (NOT is_diagnostic OR answer_type = 'mc')
);

CREATE INDEX idx_sat_questions_skill      ON sat_questions (skill_id) WHERE active;
CREATE INDEX idx_sat_questions_diagnostic ON sat_questions (skill_id, difficulty) WHERE is_diagnostic;

-- Exactly one diagnostic item per (skill, difficulty). 8 x 3 = 24.
CREATE UNIQUE INDEX uq_sat_diagnostic_slot
    ON sat_questions (skill_id, difficulty) WHERE is_diagnostic;
```

### V14 — per-student state (`V14__add_sat_adaptive_progress.sql`)

```sql
-- One diagnostic per user. A retake deletes the old row (see §11, open question).
CREATE TABLE sat_diagnostic_attempts (
    id           BIGSERIAL PRIMARY KEY,
    user_id      BIGINT    NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    started_at   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP,

    CONSTRAINT uq_sat_diagnostic_user UNIQUE (user_id)
);

-- selected_index is NOT NULL here because the diagnostic is multiple choice only (see 4.7).
CREATE TABLE sat_diagnostic_responses (
    id             BIGSERIAL PRIMARY KEY,
    attempt_id     BIGINT      NOT NULL REFERENCES sat_diagnostic_attempts(id) ON DELETE CASCADE,
    question_id    VARCHAR(64) NOT NULL REFERENCES sat_questions(id) ON DELETE CASCADE,
    selected_index SMALLINT    NOT NULL,
    correct        BOOLEAN     NOT NULL,
    answered_at    TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT uq_sat_diag_response UNIQUE (attempt_id, question_id)
);

-- The weight vector. `weight` is meaningless without `last_updated` -- always read through
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

-- A run of `target_length` adaptively-selected questions.
-- `pending_question_id` is the server's memory of what it served: the client cannot skip ahead,
-- and an answer for any other question is rejected.
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

-- At most one open session per user.
CREATE UNIQUE INDEX uq_sat_session_open
    ON sat_sessions (user_id) WHERE completed_at IS NULL;

-- Full audit trail. weight_before/weight_after/theta let us debug the model and recalibrate IRT
-- later. This table is append-only and will be the largest in the database; index accordingly.
--
-- Exactly one of selected_index / answer_text is set, matching the question's answer_type.
-- answer_text stores what the student literally typed (e.g. '.667'), not the parsed value --
-- it is the only record of near-misses, and it is what will tell us whether the tolerance
-- rule in 4.8 is calibrated correctly.
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

    -- Makes the answer endpoint idempotent: a retried POST hits this and returns the stored result
    -- instead of running BKT twice.
    CONSTRAINT uq_sat_response_session_question UNIQUE (session_id, question_id)
);

CREATE INDEX idx_sat_responses_user_recent ON sat_responses (user_id, answered_at DESC);
```

### The idempotency point is not optional

`uq_sat_response_session_question` is what stops a flaky mobile connection from double-applying a BKT
update. `AdaptiveSessionService.answer(...)` must catch the unique violation (or pre-check within the
transaction) and return the **previously stored** outcome. A weight vector that silently drifts because
of retried POSTs is nearly impossible to debug after the fact.

---

## 6. Server layout

New package `com.aot.sat`. The engine classes are **pure functions with no Spring annotations, no
repositories, and no `LocalDateTime.now()`** — clocks and data are passed in. That makes the entire
model unit-testable without a database, which is the only way this stays correct as it's tuned.

```
server/src/main/java/com/aot/sat/
├── engine/
│   ├── AdaptiveConstants.java        every tunable number, and nothing else
│   ├── BayesianKnowledgeTracer.java  §4.1  update(w, correct, pGuess) -> w
│   ├── ForgettingCurve.java          §4.3  decay(w, elapsedDays) -> w
│   ├── GridInAnswerChecker.java      §4.8  PHASE 6 -- do not write in v1
│   ├── ItemResponseTheory.java       §4.4  theta(w), probability(θ,a,b,c), information(...)
│   ├── PrerequisitePropagator.java   §4.2  penalize(prereqWeights, delta, edges)
│   └── QuestionSelector.java         §4.4  select(candidates, weights, seenHistory) -> question
├── entity/       SatSkill, SatSkillPrerequisite, SatQuestion,
│                 SatDiagnosticAttempt, SatDiagnosticResponse,
│                 SatSkillWeight, SatSession, SatResponse
├── repository/   one per entity, Spring Data JPA, matching the existing house style
├── dto/          see §7 -- note what these deliberately omit
├── service/
│   ├── DiagnosticService.java        serves the 24, computes w₀ (§4.7)
│   ├── AdaptiveSessionService.java   the §4.5 sequence, transactional
│   └── MasteryService.java           the ONLY place weights are read; applies decay
└── controller/
    └── SatAdaptiveController.java
```

### Security

Add to `SecurityConfig.java`, alongside the existing `/api/progress/**` rule:

```java
.requestMatchers("/api/sat/**").authenticated()
```

The user id comes from `(Long) authentication.getPrincipal()`, exactly as `CardProgressController`
does it. Every service method takes `userId` as its first argument and every query filters on it.
`sat_sessions` ownership is checked on every call — a session id in the URL is not authorization.

---

## 7. API surface

All under `/api/sat/adaptive`. All authenticated.

| Method | Path | Purpose |
| --- | --- | --- |
| `GET` | `/status` | Has the student done the diagnostic? Is a session open? |
| `POST` | `/diagnostic` | Start (or resume) the diagnostic. Returns the first unanswered item. |
| `POST` | `/diagnostic/answer` | Submit one diagnostic answer, get the next item or the completion payload. |
| `POST` | `/session` | Open a session. `{ length: 10 }`. Returns item 1. |
| `GET` | `/session/current` | Resume the open session — returns `pending_question_id`'s item. |
| `POST` | `/session/{id}/answer` | The main loop. Idempotent. |
| `GET` | `/session/{id}/summary` | Score, per-skill weight deltas, radar before/after. |
| `GET` | `/mastery` | The decayed weight vector. Feeds the radar chart. |

### What the client is allowed to see

```java
// Served BEFORE the student answers. Note what is absent.
record AdaptiveQuestionDTO(
    String id,
    String skillId,
    String skillName,
    String answerType,     // "mc" | "grid" -- the client renders options or a numeric input
    String stem,           // LaTeX
    List<String> options   // null when answerType is "grid"
    // NO correctIndex.  NO acceptedAnswers.  NO explanation.  NO irtB.  NO difficulty.
) {}
```

Difficulty is withheld too — telling a student "this one is hard" changes how they answer it, which
contaminates the response data used to recalibrate `irt_b`.

```java
// Submitted by the client. Exactly one field is set, matching the question's answerType.
record SubmitAnswerRequest(
    String questionId,     // must equal the session's pending_question_id
    Integer selectedIndex, // mc
    String answerText,     // grid -- raw, exactly as typed
    Integer msElapsed
) {}

// Returned only AFTER an answer is submitted.
record AnswerResultDTO(
    boolean correct,
    Integer correctIndex,          // mc only, else null
    List<String> acceptedAnswers,  // grid only, else null -- shown in the explanation panel
    String explanation,
    List<SkillWeightDTO> updatedWeights,   // so the radar can animate
    AdaptiveQuestionDTO nextQuestion,      // null when the session completes
    int questionNumber,
    int targetLength
) {}
```

The client never validates a fill-in answer, not even to check the shape. `answerText` goes to the
server raw and `GridInAnswerChecker` decides. A client-side regex would be a second implementation of
§4.8 that drifts from the first.

### Gating

`POST /session` before the diagnostic is complete returns **409 Conflict** with
`{ "code": "DIAGNOSTIC_REQUIRED" }`. The frontend routes on that code rather than parsing a message.

---

## 8. Frontend

New protected route `/sat/adaptive`, wrapped in the existing `ProtectedRoute` from `App.tsx`.

```
web/src/pages/SatAdaptivePage.tsx      shell + phase routing
web/src/components/adaptive/
├── DiagnosticFlow.tsx                 the 24-question intake, progress bar
├── AdaptiveSession.tsx                the 10-question loop
├── QuestionCard.tsx                   branches on answerType (v1: only the "mc" arm exists)
├── GridInInput.tsx                    PHASE 6 -- do not write in v1
├── MasteryRadar.tsx                   the radar chart
└── SessionSummary.tsx                 score + animated radar delta
web/src/types/adaptive.ts
```

- **LaTeX rendering is already solved.** Pass `stem`, each option, and `explanation` straight to
  `<MathText>` from `web/src/components/MathText.tsx`. It handles `\(...\)`, `\[...\]`, and escapes
  everything else. Don't write a second renderer.
- **`QuestionCard` branches on `answerType` even in v1,** where the only reachable arm is `"mc"`. The
  other arm throws. A component that ignores `answerType` entirely would render a fill-in question as a
  bare stem with no way to answer it, silently, the day the first `"grid"` row is seeded.
- *(Phase 6)* **`GridInInput` is a plain text input, not a `<input type="number">`.** Students must be able to type
  `3/4`, and a number input silently rejects the slash on some browsers and strips it on others. Allow
  the characters `0-9 . / -` and nothing else, keep the raw string in state, and send it untouched. Do
  not gray out the submit button on "invalid" input — the server decides what's valid, and a student
  who typed something the client rejects gets no feedback and no weight update.
- **The radar chart is hand-rolled SVG.** Eight axes at `45°` intervals, radius `∝ weight`, a
  `<polygon>` for the current vector and a dashed ring at `r(0.85)` for the mastery threshold. The
  `motion` package (already a dependency) tweens the polygon `points` between the before and after
  vectors on the summary screen. No charting library — Recharts would cost ~100kb gzipped and fight
  the existing CSS-variable theming for a shape that's 120 lines of trigonometry.
- **Theme it with the existing variables** (`--accent-ink`, etc.) so it inherits every theme in
  `ThemesPage`, including the ones added later.
- **No model math in TypeScript.** If you find yourself writing `Math.exp` in `web/`, something has
  gone wrong. The weights arrive from `/mastery` and `AnswerResultDTO.updatedWeights`, pre-decayed.

API functions go in `web/src/services/api.ts` following the existing `fetchAPI<T>` / `fetchNoContent`
helpers, which already attach the bearer token.

---

## 9. Question authoring format

**This is the format to send questions in.** Author in JSON, one file per skill, under:

```
server/src/main/resources/sat/bank/<skill-id>.json
```

A generator (`tools/generate-sat-bank.mjs`) reads these and emits a committed Flyway migration
(`V15__seed_sat_questions.sql`). JSON is the reviewable source of truth; the SQL is a build artifact
that happens to be checked in. Authoring LaTeX directly into SQL string literals is misery — don't.

Every question is **pure text** — LaTeX and characters, no images, figures, or diagrams. Two shapes:

- `"answerType": "mc"` — exactly four options, one correct index. **This is all you author for v1.**
- `"answerType": "grid"` — no options; the student types a number. **Reserved. See §9.5.** The generator
  rejects these until Phase 6, deliberately.

`answerType` is required on every question, even though only one value is currently legal. Writing it
now means the field exists in every file you author, so Phase 6 adds questions rather than rewriting
them.

### The file

```json
{
  "skillId": "quadratics-polynomials",
  "questions": [
    {
      "id": "quad-0001",
      "difficulty": "...",
      "isDiagnostic": false,
      "answerType": "mc",
      "stem": "...",
      "options": ["...", "...", "...", "..."],
      "correctIndex": 0,
      "explanation": "...",
      "source": "..."
    },
    {
      "id": "quad-0002",
      "...": "..."
    }
  ]
}
```

### Field reference

| Field | Type | Required | Rules |
| --- | --- | --- | --- |
| `id` | string | yes | Globally unique. `^[a-z0-9][a-z0-9-]{2,63}$`. Convention: `<skill-abbrev>-<4 digits>`, e.g. `quad-0001`, `geo-0142`, `lin-0007`. **Never reuse or renumber an id** — `sat_responses` references it forever. |
| `difficulty` | enum | yes | `"easy"` \| `"medium"` \| `"hard"`. Maps to `irt_b` of `-1.0` / `0.0` / `+1.0`. Rate the **content**, not the format — see §4.6. |
| `isDiagnostic` | bool | yes | Exactly one `true` per `(skillId, difficulty)` across the whole bank — 24 total. |
| `answerType` | enum | yes | `"mc"` in v1. `"grid"` is rejected by the generator until Phase 6. |
| `stem` | string | yes | The question. LaTeX per the convention below. |
| `options` | string[] | yes | **Exactly 4.** Each may contain LaTeX. |
| `correctIndex` | int | yes | `0`–`3`, indexing `options`. |
| `explanation` | string | yes | Shown after answering. LaTeX allowed. Explain the *method*, not just the answer. |
| `source` | string | no | Provenance, e.g. `"CB Practice Test 4 #12"`. Never shown to students. |
| `acceptedAnswers` | string[] | *Phase 6* | Fill-in only. See §9.5. Do not use yet. |

### 9.5 Reserved: `acceptedAnswers` — *Phase 6, do not author yet*

> Recorded so the format is settled before anyone needs it. Nothing here is legal input to the
> generator today; a `"grid"` question fails the build with a pointer back to this section.

Each entry must match `^-?(\d+|\d*\.\d+|\d+/\d+)$` — a plain integer, decimal, or fraction, optionally
negative. No LaTeX, no `\frac{3}{4}`, no units, no spaces, no percent signs. Write `3/4`, not
`\\(\\frac{3}{4}\\)`.

**One entry per distinct value, not per notation.** The server parses fractions and decimals to exact
rationals and compares numerically (§4.8), so a single `"3/4"` already accepts `0.75`, `.75`, `6/8`,
and `0.7500`.

```json
"acceptedAnswers": ["3/4"]              // correct
"acceptedAnswers": ["3/4", "0.75"]      // redundant -- the parser handles this
"acceptedAnswers": ["2/3", ".667"]      // WRONG, and harmful. See below.
```

The last one is a real bug, not just noise. `2/3` is a repeating decimal, so §4.8 grades it with a
loose tolerance that already accepts `.666`, `.667`, and `.6667`. Adding `.667` as its own entry
introduces a *terminating* accepted answer, which is graded near-exactly — you have not added
flexibility, you have added a second, stricter rule that a student can accidentally trip.

Multiple entries are correct only when the question genuinely has several different right answers — the
SAT does ask for *one possible value*:

```json
{
  "id": "quad-0004",
  "difficulty": "medium",
  "isDiagnostic": false,
  "answerType": "grid",
  "stem": "If \\(3x^2 - 7x + 2 = 0\\), enter one possible value of \\(x\\).",
  "acceptedAnswers": ["2", "1/3"],
  "explanation": "Factor: \\(3x^2 - 7x + 2 = (3x - 1)(x - 2)\\). Setting each factor to zero gives \\(x = \\frac{1}{3}\\) and \\(x = 2\\). Either is accepted.",
  "source": "CB Practice Test 5 #22"
}
```

That shows both rules at once: two entries because there are genuinely two distinct roots, and `1/3`
written once rather than alongside `.333` — §4.8's tolerance branch accepts `.333`, `.3333`, and
`0.333` on its own.

**Diagnostic items may never be `"grid"`,** even after Phase 6. `w₀` (§4.7) assumes a uniform `0.25`
guess floor across all 24 items. A `CHECK` constraint enforces this.

### LaTeX convention

Match `MathText.tsx` exactly:

- Inline math: `\( ... \)`
- Display math: `\[ ... \]`

**In JSON, every backslash doubles.** This is the single most common authoring error.

```
You want the student to see:    What is \(x\) if \(x^2 - 5x + 6 = 0\)?
You write in JSON:              "What is \\(x\\) if \\(x^2 - 5x + 6 = 0\\)?"
```

Do not use `$...$` or `$$...$$`. `MathText` does not parse them and they will render as literal dollar
signs.

### A complete, real example

```json
{
  "skillId": "quadratics-polynomials",
  "questions": [
    {
      "id": "quad-0001",
      "difficulty": "easy",
      "isDiagnostic": true,
      "answerType": "mc",
      "stem": "What are the solutions to \\(x^2 - 5x + 6 = 0\\)?",
      "options": [
        "\\(x = 1\\) and \\(x = 6\\)",
        "\\(x = 2\\) and \\(x = 3\\)",
        "\\(x = -2\\) and \\(x = -3\\)",
        "\\(x = -1\\) and \\(x = -6\\)"
      ],
      "correctIndex": 1,
      "explanation": "Factor the left side: \\(x^2 - 5x + 6 = (x - 2)(x - 3)\\). Setting each factor to zero gives \\(x = 2\\) and \\(x = 3\\). Check: \\(2 + 3 = 5\\) matches the middle coefficient and \\(2 \\cdot 3 = 6\\) matches the constant.",
      "source": "CB Practice Test 1 #4"
    },
    {
      "id": "quad-0002",
      "difficulty": "hard",
      "isDiagnostic": true,
      "answerType": "mc",
      "stem": "For which value of \\(k\\) does \\[ 2x^2 + kx + 8 = 0 \\] have exactly one real solution?",
      "options": ["\\(k = 4\\)", "\\(k = 8\\)", "\\(k = \\pm 8\\)", "\\(k = \\pm 4\\sqrt{2}\\)"],
      "correctIndex": 2,
      "explanation": "Exactly one real solution means the discriminant is zero: \\(b^2 - 4ac = 0\\). Substituting \\(a = 2\\), \\(b = k\\), \\(c = 8\\) gives \\(k^2 - 64 = 0\\), so \\(k = \\pm 8\\). Both signs are valid, which rules out the single-value options.",
      "source": "CB Practice Test 3 #19"
    },
    {
      "id": "quad-0003",
      "difficulty": "medium",
      "isDiagnostic": false,
      "answerType": "mc",
      "stem": "The function \\(f\\) is defined by \\[ f(x) = 2x^2 - 12x + 23. \\] What is the \\(x\\)-coordinate of the vertex of the graph of \\(f\\) in the \\(xy\\)-plane?",
      "options": ["\\(x = -3\\)", "\\(x = 3\\)", "\\(x = 5\\)", "\\(x = 6\\)"],
      "correctIndex": 1,
      "explanation": "The vertex of \\(ax^2 + bx + c\\) sits at \\(x = -\\frac{b}{2a}\\). Here \\(a = 2\\) and \\(b = -12\\), so \\(x = \\frac{12}{4} = 3\\). Completing the square confirms it: \\(f(x) = 2(x - 3)^2 + 5\\), whose vertex is \\((3, 5)\\).",
      "source": "CB Practice Test 2 #14"
    }
  ]
}
```

Note `quad-0003`'s distractors: `-3` is the sign error from forgetting the minus in `-\frac{b}{2a}`,
`5` is the *y*-coordinate of the vertex, and `6` is `-b/a`. Each corresponds to a specific mistake. Four
options where three are obviously absurd teaches elimination, not mathematics — and it inflates the
weight vector, because the student answers correctly without knowing the skill.

### 9.6 Validation the generator must enforce

It should refuse to emit SQL and fail loudly on any of these:

**Structural**

1. Duplicate `id` anywhere in the bank.
2. `id` not matching `^[a-z0-9][a-z0-9-]{2,63}$`.
3. `skillId` not present in `sat_skills`.
4. `answerType` missing, or not `"mc"` / `"grid"`.
5. **`answerType` of `"grid"`.** Fail with: *"Fill-in questions are designed but not implemented. See
   §10 Phase 6."* This guard is the difference between "we left room for it" and "we shipped a question
   nobody can answer." Delete this rule in Phase 6 and not before.
6. `acceptedAnswers` present on any question (implied by rule 5, but check it separately — a stray
   `acceptedAnswers` on an `"mc"` item means the author misunderstood something).
7. `options.length !== 4`, `correctIndex` outside `0..3`, or duplicate option strings.
8. Missing or duplicated diagnostic slot — must be exactly 24, one per `(skill, difficulty)`.
9. Any **unrecognized key** on a question object. A typo like `correctAnswer` instead of `correctIndex`
   must be an error, not a silently-ignored field that leaves `correctIndex` defaulting to `0`. Reject
   unknown keys rather than tolerating them.
10. Wrong JSON type: `"correctIndex": "1"` (string) or `"isDiagnostic": "true"` (string). Don't coerce.

**Content**

11. Unbalanced LaTeX delimiters (`\(` without `\)`, `\[` without `\]`).
12. `$` appearing anywhere in `stem`, `options`, or `explanation` — almost certainly a wrong delimiter.
13. Any string failing `katex.renderToString(..., { throwOnError: true })`. **This catches broken math
    before it reaches a student**, and it's why the generator is a Node script rather than Java: it can
    import the same KaTeX version the frontend uses.
14. Fewer than `MIN_PER_SKILL = 40` active questions in any skill. (Recommend ≈ 40 per domain, ~320
    total, before launch. Below that, the `RECENT_EXCLUSION = 30` window starves the candidate pool.)

**Emitted SQL**

15. Every emitted row must set `answer_type = 'mc'`, `irt_c = 0.25`, `accepted_answers = NULL`. Assert
    it in the generator rather than trusting the code path — `chk_answer_shape` will catch a violation
    at migration time, but a failing migration is a worse error message than a failing build.

**Deferred to Phase 6** (write these when rule 5 is deleted, not before): `acceptedAnswers` non-empty
and each entry matching `^-?(\d+|\d*\.\d+|\d+/\d+)$`; no zero denominators; no two entries parsing to
the same rational (the `["3/4", "0.75"]` redundancy); no terminating entry that is a rounding of a
different repeating entry (the `["2/3", ".667"]` trap, which fails *silently* at runtime); no LaTeX in
`acceptedAnswers`; and a cross-check running `GridInAnswerChecker`'s own parser over every entry, so the
authoring validator and the runtime grader cannot disagree about what is a valid number.

---

## 10. Build order

Each phase ends somewhere demonstrable. Don't start a phase before the previous one is verified.

**Phase 1 — the engine, no database.**
Write `AdaptiveConstants`, `BayesianKnowledgeTracer`, `ForgettingCurve`, `ItemResponseTheory`,
`PrerequisitePropagator`, `QuestionSelector` as pure classes. **Not `GridInAnswerChecker`.** Write their
unit tests first. Property tests worth having:
- a correct answer never decreases a weight; an incorrect answer never increases it
- weights stay strictly inside `(0, 1)` under any sequence of 10,000 random answers
- `decay(w, 0) == w`, and `decay(w, ∞) → FLOOR`
- `information(θ, a, b, c)` is maximized near `θ = b`
- selection is deterministic given a fixed RNG seed

`BayesianKnowledgeTracer.update` takes `pGuess` as a parameter even though every v1 caller passes
`P_GUESS_MC`. Test it at `0.02` as well as `0.25` — a correct answer at the lower floor must raise the
weight strictly more. That test is the contract Phase 6 depends on, and it costs one line now.

No Spring, no Postgres. This phase is where the model is proven correct; everything after is plumbing.

**Phase 2 — schema and bank.**
Write V13, V14. Write the eight `sat_skills` rows and the prerequisite edges from §3. Build
`tools/generate-sat-bank.mjs` with all ten validations. Author **the 24 diagnostic questions only** and
generate V15. Verify migrations apply cleanly against a fresh database via `docker-compose`.

**Phase 3 — diagnostic, end to end.**
`DiagnosticService`, `MasteryService`, the `/status`, `/diagnostic`, `/diagnostic/answer`, and
`/mastery` endpoints. `DiagnosticFlow.tsx` and `MasteryRadar.tsx`. **Deliverable: a student can log in,
take 24 questions, and see their radar chart.** This is genuinely useful on its own and worth shipping
before Phase 4 exists.

**Phase 4 — the adaptive loop.**
Author the rest of the bank (≥ 40 per skill). `AdaptiveSessionService` implementing the §4.5 sequence
exactly, with the idempotency guard. `/session` endpoints. `AdaptiveSession.tsx`, `SessionSummary.tsx`
with the animated radar delta.

**Phase 5 — instrumentation.**
Not user-facing. Log every selection decision (`theta`, candidate pool size, chosen score) so the
constants in `AdaptiveConstants` can be tuned against real data. Then, and only then, consider the
`irt_b` recalibration job from §4.6.

**Phase 6 — fill-in questions.**
Everything below is additive. No migration, no backfill, no reformatting of existing questions.

1. Write `GridInAnswerChecker` (§4.8) with a table-driven test covering, at minimum: `3/4` accepting
   `0.75` / `.75` / `6/8`; `2/3` accepting `.666` / `.667` / `.6667` and rejecting `0.67`; `1000`
   rejecting `998`; `-2.5` accepting `-5/2`; and rejection of `1 1/2`, `1,000`, `50%`, `1e3`, `3/0`.
2. Delete generator rule 5 (§9.6). Add the deferred rules listed beneath it.
3. Teach the generator to emit `irt_c = 0.02` and `accepted_answers` for `'grid'` rows.
4. `AdaptiveSessionService` passes `P_GUESS_GRID` for `'grid'` items — a one-line change *if* Phase 1
   parameterized `pGuess`, and a rewrite of the engine's core class if it didn't.
5. `SubmitAnswerRequest.answerText`, `sat_responses.answer_text` — columns already exist.
6. Build `GridInInput.tsx`; fill in `QuestionCard`'s second arm.
7. Author `'grid'` questions. The real SAT Math section is ~25% student-produced response; §11.6 asks
   whether the bank and the selector should mirror that ratio.

Note what is *absent* from this list: no schema migration, no change to `QuestionSelector`, no change
to the diagnostic, no change to the radar chart, and no re-proving of the BKT update. That is what the
`answer_type` column and the `pGuess` parameter bought.

**Do not** convert fill-in questions into multiple choice to skip this phase. Each conversion requires
inventing three plausible distractors — real authoring labor, and weak distractors make a question
answerable by elimination alone, which inflates the weight vector. Nor should fill-ins be shown but
excluded from BKT: they are the items students find hardest, so withholding them from the model biases
every weight optimistic.

---

## 11. Open questions

Answer these before the phase that needs them — not now.

1. **Retaking the diagnostic.** Allowed? If so, does it reset the weight vector to `w₀`, or blend with
   existing weights? `uq_sat_diagnostic_user` currently forbids a second attempt. *(Needed by Phase 3.)*
2. **Do students see the raw numbers,** or only the radar shape? Showing `0.47` invites gaming;
   showing only a polygon may feel vague. *(Phase 3.)*
3. **Session length.** Fixed at 10, or student-selectable 5/10/20? `target_length` already supports the
   latter; it's purely a UI question. *(Phase 4.)*
4. **What happens at mastery?** When all eight weights cross `0.85`, does anything change — a badge, a
   "test-ready" state, harder question pools? Currently: nothing. *(Phase 4.)*
5. **Rate limiting.** `AiUsage` has a per-user quota pattern. Do adaptive sessions need one, or is the
   question bank self-limiting? *(Phase 4.)*
6. **Fill-in / multiple-choice ratio.** The real SAT Math section is roughly 75% MC, 25% grid-in. Should
   the bank mirror that, and should `QuestionSelector` enforce the mix within a session, or just let
   the IRT score decide? Currently the selector is format-blind. *(Phase 4.)*
7. **Should a near-miss be surfaced?** `sat_responses.answer_text` records that a student typed `0.67`
   for `2/3` and was marked wrong. Telling them "you rounded too early" is pedagogically valuable, but
   it's a UI decision and a second grading pass. *(Phase 4, and it's why `answer_text` is stored raw.)*

---

## 12. Things that will be tempting and are wrong

- **Reading `sat_skill_weights.weight` directly.** It's a stale number. Go through `MasteryService`.
- **Recursing prerequisite penalties.** Depth 1. Every root skill will sink otherwise.
- **Making BKT difficulty-aware** by scaling the update by `irt_b`. Difficulty enters through
  *selection*, not *scoring*. Doing both double-counts it.
- **Using `P_GUESS_MC` for a fill-in item** because the constant was already in scope. The guess floor
  is a property of the *format*. A `0.25` floor on a question nobody can guess makes correct answers
  count for a quarter of what they should, and the weight vector converges to a lie.
- **Raising `irt_b` for fill-ins** because they "feel harder." `irt_c` already encodes that.
- **Setting `P_GUESS_GRID` to exactly `0.0`.** One correct answer then pins the posterior at `1.0`.
- **Comparing fill-in answers as `double`s,** or with one flat tolerance. Parse to exact rationals;
  the tolerance depends on whether the *accepted* answer terminates. §4.8.
- **Validating fill-in input in TypeScript.** The server grades. A client-side copy of the grammar will
  drift, and the version that drifts is the one that silently marks students wrong.
- **Sending `difficulty` to the client** "just for the UI." It contaminates response data.
- **A strict `argmax` in `QuestionSelector`.** Sample from the top 5. Determinism here is a bug.
- **Skipping the idempotency guard** because "the client won't double-post." It will.
- **Adding a charting library** for one radar chart with eight fixed axes.
- **Putting the bank in `web/src/data/`** to match `topicalQuestions`. That pattern is correct for
  ungraded practice and fatal here.
