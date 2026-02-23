---
name: post-commit-roadmap-planner
description: Build an actionable next-step roadmap right after a git commit. Use when the user asks to plan follow-up work per commit, derive next tasks from recent changes, or continuously organize upcoming implementation/testing/documentation work after commits.
---

# Post-Commit Roadmap Planner

Use this skill immediately after a commit is made.

## Workflow

1. Identify the target commit.
- Default to `HEAD`.
- If the user specifies a hash, branch, or range, use that target.

2. Collect commit context.
- Run:
  - `git show --name-status --stat --format=fuller <ref>`
  - `git diff-tree --no-commit-id --name-only -r <ref>`
- Capture: changed files, insertions/deletions, and commit message intent.

3. Derive a roadmap from impact.
- Classify follow-ups into these buckets:
  - `Implementation`: code completion, refactor, API alignment.
  - `Quality`: tests, regression checks, edge-case handling.
  - `Documentation`: docs sync, examples, migration notes.
  - `Release`: changelog, versioning, rollout checks.

4. Produce a prioritized plan.
- Return exactly three horizons:
  - `Now (next commit)`
  - `Next (1-3 commits)`
  - `Later (backlog)`
- For each item include:
  - short task title
  - why it matters
  - concrete completion signal

5. Add risk and dependency checks.
- Always include:
  - `Risks` (possible regressions from this commit)
  - `Dependencies` (blocked by design/API/data decisions)

## Output Format

Use this markdown structure:

```md
## Commit Snapshot
- Ref: <ref>
- Intent: <one-line summary>
- Scope: <files/components affected>

## Roadmap
### Now (next commit)
1. <task> — Why: <reason> — Done when: <signal>

### Next (1-3 commits)
1. <task> — Why: <reason> — Done when: <signal>

### Later (backlog)
1. <task> — Why: <reason> — Done when: <signal>

## Risks
- <risk>

## Dependencies
- <dependency or "None">
```

## Fast Path Script

If available, run:

```bash
scripts/plan_from_commit.sh <ref>
```

Use the output as a draft, then refine using current user context.
