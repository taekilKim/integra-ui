import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function IntroductionPage() {
  return (
    <div className="space-y-48 pb-80">
      {/* 1. 헤더 섹션: 표준 Breadcrumb 적용 및 SAI 타이포그래피 적용 */}
      <div className="space-y-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs">시작하기</BreadcrumbLink> {/* Docs -> 시작하기 */}
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Integra UI 소개</BreadcrumbPage> {/* 소개 -> Integra UI 소개 */}
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900">Integra UI 소개</h1>
        <p className="fs-20 text-integra-gray-500 leading-32">
          한국 UI 디자이너가 현대적인 디자인 시스템과 React 구조를 이해하고,<br />
          자기 제품에 맞게 커스터마이징할 수 있도록 돕는 한국어 기반 UI 시스템입니다.
        </p>
      </div>
      
      <hr className="border-integra-gray-100" />

      {/* 2. 본문 섹션: fs- 접두사 및 integra-gray 토큰 적용 */}
      <div className="space-y-64">
        {/* 철학 섹션 */}
        <section className="space-y-16">
            <h3 className="fs-24 font-bold leading-32 tracking--2 text-integra-gray-900">왜 Integra 인가요?</h3>
            <p className="fs-16 text-integra-gray-600 leading-28 tracking--1">
              기존 UI 라이브러리는 설치와 사용법은 잘 알려주지만, 왜 이런 속성과 구조를 선택했는지는 개발자 관점에서 설명하는 경우가 많습니다.<br />
              Integra UI는 컴포넌트의 모양뿐 아니라 <strong>규칙, 상태, 토큰, 코드와 커스터마이징 범위</strong>를 함께 설명합니다.<br />
              사람이 이해하기 쉬운 규칙을 먼저 만들고, Figma와 React가 그 규칙을 공유하도록 연결합니다.
            </p>
        </section>

        {/* 핵심 특징 섹션: bg-integra-gray-50 및 border-integra-gray-100 적용 */}
        <section className="space-y-24">
            <h3 className="fs-24 font-bold leading-32 tracking--2 text-integra-gray-900">Integra가 제공하는 것</h3>
            <div className="grid gap-24 md:grid-cols-2">
                <div className="p-24 rounded-12 border border-integra-gray-100 bg-integra-gray-50 space-y-8 leading-24 tracking--1">
                    <h4 className="font-bold fs-18 text-integra-gray-900">Learn</h4>
                    <p className="fs-14 text-integra-gray-600">
                      Design Token, Variant, State 같은 표준 용어를<br />
                      실제 UI 사례와 함께 한국어로 이해합니다.
                    </p>
                </div>
                <div className="p-24 rounded-12 border border-integra-gray-100 bg-integra-gray-50 space-y-8 leading-24 tracking--1">
                    <h4 className="font-bold fs-18 text-integra-gray-900">Design to Code</h4>
                    <p className="fs-14 text-integra-gray-600">
                      Figma Property, React Props, Design Token이<br />
                      어떻게 같은 규칙을 표현하는지 연결해 보여줍니다.
                    </p>
                </div>
                <div className="p-24 rounded-12 border border-integra-gray-100 bg-integra-gray-50 space-y-8 leading-24 tracking--1">
                    <h4 className="font-bold fs-18 text-integra-gray-900">Customize</h4>
                    <p className="fs-14 text-integra-gray-600">
                      브랜드 표현은 유연하게 바꾸고 접근성과<br />
                      상호작용의 약속은 유지하는 방법을 안내합니다.
                    </p>
                </div>
                <div className="p-24 rounded-12 border border-integra-gray-100 bg-integra-gray-50 space-y-8 leading-24 tracking--1">
                    <h4 className="font-bold fs-18 text-integra-gray-900">Advanced</h4>
                    <p className="fs-14 text-integra-gray-600">
                      명확해진 문서와 API를 기반으로 접근성 검증과<br />
                      machine-readable·AI-readable 구조를 실험합니다.
                    </p>
                </div>
            </div>
        </section>
      </div>
    </div>
  )
}
