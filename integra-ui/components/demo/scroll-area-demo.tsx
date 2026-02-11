"use client"

import * as React from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card } from "@/components/ui/card"
import { Playground } from "@/components/layout/playground"

export function ScrollAreaDemo() {
  const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`)

  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-960 mx-auto border border-integra-gray-200 shadow-integra rounded-16 bg-white">
      
      {/* 1. 프리뷰 영역: Playground 적용 */}
      <Playground>
        <ScrollArea className="h-200 w-200 rounded-8 border border-integra-gray-200 bg-white">
          <div className="p-16">
            <h4 className="fs-14 font-bold text-integra-gray-900 mb-16">버전 목록</h4>
            {tags.map((tag) => (
              <div key={tag} className="fs-13 py-8 border-b border-integra-gray-50 last:border-0 text-integra-gray-600">
                {tag}
              </div>
            ))}
          </div>
        </ScrollArea>
      </Playground>

      {/* 2. 코드 영역 */}
      <div className="rounded-12 bg-integra-gray-900 p-24 overflow-x-auto font-mono fs-14 leading-24 text-white">
        <p className="text-integra-gray-500 mb-8">// 스크롤 영역 레이아웃 예시</p>
        <code className="block">
          &lt;ScrollArea className="h-200 w-200 rounded-8 border"&gt;<br/>
          &nbsp;&nbsp;&lt;div className="p-16"&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;...콘텐츠...<br/>
          &nbsp;&nbsp;&lt;/div&gt;<br/>
          &lt;/ScrollArea&gt;
        </code>
      </div>
    </Card>
  )
}
