"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

/**
 * [Integra UI - Textarea SAI Version]
 * 여러 줄의 텍스트 입력을 위한 아토믹 컴포넌트입니다.
 * Input 시스템과 동일한 원자적 디자인 언어(8px 곡률, 14px 폰트)를 공유합니다.
 */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          // [Base Layout] min-h-80, rounded-8, px-12, py-8: 4px 그리드 준수
          "flex min-h-80 w-full rounded-8 border px-12 py-8 transition-all tracking-0 leading-24",
          
          // [SAI Typography & Colors] fs-14 적용 및 전용 컬러 토큰
          "fs-14 border-integra-gray-200 bg-white text-integra-gray-900 ring-offset-background",
          
          // [Placeholder] 전용 그레이 토큰 적용
          "placeholder:text-integra-gray-400",
          
          // [States] focus 시 브랜드 컬러(primary) 링 적용
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          
          // [Disabled] 비활성 시 배경색 gray-50 및 텍스트 gray-400 적용
          "disabled:cursor-not-allowed disabled:bg-integra-gray-50 disabled:text-integra-gray-400 disabled:opacity-100",
          
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }