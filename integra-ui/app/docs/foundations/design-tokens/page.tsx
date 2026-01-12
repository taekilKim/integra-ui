import { Card } from "@/components/ui/card";

export default function DesignTokensPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Design Tokens</h1>
        <p className="text-lg text-muted-foreground">
          Integra UI는 <strong>4px 그리드 시스템</strong>과 <strong>의미론적(Semantic) 컬러</strong>를 기반으로 설계되었습니다.
        </p>
      </div>

      <hr className="border-slate-200" />

      {/* 1. 그리드 & 간격 시스템 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">1. Spacing & Radius (간격 및 곡률)</h2>
        <p className="text-sm text-slate-600">
          모든 간격과 크기는 <strong>4px(0.25rem)</strong>의 배수로 이루어집니다. 이를 통해 디자인의 일관성을 유지합니다.
        </p>
        
        <div className="grid gap-4 md:grid-cols-2">
            <Card className="p-6 space-y-2">
                <h3 className="font-semibold">Spacing Scale</h3>
                <ul className="list-disc pl-4 text-sm text-slate-600 space-y-1">
                    <li><strong>0.25rem (4px)</strong>: 최소 단위</li>
                    <li><strong>0.5rem (8px)</strong>: 컴포넌트 내부 간격 (기본)</li>
                    <li><strong>1rem (16px)</strong>: 컴포넌트 간 간격</li>
                    <li><strong>1.5rem (24px) ~</strong>: 레이아웃 간격</li>
                </ul>
            </Card>
            <Card className="p-6 space-y-2">
                <h3 className="font-semibold">Radius Scale</h3>
                <ul className="list-disc pl-4 text-sm text-slate-600 space-y-1">
                    <li><strong>sm (4px)</strong>: 작은 요소 (Tag, Badge)</li>
                    <li><strong>md (8px)</strong>: 기본 요소 (Button, Input, Card)</li>
                    <li><strong>lg (12px)</strong>: 큰 컨테이너 (Modal)</li>
                    <li><strong>full</strong>: 알약 형태 (Pill Button)</li>
                </ul>
            </Card>
        </div>
      </section>

      {/* 2. 컬러 시스템 */}
      <section className="space-y-4 pt-4">
        <h2 className="text-xl font-semibold tracking-tight">2. Color System (색상)</h2>
        <p className="text-sm text-slate-600">
          색상은 절대값(Hex)이 아닌 <strong>역할(Role)</strong>에 따라 정의됩니다. 이를 통해 다크 모드를 자동 지원합니다.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
                <div className="h-12 w-full rounded-md bg-background border shadow-sm"></div>
                <div className="text-xs font-medium">Background</div>
            </div>
            <div className="space-y-2">
                <div className="h-12 w-full rounded-md bg-primary"></div>
                <div className="text-xs font-medium">Primary (Brand)</div>
            </div>
            <div className="space-y-2">
                <div className="h-12 w-full rounded-md bg-secondary"></div>
                <div className="text-xs font-medium">Secondary</div>
            </div>
            <div className="space-y-2">
                <div className="h-12 w-full rounded-md bg-muted"></div>
                <div className="text-xs font-medium">Muted</div>
            </div>
             <div className="space-y-2">
                <div className="h-12 w-full rounded-md bg-destructive"></div>
                <div className="text-xs font-medium">Destructive</div>
            </div>
        </div>
      </section>

       {/* 3. 타이포그래피 */}
       <section className="space-y-4 pt-4">
        <h2 className="text-xl font-semibold tracking-tight">3. Typography</h2>
        <p className="text-sm text-slate-600">
          <strong>Pretendard</strong> 폰트를 기본으로 하며, 가독성을 최우선으로 합니다.
        </p>
        <div className="rounded-xl border bg-slate-50 p-6 space-y-4">
            <p className="text-4xl font-bold">Heading 1 (Display)</p>
            <p className="text-3xl font-bold">Heading 2 (Page Title)</p>
            <p className="text-xl font-semibold">Heading 3 (Section)</p>
            <p className="text-base">Body (Default Text) - 가독성이 좋은 본문 텍스트입니다.</p>
            <p className="text-sm text-muted-foreground">Caption / Small Text - 보조 설명 텍스트입니다.</p>
        </div>
      </section>
    </div>
  );
}