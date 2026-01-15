import { SelectDemo } from "@/components/demo/select-demo";
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
 * [Integra UI - Select Document SAI Version]
 * 목록 중 하나의 값을 선택하는 표준 드롭다운 컴포넌트 문서입니다.
 * 고도화된 CodeBlock을 통해 정교한 조립법을 안내합니다.
 */
export default function SelectDocsPage() {
  // 1. 셀렉트 전용 디자인 토큰 데이터
  const designTokens = [
    { property: "Trigger Height (높이)", class: "h-40", value: "40px" },
    { property: "Font Size (글자 크기)", class: "fs-14", value: "14px" },
    { property: "Border Radius (곡률)", class: "rounded-8", value: "8px" },
    { property: "Trigger Padding (내부 여백)", class: "px-12 py-8", value: "12px / 8px" },
    { property: "Content Shadow (그림자)", class: "shadow-integra", value: "SAI Soft Shadow" },
    { property: "Item Padding (항목 여백)", class: "pl-32 pr-8 py-8", value: "32px / 8px / 8px" },
  ];

  // 2. 코드 스니펫 정의
  const importCode = `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"`;

  const usageCode = `<Select>
  <SelectTrigger className="w-180">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>`;

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
              <BreadcrumbPage>Select</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">
          Select
        </h1>
        
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          사용자가 목록에서 하나의 값을 선택할 수 있게 해주는 드롭다운 컴포넌트입니다.<br />
          Radix UI의 견고한 로직 위에 Integra UI의 수치 토큰을 입혀 정교한 조작감을 제공합니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 인터랙티브 플레이그라운드 */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500 font-medium">Interactive</Badge>
        </div>
        <SelectDemo />
      </section>

      {/* 3. 디자인 토큰 섹션: 수치와 클래스의 1:1 매칭 명세 */}
      <section className="space-y-24">
        <div className="space-y-8">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">디자인 토큰</h2>
            <p className="fs-16 text-integra-gray-500">셀렉트의 레이어 구조를 결정하는 아토믹 클래스와 실제 수치 명세입니다.</p>
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
            <p>셀렉트는 다층 레이어 구조(Trigger & Content)를 원자적으로 관리합니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Elevation Layer:</strong> 드롭다운 메뉴는 <code>shadow-integra</code> 토큰을 사용하여 본문보다 상위에 있음을 시각화합니다.</li>
                <li><strong>Radius Consistency:</strong> 트리거와 메뉴 박스 모두 8px(rounded-8) 곡률을 사용하여 인풋 시스템과 일체감을 유지합니다.</li>
                <li><strong>Optical Alignment:</strong> 리스트 아이템은 왼쪽 32px(pl-32) 여백을 확보하여 체크 아이콘 노출 시에도 텍스트 정렬이 깨지지 않도록 설계되었습니다.</li>
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