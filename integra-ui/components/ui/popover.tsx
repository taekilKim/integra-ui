"use client"

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import { cn } from "@/lib/utils"

/**
 * [Integra UI - Popover SAI Version]
 * 특정 요소에 인접하여 부가 정보를 제공하는 플로팅 레이어 컴포넌트입니다.
 * w-280(너비), p-16(패딩), rounded-12(곡률) 등 원자 단위 수치를 엄격히 준수합니다.
 */
const Popover = PopoverPrimitive.Root
const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        // [Base Layout] w-280, rounded-12, p-16: 아토믹 수치 적용
        // [Colors] border-integra-gray-100 및 bg-white 적용
        "z-50 w-280 rounded-12 border border-integra-gray-100 bg-white p-16 shadow-integra outline-none",
        
        // [Animations] 2px 그리드 기반의 부드러운 진입 효과
        "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        
        // [Offsets] 방향별 슬라이드 애니메이션 수치 정화 (2px scale 적용)
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent }