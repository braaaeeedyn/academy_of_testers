#!/usr/bin/env python3
"""A/B evaluation of the RAG essay grader against official College Board scores.

For every usable (typed) sample produced by extract.py, this grades the essay TWICE against a
running backend:
  * baseline  — bypassGrounding=true  (naive grade: NO rubric sent, NO retrieval)
  * grounded  — bypassGrounding=false (full RAG: rubric + retrieved clauses + exemplars)
and compares each arm's predicted total to the official total, reporting MAE, exact agreement,
adjacent (within-1) agreement, and quadratic weighted kappa (QWK). The headline number for the
resume claim is the reduction in MAE from baseline to grounded.

Prerequisites (see README.md):
  * Backend running with a valid OPENAI_API_KEY and the RAG corpus ingested.
  * AI_USAGE_MAX_PER_HOUR raised (this makes ~2 calls per sample; the default cap is 10/hr).
  * Env: TOKEN (a JWT from POST /api/auth/login). Optional: API_BASE, EVAL_LIMIT, EVAL_SUBJECTS.

Run extract.py first, then:  TOKEN=... python run_eval.py
"""

import json
import os
import sys
import time
import urllib.error
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

HERE = Path(__file__).resolve().parent
EXTRACTED = HERE / "results" / "extracted"
OUT_DIR = HERE / "results"

API_BASE = os.environ.get("API_BASE", "http://localhost:8080")
TOKEN = os.environ.get("TOKEN", "")
LIMIT = int(os.environ.get("EVAL_LIMIT", "0"))  # 0 = no cap (use e.g. 3 for a smoke test)
SUBJECTS = [s for s in os.environ.get("EVAL_SUBJECTS", "").split(",") if s]  # empty = all

# Optional auto-login: set AOT_PASSWORD (and optionally AOT_IDENTIFIER) and the harness logs in
# itself, refreshing the token automatically if it expires mid-run — no manual $env:TOKEN dance.
IDENTIFIER = os.environ.get("AOT_IDENTIFIER", "braaaeeedyn@gmail.com")
PASSWORD = os.environ.get("AOT_PASSWORD", "")


def login() -> str:
    """Log in and update the global TOKEN. Requires AOT_PASSWORD."""
    global TOKEN
    body = json.dumps({"identifier": IDENTIFIER, "password": PASSWORD}).encode("utf-8")
    req = urllib.request.Request(
        f"{API_BASE}/api/auth/login",
        data=body,
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=30) as r:
        TOKEN = json.loads(r.read().decode("utf-8"))["accessToken"]
    return TOKEN

