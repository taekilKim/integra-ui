"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card } from "@/components/ui/card"
import { Playground } from "@/components/layout/playground"

export function BreadcrumbDemo() {
  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-960 mx-auto border border-integra-gray-200 shadow-integra rounded-16 bg-white">
      {/* 프리뷰 영역 */}
      <Playground>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Playground>

      {/* 코드 영역 */}
      <div className="rounded-8 bg-integra-gray-900 p-20 overflow-x-auto font-mono fs-14 leading-24 text-white">
        <p className="text-integra-gray-500 mb-8">// Atomic Navigation</p>
        <code className="block">
          &lt;Breadcrumb&gt;<br/>
          &nbsp;&nbsp;&lt;BreadcrumbList&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;BreadcrumbItem&gt;...&lt;/BreadcrumbItem&gt;<br/>
          &nbsp;&nbsp;&lt;/BreadcrumbList&gt;<br/>
          &lt;/Breadcrumb&gt;
        </code>
      </div>
    </Card>
  )
}