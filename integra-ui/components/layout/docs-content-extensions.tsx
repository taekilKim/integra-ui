"use client"

import { usePathname } from "next/navigation"
import { Badge } from "@/components/ui/badge"

type StateItem = {
  name: string
  description: string
  intent: string
}

type SpecItem = {
  key: string
  value: string
  note: string
}

type UseCaseItem = {
  scenario: string
  goal: string
  recipe: string
}

type PropertyItem = {
  name: string
  values: string
}

type UsageGuideItem = {
  type: "Do" | "Don't"
  text: string
}

type ComponentDocProfile = {
  essentials: string[]
  optionals: string[]
  states: StateItem[]
  specs: SpecItem[]
  useCases: UseCaseItem[]
  accessibility: string[]
  properties: PropertyItem[]
  usageGuides: UsageGuideItem[]
}

const DEFAULT_PROFILE: ComponentDocProfile = {
  essentials: [
    "기본 변형(Primary/Secondary)과 크기(S/M/L)를 먼저 정의합니다.",
    "기본 상태는 항상 현재 맥락에서 가장 안전한 선택으로 둡니다.",
    "라벨, 아이콘, 콘텐츠 슬롯의 최소 조합을 문서 첫머리에 제공합니다.",
  ],
  optionals: [
    "밀도(Density)나 축약 모드는 실제 제품 화면에서 필요할 때만 노출합니다.",
    "고급 스타일 옵션은 토큰 기반 커스터마이징 섹션으로 분리합니다.",
    "실험적 속성은 안정 버전과 구분해 배포 정책을 명시합니다.",
  ],
  states: [
    { name: "Enabled", description: "사용 가능한 기본 상태", intent: "일반 상호작용" },
    { name: "Hover / Focus", description: "마우스/키보드 상호작용 피드백", intent: "인지성 강화" },
    { name: "Pressed / Active", description: "직접 조작 중임을 표시", intent: "행동 확인" },
    { name: "Disabled", description: "현재 맥락에서 실행 불가", intent: "오동작 방지" },
    { name: "Error / Warning", description: "유효성 또는 위험 신호", intent: "복구 유도" },
  ],
  specs: [
    { key: "Touch Target", value: "Min 44x44", note: "모바일 접근성 기준" },
    { key: "Label Length", value: "1-2 lines", note: "줄바꿈 시 정보 유지" },
    { key: "Spacing Grid", value: "4px base", note: "컴포넌트 간 일관성" },
    { key: "Contrast", value: "WCAG AA", note: "텍스트/아이콘 대비 준수" },
  ],
  useCases: [
    { scenario: "기본 폼", goal: "입력/확인 플로우 안정화", recipe: "Primary 액션 1개 + 보조 액션 1개" },
    { scenario: "설정 화면", goal: "반복 토글/선택 최적화", recipe: "즉시 반영 상태 + Undo 경로 제공" },
    { scenario: "에러 복구", goal: "실패 지점 빠른 수정", recipe: "오류 원인 + 해결 액션을 인접 배치" },
  ],
  accessibility: [
    "의미 있는 라벨(aria-label 또는 visible label)을 제공합니다.",
    "키보드 순서(Tab / Shift+Tab)가 시각적 순서와 일치해야 합니다.",
    "Focus ring은 배경과 최소 3:1 대비를 유지합니다.",
    "상태 변화는 색상 외 텍스트/아이콘으로도 전달합니다.",
  ],
  properties: [
    { name: "Size", values: "L, M, S" },
    { name: "State", values: "default, hover, disabled" },
    { name: "Color", values: "default, invert" },
  ],
  usageGuides: [
    { type: "Do", text: "행동이 분명한 동사형 라벨을 사용합니다." },
    { type: "Don't", text: "문맥 없는 장문 라벨이나 모호한 표현을 피합니다." },
  ],
}

