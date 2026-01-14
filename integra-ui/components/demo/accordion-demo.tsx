"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"

export function AccordionDemo() {
  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-960 mx-auto border border-integra-gray-200 shadow-integra rounded-16 bg-white">
      {/* 프리뷰 영역: bg-integra-gray-50 적용 */}
      <div className="min-h-160 flex items-center justify-center rounded-12 border border-integra-gray-200 bg-integra-gray-50 border-dashed p-24 md:p-40">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>아토믹 디자인 시스템이란 무엇인가요?</AccordionTrigger>
            <AccordionContent>
              디자인 요소를 원자(Atoms), 분자(Molecules), 유기체(Organisms) 단위로 나누어 관리하는 설계 방법론입니다.<br />
              Integra UI는 특히 원자 단위의 수치 토큰 제어에 집중하여 소수점 없는 정밀한 구현을 지원합니다.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>4px 그리드를 사용하는 이유가 있나요?</AccordionTrigger>
            <AccordionContent>
              4px은 디지털 화면에서 가장 안정적인 배수 단위입니다. 8, 16, 24, 32 등 모든 수치가 정수로 떨어져<br />
              어떤 해상도에서도 깨짐 없는 정교한 렌더링이 가능하며 시각적 수직 리듬을 형성합니다.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* 코드 Output */}
      <div className="rounded-8 bg-integra-gray-900 p-20 overflow-x-auto font-mono fs-14 leading-24 text-white">
        <p className="text-integra-gray-500 mb-8">// Atomic Accordion</p>
        <code className="block">
          &lt;Accordion type="single" collapsible&gt;<br />
          &nbsp;&nbsp;&lt;AccordionItem value="1"&gt;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;AccordionTrigger&gt;Title&lt;/AccordionTrigger&gt;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;AccordionContent&gt;Content&lt;/AccordionContent&gt;<br />
          &nbsp;&nbsp;&lt;/AccordionItem&gt;<br />
          &lt;/Accordion&gt;
        </code>
      </div>
    </Card>
  )
}