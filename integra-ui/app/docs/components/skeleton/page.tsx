import { SkeletonDemo } from "@/components/demo/skeleton-demo";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export default function SkeletonDocsPage() {
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
              <BreadcrumbPage>Skeleton</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900">Skeleton</h1>
        <p className="fs-20 text-integra-gray-500 leading-32">
          실제 콘텐츠가 로드되기 전에 레이아웃의 뼈대를 보여주는 컴포넌트입니다.<br />
          사용자에게 진행 상태를 시각적으로 전달하여 더 빠른 응답성을 느끼게 합니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 인터랙티브 플레이그라운드 */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500">Interactive Preview</Badge>
        </div>
        <SkeletonDemo />
      </section>

      {/* 3. 아토믹 설계 원리 설명: bg-integra-gray-50 및 fs- 접두사 적용 */}
      <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
        <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
        <div className="space-y-12 fs-15 text-integra-gray-600 leading-24 tracking--1">
            <p>스켈레톤은 원본 컴포넌트의 기하학적 수치를 그대로 복제하여 설계합니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Animation:</strong> <code>animate-pulse</code> 토큰을 사용하여 부드럽게 점멸하는 시각 효과를 제공합니다.</li>
                <li><strong>Color:</strong> <code>bg-integra-gray-100</code>을 기본값으로 사용하여 정갈한 로딩 상태를 구현합니다.</li>
                <li><strong>Radius:</strong> 콘텐츠 원자의 형태에 따라 <code>rounded-full</code> 혹은 <code>rounded-8</code> 등을 유연하게 조합합니다.</li>
            </ul>
        </div>
      </section>

      {/* 4. 사용법: bg-integra-gray-900 및 표준 코드 스타일 적용 */}
      <section className="space-y-16">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <div className="rounded-8 bg-integra-gray-900 p-20 overflow-x-auto font-mono fs-14 leading-24 text-white">
            <p className="text-integra-gray-500 mb-8">// Import the component</p>
            <p className="text-blue-400">import &#123; Skeleton &#125; from "@/components/ui/skeleton"</p>
            <br />
            <p className="text-integra-gray-500 mb-8">// Basic usage</p>
            <p className="text-white">&lt;Skeleton className="h-48 w-48 rounded-full" /&gt;</p>
        </div>
      </section>

    </div>
  );
}