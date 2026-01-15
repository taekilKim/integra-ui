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
  // 1. 사이즈별 적용된 원자(Atoms) 데이터
  const appliedAtoms = [
    { property: "Height (높이)", default: "56px", medium: "48px", small: "32px" },
    { property: "Font Size (글자 크기)", default: "18px", medium: "16px", small: "12px" },
    { property: "Line Height (행간)", default: "24px", medium: "20px", small: "16px" },
    { property: "Border Radius (곡률)", default: "16px", medium: "12px", small: "8px" },
    { property: "Padding V (상하 여백)", default: "16px", medium: "14px", small: "8px" },
    { property: "Padding H (좌우 여백)", default: "20px", medium: "12px", small: "8px" },
  ];

  // 2. 스타일 변경을 위해 제어하는 시맨틱(Semantic) 토큰 데이터
  const stylingTokens = [
    { name: "--primary", desc: "버튼의 주조색 (Main Background)", ref: "blue-500" },
    { name: "--primary-hover", desc: "마우스 호버 시 배경색", ref: "blue-600" },
    { name: "--primary-foreground", desc: "버튼 내부 글자 및 아이콘 색상", ref: "white" },
    { name: "--primary-subtle", desc: "Secondary 위계의 연한 배경색", ref: "blue-50" },
    { name: "--destructive", desc: "위험/삭제 상태의 주조색", ref: "red-500" },
    { name: "--radius", desc: "시스템 전체 곡률의 기준점", ref: "8px" },
  ];

  return (
    <div className="space-y-64 pb-120">
      
      {/* 1. Header Section */}
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

      {/* 3. Applied Tokens Section: 원자 단위 수치 명세 */}
      <section className="space-y-24">
        <div className="space-y-8">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Applied Tokens</h2>
            <p className="fs-16 text-integra-gray-500">각 사이즈 규격에 적용된 Integra UI 아토믹 원자들의 상세 수치입니다.</p>
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
                        <tr key={atom.property} className="hover:bg-integra-gray-50/50">
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

      {/* 4. Styling Tokens Section: 시맨틱 제어 가이드 */}
      <section className="space-y-24">
        <div className="space-y-8">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Styling Tokens</h2>
            <p className="fs-16 text-integra-gray-500">버튼의 시각적 스타일을 커스텀하기 위해 <code>globals.css</code>에서 제어하는 시맨틱 토큰 리스트입니다.</p>
        </div>
        <div className="rounded-12 border border-integra-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
                <thead className="bg-integra-gray-50 border-b border-integra-gray-200">
                    <tr className="fs-12 font-bold text-integra-gray-400">
                        <th className="px-24 py-16">Token Name</th>
                        <th className="px-24 py-16">Description</th>
                        <th className="px-24 py-16">Default Value</th>
                    </tr>
                </thead>
                <tbody className="divide-y border-integra-gray-100 fs-14">
                    {stylingTokens.map((token) => (
                        <tr key={token.name} className="hover:bg-integra-gray-50/50">
                            <td className="px-24 py-16 font-mono font-bold text-primary">{token.name}</td>
                            <td className="px-24 py-16 text-integra-gray-700">{token.desc}</td>
                            <td className="px-24 py-16 text-integra-gray-400 italic">var(--{token.ref})</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </section>

      {/* 5. Atomic Design Note */}
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

      {/* 6. Usage */}
      <section className="space-y-16">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <div className="rounded-12 bg-integra-gray-900 p-24 overflow-x-auto font-mono fs-14 leading-24 shadow-2xl text-white">
            <code className="block">import &#123; Button &#125; from "@/components/ui/button"</code>
        </div>
      </section>

    </div>
  );
}