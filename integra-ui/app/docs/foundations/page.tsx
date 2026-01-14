import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function FoundationsIntro() {
  return (
    <div className="space-y-48 pb-80">
      
      {/* 1. 헤더 섹션: 표준 Breadcrumb 및 SAI 타이포그래피 적용 */}
      <div className="space-y-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>Foundations</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900">Foundations 개요</h1>
        <p className="fs-20 text-integra-gray-500 leading-32">
          Integra UI의 모든 구성 요소는 엄격한 시각적 원칙 위에 세워집니다.<br />
          시스템의 근간이 되는 원자(Atoms)들의 정의와 설계 철학을 확인하세요.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 핵심 원칙 그리드: bg-integra-gray-50 및 fs- 접두사 적용 */}
      <div className="grid gap-24 md:grid-cols-2">
        <div className="p-32 rounded-16 border border-integra-gray-100 bg-integra-gray-50 space-y-12">
            <h3 className="fs-20 font-bold text-integra-gray-900">수치 기반의 질서</h3>
            <p className="fs-15 text-integra-gray-600 leading-24 tracking--1">
              우리는 '감'이 아닌 '수치'로 소통합니다. 모든 간격은 2px/4px 그리드 시스템을 통해 <br />
              예측 가능한 정렬과 소수점 없는 정교한 렌더링을 제공합니다.
            </p>
        </div>
        <div className="p-32 rounded-16 border border-integra-gray-100 bg-integra-gray-50 space-y-12">
            <h3 className="fs-20 font-bold text-integra-gray-900">의미론적 컬러</h3>
            <p className="fs-15 text-integra-gray-600 leading-24 tracking--1">
              단순한 Hex 코드를 넘어, 역할(Primary, Gray 등)에 기반한 컬러 시스템을 구축합니다. <br />
              이를 통해 디자인의 위계를 명확히 하고 향후 테마 확장성을 보장합니다.
            </p>
        </div>
      </div>

      {/* 3. 안내 섹션 */}
      <section className="space-y-16 p-32 rounded-16 border border-dashed border-integra-gray-200 text-center">
        <p className="fs-16 text-integra-gray-500 leading-24">
          왼쪽 메뉴에서 <strong>Design Tokens, Colors, Typography</strong>의 <br />
          세부 명세를 확인하여 시스템의 원자 단위를 파악할 수 있습니다.
        </p>
      </section>
    </div>
  );
}