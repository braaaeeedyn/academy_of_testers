# AP Unit Bank Regeneration — Handoff

**Task:** Delete the old mixed-quality practice questions in every AP subject's unit bank and
regenerate each unit with exactly **10 easy / 10 medium / 10 hard** questions (30 per unit, `unrated` = 0),
authored in authentic AP-exam style.

**✅ COMPLETE — all 29 of 29 subjects done (172 units, ~5,160 new questions).**
Every unit passes 10/10/10 with zero unrated (`node tools/bank-stats.mjs` → `TOTAL unrated=0`)
and the full `web/` project passes `npx tsc --noEmit` cleanly. No further work required.
The pipeline scripts remain in `tools/` (apply-questions.mjs, bank-stats.mjs) for any future edits.

---

## Why this exists

The unit banks (`web/src/data/unitBank/ap-*.ts`) originally mixed two sources:
- calibrated topical questions tagged with `difficulty` (5 easy / 5 medium / 5 hard per unit), and
- older legacy "review" questions with **no** `difficulty` field ("unrated").

The setup UI (`web/src/components/UnitPractice.tsx`) shows per-difficulty counts, so the unrated bucket
looked confusing (e.g. "34 questions, 5/5/5 rated"). The user chose to **delete & regenerate** every unit
with fresh AP-style questions rather than rate the legacy ones. Style was explicitly approved on a Biology
Unit 1 pilot before mass generation began.

## The approved question style

Real AP-exam feel, NOT short recall. Every unit = 10 easy + 10 medium + 10 hard:
- **easy** = recall / basic comprehension, often with a light scenario framing.
- **medium** = application / interpretation; requires reasoning, not just memory.
- **hard** = analysis, multi-step, experimental / data interpretation, "which best explains".
- **Distractors** are plausible misconceptions, not throwaways.
- **Explanations** are thorough and say *why* the answer is right (and ideally why others are wrong).

## Data shape

Each question object (see `web/src/data/unitBank/types.ts`):
```ts
{ id: string, question: string, options: string[], correctAnswer: number /*0-indexed*/,
  explanation: string, difficulty: 'easy' | 'medium' | 'hard' }
```
ID convention used for new questions: `q-u{unit}-{easy|medium|hard}-{n}` (any unique string is fine).

**Math/science formatting:** the `MathText` component renders LaTeX with `\(...\)` inline delimiters.
In the authored JSON, escape backslashes: write `\\(` `\\)` `\\frac` etc. Chemistry can use Unicode
sub/superscripts (e.g. `H₂O`, `Na⁺`) as the existing bank does, or LaTeX — both render.

---

## The pipeline (tools/)

Two helper scripts were built and verified (round-trips a bank file byte-for-byte):

- **`tools/apply-questions.mjs`** — splices authored questions into a bank file, preserving the exact
  TS + 2-space-JSON format. Usage:
  ```bash
  node tools/apply-questions.mjs <slug> <questions.json>
  # questions.json: { "1": [ {..30 q's..} ], "2": [ ... ], ... }  (keys = unit numbers to REPLACE)
  # round-trip test: node tools/apply-questions.mjs --roundtrip <slug>
  ```
- **`tools/bank-stats.mjs`** — prints per-unit difficulty counts and flags any unit needing work.
  ```bash
  node tools/bank-stats.mjs            # all subjects; last line = overall unrated + gaps
  node tools/bank-stats.mjs <slug>     # one subject
  ```

### Standard workflow per subject
1. Get exact unit titles (so questions are on-topic):
   ```bash
   node -e "const fs=require('fs');const d='web/src/data/unitBank';const f='<slug>.ts';const s=fs.readFileSync(d+'/'+f,'utf8');const b=JSON.parse(s.slice(s.indexOf('{',s.indexOf('=')),s.lastIndexOf('}')+1));for(const u of b.units)console.log('U'+u.unitNumber+': '+u.title)"
   ```
2. Author `tools/_<name>.json` with keys `"1".."N"`, each an array of 30 questions (10/10/10).
3. Apply, verify, typecheck, clean up:
   ```bash
   node tools/apply-questions.mjs <slug> tools/_<name>.json
   node tools/bank-stats.mjs <slug>          # confirm every unit: e10 m10 h10 unrated0  OK
   (cd web && npx tsc --noEmit)              # must be clean
   rm tools/_<name>.json
   ```

---

## Subjects — DONE (21)

ap-african-american-studies · ap-art-history · ap-biology · ap-comparative-government-and-politics ·
ap-computer-science-a · ap-computer-science-principles · ap-english-language-and-composition ·
ap-english-literature-and-composition · ap-environmental-science · ap-european-history ·
ap-human-geography · ap-macroeconomics · ap-microeconomics · ap-music-theory · ap-precalculus ·
ap-calculus-ab · ap-chemistry · ap-physics-1 · ap-physics-2 ·
ap-physics-c-electricity-and-magnetism · ap-physics-c-mechanics · ap-psychology · ap-research ·
ap-seminar · ap-united-states-government-and-politics · ap-united-states-history · ap-world-history-modern

## Subjects — REMAINING (2)

| slug | units | notes |
|---|---|---|
| ap-statistics | 9 | LaTeX for formulas |
| ap-calculus-bc | 10 | LaTeX; Calc AB + series, parametric/polar |

Get unit titles with the one-liner above before authoring each.

## Verification

- `node tools/bank-stats.mjs` — overall line should reach `TOTAL unrated=0 | gaps ... e+0 m+0 h+0` when finished.
- Frontend renders at `localhost:5173` (run `npm run dev` in `web/`; backend via `docker compose up -d postgres api`).
  Spot-check any subject → Practice → a unit; difficulty chips should read 10/10/10 with no "Unrated" chip.

## UI change already shipped (separate from regeneration)

`web/src/components/UnitPractice.tsx` was updated earlier to surface unrated questions honestly
(an "Unrated" filter chip + explanatory line). Once all subjects are regenerated the unrated bucket
disappears everywhere, so those affordances simply never show — no further UI change required.
