import { SkeletonDemo } from "@/components/demo/skeleton-demo"

export default function SkeletonDocsPage() {
  return (
    <div className="space-y-48 pb-80">
      <div className="space-y-16">
        <div className="flex items-center gap-8 font-mono text-12 text-primary">
            <span>Components</span>
            <span>/</span>
            <span className="font-bold">Skeleton</span>
        </div>
        <h1 className="text-40 font-bold leading-48 tracking--4">Skeleton</h1>
        <p className="text-20 text-muted-foreground leading-32 tracking--1 max-w-600">
          실제 콘텐츠가 로드되기 전에 레이아웃의 뼈대를 보여줌으로써 사용자에게 더 빠른 응답성을 느끼게 합니다.
        </p>
      </div>
      <hr />
      <section className="space-y-16">
        <h2 className="text-24 font-bold tracking--2 leading-32">Playground</h2>
        <SkeletonDemo />
      </section>
      <section className="space-y-16 p-32 bg-slate-50 rounded-16 border border-slate-100">
        <h2 className="text-20 font-bold leading-24 tracking--1">Atomic Design Note</h2>
        <div className="space-y-12 text-15 text-slate-600 leading-24 tracking--1">
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Animation:</strong> <code>animate-pulse</code>를 사용하여 부드럽게 점멸하는 효과를 줍니다.</li>
                <li><strong>Color:</strong> <code>bg-slate-100</code>을 기본값으로 하여 정갈한 한국형 로딩 UI를 구현합니다.</li>
                <li><strong>Radius:</strong> 콘텐츠의 형태에 따라 <code>rounded-full</code>이나 <code>rounded-8</code> 등을 조합합니다.</li>
            </ul>
        </div>
      </section>
    </div>
  )
}