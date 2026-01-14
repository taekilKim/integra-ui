import { BadgeDemo } from "@/components/demo/badge-demo";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function BadgeDocsPage() {
  return (
    <div className="space-y-48 pb-80">
      
      {/* 1. 헤더 섹션: 표준 Breadcrumb 컴포넌트 적용 */}
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
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900">Badge</h1>
        <p className="fs-20 text-integra-gray-500 leading-32">
          상태, 카테고리, 태그 등을 시각적으로 강조하여 표시합니다.<br />
          텍스트 흐름을 방해하지 않는 정교한 아토믹 규격으로 설계되었습니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 인터랙티브 플레이그라운드 */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500">Interactive</Badge>
        </div>
        <BadgeDemo />
      </section>

      {/* 3. 아토믹 설계 원리 설명: bg-integra-gray-50 및 fs- 접두사 적용 */}
      <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
        <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
        <div className="space-y-12 fs-15 text-integra-gray-600 leading-24 tracking--1">
            <p>Integra UI의 뱃지는 정보의 중요도에 따라 4가지 원자적 변형을 제공합니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Padding:</strong> 가로 8px, 세로 2px의 정밀한 여백을 가집니다.</li>
                <li><strong>Typography:</strong> 가독성을 고려한 12px(fs-12) 폰트와 16px 행간을 사용합니다.</li>
                <li><strong>Radius:</strong> <code>rounded-full</code> 토큰을 사용하여 부드러운 곡면을 가집니다.</li>
            </ul>
        </div>
      </section>

      {/* 4. 사용법: bg-integra-gray-900 및 표준 코드 스타일 적용 */}
      <section className="space-y-16">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <div className="rounded-8 bg-integra-gray-900 p-20 overflow-x-auto font-mono fs-14 leading-24 text-white">
            <p className="text-integra-gray-500 mb-8">// Import the component</p>
            <p className="text-blue-400">import &#123; Badge &#125; from "@/components/ui/badge"</p>
            <br />
            <p className="text-integra-gray-500 mb-8">// Basic usage</p>
            <p className="text-white">&lt;Badge variant="default"&gt;Badge&lt;/Badge&gt;</p>
        </div>
      </section>

    </div>
  );
}