import { TooltipDemo } from "@/components/demo/tooltip-demo";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export default function TooltipDocsPage() {
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
              <BreadcrumbPage>Tooltip</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900">Tooltip</h1>
        <p className="fs-20 text-integra-gray-500 leading-32">
          사용자에게 정보에 대한 미세한 힌트나 보조 설명을 제공하는 작은 오버레이 창입니다.<br />
          마우스 호버나 포커스 시 나타나며 정보의 밀도를 해치지 않고 부가 정보를 효율적으로 전달합니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 인터랙티브 플레이그라운드 */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500">Interactive</Badge>
        </div>
        <TooltipDemo />
      </section>

      {/* 3. 아토믹 설계 원리 설명: bg-integra-gray-50 및 fs- 접두사 적용 */}
      <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
        <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
        <div className="space-y-12 fs-15 text-integra-gray-600 leading-24 tracking--1">
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Padding:</strong> 가로 12px(px-12), 세로 4px(py-4)의 정교한 텍스트 여백을 가집니다.</li>
                <li><strong>Radius:</strong> 4px(rounded-4)의 작고 예리한 곡률을 사용하여 메인 UI 요소와 시각적으로 구분합니다.</li>
                <li><strong>Color:</strong> 시선을 분산시키지 않도록 진한 다크 배경(integra-gray-900)을 사용하여 대비를 극대화합니다.</li>
            </ul>
        </div>
      </section>

      {/* 4. 사용법: bg-integra-gray-900 및 표준 코드 스타일 적용 */}
      <section className="space-y-16">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <div className="rounded-8 bg-integra-gray-900 p-20 overflow-x-auto font-mono fs-14 leading-24 text-white">
            <p className="text-integra-gray-500 mb-8">// Import the components</p>
            <p className="text-blue-400">import &#123; Tooltip, TooltipContent, TooltipProvider, TooltipTrigger &#125; from "@/components/ui/tooltip"</p>
            <br />
            <p className="text-integra-gray-500 mb-8">// Basic usage</p>
            <p className="text-white">
              &lt;TooltipProvider&gt;<br />
              &nbsp;&nbsp;&lt;Tooltip&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;TooltipTrigger&gt;Hover&lt;/TooltipTrigger&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;TooltipContent&gt;Content&lt;/TooltipContent&gt;<br />
              &nbsp;&nbsp;&lt;/Tooltip&gt;<br />
              &lt;/TooltipProvider&gt;
            </p>
        </div>
      </section>

    </div>
  );
}