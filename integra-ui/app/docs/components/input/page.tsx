import { InputDemo } from "@/components/demo/input-demo";
import { Badge } from "@/components/ui/badge";

export default function InputDocsPage() {
  return (
    <div className="space-y-48 pb-80">
      <div className="space-y-16">
        <div className="flex items-center gap-8 font-mono text-12 text-primary">
            <span>Components</span>
            <span>/</span>
            <span className="font-bold">Input</span>
        </div>
        <h1 className="text-40 font-bold leading-48 tracking--4">Input</h1>
        <p className="text-20 text-muted-foreground leading-32 tracking--1 max-w-600">
          텍스트 데이터를 입력받는 가장 기본적인 폼 요소입니다. 다양한 타입과 상태를 4px 그리드 안에서 일관되게 제공합니다.
        </p>
      </div>
      <hr className="border-slate-100" />
      <section className="space-y-16">
        <h2 className="text-24 font-bold tracking--2 leading-32">Playground</h2>
        <InputDemo />
      </section>
      <section className="space-y-16 p-32 bg-slate-50 rounded-16 border border-slate-100">
        <h2 className="text-20 font-bold leading-24 tracking--1">Atomic Design Note</h2>
        <div className="space-y-12 text-15 text-slate-600 leading-24 tracking--1">
            <p>입력창은 버튼과 동일한 수직 리듬을 공유하여 폼 레이아웃의 완성도를 높입니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Height:</strong> 40px 표준 높이를 사용합니다.</li>
                <li><strong>Padding:</strong> 좌우 12px, 상하 8px의 내부 여백을 가집니다.</li>
                <li><strong>Focus:</strong> 브랜드 컬러(Integra Blue)의 링 토큰이 접근성을 보장합니다.</li>
            </ul>
        </div>
      </section>
      <section className="space-y-16">
        <h2 className="text-24 font-bold tracking--2 leading-32">Usage</h2>
        <div className="rounded-8 bg-slate-950 p-20 overflow-x-auto font-mono text-14 leading-24 text-white">
            &lt;Input type="email" placeholder="Email" /&gt;
        </div>
      </section>
    </div>
  );
}