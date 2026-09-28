"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogPortal = DialogPrimitive.Portal
const DialogClose = DialogPrimitive.Close

type DialogOverlayProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>

type DialogContentProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
  showCloseIcon?: boolean
  showSubtext?: boolean
  showBody?: boolean
}

type DialogDescriptionProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description> & {
  visible?: boolean
}

const DialogContentContext = React.createContext<{ showSubtext: boolean }>({ showSubtext: true })

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  DialogOverlayProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    // overlay 배경은 가독성을 위해 overlay 토큰 사용
    className={cn(
      "fixed inset-0 z-50 bg-overlay backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 duration-standard",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>(({ className, children, showCloseIcon = true, showSubtext = true, showBody = true, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      // ✨ 중요: 수치형 토큰(left-50)과 충돌하지 않도록 [50%] 브래킷 문법 사용
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid max-h-[calc(100vh-32px)] w-[calc(100%-32px)] max-w-440 translate-x-[-50%] translate-y-[-50%] gap-16 overflow-y-auto rounded-dialog border border-line bg-surface-raised p-24 text-content-primary shadow-integra duration-emphasized ease-emphasized data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 outline-none",
        !showBody && "[&_[data-dialog-body]]:hidden",
        className
      )}
      {...props}
    >
      <DialogContentContext.Provider value={{ showSubtext }}>
        {children}
      </DialogContentContext.Provider>
      {showCloseIcon && (
        <DialogPrimitive.Close className="absolute right-20 top-20 flex h-40 w-40 items-center justify-center rounded-control text-content-tertiary transition-colors duration-fast hover:bg-surface-subtle hover:text-content-primary focus:outline-none focus:ring-2 focus:ring-line-focus focus:ring-offset-2 focus:ring-offset-surface-raised disabled:pointer-events-none">
          <X className="h-20 w-20" />
          <span className="sr-only">닫기</span>
        </DialogPrimitive.Close>
      )}
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-8 pr-48 text-left", className)} {...props} />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col-reverse gap-8 sm:flex-row sm:justify-end", className)} {...props} />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    // ✨ SAI: fs-20 및 text-integra-gray-900 적용
    className={cn("fs-20 font-bold leading-28 tracking--1 text-content-primary", className)}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  DialogDescriptionProps
>(({ className, visible = true, ...props }, ref) => {
  const { showSubtext } = React.useContext(DialogContentContext)
  if (!visible || !showSubtext) return null

  return (
  <DialogPrimitive.Description
    ref={ref}
    // ✨ SAI: fs-16 및 text-integra-gray-500 적용
    className={cn("fs-15 text-content-secondary leading-24", className)}
    {...props}
  />
  )
})
DialogDescription.displayName = DialogPrimitive.Description.displayName

const DialogBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-dialog-body
    className={cn("py-12 fs-15 leading-24 text-content-secondary", className)}
    {...props}
  />
))
DialogBody.displayName = "DialogBody"

export { 
  Dialog, 
  DialogPortal, 
  DialogOverlay, 
  DialogClose, 
  DialogTrigger, 
  DialogContent, 
  DialogHeader, 
  DialogFooter, 
  DialogTitle, 
  DialogDescription,
  DialogBody
}
