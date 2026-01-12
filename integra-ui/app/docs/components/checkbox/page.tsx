import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function CheckboxDocsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Checkbox</h1>
        <p className="text-lg text-muted-foreground">
          사용자가 여러 옵션 중에서 하나 이상을 선택할 때 사용하는 컨트롤입니다.
        </p>
      </div>

      <hr className="border-slate-200" />

      {/* 미리보기 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Preview</h2>
        <div className="flex min-h-[150px] items-center justify-center rounded-xl border bg-slate-50 p-10">
          
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">이용약관에 동의합니다</Label>
          </div>

        </div>
      </section>

      {/* 사용법 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <div className="rounded-md bg-slate-950 p-4">
            <code className="text-white text-sm font-mono block">
                import &#123; Checkbox &#125; from "@/components/ui/checkbox"
                <br /><br />
                &lt;Checkbox id="terms" /&gt;
            </code>
        </div>
      </section>
    </div>
  );
}