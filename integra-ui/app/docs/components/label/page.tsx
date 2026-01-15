import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
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
 * [Integra UI - Label Document SAI Version]
 * 입력 요소에 의미와 접근성을 부여하는 아토믹 텍스트 컴포넌트 문서입니다.
 */
export default function LabelDocsPage() {
  // 1. 라벨 전용 디자인 토큰 데이터
  const designTokens = [
    { property: "Font Size (글자 크기)", class: "fs-{px}", value: "fs-14" },
    { property: "Font Weight (굵기)", class: "font-{weight}", value: "font-medium (500)" },
    { property: "Line Height (행간)", class: "leading-{px}", value: "leading-20" },
    { property: "Text Color (기본)", class: "text-{token}", value: "integra-gray-900" },
    { property: "Disabled Color (비활성)", class: "peer-disabled:text-{token}", value: "integra-gray-400" },
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
            <Label htmlFor="terms-docs">이용약관에 동의합니다</Label>
          </div>
        </div>
      </section>

      {/* 3. 디자인 토큰 섹션: 수치와 클래스의 1:1 매칭 명세 */}
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
            <p>라벨은 본문 텍스트보다 높은 시각적 가독성 밀도를 가집니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Typography:</strong> 14px(fs-14) Medium 굵기를 기본으로 사용하여 인풋 필드와의 시각적 위계를 분리합니다.</li>
                <li><strong>Spacing:</strong> 체크박스나 인풋 등 결합되는 요소와 8px(gap-8)의 간격을 유지하여 리듬감을 형성합니다.</li>
                <li><strong>State Logic:</strong> <code>peer-disabled</code> 토큰을 통해 연결된 요소의 비활성 상태를 감지하고 <code>gray-400</code> 컬러로 즉시 전환됩니다.</li>
            </ul>
        </div>
      </section>

      {/* 5. 사용법 */}
      <section className="space-y-16">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <div className="rounded-12 bg-integra-gray-900 p-24 overflow-x-auto font-mono fs-14 leading-24 shadow-2xl text-white">
            <p className="text-integra-gray-500 mb-8">// Import the component</p>
            <p className="text-integra-blue-400">import &#123; Label &#125; from "@/components/ui/label"</p>
            <br />
            <p className="text-integra-gray-500 mb-8">// Basic usage</p>
            <p className="text-white">&lt;Label htmlFor="email"&gt;Email Address&lt;/Label&gt;</p>
        </div>
      </section>

    </div>
  );
}