import { PopoverDemo } from "@/components/demo/popover-demo";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

/**
 * [Integra UI - Popover Document SAI Version]
 * 특정 요소에 인접하여 부가 정보나 기능을 제공하는 오버레이 컴포넌트 문서입니다.
 */
export default function PopoverDocsPage() {
  // 1. 팝오버 전용 디자인 토큰 데이터
  const designTokens = [
    { property: "Width (고정 너비)", class: "w-{px}", value: "w-280" },
    { property: "Padding (내부 여백)", class: "p-{px}", value: "p-16" },
    { property: "Border Radius (곡률)", class: "rounded-{px}", value: "rounded-12" },
    { property: "Border Color (테두리)", class: "border-{token}", value: "border-integra-gray-100" },
    { property: "Shadow (그림자)", class: "shadow-{token}", value: "shadow-integra" },
    { property: "Title Font Size (제목)", class: "fs-{px}", value: "fs-14" },
  ];

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
              <BreadcrumbPage>Popover</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">
          Popover
        </h1>
        
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          특정 요소에 대해 상세한 컨트롤이나 부가 정보를 제공할 때 사용하는 강력한 레이어 시스템입니다.<br />
          콘텐츠의 맥락을 유지하면서도 풍부한 상호작용을 지원하는 정교한 아토믹 오버레이입니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 인터랙티브 플레이그라운드 */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500 font-medium">Interactive</Badge>
        </div>
        <PopoverDemo />
      </section>

      {/* 3. 디자인 토큰 섹션: 수치와 클래스의 1:1 매칭 명세 */}
      <section className="space-y-24">
        <div className="space-y-8">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">디자인 토큰</h2>
            <p className="fs-16 text-integra-gray-500">팝오버의 독립적인 공간감을 결정하는 아토믹 클래스와 실제 수치 명세입니다.</p>
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
            <p>팝오버는 기존 레이아웃을 해치지 않으면서 새로운 정보 위계를 형성합니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Width Strategy:</strong> 280px(w-280) 너비를 기본 원자로 사용하여 폼 요소나 텍스트 리스트를 담기에 최적화된 공간을 확보합니다.</li>
                <li><strong>Elevation Layer:</strong> Integra 고유의 <code>shadow-integra</code> 토큰을 통해 물리적인 깊이감을 부여하고 하단 본문과 시각적으로 분리합니다.</li>
                <li><strong>Visual Consistency:</strong> 12px(rounded-12) 곡률을 적용하여 폼(8px)보다는 부드럽고 카드(16px)보다는 컴팩트한 중간 위계를 형성합니다.</li>
            </ul>
        </div>
      </section>

      {/* 5. 사용법 */}
      <section className="space-y-16">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <div className="rounded-12 bg-integra-gray-900 p-24 overflow-x-auto font-mono fs-14 leading-24 shadow-2xl text-white">
            <p className="text-integra-gray-500 mb-8">// Import components</p>
            <p className="text-integra-blue-400">import &#123; Popover, PopoverContent, PopoverTrigger &#125; from "@/components/ui/popover"</p>
            <br />
            <p className="text-integra-gray-500 mb-8">// Basic usage</p>
            <p className="text-white">
              &lt;Popover&gt;<br />
              &nbsp;&nbsp;&lt;PopoverTrigger&gt;Open&lt;/PopoverTrigger&gt;<br />
              &nbsp;&nbsp;&lt;PopoverContent&gt;Content...&lt;/PopoverContent&gt;<br />
              &lt;/Popover&gt;
            </p>
        </div>
      </section>

    </div>
  );
}