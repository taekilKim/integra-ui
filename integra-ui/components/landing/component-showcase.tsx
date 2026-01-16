"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Skeleton } from "@/components/ui/skeleton"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreHorizontal } from "lucide-react"

export function ComponentShowcase() {
  const [switchState, setSwitchState] = React.useState(true);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-32">
      
      {/* 1. Module: User Profile (Avatar, Dropdown, Button) */}
      

      {/* ✨ 5. Module: Core Vision (사용자 요청 버전 복구) ✨ */}
      <Card className="lg:col-span-2 bg-integra-gray-900 border-0 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50" />
        <CardContent className="p-48 md:p-64 relative z-10 flex flex-col md:flex-row items-center justify-between gap-48 h-full">
          <div className="space-y-24 max-w-500 text-left">
            <h3 className="fs-32 md:fs-40 font-bold leading-40 md:leading-48 text-white tracking--3">
              디자이너의 수치를 <br />
              <span className="text-primary">단 1px도 잃어버리지 마세요</span>
            </h3>
            <p className="fs-18 text-integra-gray-400 leading-28">
              우리는 추상적인 '단어'가 아닌 정교한 '수치'로 대화합니다.<br />
              피그마에서 결정한 Spacing, Radius, Typography가 <br />
              코드의 클래스명과 완벽하게 일치합니다.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-16 w-full max-w-400 font-mono">
            <div className="p-20 rounded-16 bg-white/5 border border-white/10 space-y-4">
              <p className="fs-10 text-primary font-bold uppercase tracking-2">FIGMA</p>
              <p className="fs-16 text-white font-medium italic">Gap: 24px</p>
            </div>
            <div className="p-20 rounded-16 bg-primary/10 border border-primary/30 space-y-4 shadow-lg shadow-primary/20">
              <p className="fs-10 text-primary font-bold uppercase tracking-2">CODE</p>
              <p className="fs-16 text-white font-bold">gap-24</p>
            </div>
            <div className="p-20 rounded-16 bg-white/5 border border-white/10 space-y-4">
              <p className="fs-10 text-primary font-bold uppercase tracking-2">FIGMA</p>
              <p className="fs-16 text-white font-medium italic">Radius: 12px</p>
            </div>
            <div className="p-20 rounded-16 bg-primary/10 border border-primary/30 space-y-4 shadow-lg shadow-primary/20">
              <p className="fs-10 text-primary font-bold uppercase tracking-2">CODE</p>
              <p className="fs-16 text-white font-bold">rounded-12</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}