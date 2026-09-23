import { DocsSectionOverview } from "@/components/layout/docs-section-overview"

const learnItems = [
  {
    title: "Design Token이란?",
    description: "색상이나 간격 값을 저장하는 데서 끝나지 않고, 디자인 결정이 코드까지 전달되는 방식을 설명합니다.",
  },
  {
    title: "Primitive와 Semantic Token",
    description: "실제 값과 역할 이름을 왜 분리하는지, 브랜드가 바뀌어도 구조를 유지하는 방법을 배웁니다.",
    href: "/docs/foundations/design-tokens",
    status: "준비됨" as const,
  },
  {
    title: "Variant, Appearance, State, Size",
    description: "비슷해 보이는 컴포넌트 속성이 각각 어떤 결정을 담당하는지 구분합니다.",
  },
  {
    title: "Figma Property와 React Props",
    description: "디자이너가 선택한 속성이 실제 컴포넌트 API와 스타일로 이어지는 흐름을 살펴봅니다.",
  },
  {
    title: "어디까지 커스터마이징해도 될까?",
    description: "브랜드 표현과 접근성 규칙을 구분해 안전한 변경 범위를 판단합니다.",
  },
]

export default function LearnPage() {
  return (
    <DocsSectionOverview
      eyebrow="Learn"
      title="외우지 않고 이해하는 디자인 시스템"
      description="표준 용어를 무리하게 번역하지 않습니다. 대신 디자이너가 실제 화면과 코드 사이의 관계를 한국어로 이해할 수 있게 설명합니다."
      principle="용어의 번역보다 역할과 이유를 먼저 설명합니다."
      items={learnItems}
    />
  )
}
