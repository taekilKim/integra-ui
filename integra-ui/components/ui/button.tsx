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
  "inline-flex items-center justify-center whitespace-nowrap rounded-8 text-14 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 tracking-0 leading-24",
  {
    variants: {
      variant: {
        // Integra Blue 브랜드 컬러와 부드러운 그림자(shadow-integra) 적용
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-integra",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-integra",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        // 실무에서 가장 많이 쓰는 4px 배수 높이(32, 40, 48)로 규격화
        default: "h-40 px-16 py-8", // 40px 높이, 16px 가로 여백
        sm: "h-32 px-12 text-12 leading-20", // 32px 높이, 12px 가로 여백, 12px 폰트
        lg: "h-48 px-32 text-16 leading-24 font-bold", // 48px 높이, 32px 가로 여백, 16px 폰트
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