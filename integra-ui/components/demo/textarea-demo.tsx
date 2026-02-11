"use client"

import * as React from "react"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Playground } from "@/components/layout/playground"

export function TextareaDemo() {
  const [isDisabled, setIsDisabled] = React.useState(false)

  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-960 mx-auto border border-integra-gray-200 shadow-integra rounded-16 bg-white">
      
      {/* 1. 프리뷰 영역: bg-integra-gray-50 및 border-integra-gray-200 적용 */}
      <Playground>
        <div className="grid w-full gap-8">
          <Label htmlFor="demo-textarea" className="fs-14 text-integra-gray-900">텍스트 에어리어</Label>
          <Textarea 
            id="demo-textarea" 
            placeholder="자유롭게 작성해주세요." 
            disabled={isDisabled} 
            className="min-h-120 fs-14" 
          />
        </div>
      </Playground>

      {/* 2. 컨트롤러 영역: border-integra-gray-100 적용 */}
      <div className="pt-24 border-t border-integra-gray-100 flex items-center gap-8">
        <input 
          type="checkbox" 
          id="textarea-disabled-toggle"
          checked={isDisabled}
          onChange={(e) => setIsDisabled(e.target.checked)}
          className="w-16 h-16 accent-primary cursor-pointer"
        />
        <Label 
          htmlFor="textarea-disabled-toggle" 
          className="fs-14 font-medium text-integra-gray-700 cursor-pointer select-none"
        >
          비활성화 상태
        </Label>
      </div>

      {/* 3. 코드 영역: bg-integra-gray-900 및 fs-14 적용 */}
      <div className="rounded-8 bg-integra-gray-900 p-20 overflow-x-auto font-mono fs-14 leading-24 text-white">
        <p className="text-integra-gray-500 mb-8">// 텍스트 영역 설정 예시</p>
        <code>&lt;Textarea placeholder="내용을 입력하세요..." {isDisabled ? 'disabled' : ''} /&gt;</code>
      </div>
    </Card>
  )
}
