import { TableDemo } from "@/components/demo/table-demo"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function TableDocsPage() {
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
              <BreadcrumbPage>Table</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900">Table</h1>
        <p className="fs-20 text-integra-gray-500 leading-32">
          대량의 데이터를 행과 열의 구조로 정렬하여 보여주는 데이터 그리드 컴포넌트입니다.<br />
          아토믹 토큰을 활용해 실무 환경에 최적화된 높은 정보 밀도를 제공합니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 인터랙티브 플레이그라운드 */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500">Preview Only</Badge>
        </div>
        <TableDemo />
      </section>

      {/* 3. 아토믹 설계 원리 설명 */}
      <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
        <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
        <div className="space-y-12 text-15 text-integra-gray-600 leading-24 tracking--1">
            <p>
                테이블은 정보의 리듬과 가독성을 위해 가장 정교한 아토믹 계산이 필요한 영역입니다.
            </p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Spacing:</strong> 각 셀은 12px의 상하 패딩(py-12)과 16px의 좌우 패딩(px-16)을 기본으로 가집니다.</li>
                <li><strong>Typography:</strong> 헤더는 12px Bold를 사용하여 데이터와의 위계를 분리하고, 본문 셀은 14px를 사용합니다.</li>
                <li><strong>Border:</strong> <code>integra-gray-100</code> 토큰의 1px 선을 사용하여 데이터 간의 구분선을 최소한으로 유지합니다.</li>
            </ul>
        </div>
      </section>

      {/* 4. 사용법 */}
      <section className="space-y-16">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <div className="rounded-8 bg-integra-gray-900 p-20 overflow-x-auto font-mono fs-14 leading-24 text-white">
            <code className="block">
              import &#123; Table, TableHeader, TableBody, TableRow, TableHead, TableCell &#125; from "@/components/ui/table"
            </code>
        </div>
      </section>

    </div>
  );
}