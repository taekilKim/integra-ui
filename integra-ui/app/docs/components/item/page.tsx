import { ItemDemo } from "@/components/demo/item-demo";
import { Badge } from "@/components/ui/badge";
import { Item } from "@/components/ui/item";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CodeBlock } from "@/components/layout/code-block";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { MoreHorizontal } from "lucide-react";

export default function ItemDocsPage() {
  const codeSnippet = `import { Item } from "@/components/ui/item"`;

  const avatarPatternCode = `<Item className="h-64">
  <Avatar className="w-40 h-40 mr-12">
    <AvatarImage src="..." />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  <div className="flex-1 space-y-2 text-left">
    <p className="fs-14 font-semibold">Shadcn</p>
    <p className="fs-13 text-integra-gray-500">@shadcn</p>
  </div>
</Item>`;

  const buttonPatternCode = `<Item className="h-48">
  <span className="flex-1 fs-14">View Profile</span>
  <Button size="small" variant="tertiary" className="h-32">
    View
  </Button>
</Item>`;

  return (
    <div className="space-y-48 pb-120">
      <div className="space-y-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/docs/components">Components</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbPage>Item</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">Item</h1>
        <p className="fs-20 text-integra-gray-500 leading-32">
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
            <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">Playground</h2>
            <ItemDemo />
          </section>
          {/* ... (기존 디자인 토큰 및 노트 섹션 유지) ... */}
        </TabsContent>

        <TabsContent value="patterns" className="space-y-64 pt-48">
          {/* Pattern 1: Avatar + Text */}
          <section className="space-y-24">
            <h3 className="fs-20 font-bold text-integra-gray-900">Pattern: Avatar List</h3>
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
            <h3 className="fs-20 font-bold text-integra-gray-900">Pattern: Action List</h3>
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