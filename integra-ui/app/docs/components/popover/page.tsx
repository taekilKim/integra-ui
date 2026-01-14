import { PopoverDemo } from "@/components/demo/popover-demo";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export default function PopoverDocsPage() {
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
              <BreadcrumbPage>Popover</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900">Popover</h1>
        <p className="fs-20 text-integra-gray-500 leading-32">
          특정 요소에 대해 상세한 컨트롤이나 부가 정보를 제공할 때 사용하는 강력한 레이어 시스템입니다.<br />
          콘텐츠의 맥락을 유지하면서도 풍부한 상호작용을 지원하는 아토믹 오버레이입니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 인터랙티브 플레이그라운드 */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500">Interactive</Badge>
        </div>
        <PopoverDemo />
      </section>

      {/* 3. 아토믹 설계 원리 설명: bg-integra-gray-50 및 fs- 접두사 적용 */}
      <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
        <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
        <div className="space-y-12 fs-15 text-integra-gray-600 leading-24 tracking--1">
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Layout:</strong> 기본 280px(w-280) 너비를 가지며, 내부 요소를 정렬하는 <code>grid</code>를 활용합니다.</li>
                <li><strong>Shadow:</strong> Integra 고유의 <code>shadow-integra</code>를 적용하여 깊이 있는 시각적 레이어를 형성합니다.</li>
                <li><strong>Radius:</strong> 12px(rounded-12) 곡률을 사용하여 메인 콘텐츠와 구분되는 세련된 스타일을 유지합니다.</li>
            </ul>
        </div>
      </section>

      {/* 4. 사용법: bg-integra-gray-900 및 표준 코드 스타일 적용 */}
      <section className="space-y-16">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <div className="rounded-8 bg-integra-gray-900 p-20 overflow-x-auto font-mono fs-14 leading-24 text-white">
            <p className="text-integra-gray-500 mb-8">// Import the components</p>
            <p className="text-blue-400">import &#123; Popover, PopoverContent, PopoverTrigger &#125; from "@/components/ui/popover"</p>
            <br />
            <p className="text-integra-gray-500 mb-8">// Basic usage</p>
            <p className="text-white">&lt;Popover&gt;<br />
            &nbsp;&nbsp;&lt;PopoverTrigger&gt;Open&lt;/PopoverTrigger&gt;<br />
            &nbsp;&nbsp;&lt;PopoverContent&gt;...&lt;/PopoverContent&gt;<br />
            &lt;/Popover&gt;</p>
        </div>
      </section>

    </div>
  );
}