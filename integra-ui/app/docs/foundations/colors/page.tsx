"use client"

import { toast } from "@/hooks/use-toast"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const ATOMIC_COLORS = {
  Gray: { 50: "#F9FAFB", 100: "#F2F4F6", 200: "#E5E8EB", 300: "#D1D6DB", 400: "#B0B8C1", 500: "#8B95A1", 600: "#6B7684", 700: "#4E5968", 800: "#333D4B", 900: "#191F28" },
  Blue: { 50: "#EAF2FF", 100: "#D4E3FF", 200: "#A6C8FF", 300: "#75A8FF", 400: "#4589FF", 500: "#2A7BFF", 600: "#1F5EFF", 700: "#1446E6", 800: "#0F35B3", 900: "#0A247A" },
  Green: { 50: "#E6F8F3", 100: "#C0EFE5", 200: "#8ADDCF", 300: "#4FCAB5", 400: "#20CE9F", 500: "#09B687", 600: "#00966D", 700: "#007555", 800: "#00543D", 900: "#003325" },
  Red: { 50: "#FFF0F1", 100: "#FFD4D7", 200: "#FF9AA1", 300: "#FF6673", 400: "#FF3849", 500: "#F04452", 600: "#D92B3A", 700: "#B31926", 800: "#8C0F1A", 900: "#660811" },
  Orange: { 50: "#FFF9E6", 100: "#FFEDC2", 200: "#FFD985", 300: "#FFC447", 400: "#FFAF1A", 500: "#F79009", 600: "#D67200", 700: "#A85200", 800: "#7D3900", 900: "#542400" },
  Violet: { 50: "#F3F1FF", 100: "#E3DFFF", 200: "#C6BCFF", 300: "#A696FF", 400: "#8873FF", 500: "#6C4DFA", 600: "#5534D9", 700: "#4123AB", 800: "#2F1782", 900: "#1E0D57" },
}

const SEMANTIC_COLORS = [
  { category: "Text", token: "text-primary", usage: "본문의 핵심 텍스트와 높은 위계의 레이블" },
  { category: "Text", token: "text-secondary", usage: "보조 설명과 서브 카피" },
  { category: "Surface", token: "surface-default", usage: "카드, 패널, 입력 필드의 기본 배경" },
  { category: "Surface", token: "surface-muted", usage: "구분선이 필요한 보조 영역" },
  { category: "Border", token: "border-default", usage: "기본 경계선과 분리선" },
  { category: "Action", token: "primary / primary-hover", usage: "주 액션과 강조 인터랙션" },
  { category: "Status", token: "positive / warning / negative", usage: "피드백과 상태 메시지" },
]

const ACCESSIBILITY_RULES = [
  { label: "Body text", target: "4.5:1 이상", note: "본문과 캡션은 기본 대비 기준" },
  { label: "Large text", target: "3:1 이상", note: "18pt 이상 또는 14pt bold 이상" },
  { label: "UI boundary", target: "3:1 이상", note: "아이콘, 컨트롤, 포커스 링" },
]

export default function ColorsPage() {
  const copyHex = (hex: string) => {
    navigator.clipboard.writeText(hex)
    toast({ title: "Copied", description: `${hex} copied to clipboard.` })
  }

  return (
    <div className="space-y-64 pb-120">
      <div className="space-y-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs/foundations">Foundations</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Colors</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 tracking--4 text-integra-gray-900">Color</h1>
        <p className="max-w-800 fs-20 leading-32 tracking--1 text-integra-gray-500">
          원티드 Montage의 Color 문서처럼 `Semantic`과 `Atomic`을 분리해,
          <br />
          먼저 역할 이름을 정의하고 그 뒤에 실제 팔레트를 매핑하는 순서로 정리합니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      <Tabs defaultValue="semantic" className="space-y-32">
        <TabsList className="rounded-12 bg-integra-gray-50 p-6">
          <TabsTrigger value="semantic" className="fs-14 font-medium">Semantic</TabsTrigger>
          <TabsTrigger value="atomic" className="fs-14 font-medium">Atomic</TabsTrigger>
        </TabsList>

        <TabsContent value="semantic" className="space-y-32">
          <section className="space-y-16">
            <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">Semantic Color</h2>
            <p className="fs-16 leading-28 text-integra-gray-500">
              제품 구현에서는 블루 500 같은 원시값보다 역할 이름을 먼저 사용합니다.
              컴포넌트는 이 semantic token만 소비하고, 실제 팔레트 연결은 파운데이션에서 관리합니다.
            </p>
            <div className="rounded-12 border border-integra-gray-100 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead className="bg-integra-gray-50 border-b border-integra-gray-100">
                  <tr className="fs-12 font-bold uppercase tracking-1 text-integra-gray-500">
                    <th className="px-20 py-14">Category</th>
                    <th className="px-20 py-14">Token</th>
                    <th className="px-20 py-14">Usage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-integra-gray-100 bg-white">
                  {SEMANTIC_COLORS.map((item) => (
                    <tr key={`${item.category}-${item.token}`}>
                      <td className="px-20 py-14 fs-14 font-semibold text-integra-gray-900">{item.category}</td>
                      <td className="px-20 py-14 font-mono fs-14 text-primary">{item.token}</td>
                      <td className="px-20 py-14 fs-14 text-integra-gray-700">{item.usage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="atomic" className="space-y-40">
          <section className="space-y-16">
            <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">Atomic Color</h2>
            <p className="fs-16 leading-28 text-integra-gray-500">
              Atomic color는 semantic token이 참조하는 실제 재료입니다. 색상 스케일은 50-900 단계로 고정하고,
              문서에서는 복사 가능한 swatch 형태로 제공합니다.
            </p>
          </section>

          {Object.entries(ATOMIC_COLORS).map(([name, shades]) => (
            <section key={name} className="space-y-20">
              <h3 className="fs-20 font-bold text-integra-gray-900">{name}</h3>
              <div className="grid grid-cols-2 gap-12 md:grid-cols-5 lg:grid-cols-10">
                {Object.entries(shades).map(([step, hex]) => (
                  <button
                    key={step}
                    type="button"
                    onClick={() => copyHex(hex)}
                    className="group space-y-8 text-left"
                  >
                    <div
                      className="relative h-88 rounded-14 border border-integra-gray-100 shadow-sm transition-transform group-hover:scale-[1.02]"
                      style={{ backgroundColor: hex }}
                    >
                      <span className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 transition-opacity group-hover:opacity-100 fs-12 font-bold text-white">
                        Copy
                      </span>
                    </div>
                    <div className="space-y-2">
                      <p className="fs-12 font-bold text-integra-gray-900">{step}</p>
                      <p className="font-mono fs-11 uppercase text-integra-gray-400">{hex}</p>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          ))}
        </TabsContent>
      </Tabs>

      <section className="space-y-20">
        <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">Contrast Guidelines</h2>
        <div className="grid gap-16 md:grid-cols-3">
          {ACCESSIBILITY_RULES.map((rule) => (
            <div key={rule.label} className="rounded-16 border border-integra-gray-200 bg-white p-20">
              <p className="fs-12 uppercase tracking-1 text-integra-gray-400">{rule.label}</p>
              <p className="mt-6 fs-20 font-bold text-integra-gray-900">{rule.target}</p>
              <p className="mt-6 fs-14 leading-24 text-integra-gray-600">{rule.note}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
