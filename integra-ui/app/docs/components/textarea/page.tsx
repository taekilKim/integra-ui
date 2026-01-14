import { TextareaDemo } from "@/components/demo/textarea-demo";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export default function TextareaDocsPage() {
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
              <BreadcrumbPage>Textarea</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900">Textarea</h1>
        <p className="fs-20 text-integra-gray-500 leading-32">
          사용자가 여러 줄의 텍스트를 입력할 수 있는 멀티라인 폼 요소입니다.<br />
          Input과 동일한 원자적 디자인 언어를 공유하며, 긴 글의 가독성에 최적화되어 있습니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 인터랙티브 플레이그라운드 */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500">Interactive</Badge>
        </div>
        <TextareaDemo />
      </section>

      {/* 3. 아토믹 설계 원리 설명: bg-integra-gray-50 및 fs- 접두사 적용 */}
      <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
        <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
        <div className="space-y-12 fs-15 text-integra-gray-600 leading-24 tracking--1">
            <p>텍스트 영역은 정보의 양에 유연하게 반응하며 일관된 정렬 리듬을 유지합니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Min-Height:</strong> 80px(h-80)의 최소 높이를 원자로 정의하여 최소한의 입력 가시성을 확보합니다.</li>
                <li><strong>Typography:</strong> 긴 글의 시각적 피로도를 줄이기 위해 1.5배(24px) 행간을 엄격하게 적용합니다.</li>
                <li><strong>Radius:</strong> 인풋 시스템 표준인 8px(rounded-8) 곡률을 공유하여 폼 전체의 통일감을 부여합니다.</li>
            </ul>
        </div>
      </section>

      {/* 4. 사용법: bg-integra-gray-900 및 표준 코드 스타일 적용 */}
      <section className="space-y-16">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <div className="rounded-8 bg-integra-gray-900 p-20 overflow-x-auto font-mono fs-14 leading-24 text-white">
            <p className="text-integra-gray-500 mb-8">// Import the component</p>
            <p className="text-blue-400">import &#123; Textarea &#125; from "@/components/ui/textarea"</p>
            <br />
            <p className="text-integra-gray-500 mb-8">// Basic usage</p>
            <p className="text-white">&lt;Textarea placeholder="Type your message here." /&gt;</p>
        </div>
      </section>

    </div>
  );
}