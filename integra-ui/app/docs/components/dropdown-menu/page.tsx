import { DropdownMenuDemo } from "@/components/demo/dropdown-menu-demo";
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
 * [Integra UI - Dropdown Menu Document SAI Version]
 * 액션 목록을 제공하는 오버레이 컴포넌트 문서입니다.
 */
export default function DropdownMenuDocsPage() {
  // 1. 드롭다운 메뉴 전용 디자인 토큰 데이터
  const designTokens = [
    { property: "Content Min Width", class: "min-w-{px}", value: "min-w-160" },
    { property: "Content Padding", class: "p-{px}", value: "p-4" },
    { property: "Content Radius", class: "rounded-{px}", value: "rounded-8" },
    { property: "Item Height", class: "h-{px}", value: "h-32 (Item-menu)" },
    { property: "Item Font Size", class: "fs-{px}", value: "fs-14 (Item-menu)" },
    { property: "Shortcut Font Size", class: "fs-{px}", value: "fs-12" },
  ];

  const codeSnippet = `import { DropdownMenu, DropdownMenuTrigger, ... } from "@/components/ui/dropdown-menu"

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`;

  return (
    <div className="space-y-64 pb-120">
      
      {/* 1. 헤더 섹션 */}
      <div className="space-y-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/docs/components">Components</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbPage>Dropdown Menu</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">Dropdown Menu</h1>
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          사용자가 선택할 수 있는 액션 목록을 표시하는 오버레이 컴포-넌트입니다.<br />
          Select와 달리 '명령 실행'에 초점을 맞추어 설계되었습니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 플레이그라운드 */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500 font-medium">Interactive</Badge>
        </div>
        <DropdownMenuDemo />
      </section>

      {/* 3. 디자인 토큰 섹션 */}
      <section className="space-y-24">
        <div className="space-y-8">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">디자인 토큰</h2>
            <p className="fs-16 text-integra-gray-500">드롭다운 메뉴의 레이아웃과 타이포그래피를 결정하는 아토믹 클래스 명세입니다.</p>
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
                            <td className="px-24 py-16 font-mono text-integra-blue-600 font-bold">.{token.class}</td>
                            <td className="px-24 py-16 font-mono text-integra-gray-900">{token.value}</td>
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
            <li><strong>Molecule Inheritance (분자 상속):</strong> <code>DropdownMenuItem</code>은 <code>Item</code> 컴포-넌트의 <code>ghost</code>, <code>menu</code> 스타일을 상속받아 시스템 전체의 시각적 일관성을 유지합니다.</li>
            <li><strong>Visual Hierarchy:</strong> 메뉴 제목(<code>Label</code>)은 <code>fs-12</code> + <code>font-bold</code> 토큰을, 단축키(<code>Shortcut</code>)는 <code>fs-12</code> + <code>gray-400</code> 토큰을 사용하여 정보의 위계를 명확히 구분합니다.</li>
            <li><strong>Contextual Layer:</strong> 드롭다운 메뉴(<code>Content</code>)는 <code>shadow-integra</code>와 <code>rounded-8</code> 토큰을 통해 본문과 분리된 부유형 레이어임을 시각화합니다.</li>
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