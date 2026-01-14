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

export function ComponentShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32">
      
      {/* 1. Buttons 위계 쇼케이스 */}
      <Card className="lg:col-span-2 border-integra-gray-100 bg-white shadow-sm">
        <CardHeader className="p-32 pb-16">
          <CardTitle className="fs-18 font-bold">Button Hierarchy</CardTitle>
          <CardDescription className="fs-14 text-integra-gray-500">용도와 중요도에 따른 아토믹 조합</CardDescription>
        </CardHeader>
        <CardContent className="p-32 pt-0 flex flex-wrap gap-16 items-center">
          <Button appearance="default" variant="default" size="default">Primary Button</Button>
          <Button appearance="default" variant="secondary" size="default">Secondary</Button>
          <Button appearance="default" variant="tertiary" size="default">Tertiary</Button>
          <Button appearance="destructive" variant="default" size="default">Destructive</Button>
          <Button appearance="text" variant="default" size="default">Text Accent</Button>
        </CardContent>
      </Card>

      {/* 2. Form Control 쇼케이스 */}
      <Card className="border-integra-gray-100 bg-white shadow-sm">
        <CardHeader className="p-32 pb-16">
          <CardTitle className="fs-18 font-bold">Form Controls</CardTitle>
        </CardHeader>
        <CardContent className="p-32 pt-0 space-y-24">
          <div className="space-y-8">
            <Label className="fs-12 text-integra-gray-500">Email Address</Label>
            <Input placeholder="hello@integra.ui" className="h-40" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Checkbox id="terms-showcase" />
              <Label htmlFor="terms-showcase" className="fs-14">Agree to terms</Label>
            </div>
            <Switch checked />
          </div>
        </CardContent>
      </Card>

      {/* 3. Navigation & Feedback 쇼케이스 */}
      <Card className="border-integra-gray-100 bg-white shadow-sm">
        <CardHeader className="p-32 pb-16">
          <CardTitle className="fs-18 font-bold">Navigation & Badges</CardTitle>
        </CardHeader>
        <CardContent className="p-32 pt-0 space-y-24">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="all" className="fs-13">All Items</TabsTrigger>
              <TabsTrigger value="recent" className="fs-13">Recent</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="flex flex-wrap gap-8">
            <Badge variant="default">Active</Badge>
            <Badge variant="secondary">In Progress</Badge>
            <Badge variant="outline">Draft</Badge>
            <Badge variant="destructive">Rejected</Badge>
          </div>
        </CardContent>
      </Card>

      {/* 4. Atomic Logic 쇼케이스 (수치 강조) */}
      <Card className="lg:col-span-2 border-integra-gray-100 bg-integra-gray-900 text-white shadow-integra">
        <CardHeader className="p-32 pb-16">
          <CardTitle className="fs-18 font-bold text-white">The Atomic Logic</CardTitle>
          <CardDescription className="fs-14 text-integra-gray-400 italic">
            "Figma 24px Padding = Code p-24"
          </CardDescription>
        </CardHeader>
        <CardContent className="p-32 pt-0 grid md:grid-cols-2 gap-32">
          <div className="space-y-12 border-l-2 border-primary pl-24">
            <p className="fs-12 font-bold text-primary uppercase tracking-2">Spacing & Radius</p>
            <p className="fs-14 text-integra-gray-300 leading-24">
              추상적인 md, lg 대신 실제 수치를 사용합니다.<br />
              <span className="text-white font-bold">.p-24, .rounded-16, .gap-8</span><br />
              디자이너의 가이드가 1px의 오차 없이 구현됩니다.
            </p>
          </div>
          <div className="space-y-12 border-l-2 border-primary pl-24">
            <p className="fs-12 font-bold text-primary uppercase tracking-2">Typography</p>
            <p className="fs-14 text-integra-gray-300 leading-24">
              가독성을 위한 2px 단위 미세 조정.<br />
              <span className="text-white font-bold">.fs-13, .fs-15, .leading-24</span><br />
              한글 타이포그래피의 최적점을 찾아냅니다.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}