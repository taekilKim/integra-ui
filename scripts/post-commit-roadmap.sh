#!/usr/bin/env bash
set -euo pipefail

repo_root="$(git rev-parse --show-toplevel)"
cd "$repo_root"

ref="HEAD"
short_ref="$(git rev-parse --short "$ref")"
subject="$(git show -s --format=%s "$ref")"

files=()
while IFS= read -r line; do
  [[ -n "$line" ]] && files+=("$line")
done < <(git diff-tree --no-commit-id --name-only -r "$ref")

has_docs=0
has_demo=0
has_ui=0
has_tests=0

for f in "${files[@]}"; do
  case "$f" in
    *docs/*|README.md|CHANGELOG.md) has_docs=1 ;;
  esac
  case "$f" in
    *demo/*) has_demo=1 ;;
  esac
  case "$f" in
    *components/ui/*|*app/docs/components/*|*components/layout/*) has_ui=1 ;;
  esac
  case "$f" in
    *test*|*spec*|*__tests__/*) has_tests=1 ;;
  esac
done

out_dir="$repo_root/.roadmaps"
mkdir -p "$out_dir"
out_file="$out_dir/latest-post-commit-plan.md"
hint_file="$out_dir/latest-commit-hints.txt"
pr_body_file="$out_dir/latest-pr-body.md"

cat > "$out_file" <<EOF
## Post-Commit Plan
- Ref: $short_ref
- Commit: $subject

### 5 Short Roadmap & Feature Improvements
1. 회귀 검증 1세트 추가 — 완료조건: 이번 커밋 영향 경로 1개 이상 테스트/체크리스트 통과
2. API/프로퍼티 네이밍 정합성 점검 — 완료조건: 유사 컴포넌트 간 용어 불일치 0건
3. 문서 예제 동기화 보강 — 완료조건: Docs 코드 블록과 실제 동작 스냅샷 일치
4. 접근성 기본 점검(포커스/라벨/상태 전달) — 완료조건: 주요 인터랙션에 A11y 이슈 없음
5. 다음 기능 개선안 후보 티켓화 — 완료조건: 작은 개선안 2건 이상 backlog 등록

### Auto Planning Notes
EOF

cat > "$hint_file" <<'EOF'
회귀 검증 1세트 추가
API/프로퍼티 네이밍 정합성 점검
문서 예제 동기화 보강
접근성 기본 점검(포커스/라벨/상태 전달)
다음 기능 개선안 후보 티켓화
EOF

if ((has_ui == 1)); then
  echo "- UI 영향이 감지되어 컴포넌트 간 토큰/상태 일관성 점검 우선순위를 높입니다." >> "$out_file"
else
  echo "- UI 영향이 낮아 품질/문서 동기화 위주로 후속 작업을 제안합니다." >> "$out_file"
fi

if ((has_demo == 1)); then
  echo "- Demo 변경이 포함되어 playground 상호작용 시나리오 회귀 확인을 권장합니다." >> "$out_file"
fi

if ((has_docs == 1)); then
  echo "- Docs 변경이 포함되어 문서 캡처/예제 코드 최신화 확인이 필요합니다." >> "$out_file"
fi

if ((has_tests == 0)); then
  echo "- 테스트 파일 변경이 없어 최소 1개 회귀 테스트 추가를 다음 커밋 목표로 제안합니다." >> "$out_file"
fi

cat > "$pr_body_file" <<EOF
## Summary
- Ref: $short_ref
- Commit: $subject

## Changes
$(for f in "${files[@]}"; do echo "- $f"; done)

## 5 Short Roadmap & Feature Improvements
1. 회귀 검증 1세트 추가
2. API/프로퍼티 네이밍 정합성 점검
3. 문서 예제 동기화 보강
4. 접근성 기본 점검(포커스/라벨/상태 전달)
5. 다음 기능 개선안 후보 티켓화

## Auto Planning Notes
$(sed -n '/^### Auto Planning Notes/,$p' "$out_file" | tail -n +2)
EOF

echo "Post-commit roadmap generated: $out_file"
echo "-----"
sed -n '1,18p' "$out_file"
echo "Commit hints generated: $hint_file"
echo "PR body generated: $pr_body_file"
