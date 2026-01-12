// app/docs/components/button/page.tsx
import { Button } from "@/components/ui/button";

export default function ButtonDocsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Button</h1>
        <p className="text-lg text-muted-foreground mt-2">
          사용자의 동작을 유도하거나 폼을 제출할 때 사용합니다.
        </p>
      </div>

      <hr />

      {/* 미리보기 영역 */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">미리보기 (Preview)</h2>
        <div className="flex items-center gap-4 rounded-xl border p-10 justify-center bg-slate-50">
          <Button>Primary Button</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </div>

      {/* 코드 사용법 */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">사용법 (Usage)</h2>
        <div className="rounded-md bg-slate-950 p-4">
          <code className="text-white text-sm">
            import &#123; Button &#125; from "@/components/ui/button"
            <br /><br />
            &lt;Button variant="outline"&gt;Click me&lt;/Button&gt;
          </code>
        </div>
      </div>
    </div>
  );
}