# AP English Lang & Lit all use the same 3-row, 6-point shape. Row names/criteria travel in the
# request (the app sources them from client-side content data); the criteria also seed retrieval,
# so they mirror the official rubric wording.
_THESIS = "Responds to the prompt with a defensible {} (0-1)."
_SOPH = "Demonstrates sophistication of thought and/or a complex understanding (0-1)."
_EC = (
    "Provides specific evidence to support all claims in a line of reasoning AND commentary "
    "consistently explains how the evidence supports that reasoning{} (0-4)."
)
RUBRIC_BY_ESSAY_TYPE = {
    "Synthesis": [
        ("Thesis", 1, _THESIS.format("position")),
        ("Evidence & Commentary", 4, _EC.format(", using at least three of the provided sources")),
        ("Sophistication", 1, _SOPH),
    ],
    "Rhetorical Analysis": [
        ("Thesis", 1, _THESIS.format("thesis that analyzes the writer's rhetorical choices")),
        ("Evidence & Commentary", 4, _EC.format(", explaining how rhetorical choices contribute")),
        ("Sophistication", 1, _SOPH),
    ],
    "Argument": [
        ("Thesis", 1, _THESIS.format("position")),
        ("Evidence & Commentary", 4, _EC.format("")),
        ("Sophistication", 1, _SOPH),
    ],
    "Poetry Analysis": [
        ("Thesis", 1, _THESIS.format("interpretation of the poem")),
        ("Evidence & Commentary", 4, _EC.format(", explaining how literary techniques create meaning")),
        ("Sophistication", 1, _SOPH),
    ],
    "Prose Fiction Analysis": [
        ("Thesis", 1, _THESIS.format("interpretation of the passage")),
        ("Evidence & Commentary", 4, _EC.format(", explaining how literary techniques create meaning")),
        ("Sophistication", 1, _SOPH),
    ],
    "Literary Argument": [
        ("Thesis", 1, _THESIS.format("interpretation of the selected work")),
        ("Evidence & Commentary", 4, _EC.format("")),
        ("Sophistication", 1, _SOPH),
    ],
    # AP US History — different rubric structure and point totals (LEQ 6, DBQ 7).
    "LEQ": [
        ("Thesis / Claim", 1, "Responds to the prompt with a historically defensible thesis that establishes a line of reasoning (0-1)."),
        ("Contextualization", 1, "Describes a broader historical context relevant to the prompt (0-1)."),
        ("Evidence", 2, "Provides specific relevant evidence (1); uses that evidence to support an argument in response to the prompt (2)."),
        ("Analysis & Reasoning", 2, "Uses historical reasoning (comparison, causation, or continuity/change) to frame an argument (1); demonstrates a complex understanding of the historical development (2)."),
    ],
    "DBQ": [
        ("Thesis / Claim", 1, "Responds to the prompt with a historically defensible thesis that establishes a line of reasoning (0-1)."),
        ("Contextualization", 1, "Describes a broader historical context relevant to the prompt (0-1)."),
        ("Evidence", 3, "Uses the content of at least three documents to address the prompt (1-2); supports an argument with at least one piece of specific evidence beyond the documents (3)."),
        ("Analysis & Reasoning", 2, "Explains sourcing (POV, purpose, situation, or audience) for at least two documents (1); demonstrates a complex understanding using evidence (2)."),
    ],
}


RETRIES = 3


def grade(sample: dict, meta: dict, bypass: bool) -> int:
    """POST one grade request; return the predicted total (0-6).

    Retries transient failures (5xx from the OpenAI hop, network timeouts) a few times with backoff.
    Re-raises 401/429 immediately (fatal, handled by the caller) and re-raises the last error if all
    retries are exhausted so the caller can skip just this sample.
    """
    body = {
        "subjectName": meta["subjectApiName"],
        "essayType": meta["essayType"],
        "promptText": meta["promptText"] or f"{meta['essayType']} free-response prompt.",
        "studentResponse": sample["responseText"],
        "bypassGrounding": bypass,
    }
    # Baseline (bypass) sends NO rubric — a naive "grade this AP essay" request. The rubric is itself
    # a form of grounding, so it belongs only to the RAG arm alongside retrieval + exemplars.
    if not bypass:
        rubric_rows = RUBRIC_BY_ESSAY_TYPE[meta["essayType"]]
        body["rubric"] = [{"name": n, "maxPoints": m, "criteria": c} for n, m, c in rubric_rows]
    data = json.dumps(body).encode("utf-8")
    last: Exception | None = None
    for attempt in range(RETRIES):
        try:
            req = urllib.request.Request(
                f"{API_BASE}/api/ai/frq/grade",
                data=data,
                headers={"Content-Type": "application/json", "Authorization": f"Bearer {TOKEN}"},
                method="POST",
            )
            with urllib.request.urlopen(req, timeout=180) as r:
                payload = json.loads(r.read().decode("utf-8"))
            return int(payload["grade"]["earned"])
        except urllib.error.HTTPError as e:
            if e.code == 429:
                raise  # fatal — rate limit, no point retrying
            if e.code in (401, 403):
                if PASSWORD:
                    login()  # token expired — refresh and retry this call
                    last = e
                else:
                    raise  # no credentials to refresh with
            else:
                last = e  # 5xx: transient OpenAI hiccup, retry
        except (urllib.error.URLError, TimeoutError) as e:
            last = e
        time.sleep(2 * (attempt + 1))
    raise last  # give up on this sample; caller skips it


