"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider
const Tooltip = TooltipPrimitive.Root
const TooltipTrigger = TooltipPrimitive.Trigger

/**
 * [Integra UI - Tooltip SAI Version]
 * 마우스 호버나 포커스 시 나타나는 고밀도 정보 오버레이입니다.
 * fs-12(크기)와 leading-16(행간)의 조합으로 정교한 타이포그래피를 구현합니다.
 */
const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    // sideOffset=4: 4px 그리드 간격 유지
    sideOffset={sideOffset}
    className={cn(
      // [Base Layout] z-50, rounded-4, px-12, py-4: 아토믹 수치 적용
      "z-50 overflow-hidden rounded-4 px-12 py-4 shadow-integra",
      
      // [SAI Typography & Colors]
      // fs-12, leading-16: 12px 폰트와 16px 행간의 4px 리듬
      // bg-integra-gray-900: 시스템 다크 토큰 적용
      "fs-12 leading-16 text-white bg-integra-gray-900",
      
      // [Animations] 2px 그리드 기반의 진입 애니메이션
      "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }