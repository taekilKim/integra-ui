import { AvatarDemo } from "@/components/demo/avatar-demo";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/layout/code-block";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export default function AvatarDocsPage() {
  const designTokens = [
    { property: "Size (크기)", class: "w-40 h-40", value: "40px" },
    { property: "Border Radius (곡률)", class: "rounded-full", value: "9999px" },
    { property: "Background (배경)", class: "bg-integra-gray-100", value: "Gray 100" },
    { property: "Font Size (폴백)", class: "fs-14", value: "14px" },
    { property: "Font Weight (폴백)", class: "font-bold", value: "700" },
  ];

  const codeSnippet = `<Avatar>
  <AvatarImage src="/user.png" alt="User" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`;

  return (
    <div className="space-y-64 pb-120">
      <div className="space-y-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/docs/components">Components</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbPage>Avatar</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">Avatar</h1>
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          사용자를 나타내는 프로필 이미지나 아이콘을 표시하는 원자 컴포넌트입니다.<br />
          이미지 로드 실패 시 이름의 이니셜 등을 보여주는 폴백 시스템을 내장하고 있습니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500 font-medium">Interactive</Badge>
        </div>
        <AvatarDemo />
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

      <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
        <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
        <div className="space-y-12 fs-15 text-integra-gray-600 leading-24 tracking--1">
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Geometric Rule:</strong> 40px(h-40) 표준 크기를 사용하여 다른 폼 요소들과의 시각적 선상 정렬을 유지합니다.</li>
                <li><strong>Safe Fallback:</strong> 이미지가 없는 경우 <code>gray-100</code> 배경과 <code>gray-500</code> 텍스트 원자를 사용하여 중립적인 인상을 유지합니다.</li>
            </ul>
        </div>
      </section>

      <section className="space-y-24">
        <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
        <CodeBlock code={codeSnippet} />
      </section>
    </div>
  );
}