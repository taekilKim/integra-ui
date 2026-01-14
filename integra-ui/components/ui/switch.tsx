"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { cn } from "@/lib/utils"

/**
 * [Integra UI - Switch SAI Version]
 * 설정을 즉각적으로 전환하는 아토믹 토글 컴포넌트입니다.
 * 44px x 24px 규격과 2px 그리드 기반의 애니메이션을 제공합니다.
 */
const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      // [Base Layout] w-44, h-24: 터치 타겟 최적화 규격
      "peer inline-flex h-24 w-44 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-all",
      
      // [Accessibility] 브랜드 컬러(primary) 링 적용
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      
      // [States] 
      // data-[state=unchecked]: bg-integra-gray-200 (표준 비활성 배경)
      // data-[state=checked]: bg-primary (브랜드 컬러)
      "disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-integra-gray-200",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        // [Thumb Geometry] h-20, w-20: 내부 정렬을 위해 2px 마진 확보
        // [Thumb Styles] bg-white 및 shadow-integra 적용
        "pointer-events-none block h-20 w-20 rounded-full bg-white shadow-integra ring-0 transition-transform",
        
        // [Animation] 2px 그리드 기반 20px 이동 (24-2-2=20)
        "data-[state=checked]:translate-x-20 data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }