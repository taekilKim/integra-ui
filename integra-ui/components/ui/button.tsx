import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none active:scale-[0.98] tracking-0",
  {
    variants: {
      variant: {
        default: "", secondary: "", tertiary: "",
      },
      appearance: {
        default: "", destructive: "", text: "bg-transparent shadow-none",
      },
      size: {
        default: "h-56 px-20 py-16 fs-18 leading-24 rounded-16", 
        medium: "h-48 px-12 py-14 fs-16 leading-20 rounded-12",
        small: "h-32 px-8 py-8 fs-12 leading-16 rounded-8",
      },
    },
    compoundVariants: [
      // --- [Appearance: Default] ---
      {
        appearance: "default", variant: "default",
        className: "bg-primary text-primary-foreground hover:bg-primary-hover disabled:bg-integra-gray-100 disabled:text-integra-gray-300",
      },
      {
        appearance: "default", variant: "secondary",
        className: "bg-primary-subtle text-primary hover:bg-primary-subtle-hover disabled:bg-integra-gray-100 disabled:text-integra-gray-300",
      },
      {
        appearance: "default", variant: "tertiary",
        className: "bg-integra-gray-100 text-integra-gray-700 hover:bg-integra-gray-200 disabled:bg-white disabled:text-integra-gray-300",
      },
      // --- [Appearance: Destructive] ---
      {
        appearance: "destructive", variant: "default",
        className: "bg-destructive text-destructive-foreground hover:bg-destructive-hover disabled:bg-integra-gray-100 disabled:text-integra-gray-300",
      },
      {
        appearance: "destructive", variant: "secondary",
        className: "bg-destructive-subtle text-destructive hover:bg-destructive-subtle-hover disabled:bg-integra-gray-100 disabled:text-integra-gray-300",
      },
      // --- [Appearance: Text] ---
      {
        appearance: "text", variant: "default",
        className: "text-primary hover:bg-integra-gray-50 disabled:text-integra-gray-300",
      },
      {
        appearance: "text", variant: "secondary",
        className: "text-integra-gray-700 hover:bg-integra-gray-50 disabled:text-integra-gray-300",
      },
      {
        appearance: "text", variant: "tertiary",
        className: "text-integra-gray-400 hover:bg-integra-gray-50 disabled:text-integra-gray-300",
      },
    ],
    defaultVariants: {
      variant: "default", appearance: "default", size: "default",
    },
  }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
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