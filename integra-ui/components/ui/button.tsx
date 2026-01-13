import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  // [공통] Semibold 적용 및 기본 정렬
  "inline-flex items-center justify-center whitespace-nowrap font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none active:scale-[0.98] tracking-0",
  {
    variants: {
      variant: {
        // --- 1. DEFAULT APPEARANCE ---
        default: 
          "bg-primary text-white hover:bg-integra-blue-600 disabled:bg-integra-gray-100 disabled:text-integra-gray-300",
        secondary:
          "bg-integra-blue-50 text-primary hover:bg-integra-blue-100 disabled:bg-integra-gray-100 disabled:text-integra-gray-300",
        tertiary:
          "bg-integra-gray-100 text-integra-gray-700 hover:bg-integra-gray-200 disabled:bg-white disabled:text-integra-gray-300",
        
        // --- 2. DESTRUCTIVE APPEARANCE ---
        destructive:
          "bg-integra-red-500 text-white hover:bg-integra-red-600 disabled:bg-integra-gray-100 disabled:text-integra-gray-300",
        
        // --- 3. TEXT APPEARANCE (Ghost) ---
        text: 
          "bg-transparent text-integra-gray-600 hover:bg-integra-gray-50 disabled:text-integra-gray-300",
      },
      size: {
        // Default: 56px
        default: "h-56 px-20 py-16 text-18 leading-24 rounded-16", 
        // Medium: 48px
        medium: "h-48 px-12 py-14 text-16 leading-20 rounded-12",
        // Small: 32px
        small: "h-32 px-8 py-8 text-12 leading-16 rounded-8",
        // Icon 전용 (정사각형)
        icon: "h-40 w-40 rounded-8",
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
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    return (
      <Comp
        // 폰트 컬러 충돌 방지를 위해 사이즈를 먼저, 베리언트를 나중에 배치
        className={cn(
          buttonVariants({ size }),
          buttonVariants({ variant }),
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }