import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * [Integra UI - Button Atomic Design]
 * 모든 수치는 tailwind.config.ts에 정의된 4px 그리드 토큰을 사용합니다.
 * text-14: 14px 폰트
 * h-40: 40px 높이
 * rounded-8: 8px 곡률
 */
const buttonVariants = cva(
  // 공통 기본 스타일: 4px 그리드 기반의 정렬과 전역 곡률(8px) 적용
  "inline-flex items-center justify-center whitespace-nowrap text-18 font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 tracking-0",
  {
    variants: {
      variant: {
        // Integra Blue 브랜드 컬러와 부드러운 그림자(shadow-integra) 적용
        default: "bg-primary text-white shadow-integra hover:bg-integra-blue-600",
        destructive:
          "bg-integra-red-500 text-white shadow-sm hover:bg-integra-red-600",
        outline:
          "border border-integra-gray-200 bg-background text-integra-gray-700 hover:bg-integra-gray-50 hover:text-integra-gray-900",
        secondary:
          "bg-integra-gray-100 text-integra-gray-900 hover:bg-integra-gray-200",
        ghost: 
          "text-integra-gray-600 hover:bg-integra-gray-50 hover:text-integra-gray-900",
        link: 
          "text-primary underline-offset-4 hover:underline",
      },
      size: {
        // 실무에서 가장 많이 쓰는 4px 배수 높이(32, 48, 56)로 규격화
        default: "h-56 px-20 py-16 rounded-16 leading-24", // 56px
        sm: "h-32 px-8 py-8 text-12 rounded-8 leading-16", // 32px 높이
        md: "h-48 px-16 py-12 text-16 rounded-12 leading-20", // 48px 높이
        icon: "h-40 w-40", // 40px 정정사각형
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }