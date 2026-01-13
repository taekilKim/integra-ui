import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

export default function LabelDocsPage() {
  return (
    <div className="space-y-48 pb-80">
      <div className="space-y-16">
        <div className="flex items-center gap-8 font-mono text-12 text-primary">
            <span>Components</span>
            <span>/</span>
            <span className="font-bold">Label</span>
        </div>
        <h1 className="text-40 font-bold leading-48 tracking--4">Label</h1>
        <p className="text-20 text-muted-foreground leading-32 tracking--1 max-w-600">
          입력 요소의 용도를 설명하는 텍스트 컴포넌트입니다. 폼 요소와 유기적으로 연결되어 웹 접근성을 향상시킵니다.
        </p>
      </div>
      <hr className="border-slate-100" />
      <section className="space-y-16">
        <h2 className="text-24 font-bold tracking--2 leading-32">Preview</h2>
        <div className="flex min-h-160 items-center justify-center rounded-12 border border-slate-200 bg-slate-50/50 border-dashed p-40">
          <div className="flex items-center gap-8">
            <Checkbox id="terms-docs" />
            <Label htmlFor="terms-docs">이용약관에 동의합니다</Label>
          </div>
        </div>
      </section>
      <section className="space-y-16 p-32 bg-slate-50 rounded-16 border border-slate-100">
        <h2 className="text-20 font-bold leading-24 tracking--1">Atomic Design Note</h2>
        <div className="space-y-12 text-15 text-slate-600 leading-24 tracking--1">
            <p>라벨은 본문 텍스트보다 높은 가독성 밀도를 가집니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Font:</strong> 14px Medium(500) 굵기를 기본으로 사용하여 시각적 구분을 둡니다.</li>
                <li><strong>Spacing:</strong> 컴포넌트와 라벨 사이의 간격은 보통 8px(gap-8)을 권장합니다.</li>
                <li><strong>A11y:</strong> 클릭 시 연결된 input으로 포커스를 자동 이동시킵니다.</li>
            </ul>
        </div>
      </section>
    </div>
  );
}