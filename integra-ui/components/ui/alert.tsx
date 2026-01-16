"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const alertVariants = cva(
  // [Base] SAI 원칙: fs-14, rounded-12, p-16 등 아토믹 토큰 적용
  "relative w-full rounded-12 border p-16 [&>svg~*]:pl-24 [&>svg]:absolute [&>svg]:left-16 [&>svg]:top-16 [&>svg]:h-16 [&>svg]:w-16",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground", // 기본 (테두리만)
        destructive: "border-integra-red-100 bg-integra-red-50 text-integra-red-700 [&>svg]:text-integra-red-500",
        warning: "border-integra-orange-100 bg-integra-orange-50 text-integra-orange-700 [&>svg]:text-integra-orange-500",
        success: "border-integra-green-100 bg-integra-green-50 text-integra-green-700 [&>svg]:text-integra-green-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-4 font-bold leading-20 tracking--1 fs-15", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("fs-14 text-current/80", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }