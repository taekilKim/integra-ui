import { TextareaDemo } from "@/components/demo/textarea-demo";

export default function TextareaDocsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Textarea</h1>
        <p className="text-lg text-muted-foreground">
          사용자가 여러 줄의 텍스트를 입력할 수 있는 폼 요소입니다.
        </p>
      </div>
      <hr className="border-slate-200" />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Playground</h2>
        <TextareaDemo />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <div className="rounded-md bg-slate-950 p-4">
            <code className="text-white text-sm font-mono block">
                import &#123; Textarea &#125; from "@/components/ui/textarea"
                <br /><br />
                &lt;Textarea placeholder="Type your message here." /&gt;
            </code>
        </div>
      </section>
    </div>
  );
}