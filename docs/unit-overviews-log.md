# Unit overviews: running log

Append-only. One `## Run N` section per run, one sub-entry per iteration. Earlier sections are never rewritten.
Metrics come from `node .loop/humanize-check.mjs read-report` (FK = Flesch-Kincaid grade, asl = average sentence
length in words, long = share of sentences over 25 words, max = longest sentence, sd = sentence-length standard
deviation). "HEAD" means commit 1516270.

## Run 1: humanizing copy-edit

- **What changed.** A copy-edit of the 28 unit-overview files plus the large site prose (MissionPage, the SAT prep
  content, the Desmos guide, exam logistics), using the anti-ai-slop-writing and humanizer skills. The goal was "a
  little more direct and easy to understand": wording, sentence shape and flow changed; facts, structure and
  registration did not.
- **Checks.** `structure` (data shape vs HEAD), `facts` (math spans, numbers and proper nouns per subunit), `scope`,
  and a `slop` scan per file. One approved check change: a narrow allow-list for three real terms that contain banned
  stems (Eric Garner, New Testament, synergism).
- **Result.** Approved, with one required fix ("also also" in apush). The review noted uneven depth: the English and
  Capstone files got real rewrites, while the history, government and science files were mostly word swaps. It also
  flagged pre-existing damage from an earlier commit that had turned dashes into bare commas.

## Run 2: dash-to-comma repair

- **What changed.** Commit cfc7e6d (the switch to raw-text overviews) had replaced almost every em and en dash with a
  bare comma. A generator traced each one against cfc7e6d^ and froze the proven sites into `.loop/comma-sites.json`
  (2,550 still present at the start: 103 number ranges, 53 en-dash compounds, 2,394 em-dash asides). Ranges and
  compounds were always restored. Em-dash sites were rewritten (parentheses, colons, sentence splits) unless the
  comma read correctly, in which case the id went into `.loop/comma-keep.json` with a reason.
- **Also fixed.** The AAS `Unit 1 , Origins` header, which `parseRawOverview` could not match, so all of AAS Unit 1
  had been invisible; the apush "also also"; and the other run 1 review items (hydrogen overclaim, the Green
  Revolution repetition, an awkward AP Lit phrase).
- **Checks added.** `commas <file>` (no unkept site still reads as its comma text), `ranges` (no glued commas such as
  `1520,1600`), `spot` (the specific wording fixes).
- **Result.** Approved. Review sampled 58 fixed sites (0 bad) and 66 kept sites (2 marginal, 0 wrong).

## Run 3: Tier 1 readability rewrite

- **What changed.** A full subunit-by-subunit rewrite of the 7 Tier 1 files (psychology, humanGeography,
  apUsGovernment, apush, apWorldHistory, apBiology, apEnvScience) to bring them to a high-school reading level:
  long sentences split at real joints, AP terms glossed on first use, hedges kept. All other overview files and the
  4 site files were frozen by hash.
- **Gates.** FK ceiling 12.5 (history, government) or 13.5 (biology, env science, psychology, human geography);
  asl 16 or less; at most 10% of sentences over 25 words; max 40 words; at most 12% short sentences; sd at least 5;
  file words 0.9x to 1.5x HEAD; no subunit under 0.75x its HEAD words.
- **Measured results (HEAD to end of run).**

  | file | FK | asl | long | max |
  |---|---|---|---|---|
  | psychology | 15.8 to 12.6 | 11.8 to 13.6 | 4.6% | 42 to 35 |
  | humanGeography | 15.8 to 13.0 | 18.4 to 15.6 | 20% to 7.4% | 81 to 36 |
  | apUsGovernment | 16.6 to 11.8 | 23.0 to 15.3 | 37% to 1.1% | 68 to 34 |
  | apush | 16.5 to 11.0 | 24.6 to 15.4 | 42% to 4.7% | 76 to 38 |
  | apWorldHistory | 18.8 to 11.4 | 26.7 to 14.9 | 49% to 3.0% | 71 to 33 |
  | apBiology | 17.2 to 12.3 | 23.0 to 14.8 | 38% to 3.4% | 83 to 37 |
  | apEnvScience | 17.4 to 12.7 | 23.0 to 14.7 | 33% to 2.2% | 103 to 33 |

  Final check: 67 checks (103 results with JUnit cases) passing, 0 regressions.
