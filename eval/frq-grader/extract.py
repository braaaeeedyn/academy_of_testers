#!/usr/bin/env python3
"""Extract gradable samples from College Board "Sample Responses and Scoring Commentary" PDFs.

Each PDF bundles the scoring guidelines, 2-3 verbatim student responses (labelled e.g.
"Sample 1A (1 of 1)"), and a scoring commentary section that states each sample's official
score as "Score: A-B-C" (Row A Thesis / Row B Evidence & Commentary / Row C Sophistication,
summing to /6 for AP English Lang & Lit).

For every PDF this writes one JSON file of {sample -> response text + official score} to
results/extracted/<subject>/<pdf>.json, and prints a summary so extraction quality can be
eyeballed BEFORE any graded run. Extraction needs no backend and costs nothing.

Usage:
    python extract.py                      # english-language + english-literature
    python extract.py ap-english-language  # one subject folder
"""

import json
import re
import sys
from pathlib import Path

import pypdf

HERE = Path(__file__).resolve().parent
PDF_ROOT = HERE / "pdfs"
OUT_ROOT = HERE / "results" / "extracted"

# folder name -> API subject name (must match the app's subject naming exactly)
SUBJECT_API_NAME = {
    "ap-english-language": "AP English Language",
    "ap-english-literature": "AP English Literature",
    "ap-us-history": "AP US History",
}

# folder name -> {question number -> essay type} (drives grounding retrieval + rubric text)
ESSAY_TYPE = {
    "ap-english-language": {"1": "Synthesis", "2": "Rhetorical Analysis", "3": "Argument"},
    "ap-english-literature": {
        "1": "Poetry Analysis",
        "2": "Prose Fiction Analysis",
        "3": "Literary Argument",
    },
}

# AP US History uses named essay types and different point totals, resolved from the filename.
APUSH_TYPES = {"dbq": ("DBQ", 7), "leq": ("LEQ", 6), "saq": ("SAQ", 3)}


def apush_type(name: str) -> tuple[str, int]:
    low = name.lower()
    for key, val in APUSH_TYPES.items():
        if key in low:
            return val
    return ("Unknown", 6)


DEFAULT_SUBJECTS = ["ap-english-language", "ap-english-literature"]

# "Sample 1A" or "Sample 1A (1 of 2)" — the header that precedes a verbatim student response.
# The "(N of M)" suffix is present in some packets (English Language) and absent in others
# (English Literature), so it is optional. Note it does NOT match the commentary's "Sample: 1A"
# because that has a colon immediately after "Sample" (no whitespace+digit).
RESPONSE_HEADER = re.compile(r"Sample\s+(\d)([A-Z])\b", re.IGNORECASE)
# "Sample: 1A" — the header inside the commentary section (note the colon).
COMMENTARY_SAMPLE = re.compile(r"Sample:\s*(\d)([A-Z])", re.IGNORECASE)
# Min body chars for a response to count as a real (typed) essay rather than a scanned image.
MIN_BODY_CHARS = 400

# Telltale phrases from the scanned answer-booklet cover/bubble pages. When a "response" is really a
# scanned handwritten booklet, pypdf yields a bad OCR of these template pages instead of the essay.
GARBLE_MARKERS = (
    "fill in the circle",
    "completely fill in",
    "begin your response to each question",
    "begin your response at the top",
)


def looks_garbled(text: str) -> bool:
    """True when the extracted text is OCR noise from a scanned booklet, not a real typed essay."""
    if not text:
        return True
    low = text.lower()
    if any(m in low for m in GARBLE_MARKERS):
        return True
    if text.count("�") >= 5:  # many U+FFFD replacement chars = failed decode
        return True
    clean = sum(1 for c in text if c.isalnum() or c in " .,;:'\"()-\n?!")
    return (clean / len(text)) < 0.85  # real prose is ~0.98 clean; garbage is far lower
# "Score: 1-3-1" (hyphen or en-dash between the three row scores).
SCORE = re.compile(r"Score:\s*(\d)\s*[-–]\s*(\d)\s*[-–]\s*(\d)")
COMMENTARY_START = re.compile(r"Scoring\s+Commentary", re.IGNORECASE)

