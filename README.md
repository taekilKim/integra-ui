# Integra UI

한국어 제품 경험을 끝까지 설계하기 위한 React 디자인 시스템입니다.

Integra UI는 컴포넌트의 모양만 모아두는 대신, **역할 기반 토큰 → React 컴포넌트 → Storybook 사양 → 실제 제품 플로우**를 하나의 계약으로 연결합니다. 현재는 넓은 컴포넌트 수보다 완성도와 검증 가능성에 집중해 Core 5를 공개하고 있습니다.

[라이브 데모](https://integra-ui-kr.vercel.app) · [컴포넌트 문서](https://integra-ui-kr.vercel.app/docs/components) · [예약 플로우](https://integra-ui-kr.vercel.app/examples/reservation)

## 현재 구현 범위

### Core 5

- `Button` — 크기, 형태, 강조 수준, 로딩과 비활성 상태
- `Input` — 기본·포커스·오류 상태와 오류 메시지 연결
- `Select` — 키보드 조작과 역할 기반 surface/content/line 토큰
- `Dialog` — 포커스 관리, 모바일 너비, 반응형 액션 배치
- `Item` — 선택 가능한 콘텐츠 행과 일관된 상호작용 상태

Core 5는 독립 데모뿐 아니라 이름·이메일·일정 선택, 오류 처리, 확인, 로딩, 완료까지 이어지는 예약 플로우에서 함께 검증됩니다.

### 시스템 기반

- light/dark를 공유하는 semantic token
- 포커스, 오류, 로딩, 비활성 상태를 포함한 컴포넌트 계약
- 40/44/52px control size와 공통 radius·motion 규칙
- Next.js 문서 사이트와 실제 조합 예제
- Storybook 기반의 격리된 컴포넌트 사양
- npm 배포를 준비하는 workspace 패키지 구조

## Component Contract

```text
Semantic tokens
      ↓
React component API
      ↓
Storybook states and accessibility
      ↓
Docs and product flow
      ↓
Consumer verification
```

디자인과 코드는 같은 역할 이름과 상태 정의를 사용해야 합니다. 앞으로 추가될 Figma/에이전트 연결도 이 계약을 읽는 소비자로 다루며, 별도의 진실 공급원으로 만들지 않는 것이 원칙입니다.

## 빠르게 실행하기

저장소의 실제 애플리케이션은 `integra-ui/` 디렉터리에 있습니다.

```bash
git clone https://github.com/taekilKim/integra-ui.git
cd integra-ui/integra-ui
npm install
npm run dev
```

브라우저에서 다음 경로를 확인할 수 있습니다.

- 앱: [http://localhost:3000](http://localhost:3000)
- 예약 플로우: [http://localhost:3000/examples/reservation](http://localhost:3000/examples/reservation)
- 컴포넌트 문서: [http://localhost:3000/docs/components](http://localhost:3000/docs/components)

## Storybook

```bash
cd integra-ui
npm run storybook
```

[http://localhost:6006](http://localhost:6006)에서 `Core / Button`의 기본, 로딩, 아이콘 전용, 아이콘 조합 상태를 확인할 수 있습니다.

정적 Storybook 빌드는 다음 명령으로 검증합니다.

```bash
npm run storybook:build
```

## 패키지 구조

```text
integra-ui/
├── app/                    # 랜딩, 문서, 실제 사용 예제
├── components/ui/          # 문서 사이트에서 사용하는 컴포넌트
├── components/examples/    # 여러 컴포넌트를 조합한 제품 플로우
├── packages/tokens/        # @integra-ui/tokens
├── packages/react/         # @integra-ui/react
├── stories/                # Storybook 사양
└── .storybook/             # Storybook 설정
```

`@integra-ui/tokens`와 `@integra-ui/react`는 현재 로컬 workspace 패키지이며 npm registry에는 아직 공개하지 않았습니다. 공개 전에 별도 소비자 프로젝트에서 설치·스타일·타입을 검증할 예정입니다.

패키지에 포함될 파일은 아래 명령으로 확인할 수 있습니다.

```bash
npm run pack:tokens
npm run pack:react
```

## 검증

```bash
npm run build
npx tsc --noEmit
npm run storybook:build
npm run pack:tokens
npm run pack:react
```

이번 품질 개선 범위는 Next.js production build, TypeScript, 변경 파일 ESLint, Storybook 정적 빌드, 두 workspace 패키지의 `npm pack --dry-run`으로 검증했습니다.

## 진행 상태

| 영역 | 현재 상태 |
| --- | --- |
| Semantic tokens | light/dark 역할 토큰 구현 |
| Core components | Button, Input, Select, Dialog, Item 공개 |
| Product proof | 예약 플로우 구현 |
| Storybook | Button 핵심 상태 구현 및 정적 빌드 검증 |
| npm packages | tokens/react workspace와 pack 검증 완료, registry 미배포 |
| Figma/agent contract | 설계 예정 |

## 다음 단계

1. Core 5 전체를 `@integra-ui/react`의 단일 API로 추출
2. 별도 consumer 앱에서 tarball 설치와 스타일·타입 검증
3. Storybook에 Core 5의 상태·반응형·접근성 시나리오 추가
4. 컴포넌트 계약을 읽을 수 있는 machine-readable manifest 작성
5. manifest를 기반으로 Figma 에이전트 또는 MCP 연결 실험

## 라이선스

현재 별도의 오픈소스 라이선스는 지정하지 않았습니다. 공개 배포 전에 라이선스와 기여 정책을 명시할 예정입니다.
