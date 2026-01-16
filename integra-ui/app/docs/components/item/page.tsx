import { ItemDemo } from "@/components/demo/item-demo";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";

export default function ItemDocsPage() {
  const designTokens = [
    { property: "Default Height", class: "h-40", value: "40px" },
    { property: "Small Height", class: "h-32", value: "32px" },
    { property: "Default Font Size", class: "fs-14", value: "14px" },
    { property: "Small Font Size", class: "fs-13", value: "13px" },
    { property: "Border Radius", class: "rounded-8", value: "8px" },
    { property: "Active Background", class: "bg-integra-gray-50", value: "Gray 50" },
  ];

  return (
    <div className="space-y-64 pb-120">
      <div className="space-y-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/docs/components">Components</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbPage>Item</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">Item</h1>
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          모든 리스트, 메뉴, 드롭다운의 기초가 되는 원자적 컨테이너입니다.<br />
          버튼과 유사하지만 '액션'이 아닌 '선택'과 '표시'에 집중하여 설계되었습니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      <section className="space-y-16">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
        <ItemDemo />
      </section>

      <section className="space-y-24">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">디자인 토큰</h2>
        <div className="rounded-12 border border-integra-gray-100 overflow-hidden shadow-sm">
            {/* ... (테이블 코드) ... */}
        </div>
      </section>

      <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
        <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
        <div className="space-y-12 fs-15 text-integra-gray-600 leading-24 tracking--1">
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Role & Hierarchy:</strong> <code>font-medium</code>을 사용하여 <code>font-semibold</code>인 버튼보다 시각적 위계를 낮춥니다.</li>
                <li><strong>State Management:</strong> <code>data-[state=on]</code> 속성을 통해 선택(Active) 상태의 스타일을 제어합니다.</li>
                <li><strong>Composition:</strong> 아이콘, 텍스트, 상태 표시(체크) 등 다른 원자들을 유연하게 담을 수 있는 컨테이너 역할을 수행합니다.</li>
            </ul>
        </div>
      </section>
    </div>
  );
}