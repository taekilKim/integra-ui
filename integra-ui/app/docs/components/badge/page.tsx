import { BadgeDemo } from "@/components/demo/badge-demo";
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
 * [Integra UI - Badge Document SAI Version]
 * 상태나 카테고리를 강조하는 초소형 원자 컴포넌트 문서입니다.
 */
export default function BadgeDocsPage() {
  // 1. 뱃지 전용 디자인 토큰 데이터
  const designTokens = [
    { property: "Font Size (글자 크기)", class: "fs-12", value: "12px" },
    { property: "Line Height (행간)", class: "leading-16", value: "16px" },
    { property: "Border Radius (곡률)", class: "rounded-full", value: "9999px" },
    { property: "Padding V (상하 여백)", class: "py-2", value: "2px" },
    { property: "Padding H (좌우 여백)", class: "px-8", value: "8px" },
    { property: "Border Width (선 두께)", class: "border", value: "1px" },
  ];

  // 2. 코드 스니펫 정의
  const importCode = `import { Badge } from "@/components/ui/badge"`;
  const usageCode = `<Badge variant="default">Status</Badge>
<Badge variant="secondary">In Progress</Badge>
<Badge variant="outline">Draft</Badge>
<Badge variant="destructive">Error</Badge>`;

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
              <BreadcrumbPage>Badge</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">Badge</h1>
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          상태, 카테고리, 태그 등을 시각적으로 강조하여 표시하는 요소입니다.<br />
          텍스트 흐름을 방해하지 않는 정교한 아토믹 규격으로 설계되었습니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 인터랙티브 플레이그라운드 */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500 font-medium">Interactive</Badge>
        </div>
        <BadgeDemo />
      </section>

      {/* 3. 디자인 토큰 섹션 */}
      <section className="space-y-24">
        <div className="space-y-8">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">디자인 토큰</h2>
            <p className="fs-16 text-integra-gray-500">뱃지의 초소형 규격을 결정하는 아토믹 클래스와 실제 수치 명세입니다.</p>
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
            <p>Integra UI의 뱃지는 정보의 중요도에 따라 4가지 원자적 변형을 제공합니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Optical Balance:</strong> 가독성을 유지하면서 메인 텍스트와 시각적 충돌을 피하는 12px(fs-12) 규격을 표준으로 사용합니다.</li>
                <li><strong>Padding:</strong> 2px 단위 정밀 제어를 통해 상하 2px(py-2)의 타이트한 여백을 구현했습니다.</li>
                <li><strong>Shape Identity:</strong> <code>rounded-full</code> 토큰을 사용하여 버튼(Rounded-8/16)과 확연히 구분되는 인상을 줍니다.</li>
            </ul>
        </div>
      </section>

      {/* 5. 사용법: CodeBlock 적용 */}
      <section className="space-y-24">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <div className="space-y-16">
          <p className="fs-14 text-integra-gray-500 font-medium tracking-1 uppercase">1. Import</p>
          <CodeBlock code={importCode} />
          
          <p className="fs-14 text-integra-gray-500 font-medium tracking-1 uppercase mt-32">2. Basic usage</p>
          <CodeBlock code={usageCode} />
        </div>
      </section>

    </div>
  );
}