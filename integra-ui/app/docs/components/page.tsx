"use client"

import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"

const categories = [
  {
    title: "Action",
    description: "사용자 행동을 발생시키는 컨트롤. 원티드 Montage는 이 카테고리에서 Button, Floating Action 등 트리거 컴포넌트를 모아 설명합니다.",
    items: [
      { name: "Button", href: "/docs/components/button", preview: <Button size="small">Primary</Button> },
      { name: "Toggle", href: "/docs/components/toggle", preview: <Button size="small" appearance="text" variant="secondary">Toggle</Button> },
      { name: "Dialog", href: "/docs/components/dialog", preview: <Button size="small" variant="tertiary">Modal</Button> },
    ],
  },
  {
    title: "Selection & Input",
    description: "입력과 선택을 다루는 컴포넌트. Input, Switch, Checkbox처럼 상태를 주고받는 요소를 묶어 봅니다.",
    items: [
      { name: "Input", href: "/docs/components/input", preview: <Input placeholder="name@example.com" className="h-40 w-full max-w-180 bg-white" /> },
      { name: "Switch", href: "/docs/components/switch", preview: <Switch checked /> },
      { name: "Checkbox", href: "/docs/components/checkbox", preview: <Checkbox checked /> },
    ],
  },
  {
    title: "Data & Navigation",
    description: "정보 구조와 이동 흐름을 담당하는 컴포넌트. Table, Tabs, Pagination처럼 큰 레이아웃 맥락에서 소비됩니다.",
    items: [
      { name: "Tabs", href: "/docs/components/tabs", preview: <div className="rounded-8 border border-integra-gray-200 px-12 py-8 fs-13 text-integra-gray-700">Tabs</div> },
      { name: "Pagination", href: "/docs/components/pagination", preview: <div className="rounded-8 border border-integra-gray-200 px-12 py-8 fs-13 text-integra-gray-700">1 2 3</div> },
      { name: "Slider", href: "/docs/components/slider", preview: <div className="w-160"><Slider defaultValue={[35]} max={100} step={1} /></div> },
    ],
  },
]

const docFlow = [
  "Overview에서 카테고리별 역할을 먼저 파악합니다.",
  "개별 상세 페이지에서 Design 탭 기준 Anatomy, Variants, States, Size를 확인합니다.",
  "하단 가이드에서 Application, Hierarchy, Layout, Usage 규칙을 읽고 실무에 연결합니다.",
]

export default function ComponentsIntro() {
  return (
    <div className="space-y-64 pb-120">
      <div className="space-y-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs">문서</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>컴포넌트</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 tracking--4 text-integra-gray-900">Components</h1>
        <p className="max-w-800 fs-20 leading-32 tracking--1 text-integra-gray-500">
          원티드 Montage처럼 컴포넌트 문서를 카테고리 중심으로 정리하고,
          <br />
          각 상세 페이지에서는 Design 기준의 Anatomy/Variants/States 흐름을 따르도록 재구성했습니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      <section className="space-y-32">
        <div className="flex items-center justify-between">
          <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">Categories</h2>
          <Badge variant="outline" className="border-integra-gray-200 text-integra-gray-500">Montage benchmark</Badge>
        </div>
        <div className="space-y-20">
          {categories.map((category) => (
            <Card key={category.title} className="border-integra-gray-200 p-24 space-y-20">
              <div className="space-y-6">
                <h3 className="fs-20 font-bold text-integra-gray-900">{category.title}</h3>
                <p className="fs-14 leading-24 text-integra-gray-600">{category.description}</p>
              </div>
              <div className="grid gap-16 md:grid-cols-3">
                {category.items.map((item) => (
                  <Link key={item.name} href={item.href} className="group block">
                    <div className="rounded-16 border border-integra-gray-100 bg-white transition-all hover:border-primary/40 hover:shadow-sm">
                      <div className="flex h-120 items-center justify-center border-b border-integra-gray-100 bg-integra-gray-50 p-20">
                        {item.preview}
                      </div>
                      <div className="p-18">
                        <p className="fs-15 font-bold text-integra-gray-900 transition-colors group-hover:text-primary">{item.name}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-24">
        <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">Reading Flow</h2>
        <div className="grid gap-16 md:grid-cols-3">
          {docFlow.map((item, index) => (
            <Card key={item} className="border-integra-gray-200 p-24 space-y-10">
              <p className="fs-12 uppercase tracking-2 text-integra-gray-400">Step {index + 1}</p>
              <p className="fs-15 leading-24 text-integra-gray-700">{item}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
