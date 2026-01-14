import { SelectDemo } from "@/components/demo/select-demo";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export default function SelectDocsPage() {
  return (
    <div className="space-y-48 pb-80">
      
      {/* 1. 헤더 섹션: 표준 Breadcrumb 적용 및 설명글 줄바꿈 */}
      <div className="space-y-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Select</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900">Select</h1>
        <p className="fs-20 text-integra-gray-500 leading-32">
          제한된 옵션 목록에서 하나를 선택할 때 사용하는 드롭다운 컴포넌트입니다.<br />
          Radix UI 기반의 견고한 로직과 Integra UI의 아토믹 스타일이 정교하게 결합되었습니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 인터랙티브 플레이그라운드 */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500">Interactive</Badge>
        </div>
        <SelectDemo />
      </section>

      {/* 3. 아토믹 설계 원리 설명: bg-integra-gray-50 및 fs- 접두사 적용 */}
      <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
        <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
        <div className="space-y-12 fs-15 text-integra-gray-600 leading-24 tracking--1">
            <p>셀렉트는 다층 레이어 구조(Trigger & Content)를 원자적으로 관리합니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Shadow:</strong> 드롭다운 박스는 <code>shadow-integra</code> 토큰을 사용하여 부유감을 주며 계층을 분리합니다.</li>
                <li><strong>Radius:</strong> 트리거와 콘텐츠 박스 모두 8px(rounded-8) 곡률을 사용하여 시스템의 일관성을 유지합니다.</li>
                <li><strong>Spacing:</strong> 리스트 아이템 내부 패딩은 가로 32px를 확보하여 체크 아이콘과의 시각적 간섭을 방지합니다.</li>
            </ul>
        </div>
      </section>

      {/* 4. 사용법: bg-integra-gray-900 및 표준 코드 스타일 적용 */}
      <section className="space-y-16">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <div className="rounded-8 bg-integra-gray-900 p-20 overflow-x-auto font-mono fs-14 leading-24 text-white">
            <p className="text-integra-gray-500 mb-8">// Import the components</p>
            <p className="text-blue-400">import &#123; Select, SelectContent, SelectItem, SelectTrigger, SelectValue &#125; from "@/components/ui/select"</p>
            <br />
            <p className="text-integra-gray-500 mb-8">// Basic usage</p>
            <p className="text-white">
              &lt;Select&gt;<br />
              &nbsp;&nbsp;&lt;SelectTrigger className="w-180"&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;SelectValue placeholder="Theme" /&gt;<br />
              &nbsp;&nbsp;&lt;/SelectTrigger&gt;<br />
              &nbsp;&nbsp;&lt;SelectContent&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;SelectItem value="light"&gt;Light&lt;/SelectItem&gt;<br />
              &nbsp;&nbsp;&lt;/SelectContent&gt;<br />
              &lt;/Select&gt;
            </p>
        </div>
      </section>

    </div>
  );
}