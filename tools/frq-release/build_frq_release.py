"""Build the released-FRQ practice bank from the official 2025 College Board question PDFs.

Inputs (both already in the repo tree):
  server/src/main/resources/rag/_pdfs/<slug>/ap25-frq-*.pdf          - the question booklets
  server/src/main/resources/rag/exemplars/<slug>/ap25-apc-*.json     - hand-curated rubric +
                                                                      scored-sample chunks (RAG)

Outputs:
  server/src/main/resources/static/resources/AP/FRQ/2025/<slug>/<promptId>.pdf
      one PDF per question (just that question's pages), served at /resources/AP/FRQ/2025/...
  web/src/data/frq/released/<slug>.json
      the questions the FRQ page renders: rubric rows, scoring guide, scored examples, prompt text
  web/src/data/frq/released/manifest.ts
      subject name -> lazy JSON loader (each subject is its own code-split chunk)
  server/src/main/resources/rag/exemplars/**.json   (edited in place)
      every question-specific rubric/exemplar chunk gets the question's `promptId`, so the grader's
      retrieval is scoped to THIS question's scoring guide and samples. Re-ingest afterwards.

Deterministic and idempotent: re-run after editing the QUESTIONS table.
    python tools/frq-release/build_frq_release.py
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

from pypdf import PdfReader, PdfWriter

ROOT = Path(__file__).resolve().parents[2]
RAG = ROOT / "server/src/main/resources/rag"
PDF_IN = RAG / "_pdfs"
EXEMPLARS = RAG / "exemplars"
PDF_OUT = ROOT / "server/src/main/resources/static/resources/AP/FRQ/2025"
PDF_URL = "/resources/AP/FRQ/2025"
WEB_OUT = ROOT / "web/src/data/frq/released"

PROMPT_MAX = 7800  # FrqGradeRequest.promptText @Size(max = 8000)
SOURCE_MAX = 19500  # FrqGradeRequest.sourceText @Size(max = 20000)

SUBJECTS = {
    "ap-african-american-studies": "AP African American Studies",
    "ap-art-history": "AP Art History",
    "ap-biology": "AP Biology",
    "ap-calculus-ab": "AP Calculus AB",
    "ap-calculus-bc": "AP Calculus BC",
    "ap-chemistry": "AP Chemistry",
    "ap-comparative-government": "AP Comparative Government",
    "ap-computer-science-a": "AP Computer Science A",
    "ap-english-language": "AP English Language",
    "ap-english-literature": "AP English Literature",
    "ap-environmental-science": "AP Environmental Science",
    "ap-european-history": "AP European History",
    "ap-government": "AP Government",
    "ap-human-geography": "AP Human Geography",
    "ap-macroeconomics": "AP Macroeconomics",
    "ap-microeconomics": "AP Microeconomics",
    "ap-physics-1": "AP Physics 1",
    "ap-physics-2": "AP Physics 2",
    "ap-physics-c-em": "AP Physics C: E&M",
    "ap-physics-c-mechanics": "AP Physics C: Mechanics",
    "ap-precalculus": "AP Precalculus",
    "ap-psychology": "AP Psychology",
    "ap-seminar": "AP Seminar",
    "ap-statistics": "AP Statistics",
    "ap-us-history": "AP US History",
    "ap-world-history": "AP World History",
}

MATH_SLUGS = {"ap-calculus-ab", "ap-calculus-bc", "ap-precalculus", "ap-physics-1", "ap-physics-2",
              "ap-physics-c-em", "ap-physics-c-mechanics"}

# Rubric chunks that apply to every prompt of a type (no per-question answer key) stay untagged so
# they keep matching all prompts of the subject.
SHARED_RUBRIC_PREFIXES = ("APLANG:", "APLIT:", "APUSH:", "AFAM:")


# --- rubric row templates ---------------------------------------------------------------------

def parts(*spec):
    """parts(('A', 1), ('B', 3)) -> row specs; criteria filled from the scoring guide later."""
    return [{"name": f"Part {k}", "maxPoints": p, "key": k} for k, p in spec]


def letters(n_points_each: int, *keys):
    return parts(*[(k, n_points_each) for k in keys])


def named(*spec):
    return [{"name": n, "maxPoints": p, "criteria": c} for n, p, c in spec]


DBQ_ROWS = named(
    ("Thesis / Claim", 1, "A historically defensible thesis/claim that responds to the prompt and establishes a line of reasoning (not a restatement of the prompt)."),
    ("Contextualization", 1, "Describes a broader historical context relevant to the prompt — more than a passing phrase."),
    ("Evidence from the Documents", 2, "1 point: uses the content of at least three documents to address the topic. 2 points: supports an argument using at least four documents."),
    ("Evidence Beyond the Documents", 1, "Uses at least one additional piece of specific, relevant historical evidence not found in the documents to support the argument."),
    ("Sourcing", 1, "For at least two documents, explains how or why the document's point of view, purpose, historical situation, and/or audience is relevant to the argument."),
    ("Complex Understanding", 1, "Demonstrates a complex understanding of the development through sophisticated argumentation and/or effective use of the evidence. Rarely earned."),
)

LEQ_ROWS = named(
    ("Thesis / Claim", 1, "A historically defensible thesis/claim that responds to the prompt and establishes a line of reasoning."),
    ("Contextualization", 1, "Describes a broader historical context relevant to the prompt."),
    ("Evidence", 2, "1 point: provides two specific, relevant examples of evidence. 2 points: uses specific, relevant evidence to support an argument in response to the prompt."),
    ("Analysis & Reasoning", 2, "1 point: uses historical reasoning (comparison, causation, continuity/change) to frame or structure an argument. 2 points: demonstrates a complex understanding of the development. The second point is rarely earned."),
)

GOV_ARGUMENT_ROWS = named(
    ("Claim / Thesis", 1, "A defensible claim or thesis that responds to the prompt and establishes a line of reasoning."),
    ("Evidence", 3, "1 point: one piece of specific, relevant evidence. 2 points: two pieces of evidence that support the claim. 3 points: two pieces of evidence that support the claim, at least one of which is from the required foundational documents listed in the prompt."),
    ("Reasoning", 1, "Explains how or why the evidence supports the claim or thesis."),
    ("Alternate Perspective", 1, "Responds to an opposing or alternate perspective using refutation, concession, or rebuttal."),
)

COMPGOV_ARGUMENT_ROWS = named(
    ("Claim / Thesis", 1, "A defensible thesis that establishes a line of reasoning and uses at least one of the required course concepts."),
    ("Evidence", 2, "One point per piece of specific, relevant evidence from the required course countries tied to a course concept (up to 2)."),
    ("Reasoning", 1, "Explains how or why the evidence supports the claim or thesis."),
    ("Alternate Perspective", 1, "Describes an opposing or alternate perspective AND responds to it with refutation, concession, or rebuttal."),
)

SEMINAR_A_ROWS = named(
    ("Argument, main idea, or thesis", 3, "Accurately and completely identifies the author's argument, main idea, or thesis (3); partial/somewhat accurate (2); misstated (1)."),
    ("Line of reasoning", 6, "Explains the author's line of reasoning — the claims used to build the argument AND how they connect. Listing claims without explaining their connections caps the score."),
    ("Evaluation of evidence", 6, "Evaluates how effectively the author's evidence supports the claims, with specific justification — not just a description of the evidence."),
)

SEMINAR_B_ROWS = named(
    ("Establish argument — thesis", 6, "A clear, defensible argument/thesis responding to a theme or issue that connects the sources."),
    ("Establish argument — line of reasoning", 6, "A well-developed, logically organized line of reasoning with commentary connecting claims."),
    ("Select and use evidence", 6, "Relevant evidence from at least two provided sources, effectively integrated and attributed to support the argument."),
    ("Apply conventions", 6, "Accurate attribution/citation of sources and control of written conventions (grammar, style, clarity)."),
)

STATS_ROWS = named(
    ("Holistic score (E / P / I by part)", 4, "Judge each lettered part essentially correct (E), partially correct (P), or incorrect (I) per the scoring guideline, then convert the part scores to an integer 0–4 exactly as the AP Statistics conversion rule does. Communication, context, and justification count."),
)

AFAM_EDV_ROWS = named(
    ("Validation response", 2, "1 point: describes the differing perspectives of two of the student's own project sources. 2 points: explains HOW the two sources' perspectives differ and why that matters for the topic. Must name the specific sources."),
)


# --- the question table ------------------------------------------------------------------------
# (slug, question-pdf stem, set, kind, number, essayType, pages, scoring stem, minutes, rows)
# `rows` is a list of row specs, or one of the strings 'chunks' (use the rubric chunks as rows),
# 'markers' (group "Point A1/A2" markers in the official guideline by letter), 'econ', 'psych'.

Q = []


def add(slug, pdf, set_no, label, number, essay_type, pages, scoring, minutes, rows, section=None):
    Q.append(dict(slug=slug, pdf=pdf, set=set_no, label=label, number=number, essayType=essay_type,
                  pages=list(pages), scoring=scoring, minutes=minutes, rows=rows, section=section))


def rng(a, b):
    return range(a, b + 1)


# African American Studies
for s, dbq_end in ((1, 10), (2, 9)):
    pdf = f"ap25-frq-african-american-studies-set-{s}"
    add("ap-african-american-studies", pdf, s, "Q1", 1, "Exam Day Validation", rng(2, 3), f"afam-edv1-set-{s}", 10, AFAM_EDV_ROWS, "Section I, Part B")
    add("ap-african-american-studies", pdf, s, "SAQ 1", 1, "Short Answer — Text-Based Source", [5], f"afam-saq1-set-{s}", 15, letters(1, "A", "B", "C", "D"), "Section II")
    add("ap-african-american-studies", pdf, s, "SAQ 2", 2, "Short Answer — Non-Text Source", [6], f"afam-saq2-set-{s}", 15, letters(1, "A", "B", "C"), "Section II")
    add("ap-african-american-studies", pdf, s, "SAQ 3", 3, "Short Answer — No Source", [7], f"afam-saq3-set-{s}", 15, letters(1, "A", "B", "C"), "Section II")
    add("ap-african-american-studies", pdf, s, "DBQ", 4, "Document-Based Question", rng(8, dbq_end), f"afam-dbq4-set-{s}", 40, "chunks", "Section II")

# Art History
ah = "ap25-frq-art-history"
add("ap-art-history", ah, None, "Q1", 1, "Long Essay — Comparison", rng(3, 4), "art-history-q1", 35, parts(("A", 1), ("B", 2), ("C", 2), ("D", 3)))
add("ap-art-history", ah, None, "Q2", 2, "Long Essay — Visual/Contextual Analysis", [5], "art-history-q2", 25, parts(("A", 1), ("B", 1), ("C", 2), ("D", 1), ("E", 1)))
add("ap-art-history", ah, None, "Q3", 3, "Visual Analysis", rng(6, 7), "art-history-q3", 15, letters(1, "A", "B", "C", "D", "E"))
add("ap-art-history", ah, None, "Q4", 4, "Contextual Analysis", [8], "art-history-q4", 15, letters(1, "A", "B", "C", "D", "E"))
add("ap-art-history", ah, None, "Q5", 5, "Attribution", [9], "art-history-q5", 15, letters(1, "A", "B", "C", "D", "E"))
add("ap-art-history", ah, None, "Q6", 6, "Continuity and Change", [10], "art-history-q6", 15, letters(1, "A", "B", "C", "D", "E"))

# Biology
bio = "ap25-frq-biology"
add("ap-biology", bio, None, "Q1", 1, "Long FRQ", rng(3, 4), "biology-q1", 25, "markers")
add("ap-biology", bio, None, "Q2", 2, "Long FRQ", rng(5, 6), "biology-q2", 25, "markers")
add("ap-biology", bio, None, "Q3", 3, "Short FRQ", [7], "biology-q3", 10, letters(1, "A", "B", "C", "D"))
add("ap-biology", bio, None, "Q4", 4, "Short FRQ", [8], "biology-q4", 10, letters(1, "A", "B", "C", "D"))
add("ap-biology", bio, None, "Q5", 5, "Short FRQ", [9], "biology-q5", 10, letters(1, "A", "B", "C", "D"))
add("ap-biology", bio, None, "Q6", 6, "Short FRQ", [10], "biology-q6", 10, letters(1, "A", "B", "C", "D"))

# Calculus AB / BC (rows parsed from "A (2 pts)" in the rubric chunk)
for slug, pdf, pre in (("ap-calculus-ab", "ap25-frq-calculus-ab", "calculus-ab"), ("ap-calculus-bc", "ap25-frq-calculus-bc", "calculus-bc")):
    for n, pg in ((1, [3]), (2, [4]), (3, [6]), (4, [7]), (5, [8]), (6, [9])):
        calc = "Part A — Calculator" if n <= 2 else "Part B — No Calculator"
        add(slug, pdf, None, f"Q{n}", n, calc, pg, f"{pre}-q{n}", 15, "calc")

# Chemistry (rows grouped from "A(i) [Pt1]" in the rubric chunk)
ch = "ap25-frq-chemistry"
for n, pg in ((1, rng(3, 5)), (2, rng(6, 7)), (3, rng(8, 10)), (4, [11]), (5, [12]), (6, rng(13, 14)), (7, [15])):
    add("ap-chemistry", ch, None, f"Q{n}", n, "Long Answer" if n <= 3 else "Short Answer", pg, f"chemistry-q{n}", 23 if n <= 3 else 9, "chunkletters")

# Comparative Government
for s in (1, 2):
    pdf = f"ap25-frq-comp-gov-pol-set-{s}"
    add("ap-comparative-government", pdf, s, "Q1", 1, "Conceptual Analysis", [3], f"comp-go-po-q1-set-{s}", 10, letters(1, "A", "B", "C", "D"))
    add("ap-comparative-government", pdf, s, "Q2", 2, "Quantitative Analysis", [4], f"comp-go-po-q2-set-{s}", 20, letters(1, "A", "B", "C", "D", "E"))
    add("ap-comparative-government", pdf, s, "Q3", 3, "Comparative Analysis", [5], f"comp-go-po-q3-set-{s}", 20, parts(("A", 1), ("B", 2), ("C", 2)))
    add("ap-comparative-government", pdf, s, "Q4", 4, "Argument Essay", [6], f"comp-go-po-q4-set-{s}", 40, COMPGOV_ARGUMENT_ROWS)

# Computer Science A (rows parsed from "Part (a) ... (4 pts)")
cs = "ap25-frq-computer-science-a"
CSA_CLASS_ROWS = named(
    ("Class header, instance variables & constructor (Pts 1–3)", 3, "Pt1 correct class header; Pt2 private instance variable(s) initialized from the constructor parameters; Pt3 correct constructor header."),
    ("Method headers (Pt 4)", 1, "Correct public headers for every required method: names, return types, and parameter types."),
    ("First method algorithm (Pts 5–7)", 3, "The first required method's points exactly as the official guideline specifies (conditions, correct result in every case, correct String method use)."),
    ("Second method algorithm (Pts 8–9)", 2, "The second required method's points exactly as the official guideline specifies (identifies every case; returns the correct value in all cases)."),
)
for n, kind, pg in ((1, "Methods and Control Structures", rng(3, 7)), (2, "Class Design", rng(8, 10)), (3, "Array / ArrayList", rng(11, 15)), (4, "2D Array", rng(16, 19))):
    add("ap-computer-science-a", cs, None, f"Q{n}", n, kind, pg, f"computer-science-a-q{n}", 22, CSA_CLASS_ROWS if n == 2 else "csa")

# English Language
for s, pages in ((1, (rng(3, 10), rng(11, 12), [13])), (2, (rng(3, 9), rng(10, 11), [12]))):
    pdf = f"ap25-frq-english-language-set-{s}"
    add("ap-english-language", pdf, s, "Q1", 1, "Synthesis", pages[0], f"english-language-q1-set-{s}", 55, "chunks")
    add("ap-english-language", pdf, s, "Q2", 2, "Rhetorical Analysis", pages[1], f"english-language-q2-set-{s}", 40, "chunks")
    add("ap-english-language", pdf, s, "Q3", 3, "Argument", pages[2], f"english-language-q3-set-{s}", 40, "chunks")

# English Literature
for s in (1, 2):
    pdf = f"ap25-frq-english-literature-set-{s}"
    add("ap-english-literature", pdf, s, "Q1", 1, "Poetry Analysis", rng(3, 4), f"english-literature-q1-set-{s}", 40, "chunks")
    add("ap-english-literature", pdf, s, "Q2", 2, "Prose Fiction Analysis", rng(5, 6), f"english-literature-q2-set-{s}", 40, "chunks")
    add("ap-english-literature", pdf, s, "Q3", 3, "Literary Argument", [7], f"english-literature-q3-set-{s}", 40, "chunks")

# Environmental Science (rows grouped from "A [P1]" in the rubric chunk)
for s, pages in ((1, (rng(3, 7), [8], [9])), (2, (rng(3, 6), [7], [8]))):
    pdf = f"ap25-frq-environmental-science-set-{s}"
    add("ap-environmental-science", pdf, s, "Q1", 1, "Design an Investigation", pages[0], f"environmental-science-q1-set-{s}", 23, "guide")
    add("ap-environmental-science", pdf, s, "Q2", 2, "Analyze a Problem & Propose a Solution", pages[1], f"environmental-science-q2-set-{s}", 23, "guide")
    add("ap-environmental-science", pdf, s, "Q3", 3, "Analyze a Problem & Propose a Solution with Calculations", pages[2], f"environmental-science-q3-set-{s}", 23, "guide")


def history(slug, pdf_stem, prefix, dbq_pages, leq_page):
    for s in (1, 2):
        pdf = f"{pdf_stem}-set-{s}"
        saq3 = "Short Answer, choose 3 or 4"
        add(slug, pdf, s, "SAQ 1", 1, "Short Answer — Secondary Source", [3], f"{prefix}-saq1-set-{s}", 13, letters(1, "A", "B", "C"), "Section I, Part B")
        add(slug, pdf, s, "SAQ 2", 2, "Short Answer — Primary Source", [4], f"{prefix}-saq2-set-{s}", 13, letters(1, "A", "B", "C"), "Section I, Part B")
        add(slug, pdf, s, "SAQ 3", 3, saq3, [5], f"{prefix}-saq3-set-{s}", 13, letters(1, "A", "B", "C"), "Section I, Part B")
        add(slug, pdf, s, "SAQ 4", 4, saq3, [5], f"{prefix}-saq4-set-{s}", 13, letters(1, "A", "B", "C"), "Section I, Part B")
        add(slug, pdf, s, "DBQ", 1, "Document-Based Question", dbq_pages[s - 1], f"{prefix}-dbq-set-{s}", 60, DBQ_ROWS, "Section II")
        for n in (2, 3, 4):
            add(slug, pdf, s, f"LEQ {n}", n, "Long Essay, choose one", [leq_page[s - 1]], f"{prefix}-leq{n}-set-{s}", 40, LEQ_ROWS, "Section II")


history("ap-us-history", "ap25-frq-us-history", "us-history", (rng(7, 10), rng(7, 10)), (11, 11))
history("ap-european-history", "ap25-frq-european-history", "european-history", (rng(7, 11), rng(7, 10)), (12, 11))
history("ap-world-history", "ap25-frq-world-history-modern", "world-history", (rng(7, 12), rng(7, 11)), (13, 12))

# US Government
for s in (1, 2):
    pdf = f"ap25-frq-us-gov-pol-set-{s}"
    add("ap-government", pdf, s, "Q1", 1, "Concept Application", [3], f"us-go-po-q1-set-{s}", 20, letters(1, "A", "B", "C"))
    add("ap-government", pdf, s, "Q2", 2, "Quantitative Analysis", [4], f"us-go-po-q2-set-{s}", 20, letters(1, "A", "B", "C", "D"))
    add("ap-government", pdf, s, "Q3", 3, "SCOTUS Comparison", [5], f"us-go-po-q3-set-{s}", 20, parts(("A", 1), ("B", 2), ("C", 1)))
    add("ap-government", pdf, s, "Q4", 4, "Argument Essay", [6], f"us-go-po-q4-set-{s}", 40, GOV_ARGUMENT_ROWS)

# Human Geography
for s, q2 in ((1, rng(4, 5)), (2, rng(4, 6))):
    pdf = f"ap25-frq-human-geography-set-{s}"
    q3 = [6] if s == 1 else [7]
    hg = letters(1, "A", "B", "C", "D", "E", "F", "G")
    add("ap-human-geography", pdf, s, "Q1", 1, "No Stimulus", [3], f"human-geography-q1-set-{s}", 25, hg)
    add("ap-human-geography", pdf, s, "Q2", 2, "One Stimulus", q2, f"human-geography-q2-set-{s}", 25, hg)
    add("ap-human-geography", pdf, s, "Q3", 3, "Two Stimuli", q3, f"human-geography-q3-set-{s}", 25, hg)

# Macro / Micro (rows parsed from the official guideline's "A / Point 1" layout)
for slug, stem, pre in (("ap-macroeconomics", "ap25-frq-macroeconomics", "macroeconomics"), ("ap-microeconomics", "ap25-frq-microeconomics", "microeconomics")):
    for s in (1, 2):
        pdf = f"{stem}-set-{s}"
        add(slug, pdf, s, "Q1", 1, "Long FRQ", [3], f"{pre}-q1-set-{s}", 25, "guide")
        add(slug, pdf, s, "Q2", 2, "Short FRQ", [4], f"{pre}-q2-set-{s}", 17, "guide")
        add(slug, pdf, s, "Q3", 3, "Short FRQ", [5], f"{pre}-q3-set-{s}", 17, "guide")

# Physics (rows from "Point A1" markers)
PHYS_TYPES = {1: "Mathematical Routines", 2: "Translation Between Representations", 3: "Experimental Design and Analysis", 4: "Qualitative/Quantitative Translation"}
PHYS_MIN = {1: 20, 2: 35, 3: 25, 4: 20}
for slug, stem, pre, pages in (
    ("ap-physics-1", "ap25-frq-physics-1", "physics-1", (rng(3, 4), rng(5, 7), rng(8, 10), rng(11, 12))),
    ("ap-physics-2", "ap25-frq-physics-2", "physics-2", (rng(3, 5), rng(6, 7), rng(8, 10), [11])),
    ("ap-physics-c-em", "ap25-frq-physics-c-em", "physics-c-em", (rng(3, 4), rng(5, 6), rng(7, 8), rng(9, 10))),
    ("ap-physics-c-mechanics", "ap25-frq-physics-c-mech", "physics-c-mech", (rng(3, 4), rng(5, 8), rng(9, 11), rng(12, 13))),
):
    for n in (1, 2, 3, 4):
        add(slug, stem, None, f"Q{n}", n, PHYS_TYPES[n], pages[n - 1], f"{pre}-q{n}", PHYS_MIN[n], "markers")

# Precalculus
pc = "ap25-frq-precalculus"
for n, pg in ((1, [3]), (2, [4]), (3, [6]), (4, [7])):
    add("ap-precalculus", pc, None, f"Q{n}", n, "Part A — Calculator" if n <= 2 else "Part B — No Calculator", pg, f"precalculus-q{n}", 15, "markers")

# Psychology
for s, q2 in ((1, rng(6, 12)), (2, rng(6, 10))):
    pdf = f"ap25-frq-psychology-set-{s}"
    add("ap-psychology", pdf, s, "Q1", 1, "Article Analysis Question (AAQ)", rng(3, 5), f"psychology-q1-set-{s}", 25, "psych")
    add("ap-psychology", pdf, s, "Q2", 2, "Evidence-Based Question (EBQ)", q2, f"psychology-q2-set-{s}", 45, "psych")

# Seminar
for s, b_end in ((1, 14), (2, 13)):
    pdf = f"ap25-frq-seminar-set-{s}"
    add("ap-seminar", pdf, s, "Part A", 1, "Analyze an Argument", rng(3, 5), f"seminar-eoc-a-set-{s}", 30, SEMINAR_A_ROWS)
    add("ap-seminar", pdf, s, "Part B", 2, "Evidence-Based Argument", rng(6, b_end), f"seminar-eoc-b-set-{s}", 90, SEMINAR_B_ROWS)

# Statistics
st = "ap25-frq-statistics"
for n, pg in ((1, [3]), (2, rng(4, 5)), (3, [6]), (4, [7]), (5, [8]), (6, rng(9, 10))):
    add("ap-statistics", st, None, f"Q{n}", n, "Investigative Task" if n == 6 else "Free Response", pg, f"statistics-q{n}", 25 if n == 6 else 13, STATS_ROWS)


# --- helpers ------------------------------------------------------------------------------------

def scoring_json_path(q) -> Path:
    return EXEMPLARS / q["slug"] / f"ap25-apc-{q['scoring']}.json"


def scoring_pdf_path(q) -> Path:
    return EXEMPLARS / q["slug"] / f"ap25-apc-{q['scoring']}.pdf"


def prompt_id(q) -> str:
    return f"ap25-{q['scoring']}"


_reader_cache: dict[Path, PdfReader] = {}


def reader(path: Path) -> PdfReader:
    if path not in _reader_cache:
        _reader_cache[path] = PdfReader(str(path))
    return _reader_cache[path]


BOILERPLATE = re.compile(
    r"^(Visit College Board on the web:.*|©\s*2025 College Board\.?|AP® .* 2025 .*|AP [A-Z0-9 :&,.\-–]+ 2025\s*.*FREE-RESPONSE QUESTIONS.*|GO ON TO THE NEXT PAGE\.?|STOP|END OF (EXAM|SECTION I|PART A))\s*$"
)


def clean(text: str) -> str:
    lines = []
    for line in text.splitlines():
        s = line.strip()
        if not s or BOILERPLATE.match(s):
            continue
        lines.append(s)
    out = "\n".join(lines)
    return re.sub(r"[ \t]+", " ", out)


def question_text(q) -> str:
    r = reader(PDF_IN / q["slug"] / f"{q['pdf']}.pdf")
    text = "\n".join(clean(r.pages[p - 1].extract_text() or "") for p in q["pages"])
    shared = q["label"].startswith(("SAQ 3", "SAQ 4", "LEQ"))
    if shared:
        # SAQ 3/4 share a page, as do LEQ 2/3/4: keep only this question's block.
        n = q["number"]
        m = re.search(rf"(?m)^{n}\.\s", text)
        if m:
            nxt = re.search(rf"(?m)^{n + 1}\.\s", text[m.end():])
            text = text[m.start(): m.end() + nxt.start()] if nxt else text[m.start():]
    return text.strip()


def write_question_pdf(q, out: Path) -> None:
    src = reader(PDF_IN / q["slug"] / f"{q['pdf']}.pdf")
    w = PdfWriter()
    for p in q["pages"]:
        w.add_page(src.pages[p - 1])
    w.add_metadata({"/Title": f"{SUBJECTS[q['slug']]} 2025 — {q['label']}"})
    w.compress_identical_objects(remove_duplicates=True, remove_unreferenced=True)
    out.parent.mkdir(parents=True, exist_ok=True)
    with open(out, "wb") as fh:
        w.write(fh)


def guideline_text(q) -> str:
    """Official scoring-guideline pages from the packet (stops at the student samples)."""
    r = reader(scoring_pdf_path(q))
    out = []
    for page in r.pages[1:]:
        t = page.extract_text() or ""
        if re.search(r"SCORING COMMENTARY|Sample:\s*\w|Sample [A-Z] Page|Q\d Sample", t):
            break
        out.append(t)
    return "\n".join(out)


def teaser(text: str, number: int) -> str:
    """One-line preview for the question card: starts at the numbered question, minus boilerplate."""
    m = re.search(rf"(?m)^{number}\.\s", text)
    body = text[m.end():] if m else text
    body = re.sub(r"\s+", " ", body)
    body = re.sub(r"^(The question has|This question has|Using the sources? provided,|Your response to the question)[^.]*\.\s*", "", body)
    body = re.sub(r"Respond to (all )?parts [A-J, and]+(, and all subparts)?\.\s*", "", body)
    body = body.strip()
    return body if len(body) <= 200 else body[:197].rsplit(" ", 1)[0] + "…"


def total_points(chunk_title: str) -> int | None:
    m = re.search(r"(\d+)\s*points?", chunk_title)
    return int(m.group(1)) if m else None


# --- row builders -------------------------------------------------------------------------------

def rows_from_markers(q):
    marks = re.findall(r"Point\s*([A-H])(\d+)", guideline_text(q))
    per: dict[str, set[str]] = {}
    for letter, num in marks:
        per.setdefault(letter, set()).add(num)
    return parts(*[(k, len(v)) for k, v in sorted(per.items())])


def rows_from_calc(chunk):
    found = re.findall(r"\b([A-D]) \((\d) pts?\)", chunk["content"])
    return parts(*[(k, int(p)) for k, p in found])


def rows_from_csa(chunk):
    found = re.findall(r"Part \(([a-d])\).*?\((\d) pts?\)", chunk["content"])
    return parts(*[(k.upper(), int(p)) for k, p in found])


def rows_from_chunk_letters(chunk):
    # "A(i) [Pt1]", "E(iii) [Pt9]", "A [P1]" — a bare "[Pt3]" belongs to the last lettered part.
    per: dict[str, set[str]] = {}
    letter = None
    for m in re.finditer(r"\b([A-J])(?:\s*\([ivx]+\))?\s*(?=\[P)|\[P(?:t)?(\d+)", chunk["content"]):
        if m.group(1):
            letter = m.group(1)
        elif letter:
            per.setdefault(letter, set()).add(m.group(2))
    return parts(*[(k, len(v)) for k, v in sorted(per.items())])


def rows_from_guide_points(q):
    """Official guideline laid out as part letters at line start, each followed by 'Point N' lines."""
    text = re.sub(r"Po\s*\n\s*int", "Point", guideline_text(q))  # pypdf sometimes splits "Point"
    letter = None
    per: dict[str, set[str]] = {}
    for line in text.splitlines():
        s = line.strip()
        m = re.match(r"^([A-J])(?:\s|$)", s)
        expected = "A" if letter is None else chr(ord(letter) + 1)
        if m and m.group(1) == expected:
            letter = expected
        for num in re.findall(r"Point\s*0?(\d+)", s):
            if letter:
                per.setdefault(letter, set()).add(num)
    return parts(*[(k, len(v)) for k, v in sorted(per.items())])


def rows_from_psych(q):
    text = guideline_text(q)
    found = []
    for m in re.finditer(r"Part ([A-F])(?:\s*\(([ivx]+)\))?\s*\n(?:.*\n){0,4}?.*?\(0\s*[–-]\s*(\d)\s*points?\)", text):
        key = m.group(1) + (f"({m.group(2)})" if m.group(2) else "")
        if key not in [k for k, _ in found]:
            found.append((key, int(m.group(3))))
    return parts(*found)


def rows_from_chunks(rubric_chunks):
    rows = []
    for c in rubric_chunks:
        m = re.search(r"\((\d)\s*[–-]\s*(\d)\)", c["title"])
        mx = int(m.group(2)) if m else total_points(c["title"])
        name = re.sub(r"\s*\(\d\s*[–-]\s*\d\)\s*$", "", c["title"].split(" — ", 1)[-1])
        rows.append({"name": name, "maxPoints": mx, "criteria": c["content"]})
    return rows


SEGMENT_STOP = re.compile(r"Common failure|Typical|$")


def criteria_for(key: str, guide: str) -> str:
    """Pull this part's clause out of the scoring guide ('B1: ...', 'B (2 pts): ...', 'B [1] ...')."""
    letter = key[0]
    pat = re.compile(rf"(?:(?<=[\s.;(])|^){letter}(?:\d|\s*\([ivx]+\)|\s*\(\d pts?\)|\s*\[[^\]]*\]|:)")
    starts = [m.start() for m in pat.finditer(guide)]
    if not starts:
        return ""
    nxt = re.compile(r"(?<=[\s.;(])[A-J](?:\d|\s*\([ivx]+\)|\s*\(\d pts?\)|\s*\[[^\]]*\]|:)")
    pieces = []
    for st in starts:
        m = nxt.search(guide, st + 1)
        end = m.start() if m else len(guide)
        stop = re.search(r"Common failure", guide[st:end])
        if stop:
            end = st + stop.start()
        piece = guide[st:end].strip(" ;.")
        if guide[m.start()][0] == letter if m else False:
            pass
        pieces.append(piece)
    text = "; ".join(p for p in pieces if p)
    return text[:900]


