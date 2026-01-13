import { ToastDemo } from "@/components/demo/toast-demo"

export default function ToastDocsPage() {
  return (
    <div className="space-y-48 pb-80">
      <div className="space-y-16">
        <div className="flex items-center gap-8 text-12 text-integra-gray-700">
            <span>Components</span>
            <span>/</span>
            <span className="font-bold">Toast</span>
        </div>
        <h1 className="text-40 font-bold leading-48 tracking--4">Toast</h1>
        <p className="text-20 text-muted-foreground leading-32 tracking--1 max-w-600">
          사용자의 액션에 대한 결과나 피드백을 화면 구석에 잠시 보여주는 알림 시스템입니다.
        </p>
      </div>
      <hr />
      <section className="space-y-16">
        <h2 className="text-24 font-bold tracking--2 leading-32">Playground</h2>
        <ToastDemo />
      </section>
      <section className="space-y-16 p-32 bg-slate-50 rounded-16 border border-slate-100">
        <h2 className="text-20 font-bold leading-24 tracking--1">Atomic Design Note</h2>
        <div className="space-y-12 text-15 text-slate-600 leading-24 tracking--1">
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Placement:</strong> 데스크탑에서는 우측 하단, 모바일에서는 상단에 위치합니다.</li>
                <li><strong>Typography:</strong> 제목은 14px Bold, 설명은 13px Regular 토큰을 사용합니다.</li>
                <li><strong>Radius:</strong> 12px(rounded-12) 곡률을 적용하여 부드러운 레이어 느낌을 줍니다.</li>
            </ul>
        </div>
      </section>
    </div>
  )
}