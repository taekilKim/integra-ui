import { SwitchDemo } from "@/components/demo/switch-demo";
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
 * [Integra UI - Switch Document SAI Version]
 * 설정을 즉각적으로 전환하는 토글 컴포넌트 문서입니다.
 * 고도화된 CodeBlock을 통해 접근성이 고려된 조립법을 안내합니다.
 */
export default function SwitchDocsPage() {
  // 1. 스위치 전용 디자인 토큰 데이터
  const designTokens = [
    { property: "Track Width (너비)", class: "w-44", value: "44px" },
    { property: "Track Height (높이)", class: "h-24", value: "24px" },
    { property: "Thumb Size (버튼 크기)", class: "w-20 h-20", value: "20px x 20px" },
    { property: "Border Radius (곡률)", class: "rounded-full", value: "9999px" },
    { property: "Active Color (활성 배경)", class: "bg-primary", value: "Blue 500" },
    { property: "Inactive Color (비활성)", class: "bg-integra-gray-200", value: "Gray 200" },
  ];

  // 2. 코드 스니펫 정의
  const importCode = `import { Switch } from "@/components/ui/switch"`;
  
  const usageCode = `<div className="flex items-center gap-12">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
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
              <BreadcrumbPage>Switch</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">
          Switch
        </h1>
        
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          단일 옵션의 켜짐(On)과 꺼짐(Off) 상태를 즉각적으로 전환하는 토글 버튼입니다.<br />
          체크박스보다 시각적으로 명확하며 모바일 환경에서도 직관적인 상호작용을 제공합니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 인터랙티브 플레이그라운드 */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500 font-medium">Interactive</Badge>
        </div>
        <SwitchDemo />
      </section>

      {/* 3. 디자인 토큰 섹션: 수치와 클래스의 1:1 매칭 명세 */}
      <section className="space-y-24">
        <div className="space-y-8">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">디자인 토큰</h2>
            <p className="fs-16 text-integra-gray-500">스위치의 촉각적 비례를 결정하는 아토믹 클래스와 실제 수치 명세입니다.</p>
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
            <p>스위치는 물리적인 스위치의 메커니즘을 디지털 수치로 시각화한 원자 컴포넌트입니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Geometry Logic:</strong> 44px 너비(w-44)와 24px 높이(h-24)로 설계되어 최적의 터치 타겟과 시각적 균형을 동시에 만족합니다.</li>
                <li><strong>Thumb Precision:</strong> 내부의 20px Thumb이 2px의 정교한 마진을 유지하며 부드럽게 이동(translate-x-20)하도록 설계되었습니다.</li>
                <li><strong>Semantic Feedback:</strong> 활성화 시 브랜드 컬러(Primary)를 사용하여 사용자에게 명확한 상태 변화를 인지시킵니다.</li>
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