def build_rows(q, rubric_chunks):
    spec = q["rows"]
    chunk = rubric_chunks[0] if rubric_chunks else None
    if spec == "chunks":
        return rows_from_chunks(rubric_chunks)
    if spec == "markers":
        rows = rows_from_markers(q)
    elif spec == "calc":
        rows = rows_from_calc(chunk)
    elif spec == "csa":
        rows = rows_from_csa(chunk)
    elif spec == "chunkletters":
        rows = rows_from_chunk_letters(chunk)
    elif spec == "guide":
        rows = rows_from_guide_points(q)
    elif spec == "psych":
        rows = rows_from_psych(q)
    else:
        rows = [dict(r) for r in spec]

    guide = chunk["content"] if chunk else ""
    out = []
    for r in rows:
        if "criteria" in r:
            out.append({"name": r["name"], "maxPoints": r["maxPoints"], "criteria": r["criteria"]})
            continue
        clause = criteria_for(r["key"], guide)
        base = (
            f"Award 0–{r['maxPoints']} point{'s' if r['maxPoints'] != 1 else ''} for part {r['key']} "
            "exactly as the official 2025 scoring guideline for this question specifies."
        )
        out.append({"name": r["name"], "maxPoints": r["maxPoints"], "criteria": f"{base} {clause}".strip()})
    return out


