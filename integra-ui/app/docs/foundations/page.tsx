export default function FoundationsIntro() {
  return (
    <div className="space-y-48">
      <div className="space-y-16">
        <h1 className="text-40 font-bold leading-48 tracking--4">Foundations 개요</h1>
        <p className="text-20 text-muted-foreground leading-32 tracking--1">
          Integra UI의 모든 구성 요소는 엄격한 시각적 원칙 위에 세워집니다.
        </p>
      </div>
      <div className="grid gap-24 md:grid-cols-2">
        <div className="p-32 rounded-16 border bg-slate-50/50 space-y-12">
            <h3 className="text-20 font-bold">수치 기반의 질서</h3>
            <p className="text-15 text-slate-600 leading-24">우리는 '감'이 아닌 '수치'로 소통합니다. 모든 간격은 4px 그리드 시스템을 통해 예측 가능한 정렬을 제공합니다.</p>
        </div>
        <div className="p-32 rounded-16 border bg-slate-50/50 space-y-12">
            <h3 className="text-20 font-bold">의미론적 컬러</h3>
            <p className="text-15 text-slate-600 leading-24">단순한 Hex 코드를 넘어, 역할(Primary, Destructive)에 기반한 컬러 시스템으로 다크모드와 테마 변경에 유연하게 대응합니다.</p>
        </div>
      </div>
    </div>
  );
}