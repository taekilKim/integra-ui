import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * [Integra UI - Button SAI Standard]
 * 1. 수치형 토큰: h-56, fs-18, rounded-16 등 픽셀 기반 클래스 사용
 * 2. 시맨틱 컬러: primary-hover, primary-subtle 등 역할 기반 토큰 사용
 * 3. 어피어런스 확장: Default(Solid), Outlined, Destructive, Text 4가지 모드 제공
 */
const buttonVariants = cva(
  // [Base Styles] 공통 아토믹 속성
  "inline-flex items-center justify-center whitespace-nowrap font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none active:scale-[0.98] tracking-0 shadow-sm",
  {
    variants: {
      // 1. 시각적 위계 (농도 및 타입)
      variant: {
        default: "",   // 1순위 (Primary / Accent)
        secondary: "", // 2순위 (Support)
        tertiary: "",  // 3순위 (Neutral / Gray)
      },
      // 2. 버튼의 성격 (기능적 모드)
      appearance: {
        default: "",      // Default = Solid (채워진 형태)
        outlined: "bg-transparent shadow-none border", // Outlined (외곽선 형태)
        destructive: "",  // Destructive (경고/삭제 형태)
        text: "bg-transparent shadow-none", // Text (배경 없는 형태)
      },
      // 3. 표준 규격 (Size) - 4px/2px 그리드 수치 고정
      size: {
        default: "h-56 px-20 py-16 fs-18 leading-24 rounded-16", 
        medium: "h-48 px-12 py-14 fs-16 leading-20 rounded-12",
        small: "h-32 px-8 py-8 fs-12 leading-16 rounded-8",
      },
    },
    // ✨ [SAI Semantic Mapping] Appearance와 Variant의 조합 정의
    compoundVariants: [
      // --- [Appearance: Default (Solid)] ---
      {
        appearance: "default",
        variant: "default",
        className: "bg-primary text-primary-foreground hover:bg-primary-hover disabled:bg-integra-gray-100 disabled:text-integra-gray-300",
      },
      {
        appearance: "default",
        variant: "secondary",
        className: "bg-primary-subtle text-primary hover:bg-primary-subtle-hover disabled:bg-integra-gray-100 disabled:text-integra-gray-300",
      },
      {
        appearance: "default",
        variant: "tertiary",
        className: "bg-integra-gray-100 text-integra-gray-700 hover:bg-integra-gray-200 disabled:bg-white disabled:text-integra-gray-300",
      },

      // --- [Appearance: Outlined] ---
      {
        appearance: "outlined",
        variant: "default",
        className: "border-primary text-primary hover:bg-primary-subtle disabled:border-integra-gray-200 disabled:text-integra-gray-300",
      },
      {
        appearance: "outlined",
        variant: "secondary",
        className: "border-integra-gray-300 text-primary hover:bg-integra-gray-50 disabled:border-integra-gray-200 disabled:text-integra-gray-300",
      },
      {
        appearance: "outlined",
        variant: "tertiary",
        className: "border-integra-gray-300 text-integra-gray-700 hover:bg-integra-gray-50 disabled:border-integra-gray-200 disabled:text-integra-gray-300",
      },

      // --- [Appearance: Destructive] ---
      {
        appearance: "destructive",
        variant: "default",
        className: "bg-destructive text-destructive-foreground hover:bg-destructive-hover disabled:bg-integra-gray-100 disabled:text-integra-gray-300",
      },
      {
        appearance: "destructive",
        variant: "secondary",
        className: "bg-destructive-subtle text-destructive hover:bg-destructive-subtle-hover disabled:bg-integra-gray-100 disabled:text-integra-gray-300",
      },

      // --- [Appearance: Text] ---
      {
        appearance: "text",
        variant: "default",
        className: "text-primary hover:bg-integra-gray-50 disabled:text-integra-gray-300",
      },
      {
        appearance: "text",
        variant: "secondary",
        className: "text-integra-gray-700 hover:bg-integra-gray-50 disabled:text-integra-gray-300",
      },
      {
        appearance: "text",
        variant: "tertiary",
        className: "text-integra-gray-400 hover:bg-integra-gray-50 disabled:text-integra-gray-300",
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