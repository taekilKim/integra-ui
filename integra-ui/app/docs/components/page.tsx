export default function ComponentsIntro() {
  return (
    <div className="space-y-48">
      <div className="space-y-16">
        <h1 className="text-40 font-bold leading-48 tracking--4">Components 개요</h1>
        <p className="text-20 text-muted-foreground leading-32 tracking--1">
          아토믹 토큰을 조합하여 만든 견고한 UI 부품들입니다.
        </p>
      </div>
      <div className="space-y-24">
        <h3 className="text-24 font-bold tracking--2">설계 원칙</h3>
        <ul className="grid gap-16 md:grid-cols-3">
            {["Radix UI 기반의 접근성", "Tailwind의 유연함", "복사하여 사용하는 소유권"].map((rule) => (
                <li key={rule} className="p-20 border rounded-12 text-14 font-medium text-center">{rule}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}