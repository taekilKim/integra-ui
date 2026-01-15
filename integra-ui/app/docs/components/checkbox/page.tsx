import { CheckboxDemo } from "@/components/demo/checkbox-demo";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export default function CheckboxDocsPage() {
  const designTokens = [
    { property: "Size (크기)", class: "w-16 h-16", value: "16px" },
    { property: "Border Radius (곡률)", class: "rounded-4", value: "4px" },
    { property: "Gap (라벨 간격)", class: "gap-8", value: "8px" },
  ];

  return (
    <div className="space-y-64 pb-120">
      {/* 1. 헤더 섹션 */}
      <div className="space-y-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/docs/components">Components</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbPage>Checkbox</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">Checkbox</h1>
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          다중 선택을 지원하는 제어 컴포넌트입니다.<br />
          독립적인 선택부터 리스트 형태의 복합 패턴까지 일관된 아토믹 규격을 제공합니다.
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-48">
        <TabsList className="bg-integra-gray-50 p-4 rounded-8">
          <TabsTrigger value="overview" className="fs-14 font-medium">Overview</TabsTrigger>
          <TabsTrigger value="patterns" className="fs-14 font-medium">Extended Patterns</TabsTrigger>
        </TabsList>

        {/* 탭 1: 기본 개요 */}
        <TabsContent value="overview" className="space-y-64">
          <section className="space-y-16">
            <div className="flex items-center justify-between">
              <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">Playground</h2>
              <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500">Interactive</Badge>
            </div>
            <CheckboxDemo />
          </section>

          <section className="space-y-24">
            <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">디자인 토큰</h2>
            <div className="rounded-12 border border-integra-gray-100 overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead className="bg-integra-gray-50 border-b border-integra-gray-100">
                  <tr className="fs-12 font-bold text-integra-gray-400">
                    <th className="px-24 py-16">속성</th>
                    <th className="px-24 py-16">클래스</th>
                    <th className="px-24 py-16">Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y border-integra-gray-100 fs-14">
                  {designTokens.map((t) => (
                    <tr key={t.property} className="hover:bg-integra-gray-50/50">
                      <td className="px-24 py-16 font-medium text-integra-gray-700">{t.property}</td>
                      <td className="px-24 py-16 font-mono text-integra-blue-600 font-bold">.{t.class}</td>
                      <td className="px-24 py-16 font-mono text-integra-gray-900">{t.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </TabsContent>

        {/* 탭 2: 확장 패턴 (Checkbox List) */}
        <TabsContent value="patterns" className="space-y-48">
          <section className="space-y-16">
            <h3 className="fs-20 font-bold text-integra-gray-900">Checkbox List Group</h3>
            <div className="p-40 rounded-16 border border-integra-gray-200 bg-white max-w-960">
              <div className="grid gap-16 max-w-400 mx-auto">
                {[
                  { id: "p1", t: "Push Notifications", d: "Send me alerts via mobile" },
                  { id: "p2", t: "Email Digests", d: "Weekly summary of activity" }
                ].map((item) => (
                  <Label key={item.id} htmlFor={item.id} className="flex items-start gap-12 p-16 rounded-12 border border-integra-gray-100 cursor-pointer hover:bg-integra-gray-50 transition-all">
                    <Checkbox id={item.id} className="mt-2" />
                    <div className="grid gap-4">
                      <span className="fs-15 font-bold text-integra-gray-900">{item.t}</span>
                      <span className="fs-13 text-integra-gray-500 leading-20">{item.d}</span>
                    </div>
                  </Label>
                ))}
              </div>
            </div>
          </section>

          {/* ✨ 패턴 코드 레시피 */}
          <section className="space-y-24">
            <h3 className="fs-18 font-bold text-integra-gray-900">Pattern Recipe</h3>
            <p className="fs-14 text-integra-gray-600">카드 형태의 리스트 아이템을 조립하는 코드 예시입니다.</p>
            <div className="rounded-12 bg-integra-gray-900 p-24 overflow-x-auto font-mono fs-14 leading-24 text-white shadow-2xl">
              <pre>
{`<Label className="flex items-start gap-12 p-16 rounded-12 border border-integra-gray-100 
                cursor-pointer hover:bg-integra-gray-50 transition-all">
  <Checkbox id="item-1" className="mt-2" />
  <div className="grid gap-4">
    <span className="fs-15 font-bold">Item Title</span>
    <span className="fs-13 text-integra-gray-500">Description text...</span>
  </div>
</Label>`}
              </pre>
            </div>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}