- **Review findings.** About 600 added glosses: 0 wrong, 3 oversimplified (mercantilism, "derived", economic
  threshold). About 46 subunits read for lost content: 3 minor losses (the four reinforcement schedule names, two
  dropped hedges). Three weak passages (sleep stages, greenhouse temperature, the Grutter echo). The Builders also
  listed about 30 probable factual errors already present at HEAD (Speaker succession, Forrest and the Klan, Black
  Tuesday, Cahokia, rubisco, NPP and others), deliberately left for a separate fact-check pass.
- **Rejected options.** A comma-splice regex: on apush all 10 hits of `, (it|this|they...) (is|was...)` were valid
  introductory clauses, so it was pure noise. A key-term overlap check (HEAD key-ideas terms must survive): too noisy
  ("between", "sophisticated") and it would block plain rewording; the per-subunit word floor and review sampling
  were used instead.

## Run 4: Part A accuracy fixes, then the Tier 2 readability rewrite

### Iteration 1

- **Part A.** Every approved entry in `.loop/corrections.json` was applied verbatim (38 before/after replacements in
  the 6 Tier 1 files that had errors: 22 factual errors, 4 ambiguous passages clarified, 3 oversimplified glosses,
  3 lost items restored, 3 weak passages rewritten, and 3 accurate passages that got a gloss or a hedge). The
  fourth "not an error" verdict (env 1.4, beef feed ratio) needed no edit. Removed the stale
  "source-preserving / do not edit" comment from every Tier 1 and Tier 2 file that had one, and corrected the
  `Unit N , Title` format comment to `Unit N – Title` in apBiology, apEnvScience, apChemistry, apResearch and
  apSeminar. All 7 Tier 1 read gates still pass after the corrections.
- **Docs.** Created this log and `docs/unit-overviews.md`, which describes how the overviews work now.
- **Tier 2, files 1 to 5.** Rewrote apSeminar, apResearch, apEnglishLanguage and apEnglishLiterature (sentence
  splits at real joints, glosses for terms such as peer review, positionality, falsifiable, straw man, register,
  enjambment, caesura, volta), and split the single 45-word sentence in apMusicTheory. Sentence stems were kept
  word for word except where a stem's own semicolon or comma joint was turned into a full stop.

  | file | before this iteration (FK / asl / long / max / sd) | now |
  |---|---|---|
  | apEnglishLanguage | 11.6 / 18.2 / 17% / 88 / 9.5 | 10.2 / 15.1 / 1.5% / 38 / 5.8 |
  | apEnglishLiterature | 12.5 / 20.1 / 28% / 51 / 8.1 | 10.2 / 14.8 / 2.8% / 30 / 5.25 |
  | apSeminar | 12.2 / 20.6 / 31% / 41 / 8.7 | 10.0 / 15.4 / 2.1% / 28 / 5.3 |
  | apResearch | 11.3 / 18.9 / 22% / 63 / 10.2 | 9.4 / 14.6 / 1.9% / 35 / 5.6 |
  | apMusicTheory | 11.0 / 12.6 / 7% / 45 / 6.9 | 11.0 / 12.6 / 6.5% / 40 / 6.8 |

  Word counts stay 0.99x to 1.04x HEAD. Short-sentence share stays at 0.7% to 4.3% (6.4% for music, unchanged), so
  the lower FK comes from splitting, not chopping.
- **Checks.** All fixes-*, docs, and the 5 Tier 2 read gates now pass, along with every structure, facts, scope,
  frozen, ranges, spot, commas-* and slop-* check. The 11 remaining failures are the read gates of the Tier 2 files
  not yet started.
