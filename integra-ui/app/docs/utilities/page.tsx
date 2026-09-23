"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Card } from "@/components/ui/card"
import { Ruler, GridFour, Sparkle, ArrowsOutCardinal } from "@phosphor-icons/react"

const utilityGroups = [
  {
    title: "Spacing Rules",
    description: "컴포넌트 내부 간격과 섹션 간 간격을 같은 그리드 언어로 관리합니다.",
    icon: Ruler,
  },
  {
    title: "Layout Helpers",
    description: "정렬, 분배, 반응형 폭 규칙을 문서화해 화면 조합 속도를 높입니다.",
    icon: GridFour,
  },
  {
    title: "Motion & Feedback",
    description: "상태 전환, 등장 타이밍, 포커스 피드백을 재사용 가능한 패턴으로 묶습니다.",
    icon: Sparkle,
  },
  {
    title: "Overlay Behavior",
    description: "Popover, Dialog, Tooltip처럼 레이어드 UI가 공유하는 위치/닫힘 규칙을 다룹니다.",
    icon: ArrowsOutCardinal,
  },
]

export default function UtilitiesPage() {
  return (
    <div className="space-y-64 pb-120">
      <div className="space-y-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>Utilities</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">Utilities</h1>
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1 max-w-800">
          원티드 Montage처럼 컴포넌트 외부에서 반복되는 규칙을 별도 축으로 관리합니다.
          <br />
          배치, 간격, 오버레이, 모션 규칙을 공통 유틸리티로 정리해 문서의 재사용성을 높입니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      <section className="space-y-24">
        <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">Utility Categories</h2>
        <div className="grid gap-16 md:grid-cols-2">
          {utilityGroups.map((group) => {
            const Icon = group.icon

            return (
              <Card key={group.title} className="border-integra-gray-200 p-24 space-y-12">
                <div className="flex items-center gap-10 text-primary">
                  <Icon className="h-20 w-20" />
                  <p className="fs-16 font-bold text-integra-gray-900">{group.title}</p>
                </div>
                <p className="fs-14 leading-24 text-integra-gray-600">{group.description}</p>
              </Card>
            )
          })}
        </div>
      </section>

      <section className="rounded-24 border border-dashed border-integra-gray-200 bg-white p-32">
        <p className="fs-16 leading-28 text-integra-gray-600">
          다음 단계에서는 `spacing`, `overlay`, `responsive layout` 같은 유틸리티 규칙을 개별 페이지로 분리해
          Components와 Foundations 사이의 반복 규칙을 흡수하는 구성을 권장합니다.
        </p>
      </section>
    </div>
  )
}
