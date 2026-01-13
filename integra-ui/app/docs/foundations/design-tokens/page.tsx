import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DesignTokensPage() {
  // 모든 폰트 사이즈 토큰 (12px ~ 160px)
  const fontSizes = [12, 13, 14, 15, 16, 18, 20, 24, 28, 32, 40, 48, 56, 64, 72, 80, 96, 128, 160];
  
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
    <div className="space-y-80 pb-120">
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
      <section className="space-y-64">
        <div className="space-y-8">
            <h2 className="text-32 font-bold leading-40 tracking--2 text-slate-900">1. Typography Atoms</h2>
            <p className="text-16 text-slate-500 italic">폰트 속성을 개별적으로 조합하여 타이포그래피 시스템을 완성합니다.</p>
        </div>

        <div className="grid gap-48">
          {/* 1-1. Font Size */}
          <div className="space-y-24">
            <div className="flex items-center gap-12">
                <h3 className="text-18 font-bold uppercase tracking-2 text-primary">1-1. Font Size</h3>
                <Badge variant="outline" className="text-12">Total {fontSizes.length} Tokens</Badge>
            </div>
            <div className="rounded-12 border border-slate-200 overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr className="text-12 font-bold text-slate-400">
                    <th className="px-24 py-16">Value (PX)</th>
                    <th className="px-24 py-16">Tailwind Class</th>
                    <th className="px-24 py-16">Preview</th>
                  </tr>
                </thead>
                <tbody className="divide-y border-slate-100 text-14">
                  {fontSizes.map((size) => (
                    <tr key={size} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-24 py-16 font-mono font-medium">{size}px</td>
                      <td className="px-24 py-16 font-mono text-blue-600 font-bold">.text-{size}</td>
                      <td className="px-24 py-16" style={{ fontSize: `${size}px`, lineHeight: 1 }}>Integra UI</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 💡 Design Tip Section */}
          <Card className="p-32 bg-blue-50 border-blue-100 shadow-none space-y-16">
            <div className="flex items-center gap-8 text-primary">
                <span className="text-20">💡</span>
                <h4 className="text-18 font-bold tracking--1">Why not strict 4px grid for Fonts?</h4>
            </div>
            <div className="space-y-12 text-14 text-blue-900/80 leading-24 tracking--1">
                <p>
                Integra UI는 레이아웃(Spacing)과 형태(Radius)에는 엄격한 <strong>4px 그리드</strong>를 적용하지만, 
                타이포그래피에는 <strong>2px 단위 혹은 특정 수치(13px, 15px)</strong>를 예외적으로 허용합니다. 그 이유는 다음과 같습니다.
                </p>
                <ul className="list-disc pl-20 space-y-8">
                    <li>
                        <strong>시각적 위계 보정:</strong> 12px와 16px 사이의 간격은 작아 보이지만, 뱃지나 툴팁 같은 고밀도 UI에서는 13px, 14px, 15px의 미세한 차이가 시각적 완성도를 결정합니다.
                    </li>
                    <li>
                        <strong>한글 가독성 최적화:</strong> 한글은 영문에 비해 복잡한 구조를 가집니다. 1px의 차이로도 획의 뭉침이 해소되거나 가독성 임계점을 넘을 수 있기 때문에, 그리드 리듬보다 <strong>'판독성'</strong>을 우선하여 수치를 정의했습니다.
                    </li>
                </ul>
            </div>
          </Card>

          {/* 1-2. Font Weight */}
          <div className="space-y-16">
            <h3 className="text-18 font-bold uppercase tracking-2 text-primary">1-2. Font Weight</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
              {fontWeights.map((w) => (
                <div key={w.name} className="p-24 border border-slate-200 rounded-12 space-y-8 bg-white shadow-sm">
                  <p className="text-12 text-slate-400 font-mono uppercase">{w.value}</p>
                  <p className={`text-32 font-${w.name} leading-40 tracking-0 text-slate-900`}>Aa</p>
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
            <p className="text-14 text-slate-600">수평 리듬과 수직 정렬을 위해 4px 배수 단위를 사용합니다. 기본 권장 행간은 1.5em(150%)입니다.</p>
            <div className="p-24 bg-slate-50 rounded-12 border border-dashed border-slate-200">
                <div className="flex flex-wrap gap-12">
                    {[16, 20, 24, 28, 32, 40, 48, 56, 64, 80].map(lh => (
                        <div key={lh} className="bg-white border border-slate-200 px-16 py-8 rounded-8 shadow-sm">
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
            <div className="rounded-12 border border-slate-200 overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr className="text-12 font-bold text-slate-400">
                    <th className="px-24 py-16">Token</th>
                    <th className="px-24 py-16">Value (EM)</th>
                    <th className="px-24 py-16">Tailwind Class</th>
                    <th className="px-24 py-16">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y border-slate-100 text-14">
                  {letterSpacings.map((ls) => (
                    <tr key={ls.token}>
                      <td className="px-24 py-16 font-mono font-medium">{ls.token}</td>
                      <td className="px-24 py-16 font-mono">{ls.value}</td>
                      <td className="px-24 py-16 font-mono text-blue-600 font-bold">.tracking-{ls.token}</td>
                      <td className="px-24 py-16 text-slate-500">{ls.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Layout Section */}
      <section className="space-y-64">
        <div className="space-y-8">
            <h2 className="text-32 font-bold leading-40 tracking--2 text-slate-900">2. Layout & Geometry</h2>
            <p className="text-16 text-slate-500 italic">여백과 곡률에 대한 엄격한 수치 가이드라인입니다.</p>
        </div>

        <div className="space-y-48">
          {/* 2-1. Spacing System */}
          <div className="space-y-24">
            <h3 className="text-18 font-bold uppercase tracking-2 text-primary">2-1. Spacing (Padding / Margin / Gap)</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
                <div className="p-16 bg-slate-50 rounded-12 border border-slate-100">
                    <p className="text-12 text-slate-400 font-bold uppercase mb-4">Unit</p>
                    <p className="text-16 font-bold">Pixel (PX)</p>
                </div>
                <div className="p-16 bg-slate-50 rounded-12 border border-slate-100">
                    <p className="text-12 text-slate-400 font-bold uppercase mb-4">Min / Max</p>
                    <p className="text-16 font-bold">0 px / 400 px</p>
                </div>
                <div className="p-16 bg-primary/5 rounded-12 border border-primary/10">
                    <p className="text-12 text-primary/60 font-bold uppercase mb-4">Grid Step</p>
                    <p className="text-16 font-bold text-primary">4 px</p>
                </div>
                <div className="p-16 bg-slate-50 rounded-12 border border-slate-100">
                    <p className="text-12 text-slate-400 font-bold uppercase mb-4">Apply to</p>
                    <p className="text-16 font-bold text-slate-700">W / H / P / M</p>
                </div>
            </div>

            <Card className="p-32 border border-slate-200 rounded-16 space-y-32 bg-white shadow-sm overflow-hidden">
                <div className="flex items-end gap-4 h-80">
                    {[4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 100, 120, 160].map(s => (
                        <div key={s} className="bg-primary/20 border border-primary/30 w-full group relative transition-colors hover:bg-primary/40" style={{ height: `${(s/160)*100}%` }}>
                            <div className="absolute -top-24 left-1/2 -translate-x-1/2 text-10 font-mono font-bold hidden group-hover:block text-primary">{s}px</div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between items-center text-12 font-mono text-blue-600 font-bold">
                    <span>.p-4 (Smallest)</span>
                    <span className="text-slate-200 px-40">● ● ● ● ● ● ● ● ● ● ● ●</span>
                    <span>.p-400 (Max Layout)</span>
                </div>
            </Card>
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
                    <div key={r} className="p-16 border border-slate-200 rounded-12 flex flex-col items-center gap-12 bg-white shadow-sm hover:border-primary/50 transition-colors">
                        <div className="h-48 w-48 bg-slate-50 border-2 border-dashed border-slate-200" style={{ borderRadius: `${r}px` }}></div>
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