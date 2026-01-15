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

/**
 * [Integra UI - Tabs Document SAI Version]
 * 동일 맥락의 콘텐츠를 그룹화하여 전환하는 내비게이션 컴포넌트 문서입니다.
 */
export default function TabsDocsPage() {
  // 1. 탭 전용 디자인 토큰 데이터
  const designTokens = [
    { property: "List Height (전체 높이)", class: "h-{px}", value: "h-40" },
    { property: "List Radius (외곽 곡률)", class: "rounded-{px}", value: "rounded-8" },
    { property: "Trigger Radius (내부 곡률)", class: "rounded-{px}", value: "rounded-4" },
    { property: "Trigger Padding (내부 여백)", class: "px-12 py-4", value: "12px / 4px" },
    { property: "Font Size (글자 크기)", class: "fs-{px}", value: "fs-14" },
    { property: "Content Margin (본문 간격)", class: "mt-{px}", value: "mt-8" },
  ];

  return (
    <div className="space-y-64 pb-120">
      
      {/* 1. 헤더 섹션: 표준 Breadcrumb 적용 및 설명글 줄바꿈 규격 준수 */}
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
        
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">
          Tabs
        </h1>
        
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          동일한 맥락의 콘텐츠를 그룹화하여 사용자가 선택적으로 탐색할 수 있도록 돕는 전환형 메뉴입니다.<br />
          화면 전환 없이 대량의 정보를 효율적으로 구조화하는 정교한 아토믹 내비게이션입니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 인터랙티브 플레이그라운드 */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500 font-medium">Interactive</Badge>
        </div>
        <TabsDemo />
      </section>

      {/* 3. 디자인 토큰 섹션: 수치와 클래스의 1:1 매칭 명세 */}
      <section className="space-y-24">
        <div className="space-y-8">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">디자인 토큰</h2>
            <p className="fs-16 text-integra-gray-500">탭 시스템의 위계와 간격을 결정하는 아토믹 클래스와 실제 수치 명세입니다.</p>
        </div>
        <div className="rounded-12 border border-integra-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
                <thead className="bg-integra-gray-50 border-b border-integra-gray-200">
                    <tr className="fs-12 font-bold text-integra-gray-400">
                        <th className="px-24 py-16">속성 (Property)</th>
                        <th className="px-24 py-16">토큰 클래스</th>
                        <th className="px-24 py-16">Value</th>
                    </tr>
                </thead>
                <tbody className="divide-y border-integra-gray-100 fs-14">
                    {designTokens.map((token) => (
                        <tr key={token.property} className="hover:bg-integra-gray-50/50 transition-colors">
                            <td className="px-24 py-16 font-medium text-integra-gray-700">{token.property}</td>
                            <td className="px-24 py-16 font-mono text-integra-blue-600 font-bold">{token.class}</td>
                            <td className="px-24 py-16 font-mono text-integra-gray-900">{token.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </section>

      {/* 4. 아토믹 설계 원리 설명: bg-integra-gray-50 적용 */}
      <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
        <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
        <div className="space-y-12 fs-15 text-integra-gray-600 leading-24 tracking--1">
            <p>탭은 정보의 밀도와 시각적 위계를 원자 단위로 제어하는 컴포넌트입니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Height Logic:</strong> 탭 리스트의 전체 높이는 40px(h-40)로 설정되어 버튼/인풋 규격과 시각적 평형을 이룹니다.</li>
                <li><strong>Hierarchical Radius:</strong> 외곽 컨테이너는 8px(rounded-8), 내부의 선택 아이템은 4px(rounded-4)의 중첩 곡률을 사용합니다.</li>
                <li><strong>Semantic States:</strong> 활성화된 탭은 <code>bg-white</code>와 <code>gray-900</code> 토큰을 사용하여 배경과의 명확한 대비를 형성합니다.</li>
            </ul>
        </div>
      </section>

      {/* 5. 사용법 */}
      <section className="space-y-16">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <div className="rounded-12 bg-integra-gray-900 p-24 overflow-x-auto font-mono fs-14 leading-24 shadow-2xl text-white">
            <p className="text-integra-gray-500 mb-8">// Import the components</p>
            <p className="text-integra-blue-400">import &#123; Tabs, TabsList, TabsTrigger, TabsContent &#125; from "@/components/ui/tabs"</p>
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