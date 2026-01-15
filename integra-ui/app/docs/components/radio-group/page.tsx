import { RadioGroupDemo } from "@/components/demo/radio-group-demo";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/layout/code-block"; // ✨ 추가
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

/**
 * [Integra UI - Radio Group Document SAI Version]
 * 배타적 선택을 위한 아토믹 컴포넌트 및 확장 패턴 문서입니다.
 * 고도화된 CodeBlock을 통해 버튼형 라디오(Segmented) 조립법을 안내합니다.
 */
export default function RadioGroupDocsPage() {
  const baseTokens = [
    { property: "Item Size (크기)", class: "w-16 h-16", value: "16px" },
    { property: "Inner Indicator (지시자)", class: "w-10 h-10", value: "10px" },
    { property: "Border Radius (곡률)", class: "rounded-full", value: "9999px" },
    { property: "Item Gap (간격)", class: "gap-12", value: "12px" },
  ];

  const buttonTokens = [
    { property: "Group Background", class: "bg-integra-gray-50", value: "Gray 50" },
    { property: "Item Background (Active)", class: "bg-white", value: "White" },
    { property: "Item Shadow (Active)", class: "shadow-sm", value: "SAI Shadow" },
    { property: "Label Font Size", class: "fs-13", value: "13px" },
  ];

  // 코드 스니펫 정의
  const importCode = `import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"`;
  
  const baseUsageCode = `<RadioGroup defaultValue="option-1">
  <div className="flex items-center gap-8">
    <RadioGroupItem value="option-1" id="r1" />
    <Label htmlFor="r1">Option One</Label>
  </div>
  <div className="flex items-center gap-8">
    <RadioGroupItem value="option-2" id="r2" />
    <Label htmlFor="r2">Option Two</Label>
  </div>
</RadioGroup>`;

  const segmentedPatternCode = `<RadioGroup defaultValue="daily" className="flex p-4 bg-integra-gray-50 rounded-12 gap-4">
  <div className="flex-1">
    <RadioGroupItem value="daily" id="daily" className="sr-only peer" />
    <Label 
      htmlFor="daily" 
      className="flex justify-center items-center h-32 rounded-8 fs-13 font-bold cursor-pointer transition-all 
                 peer-data-[state=checked]:bg-white 
                 peer-data-[state=checked]:shadow-sm 
                 peer-data-[state=checked]:text-primary 
                 text-integra-gray-500"
    >
      Daily
    </Label>
  </div>
  {/* Add more items... */}
</RadioGroup>`;

  return (
    <div className="space-y-64 pb-120">
      
      {/* 1. 헤더 섹션: 표준 규격 준수 */}
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
          기본 원형 스타일부터 버튼 형태의 확장 패턴까지 아토믹 조립을 완벽히 지원합니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      <Tabs defaultValue="overview" className="space-y-48">
        <TabsList className="bg-integra-gray-50 p-4 rounded-8">
          <TabsTrigger value="overview" className="fs-14 font-medium">Overview</TabsTrigger>
          <TabsTrigger value="radio-button" className="fs-14 font-medium">Radio Button Pattern</TabsTrigger>
        </TabsList>

        {/* 탭 1: 기본 개요 */}
        <TabsContent value="overview" className="space-y-64">
          <section className="space-y-16">
            <div className="flex items-center justify-between">
              <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
              <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500 font-medium">Interactive</Badge>
            </div>
            <RadioGroupDemo />
          </section>

          <section className="space-y-24">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">디자인 토큰</h2>
            <div className="rounded-12 border border-integra-gray-100 overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead className="bg-integra-gray-50 border-b border-integra-gray-200">
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

        {/* 탭 2: 라디오 버튼 패턴 (Segment Control) */}
        <TabsContent value="radio-button" className="space-y-64">
          <section className="space-y-24">
            <h3 className="fs-20 font-bold text-integra-gray-900">Button Style (Segmented)</h3>
            <div className="p-40 rounded-16 border border-integra-gray-200 bg-white max-w-960 mx-auto w-full flex items-center justify-center">
              <RadioGroup defaultValue="daily" className="flex p-4 bg-integra-gray-100 rounded-12 gap-4 w-full max-w-320">
                {["daily", "weekly"].map((val) => (
                  <div key={val} className="flex-1">
                    <RadioGroupItem value={val} id={val} className="sr-only peer" />
                    <Label htmlFor={val} className="flex justify-center items-center h-32 rounded-8 fs-13 font-bold cursor-pointer transition-all peer-data-[state=checked]:bg-white peer-data-[state=checked]:shadow-sm peer-data-[state=checked]:text-primary text-integra-gray-500 hover:text-integra-gray-900">
                      {val.toUpperCase()}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </section>

          <section className="space-y-24">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">패턴 디자인 토큰</h2>
            <div className="rounded-12 border border-integra-gray-100 overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead className="bg-integra-gray-50 border-b border-integra-gray-200">
                  <tr className="fs-12 font-bold text-integra-gray-400">
                    <th className="px-24 py-16">패턴 속성</th><th className="px-24 py-16">토큰 클래스</th><th className="px-24 py-16">Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y border-integra-gray-100 fs-14">
                  {buttonTokens.map((t) => (
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
                 라디오 원자를 버튼 형태로 시각화하는 조립법입니다.<br />
                 <code>sr-only</code>와 <code>peer</code> 클래스를 결합하여 로직과 디자인을 완벽히 분리합니다.
               </p>
               <CodeBlock code={segmentedPatternCode} />
            </div>
          </section>
        </TabsContent>
      </Tabs>

      {/* 6. Atomic Design Note */}
      <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
        <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
        <div className="space-y-12 fs-15 text-integra-gray-600 leading-24 tracking--1">
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Strict Symmetry:</strong> 16px(w-16 h-16) 원형 원자를 사용하여 체크박스(사각형)와 시각적으로 명확히 대비됩니다.</li>
                <li><strong>Optical Guidance:</strong> 선택 지시자(Indicator)는 10px로 설정되어 테두리와 3px의 안정적인 시각 여백을 형성합니다.</li>
                <li><strong>Modular Architecture:</strong> 원자(RadioItem)를 숨기고 라벨(Label)의 스타일을 확장하는 것만으로 세그먼트 컨트롤 패턴을 즉시 구축할 수 있습니다.</li>
            </ul>
        </div>
      </section>
    </div>
  );
}