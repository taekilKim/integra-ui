"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

const THEME_COLORS = [
  { name: "Integra Blue", value: "218 100% 58%", class: "bg-integra-blue-500" },
  { name: "Green", value: "164 91% 37%", class: "bg-integra-green-500" },
  { name: "Red", value: "355 86% 61%", class: "bg-integra-red-500" },
  { name: "Orange", value: "34 93% 50%", class: "bg-integra-orange-500" },
  { name: "Violet", value: "257 91% 66%", class: "bg-integra-violet-500" },
]

export function TokenExperience() {
  const [radius, setRadius] = React.useState(8)
  const [activeColor, setActiveColor] = React.useState(THEME_COLORS[0])

  const handleUpdate = (r: number, c: typeof THEME_COLORS[0]) => {
    setRadius(r)
    setActiveColor(c)
    document.documentElement.style.setProperty("--radius", `${r}px`)
    document.documentElement.style.setProperty("--primary", c.value)
    document.documentElement.style.setProperty("--ring", c.value)
  }

  return (
    <div className="grid lg:grid-cols-2 gap-80 items-center">
      {/* Left: Content & Control */}
      <div className="space-y-48">
        <div className="space-y-16">
          <h2 className="fs-32 font-bold leading-40 tracking--3 text-integra-gray-900">
            수치 기반의 설계가 <br />
            경험이 되는 순간
          </h2>
          <p className="fs-18 text-integra-gray-500 leading-28 tracking--1">
            Integra UI의 아토믹 토큰은 단순한 변수가 아닙니다.<br />
            슬라이더를 움직여 전체 시스템의 질서를 실시간으로 제어해 보세요.
          </p>
        </div>

        <div className="space-y-40 p-32 rounded-24 border border-integra-gray-100 bg-white">
          {/* Radius Control */}
          <div className="space-y-16">
            <div className="flex justify-between items-center">
              <Label className="fs-14 font-bold text-integra-gray-900">Border Radius (곡률)</Label>
              <span className="fs-12 font-mono font-bold text-primary">{radius}px</span>
            </div>
            <input
              type="range" min="0" max="24" step="2" value={radius}
              onChange={(e) => handleUpdate(parseInt(e.target.value), activeColor)}
              className="w-full h-4 bg-integra-gray-100 rounded-full appearance-none cursor-pointer accent-primary"
            />
          </div>

          {/* Color Control */}
          <div className="space-y-16">
            <Label className="fs-14 font-bold text-integra-gray-900">Primary Color (주조색)</Label>
            <div className="flex gap-12">
              {THEME_COLORS.map((c) => (
                <button
                  key={c.name}
                  onClick={() => handleUpdate(radius, c)}
                  className={cn(
                    "w-32 h-32 rounded-full transition-all hover:scale-110",
                    c.class,
                    activeColor.name === c.name ? "ring-4 ring-integra-gray-100 border-2 border-white" : ""
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right: Live Preview Dashboard */}
      <div className="bg-integra-gray-50 rounded-32 p-40 border border-integra-gray-100 shadow-inner">
        <Card className="bg-white border-integra-gray-200">
          <CardHeader className="pb-16">
            <div className="flex justify-between items-center mb-4">
              <CardTitle className="fs-18 font-bold">Preview Card</CardTitle>
              <Badge variant="default" className="fs-12">System Live</Badge>
            </div>
            <CardDescription className="fs-14 text-integra-gray-500">
              토큰 변경 사항이 즉시 반영되는 원자들의 집합입니다.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-24">
            <div className="space-y-8">
              <Label className="fs-12 text-integra-gray-400">Atomic Input</Label>
              <Input placeholder="Enter value..." className="h-40" />
            </div>
            <div className="flex items-center justify-between p-16 rounded-12 border border-integra-gray-100 bg-white">
              <span className="fs-14 font-medium text-integra-gray-700">Sync with variable</span>
              <Switch checked />
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <Button appearance="default" variant="default" className="w-full h-48 fs-14">
              Confirm Changes
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}