# ---- metrics ---------------------------------------------------------------------------------

def mae(pairs):
    return sum(abs(p - o) for p, o in pairs) / len(pairs)


def exact(pairs):
    return sum(1 for p, o in pairs if p == o) / len(pairs)


def adjacent(pairs):
    return sum(1 for p, o in pairs if abs(p - o) <= 1) / len(pairs)


def qwk(pairs, n=6):
    """Quadratic weighted kappa for integer ratings 0..n."""
    size = n + 1
    obs = [[0] * size for _ in range(size)]
    for p, o in pairs:
        obs[o][p] += 1
    row = [sum(obs[i]) for i in range(size)]
    col = [sum(obs[i][j] for i in range(size)) for j in range(size)]
    total = len(pairs)
    num = den = 0.0
    for i in range(size):
        for j in range(size):
            w = ((i - j) ** 2) / (n ** 2)
            exp = row[i] * col[j] / total
            num += w * obs[i][j]
            den += w * exp
    return 1.0 - (num / den) if den else 1.0


def summarize(pairs):
    # QWK's rating scale is the max score seen (6 for English & LEQ, 7 for DBQ), so it stays correct
    # whichever essay type is being evaluated.
    scale = max((max(p, o) for p, o in pairs), default=6)
    return {
        "n": len(pairs),
        "mae": round(mae(pairs), 4),
        "exactAgreement": round(exact(pairs), 4),
        "adjacentAgreement": round(adjacent(pairs), 4),
        "qwk": round(qwk(pairs, n=scale), 4),
    }


# ---- driver ----------------------------------------------------------------------------------

def load_samples():
    out = []
    subj_dirs = (
        [EXTRACTED / s for s in SUBJECTS] if SUBJECTS else sorted(p for p in EXTRACTED.iterdir() if p.is_dir())
    )
    for sd in subj_dirs:
        for jf in sorted(sd.glob("*.json")):
            data = json.loads(jf.read_text(encoding="utf-8"))
            if data["essayType"] not in RUBRIC_BY_ESSAY_TYPE:
                continue
            for s in data["samples"]:
                # `usable` is set by extract.py (typed, not garbled, has an official score). Fall
                # back to the older flags for JSON produced before that field existed.
                usable = s.get(
                    "usable",
                    (not s.get("scanned")) and s.get("officialTotal") is not None,
                )
                if not usable:
                    continue
                out.append((data, s))
    return out


