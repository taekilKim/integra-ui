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

    </div>
  );
}
