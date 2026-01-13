import { BadgeDemo } from "@/components/demo/badge-demo";
import { Badge } from "@/components/ui/badge";

export default function BadgeDocsPage() {
  return (
    <div className="space-y-48 pb-80">
      <div className="space-y-16">
        <div className="flex items-center gap-8 text-12 text-integra-gray-700">
            <span>Components</span>
            <span>/</span>
            <span className="font-bold">Badge</span>
        </div>
        <h1 className="text-40 font-bold leading-48 tracking--4">Badge</h1>
        <p className="text-20 text-muted-foreground leading-32 tracking--1 max-w-600">
          상태, 카테고리, 태그 등을 시각적으로 강조하여 표시합니다. 텍스트 흐름을 방해하지 않는 정교한 크기로 설계되었습니다.
        </p>
      </div>
      <hr className="border-slate-100" />
      <section className="space-y-16">
        <h2 className="text-24 font-bold tracking--2 leading-32">Playground</h2>
        <BadgeDemo />
      </section>
      <section className="space-y-16 p-32 bg-slate-50 rounded-16 border border-slate-100">
        <h2 className="text-20 font-bold leading-24 tracking--1">Atomic Design Note</h2>
        <div className="space-y-12 text-15 text-slate-600 leading-24 tracking--1">
            <p>Integra UI의 뱃지는 정보의 중요도에 따라 4가지 원자적 변형을 제공합니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Padding:</strong> 가로 8px, 세로 4px의 정밀한 여백을 가집니다.</li>
                <li><strong>Typography:</strong> 가독성을 고려한 12px 폰트와 16px 행간을 사용합니다.</li>
                <li><strong>Radius:</strong> <code>rounded-full</code> 토큰을 사용하여 완전한 곡면을 가집니다.</li>
            </ul>
        </div>
      </section>
      <section className="space-y-16">
        <h2 className="text-24 font-bold tracking--2 leading-32">Usage</h2>
        <div className="rounded-8 bg-slate-950 p-20 overflow-x-auto font-mono text-14 leading-24 text-white">
            &lt;Badge variant="default"&gt;Badge&lt;/Badge&gt;
        </div>
      </section>
    </div>
  );
}