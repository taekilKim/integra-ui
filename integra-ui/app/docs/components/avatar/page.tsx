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
    { property: "Size (크기)", class: "h-{px} w-{px}", value: "40px / 48px" },
    { property: "Border Radius", class: "rounded-full", value: "9999px" },
    { property: "Fallback Background", class: "bg-{token}", value: "integra-gray-100" },
  ];

  const codeSnippet = `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
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
          사용자를 나타내는 이미지 요소입니다. 이미지가 로드되지 않을 때를 대비한 텍스트 폴백(Fallback)을 지원합니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      <section className="space-y-16">
        <div className="flex items-center justify-between">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
            <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500 font-medium">Static Preview</Badge>
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
                <li><strong>Shape:</strong> <code>rounded-full</code> 토큰을 사용하여 인물 정보임을 직관적으로 전달합니다.</li>
                <li><strong>Fallback:</strong> 이미지가 없을 때 <code>bg-integra-gray-100</code> 배경과 이니셜 텍스트를 자동으로 표시하여 레이아웃 깨짐을 방지합니다.</li>
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