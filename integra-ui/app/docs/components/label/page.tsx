import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
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
 * [Integra UI - Label Document SAI Version]
 * 입력 요소에 의미와 접근성을 부여하는 아토믹 텍스트 컴포넌트 문서입니다.
 * 고도화된 CodeBlock을 통해 정교한 조립법을 안내합니다.
 */
export default function LabelDocsPage() {
  // 1. 라벨 전용 디자인 토큰 데이터
  const designTokens = [
    { property: "Font Size (글자 크기)", class: "fs-14", value: "14px" },
    { property: "Font Weight (굵기)", class: "font-medium", value: "500" },
    { property: "Line Height (행간)", class: "leading-20", value: "20px" },
    { property: "Text Color (기본)", class: "text-integra-gray-900", value: "Gray 900" },
    { property: "Disabled Color (비활성)", class: "peer-disabled:text-integra-gray-400", value: "Gray 400" },
  ];

  // 2. 코드 스니펫 정의
  const importCode = `import { Label } from "@/components/ui/label"`;
  
  const usageCode = `<div className="grid gap-8">
  <Label htmlFor="email">Email Address</Label>
  <Input id="email" type="email" placeholder="hello@integra.ui" />
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
              <BreadcrumbPage>Label</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">
          Label
        </h1>
        
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          입력 요소의 용도를 설명하는 원자 단위의 텍스트 컴포넌트입니다.<br />
          폼 요소와 유기적으로 연결되어 사용자 경험과 웹 접근성을 동시에 향상시킵니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 미리보기 섹션: max-w-960 규격 적용 */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Preview</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500 font-medium">Static Preview</Badge>
        </div>
        <div className="flex min-h-160 items-center justify-center rounded-12 border border-integra-gray-200 bg-integra-gray-50 border-dashed p-40 max-w-960 mx-auto w-full">
          <div className="flex items-center gap-8">
            <Checkbox id="terms-docs" />
            <Label htmlFor="terms-docs" className="fs-14">이용약관에 동의합니다</Label>
          </div>
        </div>
      </section>

      {/* 3. 디자인 토큰 섹션 */}
      <section className="space-y-24">
        <div className="space-y-8">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">디자인 토큰</h2>
            <p className="fs-16 text-integra-gray-500">라벨의 가독성과 위계를 결정하는 아토믹 클래스와 실제 수치 명세입니다.</p>
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
                            <td className="px-24 py-16 font-mono text-integra-blue-600 font-bold">.{token.class}</td>
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
            <p>라벨은 본문 텍스트보다 높은 시각적 가독성 밀도를 가집니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Typography Hierarchy:</strong> 14px(fs-14) Medium 굵기를 기본으로 사용하여 입력 필드와의 시각적 위계를 분리합니다.</li>
                <li><strong>Spacing Rule:</strong> 결합되는 요소와 8px(gap-8)의 간격을 유지하여 시스템 전체의 수직 리듬을 정렬합니다.</li>
                <li><strong>State Sync:</strong> <code>peer-disabled</code> 토큰을 통해 연결된 원자의 비활성 상태를 감지하고 <code>gray-400</code> 컬러로 즉시 전환됩니다.</li>
            </ul>
        </div>
      </section>

      {/* 5. 사용법: CodeBlock 적용 */}
      <section className="space-y-24">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <div className="space-y-16">
          <p className="fs-14 text-integra-gray-500 font-medium tracking-1 uppercase">1. Import Component</p>
          <CodeBlock code={importCode} />
          
          <p className="fs-14 text-integra-gray-500 font-medium tracking-1 uppercase mt-32">2. Basic Usage</p>
          <CodeBlock code={usageCode} />
        </div>
      </section>

    </div>
  );
}