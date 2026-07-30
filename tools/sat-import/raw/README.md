# Raw question sources — staging

Drop unconverted question JSON here, one file per source exam:

```
tools/sat-import/raw/practice-test-4.json
tools/sat-import/raw/practice-test-5.json
tools/sat-import/raw/practice-test-6.json
```

**Any shape is fine.** These files are never read at runtime, never packaged into the jar, and never
seeded. A converter reads them and writes `server/src/main/resources/sat/bank/<skill>.json`, which is
the real source of truth.

Keep these files around after conversion. If an id scheme or a difficulty mapping ever has to be
redone, the originals are the only place the provenance survives.

## Why questions can't be pasted straight into the bank

The bank is sharded by **skill**, not by exam. One practice test contributes questions to most of the
eight skill files. The converter's whole job is that regrouping, plus:

- assigning stable `id`s (`quad-0001`, …) that are **never renumbered afterward**
- mapping whatever difficulty signal exists onto `easy` / `medium` / `hard`
- setting `source` to e.g. `"CB Practice Test 4 #12"` so provenance survives
- dropping any question with a figure, image, or diagram (the bank is text-only)
- dropping any student-produced-response question (fill-in support lands in Phase 6)
- converting math notation to `\( ... \)` / `\[ ... \]` and validating it through KaTeX

See `/SAT_ADAPTIVE_ENGINE.md` §9 and `server/src/main/resources/sat/bank/README.md`.
