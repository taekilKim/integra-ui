import { DocsSectionOverview } from "@/components/layout/docs-section-overview"

const advancedItems = [
  {
    title: "Accessibility",
    description: "키보드, Focus, ARIA, 대비 규칙을 컴포넌트별 검증 시나리오로 정리합니다.",
    status: "작성 예정" as const,
  },
  {
    title: "Type-safe Component API",
    description: "디자인 속성과 React 타입이 같은 선택지를 갖도록 API 계약을 구조화합니다.",
    status: "작성 예정" as const,
  },
  {
    title: "Machine-readable Registry",
    description: "Props, 상태, 토큰, 접근성 규칙을 문서와 도구가 함께 읽을 수 있는 데이터로 만듭니다.",
    status: "실험" as const,
  },
  {
    title: "AI-readable Design System",
    description: "사람에게 명확한 규칙을 기반으로 AI가 컴포넌트를 선택하고 검증할 수 있는 구조를 실험합니다.",
    status: "실험" as const,
  },
]

export default function AdvancedPage() {
  return (
    <DocsSectionOverview
      eyebrow="Advanced"
      title="명확한 규칙이 만든 다음 단계"
      description="Advanced는 Integra UI의 출발점이 아닙니다. 사람을 위한 문서와 API, 토큰이 충분히 일치한 뒤 확장하는 실험 영역입니다."
      principle="AI를 위해 규칙을 만들지 않고, 명확한 규칙을 AI도 읽을 수 있게 확장합니다."
      items={advancedItems}
    />
  )
}
