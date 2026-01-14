import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function CardDocsPage() {
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
              <BreadcrumbPage>Card</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900">Card</h1>
        <p className="fs-20 text-integra-gray-500 leading-32">
          관련된 콘텐츠와 동작을 하나의 주제로 묶어서 보여주는 컨테이너입니다.<br />
          헤더, 본문, 푸터를 조합하여 다양한 형태의 레이아웃을 생성할 수 있습니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 인터랙티브 플레이그라운드 (Static Preview) */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500">Static Preview</Badge>
        </div>
        <div className="flex min-h-240 items-center justify-center rounded-12 border border-integra-gray-200 bg-integra-gray-50 border-dashed p-40">
          <Card className="w-320 bg-white shadow-integra">
            <CardHeader>
              <CardTitle>Project Card</CardTitle>
              <CardDescription>Integrate your design system easily.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="fs-16 text-integra-gray-700 leading-24">아토믹 토큰 시스템으로 제작된 카드 컴포넌트입니다.</p>
            </CardContent>
            <CardFooter className="justify-end gap-8">
              <Button appearance="text" variant="secondary" size="small">Cancel</Button>
              <Button appearance="default" variant="default" size="small">Confirm</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* 3. 아토믹 설계 원리 설명: bg-integra-gray-50 및 fs- 접두사 적용 */}
      <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
        <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
        <div className="space-y-12 fs-15 text-integra-gray-600 leading-24 tracking--1">
            <p>카드는 시스템 전체의 조형미를 결정하는 가장 큰 원자들의 모임입니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Padding:</strong> 모든 방향에 24px(p-24)의 넉넉한 여백을 제공합니다.</li>
                <li><strong>Radius:</strong> 16px(rounded-16)을 사용하여 큰 요소 특유의 안정감을 줍니다.</li>
                <li><strong>Shadow:</strong> Integra 고유의 <code>shadow-integra</code>를 사용하여 부드러운 깊이감을 표현합니다.</li>
            </ul>
        </div>
      </section>

      {/* 4. 사용법: bg-integra-gray-900 및 표준 코드 스타일 적용 */}
      <section className="space-y-16">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <div className="rounded-8 bg-integra-gray-900 p-20 overflow-x-auto font-mono fs-14 leading-24 text-white">
            <p className="text-integra-gray-500 mb-8">// Import the component</p>
            <p className="text-blue-400">import &#123; Card, CardHeader, CardTitle, CardContent, CardFooter &#125; from "@/components/ui/card"</p>
            <br />
            <p className="text-integra-gray-500 mb-8">// Basic usage</p>
            <p className="text-white">&lt;Card&gt;...&lt;/Card&gt;</p>
        </div>
      </section>

    </div>
  );
}