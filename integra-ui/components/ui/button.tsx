import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  // [공통 스타일] Semibold, 아토믹 정렬, 클릭 피드백
  "inline-flex items-center justify-center whitespace-nowrap font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none active:scale-[0.98] tracking-0",
  {
    variants: {
      // 1. 시각적 위계 (농도 및 타입)
      variant: {
        default: "",   // Primary / Accent 역할을 수행
        secondary: "", // 보조 역할을 수행
        tertiary: "",  // 3순위 혹은 Gray 기반의 기본 역할을 수행
      },
      // 2. 버튼의 성격 (기능적 모드)
      appearance: {
        default: "",      // 브랜드 컬러 기반 (Blue)
        destructive: "",  // 경고/삭제 기반 (Red)
        text: "bg-transparent shadow-none", // 배경 없는 텍스트 기반
      },
      // 3. 표준 규격 (Size) - 4px 그리드 수치 기반
      size: {
        // height 56px / font 18px / leading 24px / radius 16px / padding-v 16px
        default: "h-56 px-20 py-16 fs-18 leading-24 rounded-16", 
        // height 48px / font 16px / leading 20px / radius 12px / padding-v 14px
        medium: "h-48 px-12 py-14 fs-16 leading-20 rounded-12",
        // height 32px / font 12px / leading 16px / radius 8px / padding-v 8px
        small: "h-32 px-8 py-8 fs-12 leading-16 rounded-8",
      },
    },
    // ✨ 핵심: Appearance와 Variant의 조합 결과 정의
    compoundVariants: [
      // --- [Appearance: Default (Integra Blue)] ---
      {
        appearance: "default",
        variant: "default",
        className: "bg-primary text-white hover:bg-integra-blue-600 disabled:bg-integra-gray-100 disabled:text-integra-gray-300",
      },
      {
        appearance: "default",
        variant: "secondary",
        className: "bg-integra-blue-50 text-primary hover:bg-integra-blue-100 disabled:bg-integra-gray-100 disabled:text-integra-gray-300",
      },
      {
        appearance: "default",
        variant: "tertiary",
        className: "bg-integra-gray-100 text-integra-gray-700 hover:bg-integra-gray-200 disabled:bg-white disabled:text-integra-gray-300",
      },

      // --- [Appearance: Destructive (Integra Red)] ---
      {
        appearance: "destructive",
        variant: "default",
        className: "bg-integra-red-500 text-white hover:bg-integra-red-600 disabled:bg-integra-gray-100 disabled:text-integra-gray-300",
      },
      {
        appearance: "destructive",
        variant: "secondary",
        className: "bg-integra-red-50 text-integra-red-500 hover:bg-integra-red-100 disabled:bg-integra-gray-100 disabled:text-integra-gray-300",
      },

      // --- [Appearance: Text (Transparent)] ---
      // Accent 스타일 (Variant Default로 대응)
      {
        appearance: "text",
        variant: "default",
        className: "bg-transparent text-primary hover:bg-integra-gray-50 disabled:text-integra-gray-300",
      },
      // Default 스타일 (Variant Secondary/Tertiary로 대응)
      {
        appearance: "text",
        variant: "secondary",
        className: "bg-transparent text-integra-gray-700 hover:bg-integra-gray-50 disabled:text-integra-gray-300",
      },
      {
        appearance: "text",
        variant: "tertiary",
        className: "bg-transparent text-integra-gray-400 hover:bg-integra-gray-50 disabled:text-integra-gray-300",
      },
    ],
    defaultVariants: {
      variant: "default",
      appearance: "default",
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
  ({ className, variant, appearance, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ appearance, variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }