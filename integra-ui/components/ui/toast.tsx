"use client"

import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    // [Base Layout] p-16, max-w-400: SAI 규격 준수
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-16 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-400",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-16 overflow-hidden rounded-12 border p-16 pr-32 shadow-integra transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        // [Default] border-integra-gray-100 및 bg-white 적용
        default: "border-integra-gray-100 bg-white text-integra-gray-900",
        // [Destructive] red-500 배경 및 흰색 글자
        destructive: "destructive group border-integra-red-500 bg-integra-red-500 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      // [Layout] h-32, rounded-8, px-12, fs-12 적용
      "inline-flex h-32 shrink-0 items-center justify-center rounded-8 border bg-transparent px-12 fs-12 font-bold ring-offset-background transition-colors disabled:pointer-events-none disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      // [Colors: Default Context]
      "border-integra-gray-200 text-integra-gray-900 hover:bg-integra-gray-50",
      // [Colors: Destructive Context]
      "group-[.destructive]:border-integra-red-100 group-[.destructive]:hover:border-white group-[.destructive]:hover:bg-white group-[.destructive]:hover:text-integra-red-500 group-[.destructive]:focus:ring-integra-red-400",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      // [Layout] h-24, w-24, rounded-4
      "absolute right-8 top-8 rounded-4 p-4 transition-all outline-none",
      // [Colors] integra-gray-400에서 호버 시 900으로 진해짐
      "text-integra-gray-400 hover:text-integra-gray-900 focus:ring-2 focus:ring-primary",
      // [Destructive Context Colors]
      "group-[.destructive]:text-integra-red-50 group-[.destructive]:hover:text-white group-[.destructive]:focus:ring-white",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-16 w-16" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    // [SAI Typography] fs-14, leading-20 적용
    className={cn("fs-14 font-bold leading-20 tracking--1", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    // [SAI Typography] fs-13, leading-20 적용
    className={cn("fs-13 text-integra-gray-600 leading-20 tracking-0 group-[.destructive]:text-white", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>
type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}