"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

// 한국 서비스들이 선호하는 색상 프리셋 (HSL 값)
const THEMES = [
  { name: "Integra Blue", value: "217 91% 60%", color: "bg-blue-500" }, // 토스/기본
  { name: "Kakao Yellow", value: "47.9 95.8% 53.1%", color: "bg-yellow-400" }, // 카카오
  { name: "Naver Green",  value: "142.1 76.2% 36.3%", color: "bg-green-500" }, // 네이버
  { name: "Carrot Orange", value: "24.6 95% 53.1%", color: "bg-orange-500" }, // 당근
  { name: "Classic Slate", value: "222.2 47.4% 11.2%", color: "bg-slate-900" }, // 정석 블랙
]

export function ThemeCustomizer() {
  const [radius, setRadius] = React.useState(0.5)
  const [activeTheme, setActiveTheme] = React.useState("Integra Blue")

  // 1. Radius 변경 핸들러
  const handleRadiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value)
    setRadius(value)
    document.documentElement.style.setProperty("--radius", `${value}rem`)
  }

  // 2. Color 변경 핸들러
  const handleColorChange = (theme: typeof THEMES[0]) => {
    setActiveTheme(theme.name)
    // Primary 컬러와 Focus Ring 컬러를 동시에 변경
    document.documentElement.style.setProperty("--primary", theme.value)
    document.documentElement.style.setProperty("--ring", theme.value)
  }

  return (
    <Card className="p-6 border-2 border-primary/20 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold flex items-center gap-2">
          🎨 Theme Controller
        </h3>
        <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-500">
            Designer Only
        </span>
      </div>

      <hr className="border-slate-100" />

      {/* 섹션 1: Radius 제어 */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <Label className="text-sm font-medium">Radius (곡률)</Label>
          <span className="text-xs text-muted-foreground">{radius}rem</span>
        </div>
        <input
          type="range"
          min="0"
          max="1.5"
          step="0.1"
          value={radius}
          onChange={handleRadiusChange}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
        />
      </div>

      {/* 섹션 2: Color 제어 */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <Label className="text-sm font-medium">Brand Color</Label>
          <span className="text-xs text-muted-foreground">{activeTheme}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {THEMES.map((theme) => (
            <button
              key={theme.name}
              onClick={() => handleColorChange(theme)}
              className={cn(
                "w-8 h-8 rounded-full border-2 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2",
                theme.color,
                activeTheme === theme.name 
                    ? "border-slate-900 ring-2 ring-slate-900 ring-offset-1" 
                    : "border-transparent"
              )}
              title={theme.name}
            />
          ))}
        </div>
      </div>

      {/* 미리보기 영역 */}
      <div className="pt-4 border-t bg-slate-50/50 -mx-6 -mb-6 p-6 rounded-b-xl">
        <p className="text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-wider">
            Live Preview
        </p>
        <div className="flex flex-wrap gap-2 items-center">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-primary-foreground text-xs">
            Box
          </div>
        </div>
      </div>
    </Card>
  )
}