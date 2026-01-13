import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DesignTokensPage() {
  const fontSizes = [12, 14, 16, 18, 20, 24, 28, 32, 40, 48];
  const fontWeights = [
    { name: "regular", value: 400 },
    { name: "medium", value: 500 },
    { name: "semibold", value: 600 },
    { name: "bold", value: 700 },
  ];
  const letterSpacings = [
    { token: "0", value: "0em", desc: "기본값" },
    { token: "-1", value: "-0.01em", desc: "미세 보정" },
    { token: "-2", value: "-0.02em", desc: "본문 권장" },
    { token: "-3", value: "-0.03em", desc: "제목 권장" },
    { token: "-4", value: "-0.04em", desc: "대제목 권장" },
  ];

  return (
    <div className="space-y-64 pb-120">
      {/* 1. Header */}
      <div className="space-y-16">
        <h1 className="text-40 font-bold leading-48 tracking--4 text-slate-900">Design Tokens</h1>
        <p className="text-20 text-muted-foreground leading-32 tracking--1 max-w-800">
          Integra UI의 모든 원자(Atoms)는 <strong>4px 그리드</strong>를 엄격히 준수하며, 
          디자이너의 의도가 소수점 오차 없이 코드에 반영되도록 설계되었습니다.
        </p>
      </div>

      <hr className="border-slate-100" />

      {/* 2. Typography Section */}
      <section className="space-y-48">
        <div className="space-y-8">
            <h2 className="text-32 font-bold leading-40 tracking--2">1. Typography Atoms</h2>
            <p className="text-16 text-slate-500 italic">폰트 속성을 개별적으로 조합하여 타이포그래피 시스템을 완성합니다.</p>
        </div>

        <div className="grid gap-40">
          {/* 1-1. Font Size */}
          <div className="space-y-16">
            <div className="flex items-center gap-12">
                <h3 className="text-18 font-bold uppercase tracking-2 text-primary">1-1. Font Size</h3>
                <Badge variant="outline" className="text-12">Unit: PX</Badge>
            </div>
            <div className="rounded-12 border overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50 border-b">
                  <tr className="text-12 font-bold text-slate-400">
                    <th className="px-24 py-12">Value (PX)</th>
                    <th className="px-24 py-12">Tailwind Class</th>
                    <th className="px-24 py-12">Preview</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-14">
                  {fontSizes.map((size) => (
                    <tr key={size}>
                      <td className="px-24 py-12 font-mono">{size}px</td>
                      <td className="px-24 py-12 font-mono text-blue-600 font-bold">.text-{size}</td>
                      <td className="px-24 py-12" style={{ fontSize: `${size}px` }}>Integra UI (가나다)</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 1-2. Font Weight */}
          <div className="space-y-16">
            <h3 className="text-18 font-bold uppercase tracking-2 text-primary">1-2. Font Weight</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
              {fontWeights.map((w) => (
                <div key={w.name} className="p-20 border rounded-12 space-y-8 bg-white">
                  <p className="text-12 text-slate-400 font-mono uppercase">{w.value}</p>
                  <p className={`text-24 font-${w.name} leading-32 tracking-0`}>Integra</p>
                  <p className="text-14 font-mono text-blue-600 font-bold">.font-{w.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 1-3. Line Height */}
          <div className="space-y-16">
            <div className="flex items-center gap-12">
                <h3 className="text-18 font-bold uppercase tracking-2 text-primary">1-3. Line Height</h3>
                <Badge variant="outline" className="text-12">Step: 4px</Badge>
            </div>
            <p className="text-14 text-slate-600">수평 리듬을 위해 4px 배수 단위를 사용합니다. 기본 권장 행간은 1.5배(150%)입니다.</p>
            <div className="p-24 bg-slate-50 rounded-12 border border-dashed border-slate-200">
                <div className="flex flex-wrap gap-12">
                    {[16, 20, 24, 28, 32, 40, 48, 56, 64, 80].map(lh => (
                        <div key={lh} className="bg-white border px-16 py-8 rounded-8 shadow-sm">
                            <span className="text-12 text-slate-400 mr-8 font-mono">{lh}px</span>
                            <span className="text-14 font-mono text-blue-600 font-bold">.leading-{lh}</span>
                        </div>
                    ))}
                </div>
            </div>
          </div>

          {/* 1-4. Letter Spacing */}
          <div className="space-y-16">
            <h3 className="text-18 font-bold uppercase tracking-2 text-primary">1-4. Letter Spacing</h3>
            <div className="rounded-12 border overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50 border-b">
                  <tr className="text-12 font-bold text-slate-400">
                    <th className="px-24 py-12">Token</th>
                    <th className="px-24 py-12">Value (EM)</th>
                    <th className="px-24 py-12">Tailwind Class</th>
                    <th className="px-24 py-12">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-14">
                  {letterSpacings.map((ls) => (
                    <tr key={ls.token}>
                      <td className="px-24 py-12 font-mono">{ls.token}</td>
                      <td className="px-24 py-12 font-mono">{ls.value}</td>
                      <td className="px-24 py-12 font-mono text-blue-600 font-bold">.tracking-{ls.token}</td>
                      <td className="px-24 py-12 text-slate-500">{ls.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Layout Section */}
      <section className="space-y-48">
        <div className="space-y-8">
            <h2 className="text-32 font-bold leading-40 tracking--2">2. Layout & Geometry</h2>
            <p className="text-16 text-slate-500 italic">여백과 곡률에 대한 엄격한 수치 가이드라인입니다.</p>
        </div>

        <div className="space-y-48">
          {/* 2-1. Spacing System */}
          <div className="space-y-24">
            <h3 className="text-18 font-bold uppercase tracking-2 text-primary">2-1. Spacing (Padding / Margin / Gap)</h3>
            
            {/* 규격 카드 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
                <div className="p-16 bg-slate-50 rounded-12 border border-slate-100">
                    <p className="text-12 text-slate-400 font-bold uppercase mb-4">Unit</p>
                    <p className="text-16 font-bold">Pixel (PX)</p>
                </div>
                <div className="p-16 bg-slate-50 rounded-12 border border-slate-100">
                    <p className="text-12 text-slate-400 font-bold uppercase mb-4">Min Value</p>
                    <p className="text-16 font-bold">0 px</p>
                </div>
                <div className="p-16 bg-slate-50 rounded-12 border border-slate-100">
                    <p className="text-12 text-slate-400 font-bold uppercase mb-4">Max Value</p>
                    <p className="text-16 font-bold">400 px</p>
                </div>
                <div className="p-16 bg-primary/5 rounded-12 border border-primary/10">
                    <p className="text-12 text-primary/60 font-bold uppercase mb-4">Grid Step</p>
                    <p className="text-16 font-bold text-primary">4 px</p>
                </div>
            </div>

            <div className="p-32 border rounded-16 space-y-24 bg-white">
                <div className="flex items-end gap-4 h-64">
                    {[4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64].map(s => (
                        <div key={s} className="bg-primary/20 border border-primary/30 w-full group relative" style={{ height: `${(s/64)*100}%` }}>
                            <div className="absolute -top-24 left-1/2 -translate-x-1/2 text-10 font-mono hidden group-hover:block">{s}</div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between items-center text-12 font-mono text-blue-600">
                    <span>.p-4 (Padding 4px)</span>
                    <span className="text-slate-300">...</span>
                    <span>.p-400 (Padding 400px)</span>
                </div>
            </div>
          </div>

          {/* 2-2. Border Radius */}
          <div className="space-y-24">
            <h3 className="text-18 font-bold uppercase tracking-2 text-primary">2-2. Border Radius (곡률)</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
                <div className="p-16 bg-slate-50 rounded-12 border border-slate-100">
                    <p className="text-12 text-slate-400 font-bold uppercase mb-4">Unit</p>
                    <p className="text-16 font-bold">Pixel (PX)</p>
                </div>
                <div className="p-16 bg-slate-50 rounded-12 border border-slate-100">
                    <p className="text-12 text-slate-400 font-bold uppercase mb-4">Min / Max</p>
                    <p className="text-16 font-bold">0 px / 40 px</p>
                </div>
                <div className="p-16 bg-primary/5 rounded-12 border border-primary/10">
                    <p className="text-12 text-primary/60 font-bold uppercase mb-4">Grid Step</p>
                    <p className="text-16 font-bold text-primary">4 px</p>
                </div>
                <div className="p-16 bg-slate-50 rounded-12 border border-slate-100">
                    <p className="text-12 text-slate-400 font-bold uppercase mb-4">Special</p>
                    <p className="text-16 font-bold">full (9999px)</p>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-16">
                {[0, 4, 8, 12, 16, 20, 24, 28, 32, 40].map(r => (
                    <div key={r} className="p-16 border rounded-12 flex flex-col items-center gap-12 bg-white shadow-sm">
                        <div className="h-40 w-40 bg-slate-50 border-2 border-dashed border-slate-200" style={{ borderRadius: `${r}px` }}></div>
                        <p className="text-12 font-mono text-blue-600 font-bold">.rounded-{r}</p>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}