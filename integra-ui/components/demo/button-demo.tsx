"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export function ButtonDemo() {
  const [variant, setVariant] = React.useState<any>("default")
  const [size, setSize] = React.useState<any>("default")
  const [isDisabled, setIsDisabled] = React.useState(false)

  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-800 mx-auto border border-slate-200 shadow-integra rounded-16">
      
      {/* 1. 프리뷰 영역: 실제 버튼이 보여지는 곳 */}
      <div className="min-h-160 flex items-center justify-center rounded-12 border border-slate-200 bg-slate-50/50 border-dashed">
        <Button variant={variant} size={size} disabled={isDisabled}>
          버튼 라벨
        </Button>
      </div>

      {/* 2. 컨트롤러 영역: 옵션 조작 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-24 pt-24 border-t border-slate-100">
        
        {/* Variant 선택 */}
        <div className="space-y-8">
          <Label className="text-12 font-bold text-integra-gray-500">Variant</Label>
          <select 
            className="w-full h-40 rounded-8 border border-input bg-background px-12 py-8 text-14 outline-none focus:ring-2 focus:ring-ring"
            value={variant}
            onChange={(e) => setVariant(e.target.value)}
          >
            <option value="default">Default (Solid)</option>
            <option value="secondary">Secondary</option>
            <option value="outline">Outline</option>
            <option value="ghost">Ghost</option>
            <option value="destructive">Destructive</option>
            <option value="link">Link</option>
          </select>
        </div>

        {/* Size 선택 */}
        <div className="space-y-8">
          <Label className="text-12 font-bold text-integra-gray-500">Size</Label>
          <select 
            className="w-full h-40 rounded-8 border border-input bg-background px-12 py-8 text-14 outline-none focus:ring-2 focus:ring-ring"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="default">Default (40px)</option>
            <option value="sm">Small (32px)</option>
            <option value="md">Medium (48px)</option>
            <option value="icon">Icon (Square)</option>
          </select>
        </div>

        {/* 상태 선택 */}
        <div className="space-y-8">
          <Label className="text-12 font-bold text-integra-gray-500">State</Label>
          <div className="flex items-center gap-8 h-40">
            <input 
              type="checkbox" 
              id="disabled"
              checked={isDisabled}
              onChange={(e) => setIsDisabled(e.target.checked)}
              className="w-16 h-16 accent-primary"
            />
            <label htmlFor="disabled" className="text-14 cursor-pointer select-none">Disabled</label>
          </div>
        </div>

      </div>

      {/* 3. 코드 복사 영역 */}
      <div className="rounded-8 bg-slate-950 p-20 overflow-x-auto relative">
        <div className="text-12 text-slate-500 mb-8 font-mono">// JSX Output</div>
        <code className="text-white text-14 font-mono">
          &lt;Button variant="{variant}" size="{size}" {isDisabled ? 'disabled' : ''}&gt;
            버튼 라벨
          &lt;/Button&gt;
        </code>
      </div>
    </Card>
  )
}