import { TextareaDemo } from "@/components/demo/textarea-demo";
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
 * [Integra UI - Textarea Document SAI Version]
 * 멀티라인 텍스트 입력을 위한 표준 폼 컴포넌트 문서입니다.
 */
export default function TextareaDocsPage() {
  // 1. 텍스트에어리어 전용 디자인 토큰 데이터
  const designTokens = [
    { property: "Min Height (최소 높이)", class: "min-h-{px}", value: "min-h-80" },
    { property: "Font Size (글자 크기)", class: "fs-{px}", value: "fs-14" },
    { property: "Line Height (행간)", class: "leading-{px}", value: "leading-24" },
    { property: "Border Radius (곡률)", class: "rounded-{px}", value: "rounded-8" },
    { property: "Padding V (상하 여백)", class: "py-{px}", value: "py-8" },
    { property: "Padding H (좌우 여백)", class: "px-{px}", value: "px-12" },
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
              <BreadcrumbPage>Textarea</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">
          Textarea
        </h1>
        
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          사용자가 여러 줄의 텍스트를 입력할 수 있는 멀티라인 폼 요소입니다.<br />
          Input과 동일한 원자적 디자인 언어를 공유하며, 긴 글의 가독성에 최적화되어 있습니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 인터랙티브 플레이그라운드 */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500 font-medium">Interactive</Badge>
        </div>
        <TextareaDemo />
      </section>

      {/* 3. 디자인 토큰 섹션: 수치와 클래스의 1:1 매칭 명세 */}
      <section className="space-y-24">
        <div className="space-y-8">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">디자인 토큰</h2>
            <p className="fs-16 text-integra-gray-500">긴 글 입력의 구조를 결정하는 아토믹 클래스와 실제 수치 명세입니다.</p>
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
            <p>텍스트 영역은 콘텐츠의 양에 유연하게 반응하며 일관된 정렬 리듬을 유지합니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Spatial Minimum:</strong> 80px(min-h-80)의 최소 높이를 원자로 정의하여 사용자에게 명확한 입력 가시성을 보장합니다.</li>
                <li><strong>Typography Focus:</strong> 긴 문장이 뭉쳐 보이지 않도록 1.7배에 달하는 24px(leading-24) 행간을 엄격히 적용합니다.</li>
                <li><strong>Radius Consistency:</strong> 인풋 시스템 표준인 8px(rounded-8) 곡률을 유지하여 폼 레이아웃의 시각적 통일감을 부여합니다.</li>
            </ul>
        </div>
      </section>

      {/* 5. 사용법 */}
      <section className="space-y-16">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <div className="rounded-12 bg-integra-gray-900 p-24 overflow-x-auto font-mono fs-14 leading-24 shadow-2xl text-white">
            <p className="text-integra-gray-500 mb-8">// Import the component</p>
            <p className="text-integra-blue-400">import &#123; Textarea &#125; from "@/components/ui/textarea"</p>
            <br />
            <p className="text-integra-gray-500 mb-8">// Basic usage</p>
            <p className="text-white">&lt;Textarea placeholder="Type your message here." /&gt;</p>
        </div>
      </section>

    </div>
  );
}