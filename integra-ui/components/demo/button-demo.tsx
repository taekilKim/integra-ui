"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Playground } from "@/components/layout/playground" // ✨ 필수: Playground 임포트
import { Plus } from "@phosphor-icons/react"

export function ButtonDemo() {
  const [appearance, setAppearance] = React.useState<any>("default")
  const [variant, setVariant] = React.useState<any>("default")
  const [size, setSize] = React.useState<any>("default")
  const [shape, setShape] = React.useState<any>("default") // ✨ 신규: Shape 상태 추가
  const [isDisabled, setIsDisabled] = React.useState(false)

  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-960 mx-auto border border-integra-gray-200 shadow-integra rounded-16 bg-white">
      
      {/* 1. 프리뷰 영역: Playground 컴포넌트 사용 */}
      <Playground>
        <Button 
          appearance={appearance} 
          variant={variant} 
          size={size} 
          shape={shape} // ✨ Shape 적용
          disabled={isDisabled}
        >
          {/* Shape가 default(직사각형)면 텍스트, 아니면 아이콘 렌더링 */}
          {shape === "default" ? "버튼 라벨" : <Plus />}
        </Button>
      </Playground>

      {/* 2. 컨트롤러 영역: 5열 그리드로 확장하여 모든 옵션 수용 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-24 pt-24 border-t border-integra-gray-100">
        
        {/* Shape Control (New) */}
        <div className="space-y-8">
          <Label className="fs-12 font-bold text-integra-gray-400 uppercase tracking-1">모양</Label>
          <select 
            className="w-full h-40 rounded-8 border border-integra-gray-200 bg-white px-12 py-8 fs-14 text-integra-gray-900 outline-none focus:ring-2 focus:ring-primary transition-all"
            value={shape}
            onChange={(e) => setShape(e.target.value)}
          >
            <option value="default">직사각형</option>
            <option value="square">스퀘클 (아이콘)</option>
            <option value="circle">원형 (아이콘)</option>
          </select>
        </div>

        {/* Size Control */}
        <div className="space-y-8">
          <Label className="fs-12 font-bold text-integra-gray-400 uppercase tracking-1">크기</Label>
          <select 
            className="w-full h-40 rounded-8 border border-integra-gray-200 bg-white px-12 py-8 fs-14 text-integra-gray-900 outline-none focus:ring-2 focus:ring-primary transition-all"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="default">기본 (56px)</option>
            <option value="medium">중간 (48px)</option>
            <option value="small">소형 (32px)</option>
          </select>
        </div>

        {/* Appearance Control */}
        <div className="space-y-8">
          <Label className="fs-12 font-bold text-integra-gray-400 uppercase tracking-1">외형</Label>
          <select 
            className="w-full h-40 rounded-8 border border-integra-gray-200 bg-white px-12 py-8 fs-14 text-integra-gray-900 outline-none focus:ring-2 focus:ring-primary transition-all"
            value={appearance}
            onChange={(e) => setAppearance(e.target.value)}
          >
            <option value="default">기본 (솔리드)</option>
            <option value="outlined">아웃라인</option>
            <option value="destructive">경고</option>
            <option value="text">텍스트</option>
          </select>
        </div>

        {/* Variant Control */}
        <div className="space-y-8">
          <Label className="fs-12 font-bold text-integra-gray-400 uppercase tracking-1">변형</Label>
          <select
            className="w-full h-40 rounded-8 border border-integra-gray-200 bg-white px-12 py-8 fs-14 text-integra-gray-900 outline-none focus:ring-2 focus:ring-primary transition-all"
            value={variant}
            onChange={(e) => setVariant(e.target.value)}
          >
            <option value="default">기본</option>
            <option value="secondary">보조</option>
            <option value="tertiary">삼차</option>
          </select>
        </div>

        {/* State Control */}
        <div className="space-y-8">
          <Label className="fs-12 font-bold text-integra-gray-400 uppercase tracking-1">상태</Label>
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
              비활성화
            </label>
          </div>
        </div>

      </div>

      {/* 3. 코드 복사 영역 */}
      <div className="rounded-12 bg-integra-gray-900 p-24 overflow-x-auto relative shadow-2xl">
        <div className="fs-12 text-integra-gray-500 mb-12 font-mono tracking-1 uppercase">// JSX 출력 예시</div>
        <code className="text-white fs-14 font-mono leading-24">
          &lt;Button <br/>
          &nbsp;&nbsp;shape="{shape}" <br/>
          &nbsp;&nbsp;size="{size}" <br/>
          &nbsp;&nbsp;appearance="{appearance}" <br/>
          &nbsp;&nbsp;variant="{variant}"<br/>
          &nbsp;&nbsp;{isDisabled ? 'disabled' : ''} <br/>
          &gt;<br/>
          &nbsp;&nbsp;{shape === 'default' ? '버튼 라벨' : '<아이콘 />'}<br/>
          &lt;/Button&gt;
        </code>
      </div>
    </Card>
  )
}
