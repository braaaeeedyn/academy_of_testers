# SAT question bank — authoring guide

One JSON file per skill. Add questions to the `questions` array. That's it.

Full design rationale lives in `/SAT_ADAPTIVE_ENGINE.md` §9. This file is the part you need while
actually typing questions.

**JSON has no comments.** Don't add `//` or `#` lines to the `.json` files — they will not parse. Put
notes in the `source` field or here.

---

## The block to copy

Paste this into a skill file's `questions` array and fill it in. Every field is required except
`source`.

```json
{
  "id": "",
  "difficulty": "",
  "isDiagnostic": false,
  "answerType": "mc",
  "stem": "",
  "options": ["", "", "", ""],
  "correctIndex": 0,
  "explanation": "",
  "source": ""
}
```

`_TEMPLATE.json` holds three filled-in examples plus one blank, if you'd rather copy from something
real.

---

## What can go in each field

Four of the ten fields accept a **closed set** of values. Anything else fails the build.

| Field | JSON type | Legal values |
| --- | --- | --- |
| `difficulty` | string | `"easy"` · `"medium"` · `"hard"` — nothing else, lowercase |
| `isDiagnostic` | boolean | `true` · `false` — bare, not `"true"` |
| `answerType` | string | `"mc"` — `"grid"` is reserved and rejected until Phase 6 |
| `correctIndex` | integer | `0` · `1` · `2` · `3` — bare, not `"1"` |

The rest are open, but constrained:

| Field | JSON type | Constraint |
| --- | --- | --- |
| `id` | string | `^[a-z0-9][a-z0-9-]{2,63}$`. In practice: `<prefix>-<4 digits>`. Prefix table below. |
| `stem` | string | Non-empty. LaTeX per the rules below. No `$`. |
| `options` | array of 4 strings | Exactly 4, all non-empty, all distinct. |
| `explanation` | string | Non-empty. LaTeX allowed. |
| `source` | string | Free text, or omit the key entirely. Never shown to students. |

There is no `figure`, no `image`, no `tags`, no `points`, no `timeLimit`, no `subSkill`, and no
`acceptedAnswers` field. An unrecognized key fails the build rather than being ignored — a typo like
`"correctAnswer"` instead of `"correctIndex"` should be an error, not a silently wrong question.

### Mastery is tracked at the level of the eight skills, and nothing finer

A question's skill is determined entirely by **which file it lives in**. There is no per-question skill
tag and no sub-skill tag. The engine's weight vector has exactly eight entries, matching the eight
files, and that is what the radar chart draws.

If the bank later grows large enough to justify splitting a skill — `quadratics-polynomials` into
`factoring`, `vertex-form`, `discriminant`, and so on — a `sub_skill` column already exists in the
database, nullable and unread. Tags can be inferred from question text at that point, by a person or by
Claude reading the stems. Nothing you write today forecloses it, and guessing at a taxonomy before
there are enough questions to reveal its shape would produce worse tags than deriving one later.

### A note on `geometry-trigonometry`

The bank is text-only, so every geometry question must be fully described in words — *"In triangle
\\(ABC\\), angle \\(B\\) is a right angle, \\(AB = 6\\), and \\(BC = 8\\)…"*. If a question cannot be
stated without the reader looking at a picture, it does not belong in the bank. Coordinate geometry,
trigonometric ratios, circle equations, and volume formulas all survive this constraint comfortably.

---

## Field rules

| Field | What goes in it |
| --- | --- |
| `id` | `<prefix>-<4 digits>`, e.g. `quad-0001`. Prefixes below. Globally unique. **Never renumber or reuse an id** — student response history references it forever. |
| `difficulty` | `"easy"`, `"medium"`, or `"hard"`. Rate the **content**, not how tricky the options are. |
| `isDiagnostic` | `true` for exactly 24 questions total: one per (skill, difficulty). Everything else is `false`. |
| `answerType` | Always `"mc"` for now. `"grid"` (fill-in) is reserved and will fail the build. |
| `stem` | The question text. LaTeX rules below. |
| `options` | Exactly 4 strings. See "Writing distractors". |
| `correctIndex` | `0`–`3`. **Zero-indexed** — `0` means the first option. |
| `explanation` | Shown after answering. Explain the *method*, not just the answer. |
| `source` | Where it came from, e.g. `"CB Practice Test 4 #12"`. Never shown to students. Optional but useful. |

### ID prefixes

| Skill file | Prefix |
| --- | --- |
| `arithmetic-percentages.json` | `arith-` |
| `algebra-equations.json` | `alg-` |
| `linear-functions.json` | `lin-` |
| `systems-of-equations.json` | `sys-` |
| `quadratics-polynomials.json` | `quad-` |
| `exponential-functions.json` | `exp-` |
| `data-statistics.json` | `stat-` |
| `geometry-trigonometry.json` | `geo-` |

---

## LaTeX

Inline math is `\( ... \)`. Display math (its own centered line) is `\[ ... \]`.

**Inside JSON, every backslash doubles.** This is the mistake everyone makes first:

```
Student sees:    What is \(x\) if \(x^2 = 9\)?
You type:        "What is \\(x\\) if \\(x^2 = 9\\)?"
```

```
Student sees:    \[ f(x) = 2x^2 - 12x + 23 \]
You type:        "\\[ f(x) = 2x^2 - 12x + 23 \\]"
```

Common commands, as typed in JSON: `\\frac{a}{b}`, `\\sqrt{x}`, `\\pm`, `\\cdot`, `\\le`, `\\ge`,
`\\neq`, `\\pi`, `\\theta`, `\\approx`, `\\circ` (for degrees: `45^\\circ`).

**Never use `$...$` or `$$...$$`.** The renderer doesn't parse them; students would see literal dollar
signs. The build rejects any `$` in a question.

Math goes inside the delimiters, prose outside. Write `"The value of \\(x\\) is 3."`, not
`"\\(\\text{The value of } x \\text{ is } 3.\\)"`.

---

## Writing distractors

Four options where three are obviously absurd teaches elimination, not mathematics — and it corrupts
the adaptive engine, because a student answers correctly without knowing the skill, and their mastery
score goes up anyway.

**Each wrong option should be the result of one specific, plausible mistake.** From `_TEMPLATE.json`,
for the vertex of \(f(x) = 2x^2 - 12x + 23\) (answer: `3`):

| Option | The mistake it catches |
| --- | --- |
| `-3` | forgot the minus sign in \(-\frac{b}{2a}\) |
| `3` | **correct** |
| `5` | gave the *y*-coordinate of the vertex instead |
| `6` | computed \(-b/a\) instead of \(-b/2a\) |

Vary which index is correct. Don't let `correctIndex` be `1` on every question.

---

## Before you commit

- [ ] `id` unique across **all** files, correct prefix, never reused
- [ ] Exactly 4 `options`, and `correctIndex` points at the right one (zero-indexed)
- [ ] Every `\` doubled; no `$` anywhere
- [ ] Exactly 24 questions have `"isDiagnostic": true` — one per (skill, difficulty)
- [ ] `python -c "import json,sys; json.load(open(sys.argv[1]))" <file>` parses, or any JSON linter

Target ≈ 40 questions per skill (~320 total) before launch. Below that, the "don't repeat the last 30
questions" rule starves the selector. **Phase 3 only needs the 24 diagnostic questions**, so start
there: one easy, one medium, one hard, in each of the eight files.
