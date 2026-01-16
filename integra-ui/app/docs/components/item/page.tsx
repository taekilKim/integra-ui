import { ItemDemo } from "@/components/demo/item-demo";
import { Badge } from "@/components/ui/badge";
import { Item } from "@/components/ui/item";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CodeBlock } from "@/components/layout/code-block";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { MoreHorizontal } from "lucide-react";

/**
 * [Integra UI - Item Document SAI Version]
 * 모든 리스트, 메뉴, 드롭다운의 기초가 되는 원자적 컨테이너 문서입니다.
 */
export default function ItemDocsPage() {
  // 1. Item 전용 디자인 토큰 데이터
  const designTokens = [
    { property: "Default Height", class: "h-40", value: "40px" },
    { property: "Small Height", class: "h-32", value: "32px" },
    { property: "Default Font Size", class: "fs-14", value: "14px" },
    { property: "Small Font Size", class: "fs-13", value: "13px" },
    { property: "Line Height", class: "leading-20", value: "20px" },
    { property: "Border Radius", class: "rounded-8", value: "8px" },
    { property: "Padding H (좌우 여백)", class: "px-{px}", value: "px-12 / px-8" },
    { property: "Active Background", class: "bg-{token}", value: "bg-integra-gray-50" },
  ];

  const avatarPatternCode = `<Item className="h-64">
  <Avatar className="w-40 h-40 mr-12">...</Avatar>
  <div className="flex-1 ...">...</div>
</Item>`;

  const buttonPatternCode = `<Item className="h-48">
  <span className="flex-1 fs-14">View Profile</span>
  <Button size="small" variant="tertiary">View</Button>
</Item>`;

  return (
    <div className="space-y-64 pb-120">
      <div className="space-y-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/docs/components">Components</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbPage>Item</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">Item</h1>
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          모든 리스트, 메뉴, 드롭다운의 기초가 되는 원자적 컨테이너입니다.<br />
          버튼과 유사하지만 '액션'이 아닌 '선택'과 '표시'에 집중하여 설계되었습니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      <Tabs defaultValue="overview">
        <TabsList className="bg-integra-gray-50 p-4 rounded-8">
          <TabsTrigger value="overview" className="fs-14 font-medium">Overview</TabsTrigger>
          <TabsTrigger value="patterns" className="fs-14 font-medium">Extended Patterns</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-64 pt-48">
          <section className="space-y-16">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <ItemDemo />
          </section>
          
          {/* ✨ 디자인 토큰 섹션 신규 추가 ✨ */}
          <section className="space-y-24">
            <div className="space-y-8">
                <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">디자인 토큰</h2>
                <p className="fs-16 text-integra-gray-500">Item 컴포넌트의 기본 규격을 결정하는 아토믹 클래스와 수치 명세입니다.</p>
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
                                <td className="px-24 py-16 font-mono text-integra-blue-600 font-bold">.{token.class}</td>
                                <td className="px-24 py-16 font-mono text-integra-gray-900">{token.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
          </section>

          <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
            <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
            <ul className="list-disc pl-20 space-y-4 fs-15 text-integra-gray-600 leading-24 tracking--1">
                <li><strong>Role & Hierarchy:</strong> <code>font-medium</code>을 사용하여 <code>font-semibold</code>인 버튼보다 시각적 위계를 낮춥니다.</li>
                <li><strong>State Management:</strong> <code>data-[state=on]</code> 속성을 통해 선택(Active) 상태의 스타일을 제어합니다.</li>
                <li><strong>Composition:</strong> 아이콘, 텍스트, 상태 표시(체크) 등 다른 원자들을 유연하게 담을 수 있는 컨테이너 역할을 수행합니다.</li>
            </ul>
          </section>
        </TabsContent>

        <TabsContent value="patterns" className="space-y-64 pt-48">
          {/* Pattern 1: Avatar + Text */}
          <section className="space-y-24">
            <h3 className="fs-20 font-bold text-integra-gray-900 tracking--1">Pattern: Avatar List</h3>
            <p className="fs-15 text-integra-gray-600 leading-24">
                <code>Avatar</code> 컴포넌트와 조합하여 사용자 리스트를 구성할 수 있습니다.<br />
                <code>h-64</code>와 같은 수치 토큰으로 높이를 직접 제어하세요.
            </p>
            <div className="p-40 rounded-16 border border-integra-gray-200 bg-white max-w-960 mx-auto w-full flex items-center justify-center">
                <div className="w-full max-w-320 space-y-4">
                    <Item className="h-64">
                        <Avatar className="w-40 h-40 mr-12">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-2 text-left">
                            <p className="fs-14 font-semibold">Shadcn</p>
                            <p className="fs-13 text-integra-gray-500">@shadcn</p>
                        </div>
                    </Item>
                </div>
            </div>
            <CodeBlock code={avatarPatternCode} />
          </section>

          {/* Pattern 2: Text + Button */}
          <section className="space-y-24">
            <h3 className="fs-20 font-bold text-integra-gray-900 tracking--1">Pattern: Action List</h3>
            <p className="fs-15 text-integra-gray-600 leading-24">
                <code>Button</code> 컴포넌트와 결합하여 설정 메뉴와 같은 액션 리스트를 만듭니다.
            </p>
            <div className="p-40 rounded-16 border border-integra-gray-200 bg-white max-w-960 mx-auto w-full flex items-center justify-center">
                <div className="w-full max-w-320 space-y-4">
                    <Item className="h-48">
                        <span className="flex-1 fs-14">View Profile</span>
                        <Button size="small" variant="tertiary" className="h-32">View</Button>
                    </Item>
                    <Item className="h-48">
                        <span className="flex-1 fs-14">Settings</span>
                        <Button size="small" variant="tertiary" className="w-32 h-32 p-0">
                            <MoreHorizontal className="w-16 h-16" />
                        </Button>
                    </Item>
                </div>
            </div>
            <CodeBlock code={buttonPatternCode} />
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}