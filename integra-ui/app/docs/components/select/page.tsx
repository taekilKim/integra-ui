import { SelectDemo } from "@/components/demo/select-demo";

export default function SelectDocsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Select</h1>
        <p className="text-lg text-muted-foreground">
          사용자가 목록에서 하나의 값을 선택할 수 있게 해주는 드롭다운 메뉴입니다.
        </p>
      </div>
      <hr className="border-slate-200" />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Playground</h2>
        <SelectDemo />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <div className="rounded-md bg-slate-950 p-4 overflow-x-auto">
            <code className="text-white text-sm font-mono block">
                import &#123; Select, SelectContent, SelectItem, SelectTrigger, SelectValue &#125; from "@/components/ui/select"
                <br /><br />
                &lt;Select&gt;<br />
                &nbsp;&nbsp;&lt;SelectTrigger className="w-[180px]"&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;SelectValue placeholder="Theme" /&gt;<br />
                &nbsp;&nbsp;&lt;/SelectTrigger&gt;<br />
                &nbsp;&nbsp;&lt;SelectContent&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;SelectItem value="light"&gt;Light&lt;/SelectItem&gt;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;SelectItem value="dark"&gt;Dark&lt;/SelectItem&gt;<br />
                &nbsp;&nbsp;&lt;/SelectContent&gt;<br />
                &lt;/Select&gt;
            </code>
        </div>
      </section>
    </div>
  );
}