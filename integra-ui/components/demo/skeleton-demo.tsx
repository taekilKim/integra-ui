"use client"

import { Skeleton } from "@/components/ui/skeleton"
import { Card } from "@/components/ui/card"

export function SkeletonDemo() {
  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-800 mx-auto border border-slate-200 shadow-integra rounded-16">
      <div className="flex items-center space-x-16 p-24 rounded-12 bg-white border border-slate-100 shadow-sm">
        {/* 원형 스켈레톤 (프로필용) */}
        <Skeleton className="h-48 w-48 rounded-full" />
        <div className="space-y-8 flex-1">
          {/* 선형 스켈레톤 (텍스트용) */}
          <Skeleton className="h-16 w-120" />
          <Skeleton className="h-12 w-full" />
        </div>
      </div>
      <div className="rounded-8 bg-slate-950 p-20 overflow-x-auto font-mono text-14 leading-24 text-white">
        &lt;Skeleton className="h-48 w-48 rounded-full" /&gt;
      </div>
    </Card>
  )
}