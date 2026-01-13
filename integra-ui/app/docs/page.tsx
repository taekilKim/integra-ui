export default function IntroductionPage() {
  return (
    <div className="space-y-12 pb-80">
      <div className="space-y-4">
        <h1 className="text-40 font-bold leading-48 tracking--4 text-slate-900">Integra UI 소개</h1>
        <p className="text-20 text-muted-foreground leading-32 tracking--1">
          한국 메이커를 위한, 가장 직관적인 <strong>아토믹 디자인 시스템</strong> 가이드입니다.
        </p>
      </div>
      
      <hr />

      <div className="space-y-32">
        {/* 기존 내용 + 아토믹 개념 */}
        <section className="space-y-8">
            <h3 className="text-24 font-bold leading-32 tracking--2">왜 Integra 인가요?</h3>
            <p className="text-16 text-slate-600 leading-28 tracking--1">
              기존의 UI 라이브러리는 너무 방대하거나, 국내 웹 환경(폰트, 디자인 트렌드)과 맞지 않는 경우가 많았습니다.
              Integra UI는 컴포넌트를 만들기 전에 **곡률, 간격, 폰트 크기, 행간**을 독립적인 원자(Atoms)로 정의하는 
              <strong> 아토믹 토큰 시스템</strong>을 채택하여 디자인과 개발의 언어를 하나로 통합합니다.
            </p>
        </section>

        {/* 특징 섹션 */}
        <section className="space-y-12">
            <h3 className="text-24 font-bold leading-32 tracking--2 text-primary italic underline underline-offset-8">Core Features</h3>
            <div className="grid gap-24 md:grid-cols-2">
                <div className="p-24 rounded-12 border bg-slate-50/50 space-y-4 leading-24 tracking--1">
                    <h4 className="font-bold text-18">Pretendard First</h4>
                    <p className="text-14 text-slate-600">한글 가독성에 최적화된 Pretendard 폰트가 기본 탑재되어 별도의 설정 없이 아름다운 텍스트를 제공합니다.</p>
                </div>
                <div className="p-24 rounded-12 border bg-slate-50/50 space-y-4 leading-24 tracking--1">
                    <h4 className="font-bold text-18">Atomic Token System</h4>
                    <p className="text-14 text-slate-600">추상적인 명칭(sm, lg) 대신 픽셀 수치 기반의 토큰을 사용하여 디자이너의 의도를 코드로 100% 재현합니다.</p>
                </div>
                <div className="p-24 rounded-12 border bg-slate-50/50 space-y-4 leading-24 tracking--1">
                    <h4 className="font-bold text-18">4px Grid Philosophy</h4>
                    <p className="text-14 text-slate-600">모든 수치는 4px 단위로 설계되어 질서 있는 여백과 정교한 레이아웃을 보장합니다.</p>
                </div>
                <div className="p-24 rounded-12 border bg-slate-50/50 space-y-4 leading-24 tracking--1">
                    <h4 className="font-bold text-18">Copy & Paste DX</h4>
                    <p className="text-14 text-slate-600">shadcn 아키텍처를 따라 필요한 컴포넌트 코드만 프로젝트에 복사하여 가볍고 자유롭게 커스텀할 수 있습니다.</p>
                </div>
            </div>
        </section>
      </div>
    </div>
  )
}