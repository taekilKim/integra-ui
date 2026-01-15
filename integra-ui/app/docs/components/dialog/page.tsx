import { DialogDemo } from "@/components/demo/dialog-demo";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/layout/code-block"; // ✨ 추가
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

/**
 * [Integra UI - Dialog Document SAI Version]
 * 화면 위에 레이어를 띄워 중요한 정보를 전달하거나 상호작용을 유도하는 오버레이 문서입니다.
 * 고도화된 CodeBlock을 통해 정교한 조립법을 안내합니다.
 */
export default function DialogDocsPage() {
  // 1. 다이얼로그 전용 디자인 토큰 데이터
  const designTokens = [
    { property: "Max Width (최대 너비)", class: "max-w-400", value: "400px" },
    { property: "Padding (내부 여백)", class: "p-24", value: "24px" },
    { property: "Element Gap (요소 간격)", class: "gap-16", value: "16px" },
    { property: "Border Radius (곡률)", class: "rounded-16", value: "16px" },
    { property: "Title Font Size (제목)", class: "fs-20", value: "20px" },
    { property: "Description Font Size (설명)", class: "fs-14", value: "14px" },
  ];

  // 2. 코드 스니펫 정의
  const importCode = `import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"`;

  const usageCode = `<Dialog>
  <DialogTrigger asChild>
    <Button variant="default">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="tertiary">Cancel</Button>
      <Button appearance="destructive">Continue</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`;

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
              <BreadcrumbPage>Dialog</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">
          Dialog (Modal)
        </h1>
        
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          사용자의 집중이 필요한 중요한 작업을 수행하거나 정보를 표시할 때 사용하는 오버레이 컴포넌트입니다.<br />
          화면의 흐름을 명확히 제어하며 아토믹 토큰의 정밀한 정렬을 공유합니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 인터랙티브 플레이그라운드 */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500 font-medium">Interactive</Badge>
        </div>
        <DialogDemo />
      </section>

      {/* 3. 디자인 토큰 섹션: 수치와 클래스의 1:1 매칭 명세 */}
      <section className="space-y-24">
        <div className="space-y-8">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">디자인 토큰</h2>
            <p className="fs-16 text-integra-gray-500">다이얼로그의 안정적인 비례를 결정하는 아토믹 클래스와 실제 수치 명세입니다.</p>
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

      {/* 4. 아토믹 설계 원리 설명: bg-integra-gray-50 적용 */}
      <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
        <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
        <div className="space-y-12 fs-15 text-integra-gray-600 leading-24 tracking--1">
            <p>다이얼로그는 시각적 집중도와 레이어의 위계를 원자 단위로 관리합니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Width Constraint:</strong> 기본 400px(max-w-400)로 제한하여 정보 전달의 효율성과 가독성 범위를 확보합니다.</li>
                <li><strong>Spacing System:</strong> 카드 시스템과 동일한 24px(p-24) 여백을 사용하여 조형적 통일성을 유지합니다.</li>
                <li><strong>Depth Vision:</strong> 16px(rounded-16) 곡률과 <code>shadow-integra</code> 토큰을 통해 본문과 분리된 명확한 레이어를 형성합니다.</li>
            </ul>
        </div>
      </section>

      {/* 5. 사용법: CodeBlock 적용 */}
      <section className="space-y-24">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <div className="space-y-16">
          <p className="fs-14 text-integra-gray-500 font-medium tracking-1 uppercase">1. Import Components</p>
          <CodeBlock code={importCode} />
          
          <p className="fs-14 text-integra-gray-500 font-medium tracking-1 uppercase mt-32">2. Usage Example</p>
          <CodeBlock code={usageCode} />
        </div>
      </section>

    </div>
  );
}