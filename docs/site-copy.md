# Site copy

User-visible prose outside the unit overviews: page text, component microcopy, the SAT lessons, the logistics and
Desmos guides, and the subject reference sheets. The unit overviews have their own doc, `docs/unit-overviews.md`.

## Where the prose lives

| file(s) | shown at | how it renders |
|---|---|---|
| `web/src/data/satPrepContent.ts` | `/sat/prep` and `/sat/prep/:topicId` (`SatPrepPage`, `SatPrepTopicPage`) | through `MathText`, so `\(...\)` and `\[...\]` render as math; a formula's `tex` field is shown as display math |
| `web/src/data/satDesmosGuide.ts` | `/sat/prep/desmos` (`SatDesmosGuidePage`) | through `MathText` |
| `web/src/data/examLogistics.ts` | `/ap/logistics` and `/sat/logistics` (`ExamLogisticsPage`) | plain text |
| `web/src/data/reference/*.ts` (10 sheets: sciences, history, socialScience, humanities, englishLanguage, math, computerScience, capstone, calculusAB, economics) | the reference tool on the Resources page (`SubjectReference`) | definitions are plain text; a formula's `latex` field is wrapped in `\[...\]` and rendered by `MathText` as display math |
| pages: `ExamsPage`, `ExamHubPage`, `ResourcesPage`, `ApPlannerPage`, `ApStudyPlanPage`, `SatStudyPlanPage`, `SatHubPage`, `SatPrepPage`, `SatPrepTopicPage`, `MistakeNotebookPage`, `TestyPage` | their routes | JSX text and string literals, plain |
| components: `FrqPractice`, `MockExam`, `TrainingMode`, `MyStacks`, `FlashCards`, `adaptive/SatDashboard`, `adaptive/ReferenceSheet`, `adaptive/AdaptiveSession` | inside the pages above | JSX text and string literals, plain; `ReferenceSheet` formulas are KaTeX |

In the `.ts` data files, strings are TypeScript literals, so TeX is written with doubled backslashes (`'\\(x^2\\)'`)
and renders with one backslash per command.

The `TestyPage` quick-start `prompt` strings are sent to the AI as the student's own message. Reword them only in ways
that keep the request the same.

## UI copy conventions

- No em dashes or spaced dashes as connectors. Use a comma, colon, period or parentheses. En dashes inside number
  ranges (`1–5`, `30°–60°–90°`) and a lone dash used as an empty-value placeholder are fine.
- Reference sheets: keep each definition, weight and formula exact. A trailing aside on a topic note goes in
  parentheses ("Fiscal and monetary policy (the most tested band)."); an appositive after a term takes a comma or
  colon ("Adenosine triphosphate, the cell’s main energy-carrying molecule.").
- No exclamation marks in copy. "Correct!" becomes "Correct."; enthusiasm comes from the words.
- Keep labels and buttons short. Don't rewrite a label that has no problem.
- Keep every number, name, link and College Board term exactly. "Global Tapestry" is the AP World Unit 1 title and
  stays.
- Avoid the stock AI words and patterns listed in the unit-overview doc ("crucial", "not just X but Y", and so on).
- Change only the text. Tags, props, classNames, styles, links, keys and expressions stay as they are. Don't run
  `npm run format` on the tree; if prettier needs to reflow, run `npx prettier --write <file>` on the edited files.

## Checks

All run from the repo root with `node .loop/humanize-check.mjs <command>` (`.loop/` is machine-local).

| command | what it checks |
|---|---|
| `code-same` | in every site file, everything except copy strings (JSX text and prose string literals) is token-for-token the same as git HEAD, and the number of copy strings is unchanged |
| `slop <file>` | banned words, soft-word density, em/spaced dashes and exclamation marks in the file's copy |
| `read <file>` | reading gates for the paragraph-prose files: satPrepContent, satDesmosGuide and examLogistics (regression guards, no sentence over 30 words) |
| `read-microcopy` | across the page and component files: no sentence over 30 words, average length 16 or less |
| `render` | runs `MathText`'s parser and KaTeX over the overviews and the site data files and reports any KaTeX error, doubled backslash or literal `\n` in rendered text |
| `facts` | numbers, TeX and capitalized names in copy are unchanged |
| `site-report` | per-file FK, average sentence length, long%, short% and max (metric only) |

A copy string with a colon and no closing punctuation can look like a className to `code-same`'s classifier (for
example a prompt ending in `it:`). If a reword makes `code-same` report "number of copy strings changed", keep a
character such as `;` or `?` in the string, or reword it.

## Not covered, and why

- `web/src/data/apExamData.ts`: College Board exam-format facts (section names, timings, weights). Rewording risks
  drifting from the official structure.
- `motivationalQuotes.ts` and `loadingQuotes.ts`: quotations.
- `frq/*` and the released FRQs: College Board prompts.
- `unitBank/*` and `premadeFlashcards.ts` (built from the unit bank): question content.
- `videoResources.ts`: third-party video titles.
- Testy and explain-my-mistake replies: generated at runtime by `AiChatService`, so there is no static copy.
- Login, Register, Verify, Themes, ExamInfo and SatAdaptive pages: under 25 words of sentence copy each.
- There is no About page; `/about` redirects off-site.
