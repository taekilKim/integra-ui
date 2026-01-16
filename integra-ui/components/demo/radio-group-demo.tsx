"use client"

import * as React from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Playground } from "@/components/layout/playground"

export function RadioGroupDemo() {
  const [isDisabled, setIsDisabled] = React.useState(false)

  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-960 mx-auto border border-integra-gray-200 shadow-integra rounded-16 bg-white">
      
      {/* 1. 프리뷰 영역: bg-integra-gray-50 및 border-integra-gray-200 적용 */}
      <Playground>
        <RadioGroup defaultValue="option-1" disabled={isDisabled} className="grid gap-12">
          <div className="flex items-center gap-8">
            <RadioGroupItem value="option-1" id="r1" />
            <Label htmlFor="r1" className={`fs-14 ${isDisabled ? "text-integra-gray-300" : "text-integra-gray-900"}`}>
              Option One (Default)
            </Label>
          </div>
          <div className="flex items-center gap-8">
            <RadioGroupItem value="option-2" id="r2" />
            <Label htmlFor="r2" className={`fs-14 ${isDisabled ? "text-integra-gray-300" : "text-integra-gray-900"}`}>
              Option Two (Selection)
            </Label>
          </div>
        </RadioGroup>
      </Playground>

      {/* 2. 컨트롤러 영역: border-integra-gray-100 적용 */}
      <div className="pt-24 border-t border-integra-gray-100 flex items-center gap-8">
        <input 
          type="checkbox" 
          id="radio-disabled-toggle"
          checked={isDisabled}
          onChange={(e) => setIsDisabled(e.target.checked)}
          className="w-16 h-16 accent-primary cursor-pointer"
        />
        <Label 
          htmlFor="radio-disabled-toggle" 
          className="fs-14 font-medium text-integra-gray-700 cursor-pointer select-none"
        >
          Disabled State
        </Label>
      </div>

      {/* 3. 코드 영역: bg-integra-gray-900 및 fs-14 적용 */}
      <div className="rounded-8 bg-integra-gray-900 p-20 overflow-x-auto font-mono fs-14 leading-24 text-white">
        <p className="text-integra-gray-500 mb-8">// Atomic Radio Group Setup</p>
        <code>
          &lt;RadioGroup defaultValue="option-1" {isDisabled ? 'disabled' : ''}&gt;<br />
          &nbsp;&nbsp;&lt;RadioGroupItem value="option-1" id="r1" /&gt;<br />
          &lt;/RadioGroup&gt;
        </code>
      </div>
    </Card>
  )
}