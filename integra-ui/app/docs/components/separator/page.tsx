import { SeparatorDemo } from "@/components/demo/separator-demo";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/layout/code-block";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";

export default function SeparatorDocsPage() {
  const codeSnippet = `import { Separator } from "@/components/ui/separator"

<Separator />`;

  return (
    <div className="space-y-48 pb-80">
      <div className="space-y-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/docs/components">Components</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbPage>Separator</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900">Separator</h1>
        <p className="fs-20 text-integra-gray-500 leading-32">
          콘텐츠 섹션을 시각적으로나 의미론적으로 분리하는 아토믹 구분선입니다.
        </p>
      </div>
      <hr className="border-integra-gray-100" />
      <section className="space-y-16">
        <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">Playground</h2>
        <SeparatorDemo />
      </section>
      <section className="space-y-24">
        <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">Usage</h2>
        <CodeBlock code={codeSnippet} />
      </section>
    </div>
  );
}