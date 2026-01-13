import { SwitchDemo } from "@/components/demo/switch-demo";
import { Badge } from "@/components/ui/badge";

export default function SwitchDocsPage() {
  return (
    <div className="space-y-48 pb-80">
      <div className="space-y-16">
        <div className="flex items-center gap-8 text-12 text-integra-gray-700">
            <span>Components</span>
            <span>/</span>
            <span className="font-bold">Switch</span>
        </div>
        <h1 className="text-40 font-bold leading-48 tracking--4">Switch</h1>
        <p className="text-20 text-muted-foreground leading-32 tracking--1 max-w-600">
          단일 옵션의 켜짐(On)과 꺼짐(Off) 상태를 즉각적으로 전환합니다. 체크박스보다 직관적인 UI 경험을 제공합니다.
        </p>
      </div>
      <hr className="border-slate-100" />
      <section className="space-y-16">
        <h2 className="text-24 font-bold tracking--2 leading-32">Playground</h2>
        <SwitchDemo />
      </section>
      <section className="space-y-16 p-32 bg-slate-50 rounded-16 border border-slate-100">
        <h2 className="text-20 font-bold leading-24 tracking--1">Atomic Design Note</h2>
        <div className="space-y-12 text-15 text-slate-600 leading-24 tracking--1">
            <p>스위치는 촉각적인 피드백을 시각화한 컴포넌트입니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Geometry:</strong> 44px 너비와 24px 높이로 모바일 터치 타겟을 충족합니다.</li>
                <li><strong>Thumb:</strong> 20px 크기의 원형 토큰이 부드러운 애니메이션과 함께 이동합니다.</li>
                <li><strong>Color:</strong> 활성화 상태에서 브랜드 컬러(Primary)를 사용하여 명확한 상태를 전달합니다.</li>
            </ul>
        </div>
      </section>
    </div>
  );
}