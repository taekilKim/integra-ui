import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export default function LabelDocsPage() {
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
              <BreadcrumbPage>Label</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900">Label</h1>
        <p className="fs-20 text-integra-gray-500 leading-32">
          입력 요소의 용도를 설명하는 원자 단위의 텍스트 컴포넌트입니다.<br />
          폼 요소와 유기적으로 연결되어 사용자 경험과 웹 접근성을 동시에 향상시킵니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 미리보기 섹션 */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Preview</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500">Static Preview</Badge>
        </div>
        <div className="flex min-h-160 items-center justify-center rounded-12 border border-integra-gray-200 bg-integra-gray-50 border-dashed p-40">
          <div className="flex items-center gap-8">
            <Checkbox id="terms-docs" />
            <Label htmlFor="terms-docs">이용약관에 동의합니다</Label>
          </div>
        </div>
      </section>

      {/* 3. 아토믹 설계 원리 설명: bg-integra-gray-50 및 fs- 접두사 적용 */}
      <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
        <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
        <div className="space-y-12 fs-15 text-integra-gray-600 leading-24 tracking--1">
            <p>라벨은 본문 텍스트보다 높은 시각적 가독성 밀도를 가집니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Typography:</strong> 14px(fs-14) Medium 굵기를 기본으로 사용하여 폼 요소와의 위계를 분리합니다.</li>
                <li><strong>Spacing:</strong> 체크박스나 인풋 등 원자 컴포넌트와 결합 시 8px(gap-8) 간격을 권장합니다.</li>
                <li><strong>Accessibility:</strong> <code>htmlFor</code> 속성을 통해 클릭 영역을 확장하고 스크린 리더와의 연결을 보장합니다.</li>
            </ul>
        </div>
      </section>

      {/* 4. 사용법: bg-integra-gray-900 및 표준 코드 스타일 적용 */}
      <section className="space-y-16">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <div className="rounded-8 bg-integra-gray-900 p-20 overflow-x-auto font-mono fs-14 leading-24 text-white">
            <p className="text-integra-gray-500 mb-8">// Import the component</p>
            <p className="text-blue-400">import &#123; Label &#125; from "@/components/ui/label"</p>
            <br />
            <p className="text-integra-gray-500 mb-8">// Basic usage</p>
            <p className="text-white">&lt;Label htmlFor="email"&gt;Email Address&lt;/Label&gt;</p>
        </div>
      </section>

    </div>
  );
}