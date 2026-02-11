"use client"

import * as React from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Playground } from "@/components/layout/playground"

export function SelectDemo() {
  const [isDisabled, setIsDisabled] = React.useState(false)

  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-960 mx-auto border border-integra-gray-200 shadow-integra rounded-16 bg-white">
      
      {/* 1. 프리뷰 영역: bg-integra-gray-50 및 border-integra-gray-200 적용 */}
      <Playground>
        <div className="grid w-full max-w-200 gap-8">
          <Label className="fs-14 text-integra-gray-900">직무</Label>
          <Select disabled={isDisabled}>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="선택하세요" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="designer">프로덕트 디자이너</SelectItem>
              <SelectItem value="developer">프론트엔드 개발자</SelectItem>
              <SelectItem value="pm">프로덕트 매니저</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Playground>

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
          비활성화 상태
        </Label>
      </div>

      {/* 3. 코드 영역: bg-integra-gray-900 및 fs-14 적용 */}
      <div className="rounded-8 bg-integra-gray-900 p-20 overflow-x-auto font-mono fs-14 leading-24 text-white">
        <p className="text-integra-gray-500 mb-8">// 셀렉트 설정 예시</p>
        <code>&lt;Select {isDisabled ? 'disabled' : ''}&gt;...&lt;/Select&gt;</code>
      </div>
    </Card>
  )
}
