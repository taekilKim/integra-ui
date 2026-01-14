"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"

export function InputDemo() {
  const [isDisabled, setIsDisabled] = React.useState(false)
  const [placeholder, setPlaceholder] = React.useState("이메일을 입력하세요")

  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-960 mx-auto border border-integra-gray-200 shadow-integra rounded-16 bg-white">
      
      {/* 1. 프리뷰 영역: bg-integra-gray-50 및 border-integra-gray-200 적용 */}
      <div className="min-h-160 flex items-center justify-center rounded-12 border border-integra-gray-200 bg-integra-gray-50 border-dashed p-24">
        <div className="grid w-full max-w-320 gap-8">
          <Label htmlFor="demo-input" className="fs-14 text-integra-gray-900">Email Address</Label>
          <Input id="demo-input" placeholder={placeholder} disabled={isDisabled} />
        </div>
      </div>

      {/* 2. 컨트롤러 영역: border-integra-gray-100 적용 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 pt-24 border-t border-integra-gray-100">
        <div className="space-y-8">
          <Label className="fs-12 font-bold text-integra-gray-400 uppercase tracking-1">Placeholder</Label>
          <Input 
            value={placeholder} 
            onChange={(e) => setPlaceholder(e.target.value)} 
            className="fs-14"
          />
        </div>
        <div className="flex items-center gap-8 self-end h-40">
          <input 
            type="checkbox" 
            id="input-disabled-toggle"
            checked={isDisabled}
            onChange={(e) => setIsDisabled(e.target.checked)}
            className="w-16 h-16 accent-primary"
          />
          <Label htmlFor="input-disabled-toggle" className="fs-14 font-medium text-integra-gray-700 cursor-pointer select-none">
            Disabled
          </Label>
        </div>
      </div>

      {/* 3. 코드 영역: bg-integra-gray-900 및 fs-14 적용 */}
      <div className="rounded-8 bg-integra-gray-900 p-20 overflow-x-auto font-mono fs-14 leading-24 text-white">
        <p className="text-integra-gray-500 mb-8">// Atomic Input Setup</p>
        <code>&lt;Input placeholder="{placeholder}" {isDisabled ? 'disabled' : ''} /&gt;</code>
      </div>
    </Card>
  )
}