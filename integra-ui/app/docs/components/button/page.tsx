import { ButtonDemo } from "@/components/demo/button-demo";

export default function ButtonDocsPage() {
  return (
    <div className="space-y-8">
      
      {/* 문서 헤더 */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Button</h1>
        <p className="text-lg text-muted-foreground">
          사용자의 동작을 트리거하거나, 폼을 전송할 때 사용하는 핵심 컴포넌트입니다.
        </p>
      </div>

      <hr className="border-slate-200" />

      {/* 인터랙티브 플레이그라운드 */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight">Playground</h2>
            <span className="text-sm text-muted-foreground">직접 옵션을 변경해보세요</span>
        </div>
        
        {/* ✨ 여기가 핵심: 우리가 만든 데모 컴포넌트 */}
        <ButtonDemo />
      </section>

      {/* 추가 설명 (API Reference 등) */}
      <section className="space-y-4 pt-8">
        <h2 className="text-xl font-semibold tracking-tight">Props Reference</h2>
        <div className="rounded-lg border overflow-hidden">
            <table className="w-full text-sm text-left">
                <thead className="bg-slate-50 border-b">
                    <tr>
                        <th className="px-4 py-3 font-medium">Prop</th>
                        <th className="px-4 py-3 font-medium">Type</th>
                        <th className="px-4 py-3 font-medium">Default</th>
                        <th className="px-4 py-3 font-medium">Description</th>
                    </tr>
                </thead>
                <tbody className="divide-y">
                    <tr>
                        <td className="px-4 py-3 font-mono text-primary">variant</td>
                        <td className="px-4 py-3 text-slate-500">string</td>
                        <td className="px-4 py-3 font-mono text-slate-500">"default"</td>
                        <td className="px-4 py-3">버튼의 시각적 스타일을 결정합니다.</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-3 font-mono text-primary">size</td>
                        <td className="px-4 py-3 text-slate-500">string</td>
                        <td className="px-4 py-3 font-mono text-slate-500">"default"</td>
                        <td className="px-4 py-3">버튼의 크기를 결정합니다.</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </section>
    </div>
  );
}