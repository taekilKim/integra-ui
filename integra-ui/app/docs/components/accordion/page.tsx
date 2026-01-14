import { AccordionDemo } from "@/components/demo/accordion-demo";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function AccordionDocsPage() {
  return (
    <div className="space-y-48 pb-80">
      
      {/* 1. 헤더 섹션: 표준 Breadcrumb 컴포넌트 및 정화된 타이포 적용 */}
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
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900">Accordion</h1>
        <p className="fs-20 text-integra-gray-500 leading-32">
          좁은 공간에 많은 정보를 담거나<br />
          자주 묻는 질문(FAQ)처럼 정보를 계층적으로 노출할 때 유용합니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 인터랙티브 플레이그라운드: 표준 카드 규격 반영 (데모 내부에서 제어) */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500">Interactive</Badge>
        </div>
        
        <AccordionDemo />
      </section>

      {/* 3. 아토믹 설계 원리 설명: bg-integra-gray-50 및 fs- 접두사 적용 */}
      <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
        <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
        <div className="space-y-12 fs-15 text-integra-gray-600 leading-24 tracking--1">
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Padding:</strong> 트리거 영역은 상하 16px(py-16)의 충분한 클릭 영역을 확보합니다.</li>
                <li><strong>Animation:</strong> Radix UI의 가속도 곡선을 활용하여 부드러운 펼침 효과를 제공합니다.</li>
                <li><strong>Typography:</strong> 질문은 16px Bold, 답변은 14px Regular 스타일을 사용합니다.</li>
            </ul>
        </div>
      </section>

      {/* 4. 사용법: bg-integra-gray-900 및 표준 코드 스타일 적용 */}
      <section className="space-y-16">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <div className="rounded-8 bg-integra-gray-900 p-20 overflow-x-auto font-mono fs-14 leading-24 text-white">
            <p className="text-integra-gray-500 mb-8">// Import the component</p>
            <p className="text-blue-400">import &#123; Accordion, AccordionItem, AccordionTrigger, AccordionContent &#125; from "@/components/ui/accordion"</p>
            <br />
            <p className="text-integra-gray-500 mb-8">// Basic usage</p>
            <p className="text-white">&lt;Accordion type="single" collapsible&gt;...&lt;/Accordion&gt;</p>
        </div>
      </section>

    </div>
  );
}