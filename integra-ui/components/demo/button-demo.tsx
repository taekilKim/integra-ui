"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Playground } from "@/components/layout/playground" 

/**
 * [Integra UI - Button Demo SAI Version]
 * 4가지 어피어런스(Solid, Outlined, Destructive, Text)와 
 * 3가지 위계, 3가지 규격을 실시간으로 조합해볼 수 있는 플레이그라운드입니다.
 */
export function ButtonDemo() {
  const [appearance, setAppearance] = React.useState<any>("default")
  const [variant, setVariant] = React.useState<any>("default")
  const [size, setSize] = React.useState<any>("default")
  const [isDisabled, setIsDisabled] = React.useState(false)

  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-960 mx-auto border border-integra-gray-200 shadow-integra rounded-16 bg-white">
      
      {/* ✨ 1. 프리뷰 영역: Playground 컴포넌트로 교체 */}
      <Playground>
        <Button 
          appearance={appearance} 
          variant={variant} 
          size={size} 
          disabled={isDisabled}
        >
          버튼 라벨
        </Button>
      </Playground>

      {/* 2. 컨트롤러 영역: 4열 그리드 구성 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 pt-24 border-t border-integra-gray-100">
        
        {/* Appearance (성격 및 모드) */}
        <div className="space-y-8">
          <Label className="fs-12 font-semibold text-integra-gray-500 uppercase tracking-1">Appearance</Label>
          <select 
            className="w-full h-40 rounded-8 border border-integra-gray-200 bg-white px-12 py-8 fs-14 text-integra-gray-900 outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            value={appearance}
            onChange={(e) => setAppearance(e.target.value)}
          >
            <option value="default">Default (Solid)</option>
            <option value="outlined">Outlined</option>
            <option value="destructive">Destructive (Red)</option>
            <option value="text">Text (Transparent)</option>
          </select>
        </div>

        {/* Variant (시각적 위계) */}
        <div className="space-y-8">
          <Label className="fs-12 font-semibold text-integra-gray-500 uppercase tracking-1">Variant</Label>
          <select 
            className="w-full h-40 rounded-8 border border-integra-gray-200 bg-white px-12 py-8 fs-14 text-integra-gray-900 outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            value={variant}
            onChange={(e) => setVariant(e.target.value)}
          >
            <option value="default">Default (1st)</option>
            <option value="secondary">Secondary (2nd)</option>
            <option value="tertiary">Tertiary (3rd)</option>
          </select>
        </div>

        {/* Size (표준 규격) */}
        <div className="space-y-8">
          <Label className="fs-12 font-semibold text-integra-gray-500 uppercase tracking-1">Size</Label>
          <select 
            className="w-full h-40 rounded-8 border border-integra-gray-200 bg-white px-12 py-8 fs-14 text-integra-gray-900 outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="default">Default (56px)</option>
            <option value="medium">Medium (48px)</option>
            <option value="small">Small (32px)</option>
          </select>
        </div>

        {/* State (비활성 상태) */}
        <div className="space-y-8">
          <Label className="fs-12 font-semibold text-integra-gray-500 uppercase tracking-1">State</Label>
          <div className="flex items-center gap-8 h-40 px-4">
            <input 
              type="checkbox" 
              id="demo-disabled-toggle"
              checked={isDisabled}
              onChange={(e) => setIsDisabled(e.target.checked)}
              className="w-16 h-16 accent-primary cursor-pointer"
            />
            <label 
              htmlFor="demo-disabled-toggle" 
              className="fs-14 cursor-pointer select-none font-medium text-integra-gray-700 hover:text-integra-gray-900 transition-colors"
            >
              Disabled
            </label>
          </div>
        </div>

      </div>

      {/* 3. 코드 복사 영역: SAI 규격 코드 실시간 생성 */}
      <div className="rounded-12 bg-integra-gray-900 p-24 overflow-x-auto relative shadow-2xl">
        <div className="fs-12 text-integra-gray-500 mb-12 font-mono tracking-1 uppercase">// JSX Atomic Output</div>
        <code className="text-white fs-14 font-mono leading-24">
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