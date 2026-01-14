import { BreadcrumbDemo } from "@/components/demo/breadcrumb-demo"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Badge } from "@/components/ui/badge"

export default function BreadcrumbDocsPage() {
  return (
    <div className="space-y-48 pb-80">
      
      {/* 1. 헤더 섹션 */}
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
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900">Breadcrumb</h1>
        <p className="fs-20 text-integra-gray-500 leading-32">
          페이지의 위치를 계층 구조로 시각화하며,<br></br>상위 경로로의 이동을 돕는 아토믹 내비게이션입니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 인터랙티브 플레이그라운드 */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500">Interactive</Badge>
        </div>
        <BreadcrumbDemo />
      </section>

      {/* 3. 아토믹 설계 원리 설명 */}
      <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
        <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
        <div className="space-y-12 fs-15 text-integra-gray-600 leading-24 tracking--1">
            <p>
                브레드크럼은 정보의 경로를 최소 단위의 원자(Link, Separator)로 분해하여 구성합니다.
            </p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Typography:</strong> 보조 수단으로서의 인지를 위해 12px(fs-12) 크기를 표준으로 사용합니다.</li>
                <li><strong>Hierarchy:</strong> 현재 위치(Page)는 <code>font-bold</code>와 <code>gray-900</code>을 조합하여 최상위 위계를 부여합니다.</li>
                <li><strong>Separator:</strong> 4px 그리드 정렬을 위해 14px 크기의 아이콘 토큰을 구분자로 사용합니다.</li>
            </ul>
        </div>
      </section>

      {/* 4. 사용법 */}
      <section className="space-y-16">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <div className="rounded-8 bg-integra-gray-900 p-20 overflow-x-auto font-mono fs-14 leading-24 text-white">
            <p className="text-integra-gray-500 mb-8">// Integration Example</p>
            <code className="block">
              import &#123; Breadcrumb &#125; from "@/components/ui/breadcrumb"
            </code>
        </div>
      </section>

    </div>
  );
}