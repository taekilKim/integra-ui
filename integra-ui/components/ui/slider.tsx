"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "@/lib/utils"

/**
 * [Integra UI - Slider SAI Version]
 * 연속적이거나 불연속적인 값 범위를 시각적으로 조절하는 컴포-넌트입니다.
 */
const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      // [Base] 트랙의 기본 레이아웃 및 스타일
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-4 w-full grow overflow-hidden rounded-full bg-integra-gray-100">
      {/* 선택된 범위 (Range) 스타일: primary 배경색 */}
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    {/* 핸들(Thumb) 스타일: 흰색 배경, 그림자, 포커스 링 */}
    <SliderPrimitive.Thumb className="block h-16 w-16 rounded-full border-2 border-primary bg-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }