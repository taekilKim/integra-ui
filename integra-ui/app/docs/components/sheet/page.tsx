import { SheetDemo } from "@/components/demo/sheet-demo";
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
 * [Integra UI - Sheet Document SAI Version]
 * 화면 측면에서 등장하는 오버레이 패널 컴포넌트 문서입니다.
 */
export default function SheetDocsPage() {
  // 1. 시트 전용 디자인 토큰 데이터
  const designTokens = [
    { property: "Max Width (Desktop)", class: "sm:max-w-400", value: "400px" },
    { property: "Padding (내부 여백)", class: "p-{px}", value: "p-24" },
    { property: "Z-Index (레이어 순서)", class: "z-{value}", value: "z-50" },
    { property: "Animation Duration", class: "duration-{ms}", value: "500ms (In) / 300ms (Out)" },
    { property: "Overlay Color", class: "bg-black/50", value: "50% Opacity" },
    { property: "Title Font Size", class: "fs-{px}", value: "fs-20" },
  ];

  // 2. Usage 코드 스니펫
  const codeSnippet = `import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Edit profile</SheetTitle>
      <SheetDescription>
        Make changes to your profile here.
      </SheetDescription>
    </SheetHeader>
    {/* Content goes here */}
  </SheetContent>
</Sheet>`;

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
              <BreadcrumbPage>Sheet</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">
          Sheet
        </h1>
        
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          화면의 가장자리에서 나타나는 보조 패널(Sidebar/Panel)입니다.<br />
          데스크탑에서는 사이드바 메뉴나 설정창으로, 모바일에서는 하단 고정 시트로 활용됩니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 인터랙티브 플레이그라운드 */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500 font-medium">Interactive</Badge>
        </div>
        <SheetDemo />
      </section>

      {/* 3. 디자인 토큰 섹션 */}
      <section className="space-y-24">
        <div className="space-y-8">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">디자인 토큰</h2>
            <p className="fs-16 text-integra-gray-500">Sheet의 레이아웃과 애니메이션을 결정하는 아토믹 클래스 명세입니다.</p>
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

      {/* 4. 아토믹 설계 원리 설명 */}
      <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
        <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
        <div className="space-y-12 fs-15 text-integra-gray-600 leading-24 tracking--1">
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Directional Control:</strong> <code>side</code> 프로퍼티(top, bottom, left, right) 하나로 모든 방향의 패널 레이아웃에 대응합니다.</li>
                <li><strong>Consistent Padding:</strong> 내부 콘텐츠는 카드/다이얼로그와 동일한 24px(p-24) 여백을 사용하여 시스템 일관성을 유지합니다.</li>
                <li><strong>Context Distinction:</strong> Sheet는 '고정된 패널'을 지향합니다. 제스처 기반의 물리적 상호작용이 필요한 경우, 추후 제공될 Drawer 컴포넌트를 권장합니다.</li>
            </ul>
        </div>
      </section>

      {/* 5. 사용법 */}
      <section className="space-y-24">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <CodeBlock code={codeSnippet} />
      </section>

    </div>
  );
}