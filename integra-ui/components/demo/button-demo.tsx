"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label" // 라벨이 없으면 div로 대체 가능

export function ButtonDemo() {
  // 사용자가 선택한 옵션을 저장하는 상태
  const [variant, setVariant] = React.useState<any>("default")
  const [size, setSize] = React.useState<any>("default")
  const [isDisabled, setIsDisabled] = React.useState(false)

  return (
    <Card className="p-6 md:p-10 flex flex-col gap-8 w-full max-w-3xl mx-auto border-2 border-slate-100">
      
      {/* 1. 프리뷰 영역: 실제 버튼이 보여지는 곳 */}
      <div className="min-h-[150px] flex items-center justify-center rounded-lg border bg-slate-50/50 border-dashed">
        <Button variant={variant} size={size} disabled={isDisabled}>
          Button Preview
        </Button>
      </div>

      {/* 2. 컨트롤러 영역: 옵션 조작 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t">
        
        {/* Variant 선택 */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Variant (스타일)</label>
          <select 
            className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
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
        <div className="space-y-2">
          <label className="text-sm font-medium">Size (크기)</label>
          <select 
            className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="sm">Small</option>
            <option value="lg">Large</option>
            <option value="icon">Icon</option>
          </select>
        </div>

        {/* 상태 선택 */}
        <div className="space-y-2">
          <label className="text-sm font-medium">State (상태)</label>
          <div className="flex items-center gap-2 h-10">
            <input 
              type="checkbox" 
              id="disabled"
              checked={isDisabled}
              onChange={(e) => setIsDisabled(e.target.checked)}
              className="w-4 h-4 accent-primary"
            />
            <label htmlFor="disabled" className="text-sm cursor-pointer">Disabled (비활성)</label>
          </div>
        </div>

      </div>

      {/* 3. 코드 복사 영역 (디자이너/개발자 소통용) */}
      <div className="rounded-md bg-slate-950 p-4 overflow-x-auto">
        <code className="text-white text-xs md:text-sm font-mono">
          &lt;Button variant="{variant}" size="{size}" {isDisabled ? 'disabled' : ''}&gt;
            Button Preview
          &lt;/Button&gt;
        </code>
      </div>
    </Card>
  )
}