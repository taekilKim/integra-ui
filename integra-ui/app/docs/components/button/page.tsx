import { ButtonDemo } from "@/components/demo/button-demo";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export default function ButtonDocsPage() {
  // 1. 사이즈별 디자인 토큰 및 클래스 매핑 데이터
  const designTokens = [
    { property: "Height (높이)", class: "h-{px}", default: "h-56", medium: "h-48", small: "h-32" },
    { property: "Font Size (글자 크기)", class: "fs-{px}", default: "fs-18", medium: "fs-16", small: "fs-12" },
    { property: "Line Height (행간)", class: "leading-{px}", default: "leading-24", medium: "leading-20", small: "leading-16" },
    { property: "Border Radius (곡률)", class: "rounded-{px}", default: "rounded-16", medium: "rounded-12", small: "rounded-8" },
    { property: "Padding V (상하 여백)", class: "py-{px}", default: "py-16", medium: "py-14", small: "py-8" },
    { property: "Padding H (좌우 여백)", class: "px-{px}", default: "px-20", medium: "px-12", small: "px-8" },
  ];

  return (
    <div className="space-y-64 pb-120">
      
      {/* 1. Header Section: 표준 규격 준수 */}
      <div className="space-y-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Button</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">
          Button
        </h1>
        
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          사용자의 동작을 트리거하거나 폼을 전송할 때 사용하는 핵심 컴포넌트입니다.<br />
          아토믹 토큰의 정밀한 조합으로 다양한 위계와 최적화된 규격을 제공합니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. Interactive Playground */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500">Interactive</Badge>
        </div>
        <ButtonDemo />
      </section>

      {/* 3. 디자인 토큰 섹션: 수치와 클래스의 1:1 매칭 명세 */}
      <section className="space-y-24">
        <div className="space-y-8">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">디자인 토큰</h2>
            <p className="fs-16 text-integra-gray-500">각 사이즈 규격에 적용된 아토믹 클래스와 실제 수치 명세입니다.</p>
        </div>
        <div className="rounded-12 border border-integra-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
                <thead className="bg-integra-gray-50 border-b border-integra-gray-200">
                    <tr className="fs-12 font-bold text-integra-gray-400">
                        <th className="px-24 py-16">속성 (Property)</th>
                        <th className="px-24 py-16">토큰 클래스</th>
                        <th className="px-24 py-16">Default (56px)</th>
                        <th className="px-24 py-16">Medium (48px)</th>
                        <th className="px-24 py-16">Small (32px)</th>
                    </tr>
                </thead>
                <tbody className="divide-y border-integra-gray-100 fs-14">
                    {designTokens.map((token) => (
                        <tr key={token.property} className="hover:bg-integra-gray-50/50 transition-colors">
                            <td className="px-24 py-16 font-medium text-integra-gray-700">{token.property}</td>
                            <td className="px-24 py-16 font-mono text-blue-600 font-bold">{token.class}</td>
                            <td className="px-24 py-16 font-mono text-integra-gray-900">{token.default}</td>
                            <td className="px-24 py-16 font-mono text-integra-gray-500">{token.medium}</td>
                            <td className="px-24 py-16 font-mono text-integra-gray-500">{token.small}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </section>

      {/* 4. Atomic Design Note */}
      <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
        <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
        <div className="space-y-12 fs-15 text-integra-gray-600 leading-24 tracking--1">
            <p>
                Integra UI의 버튼은 독립된 원자(Size, Weight, Radius)를 조합하여 완성됩니다.
            </p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Height Strategy:</strong> 32px, 48px, 56px 규격을 엄격히 준수하여 수직 리듬을 형성합니다.</li>
                <li><strong>Semantic Hover:</strong> <code>primary-hover</code> 토큰을 사용하여 브랜드 컬러 변경 시 호버 상태가 자동 동기화됩니다.</li>
                <li><strong>Numerical Alignment:</strong> 피그마의 픽셀 수치와 코드의 토큰 수치가 1:1로 일치하여 소통 오차를 제거합니다.</li>
            </ul>
        </div>
      </section>

      {/* 5. Usage */}
      <section className="space-y-16">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <div className="rounded-12 bg-integra-gray-900 p-24 overflow-x-auto font-mono fs-14 leading-24 shadow-2xl text-white">
            <p className="text-integra-gray-500 mb-8">// Import component</p>
            <code className="block">import &#123; Button &#125; from "@/components/ui/button"</code>
        </div>
      </section>

    </div>
  );
}