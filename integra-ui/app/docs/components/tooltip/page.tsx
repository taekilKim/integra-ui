import { TooltipDemo } from "@/components/demo/tooltip-demo";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/layout/code-block"; // ✨ 추가
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

/**
 * [Integra UI - Tooltip Document SAI Version]
 * 마우스 호버나 포커스 시 부가 정보를 제공하는 초소형 오버레이 문서입니다.
 * 고도화된 CodeBlock을 통해 Provider 기반 조립법을 안내합니다.
 */
export default function TooltipDocsPage() {
  // 1. 툴팁 전용 디자인 토큰 데이터
  const designTokens = [
    { property: "Font Size (글자 크기)", class: ".fs-12", value: "12px" },
    { property: "Line Height (행간)", class: ".leading-16", value: "16px" },
    { property: "Border Radius (곡률)", class: ".rounded-4", value: "4px" },
    { property: "Padding H (좌우 여백)", class: ".px-12", value: "12px" },
    { property: "Padding V (상하 여백)", class: ".py-4", value: "4px" },
    { property: "Background (배경색)", class: ".bg-integra-gray-900", value: "Gray 900" },
  ];

  // 2. 코드 스니펫 정의
  const importCode = `import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip"`;

  const usageCode = `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover</TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`;

  return (
    <div className="space-y-64 pb-120">
      
      {/* 1. 헤더 섹션: 표준 Breadcrumb 적용 및 설명글 줄바꿈 규격 준수 */}
      <div className="space-y-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Tooltip</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">
          Tooltip
        </h1>
        
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          사용자에게 정보에 대한 미세한 힌트나 보조 설명을 제공하는 작은 오버레이 창입니다.<br />
          마우스 호버나 포커스 시 나타나며 정보의 밀도를 해치지 않고 부가 정보를 효율적으로 전달합니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 인터랙티브 플레이그라운드 */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500 font-medium">Interactive</Badge>
        </div>
        <TooltipDemo />
      </section>

      {/* 3. 디자인 토큰 섹션: 수치와 클래스의 1:1 매칭 명세 */}
      <section className="space-y-24">
        <div className="space-y-8">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">디자인 토큰</h2>
            <p className="fs-16 text-integra-gray-500">툴팁의 고밀도 레이아웃을 결정하는 아토믹 클래스와 실제 수치 명세입니다.</p>
        </div>
        <div className="rounded-12 border border-integra-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
                <thead className="bg-integra-gray-50 border-b border-integra-gray-200">
                    <tr className="fs-12 font-bold text-integra-gray-400">
                        <th className="px-24 py-16">속성 (Property)</th>
                        <th className="px-24 py-16">토큰 클래스</th>
                        <th className="px-24 py-16">Value</th>
                    </tr>
                </thead>
                <tbody className="divide-y border-integra-gray-100 fs-14">
                    {designTokens.map((token) => (
                        <tr key={token.property} className="hover:bg-integra-gray-50/50 transition-colors">
                            <td className="px-24 py-16 font-medium text-integra-gray-700">{token.property}</td>
                            <td className="px-24 py-16 font-mono text-integra-blue-600 font-bold">{token.class}</td>
                            <td className="px-24 py-16 font-mono text-integra-gray-900">{token.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </section>

      {/* 4. 아토믹 설계 원리 설명: bg-integra-gray-50 적용 */}
      <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
        <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
        <div className="space-y-12 fs-15 text-integra-gray-600 leading-24 tracking--1">
            <p>툴팁은 최소한의 점유 공간으로 정보의 결핍을 해소하는 원자적 도구입니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Typography Balance:</strong> 보조 정보로서의 성격을 명확히 하기 위해 12px(.fs-12) 크기와 16px(.leading-16) 행간을 표준으로 채택했습니다.</li>
                <li><strong>Geometric Contrast:</strong> 4px(.rounded-4)의 작고 정교한 곡률을 사용하여 메인 UI 요소(8px/16px)와 시각적으로 대비되는 '레이어감'을 형성합니다.</li>
                <li><strong>Color Isolation:</strong> <code>integra-gray-900</code> 배경과 흰색 텍스트를 고정 사용하여, 주변 배경색에 상관없이 독립적인 판독성을 확보합니다.</li>
            </ul>
        </div>
      </section>

      {/* 5. 사용법: CodeBlock 적용 */}
      <section className="space-y-24">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <div className="space-y-16">
          <p className="fs-14 text-integra-gray-500 font-medium tracking-1 uppercase">1. Import Components</p>
          <CodeBlock code={importCode} />
          
          <p className="fs-14 text-integra-gray-500 font-medium tracking-1 uppercase mt-32">2. Usage Example</p>
          <CodeBlock code={usageCode} />
        </div>
      </section>

    </div>
  );
}