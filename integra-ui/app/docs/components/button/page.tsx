// app/docs/components/button/page.tsx 전문
import { ButtonDemo } from "@/components/demo/button-demo";
import { Badge } from "@/components/ui/badge";

export default function ButtonDocsPage() {
  return (
    <div className="space-y-48 pb-80">
      
      {/* 1. 헤더 영역 */}
      <div className="space-y-16">
        <div className="flex items-center gap-8 text-12 text-integra-gray-700">
            <span>Components</span>
            <span>/</span>
            <span className="font-bold">Button</span>
        </div>
        <h1 className="text-40 font-semibold leading-48">Button</h1>
        <p className="text-18 text-integra-gray-700 leading-28">
          사용자의 동작을 트리거하거나, 폼을 전송할 때 사용하는 핵심 컴포넌트입니다.<br></br>아토믹 토큰의 조합으로 정교한 크기와 스타일을 제공합니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 인터랙티브 플레이그라운드 */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="text-24 font-bold tracking--2 leading-32">Playground</h2>
            <Badge variant="outline" className="text-12 px-8 py-2">Interactive</Badge>
        </div>
        
        {/* 데모 컴포넌트 호출 */}
        <ButtonDemo />
      </section>

      {/* 3. 아토믹 설계 원리 설명 */}
      <section className="space-y-16 p-32 bg-slate-50 rounded-16 border border-slate-100">
        <h2 className="text-20 font-bold leading-24 tracking--1">Atomic Design Note</h2>
        <div className="space-y-12 text-15 text-slate-600 leading-24 tracking--1">
            <p>
                Integra UI의 버튼은 내부 패딩, 폰트 크기, 행간이 각각 독립된 토큰으로 구성됩니다.
            </p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Height:</strong> 32px(sm), 48px(md), 56px(default)로 규격화되어 있습니다.</li>
                <li><strong>Font:</strong> 가독성을 위해 12px, 14px, 16px 폰트와 최적화된 행간이 자동 매칭됩니다.</li>
                <li><strong>Radius:</strong> 기본적으로 16px(rounded-16) 곡률을 사용하여 부드러운 인상을 줍니다.</li>
            </ul>
        </div>
      </section>

      {/* 4. 사용법 */}
      <section className="space-y-16">
        <h2 className="text-24 font-bold tracking--2 leading-32">Usage</h2>
        <div className="rounded-8 bg-slate-950 p-20 overflow-x-auto font-mono text-14 leading-24">
            <p className="text-slate-500 mb-8">// Import the component</p>
            <p className="text-blue-400">import &#123; Button &#125; from "@/components/ui/button"</p>
            <br />
            <p className="text-slate-500 mb-8">// Basic usage</p>
            <p className="text-white">&lt;Button variant="default" size="default"&gt;버튼 라벨&lt;/Button&gt;</p>
        </div>
      </section>

    </div>
  );
}