"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const itemVariants = cva(
  "inline-flex items-center justify-start text-left w-full rounded-8 fs-14 leading-20 font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-transparent text-integra-gray-900 hover:bg-integra-gray-50 data-[state=on]:bg-integra-gray-50",
        ghost: "bg-transparent text-integra-gray-600 hover:bg-integra-gray-50 hover:text-integra-gray-900 data-[state=on]:bg-integra-gray-50 data-[state=on]:text-integra-gray-900",
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