import { PaginationDemo } from "@/components/demo/pagination-demo";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/layout/code-block";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export default function PaginationDocsPage() {
  // 1. 디자인 토큰 테이블
  const designTokens = [
    { property: "Button Size", class: "w-40 h-40", value: "40px" },
    { property: "Font Size", class: "fs-{px}", value: "fs-14" },
    { property: "Item Gap", class: "gap-{px}", value: "gap-4" },
    { property: "Active Style", class: "border-{token}", value: "border-integra-gray-200" },
    { property: "Icon Type", class: "Phosphor", value: "Caret / DotsThree" },
  ];

  // 2. Usage 코드
  const codeSnippet = `import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination"

<Pagination>
  <PaginationContent>
    <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
    <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
    <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
    <PaginationItem><PaginationNext href="#" /></PaginationItem>
  </PaginationContent>
</Pagination>`;

  return (
    <div className="space-y-64 pb-120">
      
      {/* 1. Header */}
      <div className="space-y-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/docs/components">Components</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbPage>Pagination</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">Pagination</h1>
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          데이터 목록이 길어질 때, 페이지를 나누어 탐색할 수 있게 돕는 네비게이션 컴포넌트입니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. Playground */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500">Interactive</Badge>
        </div>
        <PaginationDemo />
      </section>

      {/* 3. Design Tokens */}
      <section className="space-y-24">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">디자인 토큰</h2>
        <div className="rounded-12 border border-integra-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
                <thead className="bg-integra-gray-50 border-b border-integra-gray-200">
                    <tr className="fs-12 font-bold text-integra-gray-400">
                        <th className="px-24 py-16">속성</th><th className="px-24 py-16">클래스</th><th className="px-24 py-16">Value</th>
                    </tr>
                </thead>
                <tbody className="divide-y border-integra-gray-100 fs-14">
                    {designTokens.map((t) => (
                        <tr key={t.property} className="hover:bg-integra-gray-50/50">
                            <td className="px-24 py-16 font-medium text-integra-gray-700">{t.property}</td>
                            <td className="px-24 py-16 font-mono text-integra-blue-600 font-bold">.{t.class}</td>
                            <td className="px-24 py-16 font-mono text-integra-gray-900">{t.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </section>

      {/* 4. Atomic Design Note */}
      <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
        <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
        <ul className="list-disc pl-20 space-y-4 fs-15 text-integra-gray-600 leading-24 tracking--1">
            <li><strong>Composition:</strong> <code>appearance="text"</code> 버튼을 원자로 재사용하여 배경 없는 깔끔한 링크 스타일을 구현합니다.</li>
            <li><strong>Active State:</strong> 현재 페이지는 <code>appearance="outlined"</code> 스타일로 전환되어 명확한 위치 정보를 제공합니다.</li>
            <li><strong>Grid Alignment:</strong> 숫자 버튼은 40px(w-40 h-40) 정사각 규격을 사용하여 터치 타겟을 확보합니다.</li>
        </ul>
      </section>

      {/* 5. Usage */}
      <section className="space-y-24">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <CodeBlock code={codeSnippet} />
      </section>

    </div>
  );
}