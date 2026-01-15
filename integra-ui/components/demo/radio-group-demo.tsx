"use client"

import * as React from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge" // ✨ Badge 임포트

export function RadioGroupDemo() {
  const [value, setValue] = React.useState("default")
  const [isDisabled, setIsDisabled] = React.useState(false)

  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-960 mx-auto border border-integra-gray-200 shadow-integra rounded-16 bg-white">
      
      {/* 프리뷰 영역 */}
      <div className="min-h-160 flex flex-col gap-16 items-center justify-center rounded-12 border border-integra-gray-200 bg-integra-gray-50 border-dashed p-24">
        <RadioGroup defaultValue="default" value={value} onValueChange={setValue} className="w-full max-w-320 space-y-16">
          
          <div className="flex items-center gap-8">
            <RadioGroupItem value="default" id="r1" disabled={isDisabled} />
            <Label htmlFor="r1" className="fs-16 text-integra-gray-900">Default Size (56px)</Label>
          </div>

          <div className="flex items-center gap-8">
            <RadioGroupItem value="medium" id="r2" disabled={isDisabled} className="data-[checked]:border-primary" />
            <Label htmlFor="r2" className="fs-16 text-integra-gray-900">Medium Size (48px)</Label>
          </div>
          
          <div className="flex items-center gap-8">
            <RadioGroupItem value="small" id="r3" disabled={isDisabled} />
            <Label htmlFor="r3" className="fs-16 text-integra-gray-900">Small Size (32px)</Label>
          </div>
          
        </RadioGroup>
      </div>

      {/* 컨트롤러 영역 */}
      <div className="pt-24 border-t border-integra-gray-100 grid grid-cols-1 md:grid-cols-3 gap-24">
        {/* Value 표시 - ✨ Badge 컴포넌트로 변경 */}
        <div className="flex flex-col gap-8">
            <Label className="fs-12 font-bold text-integra-gray-400 uppercase tracking-1">Current Value</Label>
            <Badge variant="default" className="fs-12 w-fit py-4 px-12 rounded-full">
                {value}
            </Badge>
        </div>
        
        <div className="space-y-8">
            <Label className="fs-12 font-bold text-integra-gray-400 uppercase tracking-1">Disabled State</Label>
            <div className="flex items-center gap-8 h-40 px-4">
                <input 
                  type="checkbox" 
                  checked={isDisabled}
                  onChange={(e) => setIsDisabled(e.target.checked)}
                  className="w-16 h-16 accent-primary cursor-pointer"
                />
                <span className="fs-14 text-integra-gray-700">Toggle State</span>
            </div>
        </div>
        
        <div className="flex items-center gap-8">
            <Label className="fs-12 font-bold text-integra-gray-400 uppercase tracking-1">Demo Button</Label>
            <Button size="small" variant="default">Test</Button>
        </div>
      </div>

      <div className="rounded-12 bg-integra-gray-900 p-24 overflow-x-auto font-mono fs-14 leading-24 text-white">
        <p className="text-integra-gray-500 mb-8">// SAI Code</p>
        <code className="block">&lt;RadioGroup value="{value}" /&gt;</code>
      </div>
    </Card>
  )
}