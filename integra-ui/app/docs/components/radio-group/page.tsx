import { RadioGroupDemo } from "@/components/demo/radio-group-demo";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export default function RadioGroupDocsPage() {
  const designTokens = [
    { property: "Size (크기)", class: "w-{px} h-{px}", value: "w-16 h-16 (16px)" },
    { property: "Thumb Size (내부 원)", class: "h-{px} w-{px}", value: "h-8 w-8" },
    { property: "Radius (곡률)", class: "rounded-{px}", value: "rounded-full" },
    { property: "Border Color (기본)", class: "border-{token}", value: "border-integra-gray-200" },
    { property: "Checked Color", class: "data-[state=checked]:bg-{token}", value: "bg-primary" },
  ];

  return (
    <div className="space-y-64 pb-120">
      
      {/* 1. 헤더 섹션 */}
      <div className="space-y-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/docs/components">Components</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbPage>Radio Group</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">Radio Group</h1>
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          다중 선택지 중 **단 하나**만 선택해야 할 때 사용합니다.<br />
          체크박스보다 명확한 상호 배타적 선택을 제공하는 폼 컨트롤입니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 인터랙티브 플레이그라운드 */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500 font-medium">Interactive</Badge>
        </div>
        <RadioGroupDemo />
      </section>

      {/* 3. 디자인 토큰 섹션: 수치와 클래스의 1:1 매칭 명세 */}
      <section className="space-y-24">
        <div className="space-y-8">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">디자인 토큰</h2>
            <p className="fs-16 text-integra-gray-500">라디오 그룹의 정밀한 조형과 상태 변화를 결정하는 아토믹 클래스 명세입니다.</p>
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
                <li><strong>Aspect Ratio:</strong> 컨트롤 박스는 항상 정원형(aspect-square)을 유지하여 시각적 안정성을 확보합니다.</li>
                <li><strong>Click Target:</strong> 전체 항목(라벨 포함)은 48px 높이의 명확한 터치 타겟 영역을 가집니다.</li>
                <li><strong>State Color:</strong> 선택 시 `bg-primary`로 즉시 전환되어 명확한 피드백을 주며, 비활성 시에는 테두리가 약화됩니다.</li>
            </ul>
        </div>
      </section>
    </div>
  );
}