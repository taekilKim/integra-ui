import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonGroupVariants = cva("flex items-center gap-8", {
  variants: {
    layout: {
      "single-fill": "w-full [&>*]:w-full",
      "double-fit": "w-full justify-end [&>*]:w-auto",
      "double-fill-5-5": "w-full [&>*]:flex-1",
      "double-fill-3-7":
        "w-full [&>*:first-child]:flex-[3_1_0%] [&>*:last-child]:flex-[7_1_0%]",
    },
  },
  defaultVariants: {
    layout: "double-fit",
  },
})

export interface ButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonGroupVariants> {}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, layout, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(buttonGroupVariants({ layout }), className)}
      {...props}
    />
  )
)
ButtonGroup.displayName = "ButtonGroup"

export { ButtonGroup, buttonGroupVariants }
