import { BreadcrumbDemo } from "@/components/demo/breadcrumb-demo"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Badge } from "@/components/ui/badge"
import { CodeBlock } from "@/components/layout/code-block"; // ✨ 추가

/**
 * [Integra UI - Breadcrumb Document SAI Version]
 * 정보 계층 구조를 시각화하는 내비게이션 문서입니다.
 */
export default function BreadcrumbDocsPage() {
  // 1. 브레드크럼 전용 디자인 토큰 데이터
  const designTokens = [
    { property: "Font Size (글자 크기)", class: "fs-12", value: "12px" },
    { property: "Line Height (행간)", class: "leading-16", value: "16px" },
    { property: "Item Gap (항목 간격)", class: "gap-8", value: "8px" },
    { property: "Separator Size (구분자 크기)", class: "[&>svg]:w-14", value: "14px" },
    { property: "Link Color (기본 경로)", class: "text-integra-gray-500", value: "Gray 500" },
    { property: "Page Color (현재 페이지)", class: "text-integra-gray-900", value: "Gray 900" },
  ];

  // 2. 코드 스니펫 정의
  const usageCode = `import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`;

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
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">Breadcrumb</h1>
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          페이지의 위치를 계층 구조로 시각화하여 현재 경로를 명확히 인지시키며,<br />
          상위 경로로의 효율적인 이동을 돕는 아토믹 내비게이션 시스템입니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 인터랙티브 플레이그라운드 */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500 font-medium">Interactive</Badge>
        </div>
        <BreadcrumbDemo />
      </section>

      {/* 3. 디자인 토큰 섹션: 수치와 클래스의 1:1 매칭 명세 */}
      <section className="space-y-24">
        <div className="space-y-8">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">디자인 토큰</h2>
            <p className="fs-16 text-integra-gray-500">내비게이션의 정밀도를 결정하는 아토믹 클래스와 실제 수치 명세입니다.</p>
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
            <p>
                브레드크럼은 정보의 경로를 최소 단위의 원자(Link, Separator)로 분해하여 재구성합니다.
            </p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Typography:</strong> 보조 네비게이션으로서의 역할을 수행하기 위해 12px(fs-12) 크기를 표준으로 정의합니다.</li>
                <li><strong>Hierarchy:</strong> 현재 위치(Page)는 <code>font-bold</code>와 <code>gray-900</code> 토큰을 조합하여 최상위 시각적 위계를 부여합니다.</li>
                <li><strong>Icon Scaling:</strong> 4px 그리드 정렬을 보정하기 위해 구분자 아이콘의 크기를 14px로 세밀하게 조정했습니다.</li>
            </ul>
        </div>
      </section>

      {/* 5. 사용법: CodeBlock 적용 */}
      <section className="space-y-24">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <div className="space-y-16">
          <p className="fs-14 text-integra-gray-500 font-medium tracking-1 uppercase">Installation & Usage</p>
          <CodeBlock code={usageCode} />
        </div>
      </section>

    </div>
  );
}