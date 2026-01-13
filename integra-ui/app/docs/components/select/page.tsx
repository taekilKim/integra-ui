import { SelectDemo } from "@/components/demo/select-demo";
import { Badge } from "@/components/ui/badge";

export default function SelectDocsPage() {
  return (
    <div className="space-y-48 pb-80">
      <div className="space-y-16">
        <div className="flex items-center gap-8 text-12 text-integra-gray-700">
            <span>Components</span>
            <span>/</span>
            <span className="font-bold">Select</span>
        </div>
        <h1 className="text-40 font-bold leading-48 tracking--4">Select</h1>
        <p className="text-20 text-muted-foreground leading-32 tracking--1 max-w-600">
          제한된 옵션 목록에서 하나를 선택할 때 사용합니다. Radix UI 기반의 견고한 로직과 Integra UI의 아토믹 스타일이 결합되었습니다.
        </p>
      </div>
      <hr className="border-slate-100" />
      <section className="space-y-16">
        <h2 className="text-24 font-bold tracking--2 leading-32">Playground</h2>
        <SelectDemo />
      </section>
      <section className="space-y-16 p-32 bg-slate-50 rounded-16 border border-slate-100">
        <h2 className="text-20 font-bold leading-24 tracking--1">Atomic Design Note</h2>
        <div className="space-y-12 text-15 text-slate-600 leading-24 tracking--1">
            <p>셀렉트는 다층 레이어 구조(Trigger & Content)를 가집니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Shadow:</strong> 드롭다운 박스는 <code>shadow-integra</code> 토큰을 사용하여 부유감을 줍니다.</li>
                <li><strong>Radius:</strong> 트리거와 콘텐츠 박스 모두 8px 곡률로 통일감을 유지합니다.</li>
                <li><strong>Spacing:</strong> 리스트 아이템 내부 패딩은 가로 32px(체크 아이콘 영역 포함)을 확보합니다.</li>
            </ul>
        </div>
      </section>
    </div>
  );
}