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

export function ComponentShowcase() {
  const SpecTag = ({ children }: { children: React.ReactNode }) => (
    <span className="fs-10 font-mono font-bold bg-primary/10 text-primary px-4 py-2 rounded-4">
      {children}
    </span>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32">
      
      {/* 1. Button System Showcase */}
      <Card className="lg:col-span-2 border-integra-gray-100 bg-white shadow-sm overflow-hidden group">
        <CardHeader className="p-32 pb-16">
          <div className="flex justify-between items-center">
            <CardTitle className="fs-18 font-bold text-integra-gray-900">Button Architecture</CardTitle>
            <SpecTag>.rounded-16 .h-56</SpecTag>
          </div>
          <CardDescription className="fs-14 text-integra-gray-500">3가지 규격과 3가지 위계의 완벽한 조합</CardDescription>
        </CardHeader>
        <CardContent className="p-32 pt-16 flex flex-wrap gap-16 items-center">
          <Button appearance="default" variant="default" size="default">Primary 56px</Button>
          <Button appearance="default" variant="secondary" size="medium">Secondary 48px</Button>
          <Button appearance="default" variant="tertiary" size="small">Tertiary 32px</Button>
          <Button appearance="destructive" variant="default" size="medium">Destructive</Button>
          <Button appearance="text" variant="default" size="small">Text Accent</Button>
        </CardContent>
      </Card>

      {/* 2. Form & Selection */}
      <Card className="border-integra-gray-100 bg-white shadow-sm">
        <CardHeader className="p-32 pb-16">
          <CardTitle className="fs-18 font-bold text-integra-gray-900">Forms</CardTitle>
        </CardHeader>
        <CardContent className="p-32 pt-16 space-y-24">
          <div className="space-y-8 relative">
            <Label className="fs-12 text-integra-gray-500 flex justify-between">Email <SpecTag>.gap-8</SpecTag></Label>
            <Input placeholder="hello@integra.ui" className="h-40" />
          </div>
          <div className="flex items-center justify-between p-16 rounded-12 bg-integra-gray-50 border border-integra-gray-100">
            <div className="flex items-center gap-8">
              <Checkbox id="terms-show" />
              <Label htmlFor="terms-show" className="fs-14 font-medium">Agreement</Label>
            </div>
            <Switch checked />
          </div>
        </CardContent>
      </Card>

      {/* 3. Advanced Navigation */}
      <Card className="border-integra-gray-100 bg-white shadow-sm">
        <CardHeader className="p-32 pb-16">
          <CardTitle className="fs-18 font-bold text-integra-gray-900">Tabs & Status</CardTitle>
        </CardHeader>
        <CardContent className="p-32 pt-16 space-y-32">
          <Tabs defaultValue="ui" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="ui" className="fs-13">Interface</TabsTrigger>
              <TabsTrigger value="token" className="fs-13">Tokens</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="flex flex-wrap gap-8">
            <Badge variant="default">Stable</Badge>
            <Badge variant="secondary">v1.0</Badge>
            <Badge variant="outline">Atomic</Badge>
          </div>
        </CardContent>
      </Card>

      {/* 4. Information Structure */}
      <Card className="lg:col-span-2 border-integra-gray-100 bg-white shadow-sm">
        <CardHeader className="p-32 pb-16">
          <CardTitle className="fs-18 font-bold text-integra-gray-900">Accordion & Tooltip</CardTitle>
        </CardHeader>
        <CardContent className="p-32 pt-16 grid md:grid-cols-2 gap-32 items-start">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="1" className="border-t-0">
              <AccordionTrigger className="py-12 fs-15">Strict Principle?</AccordionTrigger>
              <AccordionContent className="text-integra-gray-500">
                디자인의 수치가 1:1로 코드가 되는 원칙입니다.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="flex flex-col items-center gap-16 p-24 bg-integra-gray-50 rounded-12 border border-dashed border-integra-gray-200">
             <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button appearance="default" variant="tertiary" size="small" className="bg-white border-integra-gray-200">Hover Tooltip</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p className="fs-12 leading-16">Atomic Tooltip .fs-12</p>
                    </TooltipContent>
                </Tooltip>
             </TooltipProvider>
             <p className="fs-12 text-integra-gray-400">마우스를 올려보세요</p>
          </div>
        </CardContent>
      </Card>

      {/* 5. The Core Vision (Shadcn Dark Style) */}
      <Card className="lg:col-span-3 bg-integra-gray-900 border-0 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50" />
        <CardContent className="p-48 md:p-80 relative z-10 flex flex-col md:flex-row items-center justify-between gap-48">
          <div className="space-y-24 max-w-500">
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
              <p className="fs-10 text-primary font-bold">FIGMA</p>
              <p className="fs-16 text-white font-medium">Gap: 24px</p>
            </div>
            <div className="p-20 rounded-16 bg-primary/10 border border-primary/30 space-y-4">
              <p className="fs-10 text-primary font-bold">CODE</p>
              <p className="fs-16 text-white font-bold">gap-24</p>
            </div>
            <div className="p-20 rounded-16 bg-white/5 border border-white/10 space-y-4">
              <p className="fs-10 text-primary font-bold">FIGMA</p>
              <p className="fs-16 text-white font-medium">Radius: 12px</p>
            </div>
            <div className="p-20 rounded-16 bg-primary/10 border border-primary/30 space-y-4">
              <p className="fs-10 text-primary font-bold">CODE</p>
              <p className="fs-16 text-white font-bold">rounded-12</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}