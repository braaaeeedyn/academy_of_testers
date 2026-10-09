# Unit overviews

The unit overviews are the per-subject "cheat sheets": one short explanation per CED topic, grouped by unit. Students
reach them from the Resources page (`ResourcesPage` renders `web/src/components/UnitOverviews.tsx`).

## Where the data lives

Everything is in `web/src/data/unitOverviews/`:

| file | role |
|---|---|
| `types.ts` | `SubunitOverview`, `UnitOverview`, `SubjectFeatures`, `SubjectUnitOverview` |
| `parseRawOverview.ts` | `parseRawOverview(raw)` turns a raw text block into `UnitOverview[]`; also exports the `subunit(...)` helper |
| `index.ts` | imports every subject and registers it in `SUBJECT_OVERVIEWS`; `getUnitOverviewBySubjectName` looks a subject up |
| `<subject>UnitOverviews.ts` | one file per subject |

A subunit has an `id` (`"3-2"`), a `title`, a `summary`, a `keyIdeas` array and, for some technical subjects,
optional `exampleCode`, `exampleLanguage` and `exampleExplanation`. A subject also carries `features`:
`latex` (render `\(...\)` math) and `codeExamples`.

## Two file formats

**Raw text, parsed by `parseRawOverview`.** Most subjects (the histories, government, the sciences except physics,
psychology, economics, the English and Capstone courses, art history, music theory) keep their content in one template
literal and export `units: parseRawOverview(RAW_...)`. The parser reads it line by line:

- `Unit N – Title` starts a unit. The separator must be a spaced en dash or hyphen (`^Unit (\d+)\s+[–-]\s+(.+)$`);
  a comma there makes the parser skip the whole unit.
- `N.N Title` starts a subunit. The id becomes `N-N`.
- A line starting `Key ideas:` becomes the subunit's single `keyIdeas` entry. It must stay on one line.
- Every other line is summary text. Blank lines separate paragraphs (the UI splits the summary on `\n\n`).
- Text before the first `Unit` header is ignored, so nothing should live there.
- Unit numbers can start at 0. AP English Language and AP English Literature open with `Unit 0 – Exam Essay Guide`
  (16 subunits each: thesis, evidence, commentary, sophistication and full-essay advice for each of the three exam
  essays), and AP Seminar opens with `Unit 0 – AP Seminar Exam` (Performance Task 1, Performance Task 2 and the
  end-of-course exam). Unit 0 is listed first, so it is what the page shows on load for those three subjects.
- The renderer has no list support: a line starting `- ` is just text inside a paragraph. Write lists as sentences.

Writing rules that follow from this:

- No prose line may start with a pattern like `1.5 ` or `Unit 3 – `, because the parser would read it as a header.
- No backticks and no `${` inside the template literal.
- AP Music Theory is written in markdown (`#`/`##`/`###` headers, `**Key ideas:**`, `---` rules). The file strips
  that markup before calling `parseRawOverview`, so keep the markup exactly as it is.
- AP English Language, AP English Literature, AP Research and AP Seminar have no `Key ideas:` lines. Don't add any.

**Object literals (`UnitOverview[]`).** Calculus, precalculus, statistics, the computer science files (`cs`, `csa`, `csp`) and the four physics courses
write the units out as TypeScript objects (calc, precalc and stats through the `subunit(...)` helper). Strings are
single-quoted, so an apostrophe is `\'`. The number of `keyIdeas` entries per subunit is part of the structure, and
`exampleCode` is shown verbatim.

**TeX escaping.** Rendered TeX has exactly one backslash per command, so a single-quoted TS string writes each
backslash twice: `'\\(F = ma\\)'`, `'\\log_b x'`, `'\\frac{a}{b}'`. A LaTeX row break inside a matrix (`\\` in
TeX) is four backslashes in the source (`'1 & 2\\\\ 3 & 4'`). A newline that should start a new paragraph is `\n\n`,
not `\\n\\n` (which shows as literal text). Four backslashes before a command name (`\\\\log`) is a bug: KaTeX gets
`\\log` and shows a red error. Template literals (used for some `exampleCode`) follow the same backslash rule. A prime
in a template literal is a plain `'`; in a single-quoted string it is `\'` (KaTeX gets `'`). Never write `\\\'`: KaTeX
gets `\'`, a text-mode acute accent, not a prime. Inline math must not contain a TeX line break (`\\\\` in the
source); use `\\quad` to space two equations apart, as in precalc 4-1's `\\(x=f(t),\\quad y=g(t)\\)`.

## Registering a subject

A new file appears only when it is imported in `index.ts` and added to `SUBJECT_OVERVIEWS`. The lookup matches
`subjectName` exactly first, then tries the alias map in `getUnitOverviewBySubjectName` (for example
`'AP English Language'` maps to `'AP English Language and Composition'`). If an overview exists but doesn't show up,
check the registration first, then whether the subject name the page passes in matches or needs an alias.

## Rendering

`UnitOverviews.tsx` shows one subunit at a time: the summary as paragraphs, then the key ideas as a list, then any
example. When `features.latex` is true, text goes through `MathText` (`web/src/components/MathText.tsx`), which
handles `\(...\)` and `\[...\]`. Don't add a second renderer.

