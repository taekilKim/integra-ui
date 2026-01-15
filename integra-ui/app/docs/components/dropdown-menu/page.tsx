import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"

export default function DropdownMenuDocsPage() {
  const designTokens = [
    { property: "Min Width (최소 너비)", class: "min-w-{px}", value: "min-w-160" },
    { property: "Item Height (아이템 높이)", class: "h-{px}", value: "h-32 (px-8 py-6)" },
    { property: "Font Size (글자)", class: "fs-{px}", value: "fs-14" },
    { property: "Border Radius (곡률)", class: "rounded-{px}", value: "rounded-8" },
    { property: "Shadow (그림자)", class: "shadow-{token}", value: "shadow-integra" },
  ];

  return (
    <div className="space-y-64 pb-120">
      <div className="space-y-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/docs/components">Components</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbPage>Dropdown Menu</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">Dropdown Menu</h1>
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          사용자에게 관련 액션이나 옵션의 리스트를 오버레이 형태로 제공합니다.<br />
          정밀한 간격과 시각적 위계를 통해 복잡한 기능들을 깔끔하게 그룹화합니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. Preview 섹션 (간단 데모) */}
      <section className="space-y-16">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Preview</h2>
        <div className="flex min-h-160 items-center justify-center rounded-12 border border-integra-gray-200 bg-integra-gray-50 border-dashed p-40 max-w-960 mx-auto w-full">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button appearance="outlined" variant="default">Open Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-integra-red-500 focus:bg-integra-red-50">Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>

      {/* 3. 디자인 토큰 섹션 */}
      <section className="space-y-24">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">디자인 토큰</h2>
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

      {/* 4. Atomic Design Note */}
      <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
        <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
        <div className="space-y-12 fs-15 text-integra-gray-600 leading-24 tracking--1">
            <p>드롭다운 메뉴는 고밀도의 상호작용 원자들이 정교하게 나열된 집합체입니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Compact Sizing:</strong> 각 메뉴 아이템은 32px 수준의 높이를 유지하여 정보 탐색 효율을 높입니다.</li>
                <li><strong>Separator Logic:</strong> 4px 그리드 정렬을 위해 8px의 상하 여백(my-4 + 1px border)을 가집니다.</li>
                <li><strong>Focus Feedback:</strong> <code>integra-gray-50</code> 배경색을 통해 사용자의 시선이 머무는 곳을 명확히 안내합니다.</li>
            </ul>
        </div>
      </section>
    </div>
  );
}