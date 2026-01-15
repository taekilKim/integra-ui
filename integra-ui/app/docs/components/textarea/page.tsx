import { TextareaDemo } from "@/components/demo/textarea-demo";
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
 * [Integra UI - Textarea Document SAI Version]
 * 멀티라인 텍스트 입력을 위한 표준 폼 컴포넌트 문서입니다.
 * 고도화된 CodeBlock을 통해 정교한 조립법을 안내합니다.
 */
export default function TextareaDocsPage() {
  // 1. 텍스트에어리어 전용 디자인 토큰 데이터
  const designTokens = [
    { property: "Min Height (최소 높이)", class: ".min-h-80", value: "80px" },
    { property: "Font Size (글자 크기)", class: ".fs-14", value: "14px" },
    { property: "Line Height (행간)", class: ".leading-24", value: "24px" },
    { property: "Border Radius (곡률)", class: ".rounded-8", value: "8px" },
    { property: "Padding V (상하 여백)", class: ".py-8", value: "8px" },
    { property: "Padding H (좌우 여백)", class: ".px-12", value: "12px" },
  ];

  // 2. 코드 스니펫 정의
  const importCode = `import { Textarea } from "@/components/ui/textarea"`;

  const usageCode = `<div className="grid w-full gap-8">
  <Label htmlFor="message">Your Message</Label>
  <Textarea 
    id="message" 
    placeholder="Type your message here." 
    className="min-h-120"
  />
  <p className="fs-12 text-integra-gray-500">
    문의 내용을 상세히 적어주세요.
  </p>
</div>`;

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
                <li><strong>Spatial Minimum:</strong> 80px(.min-h-80)의 최소 높이를 원자로 정의하여 사용자에게 명확한 입력 가시성을 보장합니다.</li>
                <li><strong>Typography Focus:</strong> 긴 문장이 답답해 보이지 않도록 1.7배(24px) 행간을 엄격히 적용하여 가독성을 높였습니다.</li>
                <li><strong>Radius Consistency:</strong> 인풋 시스템 표준인 8px(.rounded-8) 곡률을 공유하여 폼 레이아웃의 시각적 통일감을 부여합니다.</li>
            </ul>
        </div>
      </section>

      {/* 5. 사용법: CodeBlock 적용 */}
      <section className="space-y-24">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <div className="space-y-16">
          <p className="fs-14 text-integra-gray-500 font-medium tracking-1 uppercase">1. Import Component</p>
          <CodeBlock code={importCode} />
          
          <p className="fs-14 text-integra-gray-500 font-medium tracking-1 uppercase mt-32">2. Usage Example</p>
          <CodeBlock code={usageCode} />
        </div>
      </section>

    </div>
  );
}