const COMPONENT_PROFILE_MAP: Record<string, Partial<ComponentDocProfile>> = {
  button: {
    essentials: [
      "CTA 우선순위(Primary 1개)를 먼저 고정합니다.",
      "버튼 라벨은 동사 중심으로 2-4음절을 권장합니다.",
      "파괴적 액션은 Destructive 변형으로 분리합니다.",
    ],
    optionals: [
      "아이콘 전용 버튼은 툴팁/aria-label을 필수로 제공합니다.",
      "ButtonGroup 비율(5:5, 3:7)은 특정 업무 플로우에서만 사용합니다.",
      "로딩 스피너는 제출형 버튼에서만 사용합니다.",
    ],
    states: [
      { name: "Default", description: "중립/기본 상호작용", intent: "일상 작업" },
      { name: "Hover / Focus", description: "행동 가능성을 강조", intent: "탐색 보조" },
      { name: "Pressed", description: "클릭/탭 입력 처리 중", intent: "즉각 피드백" },
      { name: "Loading", description: "중복 제출 방지", intent: "처리 상태 전달" },
      { name: "Disabled", description: "조건 미충족", intent: "오입력 예방" },
    ],
    specs: [
      { key: "Height", value: "32 / 48 / 56", note: "Small / Medium / Default" },
      { key: "Min Width", value: "80", note: "텍스트 버튼 기준" },
      { key: "Icon Gap", value: "8", note: "텍스트-아이콘 간격" },
      { key: "Corner Radius", value: "8 / 12 / 16", note: "크기와 비례" },
    ],
    properties: [
      { name: "Type", values: "Primary / Secondary / Tertiary / Text / Icon" },
      { name: "Size", values: "L / M / S" },
      { name: "State", values: "default / hover / disabled" },
      { name: "Color", values: "default / invert" },
      { name: "Icon", values: "left / right / none" },
    ],
    usageGuides: [
      { type: "Do", text: "버튼 레이블은 행동 중심으로 짧게 작성합니다." },
      { type: "Do", text: "Icon 버튼은 의미가 보편적으로 명확한 경우에만 사용합니다." },
      { type: "Don't", text: "Tertiary/Text 버튼을 full width 주 액션으로 사용하지 않습니다." },
      { type: "Don't", text: "동일 화면에서 버튼 위계를 3단계 이상 혼용하지 않습니다." },
    ],
  },
  input: {
    essentials: [
      "Label, Input, Helper text 3요소를 기본 단위로 제공합니다.",
      "Placeholder는 예시 용도이며 라벨 대체로 사용하지 않습니다.",
      "에러 상태는 메시지와 함께 즉시 표시합니다.",
    ],
    optionals: [
      "Prefix/Suffix 아이콘은 의미가 명확할 때만 사용합니다.",
      "단위 표시(원, %, kg)는 입력 포맷과 함께 제공합니다.",
      "마스크/포맷팅은 서버 검증 규칙과 동일해야 합니다.",
    ],
    states: [
      { name: "Resting", description: "초기 입력 전", intent: "대기 상태" },
      { name: "Focus", description: "커서 활성화", intent: "입력 유도" },
      { name: "Filled", description: "값 입력 완료", intent: "확인 가능" },
      { name: "Error", description: "검증 실패", intent: "수정 유도" },
      { name: "Disabled / Readonly", description: "편집 제한", intent: "안전성 확보" },
    ],
    properties: [
      { name: "Size", values: "L / M / S" },
      { name: "State", values: "resting / focus / error / disabled" },
      { name: "Adornment", values: "prefix / suffix / none" },
    ],
  },
  switch: {
    essentials: [
      "즉시 적용되는 설정에만 스위치를 사용합니다.",
      "레이블은 상태가 아니라 기능 이름으로 작성합니다.",
      "토글 직후 피드백(토스트/문구)을 제공합니다.",
    ],
    optionals: [
      "설정 영향이 큰 경우 Confirm 패턴으로 전환합니다.",
      "보조 설명은 스위치 하단에 1줄로 유지합니다.",
      "같은 그룹에서는 기본값 규칙을 명시합니다.",
    ],
    states: [
      { name: "Off", description: "기능 비활성", intent: "기본값 유지" },
      { name: "On", description: "기능 활성", intent: "즉시 반영" },
      { name: "Focus Visible", description: "키보드 탐색 포커스", intent: "접근성 강화" },
      { name: "Disabled", description: "변경 불가", intent: "권한/조건 보호" },
    ],
    properties: [
      { name: "Size", values: "M (기본), 필요 시 S/L 확장" },
      { name: "State", values: "on / off / disabled / focus-visible" },
      { name: "Label Position", values: "left / right" },
    ],
  },
}

function mergeProfile(slug: string): ComponentDocProfile {
  const override = COMPONENT_PROFILE_MAP[slug] || {}
  return {
    essentials: override.essentials || DEFAULT_PROFILE.essentials,
    optionals: override.optionals || DEFAULT_PROFILE.optionals,
    states: override.states || DEFAULT_PROFILE.states,
    specs: override.specs || DEFAULT_PROFILE.specs,
    useCases: override.useCases || DEFAULT_PROFILE.useCases,
    accessibility: override.accessibility || DEFAULT_PROFILE.accessibility,
    properties: override.properties || DEFAULT_PROFILE.properties,
    usageGuides: override.usageGuides || DEFAULT_PROFILE.usageGuides,
  }
}

