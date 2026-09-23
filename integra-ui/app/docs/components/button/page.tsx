import { ButtonDemo } from "@/components/demo/button-demo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { CodeBlock } from "@/components/layout/code-block";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

/**
 * [Integra UI - Button Document SAI Version]
 * 트리거 및 폼 전송을 위한 핵심 컴포넌트 문서입니다.
 * 복합적인 Shape, Size, Appearance, Variant 조합에 따른 상세 토큰 명세를 제공합니다.
 */
export default function ButtonDocsPage() {
  
  // 1. 레이아웃 및 형태 관련 토큰 (Geometry)
  const layoutTokens = [
    { property: "Height (높이)", class: "h-{px}", default: "h-56", medium: "h-48", small: "h-32" },
    { property: "Padding X (Rect Shape)", class: "px-{px}", default: "px-20", medium: "px-12", small: "px-8" },
    { property: "Width (Icon Shape)", class: "w-{px}", default: "w-56", medium: "w-48", small: "w-32" },
    { property: "Radius (Rect/Square)", class: "rounded-{px}", default: "rounded-16", medium: "rounded-12", small: "rounded-8" },
    { property: "Radius (Circle)", class: "rounded-full", default: "9999px", medium: "9999px", small: "9999px" },
  ];

  // 2. 타이포그래피 및 콘텐츠 관련 토큰 (Content)
  const contentTokens = [
    { property: "Font Size", class: "fs-{px}", default: "fs-18", medium: "fs-16", small: "fs-12" },
    { property: "Line Height", class: "leading-{px}", default: "leading-24", medium: "leading-20", small: "leading-16" },
    { property: "Icon Size (SVG)", class: "w-{px} h-{px}", default: "24px", medium: "20px", small: "16px" },
    { property: "Font Weight", class: "font-{weight}", default: "Semibold", medium: "Semibold", small: "Semibold" },
  ];

  const buttonGroupLayouts = [
    {
      title: "1개짜리 (전체 너비)",
      layout: "single-fill" as const,
      code: '<ButtonGroup layout="single-fill"><Button>확인</Button></ButtonGroup>',
      buttons: ["확인"],
    },
    {
      title: "2개짜리 (너비 fit-content)",
      layout: "double-fit" as const,
      code: '<ButtonGroup layout="double-fit"><Button appearance="text" variant="secondary">취소</Button><Button>저장</Button></ButtonGroup>',
      buttons: ["취소", "저장"],
    },
    {
      title: "2개짜리 (전체 너비, 5:5)",
      layout: "double-fill-5-5" as const,
      code: '<ButtonGroup layout="double-fill-5-5"><Button appearance="text" variant="secondary">이전</Button><Button>다음</Button></ButtonGroup>',
      buttons: ["이전", "다음"],
    },
    {
      title: "2개짜리 (전체 너비, 3:7)",
      layout: "double-fill-3-7" as const,
      code: '<ButtonGroup layout="double-fill-3-7"><Button appearance="text" variant="secondary">취소</Button><Button>완료</Button></ButtonGroup>',
      buttons: ["취소", "완료"],
    },
  ];

  const usageCode = `import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

// Text Button (Solid)
<Button appearance="default" variant="default">Confirm</Button>

// Icon Button (Squircle / Secondary)
<Button shape="square" appearance="default" variant="secondary">
  <Icon />
</Button>

// Dialog/Card Action Group (3:7)
<ButtonGroup layout="double-fill-3-7">
  <Button appearance="text" variant="secondary">취소</Button>
  <Button>완료</Button>
</ButtonGroup>`;

  const anatomy = [
    { part: "Container", description: "버튼의 배경, 모서리, 경계선을 정의하는 외곽 영역" },
    { part: "Label", description: "행동을 설명하는 텍스트 레이어" },
    { part: "Icon", description: "행동을 보조하거나 버튼 유형을 빠르게 인지시키는 보조 요소" },
  ];

  const variants = [
    { name: "Primary", usage: "가장 중요한 CTA. 화면당 1개 사용 권장" },
    { name: "Secondary", usage: "주 액션을 보조하는 동등 레벨의 액션" },
    { name: "Tertiary / Text", usage: "부가 액션, 링크성 행동, 저강도 인터랙션" },
    { name: "Icon", usage: "공간 제약이 있고 의미가 명확한 경우" },
  ];

  const states = [
    { state: "Default", description: "기본 대비와 색상 위계가 유지되는 상태", intent: "일반 상호작용" },
    { state: "Hover / Focus", description: "행동 가능성을 강화하는 반응 상태", intent: "탐색 보조" },
    { state: "Pressed", description: "직접 입력이 발생했음을 즉시 전달", intent: "행동 확인" },
    { state: "Disabled", description: "현재 조건에서 실행이 불가능한 상태", intent: "오입력 방지" },
  ];

  const sizes = [
    { name: "L", spec: "56px", usage: "강한 CTA, 랜딩/주요 전환 플로우" },
    { name: "M", spec: "48px", usage: "일반 폼, 카드, 설정 화면" },
    { name: "S", spec: "32px", usage: "밀도 높은 테이블, 툴바, 보조 액션" },
  ];

  const applicationRules = [
    "Primary 버튼은 화면당 하나를 기본값으로 둡니다.",
    "Cancel, Back, Dismiss는 Secondary 또는 Text 계열에 배치합니다.",
    "파괴적 액션은 색상뿐 아니라 문맥과 위치로도 위험성을 전달합니다.",
  ];

  const hierarchyRules = [
    "Primary > Secondary > Tertiary 순서로 시각적 강조를 설계합니다.",
    "동일 영역에서 버튼 위계는 최대 3단계 이내로 제한합니다.",
    "다이얼로그/카드 푸터에서는 부모 컨텍스트의 중요도보다 액션 우선순위를 먼저 반영합니다.",
  ];

  const usageGuide = [
    { type: "Do", text: "행동 중심 동사를 사용해 버튼의 결과를 즉시 이해할 수 있게 작성합니다." },
    { type: "Do", text: "레이아웃별로 버튼 폭 정책(single-fill, double-fit 등)을 명확히 고정합니다." },
    { type: "Don't", text: "Text/Tertiary 버튼을 메인 전환 CTA로 사용하지 않습니다." },
    { type: "Don't", text: "아이콘만으로 중요한 행동을 표현하고 라벨을 생략하지 않습니다." },
  ];

  return (
    <div className="space-y-64 pb-120">
      
      {/* 1. Header */}
      <div className="space-y-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Button</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">
          Button
        </h1>
        
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          사용자의 동작을 트리거하거나 폼을 전송할 때 사용하는 핵심 컴포넌트입니다.<br />
          Shape, Size, Appearance의 조합을 통해 시스템 내 모든 위계와 형태를 커버합니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. Playground */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500 font-medium">Interactive</Badge>
        </div>
        <ButtonDemo />
      </section>

      {/* 3. Detailed Design Tokens */}
      <section className="space-y-48">
        <div className="space-y-8">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">디자인 토큰 상세</h2>
            <p className="fs-16 text-integra-gray-500">버튼의 크기(Size)와 형태(Shape)에 따라 변경되는 정밀한 아토믹 수치입니다.</p>
        </div>

        {/* 3-1. Geometry Spec */}
        <div className="space-y-16">
            <h3 className="fs-18 font-bold text-integra-gray-700">1. Geometry & Layout</h3>
            <div className="rounded-12 border border-integra-gray-100 overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-integra-gray-50 border-b border-integra-gray-200">
                        <tr className="fs-12 font-bold text-integra-gray-400">
                            <th className="px-24 py-16">Property</th>
                            <th className="px-24 py-16">Class Syntax</th>
                            <th className="px-24 py-16">Default (56)</th>
                            <th className="px-24 py-16">Medium (48)</th>
                            <th className="px-24 py-16">Small (32)</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y border-integra-gray-100 fs-14">
                        {layoutTokens.map((token) => (
                            <tr key={token.property} className="hover:bg-integra-gray-50/50 transition-colors">
                                <td className="px-24 py-16 font-medium text-integra-gray-700">{token.property}</td>
                                <td className="px-24 py-16 font-mono text-integra-blue-600 font-bold">{token.class}</td>
                                <td className="px-24 py-16 font-mono text-integra-gray-900">{token.default}</td>
                                <td className="px-24 py-16 font-mono text-integra-gray-500">{token.medium}</td>
                                <td className="px-24 py-16 font-mono text-integra-gray-500">{token.small}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        {/* 3-2. Content Spec */}
        <div className="space-y-16">
            <h3 className="fs-18 font-bold text-integra-gray-700">2. Typography & Icon</h3>
            <div className="rounded-12 border border-integra-gray-100 overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-integra-gray-50 border-b border-integra-gray-200">
                        <tr className="fs-12 font-bold text-integra-gray-400">
                            <th className="px-24 py-16">Property</th>
                            <th className="px-24 py-16">Class Syntax</th>
                            <th className="px-24 py-16">Default (56)</th>
                            <th className="px-24 py-16">Medium (48)</th>
                            <th className="px-24 py-16">Small (32)</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y border-integra-gray-100 fs-14">
                        {contentTokens.map((token) => (
                            <tr key={token.property} className="hover:bg-integra-gray-50/50 transition-colors">
                                <td className="px-24 py-16 font-medium text-integra-gray-700">{token.property}</td>
                                <td className="px-24 py-16 font-mono text-integra-blue-600 font-bold">{token.class}</td>
                                <td className="px-24 py-16 font-mono text-integra-gray-900">{token.default}</td>
                                <td className="px-24 py-16 font-mono text-integra-gray-500">{token.medium}</td>
                                <td className="px-24 py-16 font-mono text-integra-gray-500">{token.small}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
      </section>

      {/* 4. Atomic Design Note */}
      <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
        <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
        <div className="space-y-12 fs-15 text-integra-gray-600 leading-24 tracking--1">
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Shape System:</strong> <code>shape=&apos;square&apos;</code>는 버튼 높이와 동일한 너비를 가져 정사각(Squircle) 비율을 유지하며, <code>shape=&apos;circle&apos;</code>은 완전한 원형을 만듭니다.</li>
                <li><strong>Padding Logic:</strong> 텍스트 버튼은 좌우 패딩을 사용하여 라벨 길이에 유동적으로 반응하지만, 아이콘 버튼은 패딩을 제거하고 고정 너비(w)를 사용하여 중앙 정렬을 보장합니다.</li>
                <li><strong>Semantic Colors:</strong> 모든 색상은 <code>primary-hover</code>, <code>destructive-subtle</code> 등 역할 기반 토큰으로 연결되어 테마 변경에 자동 대응합니다.</li>
            </ul>
        </div>
      </section>

      {/* 5. Button Group Extension */}
      <section className="space-y-24">
        <div className="space-y-8">
          <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">버튼 그룹 확장</h2>
          <p className="fs-16 text-integra-gray-500">
            카드/다이얼로그 푸터에서 버튼 개수와 폭 정책을 하드코딩하지 않고 레이아웃 프리셋으로 재사용합니다.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {buttonGroupLayouts.map((item) => (
            <div key={item.layout} className="rounded-12 border border-integra-gray-100 bg-white p-16 space-y-12">
              <p className="fs-14 font-bold text-integra-gray-700">{item.title}</p>
              <div className="rounded-8 border border-dashed border-integra-gray-200 bg-integra-gray-50 p-12">
                <ButtonGroup layout={item.layout}>
                  <Button appearance={item.layout === "single-fill" ? "default" : "text"} variant={item.layout === "single-fill" ? "default" : "secondary"} size="small">
                    {item.buttons[0]}
                  </Button>
                  {item.buttons[1] && (
                    <Button size="small">{item.buttons[1]}</Button>
                  )}
                </ButtonGroup>
              </div>
              <p className="font-mono fs-12 text-integra-gray-500 break-all">{item.code}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Usage */}
      <section className="space-y-16">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <CodeBlock code={usageCode} />
      </section>

      {/* 7. Montage Design Guide */}
      <section className="space-y-48">
        <div className="space-y-8">
          <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">Montage Design Guide</h2>
          <p className="fs-16 text-integra-gray-500">
            원티드 Montage의 Button 상세 문서처럼 Anatomy, Variants, States, Size, Application 흐름으로 버튼 가이드를 정리했습니다.
          </p>
        </div>

        <section className="space-y-16">
          <h3 className="fs-20 font-bold text-integra-gray-900">Anatomy</h3>
          <div className="grid gap-16 md:grid-cols-3">
            {anatomy.map((item) => (
              <div key={item.part} className="rounded-12 border border-integra-gray-200 p-20 bg-white space-y-8">
                <p className="fs-12 uppercase tracking-1 text-integra-gray-400">{item.part}</p>
                <p className="fs-14 leading-24 text-integra-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-16">
          <h3 className="fs-20 font-bold text-integra-gray-900">Variants</h3>
          <div className="rounded-12 border border-integra-gray-100 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-integra-gray-50 border-b border-integra-gray-100">
                <tr className="fs-12 font-bold uppercase tracking-1 text-integra-gray-500">
                  <th className="px-20 py-14">Variant</th>
                  <th className="px-20 py-14">Usage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-integra-gray-100 bg-white">
                {variants.map((item) => (
                  <tr key={item.name}>
                    <td className="px-20 py-14 fs-14 font-semibold text-integra-gray-900">{item.name}</td>
                    <td className="px-20 py-14 fs-14 text-integra-gray-700">{item.usage}</td>
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
              <tbody className="divide-y divide-integra-gray-100 bg-white">
                {states.map((item) => (
                  <tr key={item.state}>
                    <td className="px-20 py-14 fs-14 font-semibold text-integra-gray-900">{item.state}</td>
                    <td className="px-20 py-14 fs-14 text-integra-gray-700">{item.description}</td>
                    <td className="px-20 py-14 fs-14 text-integra-gray-500">{item.intent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-16">
          <h3 className="fs-20 font-bold text-integra-gray-900">Size</h3>
          <div className="grid gap-12 md:grid-cols-3">
            {sizes.map((item) => (
              <div key={item.name} className="rounded-12 border border-integra-gray-200 bg-white p-16 space-y-6">
                <p className="fs-12 uppercase tracking-1 text-integra-gray-500">{item.name}</p>
                <p className="fs-18 font-bold text-integra-gray-900">{item.spec}</p>
                <p className="fs-13 text-integra-gray-600">{item.usage}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-16">
          <h3 className="fs-20 font-bold text-integra-gray-900">Application</h3>
          <div className="grid gap-16 md:grid-cols-2">
            <div className="rounded-12 border border-integra-gray-200 bg-white p-20 space-y-10">
              <p className="fs-12 uppercase tracking-1 text-integra-gray-400">Hierarchy</p>
              <ul className="list-disc pl-20 space-y-6 fs-14 text-integra-gray-700">
                {hierarchyRules.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-12 border border-integra-gray-200 bg-white p-20 space-y-10">
              <p className="fs-12 uppercase tracking-1 text-integra-gray-400">Usage</p>
              <ul className="list-disc pl-20 space-y-6 fs-14 text-integra-gray-700">
                {applicationRules.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-16">
          <h3 className="fs-20 font-bold text-integra-gray-900">Button Layout</h3>
          <div className="grid gap-12 md:grid-cols-2">
            {buttonGroupLayouts.map((item) => (
              <div key={item.layout} className="rounded-12 border border-integra-gray-200 bg-white p-16 space-y-8">
                <p className="fs-14 font-semibold text-integra-gray-900">{item.title}</p>
                <p className="fs-13 leading-22 text-integra-gray-600">
                  {item.layout === "double-fit"
                    ? "카드/패널 푸터에서 보조 액션과 확인 액션을 자연 폭으로 배치할 때 사용합니다."
                    : "컨텍스트의 우선순위와 가용 폭에 따라 균등 또는 비균등하게 액션을 배분합니다."}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-16">
          <h3 className="fs-20 font-bold text-integra-gray-900">How To Use</h3>
          <div className="grid gap-12 md:grid-cols-2">
            {usageGuide.map((item, index) => (
              <div key={`${item.type}-${index}`} className="rounded-12 border border-integra-gray-200 bg-white p-16 space-y-6">
                <p className={`fs-12 uppercase tracking-1 ${item.type === "Do" ? "text-emerald-700" : "text-rose-700"}`}>{item.type}</p>
                <p className="fs-14 text-integra-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </section>

    </div>
  );
}
