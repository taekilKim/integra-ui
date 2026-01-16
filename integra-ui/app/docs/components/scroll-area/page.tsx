import { ScrollAreaDemo } from "@/components/demo/scroll-area-demo";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/layout/code-block";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";

export default function ScrollAreaDocsPage() {
  const codeSnippet = `import { ScrollArea } from "@/components/ui/scroll-area"

<ScrollArea className="h-200 w-320 rounded-8 border">
  {/* Content */}
</ScrollArea>`;

  return (
    <div className="space-y-48 pb-80">
      <div className="space-y-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/docs/components">Components</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbPage>Scroll Area</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900">Scroll Area</h1>
        <p className="fs-20 text-integra-gray-500 leading-32">
          브라우저 기본 스크롤바를 대체하여 시스템의 룩앤필을 유지하는 커스텀 스크롤 컨테이너입니다.
        </p>
      </div>
      <hr className="border-integra-gray-100" />
      <section className="space-y-16">
        <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">Playground</h2>
        <ScrollAreaDemo />
      </section>
      <section className="space-y-24">
        <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">Usage</h2>
        <CodeBlock code={codeSnippet} />
      </section>
    </div>
  );
}