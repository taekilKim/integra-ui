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

/**
 * [Integra UI - Button Document SAI Version]
 * 트리거 및 폼 전송을 위한 핵심 컴포넌트 문서입니다.
 * Shape, Size, Appearance, Variant의 4차원 아토믹 조합을 명세합니다.
 */
export default function ButtonDocsPage() {
  // 1. 버튼 전용 디자인 토큰 데이터 (Shape 포함)
  const appliedAtoms = [
    { property: "Height (높이)", default: "56px", medium: "48px", small: "32px" },
    { property: "Radius (Rect/Squircle)", default: "16px", medium: "12px", small: "8px" },
    { property: "Radius (Circle)", default: "9999px", medium: "9999px", small: "9999px" },
    { property: "Icon Size (Svg)", default: "24px", medium: "20px", small: "16px" },
    { property: "Padding H (Rect Only)", default: "20px", medium: "12px", small: "8px" },
    { property: "Font Size (Text)", default: "18px", medium: "16px", small: "12px" },
  ];

  return (
    <div className="space-y-64 pb-120">
      
      {/* 1. 헤더 섹션: 표준 Breadcrumb 적용 */}
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
          Shape 속성을 통해 텍스트 버튼과 아이콘 버튼(원형/스쿼클)을 통합 관리합니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 인터랙티브 플레이그라운드 */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500 font-medium">Interactive</Badge>
        </div>
        <ButtonDemo />
      </section>

      {/* 3. 디자인 토큰 섹션 */}
      <section className="space-y-24">
        <div className="space-y-8">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">디자인 토큰</h2>
            <p className="fs-16 text-integra-gray-500">Shape와 Size 조합에 따른 정밀 규격 명세입니다.</p>
        </div>
        <div className="rounded-12 border border-integra-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
                <thead className="bg-integra-gray-50 border-b border-integra-gray-200">
                    <tr className="fs-12 font-bold text-integra-gray-400">
                        <th className="px-24 py-16">Property</th>
                        <th className="px-24 py-16">Default (56)</th>
                        <th className="px-24 py-16">Medium (48)</th>
                        <th className="px-24 py-16">Small (32)</th>
                    </tr>
                </thead>
                <tbody className="divide-y border-integra-gray-100 fs-14">
                    {appliedAtoms.map((atom) => (
                        <tr key={atom.property} className="hover:bg-integra-gray-50/50 transition-colors">
                            <td className="px-24 py-16 font-medium text-integra-gray-700">{atom.property}</td>
                            <td className="px-24 py-16 font-mono text-integra-blue-600 font-bold">{atom.default}</td>
                            <td className="px-24 py-16 font-mono text-integra-gray-500">{atom.medium}</td>
                            <td className="px-24 py-16 font-mono text-integra-gray-500">{atom.small}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </section>

      {/* 4. 아토믹 설계 원리 설명 */}
      <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
        <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
        <div className="space-y-12 fs-15 text-integra-gray-600 leading-24 tracking--1">
            <p>Integra UI의 버튼은 독립된 원자(Size, Shape, Appearance)를 조합하여 완성됩니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Height Strategy:</strong> 32px, 48px, 56px 규격을 엄격히 준수하여 수직 리듬을 형성합니다.</li>
                <li><strong>Shape System:</strong> <code>shape="circle"</code>은 <code>rounded-full</code>을, <code>shape="square"</code>는 버튼 크기에 비례하는 스쿼클 곡률(8/12/16px)을 자동 적용합니다.</li>
                <li><strong>Semantic Hover:</strong> <code>primary-hover</code> 토큰을 사용하여 브랜드 컬러 변경 시 호버 상태가 자동 동기화됩니다.</li>
            </ul>
        </div>
      </section>

      {/* 5. 사용법 */}
      <section className="space-y-16">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <div className="rounded-12 bg-integra-gray-900 p-24 overflow-x-auto font-mono fs-14 leading-24 shadow-2xl text-white">
            <p className="text-integra-gray-500 mb-8">// Import component</p>
            <p className="text-integra-blue-400">import &#123; Button &#125; from "@/components/ui/button"</p>
            <br />
            <p className="text-integra-gray-500 mb-8">// Basic usage</p>
            <p className="text-white">&lt;Button appearance="default" variant="default"&gt;Click me&lt;/Button&gt;</p>
            <br />
            <p className="text-integra-gray-500 mb-8">// Icon button (Squircle)</p>
            <p className="text-white">&lt;Button shape="square" size="medium" variant="tertiary"&gt;&lt;Icon /&gt;&lt;/Button&gt;</p>
        </div>
      </section>

    </div>
  );
}