"use client"

import * as React from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { Playground } from "@/components/layout/playground"

export function AvatarDemo() {
  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-960 mx-auto border border-integra-gray-200 shadow-integra rounded-16 bg-white">
      {/* 프리뷰 영역 */}
      <Playground>
        {/* 기본 이미지 상태 */}
        <div className="flex flex-col items-center gap-8">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="User" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="fs-12 text-integra-gray-500 font-mono">Image</span>
        </div>
        
        {/* 폴백(이름) 상태 */}
        <div className="flex flex-col items-center gap-8">
          <Avatar>
            <AvatarFallback>IT</AvatarFallback>
          </Avatar>
          <span className="fs-12 text-integra-gray-500 font-mono">Fallback</span>
        </div>
      </Playground>
    </Card>
  )
}