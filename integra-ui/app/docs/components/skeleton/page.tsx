import { SkeletonDemo } from "@/components/demo/skeleton-demo";
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
 * [Integra UI - Skeleton Document SAI Version]
 * 데이터 로딩 중 레이아웃의 뼈대를 보여주는 아토믹 컴포넌트 문서입니다.
 * 고도화된 CodeBlock을 통해 정교한 조립법을 안내합니다.
 */
export default function SkeletonDocsPage() {
  // 1. 스켈레톤 전용 디자인 토큰 데이터
  const designTokens = [
    { property: "Animation (애니메이션)", class: "animate-pulse", value: "2s / Pulse" },
    { property: "Background (배경색)", class: "bg-integra-gray-100", value: "Gray 100" },
    { property: "Default Radius (곡률)", class: "rounded-8", value: "8px" },
    { property: "Circle Radius (원형)", class: "rounded-full", value: "9999px" },
    { property: "Text Skeleton Height", class: "h-12 / h-16", value: "12px / 16px" },
    { property: "Avatar Skeleton Size", class: "w-48 h-48", value: "48px x 48px" },
  ];

  // 2. 코드 스니펫 정의
  const importCode = `import { Skeleton } from "@/components/ui/skeleton"`;

  const usageCode = `<div className="flex items-center gap-16">
  <Skeleton className="h-48 w-48 rounded-full" />
  <div className="space-y-8 flex-1">
    <Skeleton className="h-16 w-120" />
    <Skeleton className="h-12 w-full" />
  </div>
</div>`;

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
              <BreadcrumbPage>Skeleton</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">
          Skeleton
        </h1>
        
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          실제 콘텐츠가 로드되기 전에 레이아웃의 뼈대를 보여주는 컴포넌트입니다.<br />
          사용자에게 진행 상태를 시각적으로 전달하여 실제보다 빠른 응답성을 느끼게 합니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 인터랙티브 플레이그라운드 */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500 font-medium">Interactive Preview</Badge>
        </div>
        <SkeletonDemo />
      </section>

      {/* 3. 디자인 토큰 섹션: 수치와 클래스의 1:1 매칭 명세 */}
      <section className="space-y-24">
        <div className="space-y-8">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">디자인 토큰</h2>
            <p className="fs-16 text-integra-gray-500">스켈레톤의 시각적 속성을 결정하는 아토믹 클래스와 실제 명세입니다.</p>
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
            <p>스켈레톤은 실제 컴포넌트의 기하학적 원자 구조를 그대로 복제하여 설계합니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Animation Strategy:</strong> <code>animate-pulse</code> 토큰을 사용하여 인지적 부하가 적은 부드러운 점멸 효과를 제공합니다.</li>
                <li><strong>Neutral Color:</strong> <code>integra-gray-100</code> 토큰을 사용하여 어떤 배경 위에서도 중립적인 로딩 상태를 유지합니다.</li>
                <li><strong>Proportional Radius:</strong> 콘텐츠 원자의 형태에 따라 4px, 8px, full 토큰을 유연하게 조합하여 원본의 조형미를 계승합니다.</li>
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