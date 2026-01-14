"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * [Integra UI - Checkbox SAI Version]
 * 16px 정정사각형 크기와 4px 곡률을 가진 아토믹 컴포넌트입니다.
 * 비활성/활성 상태의 색상을 전용 토큰으로 제어합니다.
 */
const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      // [Base] h-16, w-16, rounded-4: 4px 그리드 규격 준수
      // border-integra-gray-300: 미선택 시 경계선 색상 정화
      "peer h-16 w-16 shrink-0 rounded-4 border border-integra-gray-300 ring-offset-background transition-all",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
      // [State: Checked] 선택 시 브랜드 컬러(Primary) 적용
      "data-[state=checked]:bg-primary data-[state=checked]:border-primary data-[state=checked]:text-white",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      {/* 아이콘 크기 12px (2px 스케일) */}
      <Check className="h-12 w-12 stroke-[3px]" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }