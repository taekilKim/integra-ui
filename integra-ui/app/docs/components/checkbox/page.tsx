import { CheckboxDemo } from "@/components/demo/checkbox-demo";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/layout/code-block";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

/**
 * [Integra UI - Checkbox Document SAI Version]
 * 다중 선택 기능을 제공하는 아토믹 제어 컴포넌트 문서입니다.
 * 고도화된 CodeBlock을 통해 패턴 조립법(Recipe)을 안내합니다.
 */
export default function CheckboxDocsPage() {
  const baseTokens = [
    { property: "Size (크기)", class: "w-16 h-16", value: "16px" },
    { property: "Border Radius (곡률)", class: "rounded-4", value: "4px" },
    { property: "Gap (라벨 간격)", class: "gap-8", value: "8px" },
  ];

  const listTokens = [
    { property: "Card Padding (내부 여백)", class: "p-16", value: "16px" },
    { property: "Card Radius (곡률)", class: "rounded-12", value: "12px" },
    { property: "Hover Background (호버)", class: "hover:bg-integra-gray-50", value: "Gray 50" },
  ];

  // 코드 스니펫 정의
  const importCode = `import { Checkbox } from "@/components/ui/checkbox"`;
  const baseUsageCode = `<div className="flex items-center gap-8">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`;

  const patternRecipeCode = `<Label className="flex items-start gap-12 p-16 rounded-12 border border-integra-gray-100 cursor-pointer hover:bg-integra-gray-50 transition-all">
  <Checkbox id="push-notify" className="mt-2" />
  <div className="grid gap-4">
    <span className="fs-15 font-bold text-integra-gray-900">Push Notifications</span>
    <span className="fs-13 text-integra-gray-500 leading-20">Send me alerts via mobile</span>
  </div>
</Label>`;

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
          다중 선택을 지원하는 독립적인 제어 컴포넌트입니다.<br />
          아토믹 원자의 조립을 통해 리스트 형태의 복합 패턴으로 확장 가능합니다.
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-48">
        <TabsList className="bg-integra-gray-50 p-4 rounded-8">
          <TabsTrigger value="overview" className="fs-14 font-medium">Overview</TabsTrigger>
          <TabsTrigger value="list-pattern" className="fs-14 font-medium">Checkbox List Pattern</TabsTrigger>
        </TabsList>

        {/* 탭 1: 기본 개요 */}
        <TabsContent value="overview" className="space-y-64">
          <section className="space-y-16">
            <div className="flex items-center justify-between">
              <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
              <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500 font-medium">Interactive</Badge>
            </div>
            <CheckboxDemo />
          </section>

          <section className="space-y-24">
            <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">디자인 토큰</h2>
            <div className="rounded-12 border border-integra-gray-100 overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead className="bg-integra-gray-50 border-b border-integra-gray-100">
                  <tr className="fs-12 font-bold text-integra-gray-400">
                    <th className="px-24 py-16">속성</th><th className="px-24 py-16">토큰 클래스</th><th className="px-24 py-16">Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y border-integra-gray-100 fs-14">
                  {baseTokens.map((t) => (
                    <tr key={t.property} className="hover:bg-integra-gray-50/50 transition-colors">
                      <td className="px-24 py-16 font-medium text-integra-gray-700">{t.property}</td>
                      <td className="px-24 py-16 font-mono text-integra-blue-600 font-bold">.{t.class}</td>
                      <td className="px-24 py-16 font-mono text-integra-gray-900">{t.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-24">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
            <div className="space-y-16">
              <p className="fs-14 text-integra-gray-500 font-medium tracking-1 uppercase">1. Import Component</p>
              <CodeBlock code={importCode} />
              <p className="fs-14 text-integra-gray-500 font-medium tracking-1 uppercase mt-32">2. Basic Usage</p>
              <CodeBlock code={baseUsageCode} />
            </div>
          </section>
        </TabsContent>

        {/* 탭 2: 체크박스 리스트 패턴 */}
        <TabsContent value="list-pattern" className="space-y-64">
          <section className="space-y-24">
            <h3 className="fs-20 font-bold text-integra-gray-900">Checkbox List Card</h3>
            <div className="p-40 rounded-16 border border-integra-gray-200 bg-white max-w-960 mx-auto w-full flex items-center justify-center">
              <Label className="flex items-start gap-12 p-16 rounded-12 border border-integra-gray-100 cursor-pointer hover:bg-integra-gray-50 transition-all max-w-400 w-full">
                <Checkbox id="terms-list" className="mt-2" />
                <div className="grid gap-4">
                  <span className="fs-15 font-bold text-integra-gray-900">Push Notifications</span>
                  <span className="fs-13 text-integra-gray-500 leading-20">Send me alerts via mobile app</span>
                </div>
              </Label>
            </div>
          </section>

          <section className="space-y-24">
            <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">패턴 디자인 토큰</h2>
            <div className="rounded-12 border border-integra-gray-100 overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead className="bg-integra-gray-50 border-b border-integra-gray-100">
                  <tr className="fs-12 font-bold text-integra-gray-400">
                    <th className="px-24 py-16">속성</th><th className="px-24 py-16">토큰 클래스</th><th className="px-24 py-16">Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y border-integra-gray-100 fs-14">
                  {listTokens.map((t) => (
                    <tr key={t.property} className="hover:bg-integra-gray-50/50 transition-colors">
                      <td className="px-24 py-16 font-medium text-integra-gray-700">{t.property}</td>
                      <td className="px-24 py-16 font-mono text-primary font-bold">.{t.class}</td>
                      <td className="px-24 py-16 font-mono text-integra-gray-900">{t.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-24">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Pattern Recipe</h2>
            <div className="space-y-16">
               <p className="fs-14 text-integra-gray-500 font-medium leading-24">
                 라벨과 체크박스를 하나의 아토믹 카드로 결합한 형태입니다.<br />
                 클래스 조합만으로 정교한 리스트 UI를 구축할 수 있습니다.
               </p>
               <CodeBlock code={patternRecipeCode} />
            </div>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}