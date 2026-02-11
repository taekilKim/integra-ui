"use client"

import * as React from "react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SheetDemo() {
  return (
    <Card className="p-24 md:p-40 w-full max-w-960 mx-auto border border-integra-gray-200 shadow-integra rounded-16 bg-white">
      {/* 프리뷰 영역 */}
      <div className="min-h-240 flex flex-col items-center justify-center gap-24 rounded-12 border border-integra-gray-200 border-dashed p-24">
        <div className="flex flex-wrap gap-16 justify-center">
          {(["top", "bottom", "left", "right"] as const).map((side) => (
            <Sheet key={side}>
              <SheetTrigger asChild>
                <Button size="medium" variant="tertiary" appearance="outlined">
                  {{ top: "위", bottom: "아래", left: "왼쪽", right: "오른쪽" }[side]}
                </Button>
              </SheetTrigger>
              <SheetContent side={side as any}>
                <SheetHeader>
                  <SheetTitle>프로필 편집</SheetTitle>
                  <SheetDescription>
                    프로필 정보를 업데이트하고 변경 사항을 저장하세요.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-24 py-24">
                  <div className="space-y-8">
                    <Label htmlFor="name" className="fs-14">이름</Label>
                    <Input id="name" defaultValue="홍길동" />
                  </div>
                  <div className="space-y-8">
                    <Label htmlFor="username" className="fs-14">별명</Label>
                    <Input id="username" defaultValue="@hong.design" />
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button type="submit" appearance="default" variant="default">저장</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          ))}
        </div>
      </div>

      {/* 코드 영역 */}
      <div className="rounded-8 bg-integra-gray-900 p-20 overflow-x-auto font-mono fs-14 leading-24 text-white">
        <p className="text-integra-gray-500 mb-8">// 시트 구조 예시</p>
        <code className="block">
          &lt;Sheet&gt;<br/>
          &nbsp;&nbsp;&lt;SheetTrigger&gt;열기&lt;/SheetTrigger&gt;<br/>
          &nbsp;&nbsp;&lt;SheetContent side="right"&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;SheetHeader&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;SheetTitle&gt;제목&lt;/SheetTitle&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;SheetDescription&gt;설명&lt;/SheetDescription&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/SheetHeader&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;{/* 내용 영역 */}<br/>
          &nbsp;&nbsp;&lt;/SheetContent&gt;<br/>
          &lt;/Sheet&gt;
        </code>
      </div>
    </Card>
  )
}
