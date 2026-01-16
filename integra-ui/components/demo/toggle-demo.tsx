"use client"

import * as React from "react"
import { Toggle } from "@/components/ui/toggle"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Playground } from "@/components/layout/playground"
import { Bold, Italic, Underline } from "lucide-react"

export function ToggleDemo() {
  const [size, setSize] = React.useState<any>("default");
  const [variant, setVariant] = React.useState<any>("default");

  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-960 mx-auto border border-integra-gray-200 shadow-integra rounded-16 bg-white">
      {/* 프리뷰 */}
      <Playground className="flex-col md:flex-row gap-32 items-center justify-center">
        {/* 단일 토글 */}
        <Toggle size={size} variant={variant} aria-label="Toggle bold">
          <Bold className="h-16 w-16" />
        </Toggle>
        
        {/* 토글 그룹 */}
        <div className="inline-flex items-center gap-4 p-4 rounded-12 bg-integra-gray-50 border border-integra-gray-100">
          <Toggle size={size} variant={variant} aria-label="Toggle italic">
            <Italic className="h-16 w-16" />
          </Toggle>
          <Toggle size={size} variant={variant} aria-label="Toggle underline">
            <Underline className="h-16 w-16" />
          </Toggle>
        </div>
      </Playground>

      {/* 컨트롤러 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 pt-24 border-t border-integra-gray-100">
        <div className="space-y-8">
          <Label className="fs-12 font-semibold text-integra-gray-500 uppercase tracking-1">Size</Label>
          <select 
            className="w-full h-40 rounded-8 border border-integra-gray-200 bg-white px-12 fs-14"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="default">Default (40px)</option>
            <option value="sm">Small (32px)</option>
            <option value="lg">Large (48px)</option>
          </select>
        </div>
        <div className="space-y-8">
          <Label className="fs-12 font-semibold text-integra-gray-500 uppercase tracking-1">Variant</Label>
          <select 
            className="w-full h-40 rounded-8 border border-integra-gray-200 bg-white px-12 fs-14"
            value={variant}
            onChange={(e) => setVariant(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="outline">Outline</option>
          </select>
        </div>
      </div>

      {/* 코드 */}
      <div className="rounded-12 bg-integra-gray-900 p-24 font-mono fs-14 leading-24 text-white">
        <code>&lt;Toggle size="{size}" variant="{variant}"&gt;...&lt;/Toggle&gt;</code>
      </div>
    </Card>
  )
}