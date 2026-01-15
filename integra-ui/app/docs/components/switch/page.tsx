import { SwitchDemo } from "@/components/demo/switch-demo";
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
 * [Integra UI - Switch Document SAI Version]
 * 설정을 즉각적으로 전환하는 토글 컴포넌트 문서입니다.
 */
export default function SwitchDocsPage() {
  // 1. 스위치 전용 디자인 토큰 데이터
  const designTokens = [
    { property: "Track Width (너비)", class: "w-{px}", value: "w-44" },
    { property: "Track Height (높이)", class: "h-{px}", value: "h-24" },
    { property: "Thumb Size (버튼 크기)", class: "w-{px} h-{px}", value: "w-20 h-20" },
    { property: "Border Radius (곡률)", class: "rounded-{px}", value: "rounded-full" },
    { property: "Active Color (활성 배경)", class: "bg-{token}", value: "bg-primary" },
    { property: "Inactive Color (비활성 배경)", class: "bg-{token}", value: "bg-integra-gray-200" },
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
            <p>스위치는 물리적인 스위치의 메커니즘을 디지털 수치로 시각화한 원자 컴포넌트입니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Geometry Logic:</strong> 44px 너비(w-44)와 24px 높이(h-24)로 설계되어 엄지손가락 터치에 최적화된 영역을 확보합니다.</li>
                <li><strong>Thumb Movement:</strong> 내부의 20px(w-20 h-20) Thumb이 2px 마진을 유지하며 20px 거리를 부드럽게 이동(translate-x-20)합니다.</li>
                <li><strong>Semantic Color:</strong> 활성화 시에는 브랜드 컬러(Primary)를, 비활성 시에는 중립적인 <code>gray-200</code> 토큰을 사용하여 상태를 명확히 구분합니다.</li>
            </ul>
        </div>
      </section>

      {/* 5. 사용법: bg-integra-gray-900 및 표준 코드 스타일 적용 */}
      <section className="space-y-16">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <div className="rounded-12 bg-integra-gray-900 p-24 overflow-x-auto font-mono fs-14 leading-24 shadow-2xl text-white">
            <p className="text-integra-gray-500 mb-8">// Import the component</p>
            <p className="text-integra-blue-400">import &#123; Switch &#125; from "@/components/ui/switch"</p>
            <br />
            <p className="text-integra-gray-500 mb-8">// Basic usage</p>
            <p className="text-white">&lt;Switch id="airplane-mode" /&gt;</p>
        </div>
      </section>

    </div>
  );
}