import { ToggleDemo } from "@/components/demo/toggle-demo";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";

export default function ToggleDocsPage() {
  const designTokens = [
    { property: "Default Height", class: "h-40", value: "40px" },
    { property: "Small Height", class: "h-32", value: "32px" },
    { property: "Default Font Size", class: "fs-14", value: "14px" },
    { property: "Active Background", class: "data-[state=on]:bg-{token}", value: "integra-gray-100" },
    { property: "Default Radius", class: "rounded-8", value: "8px" },
  ];

  return (
    <div className="space-y-64 pb-120">
      <div className="space-y-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/docs/components">Components</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbPage>Toggle</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">Toggle</h1>
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          선택 상태를 유지하거나 해제하는 2단계 버튼입니다.<br />
          에디터의 텍스트 스타일링이나 필터 활성화 등에 사용됩니다.
        </p>
      </div>
      <hr />
      <section className="space-y-16">
        <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">Playground</h2>
        <ToggleDemo />
      </section>
      <section className="space-y-24">
        <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">디자인 토큰</h2>
        <div className="rounded-12 border border-integra-gray-100 overflow-hidden shadow-sm">
            {/* ... (디자인 토큰 테이블) ... */}
        </div>
      </section>
      <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
        <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
        <div className="space-y-12 fs-15 text-integra-gray-600 leading-24 tracking--1">
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Stateful Button:</strong> 버튼과 시각적 위계를 공유하지만, <code>data-[state=on]</code>을 통해 '눌린 상태'를 유지하는 차이점이 있습니다.</li>
                <li><strong>Semantic State:</strong> 활성화 시 <code>integra-gray-100</code> 배경을 사용하여 Primary 버튼과의 역할 충돌을 피합니다.</li>
                <li><strong>Composition:</strong> 여러 토글을 묶어 <code>Toggle Group</code> 패턴을 만들 수 있습니다.</li>
            </ul>
        </div>
      </section>
    </div>
  );
}