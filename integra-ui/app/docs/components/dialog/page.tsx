import { DialogDemo } from "@/components/demo/dialog-demo";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export default function DialogDocsPage() {
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
              <BreadcrumbPage>Dialog</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900">Dialog (Modal)</h1>
        <p className="fs-20 text-integra-gray-500 leading-32">
          사용자의 집중이 필요한 중요한 작업을 수행하거나 정보를 표시할 때 사용하는 오버레이 컴포넌트입니다.<br />
          화면의 흐름을 제어하며 명확한 의사결정을 유도하는 아토믹 레이어입니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 인터랙티브 플레이그라운드 */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500">Interactive</Badge>
        </div>
        <DialogDemo />
      </section>

      {/* 3. 아토믹 설계 원리 설명: bg-integra-gray-50 및 fs- 접두사 적용 */}
      <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
        <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
        <div className="space-y-12 fs-15 text-integra-gray-600 leading-24 tracking--1">
            <p>Integra UI의 다이얼로그는 카드 및 다른 인풋 요소와 원자적 정렬을 공유합니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Width:</strong> 기본 400px(max-w-400)로 설정되어 최적의 가독성 범위를 유지합니다.</li>
                <li><strong>Spacing:</strong> 내부 패딩 24px(p-24)과 요소 간 간격 16px(gap-16)을 사용합니다.</li>
                <li><strong>Radius:</strong> 16px(rounded-16)을 적용하여 부드럽고 안정적인 인상을 줍니다.</li>
            </ul>
        </div>
      </section>

      {/* 4. 사용법: bg-integra-gray-900 및 표준 코드 스타일 적용 */}
      <section className="space-y-16">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <div className="rounded-8 bg-integra-gray-900 p-20 overflow-x-auto font-mono fs-14 leading-24 text-white">
            <p className="text-integra-gray-500 mb-8">// Import the components</p>
            <p className="text-blue-400">import &#123; Dialog, DialogContent, DialogTrigger &#125; from "@/components/ui/dialog"</p>
            <br />
            <p className="text-integra-gray-500 mb-8">// Basic usage</p>
            <p className="text-white">&lt;Dialog&gt;<br />
            &nbsp;&nbsp;&lt;DialogTrigger&gt;Open&lt;/DialogTrigger&gt;<br />
            &nbsp;&nbsp;&lt;DialogContent&gt;...&lt;/DialogContent&gt;<br />
            &lt;/Dialog&gt;</p>
        </div>
      </section>

    </div>
  );
}