## Writing conventions

The overviews are written for an average high-school student preparing for the AP exam.

- **Reading level.** Each readability-target file has a Flesch-Kincaid grade ceiling (12.5 by default; 13.5 for
  subjects whose required vocabulary is long, such as biology, environmental science, psychology, human geography,
  comparative government and art history; 12.0 for the physics files). The shared sentence gates are: average
  sentence length 16 words or less, at most 10% of sentences over 25 words, no sentence over 40 words, at most 12%
  of sentences of 5 words or less, and a sentence-length standard deviation of at least 5.
- **Tier 3 files** (calc, cs, csp, precalc, stats) already read at about grade 9 to 10, so their gates target the
  long-sentence tail instead: Flesch-Kincaid grade 10.0 or lower, average sentence length 15 or less, at most 3% of
  sentences over 25 words, none over 32, short sentences at most max(12%, HEAD + 1 point) because their keyIdeas are
  short fragments by design, and a standard deviation of at least 4.5. Words stay within 0.9x to 1.5x HEAD, and each
  subunit of 40 or more words keeps at least 0.75x. Every math span (calc, precalc, stats) and every code identifier
  (cs, csp) stays as it is. All five pass. Splitting every 26 to 28 word sentence can drop the standard deviation
  under 4.5 (cs sits at 4.6), so a sentence of that length with no clean joint stays whole.
- **How the sentence counter splits.** A sentence ends at `.`, `!` or `?` followed by a space and a capital letter,
  digit, quote or parenthesis, or at a line or `keyIdeas` boundary. Semicolons don't end sentences. A math span counts
  as one lowercase word, so a sentence that starts with a math span is merged with the one before it, and a sentence
  that ends on a single capital letter ("point B.", "1 J/C.") is read as an abbreviation and merged with the next.
  Word those sentences so they start with a word and end on something else.
- **Plain sentences.** Split long sentences at real joints (cause, contrast, a new step), not mid-thought. Keep the
  hedges the source has ("about", "largely", "helped", "one cause").
- **Gloss AP terms on first use in a subunit**, in a parenthesis or a short clause. Don't define everyday words. A
  gloss restates what the topic already says; it must not narrow or stretch the term.
- **No new claims.** Rewording may add a gloss, a one-line "why this matters", an analogy that makes no factual
  claim, or an example built from facts already in the same subunit. It may not add dates, numbers, names, cases,
  laws, quotes or causal claims.
- **Avoid AI-sounding prose**: no "not just X but Y", no stock words such as "crucial" or "pivotal", no em dashes
  as connectors.
- **Fact changes go through an approved correction.** A factual fix is written as an entry in `corrections.json`
  (id, file, verdict, source, exact `before` and `after`) and applied verbatim. Suspected errors found while
  rewording are listed for review, not fixed in passing.

## Check tooling

The checks live in `.loop/`, which is machine-local and not committed. Run them from the repo root:

| command | what it checks |
|---|---|
| `node .loop/humanize-check.mjs structure` | subjects, units, subunit ids and titles, `keyIdeas` counts and `exampleCode` match git HEAD |
| `node .loop/humanize-check.mjs facts` | every math span, number and capitalized name in a HEAD subunit survives, and nothing new is added (except tokens an approved correction changes) |
| `node .loop/humanize-check.mjs read <file>` | the reading-level gates above, plus word count within 0.9x to 1.5x HEAD and no subunit cut below 0.75x |
| `node .loop/humanize-check.mjs read-long <file>` | lists every sentence over 25 words |
| `node .loop/humanize-check.mjs read-report` | reading metrics for every file, HEAD vs now |
| `node .loop/humanize-check.mjs slop <file>` | banned words, soft-word density, dashes and exclamation marks |
| `node .loop/humanize-check.mjs commas <file>` | known dash-to-comma damage sites are not reintroduced |
| `node .loop/humanize-check.mjs ranges` / `spot` | no glued commas in ranges; specific past wording fixes stay fixed |
| `node .loop/humanize-check.mjs fixes <category>` | every approved correction in `.loop/corrections.json` of that category is applied |
| `node .loop/humanize-check.mjs scope` / `frozen` | only allowed files changed; the 23 Tier 1 and Tier 2 files differ from their snapshot only by approved corrections and `//` comment lines |
| `node .loop/humanize-check.mjs render` | runs `MathText`'s parser and KaTeX (the same path `UnitOverviews.tsx` uses) over every overview and reports KaTeX errors, doubled backslashes, raw TeX or literal `\n` in text, and growth in the never-rendered preamble lines |
| `node .loop/render-strict.cjs` | strict KaTeX scan of every overview's inline math; fails on text-mode accents (such as `\'` used as a prime) and `\\` line breaks, which plain KaTeX renders without an error, so `render` can't see them |
| `node .loop/humanize-check.mjs terms-same` | calc, precalc and stats keep the same multiset of math spans per subunit with nothing added; cs and csp keep the same code identifiers (camelCase names, calls such as `length()`, dotted names such as `System.out.println`) |

`.loop/corrections.json` holds the approved fact corrections with their sources. `web` must still pass
`npm run lint` and `npm run build` after any edit.
