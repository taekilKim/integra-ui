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

export default function SwitchDocsPage() {
  return (
    <div className="space-y-48 pb-80">
      
      {/* 1. 헤더 섹션: 표준 Breadcrumb 적용 및 설명글 줄바꿈 */}
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
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900">Switch</h1>
        <p className="fs-20 text-integra-gray-500 leading-32">
          단일 옵션의 켜짐(On)과 꺼짐(Off) 상태를 즉각적으로 전환하는 토글 버튼입니다.<br />
          체크박스보다 시각적으로 명확하며 모바일 환경에서도 직관적인 상호작용을 제공합니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 인터랙티브 플레이그라운드 */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500">Interactive</Badge>
        </div>
        <SwitchDemo />
      </section>

      {/* 3. 아토믹 설계 원리 설명: bg-integra-gray-50 및 fs- 접두사 적용 */}
      <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
        <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
        <div className="space-y-12 fs-15 text-integra-gray-600 leading-24 tracking--1">
            <p>스위치는 촉각적인 피드백을 수치로 시각화한 원자 컴포넌트입니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Geometry:</strong> 44px 너비(w-44)와 24px 높이(h-24)로 설계되어 최적의 터치 타겟을 확보합니다.</li>
                <li><strong>Thumb:</strong> 내부의 20px(h-20 w-20) 원형 토큰이 상태 변화에 따라 부드러운 애니메이션을 보여줍니다.</li>
                <li><strong>Color:</strong> 활성화 상태에서 브랜드 컬러(Primary)를 사용하여 사용자에게 명확한 상태 피드백을 전달합니다.</li>
            </ul>
        </div>
      </section>

      {/* 4. 사용법: bg-integra-gray-900 및 표준 코드 스타일 적용 */}
      <section className="space-y-16">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <div className="rounded-8 bg-integra-gray-900 p-20 overflow-x-auto font-mono fs-14 leading-24 text-white">
            <p className="text-integra-gray-500 mb-8">// Import the component</p>
            <p className="text-blue-400">import &#123; Switch &#125; from "@/components/ui/switch"</p>
            <br />
            <p className="text-integra-gray-500 mb-8">// Basic usage</p>
            <p className="text-white">&lt;Switch id="airplane-mode" /&gt;</p>
        </div>
      </section>

    </div>
  );
}