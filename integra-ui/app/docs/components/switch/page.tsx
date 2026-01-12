import { SwitchDemo } from "@/components/demo/switch-demo";

export default function SwitchDocsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Switch</h1>
        <p className="text-lg text-muted-foreground">
          설정을 켜거나 끌 때 사용하는 토글 컨트롤입니다.
        </p>
      </div>
      <hr className="border-slate-200" />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Playground</h2>
        <SwitchDemo />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <div className="rounded-md bg-slate-950 p-4">
            <code className="text-white text-sm font-mono block">
                import &#123; Switch &#125; from "@/components/ui/switch"
                <br /><br />
                &lt;Switch /&gt;
            </code>
        </div>
      </section>
    </div>
  );
}