import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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
    <div className="space-y-48 pb-120">
      
      {/* 1. 헤더 섹션: 표준 Breadcrumb 적용 및 설명글 줄바꿈 규격 준수 */}
      <div className="space-y-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs/foundations">Foundations</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Colors</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900">Colors</h1>
        <p className="fs-20 text-integra-gray-500 leading-32">
          Figma에서 설계된 Integra UI 전용 컬러 시스템입니다.<br />
          모든 색상은 의미론적 역할에 최적화되어 디자인의 시각적 질서와 계층을 형성합니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 컬러 스케일 섹션 */}
      <div className="space-y-64">
        {COLOR_SCALES.map((scale) => (
          <section key={scale.name} className="space-y-24">
            <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">{scale.name}</h2>
            
            {/* 10단계 컬러 그리드: gap-12 아토믹 토큰 적용 */}
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-12">
              {STEPS.map((step) => (
                <div key={step} className="space-y-12">
                  {/* 컬러 칩: h-80, rounded-12 규격 및 전용 보더 토큰 */}
                  <div 
                    className="h-80 w-full rounded-12 border border-integra-gray-100 shadow-sm transition-transform hover:scale-105" 
                    style={{ backgroundColor: `hsl(var(--${scale.prefix}-${step}))` }}
                  />
                  <div className="space-y-4">
                      <p className="fs-12 font-bold text-integra-gray-900">{step}</p>
                      <p className="fs-10 text-integra-gray-400 font-mono tracking-0">
                        --{scale.prefix}-{step}
                      </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* 3. 아토믹 설계 원칙 노트 */}
      <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
        <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
        <div className="space-y-12 fs-15 text-integra-gray-600 leading-24 tracking--1">
            <p>Integra UI의 컬러는 하드코딩된 Hex 값을 지양하고 토큰화된 HSL 시스템을 사용합니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Semantic:</strong> <code>--primary</code>, <code>--border</code>와 같이 역할 기반의 이름을 부여하여 테마 확장에 대응합니다.</li>
                <li><strong>Contrast:</strong> 가독성을 보장하기 위해 900번대는 텍스트, 50-100번대는 배경 및 보더로 구분하여 사용합니다.</li>
                <li><strong>Blue 500:</strong> 시스템의 핵심 조력자로서 모든 주요 액션 요소의 배경색을 담당합니다.</li>
            </ul>
        </div>
      </section>
    </div>
  );
}