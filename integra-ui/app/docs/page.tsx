// app/docs/page.tsx
export default function DocsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Integra UI 소개</h1>
        <p className="text-lg text-muted-foreground mt-2">
          한국 메이커를 위한, 가장 직관적인 디자인 시스템 가이드입니다.
        </p>
      </div>
      
      <hr className="my-4" />

      <div className="prose max-w-none">
        <h3 className="text-xl font-semibold mb-2">왜 Integra 인가요?</h3>
        <p className="mb-4 text-slate-600 leading-7">
          기존의 UI 라이브러리는 너무 방대하거나, 국내 웹 환경(폰트, 디자인 트렌드)과 맞지 않는 경우가 많았습니다.
          Integra UI는 <strong>Pretendard 폰트</strong>를 기본으로 탑재하고,
          국내 IT 서비스들이 선호하는 깔끔한 디자인 토큰을 제공합니다.
        </p>

        <h3 className="text-xl font-semibold mb-2">특징</h3>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li>Pretendard 폰트 기본 적용</li>
          <li>shadcn 방식의 Copy & Paste 아키텍처</li>
          <li>접근성(Accessibility)이 보장된 컴포넌트</li>
        </ul>
      </div>
    </div>
  );
}