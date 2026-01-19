import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * [Integra UI - Button SAI Standard]
 * Shape System: Default(Rectangle), Square(Squircle), Circle
 * Radius Sync: Square와 Default는 동일한 곡률(16/12/8)을 공유합니다.
 */
const buttonVariants = cva(
  // [Base] 공통 아토믹 속성
  "inline-flex items-center justify-center whitespace-nowrap font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none active:scale-[0.98] tracking-0 shadow-sm",
  {
    variants: {
      // 1. Variant (Color Hierarchy)
      variant: {
        default: "",
        secondary: "",
        tertiary: "",
      },
      // 2. Appearance (Mode)
      appearance: {
        default: "",      // Solid
        outlined: "bg-transparent shadow-none border",
        destructive: "",
        text: "bg-transparent shadow-none",
      },
      // 3. Size (Base Dimensions)
      size: {
        default: "h-56 fs-18 leading-24", // Large
        medium: "h-48 fs-16 leading-20",  // Medium
        small: "h-32 fs-12 leading-16",   // Small
      },
      // 4. Shape (Form Factor)
      shape: {
        default: "w-auto", // Text Button
        square: "aspect-square p-0", // Icon Button (Squircle)
        circle: "aspect-square p-0 rounded-full", // Icon Button (Circle)
      }
    },
    compoundVariants: [
      // --------------------------------------------------------
      // [COLORS] Appearance + Variant Logic
      // --------------------------------------------------------
      { appearance: "default", variant: "default", className: "bg-primary text-primary-foreground hover:bg-primary-hover disabled:bg-integra-gray-100 disabled:text-integra-gray-300" },
      { appearance: "default", variant: "secondary", className: "bg-primary-subtle text-primary hover:bg-primary-subtle-hover disabled:bg-integra-gray-100 disabled:text-integra-gray-300" },
      { appearance: "default", variant: "tertiary", className: "bg-integra-gray-100 text-integra-gray-700 hover:bg-integra-gray-200 disabled:bg-white disabled:text-integra-gray-300" },

      { appearance: "outlined", variant: "default", className: "border-primary text-primary hover:bg-primary-subtle disabled:border-integra-gray-200 disabled:text-integra-gray-300" },
      { appearance: "outlined", variant: "secondary", className: "border-integra-gray-500 text-primary hover:bg-integra-gray-50 disabled:border-integra-gray-200 disabled:text-integra-gray-300" },
      { appearance: "outlined", variant: "tertiary", className: "border-integra-gray-500 text-integra-gray-500 hover:bg-integra-gray-50 disabled:border-integra-gray-200 disabled:text-integra-gray-300" },

      { appearance: "destructive", variant: "default", className: "bg-destructive text-destructive-foreground hover:bg-destructive-hover disabled:bg-integra-gray-100 disabled:text-integra-gray-300" },
      { appearance: "destructive", variant: "secondary", className: "bg-destructive-subtle text-destructive hover:bg-destructive-subtle-hover disabled:bg-integra-gray-100 disabled:text-integra-gray-300" },

      { appearance: "text", variant: "default", className: "text-primary hover:bg-integra-gray-50 disabled:text-integra-gray-300" },
      { appearance: "text", variant: "secondary", className: "text-integra-gray-700 hover:bg-integra-gray-50 disabled:text-integra-gray-300" },
      { appearance: "text", variant: "tertiary", className: "text-integra-gray-400 hover:bg-integra-gray-50 disabled:text-integra-gray-300" },

      // --------------------------------------------------------
      // [GEOMETRY] Size + Shape Logic
      // --------------------------------------------------------
      
      // 1. Default (Rectangle Text Button)
      { shape: "default", size: "default", className: "px-20 rounded-16" },
      { shape: "default", size: "medium", className: "px-12 rounded-12" },
      { shape: "default", size: "small", className: "px-8 rounded-8" },

      // 2. Square (Squircle Icon Button) - ✨ 곡률 통일 (16/12/8)
      { shape: "square", size: "default", className: "w-56 rounded-16 [&_svg]:w-24 [&_svg]:h-24" },
      { shape: "square", size: "medium", className: "w-48 rounded-12 [&_svg]:w-20 [&_svg]:h-20" },
      { shape: "square", size: "small", className: "w-32 rounded-8 [&_svg]:w-16 [&_svg]:h-16" },

      // 3. Circle (Circular Icon Button)
      { shape: "circle", size: "default", className: "w-56 [&_svg]:w-24 [&_svg]:h-24" },
      { shape: "circle", size: "medium", className: "w-48 [&_svg]:w-20 [&_svg]:h-20" },
      { shape: "circle", size: "small", className: "w-32 [&_svg]:w-16 [&_svg]:h-16" },
    ],
    defaultVariants: {
      variant: "default",
      appearance: "default",
      size: "default",
      shape: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, appearance, size, shape, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ appearance, variant, size, shape, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }