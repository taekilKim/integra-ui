import Link from "next/link"
import { ArrowRight, Check, Code, CursorClick, ShieldCheck } from "@phosphor-icons/react/dist/ssr"
import { ReservationFlow } from "@/components/examples/reservation-flow"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const principles = [
  { icon: Code, title: "역할로 연결", description: "Primitive 값보다 화면에서 맡는 역할을 먼저 이름 붙입니다." },
  { icon: ShieldCheck, title: "상태까지 설계", description: "오류, 로딩, 비활성, 포커스를 기본 사양에 포함합니다." },
  { icon: CursorClick, title: "반응으로 설명", description: "모션과 피드백으로 입력과 상태 변화를 분명하게 전달합니다." },
]

const coreComponents = ["Button", "Input", "Select", "Dialog", "Item"]

export default function Home() {
  return (
    <div className="bg-surface-canvas text-content-primary">
      <section className="relative overflow-hidden border-b border-line px-20 py-80 md:px-40 md:py-120">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-320 bg-[radial-gradient(circle_at_50%_0%,var(--primary-subtle),transparent_65%)] opacity-80" />
        <div className="relative mx-auto grid max-w-1200 items-end gap-48 lg:grid-cols-[1fr_0.72fr]">
          <div>
            <Badge variant="secondary" className="bg-primary-subtle text-primary-subtle-foreground">Quality reset · Core 5</Badge>
            <h1 className="mt-24 max-w-760 fs-48 font-bold leading-56 tracking--4 sm:fs-64 sm:leading-72">
              한국어 제품 경험을<br />끝까지 설계하는 UI 시스템
            </h1>
            <p className="mt-24 max-w-640 fs-18 leading-30 tracking--1 text-content-secondary">
              Integra UI는 컴포넌트의 모양만 제공하지 않습니다. 역할 기반 토큰, 상태, 접근성, React 동작을 하나의 판단 기준으로 연결합니다.
            </p>
            <div className="mt-32 flex flex-col gap-12 sm:flex-row">
              <Link href="/examples/reservation"><Button className="w-full sm:w-auto">실제 플로우 체험하기 <ArrowRight /></Button></Link>
              <Link href="/docs/foundations"><Button className="w-full sm:w-auto" appearance="outlined" variant="tertiary">설계 원칙 보기</Button></Link>
            </div>
          </div>

          <div className="rounded-card border border-line bg-surface-raised p-20 shadow-integra">
            <p className="fs-12 font-bold uppercase tracking-2 text-content-tertiary">One contract</p>
            <div className="mt-16 space-y-10">
              {["토큰이 역할을 설명하는가", "상태가 동작으로 증명되는가", "키보드에서도 같은 흐름인가", "제품 화면에서 함께 작동하는가"].map((item) => (
                <div key={item} className="flex items-center gap-10 rounded-control bg-surface-subtle px-14 py-12 fs-14 font-medium">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-feedback-positive-subtle text-feedback-positive"><Check className="h-12 w-12" weight="bold" /></span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-20 py-80 md:px-40 md:py-120">
        <div className="mx-auto max-w-1200">
          <div className="mb-36 max-w-720">
            <p className="fs-13 font-bold uppercase tracking-2 text-primary">Proof, not showcase</p>
            <h2 className="mt-12 fs-36 font-bold leading-44 tracking--3 md:fs-44 md:leading-52">컴포넌트는 실제 흐름 안에서 증명합니다</h2>
            <p className="mt-16 fs-17 leading-28 text-content-secondary">입력 오류부터 확인, 로딩, 완료까지 직접 조작해 보세요. 다섯 컴포넌트가 같은 토큰과 상태 규칙을 공유합니다.</p>
          </div>
          <ReservationFlow />
        </div>
      </section>

      <section className="border-y border-line bg-surface-subtle px-20 py-80 md:px-40 md:py-104">
        <div className="mx-auto max-w-1200">
          <div className="grid gap-16 md:grid-cols-3">
            {principles.map((principle, index) => {
              const Icon = principle.icon
              return (
                <article key={principle.title} className="rounded-card border border-line bg-surface-raised p-24 md:p-28">
                  <div className="flex items-center justify-between">
                    <span className="flex h-44 w-44 items-center justify-center rounded-control bg-primary-subtle text-primary"><Icon className="h-22 w-22" /></span>
                    <span className="fs-12 font-semibold text-content-tertiary">0{index + 1}</span>
                  </div>
                  <h3 className="mt-24 fs-20 font-bold">{principle.title}</h3>
                  <p className="mt-8 fs-14 leading-24 text-content-secondary">{principle.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-20 py-80 md:px-40 md:py-104">
        <div className="mx-auto flex max-w-1200 flex-col justify-between gap-32 md:flex-row md:items-end">
          <div>
            <p className="fs-13 font-bold uppercase tracking-2 text-primary">Core components</p>
            <h2 className="mt-12 fs-32 font-bold leading-40 tracking--3">적게 공개하고, 깊게 설명합니다</h2>
            <p className="mt-12 max-w-600 fs-16 leading-26 text-content-secondary">현재 공개 범위는 실제 제품 플로우를 완성하는 다섯 컴포넌트입니다.</p>
          </div>
          <div className="flex flex-wrap gap-8">
            {coreComponents.map((component) => (
              <Link key={component} href={`/docs/components/${component.toLowerCase()}`} className="rounded-full border border-line bg-surface-raised px-16 py-10 fs-14 font-semibold transition-colors hover:border-line-focus hover:text-primary">
                {component}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-line bg-surface-subtle px-20 py-40 md:px-40">
        <div className="mx-auto flex max-w-1200 flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="fs-15 font-bold">Integra UI</p>
          <p className="fs-13 text-content-tertiary">좋은 판단을 반복 가능한 시스템으로.</p>
        </div>
      </footer>
    </div>
  )
}
