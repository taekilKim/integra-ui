"use client"

import { AlertDemo } from "@/components/demo/alert-demo";
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

/**
 * [Integra UI - Alert Document SAI Version]
 * 중요한 피드백을 전달하는 고정형 메시지 박스 컴포넌트 문서입니다.
 */
export default function AlertDocsPage() {
  // 1. Alert 전용 디자인 토큰 데이터
  const designTokens = [
    { property: "Padding", class: "p-16", value: "16px" },
    { property: "Border Radius", class: "rounded-12", value: "12px" },
    { property: "Title Font Size", class: "fs-15", value: "15px" },
    { property: "Description Font Size", class: "fs-14", value: "14px" },
    { property: "Icon Size", class: "[&>svg]:w-16 h-16", value: "16px" },
    { property: "Icon Padding (Left)", class: "[&>svg~*]:pl-24", value: "24px" },
  ];

  // 2. Usage 코드 스니펫
  const codeSnippet = `import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Info } from "@phosphor-icons/react"

<Alert variant="success">
  <Info className="h-16 w-16" />
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>
    Your changes have been saved.
  </AlertDescription>
</Alert>`;

  return (
    <div className="space-y-64 pb-120">
      
      {/* 1. 헤더 섹션 */}
      <div className="space-y-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Alert</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">Alert</h1>
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          사용자에게 중요한 상태나 피드백을 전달하는 고정형 메시지 박스입니다.<br />
          Toast와 달리 사라지지 않으며, 지속적인 정보 제공에 사용됩니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 플레이그라운드 */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500 font-medium">Preview Only</Badge>
        </div>
        <AlertDemo />
      </section>

      {/* 3. 디자인 토큰 */}
      <section className="space-y-24">
        <div className="space-y-8">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">디자인 토큰</h2>
            <p className="fs-16 text-integra-gray-500">Alert의 시각적 위계와 정보 구조를 결정하는 아토믹 클래스 명세입니다.</p>
        </div>
        <div className="rounded-12 border border-integra-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
                <thead className="bg-integra-gray-50 border-b border-integra-gray-200">
                    <tr className="fs-12 font-bold text-integra-gray-400">
                        <th className="px-24 py-16">속성</th><th className="px-24 py-16">토큰 클래스</th><th className="px-24 py-16">Value</th>
                    </tr>
                </thead>
                <tbody className="divide-y border-integra-gray-100 fs-14">
                    {designTokens.map((t) => (
                        <tr key={t.property} className="hover:bg-integra-gray-50/50 transition-colors">
                            <td className="px-24 py-16 font-medium text-integra-gray-700">{t.property}</td>
                            <td className="px-24 py-16 font-mono text-integra-blue-600 font-bold">{t.class}</td>
                            <td className="px-24 py-16 font-mono text-integra-gray-900">{t.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </section>

      {/* 4. 아토믹 설계 원리 */}
      <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
        <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
        <ul className="list-disc pl-20 space-y-8 fs-15 text-integra-gray-600 leading-24 tracking--1">
            <li><strong>Semantic Variants:</strong> <code>destructive</code>, <code>warning</code>, <code>success</code> 등 역할에 따라 배경색, 테두리색, 아이콘 색상이 시맨틱 토큰으로 자동 매핑됩니다.</li>
            <li><strong>Icon Alignment:</strong> <code>{`[&>svg]`}</code> 유틸리티를 사용하여 아이콘의 위치(<code>left-16 top-16</code>)와 크기(<code>h-16 w-16</code>)를 4px 그리드에 완벽하게 정렬합니다.</li>
            <li><strong>Content Padding:</strong> 아이콘이 있을 경우, 텍스트 컨테이너는 <code>pl-24</code> 토큰을 통해 아이콘과의 간격을 확보하여 가독성을 유지합니다.</li>
        </ul>
      </section>

      {/* 5. 사용법 */}
      <section className="space-y-24">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <CodeBlock code={codeSnippet} />
      </section>
    </div>
  );
}