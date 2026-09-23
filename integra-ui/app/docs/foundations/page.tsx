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
          원티드 Montage처럼 파운데이션을 Base Material 관점으로 나눠,
          <br />
          컴포넌트보다 먼저 색상, 타이포, 토큰의 역할과 소비 방식을 정의합니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      <section className="space-y-24">
        <div className="flex items-center justify-between">
          <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">Base Material</h2>
          <div className="flex items-center gap-8 rounded-full bg-integra-gray-50 px-14 py-8 text-integra-gray-500">
            <GridFour className="h-16 w-16" />
            <span className="fs-13 font-medium">Montage-style IA</span>
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
          원티드의 문서 구조에서 유효한 점은 단순 토큰 나열이 아니라
          <code>Base Material -&gt; Semantic Mapping -&gt; Component Application</code> 순서로 정보 밀도를 쌓는 점입니다.
          Integra UI도 같은 흐름으로 각 문서의 읽는 순서를 고정합니다.
        </p>
      </section>
    </div>
  )
}
