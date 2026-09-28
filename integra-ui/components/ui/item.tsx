"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const itemVariants = cva(
  "inline-flex items-center justify-start text-left w-full rounded-control fs-14 leading-20 font-medium transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-line-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface-canvas disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-transparent text-content-primary hover:bg-surface-subtle data-[state=on]:bg-primary-subtle data-[state=on]:text-primary-subtle-foreground",
        ghost: "bg-transparent text-content-secondary hover:bg-surface-subtle hover:text-content-primary data-[state=on]:bg-surface-subtle data-[state=on]:text-content-primary",
      },
      size: {
        default: "h-40 px-12",
        sm: "h-32 px-8 fs-13",
        // ✨ 신규: Dropdown Menu 전용 사이즈
        menu: "h-32 px-8 fs-14 rounded-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof itemVariants> {
  asChild?: boolean
}

const Item = React.forwardRef<HTMLButtonElement, ItemProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(itemVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Item.displayName = "Item"

export { Item, itemVariants }
