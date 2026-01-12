import { BadgeDemo } from "@/components/demo/badge-demo";

export default function BadgeDocsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Badge</h1>
        <p className="text-lg text-muted-foreground">
          상태, 카테고리, 태그 등을 시각적으로 강조하여 표시할 때 사용합니다.
        </p>
      </div>
      <hr className="border-slate-200" />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Playground</h2>
        <BadgeDemo />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <div className="rounded-md bg-slate-950 p-4">
            <code className="text-white text-sm font-mono block">
                import &#123; Badge &#125; from "@/components/ui/badge"
                <br /><br />
                &lt;Badge variant="outline"&gt;Badge&lt;/Badge&gt;
            </code>
        </div>
      </section>
    </div>
  );
}