# AP US History: typed responses open with the bare sample id alone on a line ("2A"); the commentary
# gives "Sample: 2A" then "Total Score: 6". (Different layout from the English "Sample 1A" packets.)
APUSH_HEADER = re.compile(r"(?m)^[ \t]*(\d)([A-C])[ \t]*$")
APUSH_TOTAL = re.compile(r"Total Score:\s*(\d+)")
# The prompt task sentence, used as promptText for the grader (best-effort, may span lines).
PROMPT_TASK = re.compile(
    r"((?:Write an essay|Write a well-(?:developed|written) essay|In a well-written essay|"
    r"analyze how).*?\.)",
    re.IGNORECASE | re.DOTALL,
)


def pages_text(pdf_path: Path) -> list[str]:
    reader = pypdf.PdfReader(str(pdf_path))
    return [(p.extract_text() or "") for p in reader.pages]


OF_SUFFIX = re.compile(r"\(\s*\d+\s+of\s+\d+\s*\)")


def question_number(pdf_name: str) -> str | None:
    m = re.search(r"q(\d)", pdf_name, re.IGNORECASE)
    return m.group(1) if m else None


def clean(text: str) -> str:
    # collapse runs of whitespace but keep paragraph feel; the grader treats it as one field.
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


PAGE_OF = re.compile(r"Page\s+\d+\s+of\s*\d+", re.IGNORECASE)


def parse_pdf(pdf_path: Path, subject_folder: str) -> dict:
    pages = pages_text(pdf_path)
    text = "\n".join(pages)
    is_apush = subject_folder == "ap-us-history"
    qnum = question_number(pdf_path.name)
    if is_apush:
        essay_type, possible = apush_type(pdf_path.name)
        header_re = APUSH_HEADER
    else:
        essay_type, possible = ESSAY_TYPE.get(subject_folder, {}).get(qnum or "", "Unknown"), 6
        header_re = RESPONSE_HEADER

    # The commentary section starts at the first page carrying a "Sample: NX" (colon) header or a
    # score line. Everything before it holds the student responses; everything after holds the
    # official scores. (Page-by-page avoids the page-1 table-of-contents false match and separates
    # scanned image pages from typed ones.)
    comm_page = next(
        (
            i
            for i, p in enumerate(pages)
            if COMMENTARY_SAMPLE.search(p) or SCORE.search(p) or (is_apush and APUSH_TOTAL.search(p))
        ),
        len(pages),
    )

    # Walk the response pages, attaching each page to the sample whose header last opened. A response
    # may span several pages; scanned-image pages contribute ~no text.
    resp_pages: dict[str, list[str]] = {}
    current: str | None = None
    for p in pages[:comm_page]:
        m = header_re.search(p)
        if m:
            current = f"{m.group(1)}{m.group(2).upper()}"
            resp_pages.setdefault(current, [])
        if current is not None:
            body = OF_SUFFIX.sub("", header_re.sub("", p))
            if is_apush:
                body = PAGE_OF.sub("", body)
            resp_pages[current].append(body)
    responses = {sid: clean("\n".join(parts)) for sid, parts in resp_pages.items()}

    commentary = "\n".join(pages[comm_page:])
    # scores maps sampleId -> (rowScores tuple or None, total)
    scores: dict[str, tuple] = {}
    if is_apush:
        # "Sample: 2A" ... "Total Score: 6" — a single total, no per-row breakdown parsed.
        for sm in COMMENTARY_SAMPLE.finditer(commentary):
            sid = f"{sm.group(1)}{sm.group(2).upper()}"
            after = commentary[sm.end(): sm.end() + 400]
            tot = APUSH_TOTAL.search(after)
            if tot:
                scores[sid] = (None, int(tot.group(1)))
    else:
        # "Sample: 1A" ... "Score: 1-3-1" — three row scores that sum to the total.
        for sm in COMMENTARY_SAMPLE.finditer(commentary):
            sid = f"{sm.group(1)}{sm.group(2).upper()}"
            after = commentary[sm.end(): sm.end() + 400]
            sc = SCORE.search(after)
            if sc:
                rows = (int(sc.group(1)), int(sc.group(2)), int(sc.group(3)))
                scores[sid] = (rows, sum(rows))
        if not scores:  # fallback: take Score lines in order
            ordered = [f"{qnum}{c}" for c in "ABCDEF"]
            for idx, sc in enumerate(SCORE.finditer(commentary or text)):
                if idx < len(ordered):
                    rows = (int(sc.group(1)), int(sc.group(2)), int(sc.group(3)))
                    scores[ordered[idx]] = (rows, sum(rows))

    prompt_m = PROMPT_TASK.search(text)
    prompt_text = clean(prompt_m.group(1)) if prompt_m else ""

    samples = []
    for sid in sorted(set(responses) | set(scores)):
        resp = responses.get(sid, "")
        entry = scores.get(sid)
        rows, total = entry if entry else (None, None)
        scanned = len(resp) < MIN_BODY_CHARS  # too little text = image scan
        garbled = looks_garbled(resp)  # OCR noise from a scanned booklet
        usable = (not scanned) and (not garbled) and (total is not None)
        samples.append(
            {
                "sampleId": sid,
                "responseText": resp,
                "responseChars": len(resp),
                "scanned": scanned,
                "garbled": garbled,
                "usable": usable,
                "officialRowScores": (
                    {"rowA": rows[0], "rowB": rows[1], "rowC": rows[2]} if rows else None
                ),
                "officialTotal": total,
                "possible": possible,
            }
        )

    return {
        "pdf": pdf_path.name,
        "subjectFolder": subject_folder,
        "subjectApiName": SUBJECT_API_NAME.get(subject_folder, subject_folder),
        "essayType": essay_type,
        "questionNumber": qnum,
        "possible": possible,
        "promptText": prompt_text,
        "samples": samples,
    }


