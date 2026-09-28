import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { CircleNotch } from "@phosphor-icons/react/dist/ssr"
import { cn } from "@/lib/utils"

/**
 * [Integra UI - Button SAI Standard]
 * Shape System: Default(Rectangle), Square(Squircle), Circle
 * Radius Sync: Square와 Default는 동일한 곡률(16/12/8)을 공유합니다.
 */
const buttonVariants = cva(
  "relative inline-flex select-none items-center justify-center gap-8 whitespace-nowrap font-semibold tracking-0 transition-[color,background-color,border-color,box-shadow,transform] duration-fast ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-line-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface-canvas active:scale-[0.98] disabled:pointer-events-none disabled:shadow-none data-[loading=true]:cursor-wait",
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
        default: "shadow-sm",      // Solid
        outlined: "border bg-transparent shadow-none",
        destructive: "",
        text: "bg-transparent shadow-none",
      },
      // 3. Size (Base Dimensions)
      size: {
        default: "min-h-control-lg px-20 fs-16 leading-24",
        medium: "min-h-control-md px-16 fs-15 leading-20",
        small: "min-h-control-sm px-12 fs-14 leading-20",
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
      { appearance: "default", variant: "tertiary", className: "bg-surface-subtle text-content-primary hover:brightness-[0.97] disabled:bg-surface-subtle disabled:text-content-tertiary" },

      { appearance: "outlined", variant: "default", className: "border-primary text-primary hover:bg-primary-subtle disabled:border-integra-gray-200 disabled:text-integra-gray-300" },
      { appearance: "outlined", variant: "secondary", className: "border-line-strong text-primary hover:bg-primary-subtle disabled:border-line disabled:text-content-tertiary" },
      { appearance: "outlined", variant: "tertiary", className: "border-line text-content-secondary hover:bg-surface-subtle disabled:text-content-tertiary" },

      { appearance: "destructive", variant: "default", className: "bg-destructive text-destructive-foreground hover:bg-destructive-hover disabled:bg-integra-gray-100 disabled:text-integra-gray-300" },
      { appearance: "destructive", variant: "secondary", className: "bg-destructive-subtle text-destructive hover:bg-destructive-subtle-hover disabled:bg-integra-gray-100 disabled:text-integra-gray-300" },

      { appearance: "text", variant: "default", className: "text-primary hover:bg-primary-subtle disabled:text-content-tertiary" },
      { appearance: "text", variant: "secondary", className: "text-content-secondary hover:bg-surface-subtle disabled:text-content-tertiary" },
      { appearance: "text", variant: "tertiary", className: "text-content-tertiary hover:bg-surface-subtle disabled:text-content-tertiary" },

      // --------------------------------------------------------
      // [GEOMETRY] Size + Shape Logic
      // --------------------------------------------------------
      
      // 1. Default (Rectangle Text Button)
      { shape: "default", size: "default", className: "rounded-control" },
      { shape: "default", size: "medium", className: "rounded-control" },
      { shape: "default", size: "small", className: "rounded-10" },

      // 2. Square (Squircle Icon Button) - ✨ 곡률 통일 (16/12/8)
      { shape: "square", size: "default", className: "aspect-square px-0 rounded-control [&_svg]:w-22 [&_svg]:h-22" },
      { shape: "square", size: "medium", className: "aspect-square px-0 rounded-control [&_svg]:w-20 [&_svg]:h-20" },
      { shape: "square", size: "small", className: "aspect-square px-0 rounded-10 [&_svg]:w-18 [&_svg]:h-18" },

      // 3. Circle (Circular Icon Button)
      { shape: "circle", size: "default", className: "aspect-square px-0 [&_svg]:w-22 [&_svg]:h-22" },
      { shape: "circle", size: "medium", className: "aspect-square px-0 [&_svg]:w-20 [&_svg]:h-20" },
      { shape: "circle", size: "small", className: "aspect-square px-0 [&_svg]:w-18 [&_svg]:h-18" },
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
  loading?: boolean
  loadingLabel?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, appearance, size, shape, asChild = false, loading = false, loadingLabel = "처리 중", disabled, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ appearance, variant, size, shape, className }))}
        ref={ref}
        disabled={asChild ? undefined : disabled || loading}
        aria-disabled={disabled || loading || undefined}
        aria-busy={loading || undefined}
        data-loading={loading}
        {...props}
      >
        <span className={cn("inline-flex items-center justify-center gap-8", loading && "opacity-0")}>
          {children}
        </span>
        {loading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <CircleNotch className="h-20 w-20 animate-spin" weight="bold" aria-hidden="true" />
            <span className="sr-only">{loadingLabel}</span>
          </span>
        )}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
