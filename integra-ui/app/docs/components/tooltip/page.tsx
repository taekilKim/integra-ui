import { TooltipDemo } from "@/components/demo/tooltip-demo"

export default function TooltipDocsPage() {
  return (
    <div className="space-y-48 pb-80">
      <div className="space-y-16">
        <div className="flex items-center gap-8 text-12 text-integra-gray-700">
            <span>Components</span>
            <span>/</span>
            <span className="font-bold">Tooltip</span>
        </div>
        <h1 className="text-40 font-bold leading-48 tracking--4">Tooltip</h1>
        <p className="text-20 text-muted-foreground leading-32 tracking--1 max-w-600">
          사용자에게 정보에 대한 미세한 힌트나 보조 설명을 제공하는 작은 팝업창입니다.
        </p>
      </div>
      <hr />
      <section className="space-y-16">
        <h2 className="text-24 font-bold tracking--2 leading-32">Playground</h2>
        <TooltipDemo />
      </section>
      <section className="space-y-16 p-32 bg-slate-50 rounded-16 border border-slate-100">
        <h2 className="text-20 font-bold leading-24 tracking--1">Atomic Design Note</h2>
        <div className="space-y-12 text-15 text-slate-600 leading-24 tracking--1">
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Padding:</strong> 가로 12px, 세로 4px의 정교한 텍스트 여백을 가집니다.</li>
                <li><strong>Radius:</strong> 4px(rounded-4)의 작고 예리한 곡률을 사용하여 메인 UI와 구분합니다.</li>
                <li><strong>Color:</strong> 시선을 분산시키지 않도록 진한 다크 배경(Slate-900)을 사용합니다.</li>
            </ul>
        </div>
      </section>
    </div>
  )
}