"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Card } from "@/components/ui/card"
import { Playground } from "@/components/layout/playground"

export function TooltipDemo() {
  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-960 mx-auto border border-integra-gray-200 shadow-integra rounded-16 bg-white">
      
      {/* 1. 프리뷰 영역: bg-integra-gray-50 및 border-integra-gray-200 적용 */}
      <Playground>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button appearance="default" variant="tertiary">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
              {/* fs-12 및 leading-16 적용 */}
              <p className="fs-12 leading-16">Integra UI 아토믹 시스템 툴팁</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Playground>

      {/* 2. 코드 영역: bg-integra-gray-900 및 fs-14 적용 */}
      <div className="rounded-8 bg-integra-gray-900 p-20 overflow-x-auto font-mono fs-14 leading-24 text-white">
        <p className="text-integra-gray-500 mb-8">// Atomic Tooltip Setup</p>
        <code className="block">
          &lt;TooltipProvider&gt;<br/>
          &nbsp;&nbsp;&lt;Tooltip&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;TooltipTrigger&gt;Hover&lt;/TooltipTrigger&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;TooltipContent&gt;Text&lt;/TooltipContent&gt;<br/>
          &nbsp;&nbsp;&lt;/Tooltip&gt;<br/>
          &lt;/TooltipProvider&gt;
        </code>
      </div>
    </Card>
  )
}