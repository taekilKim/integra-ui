import { ToastDemo } from "@/components/demo/toast-demo";
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
 * [Integra UI - Toast Document SAI Version]
 * 사용자 액션에 대한 피드백을 비침습적으로 전달하는 알림 시스템 문서입니다.
 */
export default function ToastDocsPage() {
  // 1. 토스트 전용 디자인 토큰 데이터
  const designTokens = [
    { property: "Max Width (최대 너비)", class: "max-w-{px}", value: "max-w-400" },
    { property: "Padding (내부 여백)", class: "p-{px}", value: "p-16" },
    { property: "Border Radius (곡률)", class: "rounded-{px}", value: "rounded-12" },
    { property: "Title Font Size (제목)", class: "fs-{px}", value: "fs-14" },
    { property: "Desc Font Size (설명)", class: "fs-{px}", value: "fs-13" },
    { property: "Line Height (행간)", class: "leading-{px}", value: "leading-20" },
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
              <BreadcrumbPage>Toast</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">
          Toast
        </h1>
        
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          사용자의 액션에 대한 결과나 상태 피드백을 화면 구석에 잠시 보여주는 알림 시스템입니다.<br />
          중요도가 높지만 사용자의 현재 작업을 방해하지 않아야 하는 정보 전달에 최적화되어 있습니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 인터랙티브 플레이그라운드 */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500 font-medium">Interactive</Badge>
        </div>
        <ToastDemo />
      </section>

      {/* 3. 디자인 토큰 섹션: 수치와 클래스의 1:1 매칭 명세 */}
      <section className="space-y-24">
        <div className="space-y-8">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">디자인 토큰</h2>
            <p className="fs-16 text-integra-gray-500">토스트의 고밀도 레이아웃을 결정하는 아토믹 클래스와 실제 수치 명세입니다.</p>
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
            <p>토스트는 제한된 공간 내에서 정보 밀도를 극대화하도록 설계된 원자들의 집합입니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Placement Strategy:</strong> 데스크탑에서는 우측 하단, 모바일에서는 상단 중앙(max-w-400)에 고정되어 시각적 간섭을 최소화합니다.</li>
                <li><strong>Hybrid Typography:</strong> 제목은 14px(fs-14) Bold를 사용하여 시인성을 확보하고, 설명은 정보 밀도를 높이기 위해 13px(fs-13) Regular 토큰을 전략적으로 사용합니다.</li>
                <li><strong>Soft Overlay:</strong> 12px(rounded-12) 곡률과 <code>shadow-integra</code>를 조합하여 본문과 분리된 부드러운 오버레이 레이어를 형성합니다.</li>
            </ul>
        </div>
      </section>

      {/* 5. 사용법 */}
      <section className="space-y-16">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <div className="rounded-12 bg-integra-gray-900 p-24 overflow-x-auto font-mono fs-14 leading-24 shadow-2xl text-white">
            <p className="text-integra-gray-500 mb-8">// Use custom hook to trigger toast</p>
            <p className="text-integra-blue-400">import &#123; useToast &#125; from "@/hooks/use-toast"</p>
            <br />
            <p className="text-white">
              const &#123; toast &#125; = useToast();<br /><br />
              toast(&#123;<br />
              &nbsp;&nbsp;title: "Success",<br />
              &nbsp;&nbsp;description: "Changes have been saved."<br />
              &#125;);
            </p>
        </div>
      </section>

    </div>
  );
}