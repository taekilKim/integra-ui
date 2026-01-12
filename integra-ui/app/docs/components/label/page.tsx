import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox"; // 체크박스는 아직 없지만 예시용 (없으면 div로 대체됨)

export default function LabelDocsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Label</h1>
        <p className="text-lg text-muted-foreground">
          폼 요소나 사용자 인터페이스의 설명을 표시하는 기본적인 텍스트 컴포넌트입니다.
        </p>
      </div>

      <hr className="border-slate-200" />

      {/* 미리보기 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Preview</h2>
        <div className="flex min-h-[150px] items-center justify-center rounded-xl border bg-slate-50 p-10">
          
          <div className="grid gap-1.5">
            <Label htmlFor="email">Your Email Address</Label>
            <div className="text-sm text-slate-500">
                (여기에 Input이 들어갑니다)
            </div>
          </div>

        </div>
      </section>

      {/* 사용법 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <div className="rounded-md bg-slate-950 p-4">
            <code className="text-white text-sm font-mono block">
                import &#123; Label &#125; from "@/components/ui/label"
                <br /><br />
                &lt;Label htmlFor="email"&gt;Your Email Address&lt;/Label&gt;
            </code>
        </div>
      </section>
    </div>
  );
}