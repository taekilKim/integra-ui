import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { InputDemo } from "@/components/demo/input-demo"; // 추가

export default function InputDocsPage() {
  return (
    <div className="space-y-8">
      {/* ... 상단 제목 부분은 유지 ... */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Input</h1>
        <p className="text-lg text-muted-foreground">
          사용자가 텍스트 데이터를 입력할 수 있는 기본적인 폼 필드입니다.
        </p>
      </div>
      <hr className="border-slate-200" />

      {/* Preview 섹션을 데모로 교체 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Playground</h2>
        <InputDemo />
      </section>

      {/* 사용법 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <div className="rounded-md bg-slate-950 p-4 overflow-x-auto">
            <code className="text-white text-sm font-mono block">
                import &#123; Input &#125; from "@/components/ui/input"
                <br /><br />
                &lt;Input type="email" placeholder="Email" /&gt;
            </code>
        </div>
      </section>
      
      {/* 다양한 예시 */}
      <section className="space-y-4 pt-4">
        <h2 className="text-xl font-semibold tracking-tight">Examples</h2>
        <div className="grid gap-4 max-w-sm">
            <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="email" placeholder="Email" />
                <Button type="submit">Subscribe</Button>
            </div>
            <Input disabled type="email" placeholder="Disabled Input" />
            <Input type="file" />
        </div>
      </section>
    </div>
  );
}