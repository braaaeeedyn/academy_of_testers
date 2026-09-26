#!/usr/bin/env bash
# Ingest RAG corpus JSON files into a running backend.
#
# Each argument is a JSON file whose body is {"chunks":[...]} (see
# server/src/main/resources/rag/README.md). With no arguments, every *.json under
# server/src/main/resources/rag/ is ingested.
#
# Requires these environment variables (export them first):
#   TOKEN             a valid JWT access token (from POST /api/auth/login)
#   RAG_INGEST_TOKEN  the shared ingest token (matches the backend's RAG_INGEST_TOKEN)
# Optional:
#   API_BASE          defaults to http://localhost:8080
#
# Usage:
#   bash tools/rag-ingest/ingest.sh                          # all files
#   bash tools/rag-ingest/ingest.sh path/to/one.json two.json

set -euo pipefail

API_BASE="${API_BASE:-http://localhost:8080}"

if [[ -z "${TOKEN:-}" || -z "${RAG_INGEST_TOKEN:-}" ]]; then
  echo "ERROR: export TOKEN and RAG_INGEST_TOKEN before running." >&2
  exit 1
fi

# Resolve the repo root from this script's location so paths work from anywhere.
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"

if [[ "$#" -gt 0 ]]; then
  files=("$@")
else
  # Default: every json under the rag resource folder, except *.example.json scaffolding.
  mapfile -t files < <(find "$REPO_ROOT/server/src/main/resources/rag" -name '*.json' ! -name '*.example.json' | sort)
fi

if [[ "${#files[@]}" -eq 0 ]]; then
  echo "No JSON files to ingest."
  exit 0
fi

for f in "${files[@]}"; do
  if [[ ! -f "$f" ]]; then
    echo "SKIP (not found): $f" >&2
    continue
  fi
  printf '%-60s ' "$(basename "$f")"
  curl -s -X POST "$API_BASE/api/ai/rag/chunks" \
    -H "Authorization: Bearer $TOKEN" \
    -H "X-Ingest-Token: $RAG_INGEST_TOKEN" \
    -H 'Content-Type: application/json' \
    -d @"$f"
  echo
done

echo "--- stats ---"
curl -s "$API_BASE/api/ai/rag/stats" \
  -H "Authorization: Bearer $TOKEN" \
  -H "X-Ingest-Token: $RAG_INGEST_TOKEN"
echo
