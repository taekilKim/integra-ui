const COLOR_SCALES = [
  { name: "Blue (Primary)", prefix: "blue" },
  { name: "Gray", prefix: "gray" },
  { name: "Green", prefix: "green" },
  { name: "Red", prefix: "red" },
  { name: "Orange", prefix: "orange" },
  { name: "Violet", prefix: "violet" },
  { name: "Grape", prefix: "grape" },
];

const STEPS = [900, 800, 700, 600, 500, 400, 300, 200, 100, 50];

export default function ColorsPage() {
  return (
    <div className="space-y-64 pb-120">
      <div className="space-y-16">
        <h1 className="text-40 font-bold leading-48 tracking--4">Colors</h1>
        <p className="text-20 text-muted-foreground leading-32 tracking--1 max-w-800">
          Figma에서 설계된 Integra UI 전용 컬러 시스템입니다. 모든 색상은 의미론적 역할에 최적화되어 있습니다.
        </p>
      </div>

      <hr />

      {COLOR_SCALES.map((scale) => (
        <section key={scale.name} className="space-y-24">
          <h2 className="text-24 font-bold tracking--2">{scale.name}</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-12">
            {STEPS.map((step) => (
              <div key={step} className="space-y-8">
                <div 
                  className="h-80 w-full rounded-12 border border-slate-100 shadow-sm" 
                  style={{ backgroundColor: `hsl(var(--${scale.prefix}-${step}))` }}
                />
                <div className="space-y-4">
                    <p className="text-12 font-bold">{step}</p>
                    <p className="text-10 text-slate-400 font-mono">--{scale.prefix}-{step}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}