import { Card } from "@/components/ui/card";

export default function DesignTokensPage() {
  const typoScale = [
    { size: 12, lh_em: 1.5, lh_px: 18, pct: 150 },
    { size: 14, lh_em: 1.5, lh_px: 21, pct: 150 },
    { size: 16, lh_em: 1.5, lh_px: 24, pct: 150 },
    { size: 18, lh_em: 1.6, lh_px: 28.8, pct: 160 },
    { size: 20, lh_em: 1.5, lh_px: 30, pct: 150 },
    { size: 24, lh_em: 1.4, lh_px: 33.6, pct: 140 },
    { size: 32, lh_em: 1.3, lh_px: 41.6, pct: 130 },
    { size: 40, lh_em: 1.2, lh_px: 48, pct: 120 },
  ];

  return (
    <div className="space-y-48 pb-80">
      <div className="space-y-8">
        <h1 className="text-40 font-bold leading-48 tracking--4">Design Tokens</h1>
        <p className="text-20 text-muted-foreground leading-32 tracking--1">
          Integra UI는 <strong>아토믹 디자인 시스템</strong> 철학에 따라 모든 시각적 요소를 독립적인 수치 토큰으로 관리합니다.
        </p>
      </div>

      <hr />

      {/* 1. Typography System */}
      <section className="space-y-12">
        <div className="space-y-4">
            <h2 className="text-28 font-bold leading-32 tracking--2">1. Typography (Atomic)</h2>
            <p className="text-16 text-slate-600 leading-24">
                폰트 크기, 행간, 자간은 각각 독립된 원자(Atoms)입니다. 기본 행간은 1.5em(150%)을 지향하며, 자간은 0을 기본값으로 합니다.
            </p>
        </div>
        
        <div className="rounded-12 border overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 border-b">
              <tr className="text-12 font-semibold text-slate-500">
                <th className="px-24 py-16">Size (PX)</th>
                <th className="px-24 py-16">Line Height (PX/EM)</th>
                <th className="px-24 py-16">Line Height (%)</th>
                <th className="px-24 py-16">Atomic Class</th>
              </tr>
            </thead>
            <tbody className="divide-y text-14">
              {typoScale.map((t) => (
                <tr key={t.size} className="hover:bg-slate-50/50">
                  <td className="px-24 py-16 font-bold">{t.size}px</td>
                  <td className="px-24 py-16 font-medium text-primary">{t.lh_px}px / {t.lh_em}em</td>
                  <td className="px-24 py-16 text-slate-400">{t.pct}%</td>
                  <td className="px-24 py-16 font-mono text-blue-600">.text-{t.size} .leading-{Math.round(t.lh_px / 4) * 4}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 2. 4px Grid System */}
      <section className="space-y-12">
        <div className="space-y-4">
            <h2 className="text-28 font-bold leading-32 tracking--2">2. Spacing & Radius (4px Grid)</h2>
            <p className="text-16 text-slate-600 leading-24">
                모든 여백(Spacing)과 곡률(Radius)은 4px 배수의 수치 토큰을 사용합니다. 소수점이 없는 정수 단위의 설계를 원칙으로 합니다.
            </p>
        </div>
        
        <div className="grid gap-24 md:grid-cols-2">
            <Card className="p-24 space-y-16">
                <h3 className="font-bold text-18 tracking--1 uppercase text-slate-400">Border Radius Scale</h3>
                <div className="flex items-center gap-16">
                    {[4, 8, 12, 16, 24].map(r => (
                        <div key={r} className="space-y-8 flex-1">
                            <div className="h-40 w-full bg-primary/10 border border-primary/20" style={{ borderRadius: `${r}px` }}></div>
                            <p className="text-12 text-center font-mono font-bold tracking-0 text-primary">rounded-{r}</p>
                        </div>
                    ))}
                </div>
            </Card>
            <Card className="p-24 space-y-16">
                <h3 className="font-bold text-18 tracking--1 uppercase text-slate-400">Spacing Scale (0-160px)</h3>
                <div className="flex items-end gap-4 h-40">
                    {[4, 8, 12, 16, 20, 24, 28, 32].map(s => (
                        <div key={s} className="bg-slate-200 w-full" style={{ height: `${s}px` }}></div>
                    ))}
                </div>
                <p className="text-12 text-slate-500 font-mono text-center">p-{'{px}'} / m-{'{px}'} / gap-{'{px}'}</p>
            </Card>
        </div>
      </section>
    </div>
  );
}