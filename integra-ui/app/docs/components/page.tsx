import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

/**
 * [Integra UI - Components Intro SAI Version]
 * 시스템에서 제공하는 컴포넌트들의 설계 철학을 소개하는 페이지입니다.
 */
export default function ComponentsIntro() {
  const principles = [
    "Radix UI 기반의 접근성",
    "Tailwind의 유연한 확장",
    "복사하여 사용하는 소유권"
  ];

  return (
    <div className="space-y-48 pb-80">
      
      {/* 1. 헤더 섹션: 표준 Breadcrumb 및 SAI 타이포그래피 적용 */}
      <div className="space-y-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>Components</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">Components 개요</h1>
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          아토믹 토큰을 조합하여 만든 견고하고 유연한 UI 부품들입니다.<br />
          모든 컴포넌트는 사용자가 직접 코드를 제어할 수 있는 구조로 설계되었습니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 설계 원칙 섹션: bg-integra-gray-50 및 fs- 접두사 적용 */}
      <div className="space-y-24">
        <h3 className="fs-24 font-bold tracking--2 text-integra-gray-900">설계 원칙</h3>
        <ul className="grid gap-16 md:grid-cols-3">
            {principles.map((rule) => (
                <li 
                  key={rule} 
                  className="p-20 border border-integra-gray-100 rounded-12 fs-14 font-medium text-center text-integra-gray-700 bg-integra-gray-50"
                >
                  {rule}
                </li>
            ))}
        </ul>
      </div>

      {/* 3. 안내 섹션: border-dashed 및 integra-gray 토큰 적용 */}
      <section className="p-40 rounded-24 border-2 border-dashed border-integra-gray-200 text-center space-y-16">
        <h4 className="fs-20 font-bold text-integra-gray-900 tracking--1">즉시 도입 가능한 아토믹 피스</h4>
        <p className="fs-16 text-integra-gray-500 leading-24">
          왼쪽 사이드바에서 원하는 컴포넌트를 선택하여 <br />
          실제 코드와 조작 가능한 플레이그라운드를 확인해 보세요.
        </p>
      </section>
    </div>
  );
}