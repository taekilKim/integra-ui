"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Card } from "@/components/ui/card"
import { Playground } from "@/components/layout/playground"

export function PopoverDemo() {
  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-960 mx-auto border border-integra-gray-200 shadow-integra rounded-16 bg-white">
      
      {/* 1. 프리뷰 영역: bg-integra-gray-50 및 border-integra-gray-200 적용 */}
      <Playground>
        <Popover>
          <PopoverTrigger asChild>
            <Button size="medium" variant="tertiary" appearance="outlined">팝오버 열기</Button>
          </PopoverTrigger>
          <PopoverContent className="w-240 p-16">
            <div className="grid gap-16">
              <div className="space-y-4">
                {/* fs-14, fs-12 및 전용 컬러 토큰 적용 */}
                <h4 className="font-bold leading-16 fs-14 text-integra-gray-900">Dimensions</h4>
                <p className="fs-12 text-integra-gray-500">레이아웃의 크기를 조절하세요.</p>
              </div>
              <div className="grid gap-8">
                <div className="flex items-center gap-16">
                  <Label htmlFor="width" className="fs-12 text-integra-gray-700">Width</Label>
                  <Input id="width" defaultValue="100%" className="h-32 fs-12 px-8" />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </Playground>

      {/* 2. 코드 영역: bg-integra-gray-900 및 fs-14 적용 */}
      <div className="rounded-8 bg-integra-gray-900 p-20 overflow-x-auto font-mono fs-14 leading-24 text-white">
        <p className="text-integra-gray-500 mb-8">// Atomic Popover Setup</p>
        <code className="block">
          &lt;Popover&gt;<br/>
          &nbsp;&nbsp;&lt;PopoverTrigger&gt;Open&lt;/PopoverTrigger&gt;<br/>
          &nbsp;&nbsp;&lt;PopoverContent className="w-240"&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;Content...<br/>
          &nbsp;&nbsp;&lt;/PopoverContent&gt;<br/>
          &lt;/Popover&gt;
        </code>
      </div>
    </Card>
  )
}