import { PopoverDemo } from "@/components/demo/popover-demo"

export default function PopoverDocsPage() {
  return (
    <div className="space-y-48 pb-80">
      <div className="space-y-16">
        <div className="flex items-center gap-8 text-12 text-integra-gray-700">
            <span>Components</span>
            <span>/</span>
            <span className="font-bold">Popover</span>
        </div>
        <h1 className="text-40 font-bold leading-48 tracking--4">Popover</h1>
        <p className="text-20 text-muted-foreground leading-32 tracking--1 max-w-600">
          특정 요소에 대해 상세한 컨트롤이나 부가 정보를 제공할 때 사용하는 강력한 레이어 시스템입니다.
        </p>
      </div>
      <hr />
      <section className="space-y-16">
        <h2 className="text-24 font-bold tracking--2 leading-32">Playground</h2>
        <PopoverDemo />
      </section>
      <section className="space-y-16 p-32 bg-slate-50 rounded-16 border border-slate-100">
        <h2 className="text-20 font-bold leading-24 tracking--1">Atomic Design Note</h2>
        <div className="space-y-12 text-15 text-slate-600 leading-24 tracking--1">
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Layout:</strong> 기본 280px(w-280) 너비를 가지며, 내부 요소를 정렬하는 <code>grid</code>를 활용합니다.</li>
                <li><strong>Shadow:</strong> Integra 고유의 <code>shadow-integra</code>를 적용하여 깊이 있는 레이어를 형성합니다.</li>
                <li><strong>Radius:</strong> 12px(rounded-12) 곡률을 사용하여 세련된 카드 스타일을 유지합니다.</li>
            </ul>
        </div>
      </section>
    </div>
  )
}