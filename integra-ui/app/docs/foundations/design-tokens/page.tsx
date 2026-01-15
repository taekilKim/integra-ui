import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export default function DesignTokensPage() {
  // 1. 기초 데이터 정의
  const fontSizes = [12, 13, 14, 15, 16, 18, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 80, 96, 128, 160];
  
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

  const semanticTokens = [
    { name: "primary", desc: "브랜드 주조색 (버튼 배경, 핵심 아이콘 등)", role: "Main Action" },
    { name: "primary-hover", desc: "주조색의 상호작용 상태 (한 단계 어두운 명도)", role: "Interaction" },
    { name: "primary-foreground", desc: "주조색 배경 위에서 사용되는 대비색 (텍스트/아이콘)", role: "Contrast" },
    { name: "primary-subtle", desc: "보조 위계용 연한 배경색 (틴트 컬러)", role: "Secondary" },
    { name: "primary-subtle-hover", desc: "연한 배경색의 호버 상태", role: "Interaction" },
    { name: "primary-subtle-foreground", desc: "연한 배경 위에서 사용되는 브랜드 강조색", role: "Accent" },
  ];

  return (
    <div className="space-y-80 pb-120">
      {/* 1. 헤더 섹션: 표준 Breadcrumb 적용 */}
      <div className="space-y-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs/foundations">Foundations</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Design Tokens</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">Design Tokens</h1>
        <p className="fs-20 text-integra-gray-500 leading-32">
          Integra UI는 원자(Atoms)를 조합하여 의미(Semantics)를 부여합니다.<br />
          수치 기반의 물리적 토큰과 역할 중심의 의미론적 토큰 체계를 확인하세요.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. Semantic Tokens 섹션: 신규 추가 */}
      <section className="space-y-48">
        <div className="space-y-8">
            <h2 className="fs-32 font-bold leading-40 tracking--2 text-integra-gray-900">1. Semantic Tokens</h2>
            <p className="fs-16 text-integra-gray-500 italic">특정 수치(Atoms)가 UI에서 어떤 '역할'을 수행하는지 정의합니다.</p>
        </div>

        <Card className="p-32 bg-integra-gray-50 border-integra-gray-100 shadow-none space-y-24">
            <div className="space-y-12">
                <h4 className="fs-18 font-bold text-integra-gray-900">역할 기반의 이름 체계</h4>
                <p className="fs-14 text-integra-gray-600 leading-24">
                    브랜드 컬러가 바뀌어도 개발자는 코드를 수정하지 않습니다.<br />
                    우리는 <code>blue-500</code>을 직접 쓰는 대신 <code>primary</code>라는 약속된 이름을 사용하기 때문입니다.
                </p>
            </div>

            <div className="rounded-12 border border-integra-gray-200 bg-white overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-integra-gray-50 border-b border-integra-gray-200">
                        <tr className="fs-12 font-bold text-integra-gray-400">
                            <th className="px-24 py-16">Semantic Name</th>
                            <th className="px-24 py-16">Role / Usage</th>
                            <th className="px-24 py-16">Class Name</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y border-integra-gray-100 fs-14">
                        {semanticTokens.map((token) => (
                            <tr key={token.name} className="hover:bg-integra-gray-50 transition-colors">
                                <td className="px-24 py-16 font-mono font-bold text-primary">--{token.name}</td>
                                <td className="px-24 py-16 text-integra-gray-700">{token.desc}</td>
                                <td className="px-24 py-16 font-mono text-integra-blue-600">.bg-{token.name} / .text-{token.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
      </section>

      {/* 3. Typography Section */}
      <section className="space-y-64">
        <div className="space-y-8">
            <h2 className="fs-32 font-bold leading-40 tracking--2 text-integra-gray-900">2. Typography Atoms</h2>
            <p className="fs-16 text-integra-gray-500 italic">폰트 속성을 개별적으로 조합하여 타이포그래피 시스템을 완성합니다.</p>
        </div>

        <div className="grid gap-48">
          {/* 2-1. Font Size */}
          <div className="space-y-24">
            <div className="flex items-center gap-12">
                <h3 className="fs-18 font-bold uppercase tracking-2 text-primary">2-1. Font Size</h3>
                <Badge variant="outline" className="fs-12 border-integra-gray-200 text-integra-gray-500">Total {fontSizes.length} Tokens</Badge>
            </div>
            <div className="rounded-12 border border-integra-gray-200 overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead className="bg-integra-gray-50 border-b border-integra-gray-200">
                  <tr className="fs-12 font-bold text-integra-gray-400">
                    <th className="px-24 py-16">Value (PX)</th>
                    <th className="px-24 py-16">Tailwind Class</th>
                    <th className="px-24 py-16">Preview</th>
                  </tr>
                </thead>
                <tbody className="divide-y border-integra-gray-100 fs-14">
                  {fontSizes.map((size) => (
                    <tr key={size} className="hover:bg-integra-gray-50 transition-colors">
                      <td className="px-24 py-16 font-mono font-medium text-integra-gray-700">{size}px</td>
                      <td className="px-24 py-16 font-mono text-integra-blue-600 font-bold">.fs-{size}</td>
                      <td className="px-24 py-16 text-integra-gray-900" style={{ fontSize: `${size}px`, lineHeight: 1 }}>Integra UI</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Design Tip */}
          <Card className="p-32 bg-integra-blue-50 border-integra-blue-100 shadow-none space-y-16">
            <div className="flex items-center gap-8 text-primary">
                <span className="fs-20">💡</span>
                <h4 className="fs-18 font-bold tracking--1">Why not strict 4px grid for Fonts?</h4>
            </div>
            <div className="space-y-12 fs-14 text-integra-blue-900/80 leading-24 tracking--1">
                <p>가독성을 위해 2px 단위 혹은 특정 수치(13px, 15px)를 전략적으로 허용하여 가장 정갈한 한글 렌더링을 제공합니다.</p>
            </div>
          </Card>

          {/* 2-2. Font Weight */}
          <div className="space-y-16">
            <h3 className="fs-18 font-bold uppercase tracking-2 text-primary">2-2. Font Weight</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
              {fontWeights.map((w) => (
                <div key={w.name} className="p-24 border border-integra-gray-200 rounded-12 space-y-8 bg-white shadow-sm hover:border-primary/50 transition-colors">
                  <p className="fs-12 text-integra-gray-400 font-mono uppercase">{w.value}</p>
                  <p className={`fs-32 font-${w.name} leading-40 tracking-0 text-integra-gray-900`}>Aa</p>
                  <p className="fs-14 font-mono text-integra-blue-600 font-bold">.font-{w.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 2-3. Line Height */}
          <div className="space-y-16">
            <h3 className="fs-18 font-bold uppercase tracking-2 text-primary">2-3. Line Height</h3>
            <div className="p-24 bg-integra-gray-50 rounded-12 border border-dashed border-integra-gray-200">
                <div className="flex flex-wrap gap-12">
                    {[16, 20, 24, 28, 32, 40, 48, 56, 64, 80].map(lh => (
                        <div key={lh} className="bg-white border border-integra-gray-200 px-16 py-8 rounded-8 shadow-sm">
                            <span className="fs-12 text-integra-gray-400 mr-8 font-mono">{lh}px</span>
                            <span className="fs-14 font-mono text-integra-blue-600 font-bold">.leading-{lh}</span>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Layout Section */}
      <section className="space-y-64">
        <div className="space-y-8">
            <h2 className="fs-32 font-bold leading-40 tracking--2 text-integra-gray-900">3. Layout & Geometry</h2>
            <p className="fs-16 text-integra-gray-500 italic">여백과 곡률에 대한 엄격한 수치 가이드라인입니다.</p>
        </div>

        <div className="space-y-48">
          {/* 3-1. Spacing System */}
          <div className="space-y-24">
            <h3 className="fs-18 font-bold uppercase tracking-2 text-primary">3-1. Spacing (0 - 400px)</h3>
            <Card className="p-32 border border-integra-gray-200 rounded-16 space-y-32 bg-white shadow-sm overflow-hidden">
                <div className="flex items-end gap-4 h-80">
                    {[4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 100, 120, 160].map(s => (
                        <div key={s} className="bg-integra-blue-100 border border-integra-blue-200 w-full group relative transition-colors hover:bg-primary/20" style={{ height: `${(s/160)*100}%` }}>
                            <div className="absolute -top-24 left-1/2 -translate-x-1/2 fs-10 font-mono font-bold hidden group-hover:block text-primary">{s}px</div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between items-center fs-12 font-mono text-integra-blue-600 font-bold">
                    <span>.p-4 (Smallest)</span>
                    <span className="text-integra-gray-200 px-40 text-center">━━━━━━━━━━━━━━━━━━</span>
                    <span>.p-400 (Max Layout)</span>
                </div>
            </Card>
          </div>

          {/* 3-2. Border Radius */}
          <div className="space-y-24">
            <h3 className="fs-18 font-bold uppercase tracking-2 text-primary">3-2. Border Radius (0 - 80px)</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-16">
                {[0, 4, 8, 12, 16, 20, 24, 28, 32, 40].map(r => (
                    <div key={r} className="p-16 border border-integra-gray-200 rounded-12 flex flex-col items-center gap-12 bg-white shadow-sm hover:border-primary/50 transition-colors">
                        <div className="h-40 w-40 bg-integra-gray-50 border-2 border-dashed border-integra-gray-200" style={{ borderRadius: `${r}px` }}></div>
                        <p className="fs-12 font-mono text-integra-blue-600 font-bold">.rounded-{r}</p>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}