def main():
    if PASSWORD:
        try:
            login()  # start with a fresh token
        except Exception as e:  # noqa: BLE001
            sys.exit(f"ERROR: auto-login failed ({e}). Check AOT_IDENTIFIER/AOT_PASSWORD.")
    if not TOKEN:
        sys.exit(
            "ERROR: no token. Either set AOT_PASSWORD (auto-login) or set TOKEN "
            "(a JWT from POST /api/auth/login) in the environment."
        )
    if not EXTRACTED.is_dir():
        sys.exit(f"ERROR: no extracted samples at {EXTRACTED}. Run extract.py first.")

    samples = load_samples()
    if LIMIT:
        samples = samples[:LIMIT]
    if not samples:
        sys.exit("ERROR: no usable samples found.")

    print(f"Grading {len(samples)} samples x 2 arms = {len(samples) * 2} calls against {API_BASE}\n")
    per_sample = []
    base_pairs, grnd_pairs = [], []
    errored = []
    for i, (meta, s) in enumerate(samples, 1):
        official = s["officialTotal"]
        try:
            base = grade(s, meta, bypass=True)
            grnd = grade(s, meta, bypass=False)
        except urllib.error.HTTPError as e:
            if e.code == 429:
                sys.exit(
                    "\nRate limit hit (429). Restart the backend with a higher "
                    "AI_USAGE_MAX_PER_HOUR (e.g. 1000) and re-run."
                )
            if e.code in (401, 403):
                sys.exit(
                    f"\nAuth failed ({e.code}) — your TOKEN is missing or expired. Re-login to get a "
                    "fresh one:\n"
                    "  $login = Invoke-RestMethod -Uri http://localhost:8080/api/auth/login "
                    "-Method Post -ContentType 'application/json' -Body (@{ "
                    "identifier='braaaeeedyn@gmail.com'; password='YOUR_PASSWORD' } | ConvertTo-Json)\n"
                    "  $env:TOKEN = $login.accessToken\n"
                    "then re-run."
                )
            # Other HTTP error survived all retries — skip this sample, keep going.
            errored.append(f"{meta['pdf']}#{s['sampleId']}: HTTP {e.code}")
            print(f"  [{i:3d}/{len(samples)}] {meta['pdf'][:44]:44s} {s['sampleId']:3s} "
                  f"SKIPPED (HTTP {e.code} after {RETRIES} tries)")
            continue
        except Exception as e:  # noqa: BLE001 — network/parse; skip sample, keep going.
            errored.append(f"{meta['pdf']}#{s['sampleId']}: {type(e).__name__}")
            print(f"  [{i:3d}/{len(samples)}] {meta['pdf'][:44]:44s} {s['sampleId']:3s} "
                  f"SKIPPED ({type(e).__name__} after {RETRIES} tries)")
            continue
        base_pairs.append((base, official))
        grnd_pairs.append((grnd, official))
        per_sample.append(
            {
                "pdf": meta["pdf"],
                "sampleId": s["sampleId"],
                "essayType": meta["essayType"],
                "official": official,
                "baseline": base,
                "grounded": grnd,
            }
        )
        print(
            f"  [{i:3d}/{len(samples)}] {meta['pdf'][:44]:44s} {s['sampleId']:3s} "
            f"official={official} baseline={base} grounded={grnd}"
        )
        time.sleep(0.2)

    if not base_pairs:
        sys.exit("\nAll samples errored — nothing to summarize. Check the backend logs.")
    if errored:
        print(f"\nSkipped {len(errored)} sample(s) after retries:")
        for e in errored:
            print(f"  - {e}")

    base_sum = summarize(base_pairs)
    grnd_sum = summarize(grnd_pairs)
    mae_delta = base_sum["mae"] - grnd_sum["mae"]
    mae_pct = (mae_delta / base_sum["mae"] * 100) if base_sum["mae"] else 0.0

    print("\n================ RESULTS ================")
    print(f"samples: {base_sum['n']}")
    print(f"{'metric':<20}{'baseline':>12}{'grounded':>12}")
    for k, label in [
        ("mae", "MAE (pts)"),
        ("exactAgreement", "exact %"),
        ("adjacentAgreement", "within-1 %"),
        ("qwk", "QWK"),
    ]:
        print(f"{label:<20}{base_sum[k]:>12}{grnd_sum[k]:>12}")
    print(f"\nMAE reduction (baseline -> grounded): {mae_delta:.4f} pts = {mae_pct:.1f}%")

    out = {
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "apiBase": API_BASE,
        "samples": base_sum["n"],
        "baseline": base_sum,
        "grounded": grnd_sum,
        "maeReductionPct": round(mae_pct, 2),
        "skipped": errored,
        "perSample": per_sample,
    }
    stamp = datetime.now().strftime("%Y%m%d-%H%M%S")
    out_path = OUT_DIR / f"eval-{stamp}.json"
    out_path.write_text(json.dumps(out, indent=2), encoding="utf-8")
    print(f"\nWrote {out_path}")


if __name__ == "__main__":
    main()
