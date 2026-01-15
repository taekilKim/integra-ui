import { RadioGroupDemo } from "@/components/demo/radio-group-demo";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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

export default function RadioGroupDocsPage() {
  const designTokens = [
    { property: "Item Size (크기)", class: "w-16 h-16", value: "16px" },
    { property: "Inner Dot (지시자)", class: "w-10 h-10", value: "10px" },
    { property: "Border Radius (곡률)", class: "rounded-full", value: "9999px" },
    { property: "Gap (항목 간격)", class: "gap-12", value: "12px" },
  ];

  return (
    <div className="space-y-64 pb-120">
      <div className="space-y-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/docs/components">Components</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbPage>Radio Group</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">Radio Group</h1>
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          여러 옵션 중 하나의 항목만 선택할 수 있는 배타적 선택 컴포넌트입니다.<br />
          기본 원형 스타일부터 버튼 형태의 확장 패턴까지 지원합니다.
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-48">
        <TabsList className="bg-integra-gray-50 p-4 rounded-8">
          <TabsTrigger value="overview" className="fs-14">Overview</TabsTrigger>
          <TabsTrigger value="radio-button" className="fs-14">Radio Button Pattern</TabsTrigger>
        </TabsList>

        {/* 탭 1: 기본 라디오 */}
        <TabsContent value="overview" className="space-y-64">
          <section className="space-y-16">
            <div className="flex items-center justify-between">
              <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">Playground</h2>
              <Badge variant="outline" className="fs-12 px-8 py-2">Interactive</Badge>
            </div>
            <RadioGroupDemo />
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

        {/* 탭 2: 라디오 버튼 패턴 (Segment Control) */}
        <TabsContent value="radio-button" className="space-y-32">
          <section className="space-y-16">
            <h3 className="fs-20 font-bold text-integra-gray-900">Button Style (Segmented)</h3>
            <div className="p-40 rounded-16 border border-integra-gray-200 bg-white max-w-960">
              <RadioGroup defaultValue="daily" className="flex p-4 bg-integra-gray-50 rounded-12 gap-4 max-w-320">
                {["daily", "weekly", "monthly"].map((val) => (
                  <div key={val} className="flex-1">
                    <RadioGroupItem value={val} id={val} className="sr-only peer" />
                    <Label htmlFor={val} className="flex justify-center items-center h-32 rounded-8 fs-13 font-bold cursor-pointer transition-all peer-data-[state=checked]:bg-white peer-data-[state=checked]:shadow-sm peer-data-[state=checked]:text-primary text-integra-gray-500 hover:text-integra-gray-900">
                      {val.charAt(0).toUpperCase() + val.slice(1)}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            <p className="fs-14 text-integra-gray-500 mt-16 leading-24">
              라디오의 로직을 유지하면서 시각적으로 버튼 형태를 빌려온 패턴입니다.<br />
              주로 대시보드의 필터나 뷰 전환(View Switcher)에 사용됩니다.
            </p>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}