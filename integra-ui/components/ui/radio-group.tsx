"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { cn } from "@/lib/utils"

const RadioGroup = RadioGroupPrimitive.Root

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    className={cn(
      "aspect-square h-16 w-16 shrink-0 cursor-pointer rounded-full border ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      "bg-white data-[state=unchecked]:bg-white data-[state=unchecked]:border-integra-gray-200",
      "data-[state=checked]:bg-primary data-[state=checked]:border-primary",
      className
    )}
    {...props}
  >
    <RadioGroupPrimitive.Indicator className="flex items-center justify-center h-full w-full relative">
      {/* 내부 선택 원 (Dot) */}
      <div className="h-8 w-8 rounded-full bg-white shadow-sm" />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Root>
))
RadioGroupItem.displayName = RadioGroupPrimitive.Root.displayName

// ✨ RadioGroupIndicator와 Text 관련 내보내기 구조를 Radix 표준에 맞게 수정합니다.
const RadioGroupIndicator = RadioGroupPrimitive.Indicator

export { RadioGroup, RadioGroupItem, RadioGroupIndicator }