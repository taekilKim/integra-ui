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

/**
 * [Integra UI - Radio Group Document SAI Version]
 * 목록 중 하나의 항목을 선택하는 표준 라디오 컴포넌트 문서입니다.
 */
export default function RadioGroupDocsPage() {
  // 1. 라디오 그룹 전용 디자인 토큰 데이터
  const designTokens = [
    { property: "Item Size (크기)", class: "w-{px} h-{px}", value: "w-16 h-16" },
    { property: "Border Radius (곡률)", class: "rounded-{px}", value: "rounded-full" },
    { property: "Indicator Size (체크 표시)", class: "w-{px} h-{px}", value: "w-10 h-10" },
    { property: "Item Gap (항목 간격)", class: "gap-{px}", value: "gap-8" },
    { property: "Label Font Size (글자)", class: "fs-{px}", value: "fs-14" },
    { property: "Active Color (선택 시)", class: "text-{token}", value: "text-primary" },
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
              <BreadcrumbPage>Radio Group</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">
          Radio Group
        </h1>
        
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          여러 옵션 중에서 사용자가 오직 하나의 항목만 선택해야 할 때 사용합니다.<br />
          아토믹 토큰을 통해 정밀하게 설계된 원형 컨트롤러와 라벨이 유기적으로 결합됩니다.
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
            <p className="fs-16 text-integra-gray-500">라디오 아이템의 기하학적 수치를 결정하는 아토믹 클래스와 실제 명세입니다.</p>
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
            <p>라디오 그룹은 선택의 명확성과 시각적 균형을 위해 원자 단위의 수치 정렬을 수행합니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Geometric Symmetry:</strong> 16px(w-16 h-16) 크기의 원형 원자를 사용하여 체크박스(사각형)와 명확히 대비되는 조형 언어를 가집니다.</li>
                <li><strong>Indicator Logic:</strong> 선택 시 나타나는 내부 점은 10px(w-10 h-10)로 설정되어 테두리와 3px의 안정적인 여백을 유지합니다.</li>
                <li><strong>Spacing Harmony:</strong> 항목 간의 수직 간격은 기본 8px(gap-8)을 사용하여 리스트의 판독성을 높입니다.</li>
            </ul>
        </div>
      </section>

      {/* 5. 사용법: bg-integra-gray-900 적용 */}
      <section className="space-y-16">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <div className="rounded-12 bg-integra-gray-900 p-24 overflow-x-auto font-mono fs-14 leading-24 shadow-2xl text-white">
            <p className="text-integra-gray-500 mb-8">// Import the component</p>
            <p className="text-integra-blue-400">import &#123; RadioGroup, RadioGroupItem &#125; from "@/components/ui/radio-group"</p>
        </div>
      </section>

    </div>
  );
}