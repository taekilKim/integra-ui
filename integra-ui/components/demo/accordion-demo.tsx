"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"

export function AccordionDemo() {
  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-800 mx-auto border border-slate-200 shadow-integra rounded-16">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>아토믹 디자인 시스템이란 무엇인가요?</AccordionTrigger>
          <AccordionContent>
            디자인 요소를 원자(Atoms), 분자(Molecules), 유기체(Organisms) 단위로 나누어 관리하는 설계 방법론입니다. 
            Integra UI는 특히 원자 단위의 수치 토큰 제어에 집중합니다.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>4px 그리드를 사용하는 이유가 있나요?</AccordionTrigger>
          <AccordionContent>
            4px은 디지털 화면에서 가장 안정적인 배수 단위입니다. 8, 16, 24, 32 등 모든 수치가 정수로 떨어져 
            어떤 해상도에서도 깨짐 없는 정교한 렌더링이 가능합니다.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  )
}