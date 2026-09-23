import { DocsSectionOverview } from "@/components/layout/docs-section-overview"

const customizeItems = [
  {
    title: "브랜드 컬러 적용",
    description: "Primitive 값은 바꾸되 컴포넌트가 참조하는 Semantic 역할은 유지하는 방법을 다룹니다.",
    href: "/docs/foundations/colors",
    status: "준비됨" as const,
  },
  {
    title: "Radius 변경",
    description: "제품의 인상을 바꾸면서도 크기별 형태 위계를 무너뜨리지 않는 곡률 규칙을 만듭니다.",
  },
  {
    title: "Typography 변경",
    description: "글꼴을 교체한 뒤 크기, 행간, 자간을 역할 단위로 다시 검증하는 순서를 설명합니다.",
    href: "/docs/foundations/typography",
    status: "준비됨" as const,
  },
  {
    title: "Density와 Spacing 변경",
    description: "화면 밀도를 조절할 때 터치 영역과 정보 계층을 함께 지키는 방법을 다룹니다.",
  },
  {
    title: "새 Variant 추가",
    description: "기존 위계와 겹치지 않는지 먼저 판단한 뒤 Figma와 React에 같은 속성을 추가합니다.",
  },
  {
    title: "새 Component 확장",
    description: "기존 primitive를 조합하고 문서·데모·접근성 규칙까지 함께 추가하는 절차를 정의합니다.",
  },
]

export default function CustomizePage() {
  return (
    <DocsSectionOverview
      eyebrow="Customize"
      title="복사한 컴포넌트를 내 제품답게"
      description="무엇이든 바꿀 수 있다는 말 대신, 자유롭게 바꿀 부분과 제품 맥락에 따라 판단할 부분, 유지해야 할 상호작용 규칙을 구분합니다."
      principle="표현은 유연하게 바꾸고, 사용성과 접근성의 약속은 지킵니다."
      items={customizeItems}
    />
  )
}
