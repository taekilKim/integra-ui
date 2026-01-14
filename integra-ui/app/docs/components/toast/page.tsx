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

export default function ToastDocsPage() {
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
              <BreadcrumbPage>Toast</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900">Toast</h1>
        <p className="fs-20 text-integra-gray-500 leading-32">
          사용자의 액션에 대한 결과나 상태 피드백을 화면 구석에 잠시 보여주는 알림 시스템입니다.<br />
          중요도가 높지만 사용자의 현재 작업을 방해하지 않아야 하는 정보 전달에 최적화되어 있습니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 인터랙티브 플레이그라운드 */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500">Interactive</Badge>
        </div>
        <ToastDemo />
      </section>

      {/* 3. 아토믹 설계 원리 설명: bg-integra-gray-50 및 fs- 접두사 적용 */}
      <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
        <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
        <div className="space-y-12 fs-15 text-integra-gray-600 leading-24 tracking--1">
            <p>토스트는 제한된 공간 내에서 정보 밀도를 극대화하도록 설계된 원자들의 집합입니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Placement:</strong> 데스크탑에서는 우측 하단, 모바일에서는 상단 중앙에 고정되어 시각적 간섭을 최소화합니다.</li>
                <li><strong>Typography:</strong> 제목은 14px(fs-14) Bold를 사용하며, 설명은 고밀도 가독성을 위해 13px(fs-13) Regular 토큰을 전략적으로 사용합니다.</li>
                <li><strong>Radius:</strong> 12px(rounded-12) 곡률을 적용하여 부드러운 오버레이 레이어의 특성을 강조합니다.</li>
            </ul>
        </div>
      </section>

      {/* 4. 사용법: bg-integra-gray-900 및 표준 코드 스타일 적용 */}
      <section className="space-y-16">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <div className="rounded-8 bg-integra-gray-900 p-20 overflow-x-auto font-mono fs-14 leading-24 text-white">
            <p className="text-integra-gray-500 mb-8">// Use hook to trigger toast</p>
            <p className="text-blue-400">import &#123; useToast &#125; from "@/hooks/use-toast"</p>
            <br />
            <p className="text-white">
              const &#123; toast &#125; = useToast();<br /><br />
              toast(&#123;<br />
              &nbsp;&nbsp;title: "Notification",<br />
              &nbsp;&nbsp;description: "Successfully saved changes."<br />
              &#125;);
            </p>
        </div>
      </section>

    </div>
  );
}