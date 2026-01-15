import { InputDemo } from "@/components/demo/input-demo";
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
 * [Integra UI - Input Document SAI Version]
 * 텍스트 입력을 위한 표준 폼 컴포넌트 문서입니다.
 */
export default function InputDocsPage() {
  // 1. 인풋 전용 디자인 토큰 데이터
  const designTokens = [
    { property: "Height (높이)", class: "h-{px}", value: "h-40" },
    { property: "Font Size (글자 크기)", class: "fs-{px}", value: "fs-14" },
    { property: "Line Height (행간)", class: "leading-{px}", value: "leading-24" },
    { property: "Border Radius (곡률)", class: "rounded-{px}", value: "rounded-8" },
    { property: "Padding V (상하 여백)", class: "py-{px}", value: "py-8" },
    { property: "Padding H (좌우 여백)", class: "px-{px}", value: "px-12" },
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
              <BreadcrumbPage>Input</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">
          Input
        </h1>
        
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          사용자로부터 텍스트 데이터를 입력받는 가장 기본적인 폼 요소입니다.<br />
          다양한 상태와 타입을 4px 그리드 시스템 안에서 일관되게 제공합니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 인터랙티브 플레이그라운드 */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500 font-medium">Interactive</Badge>
        </div>
        <InputDemo />
      </section>

      {/* 3. 디자인 토큰 섹션: 수치와 클래스의 1:1 매칭 명세 */}
      <section className="space-y-24">
        <div className="space-y-8">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">디자인 토큰</h2>
            <p className="fs-16 text-integra-gray-500">인풋의 정밀한 규격을 결정하는 아토믹 클래스와 실제 수치 명세입니다.</p>
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
            <p>입력창은 버튼과 동일한 수직 리듬을 공유하여 폼 레이아웃의 완성도를 높입니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Grid Alignment:</strong> 40px(h-40) 표준 높이를 사용하여 버튼 시스템과 시각적으로 정렬됩니다.</li>
                <li><strong>Padding Logic:</strong> 텍스트의 가독성을 위해 좌우 12px(px-12)의 넉넉한 여백을 확보합니다.</li>
                <li><strong>Focus Token:</strong> 브랜드 컬러(Primary) 링 토큰을 통해 사용자에게 명확한 상호작용 상태를 전달합니다.</li>
            </ul>
        </div>
      </section>

      {/* 5. 사용법 */}
      <section className="space-y-16">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <div className="rounded-12 bg-integra-gray-900 p-24 overflow-x-auto font-mono fs-14 leading-24 shadow-2xl text-white">
            <p className="text-integra-gray-500 mb-8">// Import the component</p>
            <p className="text-integra-blue-400">import &#123; Input &#125; from "@/components/ui/input"</p>
            <br />
            <p className="text-integra-gray-500 mb-8">// Basic usage</p>
            <p className="text-white">&lt;Input type="email" placeholder="Email Address" /&gt;</p>
        </div>
      </section>

    </div>
  );
}