# --- main ---------------------------------------------------------------------------------------

def main() -> int:
    by_subject: dict[str, list] = {}
    problems = []
    tagged_files: dict[Path, dict] = {}

    for q in Q:
        sj = scoring_json_path(q)
        if not sj.exists():
            problems.append(f"missing scoring json {sj}")
            continue
        data = tagged_files.setdefault(sj, json.loads(sj.read_text(encoding="utf-8")))
        chunks = data["chunks"]
        rubric_chunks = [c for c in chunks if c["corpus"] == "ap_rubric"]
        if not rubric_chunks:
            # Shared row-level rubrics (English, APUSH, AFAM DBQ) live in a sibling file.
            prefix = chunks[0]["refId"].split(":")[0] + ":" + chunks[0]["refId"].split(":")[1] + ":"
            for other in sorted(sj.parent.glob("*.json")):
                od = json.loads(other.read_text(encoding="utf-8"))
                rubric_chunks += [c for c in od["chunks"] if c["corpus"] == "ap_rubric" and c["refId"].startswith(prefix)]
        exemplars = [c for c in chunks if c["corpus"] == "ap_exemplar"]
        pid = prompt_id(q)

        # Tag this question's chunks so retrieval is scoped to it.
        for c in chunks:
            if c["corpus"] == "ap_exemplar" or not c["refId"].startswith(SHARED_RUBRIC_PREFIXES):
                c["promptId"] = pid

        rows = build_rows(q, rubric_chunks)
        total = sum(r["maxPoints"] for r in rows)
        expected = None
        if q["rows"] == "chunks":
            expected = {"Synthesis": 6, "Rhetorical Analysis": 6, "Argument": 6, "Poetry Analysis": 6,
                        "Prose Fiction Analysis": 6, "Literary Argument": 6, "Document-Based Question": 7}.get(q["essayType"])
        else:
            expected = total_points(rubric_chunks[0]["title"]) if rubric_chunks else None
        if expected is not None and total != expected:
            problems.append(f"{pid}: rows sum {total} != rubric total {expected}: {[(r['name'], r['maxPoints']) for r in rows]}")
        if not rows:
            problems.append(f"{pid}: no rows")

        guide = "\n\n".join(c["content"] for c in rubric_chunks)
        text = question_text(q)
        prompt_text, source_text = text[:PROMPT_MAX], text[PROMPT_MAX:PROMPT_MAX + SOURCE_MAX]
        rubric_title = rubric_chunks[0]["title"] if rubric_chunks else ""
        m = re.search(r"Set \d:\s*(.+)$", rubric_title)
        if m:
            topic = m.group(1).strip()
        else:
            # "Q1 — Applied Context / Rates (9 points, calculator)" -> "Applied Context / Rates"
            topic = re.sub(r"^(Q\d+|FRQ \d+)\s*(—\s*)?", "", rubric_title)
            topic = re.sub(r"\s*(\(.*\)|—\s*\d+ points.*)$", "", topic).strip()
            et, tl = (re.sub(r"[^a-z]", "", s.lower()) for s in (q["essayType"], topic))
            if not tl:
                tl = "-"
            if (q["rows"] == "chunks" or tl in et or et in tl or tl in ("longanswer", "shortanswer", "class")
                    or re.match(r"^(saq|dbq|leq|endofcourse)", tl)
                    or re.sub(r"[^a-z]", "", topic.lower())[:20] in et):
                topic = ""

        pdf_name = f"{pid}.pdf"
        write_question_pdf(q, PDF_OUT / q["slug"] / pdf_name)

        examples = []
        for c in exemplars:
            band = c.get("scoreBand")
            label = re.sub(r"^.*?(Sample\s*\w+).*$", r"\1", c.get("title", "")) or c["refId"]
            examples.append({"label": label, "score": band, "summary": c["content"], "refId": c["refId"]})
        examples.sort(key=lambda e: -int(re.sub(r"\D", "", e["score"] or "0") or 0))

        by_subject.setdefault(q["slug"], []).append({
            "id": pid,
            "set": q["set"],
            "label": q["label"],
            "section": q["section"],
            "essayType": q["essayType"],
            "topic": topic,
            # pypdf mangles typeset math ("t 0=" for t = 0), so math-heavy booklets show the topic only.
            "teaser": None if q["slug"] in MATH_SLUGS else teaser(text, q["number"]),
            "suggestedMinutes": q["minutes"],
            "totalPoints": total,
            "pdfUrl": f"{PDF_URL}/{q['slug']}/{pdf_name}",
            "pageCount": len(q["pages"]),
            "promptText": prompt_text,
            "sourceText": source_text or None,
            "scoringGuide": guide[:7900],
            "rubric": rows,
            "examples": examples,
        })

    if problems:
        print("PROBLEMS:", *problems, sep="\n  ")

    WEB_OUT.mkdir(parents=True, exist_ok=True)
    for slug, qs in by_subject.items():
        payload = {"subjectName": SUBJECTS[slug], "year": 2025, "questions": qs}
        (WEB_OUT / f"{slug}.json").write_text(json.dumps(payload, ensure_ascii=False, indent=1) + "\n", encoding="utf-8", newline="\n")

    lines = [
        "// GENERATED by tools/frq-release/build_frq_release.py — do not edit by hand.",
        "// Each subject's released questions load lazily as their own chunk.",
        "import type { ReleasedFrqSet } from '../types'",
        "",
        "export const RELEASED_FRQ_LOADERS: Record<string, () => Promise<ReleasedFrqSet>> = {",
    ]
    for slug in sorted(by_subject):
        lines.append(f"  '{SUBJECTS[slug]}': () => import('./{slug}.json').then((m) => m.default as ReleasedFrqSet),")
    lines += ["}", "", "/** Question counts, so menus can label the section without loading the bank. */",
              "export const RELEASED_FRQ_COUNTS: Record<string, number> = {"]
    for slug in sorted(by_subject):
        lines.append(f"  '{SUBJECTS[slug]}': {len(by_subject[slug])},")
    lines += ["}", ""]
    (WEB_OUT / "manifest.ts").write_text("\n".join(lines), encoding="utf-8", newline="\n")

    for path, data in tagged_files.items():
        path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8", newline="\n")

    n = sum(len(v) for v in by_subject.values())
    print(f"{n} questions across {len(by_subject)} subjects; {len(tagged_files)} chunk files tagged.")
    return 1 if problems else 0


if __name__ == "__main__":
    sys.exit(main())
