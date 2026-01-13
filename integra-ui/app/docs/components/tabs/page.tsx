import { TabsDemo } from "@/components/demo/tabs-demo";

export default function TabsDocsPage() {
  return (
    <div className="space-y-48 pb-80">
      <div className="space-y-16">
        <div className="flex items-center gap-8 font-mono text-12 text-primary">
            <span>Components</span>
            <span>/</span>
            <span className="font-bold">Tabs</span>
        </div>
        <h1 className="text-40 font-bold leading-48 tracking--4">Tabs</h1>
        <p className="text-20 text-muted-foreground leading-32 tracking--1 max-w-600">
          동일한 맥락의 콘텐츠를 그룹화하여 사용자가 선택적으로 탐색할 수 있도록 돕는 전환형 메뉴입니다.
        </p>
      </div>
      <hr />
      <section className="space-y-16">
        <h2 className="text-24 font-bold tracking--2 leading-32">Playground</h2>
        <TabsDemo />
      </section>
      <section className="space-y-16 p-32 bg-slate-50 rounded-16 border border-slate-100">
        <h2 className="text-20 font-bold leading-24 tracking--1">Atomic Design Note</h2>
        <div className="space-y-12 text-15 text-slate-600 leading-24 tracking--1">
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Height:</strong> 탭 리스트의 높이는 40px(h-40)로 버튼 규격과 일치합니다.</li>
                <li><strong>Radius:</strong> 컨테이너는 8px(rounded-8), 내부 아이템은 4px(rounded-4)의 위계적 곡률을 사용합니다.</li>
                <li><strong>UX:</strong> 키보드 방향키를 통한 탭 전환 접근성을 기본으로 포함합니다.</li>
            </ul>
        </div>
      </section>
    </div>
  );
}