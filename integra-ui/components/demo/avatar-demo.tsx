"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { Playground } from "@/components/layout/playground"

export function AvatarDemo() {
  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-960 mx-auto border border-integra-gray-200 shadow-integra rounded-16 bg-white">
      
      {/* 
         1. Playground 적용 
         2. gap-40: 두 예시 사이의 간격을 40px로 확보
      */}
      <Playground className="gap-40">
        
        {/* 기본 아바타 (이미지 있음) */}
        <div className="flex flex-col items-center gap-12">
          <Avatar className="h-48 w-48 shadow-sm">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="fs-12 text-integra-gray-500 font-medium">Image Source</span>
        </div>

        {/* 폴백 아바타 (이미지 없음 -> 텍스트 표시) */}
        <div className="flex flex-col items-center gap-12">
          <Avatar className="h-48 w-48 shadow-sm">
            <AvatarFallback className="bg-integra-blue-50 text-primary font-bold fs-16">
              JD
            </AvatarFallback>
          </Avatar>
          <span className="fs-12 text-integra-gray-500 font-medium">Text Fallback</span>
        </div>

      </Playground>

      {/* 코드 영역 */}
      <div className="rounded-12 bg-integra-gray-900 p-24 overflow-x-auto font-mono fs-14 leading-24 text-white">
        <p className="text-integra-gray-500 mb-8">// Atomic Avatar</p>
        <code className="block">
          &lt;Avatar className="h-48 w-48"&gt;<br/>
          &nbsp;&nbsp;&lt;AvatarImage src="..." /&gt;<br/>
          &nbsp;&nbsp;&lt;AvatarFallback&gt;CN&lt;/AvatarFallback&gt;<br/>
          &lt;/Avatar&gt;
        </code>
      </div>
    </Card>
  )
}