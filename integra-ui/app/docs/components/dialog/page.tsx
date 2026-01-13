import { DialogDemo } from "@/components/demo/dialog-demo";
import { Badge } from "@/components/ui/badge";

export default function DialogDocsPage() {
  return (
    <div className="space-y-48 pb-80">
      <div className="space-y-16">
        <div className="flex items-center gap-8 font-mono text-12 text-primary">
            <span>Components</span>
            <span>/</span>
            <span className="font-bold">Dialog</span>
        </div>
        <h1 className="text-40 font-bold leading-48 tracking--4">Dialog (Modal)</h1>
        <p className="text-20 text-muted-foreground leading-32 tracking--1 max-w-600">
          사용자의 집중이 필요한 중요한 작업을 수행하거나 정보를 표시할 때 사용하는 오버레이 컴포넌트입니다.
        </p>
      </div>

      <hr className="border-slate-100" />

      <section className="space-y-16">
        <h2 className="text-24 font-bold tracking--2 leading-32">Playground</h2>
        <DialogDemo />
      </section>

      <section className="space-y-16 p-32 bg-slate-50 rounded-16 border border-slate-100">
        <h2 className="text-20 font-bold leading-24 tracking--1">Atomic Design Note</h2>
        <div className="space-y-12 text-15 text-slate-600 leading-24 tracking--1">
            <p>Integra UI의 다이얼로그는 카드 및 다른 인풋 요소와 원자적 정렬을 공유합니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Width:</strong> 기본 400px(max-w-400)로 설정되어 최적의 가독성 범위를 유지합니다.</li>
                <li><strong>Spacing:</strong> 내부 패딩 24px(p-24)과 요소 간 간격 16px(gap-16)을 사용합니다.</li>
                <li><strong>Radius:</strong> 16px(rounded-16)을 적용하여 부드럽고 안정적인 인상을 줍니다.</li>
            </ul>
        </div>
      </section>
    </div>
  );
}