"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export function ButtonDemo() {
  const [appearance, setAppearance] = React.useState<any>("default")
  const [variant, setVariant] = React.useState<any>("default")
  const [size, setSize] = React.useState<any>("default")
  const [isDisabled, setIsDisabled] = React.useState(false)

  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-960 mx-full border border-integra-gray-200 shadow-integra rounded-16">
      
      {/* 1. 프리뷰 영역: bg-integra-gray-50 (투명도 조절 제거) */}
      <div className="min-h-200 flex items-center justify-center rounded-12 border border-integra-gray-200 bg-integra-gray-50 border-dashed">
        <Button 
          appearance={appearance} 
          variant={variant} 
          size={size} 
          disabled={isDisabled}
        >
          버튼 라벨
        </Button>
      </div>

      {/* 2. 컨트롤러 영역: border-integra-gray-100 적용 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 pt-24 border-t border-integra-gray-100">
        
        {/* Appearance */}
        <div className="space-y-8">
          <Label className="fs-12 font-semibold text-integra-gray-500">Appearance</Label>
          <select 
            className="w-full h-40 rounded-8 border border-input bg-background px-12 py-8 fs-14 outline-none focus:ring-2 focus:ring-ring"
            value={appearance}
            onChange={(e) => setAppearance(e.target.value)}
          >
            <option value="default">Default (Blue)</option>
            <option value="destructive">Destructive (Red)</option>
            <option value="text">Text (Transparent)</option>
          </select>
        </div>

        {/* Variant */}
        <div className="space-y-8">
          <Label className="fs-12 font-semibold text-integra-gray-500">Variant</Label>
          <select 
            className="w-full h-40 rounded-8 border border-input bg-background px-12 py-8 fs-14 outline-none focus:ring-2 focus:ring-ring"
            value={variant}
            onChange={(e) => setVariant(e.target.value)}
          >
            <option value="default">Default (1st)</option>
            <option value="secondary">Secondary (2nd)</option>
            <option value="tertiary">Tertiary (3rd)</option>
          </select>
        </div>

        {/* Size */}
        <div className="space-y-8">
          <Label className="fs-12 font-semibold text-integra-gray-500">Size</Label>
          <select 
            className="w-full h-40 rounded-8 border border-input bg-background px-12 py-8 fs-14 outline-none focus:ring-2 focus:ring-ring"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="default">Default (56px)</option>
            <option value="medium">Medium (48px)</option>
            <option value="small">Small (32px)</option>
          </select>
        </div>

        {/* State */}
        <div className="space-y-8">
          <Label className="fs-12 font-semibold text-integra-gray-500">State</Label>
          <div className="flex items-center gap-8 h-40">
            <input 
              type="checkbox" 
              id="disabled-toggle"
              checked={isDisabled}
              onChange={(e) => setIsDisabled(e.target.checked)}
              className="w-16 h-16 accent-primary"
            />
            <label htmlFor="disabled-toggle" className="fs-14 cursor-pointer select-none font-medium text-integra-gray-700">Disabled</label>
          </div>
        </div>

      </div>

      {/* 3. 코드 복사 영역: bg-integra-gray-900 (어두운 토큰 적용) */}
      <div className="rounded-8 bg-integra-gray-900 p-20 overflow-x-auto relative">
        <div className="fs-12 text-integra-gray-500 mb-8 font-mono">// Atomic Combination</div>
        <code className="text-white fs-14 font-mono">
          &lt;Button <br/>
          &nbsp;&nbsp;appearance="{appearance}" <br/>
          &nbsp;&nbsp;variant="{variant}" <br/>
          &nbsp;&nbsp;size="{size}"<br/>
          &nbsp;&nbsp;{isDisabled ? 'disabled' : ''} <br/>
          &gt;<br/>
          &nbsp;&nbsp;버튼 라벨<br/>
          &lt;/Button&gt;
        </code>
      </div>
    </Card>
  )
}