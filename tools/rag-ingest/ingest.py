#!/usr/bin/env python
"""Ingest RAG corpus JSON files, with automatic per-chunk fallback.

Posts each file's {"chunks":[...]} body to /api/ai/rag/chunks. If a whole-file
POST fails (e.g. the pre-fix backend's 256 KB buffer chokes on a big batch),
it retries the file one chunk at a time so ingestion still completes.

Env:
  TOKEN             a valid JWT access token (POST /api/auth/login)
  RAG_INGEST_TOKEN  the shared ingest token (matches backend RAG_INGEST_TOKEN)
  API_BASE          optional, defaults to http://localhost:8080

Usage:
  python tools/rag-ingest/ingest.py <file.json> [more.json ...]
  python tools/rag-ingest/ingest.py            # every non-example json under the rag folder
"""
import glob
import json
import os
import sys
import urllib.request

API_BASE = os.environ.get("API_BASE", "http://localhost:8080")
TOKEN = os.environ.get("TOKEN")
INGEST = os.environ.get("RAG_INGEST_TOKEN")


def post(chunks):
    body = json.dumps({"chunks": chunks}).encode()
    req = urllib.request.Request(
        API_BASE + "/api/ai/rag/chunks",
        data=body,
        headers={
            "Authorization": "Bearer " + TOKEN,
            "X-Ingest-Token": INGEST,
            "Content-Type": "application/json",
        },
        method="POST",
    )
    r = urllib.request.urlopen(req, timeout=120)
    return r.read().decode()


def main():
    if not TOKEN or not INGEST:
        sys.exit("ERROR: export TOKEN and RAG_INGEST_TOKEN first.")

    args = sys.argv[1:]
    if args:
        files = args
    else:
        root = "server/src/main/resources/rag"
        files = sorted(
            f for f in glob.glob(root + "/**/*.json", recursive=True)
            if not f.endswith(".example.json")
        )

    total = 0
    for f in files:
        chunks = json.load(open(f, encoding="utf-8"))["chunks"]
        name = os.path.basename(f)
        try:
            post(chunks)
            total += len(chunks)
            print(f"  {name:<52} ingested {len(chunks)}")
        except Exception:
            # Fallback: one chunk at a time.
            ok = 0
            for c in chunks:
                try:
                    post([c])
                    ok += 1
                except Exception as e:
                    print(f"    FAIL {c.get('refId')}: {getattr(e, 'code', '')} {str(e)[:60]}")
            total += ok
            print(f"  {name:<52} ingested {ok}/{len(chunks)} (per-chunk fallback)")
    print(f"--- done: {total} chunks ---")


if __name__ == "__main__":
    main()
