import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  // [공통] SAI 원칙: fs- 접두사, 4px/2px 그리드 패딩, rounded-full 적용
  "inline-flex items-center rounded-full border px-8 py-2 fs-12 font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 tracking-0 leading-16",
  {
    variants: {
      variant: {
        // Default: Blue 500 배경 + 흰색 글자
        default:
          "border-transparent bg-primary text-white hover:bg-integra-blue-600",
        // Secondary: Blue 50 배경 + Blue 500 글자 (시스템 일관성)
        secondary:
          "border-transparent bg-integra-blue-50 text-primary hover:bg-integra-blue-100",
        // Destructive: Red 500 배경 + 흰색 글자
        destructive:
          "border-transparent bg-integra-red-500 text-white hover:bg-integra-red-600",
        // Outline: Gray 200 테두리 + Gray 700 글자
        outline: 
          "text-integra-gray-700 border-integra-gray-200 bg-transparent hover:bg-integra-gray-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

/**
 * [Integra UI - Badge SAI Version]
 * 함수 선언부 export를 통해 정적 분석 에러를 방지합니다.
 */
export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { badgeVariants }