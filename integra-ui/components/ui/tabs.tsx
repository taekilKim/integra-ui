"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

/**
 * TabsList: 탭 버튼들을 감싸는 배경 영역
 */
const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      // [Base Layout] h-40, rounded-8, p-4: 4px 그리드 준수
      // [Colors] bg-integra-gray-100 및 보조 텍스트 색상 적용
      "inline-flex h-40 items-center justify-center rounded-8 bg-integra-gray-100 p-4 text-integra-gray-500",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

/**
 * TabsTrigger: 개별 탭 버튼
 */
const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      // [Typography] fs-14 적용
      // [Layout] rounded-4, px-12, py-4
      "inline-flex items-center justify-center whitespace-nowrap rounded-4 px-12 py-4 fs-14 font-medium ring-offset-background transition-all",
      
      // [Focus State] 브랜드 컬러 링 적용
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
      
      // [Disabled State]
      "disabled:pointer-events-none disabled:opacity-50",
      
      // [Active State] 활성화 시 흰색 배경과 진한 글자색(gray-900)
      "data-[state=active]:bg-white data-[state=active]:text-integra-gray-900 data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

/**
 * TabsContent: 선택된 탭의 내용을 보여주는 영역
 */
const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      // [Layout] mt-8: 4px 그리드 간격
      "mt-8 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }