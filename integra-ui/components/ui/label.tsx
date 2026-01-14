"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * [Integra UI - Label SAI Version]
 * 입력 요소의 설명을 위한 아토믹 텍스트 컴포넌트입니다.
 * fs-14 크기와 Medium(500) 굵기를 기본으로 정의합니다.
 */
const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      // [Typography] SAI 원칙: fs- 접두사 및 전용 컬러 토큰 적용
      "fs-14 font-medium leading-20 tracking-0 text-integra-gray-900",
      
      // [States] 인접한 폼 요소(peer)가 비활성화될 때의 상태 동기화
      // opacity-70 대신 명확한 gray-400 토큰으로 가독성 제어
      "peer-disabled:cursor-not-allowed peer-disabled:text-integra-gray-400 transition-colors",
      
      className
    )}
    {...props}
  />
))
Label.displayName = "Label"

export { Label }