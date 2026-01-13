import { CheckboxDemo } from "@/components/demo/checkbox-demo";
import { Badge } from "@/components/ui/badge";

export default function CheckboxDocsPage() {
  return (
    <div className="space-y-48 pb-80">
      <div className="space-y-16">
        <div className="flex items-center gap-8 font-mono text-12 text-primary">
            <span>Components</span>
            <span>/</span>
            <span className="font-bold">Checkbox</span>
        </div>
        <h1 className="text-40 font-bold leading-48 tracking--4">Checkbox</h1>
        <p className="text-20 text-muted-foreground leading-32 tracking--1 max-w-600">
          사용자가 여러 옵션 중 하나 이상을 선택할 수 있는 제어 요소입니다. 라벨과 결합하여 직관적인 폼을 구성합니다.
        </p>
      </div>
      <hr className="border-slate-100" />
      <section className="space-y-16">
        <h2 className="text-24 font-bold tracking--2 leading-32">Playground</h2>
        <CheckboxDemo />
      </section>
      <section className="space-y-16 p-32 bg-slate-50 rounded-16 border border-slate-100">
        <h2 className="text-20 font-bold leading-24 tracking--1">Atomic Design Note</h2>
        <div className="space-y-12 text-15 text-slate-600 leading-24 tracking--1">
            <p>Integra UI의 체크박스는 4px 그리드 시스템에 맞춰 시각적 균형을 유지합니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Size:</strong> 16px x 16px 정정사각형 크기로 설계되었습니다.</li>
                <li><strong>Radius:</strong> 4px(rounded-4)의 곡률을 가져 버튼(8px)보다 예리한 느낌을 줍니다.</li>
                <li><strong>Interaction:</strong> <code>peer</code> 클래스를 활용하여 라벨과의 상태 동기화를 지원합니다.</li>
            </ul>
        </div>
      </section>
      <section className="space-y-16">
        <h2 className="text-24 font-bold tracking--2 leading-32">Usage</h2>
        <div className="rounded-8 bg-slate-950 p-20 overflow-x-auto font-mono text-14 leading-24 text-white">
            &lt;Checkbox id="terms" /&gt;
        </div>
      </section>
    </div>
  );
}