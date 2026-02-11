"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Playground } from "@/components/layout/playground"

export function BadgeDemo() {
  const [variant, setVariant] = React.useState<any>("default")

  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-960 mx-auto border border-integra-gray-200 shadow-integra rounded-16 bg-white">
      
      {/* 1. 프리뷰 영역: bg-integra-gray-50 및 border-integra-gray-200 적용 */}
      <Playground>
        <Badge variant={variant}>badge</Badge>
      </Playground>

      {/* 2. 컨트롤러 영역: border-integra-gray-100 적용 */}
      <div className="grid grid-cols-1 gap-24 pt-24 border-t border-integra-gray-100">
        <div className="space-y-8">
          {/* fs-12 적용 및 text-integra-gray-400 적용 */}
          <Label className="fs-12 font-bold text-integra-gray-400 uppercase tracking-1">Variant</Label>
          <select 
            className="w-full h-40 rounded-8 border border-input bg-background px-12 py-8 fs-14 text-integra-gray-900 outline-none focus:ring-2 focus:ring-ring"
            value={variant}
            onChange={(e) => setVariant(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="secondary">Secondary</option>
            <option value="outline">Outline</option>
            <option value="destructive">Destructive</option>
          </select>
        </div>
      </div>

      {/* 3. 코드 영역: bg-integra-gray-900 적용 */}
      <div className="rounded-8 bg-integra-gray-900 p-20 overflow-x-auto font-mono fs-14 leading-24 text-white">
        <p className="text-integra-gray-500 mb-8">// Atomic Badge Combination</p>
        <code>&lt;Badge variant="{variant}"&gt;Badge Preview&lt;/Badge&gt;</code>
      </div>
    </Card>
  )
}