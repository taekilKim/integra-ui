import { TabsDemo } from "@/components/demo/tabs-demo";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export default function TabsDocsPage() {
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
              <BreadcrumbPage>Tabs</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900">Tabs</h1>
        <p className="fs-20 text-integra-gray-500 leading-32">
          동일한 맥락의 콘텐츠를 그룹화하여 사용자가 선택적으로 탐색할 수 있도록 돕는 전환형 메뉴입니다.<br />
          화면 전환 없이 대량의 정보를 효율적으로 구조화하는 아토믹 내비게이션입니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 인터랙티브 플레이그라운드 */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500">Interactive</Badge>
        </div>
        <TabsDemo />
      </section>

      {/* 3. 아토믹 설계 원리 설명: bg-integra-gray-50 및 fs- 접두사 적용 */}
      <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
        <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
        <div className="space-y-12 fs-15 text-integra-gray-600 leading-24 tracking--1">
            <p>탭은 정보의 밀도와 위계를 원자적으로 제어하는 컴포넌트입니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Height:</strong> 탭 리스트의 전체 높이는 40px(h-40)로 설정되어 버튼 규격과 시각적 조화를 이룹니다.</li>
                <li><strong>Radius:</strong> 외곽 컨테이너는 8px(rounded-8), 내부의 활성 탭 아이템은 4px(rounded-4)의 위계적 곡률을 가집니다.</li>
                <li><strong>UX:</strong> 키보드 방향키를 통한 탭 전환과 WAI-ARIA 표준을 준수하여 웹 접근성을 보장합니다.</li>
            </ul>
        </div>
      </section>

      {/* 4. 사용법: bg-integra-gray-900 및 표준 코드 스타일 적용 */}
      <section className="space-y-16">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <div className="rounded-8 bg-integra-gray-900 p-20 overflow-x-auto font-mono fs-14 leading-24 text-white">
            <p className="text-integra-gray-500 mb-8">// Import the components</p>
            <p className="text-blue-400">import &#123; Tabs, TabsContent, TabsList, TabsTrigger &#125; from "@/components/ui/tabs"</p>
            <br />
            <p className="text-integra-gray-500 mb-8">// Basic usage</p>
            <p className="text-white">
              &lt;Tabs defaultValue="account"&gt;<br />
              &nbsp;&nbsp;&lt;TabsList&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;TabsTrigger value="account"&gt;Account&lt;/TabsTrigger&gt;<br />
              &nbsp;&nbsp;&lt;/TabsList&gt;<br />
              &nbsp;&nbsp;&lt;TabsContent value="account"&gt;Content...&lt;/TabsContent&gt;<br />
              &lt;/Tabs&gt;
            </p>
        </div>
      </section>

    </div>
  );
}