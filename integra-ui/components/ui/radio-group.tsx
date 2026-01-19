"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "@phosphor-icons/react" // ✨ Lucide -> Phosphor 교체
import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-8", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        // [Container] 16px 정원형, 회색 테두리
        "aspect-square h-16 w-16 rounded-full border border-integra-gray-300 text-primary ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        // [State] 체크 시 테두리와 텍스트 색상을 Primary로 변경
        "data-[state=checked]:border-primary data-[state=checked]:text-primary",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        {/* 
           ✨ [Icon Change]
           1. Phosphor Icon 사용
           2. weight="fill"로 완전한 원형 구현
           3. h-8 w-8 (8px)로 크기 조정하여 테두리와의 간격 확보
        */}
        <Circle weight="fill" className="h-8 w-8 text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }