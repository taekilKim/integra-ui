import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { CircleNotch } from "@phosphor-icons/react/dist/ssr"

const buttonVariants = cva(
  "relative inline-flex select-none items-center justify-center gap-8 whitespace-nowrap font-semibold transition-[color,background-color,border-color,box-shadow,transform] duration-fast ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-line-focus focus-visible:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none",
  {
    variants: {
      variant: { default: "", secondary: "", tertiary: "" },
      appearance: { default: "shadow-sm", outlined: "border bg-transparent shadow-none", destructive: "", text: "bg-transparent shadow-none" },
      size: { default: "min-h-control-lg px-20 fs-16 leading-24", medium: "min-h-control-md px-16 fs-15 leading-20", small: "min-h-control-sm px-12 fs-14 leading-20" },
      shape: { default: "w-auto rounded-control", square: "aspect-square rounded-control px-0", circle: "aspect-square rounded-full px-0" },
    },
    compoundVariants: [
      { appearance: "default", variant: "default", className: "bg-primary text-primary-foreground hover:bg-primary-hover" },
      { appearance: "default", variant: "secondary", className: "bg-primary-subtle text-primary hover:bg-primary-subtle-hover" },
      { appearance: "default", variant: "tertiary", className: "bg-surface-subtle text-content-primary hover:brightness-[0.97]" },
      { appearance: "outlined", variant: "default", className: "border-primary text-primary hover:bg-primary-subtle" },
      { appearance: "outlined", variant: "secondary", className: "border-line-strong text-primary hover:bg-primary-subtle" },
      { appearance: "outlined", variant: "tertiary", className: "border-line text-content-secondary hover:bg-surface-subtle" },
      { appearance: "text", variant: "default", className: "text-primary hover:bg-primary-subtle" },
      { appearance: "text", variant: "secondary", className: "text-content-secondary hover:bg-surface-subtle" },
      { appearance: "text", variant: "tertiary", className: "text-content-tertiary hover:bg-surface-subtle" },
    ],
    defaultVariants: { variant: "default", appearance: "default", size: "default", shape: "default" },
  }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  loadingLabel?: string
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant, appearance, size, shape, asChild = false, loading = false, loadingLabel = "처리 중", disabled, children, ...props },
  ref,
) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      ref={ref}
      className={buttonVariants({ appearance, variant, size, shape, className })}
      disabled={asChild ? undefined : disabled || loading}
      aria-disabled={disabled || loading || undefined}
      aria-busy={loading || undefined}
      data-loading={loading}
      {...props}
    >
      <span className={loading ? "opacity-0" : undefined}>{children}</span>
      {loading && <span className="absolute inset-0 flex items-center justify-center"><CircleNotch className="h-20 w-20 animate-spin" aria-hidden="true" /><span className="sr-only">{loadingLabel}</span></span>}
    </Comp>
  )
})

export { buttonVariants }
