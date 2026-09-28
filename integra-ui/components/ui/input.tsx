import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, invalid = false, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex min-h-control-md w-full rounded-control border border-line bg-surface-raised px-control-x py-control-y fs-15 leading-20 tracking-0 text-content-primary transition-[border-color,box-shadow,background-color] duration-fast ease-standard",
          "file:border-0 file:bg-transparent file:fs-14 file:font-medium file:text-content-primary",
          "placeholder:text-content-tertiary",
          "hover:border-line-strong focus-visible:border-line-focus focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-line-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface-canvas",
          "aria-[invalid=true]:border-feedback-negative aria-[invalid=true]:ring-1 aria-[invalid=true]:ring-feedback-negative",
          "disabled:cursor-not-allowed disabled:bg-surface-subtle disabled:text-content-tertiary disabled:opacity-100",
          className
        )}
        ref={ref}
        aria-invalid={invalid || undefined}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
