"use client"

import * as React from "react"
import { Toggle } from "@/components/ui/toggle"
import { Card } from "@/components/ui/card"
import { Playground } from "@/components/layout/playground"
import { Bold, Italic, Underline } from "lucide-react"

export function ToggleDemo() {
  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-960 mx-auto border border-integra-gray-200 shadow-integra rounded-16 bg-white">
      {/* 프리뷰 영역 */}
      <Playground className="flex-col md:flex-row gap-32 items-center justify-center">
        {/* 예시 1: 단일 토글 */}
        <div className="flex flex-col items-center gap-12">
          <p className="fs-12 font-bold text-integra-gray-400 uppercase tracking-1">Single Toggle</p>
          <Toggle aria-label="Toggle bold">
            <Bold className="h-16 w-16" />
          </Toggle>
        </div>
        
        {/* 예시 2: 토글 그룹 (Radix UI ToggleGroup을 래핑하지 않고 수동으로 구현) */}
        <div className="flex flex-col items-center gap-12">
          <p className="fs-12 font-bold text-integra-gray-400 uppercase tracking-1">Toggle Group</p>
          <div className="inline-flex items-center gap-4 p-4 rounded-12 bg-integra-gray-50 border border-integra-gray-100">
            <Toggle size="sm" aria-label="Toggle bold">
              <Bold className="h-16 w-16" />
            </Toggle>
            <Toggle size="sm" aria-label="Toggle italic">
              <Italic className="h-16 w-16" />
            </Toggle>
            <Toggle size="sm" aria-label="Toggle underline">
              <Underline className="h-16 w-16" />
            </Toggle>
          </div>
        </div>
      </Playground>
      {/* 코드 영역 */}
      <div className="rounded-12 bg-integra-gray-900 p-24 overflow-x-auto font-mono fs-14 leading-24 text-white">
        <code>&lt;Toggle aria-label="Toggle Item"&gt;...&lt;/Toggle&gt;</code>
      </div>
    </Card>
  )
}