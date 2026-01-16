import { ToggleDemo } from "@/components/demo/toggle-demo";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/layout/code-block";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Bold, Italic } from "lucide-react";

export default function ToggleDocsPage() {
  const baseTokens = [
    { property: "Default Height", class: "h-40", value: "40px" },
    { property: "Small Height", class: "h-32", value: "32px" },
    { property: "Large Height", class: "h-48", value: "48px" },
    { property: "Active Background", class: "data-[state=on]:bg-{token}", value: "integra-gray-100" },
  ];

  const groupTokens = [
    { property: "Group Padding", class: "p-4", value: "4px" },
    { property: "Group Radius", class: "rounded-12", value: "12px" },
    { property: "Item Gap", class: "gap-4", value: "4px" },
  ];

  const codeSnippet = `import { Toggle } from "@/components/ui/toggle"

<Toggle aria-label="Toggle bold">
  <Bold className="h-16 w-16" />
</Toggle>`;
  
  const groupCodeSnippet = `import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold">
    <Bold className="h-16 w-16" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic">
    <Italic className="h-16 w-16" />
  </ToggleGroupItem>
</ToggleGroup>`;

  return (
    <div className="space-y-64 pb-120">
      
      <div className="space-y-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/docs/components">Components</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbPage>Toggle</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">Toggle</h1>
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          선택 상태를 유지하거나 해제하는 2단계 버튼입니다.<br />
          단일 또는 그룹으로 사용되며, 텍스트 스타일링이나 필터 활성화에 유용합니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />
      
      <Tabs defaultValue="overview">
        <TabsList className="bg-integra-gray-50 p-4 rounded-8">
          <TabsTrigger value="overview" className="fs-14 font-medium">Overview</TabsTrigger>
          <TabsTrigger value="group-component" className="fs-14 font-medium">Toggle Group</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-64 pt-48">
          <section className="space-y-16">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <ToggleDemo />
          </section>
          
          <section className="space-y-24">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">디자인 토큰</h2>
            <div className="rounded-12 border border-integra-gray-100 overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                    {/* ... (baseTokens 테이블) ... */}
                </table>
            </div>
          </section>

          <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border-integra-gray-100">
            <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
            <ul className="list-disc pl-20 space-y-4 fs-15 text-integra-gray-600 leading-24 tracking--1">
                <li><strong>Stateful Button:</strong> <code>data-[state=on]</code>을 통해 '눌린 상태'를 유지하는 시각적 피드백을 제공합니다.</li>
                <li><strong>Semantic State:</strong> 활성화 시 <code>integra-gray-100</code> 배경을 사용하여 Primary 버튼과의 역할 충돌을 피합니다.</li>
            </ul>
          </section>
          <section className="space-y-24">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
            <CodeBlock code={codeSnippet} />
          </section>
        </TabsContent>

        <TabsContent value="group-component" className="space-y-64 pt-48">
          <section className="space-y-24">
            <h3 className="fs-20 font-bold text-integra-gray-900 tracking--1">Toggle Group Component</h3>
            <div className="p-40 rounded-16 border border-integra-gray-200 bg-white max-w-960 mx-auto w-full flex items-center justify-center">
              <ToggleGroup type="single" defaultValue="center" size="sm">
                <ToggleGroupItem value="left">Left</ToggleGroupItem>
                <ToggleGroupItem value="center">Center</ToggleGroupItem>
                <ToggleGroupItem value="right">Right</ToggleGroupItem>
              </ToggleGroup>
            </div>
          </section>
          
          <section className="space-y-24">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">디자인 토큰</h2>
            <div className="rounded-12 border border-integra-gray-100 overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                    {/* ... (groupTokens 테이블) ... */}
                </table>
            </div>
          </section>

          <section className="space-y-24">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
            <CodeBlock code={groupCodeSnippet} />
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}