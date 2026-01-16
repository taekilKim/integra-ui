import { ToggleDemo } from "@/components/demo/toggle-demo";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/layout/code-block";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";

/**
 * [Integra UI - Toggle Document SAI Version]
 * 선택 상태를 유지하는 2단계 버튼 컴포넌트 문서입니다.
 */
export default function ToggleDocsPage() {
  // 1. 토글 전용 디자인 토큰 데이터
  const baseTokens = [
    { property: "Default Height", class: "h-40", value: "40px" },
    { property: "Small Height", class: "h-32", value: "32px" },
    { property: "Font Size", class: "fs-14 / fs-13", value: "14px / 13px" },
    { property: "Active Background", class: "data-[state=on]:bg-{token}", value: "integra-gray-100" },
    { property: "Default Radius", class: "rounded-8", value: "8px" },
  ];

  const groupTokens = [
    { property: "Group Padding", class: "p-{px}", value: "p-4" },
    { property: "Group Radius", class: "rounded-{px}", value: "rounded-12" },
    { property: "Item Gap", class: "gap-{px}", value: "gap-4" },
  ];

  const codeSnippet = `import { Toggle } from "@/components/ui/toggle"

<Toggle aria-label="Toggle bold">
  <Bold className="h-16 w-16" />
</Toggle>`;
  
  const groupCodeSnippet = `<div className="inline-flex items-center gap-4 p-4 rounded-12 bg-integra-gray-50 border">
  <Toggle size="sm">...</Toggle>
  <Toggle size="sm">...</Toggle>
</div>`;

  return (
    <div className="space-y-64 pb-120">
      
      {/* 1. 헤더 섹션 */}
      <div className="space-y-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/docs/components">Components</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbPage>Toggle</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">Toggle</h1>
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          선택 상태를 유지하거나 해제하는 2단계 버튼입니다.<br />
          에디터의 텍스트 스타일링이나 필터 활성화 등에 사용됩니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 플레이그라운드 */}
      <section className="space-y-16">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
        <ToggleDemo />
      </section>

      {/* 3. 디자인 토큰 섹션 */}
      <section className="space-y-48">
        <div className="space-y-24">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">디자인 토큰</h2>
            
            {/* 단일 토글 토큰 */}
            <div className="space-y-16">
                <h3 className="fs-18 font-bold text-integra-gray-700">Single Toggle</h3>
                <div className="rounded-12 border border-integra-gray-100 overflow-hidden shadow-sm">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-integra-gray-50 border-b border-integra-gray-200">
                            <tr className="fs-12 font-bold text-integra-gray-400">
                                <th className="px-24 py-16">속성</th><th className="px-24 py-16">클래스</th><th className="px-24 py-16">Value</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y border-integra-gray-100 fs-14">
                            {baseTokens.map((t) => (
                                <tr key={t.property} className="hover:bg-integra-gray-50/50">
                                    <td className="px-24 py-16 font-medium text-integra-gray-700">{t.property}</td>
                                    <td className="px-24 py-16 font-mono text-blue-600 font-bold">.{t.class}</td>
                                    <td className="px-24 py-16 font-mono text-integra-gray-900">{t.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* 토글 그룹 토큰 */}
            <div className="space-y-16">
                <h3 className="fs-18 font-bold text-integra-gray-700">Toggle Group Pattern</h3>
                <div className="rounded-12 border border-integra-gray-100 overflow-hidden shadow-sm">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-integra-gray-50 border-b border-integra-gray-200">
                            <tr className="fs-12 font-bold text-integra-gray-400">
                                <th className="px-24 py-16">속성</th><th className="px-24 py-16">클래스</th><th className="px-24 py-16">Value</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y border-integra-gray-100 fs-14">
                            {groupTokens.map((t) => (
                                <tr key={t.property} className="hover:bg-integra-gray-50/50">
                                    <td className="px-24 py-16 font-medium text-integra-gray-700">{t.property}</td>
                                    <td className="px-24 py-16 font-mono text-blue-600 font-bold">.{t.class}</td>
                                    <td className="px-24 py-16 font-mono text-integra-gray-900">{t.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </section>

      {/* 4. 아토믹 설계 원리 */}
      <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
        <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
        <ul className="list-disc pl-20 space-y-4 fs-15 text-integra-gray-600 leading-24 tracking--1">
            <li><strong>Stateful Button:</strong> 버튼과 시각적 위계를 공유하지만, <code>data-[state=on]</code>을 통해 '눌린 상태'를 유지하는 차이점이 있습니다.</li>
            <li><strong>Semantic State:</strong> 활성화 시 <code>integra-gray-100</code> 배경을 사용하여 Primary 버튼과의 역할 충돌을 피합니다.</li>
            <li><strong>Composition:</strong> 여러 토글을 묶어 <code>Toggle Group</code> 패턴을 만들 수 있습니다.</li>
        </ul>
      </section>

      {/* 5. 사용법 */}
      <section className="space-y-24">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <div className="space-y-16">
          <p className="fs-14 text-integra-gray-500 font-medium tracking-1 uppercase">1. Basic Usage</p>
          <CodeBlock code={codeSnippet} />
          <p className="fs-14 text-integra-gray-500 font-medium tracking-1 uppercase mt-32">2. Group Pattern</p>
          <CodeBlock code={groupCodeSnippet} />
        </div>
      </section>

    </div>
  );
}