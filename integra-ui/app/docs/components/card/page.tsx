import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
 * [Integra UI - Card Document SAI Version]
 * 콘텐츠를 그룹화하는 컨테이너 컴포넌트 문서입니다.
 */
export default function CardDocsPage() {
  // 1. 카드 전용 디자인 토큰 데이터
  const designTokens = [
    { property: "Border Radius (곡률)", class: "rounded-{px}", value: "rounded-16" },
    { property: "Container Padding (내부 여백)", class: "p-{px}", value: "p-24" },
    { property: "Border Color (테두리)", class: "border-{token}", value: "border-integra-gray-100" },
    { property: "Shadow (그림자)", class: "shadow-{token}", value: "shadow-integra" },
    { property: "Title Font Size (제목)", class: "fs-{px}", value: "fs-24" },
    { property: "Description Font Size (설명)", class: "fs-{px}", value: "fs-14" },
  ];

  return (
    <div className="space-y-64 pb-80">
      
      {/* 1. 헤더 섹션: 표준 Breadcrumb 적용 및 설명글 줄바꿈 규격 준수 */}
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
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">Card</h1>
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          관련된 콘텐츠와 동작을 하나의 주제로 묶어서 보여주는 컨테이너입니다.<br />
          헤더, 본문, 푸터를 조합하여 다양한 형태의 레이아웃을 유연하게 생성할 수 있습니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 인터랙티브 플레이그라운드: max-w-960 규격 적용 */}
      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500 font-medium">Static Preview</Badge>
        </div>
        <div className="flex min-h-240 items-center justify-center rounded-12 border border-integra-gray-200 bg-integra-gray-50 border-dashed p-40 max-w-960 mx-auto w-full">
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

      {/* 3. 디자인 토큰 섹션: 수치와 클래스의 1:1 매칭 명세 */}
      <section className="space-y-24">
        <div className="space-y-8">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">디자인 토큰</h2>
            <p className="fs-16 text-integra-gray-500">카드의 조형적 안정감을 결정하는 아토믹 클래스와 실제 수치 명세입니다.</p>
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
            <p>카드는 시스템 전체의 입체감과 질서를 결정하는 원자들의 집합입니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Padding:</strong> 모든 방향에 24px(p-24)의 넉넉한 여백을 제공하여 콘텐츠의 호흡을 확보합니다.</li>
                <li><strong>Radius:</strong> 16px(rounded-16)을 사용하여 큰 컨테이너 특유의 부드럽고 안정적인 인상을 줍니다.</li>
                <li><strong>Depth:</strong> Integra 고유의 <code>shadow-integra</code> 토큰을 사용하여 과하지 않은 부유감을 표현합니다.</li>
            </ul>
        </div>
      </section>

      {/* 5. 사용법 */}
      <section className="space-y-16">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <div className="rounded-12 bg-integra-gray-900 p-24 overflow-x-auto font-mono fs-14 leading-24 shadow-2xl text-white">
            <p className="text-integra-gray-500 mb-8">// Import components</p>
            <code className="block text-integra-blue-400">
                import &#123; Card, CardHeader, CardTitle, CardContent, CardFooter &#125; from "@/components/ui/card"
            </code>
        </div>
      </section>

    </div>
  );
}