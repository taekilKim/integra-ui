"use client"

import * as React from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"

export function SelectDemo() {
  const [isDisabled, setIsDisabled] = React.useState(false)

  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-960 mx-auto border border-integra-gray-200 shadow-integra rounded-16 bg-white">
      
      {/* 1. 프리뷰 영역: bg-integra-gray-50 및 border-integra-gray-200 적용 */}
      <div className="min-h-240 flex items-start pt-40 justify-center rounded-12 border border-integra-gray-200 bg-integra-gray-50 border-dashed p-24">
        <div className="grid w-full max-w-200 gap-8">
          <Label className="fs-14 text-integra-gray-900">Framework</Label>
          <Select disabled={isDisabled}>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Select one" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="next">Next.js</SelectItem>
              <SelectItem value="react">React</SelectItem>
              <SelectItem value="vue">Vue</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* 2. 컨트롤러 영역: border-integra-gray-100 적용 */}
      <div className="pt-24 border-t border-integra-gray-100 flex items-center gap-8">
        <input 
          type="checkbox" 
          id="select-disabled-toggle"
          checked={isDisabled}
          onChange={(e) => setIsDisabled(e.target.checked)}
          className="w-16 h-16 accent-primary cursor-pointer"
        />
        <Label 
          htmlFor="select-disabled-toggle" 
          className="fs-14 font-medium text-integra-gray-700 cursor-pointer select-none"
        >
          Disabled State
        </Label>
      </div>

      {/* 3. 코드 영역: bg-integra-gray-900 및 fs-14 적용 */}
      <div className="rounded-8 bg-integra-gray-900 p-20 overflow-x-auto font-mono fs-14 leading-24 text-white">
        <p className="text-integra-gray-500 mb-8">// Atomic Select Setup</p>
        <code>&lt;Select {isDisabled ? 'disabled' : ''}&gt;...&lt;/Select&gt;</code>
      </div>
    </Card>
  )
}