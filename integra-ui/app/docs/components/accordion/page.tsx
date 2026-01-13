import { AccordionDemo } from "@/components/demo/accordion-demo";

export default function AccordionDocsPage() {
  return (
    <div className="space-y-48 pb-80">
      <div className="space-y-16">
        <div className="flex items-center gap-8 font-mono text-12 text-primary">
            <span>Components</span>
            <span>/</span>
            <span className="font-bold">Accordion</span>
        </div>
        <h1 className="text-40 font-bold leading-48 tracking--4">Accordion</h1>
        <p className="text-20 text-muted-foreground leading-32 tracking--1 max-w-600">
          좁은 공간에 많은 정보를 담거나, 자주 묻는 질문(FAQ)처럼 정보를 계층적으로 노출할 때 유용합니다.
        </p>
      </div>
      <hr />
      <section className="space-y-16">
        <h2 className="text-24 font-bold tracking--2 leading-32">Playground</h2>
        <AccordionDemo />
      </section>
      <section className="space-y-16 p-32 bg-slate-50 rounded-16 border border-slate-100">
        <h2 className="text-20 font-bold leading-24 tracking--1">Atomic Design Note</h2>
        <div className="space-y-12 text-15 text-slate-600 leading-24 tracking--1">
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Padding:</strong> 트리거 영역은 상하 16px(py-16)의 충분한 클릭 영역을 확보합니다.</li>
                <li><strong>Animation:</strong> Radix UI의 가속도 곡선을 활용하여 부드러운 펼침 효과를 제공합니다.</li>
                <li><strong>Typography:</strong> 질문은 16px Bold, 답변은 14px Regular 스타일을 사용합니다.</li>
            </ul>
        </div>
      </section>
    </div>
  );
}