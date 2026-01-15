import { AccordionDemo } from "@/components/demo/accordion-demo";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export default function AccordionDocsPage() {
  // 1. 어코디언 전용 디자인 토큰 데이터
  const designTokens = [
    { property: "Trigger Height (항목 높이)", class: "h-{px}", value: "h-56" },
    { property: "Trigger Font Size (제목)", class: "fs-{px}", value: "fs-16" },
    { property: "Content Font Size (본문)", class: "fs-{px}", value: "fs-14" },
    { property: "Content Line Height (행간)", class: "leading-{px}", value: "leading-24" },
    { property: "Item Padding V (상하 여백)", class: "py-{px}", value: "py-16" },
    { property: "Border Color (구분선)", class: "border-{token}", value: "border-integra-gray-100" },
  ];

  return (
    <div className="space-y-64 pb-120">
      
      {/* 1. 헤더 섹션: 표준 규격 및 SAI 타이포그래피 */}
      <div className="space-y-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Accordion</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">Accordion</h1>
        <p className="fs-20 text-integra-gray-500 leading-32">
          좁은 공간에 많은 정보를 담거나<br />
          자주 묻는 질문(FAQ)처럼 정보를 계층적으로 노출할 때 유용합니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 인터랙티브 플레이그라운드 */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500">Interactive</Badge>
        </div>
        
        <AccordionDemo />
      </section>

      {/* 3. 디자인 토큰 섹션: 신규 추가 */}
      <section className="space-y-24">
        <div className="space-y-8">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">디자인 토큰</h2>
            <p className="fs-16 text-integra-gray-500">어코디언의 시각적 위계를 결정하는 아토믹 클래스와 수치 명세입니다.</p>
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

      {/* 4. 아토믹 설계 원리 설명: 정화된 토큰 적용 */}
      <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
        <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
        <div className="space-y-12 fs-15 text-integra-gray-600 leading-24 tracking--1">
            <p>어코디언은 정보의 밀도와 펼침 애니메이션의 조화를 원자적으로 제어합니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Padding:</strong> 트리거 영역은 상하 16px(py-16)의 여백을 가져 56px의 안정적인 터치 영역을 형성합니다.</li>
                <li><strong>Typography:</strong> 질문(Trigger)은 16px Bold로 강조하고, 답변(Content)은 14px Regular로 위계를 분리합니다.</li>
                <li><strong>Line Height:</strong> 본문의 가독성을 위해 1.7배에 가까운 24px(leading-24) 행간을 엄격히 적용합니다.</li>
            </ul>
        </div>
      </section>

      {/* 5. 사용법 */}
      <section className="space-y-16">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <div className="rounded-12 bg-integra-gray-900 p-24 overflow-x-auto font-mono fs-14 leading-24 shadow-2xl text-white">
            <p className="text-integra-gray-500 mb-8">// Import components</p>
            <p className="text-integra-blue-400">import &#123; Accordion, AccordionItem, AccordionTrigger, AccordionContent &#125; from "@/components/ui/accordion"</p>
        </div>
      </section>

    </div>
  );
}