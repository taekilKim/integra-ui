"use client"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Card } from "@/components/ui/card"

export function TooltipDemo() {
  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-800 mx-auto border border-slate-200 shadow-integra rounded-16">
      <div className="min-h-160 flex items-center justify-center rounded-12 border border-slate-200 bg-slate-50/50 border-dashed">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="tertiary">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Integra UI 아토믹 시스템 툴팁</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="rounded-8 bg-slate-950 p-20 overflow-x-auto font-mono text-14 leading-24 text-white">
        &lt;Tooltip&gt;<br/>
        &nbsp;&nbsp;&lt;TooltipTrigger&gt;Hover&lt;/TooltipTrigger&gt;<br/>
        &nbsp;&nbsp;&lt;TooltipContent&gt;Text&lt;/TooltipContent&gt;<br/>
        &lt;/Tooltip&gt;
      </div>
    </Card>
  )
}