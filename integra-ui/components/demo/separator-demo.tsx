"use client"

import { Separator } from "@/components/ui/separator"
import { Card } from "@/components/ui/card"
import { Playground } from "@/components/layout/playground"

export function SeparatorDemo() {
  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-960 mx-auto border border-integra-gray-200 shadow-integra rounded-16 bg-white">
      
      {/* 1. 프리뷰 영역: Playground 적용 */}
      <Playground>
        <div className="space-y-4 text-center">
          <h4 className="fs-14 font-bold text-integra-gray-900">Integra UI</h4>
          <p className="fs-13 text-integra-gray-500">Atomic Design System</p>
          
          <Separator className="my-16" />
          
          <div className="flex h-20 items-center justify-center gap-16 fs-12 text-integra-gray-900">
            <div>Blog</div>
            <Separator orientation="vertical" />
            <div>Docs</div>
            <Separator orientation="vertical" />
            <div>Source</div>
          </div>
        </div>
      </Playground>

      {/* 2. 코드 영역 */}
      <div className="rounded-12 bg-integra-gray-900 p-24 overflow-x-auto font-mono fs-14 leading-24 text-white">
        <p className="text-integra-gray-500 mb-8">// Atomic Divider</p>
        <code className="block">
          &lt;div&gt;<br/>
          &nbsp;&nbsp;Title<br/>
          &nbsp;&nbsp;&lt;Separator className="my-16" /&gt;<br/>
          &nbsp;&nbsp;&lt;div className="flex h-20"&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;Link &lt;Separator orientation="vertical" /&gt; Link<br/>
          &nbsp;&nbsp;&lt;/div&gt;<br/>
          &lt;/div&gt;
        </code>
      </div>
    </Card>
  )
}