"use client"

import * as React from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { Card } from "@/components/ui/card"
import { Playground } from "@/components/layout/playground"

export function SkeletonDemo() {
  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-960 mx-auto border border-integra-gray-200 shadow-integra rounded-16 bg-white">
      
      {/* 1. 프리뷰 영역: bg-integra-gray-50 및 border-integra-gray-200 적용 */}
      <Playground>
        <div className="flex items-center gap-16 p-24 rounded-12 bg-white border border-integra-gray-100 shadow-sm w-full max-w-400">
          {/* 원형 스켈레톤 (프로필용) */}
          <Skeleton className="h-48 w-48 rounded-full" />
          <div className="space-y-8 flex-1">
            {/* 선형 스켈레톤 (텍스트용) */}
            <Skeleton className="h-16 w-120 rounded-4" />
            <Skeleton className="h-12 w-full rounded-4" />
          </div>
        </div>
      </Playground>

      {/* 2. 코드 영역: bg-integra-gray-900 및 fs-14 적용 */}
      <div className="rounded-8 bg-integra-gray-900 p-20 overflow-x-auto font-mono fs-14 leading-24 text-white">
        <p className="text-integra-gray-500 mb-8">// 스켈레톤 미리보기 예시</p>
        <code className="block">
          &lt;div className="flex items-center gap-16"&gt;<br/>
          &nbsp;&nbsp;&lt;Skeleton className="h-48 w-48 rounded-full" /&gt;<br/>
          &nbsp;&nbsp;&lt;div className="space-y-8"&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;Skeleton className="h-16 w-120" /&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;Skeleton className="h-12 w-full" /&gt;<br/>
          &nbsp;&nbsp;&lt;/div&gt;<br/>
          &lt;/div&gt;
        </code>
      </div>
    </Card>
  )
}
