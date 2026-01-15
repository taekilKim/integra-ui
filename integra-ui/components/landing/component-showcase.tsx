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

export function ComponentShowcase() {
  // ✨ 인터랙션을 위한 상태 관리
  const [isEmailEnabled, setIsEmailEnabled] = React.useState(true);
  const [isTermsAgreed, setIsTermsAgreed] = React.useState(false);

  const SpecTag = ({ children }: { children: React.ReactNode }) => (
    <span className="fs-10 font-mono font-bold bg-primary/10 text-primary px-6 py-2 rounded-4 tracking-0">
      {children}
    </span>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32">
      
      {/* 1. Button Architecture (Large) */}
      <Card className="lg:col-span-2 border-integra-gray-100 bg-white shadow-sm overflow-hidden">
        <CardHeader className="p-32 pb-16">
          <div className="flex justify-between items-start">
            <div className="space-y-4">
              <CardTitle className="fs-18 font-bold text-integra-gray-900">Button Architecture</CardTitle>
              <CardDescription className="fs-14 text-integra-gray-500">4가지 어피어런스와 3가지 표준 규격</CardDescription>
            </div>
            <SpecTag>.fs-18 .rounded-16</SpecTag>
          </div>
        </CardHeader>
        <CardContent className="p-32 pt-16 flex flex-wrap gap-12 items-center">
          <Button appearance="default" variant="default" size="default">Primary 56px</Button>
          <Button appearance="outlined" variant="default" size="medium">Outlined 48px</Button>
          <Button appearance="destructive" variant="secondary" size="small">Destructive 32px</Button>
          <Button appearance="text" variant="tertiary" size="small">Text Tertiary</Button>
        </CardContent>
      </Card>

      {/* 2. Feedback & Animation */}
      <Card className="border-integra-gray-100 bg-white shadow-sm">
        <CardHeader className="p-32 pb-16">
          <CardTitle className="fs-18 font-bold text-integra-gray-900">Feedback Loop</CardTitle>
        </CardHeader>
        <CardContent className="p-32 pt-16 space-y-24">
          <div className="flex items-center gap-16">
            <Skeleton className="h-48 w-48 rounded-full" />
            <div className="space-y-8 flex-1">
              <Skeleton className="h-16 w-80 rounded-4" />
              <Skeleton className="h-12 w-full rounded-4" />
            </div>
          </div>
          <div className="flex gap-8">
            <Badge variant="default" className="fs-12">SAI v1.0</Badge>
            <Badge variant="outline" className="fs-12">2px Scale</Badge>
          </div>
        </CardContent>
      </Card>

      {/* 3. Form Controls (Interactive) */}
      <Card className="border-integra-gray-100 bg-white shadow-sm">
        <CardHeader className="p-32 pb-16">
          <CardTitle className="fs-18 font-bold text-integra-gray-900">Form Controls</CardTitle>
        </CardHeader>
        <CardContent className="p-32 pt-16 space-y-24">
          <div className="space-y-8">
            <Label className="fs-12 text-integra-gray-500">Email Address</Label>
            <Input placeholder="hello@integra.ui" className="h-40" disabled={!isEmailEnabled} />
          </div>
          <div className="flex items-center justify-between p-16 rounded-12 bg-integra-gray-50 border border-integra-gray-100">
            <Label htmlFor="email-toggle" className="fs-14 font-medium">Enable Input</Label>
            <Switch id="email-toggle" checked={isEmailEnabled} onCheckedChange={setIsEmailEnabled} />
          </div>
          <div className="flex items-center gap-8 px-4">
            <Checkbox id="terms-agree" checked={isTermsAgreed} onCheckedChange={(val) => setIsTermsAgreed(!!val)} />
            <Label htmlFor="terms-agree" className="fs-13 text-integra-gray-600">Agree to atomic rules</Label>
          </div>
        </CardContent>
      </Card>

      {/* 4. Overlays & Selection */}
      <Card className="border-integra-gray-100 bg-white shadow-sm">
        <CardHeader className="p-32 pb-16">
          <CardTitle className="fs-18 font-bold text-integra-gray-900">Selection & Overlays</CardTitle>
        </CardHeader>
        <CardContent className="p-32 pt-16 space-y-24">
          <Select>
            <SelectTrigger className="h-40 bg-white">
              <SelectValue placeholder="Choose Atom" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="radius">Radius</SelectItem>
              <SelectItem value="spacing">Spacing</SelectItem>
              <SelectItem value="typo">Typography</SelectItem>
            </SelectContent>
          </Select>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button appearance="outlined" variant="tertiary" size="small" className="w-full border-integra-gray-200">Hover for Detail</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="fs-12 leading-16 text-white">Atomic Tooltip .fs-12</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardContent>
      </Card>

      {/* 5. Information Structure */}
      <Card className="border-integra-gray-100 bg-white shadow-sm">
        <CardHeader className="p-32 pb-16">
          <CardTitle className="fs-18 font-bold text-integra-gray-900">Information</CardTitle>
        </CardHeader>
        <CardContent className="p-32 pt-16 space-y-24">
          <Tabs defaultValue="ui" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="ui" className="fs-13">Interface</TabsTrigger>
              <TabsTrigger value="token" className="fs-13">Atoms</TabsTrigger>
            </TabsList>
          </Tabs>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="1" className="border-b-0 border-t-0">
              <AccordionTrigger className="py-8 fs-14 border-b border-integra-gray-100">Why Numerical?</AccordionTrigger>
              <AccordionContent className="pt-12 fs-13 text-integra-gray-500">
                1:1 매핑을 통해 디자인과 코드의 간극을 줄이기 위함입니다.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* 6. The Core Vision (이전 버전 복구) */}
      <Card className="lg:col-span-3 bg-integra-gray-900 border-0 shadow-2xl relative overflow-hidden">
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