def main() -> None:
    subjects = sys.argv[1:] or DEFAULT_SUBJECTS
    grand_ok = grand_flag = 0
    for subject in subjects:
        src = PDF_ROOT / subject
        if not src.is_dir():
            print(f"SKIP (no folder): {src}")
            continue
        out_dir = OUT_ROOT / subject
        out_dir.mkdir(parents=True, exist_ok=True)
        pdfs = sorted(src.glob("*.pdf"))
        print(f"\n=== {subject} ({len(pdfs)} PDFs) ===")
        for pdf in pdfs:
            try:
                data = parse_pdf(pdf, subject)
            except Exception as e:  # noqa: BLE001
                print(f"  ERROR {pdf.name}: {e}")
                grand_flag += 1
                continue
            (out_dir / f"{pdf.stem}.json").write_text(
                json.dumps(data, indent=2, ensure_ascii=False), encoding="utf-8"
            )
            for s in data["samples"]:
                ok = s["usable"]
                if ok:
                    flag = ""
                elif s["scanned"]:
                    flag = "  <-- SCANNED/skip"
                elif s["garbled"]:
                    flag = "  <-- GARBLED/skip"
                else:
                    flag = "  <-- no score/skip"
                if ok:
                    grand_ok += 1
                else:
                    grand_flag += 1
                score = s["officialRowScores"]
                if score:
                    score_str = f"{score['rowA']}-{score['rowB']}-{score['rowC']}={s['officialTotal']}"
                elif s["officialTotal"] is not None:
                    score_str = f"total={s['officialTotal']}/{s['possible']}"
                else:
                    score_str = "NO SCORE"
                print(
                    f"  {pdf.name:52s} {s['sampleId']:3s} "
                    f"chars={s['responseChars']:5d} score={score_str:10s}{flag}"
                )
    print(f"\nTotal usable samples: {grand_ok}   flagged for review: {grand_flag}")
    print(f"Extracted JSON written under: {OUT_ROOT}")


if __name__ == "__main__":
    main()
