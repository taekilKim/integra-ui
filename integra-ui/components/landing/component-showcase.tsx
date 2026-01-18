"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
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
import { MoreHorizontal, Mail, Lock } from "lucide-react"

export function ComponentShowcase() {
  const [switchState, setSwitchState] = React.useState(true);

  const SpecTag = ({ children }: { children: React.ReactNode }) => (
    <span className="fs-10 font-mono font-bold bg-primary/10 text-primary px-6 py-2 rounded-4 tracking-0">
      {children}
    </span>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-32">
      
      {/* 1. Module: User Profile */}
      <Card className="lg:col-span-2 border-integra-gray-100 bg-white shadow-sm p-32 space-y-24 flex flex-col justify-between">
        <div className="flex justify-between items-start">
            <div className="flex items-center gap-16">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="space-y-4">
                <p className="fs-16 font-bold text-integra-gray-900">Shadcn</p>
                <p className="fs-13 text-integra-gray-500">Lead Designer @ Vercel</p>
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                {/* ✨ size="icon" 대신 size="small" + w-32 h-32 p-0 사용 */}
                <Button appearance="text" variant="secondary" size="small" className="w-32 h-32 p-0">
                  <MoreHorizontal className="w-16 h-16" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex -space-x-12">
            <Avatar className="w-32 h-32 border-2 border-white"><AvatarImage src="https://github.com/vercel.png" /><AvatarFallback>V</AvatarFallback></Avatar>
            <Avatar className="w-32 h-32 border-2 border-white"><AvatarImage src="https://github.com/nextjs.png" /><AvatarFallback>N</AvatarFallback></Avatar>
            <Avatar className="w-32 h-32 border-2 border-white"><AvatarFallback>+3</AvatarFallback></Avatar>
          </div>
          <Button appearance="default" variant="default" size="medium">Follow</Button>
        </div>
      </Card>

      {/* 2. Module: Form & Controls */}
      <Card className="lg:col-span-2 border-integra-gray-100 bg-white shadow-sm">
        <CardHeader className="p-32 pb-16">
          <div className="flex justify-between items-center">
             <CardTitle className="fs-18 font-bold">Form Controls</CardTitle>
             <SpecTag>.gap-24</SpecTag>
          </div>
        </CardHeader>
        <CardContent className="p-32 pt-16 space-y-24">
          <div className="space-y-8">
            <Label className="fs-12 text-integra-gray-500">Project Name</Label>
            <Input placeholder="Integra UI" className="h-40" disabled={!switchState} />
          </div>
          <div className="flex items-center justify-between p-16 rounded-12 bg-integra-gray-50 border border-integra-gray-100">
            <Label htmlFor="input-toggle" className="fs-14 font-medium">Enable Input</Label>
            <Switch id="input-toggle" checked={switchState} onCheckedChange={setSwitchState} />
          </div>
        </CardContent>
      </Card>

      {/* 3. Module: Data Table */}
      <Card className="lg:col-span-3 border-integra-gray-100 bg-white shadow-sm">
        <CardHeader className="p-32 pb-16">
          <CardTitle className="fs-18 font-bold">Data Management</CardTitle>
        </CardHeader>
        <CardContent className="p-32 pt-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead><TableHead>Status</TableHead><TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV-001</TableCell>
                <TableCell><Badge variant="default" className="bg-integra-green-500 hover:bg-integra-green-600">Paid</Badge></TableCell>
                <TableCell className="text-right font-mono">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV-002</TableCell>
                <TableCell><Badge variant="secondary" className="bg-integra-orange-100 text-integra-orange-700">Pending</Badge></TableCell>
                <TableCell className="text-right font-mono">$150.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      {/* 4. Module: Settings Panel */}
      <Card className="lg:col-span-1 border-integra-gray-100 bg-white shadow-sm">
        <CardHeader className="p-32 pb-16">
          <CardTitle className="fs-18 font-bold text-integra-gray-900">Preferences</CardTitle>
        </CardHeader>
        <CardContent className="p-32 pt-16 space-y-32">
          <div className="space-y-12">
            <Label className="fs-12 text-integra-gray-500">View Mode</Label>
            <RadioGroup defaultValue="compact" className="flex gap-16">
              <div className="flex items-center gap-8"><RadioGroupItem value="compact" id="r1" /><Label htmlFor="r1" className="fs-14">Compact</Label></div>
              <div className="flex items-center gap-8"><RadioGroupItem value="comfortable" id="r2" /><Label htmlFor="r2" className="fs-14">Wide</Label></div>
            </RadioGroup>
          </div>
          <Tabs defaultValue="ui" className="w-full">
            <TabsList className="grid w-full grid-cols-2 h-40">
              <TabsTrigger value="ui" className="fs-13">Interface</TabsTrigger>
              <TabsTrigger value="token" className="fs-13">Tokens</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardContent>
      </Card>

      {/* 5. The Core Vision (Shadcn Dark Style) */}
      <Card className="lg:col-span-4 bg-integra-gray-900 border-0 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50" />
        <CardContent className="p-48 md:p-80 relative z-10 flex flex-col md:flex-row items-center justify-between gap-48">
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