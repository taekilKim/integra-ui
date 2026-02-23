#!/usr/bin/env bash
set -euo pipefail

repo_root="$(git rev-parse --show-toplevel)"
cd "$repo_root"

body_file="$repo_root/.roadmaps/latest-pr-body.md"
planner="$repo_root/scripts/post-commit-roadmap.sh"

if [[ ! -f "$body_file" ]]; then
  "$planner"
fi

if [[ $# -ge 1 ]]; then
  gh pr create --title "$1" --body-file "$body_file"
else
  gh pr create --fill --body-file "$body_file"
fi
