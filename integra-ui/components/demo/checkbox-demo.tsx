"use client"

import * as React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Playground } from "@/components/layout/playground"

export function CheckboxDemo() {
  const [isDisabled, setIsDisabled] = React.useState(false)

  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-960 mx-auto border border-integra-gray-200 shadow-integra rounded-16 bg-white">
      
      {/* 1. 프리뷰 영역: bg-integra-gray-50 및 border-integra-gray-200 적용 */}
      <Playground>
        <div className="flex items-center gap-8">
          <Checkbox id="demo-checkbox" disabled={isDisabled} />
          {/* 비활성화 시 text-integra-gray-300 토큰으로 명확히 구분 */}
          <Label 
            htmlFor="demo-checkbox" 
            className={isDisabled ? "text-integra-gray-300" : "text-integra-gray-900"}
          >
            다음 로그인할 때 이 장치 기억하기
          </Label>
        </div>
      </Playground>

      {/* 2. 컨트롤러 영역: border-integra-gray-100 적용 */}
      <div className="grid grid-cols-1 gap-24 pt-24 border-t border-integra-gray-100">
        <div className="flex items-center gap-8">
          <input 
            type="checkbox" 
            id="disabled-checkbox-toggle"
            checked={isDisabled}
            onChange={(e) => setIsDisabled(e.target.checked)}
            className="w-16 h-16 accent-primary"
          />
          <Label htmlFor="disabled-checkbox-toggle" className="fs-14 font-medium text-integra-gray-700 cursor-pointer">
            비활성화 상태
          </Label>
        </div>
      </div>

      {/* 3. 코드 영역: bg-integra-gray-900 적용 */}
      <div className="rounded-8 bg-integra-gray-900 p-20 overflow-x-auto font-mono fs-14 leading-24 text-white">
        <p className="text-integra-gray-500 mb-8">// 체크박스 상태 예시</p>
        <code>&lt;Checkbox {isDisabled ? 'disabled' : ''} /&gt;</code>
      </div>
    </Card>
  )
}