- **Decisions.** The exam-format notes at the top of apSeminar, apEnglishLanguage and apEnglishLiterature sit before
  the first `Unit` header, so the parser never renders them; they were left untouched. The sd gate was the binding
  one for apEnglishLiterature (4.98 after the first pass), so a few over-split sentence pairs were joined back
  instead of padding elsewhere. Probable errors already present at HEAD (for example the villanelle's "two closing
  quatrains") were listed in the iteration notes, not fixed.

### Iteration 2

- **Tier 2, files 6 to 8.** Rewrote apChemistry (all 9 units, 48 subunits), macroeconomics (6 units, 40 subunits)
  and microeconomics (6 units, 36 subunits) in full. Long sentences were split at real joints, and AP terms got a
  short gloss on first use: for example electron shielding, degenerate orbitals, FRQ, microstates, overpotential and
  entropy in chemistry; price level, injection/leakage, output gap, sticky wages, progressive tax and unilateral
  transfers in macro; total revenue, disposable income, internalizing an externality and MSB/MSC in micro. No
  numbers, names or claims were added. The ⇌ arrows, formulas, spaced minus signs and the macro/micro en-dash
  ranges are unchanged.

  | file | HEAD (FK / asl / long / max / sd) | now | words vs HEAD |
  |---|---|---|---|
  | apChemistry | 15.4 / 24.6 / 39% / 81 / 13.0 | 11.0 / 15.8 / 4.0% / 32 / 5.7 | 1.03x |
  | macroeconomics | 12.9 / 18.4 / 19% / 64 / 9.1 | 10.8 / 14.9 / 2.7% / 31 / 5.3 | 1.03x |
  | microeconomics | 12.9 / 18.6 / 19% / 76 / 9.7 | 10.6 / 14.3 / 2.5% / 34 / 5.3 | 1.03x |

- **Checks.** read-apChemistry, read-macroeconomics and read-microeconomics now pass. All 78 checks that passed
  after iteration 1 still pass, including facts, structure, scope, frozen, ranges, spot, every commas-* and slop-*
  check, and web lint and build. The 8 remaining failures are the read gates of files not yet started.
- **Decisions.**
  - The metric treats a single capital letter followed by a period as an abbreviation, so sentences ending in
    "... = K." or "... degrees C." merge with the next sentence. Chemistry's Unit 9 and a few economics formulas
    were reworded so that formulas sit inside parentheses or mid-sentence. The metric also starts a new sentence
    only at a capital or digit, so sentences that open with "delta S" or "(-,+)" were reworded too.
  - Macro and micro first came out with uniform sentence lengths (sd 4.9 to 5.1). Instead of padding, about 40
    over-split pairs were joined back into single sentences, which gives sd 5.3.
  - Two rewrites briefly recreated frozen comma strings (macro "per unit of input, is" and "financial assets, or
    investments, between"). Both now use parentheses.
  - europeanHistory was not started. It needs plainer vocabulary as well as shorter sentences (1.98 syllables per
    word at HEAD), so it could not be finished in what was left of this iteration. It moves to iteration 3 with
    physics1, as the plan's pacing already had it.

### Iteration 3
- **What changed.**
  - europeanHistory got a full rewrite of all 64 subunits, with shorter sentences, plainer words, and AP terms glossed on first use. Examples are patron, vernacular, attainted, divine right, laissez-faire, proxy war, supranational and asymmetric shock.
  - physics1 got sentence splitting only, in summaries, key ideas and example explanations. It also gained one gloss: inertial frame, "a frame that is not accelerating".
  - All math spans, exampleCode, headers, Key ideas counts, numbers, names and en-dash compounds are unchanged.
  - comparativeGovernment was not started.
- **Measured.**

  | file | HEAD (FK / asl / long / max / sd) | now | words vs HEAD |
  |---|---|---|---|
  | europeanHistory | 15.3 / 19.2 / 23% / 95 / 9.9 | 11.3 / 13.8 / 2.7% / 33 / 5.2 | 1.08x |
  | physics1 | 11.9 / 19.2 / 20% / 56 / 7.0 | 10.5 / 15.9 / 3.1% / 33 / 5.1 | 1.00x |

- **Checks.**
  - 82 of 88 non-npm checks pass, and web lint and build pass.
  - read-europeanHistory and read-physics1 are new passes. There are no regressions.
  - The 6 remaining failures are the read gates of files not yet started.
- **Decisions.**
  - europeanHistory's syllables per word fell from 1.98 to 1.82, which shows that plain word choice, not just shorter sentences, carried FK below 12.5.
  - physics1's first pass left sd at 4.87, with average length at the 16 limit. I joined 21 over-split pairs back together and split 22 other sentences at real joints (colons, semicolons, ", but"). The result is sd 5.15 and asl 15.89. I added no filler.
  - The metric reads "object A." and "Charles V." as abbreviations, so those sentences were reworded.
  - Probable HEAD errors are listed but not fixed:
    - a physics1 5-1 math span with no opening delimiter
    - an overstated condition for conserving mechanical energy in physics1 3-4
    - euro 9.3's "Freedom Party in the Netherlands"
    - euro 9.4's out-of-date "ruling" Law and Justice
    - euro 1.9's "world's first" stock exchange claim
    - euro 8.1's German suffrage year

### Iteration 4
- **What changed.**
  - comparativeGovernment (42 subunits), africanAmericanStudies (40) and apArtHistory (56) got full rewrites: shorter sentences split at real joints, plainer word choice, and AP terms glossed on first use.
  - Gloss examples: consolidated democracy, parliamentary sovereignty, devolution, de facto, gerrymandering, ideal type, peak associations and rent-seeking (comp gov); agency, diaspora, fictive kinship, social construction of race, moral suasion, disenfranchisement and structural racism (AAS); stele, contrapposto, stratigraphy, fresco, lost-wax casting, the sublime and Pointillism (art history).
  - Every number, name, work title, artist, date, culture and medium is kept, and each country's institutions stay as HEAD describes them. Headers and Key ideas line counts are unchanged.
- **Measured.**

  | file | HEAD (FK / asl / long / max / sd) | now | words vs HEAD |
  |---|---|---|---|
  | comparativeGovernment | 16.8 / 18.5 / 22% / 59 / 9.2 | 13.0 / 14.1 / 2.5% / 31 / 5.3 | 1.07x |
  | africanAmericanStudies | 14.5 / 19.5 / 24% / 89 / 10.1 | 11.2 / 14.7 / 4.1% / 32 / 5.5 | 1.07x |
  | apArtHistory | 14.4 / 15.7 / 9% / 48 / 6.8 | 11.5 / 14.4 / 2.6% / 36 / 5.2 | 1.08x |

- **Checks.**
  - Every gating non-npm check passes except the read gates of the three AP Physics files, which are not started. Web lint and build pass.
  - read-comparativeGovernment, read-africanAmericanStudies and read-apArtHistory are new passes. There are no regressions.
  - Tier 2 files passing read-* now: 13 of 16.
- **Decisions.**
  - Syllables per word fell from 2.13 to 1.96 (comp gov), 1.91 to 1.79 (AAS) and 2.02 to 1.82 (art history). Plain word choice and short glosses, not sentence splitting alone, brought comp gov under its 13.5 gate.
  - apArtHistory first came out at sd 4.90, so 14 over-split pairs were joined back into single sentences rather than padded.
  - The metric reads "João I." as an abbreviation and never splits a sentence that starts with lowercase "bell hooks", so both sentences were reworded.
  - Probable HEAD errors are listed but not fixed:
    - comp gov 1.6's "federal district (Mexico City)", 2.5's INAI and 2.6's Supreme Court independence, all out of date
    - AAS 3.6's claim that every BGLO was founded at an HBCU, 4.9's SF State department year, and 4.2's Ella Baker title
    - art history's two titles for the same Hokusai print (4.5, 8.5), Great Zimbabwe's two date ranges (6.1, 6.5), "The Fountain", and the Sun Stone date

### Iteration 5
- **What changed.**
  - apPhysicsCMechanics, apPhysics2 and apPhysicsCEM: sentence splitting only, in `summary`, `keyIdeas` and `exampleExplanation`. Splits sit at real joints: ", where" before a symbol list became ". Here", and semicolons, colons, ", but", ", which" and ", then" became sentence breaks.
  - Every `\(...\)` span, every `exampleCode` block, every keyIdeas count, the 5 en dashes in apPhysicsCEM and the 15 non-breaking hyphens in apPhysics2 are unchanged. No new numbers, names or math.
  - One unit gloss was added, "C (coulombs)" in CEM 8-1. Otherwise only connective words were added ("Here", "Then", "That is because").
  - docs/unit-overviews.md: added how the sentence counter splits, so a writer knows why a sentence that starts with a math span or ends on "point B." gets merged.
- **Measured.**

  | file | HEAD (FK / asl / long / max / sd) | now | words vs HEAD |
  |---|---|---|---|
  | apPhysicsCMechanics | 12.5 / 19.4 / 26% / 77 / 10.2 | 10.7 / 15.2 / 2% / 38 / 5.4 | 11702 -> 11740 (1.00x) |
  | apPhysics2 | 11.5 / 18.6 / 19% / 59 / 8.8 | 10.2 / 15.4 / 1% / 28 / 5.5 | 15738 -> 15796 (1.00x) |
  | apPhysicsCEM | 10.8 / 17.5 / 21% / 46 / 9.2 | 9.4 / 14.4 / 2% / 34 / 5.9 | 9181 -> 9175 (1.00x) |

- **Checks.**
  - All 89 non-npm checks pass, including server-test. Web lint and build pass.
  - read-apPhysicsCMechanics, read-apPhysics2 and read-apPhysicsCEM are new passes. There are no regressions.
  - Tier 2 files passing read-* now: 16 of 16.
- **Decisions.**
  - Edits were small exact-match replacements applied by a script. The script requires a unique match and refuses any change to math spans, keyIdeas counts or exampleCode.
  - Sentences of 26 to 28 words that had no clean joint stay whole, for example the Rayleigh criterion and the "Third Law pairs" list. Long% is at most 2%, so they fit in the budget.
  - apPhysicsCEM landed at asl 14.4 with short% 7% (HEAD 8%). One split that needed a filler phrase ("sets a strict balance", 11-4) was reverted to HEAD.
  - The metric reads "1 J/C.", "1 C/V.", "1 V·s/A.", "point B." and "observer C." as abbreviations. Those unit definitions were moved into the parenthesis, "(V, where 1 V = 1 J/C)", and the other sentences were reworded so they end on a word.
  - Probable HEAD errors are listed but not fixed:
    - Mechanics 6-1: "exponentially increases", where \(I\) grows with the square of distance.
    - Mechanics 6-3: constant angular momentum for any straight-line motion. This holds only at constant velocity.
    - apPhysics2 4-7: "KCJ" should be KCL.
    - apPhysics2 7-2: "intensity (power per unit area)" for waves on a string.
    - CEM 12-3: "maximum torque is \(\tau = IAB\sin\phi\)" is the general torque. The maximum is \(IAB\).

## Run 5: corrections, the last five overviews, the rest of the site copy, and a render check

### Iteration 1
- **What changed.**
  - Applied all 43 `r5` and `r5-review` corrections in `.loop/corrections.json` verbatim (38 `r5` with a before/after, 5 `r5-review`). `euro-3.5-voc` is a verdict only and changes nothing. This includes the physics1 5-1 fix that restores the missing math opener before omega.
  - Two corrections rest on facts checked this run. The House of Lords (Hereditary Peers) Act 2026 got Royal Assent on 18 March 2026 and removed the remaining hereditary peers from 29 April 2026, so comp gov 2.4 now reads "(appointed life peers and bishops; the last hereditary peers were removed in 2026)". Moctezuma II's name glyph dates the Aztec Sun Stone to his reign, so art history 5.5 now reads "c. 1502-1521 CE"; 1427 was an old proposal.
  - Escape repair in precalc and stats. Units 2 and 4 of precalc and stats 1-3 wrote TeX with doubled backslashes, so KaTeX showed red errors and a literal `\n\n` showed as text. The mechanical rules (8 backslashes to 4, 4 before a letter, `%`, `)` or `]` to 2, 4 before a prime to none, the source text `\\n\\n` to a real `\n\n` paragraph break, prose `2\\\\times2` to `2×2`) fixed 196 command sites, 6 matrix row breaks, 3 primes, 9 paragraph breaks and 3 prose dimensions in precalc, and 1 site in stats. Two keyIdeas in precalc 4-6 had four backslashes before `\(`, which left a stray visible backslash before the math. The rules don't cover `(`, and `render` doesn't flag a lone backslash in text, so those two were fixed by hand to the normal two-backslash opener.
  - MissionPage was rewritten for readability: long sentences split at real joints, plainer words, the same first-person voice and every anecdote (the classroom where students weren't "the type", moving between districts, the practice questions for a few friends).
  - Em dashes and exclamation marks were removed from 12 page and component files: ExamHubPage, ResourcesPage, ApPlannerPage, MistakeNotebookPage, TestyPage, MockExam, TrainingMode, MyStacks, FlashCards, SatDashboard, ReferenceSheet and AdaptiveSession. Only copy text changed.
  - Started the Tier 3 files with csp and precalc, both finished. csp: 9 long sentences split at real joints, a few plainer words ("complete a task", "writing code", "very large"), and glosses for packets, modular, encapsulate, re-identified, algorithmic bias, two-factor authentication and the three CIA triad terms. precalc: 9 long sentences split, and glosses for slant asymptote, linearize, terminal side, multiplicity, one-to-one and concavity. Every math span and code identifier is unchanged.
  - New current doc `docs/site-copy.md`. `docs/unit-overviews.md` gained the Tier 3 gates, the TeX escaping rule, the `render` and `terms-same` checks and the never-rendered preamble lines.
- **Measured.**

  | file | HEAD (FK / asl / long / max) | now | words |
  |---|---|---|---|
  | MissionPage | 11.9 / 20.9 / 36% / 52 | 8.3 / 13.6 / 0% / 24 | 967 -> 941 |
  | precalc | 9.3 / 12.4 / 4% / 44 | 9.0 / 11.7 / 0% / 25 | within the 0.9x-1.5x gate |
  | csp | 10.6 / 12.0 / 4% / 42 | 9.9 / 12.2 / 1% / 26 | within the 0.9x-1.5x gate |

  - The escape repair alone moved precalc to 9.2 / 12.0 / 3% / 38, because the real `\n\n` breaks now end paragraphs.
  - `render` reports nothing.
- **Checks.** 120 of 131 non-npm checks pass. New passes: fixes-r5, fixes-r5-review, render, read-MissionPage, read-precalc, read-csp, docs-run5, and the 12 page/component slop checks. The 11 that still fail are planned later work: read-calc, read-cs, read-stats, read-satPrepContent and seven slop-ref sheets. There are no regressions. Web lint and build pass.
- **Decisions.**
  - The TestyPage prompt "Here is my reasoning for a problem — tell me ..." became "...for a problem; tell me ...". With a period instead, `code-same`'s classifier read the string as a className (it ends in `it:`) and counted one fewer copy string.
  - "Correct!" and "Check back soon!" became periods. "Weekly goal reached — nice work! 🎉" became "Weekly goal reached. Nice work 🎉".
  - Left as is in precalc: a four-backslash sequence before a space, as in 4-1's `x=f(t),\\\\ y=g(t)` and in several template-literal `exampleCode` blocks. In inline math it renders as a TeX line break where a plain space was probably meant. The repair rules don't cover it, KaTeX renders it without error, and `render` passes.
  - Probable HEAD error kept: MissionPage says "No accounts", but the site has sign-in, and mastery isn't saved without it ("You're not signed in, so mastery is tracked for this session only"). Left for the user.

### Iteration 2
- **What changed.**
  - Finished the last three Tier 3 overviews: stats, cs and calc. Every sentence over 32 words and almost every one over 25 was split at a real joint (a new step, an "if" branch, a list that became sentences). Every math span and code identifier is unchanged, and `terms-same` passes.
  - Glosses added on first use. stats: strata, sampling frame, nonlinearity, standard error of the slope, resistant to outliers, blocking variable. cs: integer overflow, abstraction, immutable, encapsulation, logically equivalent, operator precedence, traversing. calc: indeterminate forms, absolute extrema, concavity, secant line, integrand, analytically, equilibrium, displacement.
  - Calc AB and BC share `CALC_UNITS`, so one edit serves both courses.
  - Reference sheets: removed all 19 em dashes from 7 sheets (sciences, socialScience, humanities, englishLanguage, math, computerScience, economics). Trailing asides on topic notes moved into parentheses ("Fiscal and monetary policy (the most tested band)."), and appositives after terms took a comma or colon. Definitions, weights, ranges and formulas are unchanged. The en dashes inside number ranges (`25–35%`, `1750–1980 CE`) are not counted by the check and stay.
  - satPrepContent: split the 38-word mean/median/mode sentence into three, and the 30-word linear/exponential table sentence into two. No numbers or TeX changed.
  - satDesmosGuide and examLogistics already passed and were left alone.
- **Measured.**

  | file | HEAD (FK / asl / long / max / sd) | now |
  |---|---|---|
  | stats | 9.9 / 11.3 / 4% / 41 / 6.1 | 9.7 / 10.8 / 0% / 28 / 5.1 |
  | cs | 9.4 / 14.5 / 4% / 36 / 5.4 | 9.1 / 14.0 / 1% / 29 / 4.6 |
  | calc | 9.0 / 13.8 / 8% / 60 / 7.7 | 8.5 / 12.6 / 0% / 29 / 5.6 |
  | satPrepContent | 5.6 / 10.5 / 1% / 38 | 5.5 / 10.4 / 1% / 28 |

  - Short sentences: stats 13% (HEAD 13%), cs 2% (HEAD 1%), calc 10% (HEAD 11%).
- **Checks.** All 134 non-npm checks pass, up from 120. New passes: read-calc, read-cs, read-stats, read-satPrepContent and the seven failing slop-ref checks. No regressions. Web lint and build pass.
- **Decisions.**
  - cs first landed at sd 4.47, under the 4.5 floor, because every 26 to 28 word sentence had been split. Three of those splits were reverted to HEAD (1-10 "add two numbers and return the result so you can store it", 1-14 "may produce visible output, but", 4-9 "simpler way to read each element when"), which brought sd to 4.6 with long% at 1%.
  - stats 3-3 "Simple Random Sample (SRS), every possible sample" tripped `commas-stats`, because a run-2 em dash site sits there. It now reads "A Simple Random Sample (SRS) makes every possible sample of size n equally likely."
  - Two calc glosses were dropped to keep the checks honest: "results like 0/0" added a number to 4-0 (`facts`), and "\(f\) has a local minimum" added a math span to 5-3 (`terms-same`). They now read "(results that don't settle the limit)" and "there is a local minimum".

### Iteration 3
- **What changed.** Six exact fixes from the final review:
  - precalc inverse trig gloss: "not one-to-one (no output repeats)" became "(some outputs repeat)". The old gloss said the opposite of what not one-to-one means.
  - precalc 4-1: the inline `x=f(t),\\ y=g(t)` (a TeX line break that split the sentence) became `x=f(t),\quad y=g(t)`. This reverses the Iteration 1 decision to leave it.
  - precalc 4-3, two sites: `x\'(t)` and `y\'(t)` (a text-mode acute accent in math) became `x'(t)` and `y'(t)`.
  - chem 3.3: applied correction `chem-3.3-also` ("real gases may also have smaller volumes" lost "also", left over from the r5 sign fix).
  - calc 7-0 gloss: "analytically (as an exact formula)" became "(finding an exact formula)".
  - MissionPage: "high-quality study materials for AP and SAT exams that are completely free" became "high-quality AP and SAT study materials that are completely free", so it can't be read as saying the exams are free. The "No accounts" sentence is unchanged; it is the user's call.
- **Checks.** New checks `fixes-r5-final`, `render-strict` (strict KaTeX scan for accents and line breaks in inline math) and `r3-copy` pass. All 140 non-npm checks pass, with no regressions. Web lint and build pass.
- **Decisions.** None beyond the plan. `texNorm` treats exactly the three changed precalc spans as equal to their fixes, so `terms-same`, `facts` and `structure` still pass.

## Follow-up after Run 5 (2026-10-09, done directly, not through the loop)

- **MissionPage removed.** The page had no links pointing to it any more. Deleted `web/src/pages/MissionPage.tsx`, its lazy import and `/mission` route in `App.tsx`, and its `sitemap.xml` entry. The open "No accounts" question goes away with it.
- **Hidden exam guides now shown.** The text before each file's first `Unit` header was never rendered. It became a real `Unit 0`:
  - AP English Language and AP English Literature: `Unit 0 – Exam Essay Guide`, 16 subunits each, built from the old numbered sections. The three "The ... Essay" header lines were dropped because each subunit title already names the essay.
  - Both guides were rewritten for readability in the same style as the other overviews. Sample theses and sentence stems were kept, apart from rewording the "not just X but Y" stems. Lists became sentences because the renderer has no list support.
  - Accuracy fixes in the Language guide: the argument essay was called "the most purely expository" (it is argumentative), and the Zola example said French press law made it impossible to silence the accusation. Zola was in fact convicted of libel, so the example now says the letter forced the case back into public debate and Dreyfus was later pardoned and cleared.
  - Accuracy fix in the Literature guide: "his failure to take the money he killed for" became "hides the stolen purse under a stone without even looking inside it".
  - AP Seminar: `Unit 0 – AP Seminar Exam`. The old text put the end-of-course exam inside Performance Task 2 and tied the IWA to the team topic. Now 0.1 covers PT1 (the IRR, then the team multimedia presentation and oral defense), 0.2 covers PT2 (the College Board stimulus texts, IWA, individual presentation and oral defense) and 0.3 covers the end-of-course exam. The comma damage in the old titles is gone.
- **Two small items.**
  - Micro 6.3 (club goods): the doubled "cable TV" example is gone, and "excludable but non-rivalrous" is explained in plain words.
  - Macro 4.3: M1 and M2 are now given as the textbook definitions to use on the exam. The 2020 Fed change sits in one closing parenthetical instead of interrupting the definitions.
- **Results.** Lint and build pass. `render` and `render-strict` report 0 findings, and `facts` passes for the touched files.
  - `read` and `slop` for the three English and Seminar files still compare subunits against HEAD by position. Adding Unit 0 shifts every later subunit, so they now print false "content cut" warnings. The Seminar file's average sentence is 16.04 against a gate of 16.
  - The only remaining banned-phrase hits in the Language guide are the two places that tell students not to write "In conclusion".
  - The loop's structure check reports the new unit counts (9→10, 9→10, 5→6), which is intended.
