"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function ThemeCustomizer() {
  // 현재 radius 상태 (기본값 0.5rem)
  const [radius, setRadius] = React.useState(0.5)

  // 슬라이더 변경 시 실행되는 함수
  const handleRadiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value)
    setRadius(value)
    
    // ✨ 핵심: 문서 전체의 CSS 변수(--radius)를 실시간으로 변경
    document.documentElement.style.setProperty("--radius", `${value}rem`)
  }

  return (
    <Card className="p-6 border-2 border-primary/20">
      <div className="space-y-4">
        <h3 className="text-lg font-bold flex items-center gap-2">
          🎨 디자이너 전용 컨트롤러
        </h3>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <label className="text-sm font-medium">
              모서리 둥글기 (Radius)
            </label>
            <span className="text-sm text-muted-foreground">
              {radius}rem ({radius * 16}px)
            </span>
          </div>
          
          {/* 슬라이더 인풋 */}
          <input
            type="range"
            min="0"
            max="2"
            step="0.1"
            value={radius}
            onChange={handleRadiusChange}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
          />
        </div>

        <div className="pt-4 border-t">
          <p className="text-xs text-muted-foreground mb-2">미리보기 (Preview)</p>
          <div className="flex gap-2">
            <Button>Primary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
          </div>
        </div>
      </div>
    </Card>
  )
}