import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox"; // ✨ 이제 에러 안 남!

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
          
          <div className="flex items-center space-x-2">
            {/* ✨ 진짜 Integra UI 체크박스 컴포넌트 사용 */}
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>

        </div>
      </section>

      {/* 사용법 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <div className="rounded-md bg-slate-950 p-4">
            <code className="text-white text-sm font-mono block">
                import &#123; Checkbox &#125; from "@/components/ui/checkbox"
                <br />
                import &#123; Label &#125; from "@/components/ui/label"
                <br /><br />
                &lt;div className="flex items-center space-x-2"&gt;<br />
                &nbsp;&nbsp;&lt;Checkbox id="terms" /&gt;<br />
                &nbsp;&nbsp;&lt;Label htmlFor="terms"&gt;Accept terms&lt;/Label&gt;<br />
                &lt;/div&gt;
            </code>
        </div>
      </section>
    </div>
  );
}