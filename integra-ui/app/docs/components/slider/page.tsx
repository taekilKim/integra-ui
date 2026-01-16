import { SliderDemo } from "@/components/demo/slider-demo";
import { Badge } from "@/components/ui/badge";
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
 * [Integra UI - Slider Document SAI Version]
 * 수치 입력을 위한 시각적 컨트롤 컴포넌트 문서입니다.
 */
export default function SliderDocsPage() {
  // 1. 슬라이더 전용 디자인 토큰 데이터
  const designTokens = [
    { property: "Track Height (트랙 높이)", class: "h-4", value: "4px" },
    { property: "Thumb Size (핸들 크기)", class: "h-16 w-16", value: "16px" },
    { property: "Track Background (배경)", class: "bg-{token}", value: "integra-gray-100" },
    { property: "Range Background (범위)", class: "bg-{token}", value: "bg-primary" },
    { property: "Thumb Border (핸들 테두리)", class: "border-{token}", value: "border-primary" },
  ];

  // 2. Usage 코드 스니펫
  const codeSnippet = `import { Slider } from "@/components/ui/slider"

<Slider defaultValue={[50]} max={100} step={1} />`;

  return (
    <div className="space-y-64 pb-120">
      
      {/* 1. 헤더 섹션: 표준 규격 준수 */}
      <div className="space-y-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Slider</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">Slider</h1>
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          정의된 범위 내에서 사용자가 값을 시각적으로 선택하고 조절할 수 있게 해주는 컨트롤입니다.<br />
          수치 기반 입력을 직관적인 상호작용으로 전환하여 사용자 경험을 향상시킵니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 인터랙티브 플레이그라운드 */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500 font-medium">Interactive</Badge>
        </div>
        <SliderDemo />
      </section>

      {/* 3. 디자인 토큰 */}
      <section className="space-y-24">
        <div className="space-y-8">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">디자인 토큰</h2>
            <p className="fs-16 text-integra-gray-500">슬라이더의 조형미와 상태를 결정하는 아토믹 클래스 명세입니다.</p>
        </div>
        <div className="rounded-12 border border-integra-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
                <thead className="bg-integra-gray-50 border-b border-integra-gray-200">
                    <tr className="fs-12 font-bold text-integra-gray-400">
                        <th className="px-24 py-16">속성</th><th className="px-24 py-16">토큰 클래스</th><th className="px-24 py-16">Value</th>
                    </tr>
                </thead>
                <tbody className="divide-y border-integra-gray-100 fs-14">
                    {designTokens.map((t) => (
                        <tr key={t.property} className="hover:bg-integra-gray-50/50 transition-colors">
                            <td className="px-24 py-16 font-medium text-integra-gray-700">{t.property}</td>
                            <td className="px-24 py-16 font-mono text-integra-blue-600 font-bold">.{t.class}</td>
                            <td className="px-24 py-16 font-mono text-integra-gray-900">{t.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </section>

      {/* 4. 아토믹 설계 원리 */}
      <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
        <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
        <ul className="list-disc pl-20 space-y-8 fs-15 text-integra-gray-600 leading-24 tracking--1">
            <li><strong>Geometric Harmony:</strong> 4px 높이의 트랙과 16px 크기의 핸들은 4배수의 시각적 비례를 유지하여 시스템의 조형적 일관성을 따릅니다.</li>
            <li><strong>State Feedback:</strong> 선택된 범위(Range)는 <code>primary</code> 컬러로 채워져 현재 값을 명확하게 인지시키며, 핸들(Thumb)의 테두리 역시 <code>primary</code> 컬러를 사용합니다.</li>
            <li><strong>Accessibility:</strong> 키보드 방향키를 이용한 정교한 값 조절과 스크린 리더 음성 안내를 기본으로 지원하여 모든 사용자의 접근성을 보장합니다.</li>
        </ul>
      </section>

      {/* 5. 사용법 */}
      <section className="space-y-24">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <CodeBlock code={codeSnippet} />
      </section>
    </div>
  );
}