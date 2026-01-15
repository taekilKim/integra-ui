import { TableDemo } from "@/components/demo/table-demo";
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
 * [Integra UI - Table Document SAI Version]
 * 대량의 데이터를 행과 열의 구조로 정렬하여 보여주는 데이터 그리드 문서입니다.
 */
export default function TableDocsPage() {
  // 1. 테이블 전용 디자인 토큰 데이터
  const designTokens = [
    { property: "Header Height (헤더 높이)", class: "h-{px}", value: "h-44" },
    { property: "Cell Padding V (상하 여백)", class: "py-{px}", value: "py-12" },
    { property: "Cell Padding H (좌우 여백)", class: "px-{px}", value: "px-16" },
    { property: "Border Color (구분선)", class: "border-{token}", value: "border-integra-gray-100" },
    { property: "Header Font Size (헤더 글자)", class: "fs-{px}", value: "fs-12" },
    { property: "Body Font Size (본문 글자)", class: "fs-{px}", value: "fs-14" },
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
              <BreadcrumbPage>Table</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">
          Table
        </h1>
        
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          대량의 데이터를 행과 열의 구조로 정렬하여 보여주는 데이터 그리드 컴포넌트입니다.<br />
          아토믹 토큰을 활용해 실무 환경에 최적화된 높은 정보 밀도와 가독성을 제공합니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 인터랙티브 플레이그라운드 */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500 font-medium">Preview Only</Badge>
        </div>
        <TableDemo />
      </section>

      {/* 3. 디자인 토큰 섹션: 수치와 클래스의 1:1 매칭 명세 */}
      <section className="space-y-24">
        <div className="space-y-8">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">디자인 토큰</h2>
            <p className="fs-16 text-integra-gray-500">테이블의 정보 밀도를 결정하는 아토믹 클래스와 실제 수치 명세입니다.</p>
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
            <p>테이블은 정보의 리듬과 가독성을 위해 가장 정교한 아토믹 계산이 필요한 영역입니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Vertical Rhythm:</strong> 각 셀은 12px의 상하 패딩(py-12)을 사용하여 데이터 간의 간섭을 최소화하고 가독성을 확보합니다.</li>
                <li><strong>Typography Hierarchy:</strong> 헤더는 12px Bold를 사용하여 데이터와의 위계를 분리하고, 본문 셀은 14px Regular 스타일을 사용합니다.</li>
                <li><strong>Border Consistency:</strong> <code>integra-gray-100</code> 토큰의 1px 선을 사용하여 데이터 간의 경계를 명확히 하되 시각적 노이즈는 최소화합니다.</li>
            </ul>
        </div>
      </section>

      {/* 5. 사용법 */}
      <section className="space-y-16">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <div className="rounded-12 bg-integra-gray-900 p-24 overflow-x-auto font-mono fs-14 leading-24 shadow-2xl text-white">
            <p className="text-integra-gray-500 mb-8">// Import components</p>
            <code className="block text-integra-blue-400">
              import &#123; Table, TableHeader, TableBody, TableRow, TableHead, TableCell &#125; from "@/components/ui/table"
            </code>
        </div>
      </section>

    </div>
  );
}