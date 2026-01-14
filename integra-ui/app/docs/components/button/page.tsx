import { ButtonDemo } from "@/components/demo/button-demo";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

/**
 * [Integra UI - Button Document SAI Standard]
 * 모든 수치는 4px/2px 그리드 및 fs- 접두사를 사용합니다.
 * 설명글은 max-w-720을 배제하고 수동 줄바꿈(<br />)을 적용합니다.
 */
export default function ButtonDocsPage() {
  return (
    <div className="space-y-48 pb-80">
      
      {/* 1. 헤더 섹션: 표준 Breadcrumb 컴포넌트 적용 */}
      <div className="space-y-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Button</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">
          Button
        </h1>
        
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          사용자의 동작을 트리거하거나 폼을 전송할 때 사용하는 핵심 컴포넌트입니다.<br />
          아토믹 토큰의 정밀한 조합으로 다양한 위계와 최적화된 규격을 제공합니다.
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

      {/* 3. 아토믹 설계 원리 설명: bg-integra-gray-50 적용 */}
      <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
        <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
        <div className="space-y-12 fs-15 text-integra-gray-600 leading-24 tracking--1">
            <p>
                Integra UI의 버튼은 내부 패딩, 폰트 크기, 행간이 각각 독립된 원자(Atoms)로 구성됩니다.
            </p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Height:</strong> 32px, 48px, 56px 규격을 엄격히 준수하여 수직 리듬을 형성합니다.</li>
                <li><strong>Font:</strong> 가독성을 위해 fs-12, fs-16, fs-18 폰트와 원자 단위 행간 토큰을 개별 조합합니다.</li>
                <li><strong>Radius:</strong> 8px, 12px, 16px 곡률을 사용하여 크기에 비례하는 시각적 안정감을 제공합니다.</li>
            </ul>
        </div>
      </section>

      {/* 4. 사용법: bg-integra-gray-900 적용 */}
      <section className="space-y-16">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <div className="rounded-12 bg-integra-gray-900 p-24 overflow-x-auto font-mono fs-14 leading-24 shadow-2xl">
            <p className="text-integra-gray-500 mb-8">// Import the component</p>
            <p className="text-integra-blue-400">import &#123; Button &#125; from "@/components/ui/button"</p>
            <br />
            <p className="text-integra-gray-500 mb-8">// Basic usage</p>
            <p className="text-white">&lt;Button appearance="default" variant="default"&gt;Click me&lt;/Button&gt;</p>
        </div>
      </section>

    </div>
  );
}