function ComponentDocumentationExtension({ slug }: { slug: string }) {
  const profile = mergeProfile(slug)

  return (
    <section className="space-y-48 pt-64">
      <div className="space-y-8">
        <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">Documentation Blueprint</h2>
        <p className="fs-16 text-integra-gray-500">
          Material 3 스타일의 문서 흐름을 참고해 필수 정보와 확장 정보를 분리했습니다.
        </p>
      </div>

      <section className="space-y-16">
        <h3 className="fs-20 font-bold text-integra-gray-900">Essential vs Optional</h3>
        <div className="grid gap-16 md:grid-cols-2">
          <div className="rounded-12 border border-integra-gray-200 p-20 bg-white space-y-12">
            <Badge variant="outline" className="border-emerald-200 text-emerald-700 bg-emerald-50">Essential</Badge>
            <ul className="list-disc pl-20 space-y-6 fs-14 text-integra-gray-700">
              {profile.essentials.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-12 border border-integra-gray-200 p-20 bg-white space-y-12">
            <Badge variant="outline" className="border-slate-200 text-slate-700 bg-slate-50">Optional</Badge>
            <ul className="list-disc pl-20 space-y-6 fs-14 text-integra-gray-700">
              {profile.optionals.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-16">
        <h3 className="fs-20 font-bold text-integra-gray-900">Properties</h3>
        <div className="rounded-12 border border-integra-gray-100 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-integra-gray-50 border-b border-integra-gray-100">
              <tr className="fs-12 font-bold uppercase tracking-1 text-integra-gray-500">
                <th className="px-20 py-14">Property</th>
                <th className="px-20 py-14">Values</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-integra-gray-100">
              {profile.properties.map((item) => (
                <tr key={item.name} className="bg-white">
                  <td className="px-20 py-14 fs-14 font-semibold text-integra-gray-900">{item.name}</td>
                  <td className="px-20 py-14 fs-14 text-integra-gray-700">{item.values}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-16">
        <h3 className="fs-20 font-bold text-integra-gray-900">States</h3>
        <div className="rounded-12 border border-integra-gray-100 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-integra-gray-50 border-b border-integra-gray-100">
              <tr className="fs-12 font-bold uppercase tracking-1 text-integra-gray-500">
                <th className="px-20 py-14">State</th>
                <th className="px-20 py-14">Description</th>
                <th className="px-20 py-14">Intent</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-integra-gray-100">
              {profile.states.map((state) => (
                <tr key={state.name} className="bg-white">
                  <td className="px-20 py-14 fs-14 font-semibold text-integra-gray-900">{state.name}</td>
                  <td className="px-20 py-14 fs-14 text-integra-gray-700">{state.description}</td>
                  <td className="px-20 py-14 fs-14 text-integra-gray-500">{state.intent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-16">
        <h3 className="fs-20 font-bold text-integra-gray-900">Spec</h3>
        <div className="grid gap-12 md:grid-cols-2">
          {profile.specs.map((spec) => (
            <div key={spec.key} className="rounded-12 border border-integra-gray-200 bg-white p-16 space-y-6">
              <p className="fs-12 uppercase tracking-1 text-integra-gray-500">{spec.key}</p>
              <p className="fs-18 font-bold text-integra-gray-900">{spec.value}</p>
              <p className="fs-13 text-integra-gray-600">{spec.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-16">
        <h3 className="fs-20 font-bold text-integra-gray-900">Use Cases</h3>
        <div className="space-y-12">
          {profile.useCases.map((item) => (
            <div key={item.scenario} className="rounded-12 border border-integra-gray-200 bg-integra-gray-50 p-16">
              <p className="fs-14 font-semibold text-integra-gray-900">{item.scenario}</p>
              <p className="fs-14 text-integra-gray-700">{item.goal}</p>
              <p className="fs-13 text-integra-gray-500 font-mono mt-4">{item.recipe}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-16">
        <h3 className="fs-20 font-bold text-integra-gray-900">Usage (Do / Don&apos;t)</h3>
        <div className="grid gap-12 md:grid-cols-2">
          {profile.usageGuides.map((item, idx) => (
            <div
              key={`${item.type}-${idx}`}
              className="rounded-12 border border-integra-gray-200 bg-white p-16 space-y-6"
            >
              <p className={`fs-12 uppercase tracking-1 ${item.type === "Do" ? "text-emerald-700" : "text-rose-700"}`}>{item.type}</p>
              <p className="fs-14 text-integra-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-12 rounded-16 border border-integra-gray-100 bg-white p-24">
        <h3 className="fs-20 font-bold text-integra-gray-900">Accessibility Checks</h3>
        <ul className="list-disc pl-20 space-y-6 fs-14 text-integra-gray-700">
          {profile.accessibility.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </section>
  )
}

function FoundationColorExtension() {
  const primitiveGroups = [
    { group: "Primary Color", note: "브랜드 대표 색상. 주요 강조와 핵심 컴포넌트에 사용" },
    { group: "Gray Color", note: "기본 계층 표현. 텍스트/배경/보더의 명도 시스템" },
    { group: "Sub Color", note: "알림/상태/콘텐츠 테마 확장에 사용" },
    { group: "Transparency", note: "기준 색상에 투명도를 적용해 오버레이/강조 계층 생성" },
  ]

  const semanticGroups = [
    { role: "Text", usage: "txt-primary, txt-secondary, txt-caption, txt-disabled 등 텍스트 위계" },
    { role: "Background", usage: "bg-primary, bg-secondary, bg-tertiary 등 표면 계층" },
    { role: "Border", usage: "border-primary, border-secondary 등 경계 위계" },
    { role: "Status", usage: "status-positive, status-negative 등 피드백 상태" },
    { role: "Diff", usage: "diff-add/diff-remove 등 변경 비교 표현" },
  ]

  const accessibilityTargets = [
    { context: "본문 텍스트", target: "4.5:1 이상" },
    { context: "대형 텍스트(18pt+)", target: "3:1 이상" },
    { context: "아이콘/컨트롤 경계", target: "3:1 이상" },
    { context: "Focus 인디케이터", target: "3:1 이상" },
  ]

  return (
    <section className="space-y-40 pt-64">
      <div className="space-y-8">
        <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">Color Page Flow</h2>
        <p className="fs-16 text-integra-gray-500">Palette에서 끝내지 않고 Role, Contrast, Application까지 한 흐름으로 연결합니다.</p>
      </div>

      <section className="space-y-16">
        <h3 className="fs-20 font-bold text-integra-gray-900">Primitive Tokens</h3>
        <div className="rounded-12 border border-integra-gray-100 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-integra-gray-50 border-b border-integra-gray-100">
              <tr className="fs-12 uppercase tracking-1 text-integra-gray-500">
                <th className="px-20 py-14">Group</th>
                <th className="px-20 py-14">Definition</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-integra-gray-100 bg-white">
              {primitiveGroups.map((item) => (
                <tr key={item.group}>
                  <td className="px-20 py-14 fs-14 font-semibold text-integra-gray-900">{item.group}</td>
                  <td className="px-20 py-14 fs-14 text-integra-gray-700">{item.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-16">
        <h3 className="fs-20 font-bold text-integra-gray-900">Semantic Colors</h3>
        <div className="rounded-12 border border-integra-gray-100 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-integra-gray-50 border-b border-integra-gray-100">
              <tr className="fs-12 uppercase tracking-1 text-integra-gray-500">
                <th className="px-20 py-14">Category</th>
                <th className="px-20 py-14">Token Scope</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-integra-gray-100 bg-white">
              {semanticGroups.map((item) => (
                <tr key={item.role}>
                  <td className="px-20 py-14 fs-14 font-semibold text-integra-gray-900">{item.role}</td>
                  <td className="px-20 py-14 fs-14 text-integra-gray-700">{item.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-16">
        <h3 className="fs-20 font-bold text-integra-gray-900">Contrast Targets</h3>
        <div className="grid gap-12 md:grid-cols-2">
          {accessibilityTargets.map((item) => (
            <div key={item.context} className="rounded-12 border border-integra-gray-200 bg-white p-16">
              <p className="fs-14 text-integra-gray-600">{item.context}</p>
              <p className="fs-18 font-bold text-integra-gray-900 mt-4">{item.target}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-12 border border-integra-gray-200 bg-integra-gray-50 p-20 space-y-10">
        <h3 className="fs-20 font-bold text-integra-gray-900">Application Checklist</h3>
        <ul className="list-disc pl-20 space-y-6 fs-14 text-integra-gray-700">
          <li>컬러 선택은 반드시 역할(Semantic Name)로 시작합니다.</li>
          <li>상호작용 상태(Hover/Pressed/Disabled) 대비 단계를 함께 설계합니다.</li>
          <li>실제 화면 스냅샷에서 색상 분포를 검증한 뒤 토큰을 확정합니다.</li>
        </ul>
      </section>
    </section>
  )
}

function FoundationTypographyExtension() {
  const roles = [
    { role: "Display / Hero", token: "fs-48~64 / leading-56~72", rule: "브랜드 메시지, 짧은 문장" },
    { role: "Heading", token: "fs-24~40 / leading-32~48", rule: "섹션 구분, 정보 계층" },
    { role: "Body", token: "fs-14~18 / leading-20~28", rule: "본문, 폼, 설명 텍스트" },
    { role: "Label / Caption", token: "fs-12~14 / leading-16~20", rule: "메타데이터, 보조 정보" },
  ]

  return (
    <section className="space-y-40 pt-64">
      <div className="space-y-8">
        <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">Typography Page Flow</h2>
        <p className="fs-16 text-integra-gray-500">Scale 정의 후 역할 매핑, 반응형 정책, 콘텐츠 규칙까지 한 번에 제공합니다.</p>
      </div>

      <section className="space-y-16">
        <h3 className="fs-20 font-bold text-integra-gray-900">Primitive Tokens</h3>
        <div className="rounded-12 border border-integra-gray-100 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-integra-gray-50 border-b border-integra-gray-100">
              <tr className="fs-12 uppercase tracking-1 text-integra-gray-500">
                <th className="px-20 py-14">Role</th>
                <th className="px-20 py-14">Token Range</th>
                <th className="px-20 py-14">Rule</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-integra-gray-100 bg-white">
              {roles.map((item) => (
                <tr key={item.role}>
                  <td className="px-20 py-14 fs-14 font-semibold text-integra-gray-900">{item.role}</td>
                  <td className="px-20 py-14 fs-14 font-mono text-integra-gray-700">{item.token}</td>
                  <td className="px-20 py-14 fs-14 text-integra-gray-600">{item.rule}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-16">
        <h3 className="fs-20 font-bold text-integra-gray-900">Semantic Typography</h3>
        <div className="rounded-12 border border-integra-gray-200 bg-white p-16 space-y-8">
          <p className="fs-14 text-integra-gray-700">Display, Heading, Body, Label 역할 단위로 토큰을 묶어 컴포넌트에서 재사용합니다.</p>
          <p className="fs-14 text-integra-gray-700">역할 토큰은 반응형에서 단계적으로 축소되며 line-height 비율은 유지합니다.</p>
        </div>
      </section>

      <section className="space-y-16">
        <h3 className="fs-20 font-bold text-integra-gray-900">Responsive Strategy</h3>
        <div className="grid gap-12 md:grid-cols-3">
          <div className="rounded-12 border border-integra-gray-200 bg-white p-16 space-y-6">
            <p className="fs-12 uppercase tracking-1 text-integra-gray-500">Desktop</p>
            <p className="fs-14 text-integra-gray-700">콘텐츠 밀도 우선. Heading을 유지하고 여백으로 호흡 확보.</p>
          </div>
          <div className="rounded-12 border border-integra-gray-200 bg-white p-16 space-y-6">
            <p className="fs-12 uppercase tracking-1 text-integra-gray-500">Tablet</p>
            <p className="fs-14 text-integra-gray-700">본문은 유지, Display와 Heading 크기만 1단계 축소.</p>
          </div>
          <div className="rounded-12 border border-integra-gray-200 bg-white p-16 space-y-6">
            <p className="fs-12 uppercase tracking-1 text-integra-gray-500">Mobile</p>
            <p className="fs-14 text-integra-gray-700">시맨틱 우선. 줄바꿈을 고려해 line-height를 유지합니다.</p>
          </div>
        </div>
      </section>
    </section>
  )
}

export function DocsContentExtensions() {
  const pathname = usePathname()

  if (pathname === "/docs/foundations/colors") {
    return <FoundationColorExtension />
  }

  if (pathname === "/docs/foundations/typography") {
    return <FoundationTypographyExtension />
  }

  if (pathname.startsWith("/docs/components/")) {
    const slug = pathname.replace("/docs/components/", "")
    if (slug && slug !== "page" && slug !== "button") {
      return <ComponentDocumentationExtension slug={slug} />
    }
  }

  return null
}
