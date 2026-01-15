import { CheckboxDemo } from "@/components/demo/checkbox-demo";
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
 * [Integra UI - Checkbox Document SAI Version]
 * 선택 상태를 제어하는 아토믹 컴포넌트 문서입니다.
 */
export default function CheckboxDocsPage() {
  // 1. 체크박스 전용 디자인 토큰 데이터
  const designTokens = [
    { property: "Size (크기)", class: "w-{px} h-{px}", value: "w-16 h-16" },
    { property: "Border Radius (곡률)", class: "rounded-{px}", value: "rounded-4" },
    { property: "Border Color (기본)", class: "border-{token}", value: "border-integra-gray-300" },
    { property: "Background (선택 시)", class: "bg-{token}", value: "bg-primary" },
    { property: "Icon Size (체크 아이콘)", class: "w-{px} h-{px}", value: "w-12 h-12" },
    { property: "Label Gap (라벨 간격)", class: "gap-{px}", value: "gap-8" },
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
              <BreadcrumbPage>Checkbox</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">Checkbox</h1>
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          사용자가 여러 옵션 중 하나 이상을 선택할 수 있는 제어 요소입니다.<br />
          라벨과 결합하여 직관적인 폼 아키텍처를 구성하며, 명확한 시각적 피드백을 제공합니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 인터랙티브 플레이그라운드 */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500 font-medium">Interactive</Badge>
        </div>
        <CheckboxDemo />
      </section>

      {/* 3. 디자인 토큰 섹션: 수치와 클래스의 1:1 매칭 명세 */}
      <section className="space-y-24">
        <div className="space-y-8">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">디자인 토큰</h2>
            <p className="fs-16 text-integra-gray-500">체크박스의 정밀한 조형을 결정하는 아토믹 클래스와 실제 수치 명세입니다.</p>
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

      {/* 4. 아토믹 설계 원리 설명: bg-integra-gray-50 및 fs- 접두사 적용 */}
      <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
        <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
        <div className="space-y-12 fs-15 text-integra-gray-600 leading-24 tracking--1">
            <p>Integra UI의 체크박스는 4px 그리드 시스템을 기반으로 시각적 균형과 접근성을 유지합니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Strict Geometry:</strong> 16px(w-16 h-16) 정정사각형 크기로 설계되어 텍스트 라인 높이와 완벽하게 정렬됩니다.</li>
                <li><strong>Precision Radius:</strong> 4px(rounded-4)의 곡률을 가져 버튼(8px/16px)보다 예리한 느낌으로 원자 단위를 구분합니다.</li>
                <li><strong>Interactive Feedback:</strong> <code>peer</code> 클래스를 통해 라벨과의 상태를 동기화하며, <code>primary</code> 토큰으로 활성 상태를 강조합니다.</li>
            </ul>
        </div>
      </section>

      {/* 5. 사용법: bg-integra-gray-900 및 표준 코드 스타일 적용 */}
      <section className="space-y-16">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <div className="rounded-12 bg-integra-gray-900 p-24 overflow-x-auto font-mono fs-14 leading-24 shadow-2xl text-white">
            <p className="text-integra-gray-500 mb-8">// Import the component</p>
            <p className="text-integra-blue-400">import &#123; Checkbox &#125; from "@/components/ui/checkbox"</p>
            <br />
            <p className="text-integra-gray-500 mb-8">// Basic usage</p>
            <p className="text-white">&lt;Checkbox id="terms" /&gt;</p>
        </div>
      </section>

    </div>
  );
}