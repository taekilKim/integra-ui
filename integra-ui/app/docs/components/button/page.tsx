import { ButtonDemo } from "@/components/demo/button-demo";
import { Badge } from "@/components/ui/badge";

export default function ButtonDocsPage() {
  return (
    <div className="space-y-48 pb-80">
      
      {/* 1. 헤더 섹션 */}
      <div className="space-y-16">
        <div className="flex items-center gap-8 fs-12 text-integra-gray-700">
            <span>Components</span>
            <span>/</span>
            <span className="font-bold">Button</span>
        </div>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900">Button</h1>
        <p className="fs-20 text-integra-gray-500 leading-32">
          사용자의 동작을 트리거하거나 폼을 전송할 때 사용하는 핵심 컴포넌트입니다.<br></br>아토믹 토큰의 조합으로 정교한 크기와 스타일을 제공합니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 인터랙티브 플레이그라운드 */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500">Interactive</Badge>
        </div>
        
        <ButtonDemo />
      </section>

      {/* 3. 아토믹 설계 원리 설명: bg-integra-gray-50, text-integra-gray-600 적용 */}
      <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
        <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
        <div className="space-y-12 fs-15 text-integra-gray-600 leading-24 tracking--1">
            <p>
                Integra UI의 버튼은 내부 패딩, 폰트 크기, 행간이 각각 독립된 토큰으로 구성됩니다.
            </p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Height:</strong> 32px, 48px, 56px 규격을 엄격히 준수합니다.</li>
                <li><strong>Font:</strong> 12px, 16px, 18px 폰트와 원자 단위 행간 토큰을 조합합니다.</li>
                <li><strong>Radius:</strong> 8px, 12px, 16px 곡률을 사용하여 크기에 비례하는 부드러움을 제공합니다.</li>
            </ul>
        </div>
      </section>

      {/* 4. 사용법: bg-integra-gray-900 적용 */}
      <section className="space-y-16">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <div className="rounded-8 bg-integra-gray-900 p-20 overflow-x-auto font-mono fs-14 leading-24">
            <p className="text-integra-gray-500 mb-8">// Import the component</p>
            <p className="text-blue-400">import &#123; Button &#125; from "@/components/ui/button"</p>
            <br />
            <p className="text-integra-gray-500 mb-8">// Basic usage</p>
            <p className="text-white">&lt;Button appearance="default" variant="default"&gt;Click me&lt;/Button&gt;</p>
        </div>
      </section>

    </div>
  );
}