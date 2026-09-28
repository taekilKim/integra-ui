"use client"

import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Card } from "@/components/ui/card"
import { ArrowRight, Palette, TextAa, Ruler, GridFour } from "@phosphor-icons/react"

const baseMaterials = [
  {
    title: "Color",
    href: "/docs/foundations/colors",
    description: "Primitive palette와 semantic token을 함께 다뤄 제품 전반의 색상 역할을 정의합니다.",
    icon: Palette,
    preview: (
      <div className="flex gap-8">
        <div className="h-20 w-20 rounded-full bg-primary" />
        <div className="h-20 w-20 rounded-full bg-integra-gray-900" />
        <div className="h-20 w-20 rounded-full bg-integra-red-500" />
        <div className="h-20 w-20 rounded-full bg-integra-green-500" />
      </div>
    ),
  },
  {
    title: "Typography",
    href: "/docs/foundations/typography",
    description: "기본 타이포 원칙, 줄바꿈 규칙, 스타일 테이블을 통해 읽기 경험을 통일합니다.",
    icon: TextAa,
    preview: (
      <div className="flex items-end gap-8 font-bold text-integra-gray-900">
        <span className="fs-32">Aa</span>
        <span className="fs-20 text-integra-gray-500">Aa</span>
        <span className="fs-14 text-integra-gray-400">Aa</span>
      </div>
    ),
  },
  {
    title: "Design Tokens",
    href: "/docs/foundations/design-tokens",
    description: "Spacing, radius, size, elevation처럼 모든 UI가 공유하는 수치 기반 재료를 정의합니다.",
    icon: Ruler,
    preview: (
      <div className="flex gap-8">
        <div className="h-20 w-20 rounded-4 border border-integra-gray-300" />
        <div className="h-20 w-20 rounded-12 border border-integra-gray-300" />
        <div className="h-20 w-20 rounded-full border border-integra-gray-300" />
      </div>
    ),
  },
]

const overviewSteps = [
  {
    title: "Base Material",
    description: "Color, Typography, Token을 분리해서 각 재료가 담당하는 역할을 먼저 정의합니다.",
  },
  {
    title: "Semantic Mapping",
    description: "Primitive 값을 직접 쓰지 않고 컴포넌트에서 사용할 역할 이름으로 재매핑합니다.",
  },
  {
    title: "Component Adoption",
    description: "Buttons, Inputs, Dialogs 같은 컴포넌트는 재료를 조합해 같은 패턴으로 소비합니다.",
  },
  {
    title: "Utility Alignment",
    description: "Spacing, Layout, Overlay 규칙은 Utilities에서 재사용해 조합 일관성을 유지합니다.",
  },
]

const principles = [
  {
    title: "역할을 먼저 이름 붙입니다",
    description: "색상과 수치를 직접 고르기 전에 배경, 본문, 경계, 행동처럼 UI에서 맡는 역할을 정의합니다.",
  },
  {
    title: "상태도 컴포넌트의 일부입니다",
    description: "기본 화면만 만들지 않습니다. 오류, 로딩, 비활성, 포커스와 복구 방법까지 하나의 사양으로 다룹니다.",
  },
  {
    title: "반응에는 이유가 있어야 합니다",
    description: "Hover, Press, Motion은 장식이 아니라 입력이 전달됐고 다음 상태로 이동했음을 알려주는 피드백입니다.",
  },
  {
    title: "바꿔도 무너지지 않게 만듭니다",
    description: "브랜드 표현은 교체할 수 있지만 대비, 터치 영역, 키보드 동작 같은 사용성의 약속은 유지합니다.",
  },
]

export default function FoundationsIntro() {
  return (
    <div className="space-y-64 pb-120">
      <div className="space-y-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>Foundations</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">Foundations</h1>
        <p className="max-w-800 fs-20 leading-32 tracking--1 text-integra-gray-500">
          화면의 인상보다 먼저 반복 가능한 판단 기준을 세우고,
          <br />
          색상, 타이포, 토큰이 제품 안에서 맡는 역할을 정의합니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      <section className="space-y-24">
        <div className="space-y-8">
          <p className="fs-12 font-bold uppercase tracking-2 text-primary">Principles</p>
          <h2 className="fs-28 font-bold tracking--2 text-integra-gray-900">판단을 반복 가능하게 만드는 네 가지 원칙</h2>
        </div>
        <div className="grid gap-16 md:grid-cols-2">
          {principles.map((principle, index) => (
            <Card key={principle.title} className="border-integra-gray-200 p-24">
              <p className="fs-12 font-semibold text-primary">0{index + 1}</p>
              <h3 className="mt-12 fs-18 font-bold text-integra-gray-900">{principle.title}</h3>
              <p className="mt-8 fs-14 leading-24 text-integra-gray-600">{principle.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-24">
        <div className="flex items-center justify-between">
          <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">Base Material</h2>
          <div className="flex items-center gap-8 rounded-full bg-integra-gray-50 px-14 py-8 text-integra-gray-500">
            <GridFour className="h-16 w-16" />
            <span className="fs-13 font-medium">Role-based foundation</span>
          </div>
        </div>
        <div className="grid gap-20 md:grid-cols-3">
          {baseMaterials.map((item) => {
            const Icon = item.icon

            return (
              <Link key={item.title} href={item.href} className="group block">
                <Card className="h-full border-integra-gray-200 bg-white p-28 transition-all hover:border-primary/40 hover:shadow-md">
                  <div className="flex items-start justify-between">
                    <div className="rounded-12 bg-integra-gray-50 p-12 text-primary">
                      <Icon className="h-24 w-24" />
                    </div>
                    <ArrowRight className="h-18 w-18 text-integra-gray-300 transition-colors group-hover:text-primary" />
                  </div>
                  <div className="mt-20 space-y-8">
                    <h3 className="fs-20 font-bold text-integra-gray-900">{item.title}</h3>
                    <p className="fs-14 leading-24 text-integra-gray-500">{item.description}</p>
                  </div>
                  <div className="mt-20 border-t border-integra-gray-100 pt-20">{item.preview}</div>
                </Card>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="space-y-24">
        <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">Documentation Flow</h2>
        <div className="grid gap-16 md:grid-cols-2">
          {overviewSteps.map((step, index) => (
            <Card key={step.title} className="border-integra-gray-200 p-24 space-y-10">
              <p className="fs-12 uppercase tracking-2 text-integra-gray-400">Step {index + 1}</p>
              <h3 className="fs-18 font-bold text-integra-gray-900">{step.title}</h3>
              <p className="fs-14 leading-24 text-integra-gray-600">{step.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="rounded-24 border border-dashed border-integra-gray-200 bg-white p-32">
        <p className="fs-16 leading-28 text-integra-gray-600">
          Integra UI는 <code>Base Material -&gt; Semantic Mapping -&gt; Component Application</code> 순서로
          값이 역할을 얻고 실제 제품에 적용되는 과정을 추적합니다.
        </p>
      </section>
    </div>
  )
}
