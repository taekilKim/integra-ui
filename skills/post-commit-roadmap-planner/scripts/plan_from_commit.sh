#!/usr/bin/env bash
set -euo pipefail

ref="${1:-HEAD}"

if ! git rev-parse --git-dir >/dev/null 2>&1; then
  echo "Error: current directory is not a git repository." >&2
  exit 1
fi

if ! git rev-parse --verify "$ref^{commit}" >/dev/null 2>&1; then
  echo "Error: invalid commit ref '$ref'." >&2
  exit 1
fi

subject="$(git show -s --format=%s "$ref")"
short_ref="$(git rev-parse --short "$ref")"
shortstat="$(git show --shortstat --format='' "$ref" | sed 's/^ *//')"

files=()
while IFS= read -r line; do
  files+=("$line")
done < <(git diff-tree --no-commit-id --name-only -r "$ref")

impl=0
quality=0
docs=0

for f in "${files[@]}"; do
  [[ -z "$f" ]] && continue
  case "$f" in
    app/docs/*|docs/*|README.md|CHANGELOG.md)
      docs=1
      ;;
  esac
  case "$f" in
    *test*|*spec*|__tests__/*)
      quality=1
      ;;
  esac
  case "$f" in
    components/*|app/*|hooks/*|lib/*)
      impl=1
      ;;
  esac
done

echo "## Commit Snapshot"
echo "- Ref: $short_ref ($ref)"
echo "- Intent: $subject"
if [[ -n "$shortstat" ]]; then
  echo "- Scope: $shortstat"
fi
if ((${#files[@]} > 0)); then
  echo "- Files:"
  for f in "${files[@]}"; do
    echo "  - $f"
  done
fi

echo
echo "## Roadmap"
echo "### Now (next commit)"
if ((impl == 1)); then
  echo "1. 핵심 변경 경로 스모크 검증 추가 — Why: 최근 구현 변경의 즉시 회귀 방지 — Done when: 주요 사용자 플로우가 수동/자동 테스트로 통과"
else
  echo "1. 커밋 의도와 실제 변경 범위 정합성 점검 — Why: 후속 작업 우선순위 정확도 확보 — Done when: 핵심 변경 목표가 문서/코드에서 일치"
fi

echo
echo "### Next (1-3 commits)"
if ((quality == 1)); then
  echo "1. 테스트 누락 케이스 보강 — Why: 경계 조건 회귀 위험 완화 — Done when: 실패 재현 케이스가 테스트로 고정"
else
  echo "1. 변경 영역 회귀 테스트 추가 — Why: 다음 수정 시 안정성 확보 — Done when: 변경된 모듈별 최소 1개 이상의 회귀 테스트 추가"
fi
if ((docs == 1)); then
  echo "2. 문서-동작 스냅샷 동기화 — Why: 사용자/개발자 인지 불일치 방지 — Done when: 문서 예시와 실제 UI/API 결과가 일치"
else
  echo "2. 변경사항 문서화 업데이트 — Why: 팀 공유 속도 향상 — Done when: docs 또는 changelog에 변경 요약 반영"
fi

echo
echo "### Later (backlog)"
echo "1. 리팩터 후보 수집 및 기술부채 티켓화 — Why: 다음 작업 비용 절감 — Done when: 우선순위가 매겨진 개선 티켓 목록 생성"

echo
echo "## Risks"
echo "- 인접 컴포넌트/페이지에서 스타일 또는 상호작용 회귀 가능성"
echo "- 문서 예제와 실제 구현 간 시점 차이로 인한 혼선 가능성"

echo
echo "## Dependencies"
echo "- 제품 우선순위(다음 커밋 목표) 확정 필요"
echo "- 디자인/기획 최종 의사결정 필요 항목 확인"
