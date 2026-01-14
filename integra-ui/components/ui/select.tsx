"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root
const SelectGroup = SelectPrimitive.Group
const SelectValue = SelectPrimitive.Value

/**
 * SelectTrigger: 사용자가 클릭하여 메뉴를 여는 버튼 영역
 */
const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      // [Base Layout] h-40, rounded-8, px-12, py-8: 4px 그리드 준수
      "flex h-40 w-full items-center justify-between rounded-8 border px-12 py-8 transition-all",
      
      // [SAI Typography & Colors] fs-14 적용 및 전용 컬러 토큰
      "fs-14 border-integra-gray-200 bg-white text-integra-gray-900 ring-offset-background",
      
      // [Placeholder & Icons]
      "placeholder:text-integra-gray-400",
      
      // [States] focus 시 브랜드 컬러(primary) 링 적용
      "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
      "disabled:cursor-not-allowed disabled:bg-integra-gray-50 disabled:text-integra-gray-400",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      {/* 아이콘 크기 16px (2px 스케일) */}
      <ChevronDown className="h-16 w-16 text-integra-gray-400" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

/**
 * SelectContent: 드롭다운 메뉴 레이어
 */
const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        // [Base Layout] rounded-8, border-integra-gray-100, shadow-integra
        "relative z-50 max-h-96 min-w-128 overflow-hidden rounded-8 border border-integra-gray-100 bg-white text-integra-gray-900 shadow-integra",
        
        // [Animations] 4px 단위 translate 애니메이션 적용
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        position === "popper" &&
          "data-[side=bottom]:translate-y-4 data-[side=left]:-translate-x-4 data-[side=right]:translate-x-4 data-[side=top]:-translate-y-4",
        className
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cn(
          "p-4",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

/**
 * SelectItem: 메뉴 내 개별 선택 아이템
 */
const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      // [Layout] rounded-4, py-8, pl-32, pr-8
      "relative flex w-full cursor-default select-none items-center rounded-4 py-8 pl-32 pr-8 transition-colors outline-none",
      
      // [Typography & Colors] fs-14 적용
      // focus:bg-integra-gray-50: SAI 표준 호버 상태 적용
      "fs-14 text-integra-gray-700 focus:bg-integra-gray-50 focus:text-integra-gray-900",
      
      // [States]
      "data-[disabled]:pointer-events-none data-[disabled]:text-integra-gray-300",
      className
    )}
    {...props}
  >
    {/* 선택 표시 아이콘 영역 */}
    <span className="absolute left-8 flex h-16 w-16 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-16 w-16 text-primary" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

export { Select, SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectItem }