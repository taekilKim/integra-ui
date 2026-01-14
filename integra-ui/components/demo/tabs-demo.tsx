"use client"

import * as React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function TabsDemo() {
  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-960 mx-auto border border-integra-gray-200 shadow-integra rounded-16 bg-white">
      
      {/* 1. 프리뷰 영역: bg-integra-gray-50 및 border-integra-gray-200 적용 */}
      <div className="min-h-320 flex items-center justify-center rounded-12 border border-integra-gray-200 bg-integra-gray-50 border-dashed p-24 md:p-40">
        <Tabs defaultValue="account" className="w-400">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account" className="fs-14">Account</TabsTrigger>
            <TabsTrigger value="password" className="fs-14">Password</TabsTrigger>
          </TabsList>
          
          <TabsContent value="account" className="space-y-16 py-16">
            <div className="space-y-8">
              <Label className="fs-14 text-integra-gray-900">Name</Label>
              <Input defaultValue="Integra UI" className="fs-14" />
            </div>
            <Button appearance="default" variant="default" className="w-full">
              Save changes
            </Button>
          </TabsContent>
          
          <TabsContent value="password" className="space-y-16 py-16">
            <div className="space-y-8">
              <Label className="fs-14 text-integra-gray-900">Current Password</Label>
              <Input type="password" placeholder="••••••••" className="fs-14" />
            </div>
            <Button appearance="default" variant="default" className="w-full">
              Update password
            </Button>
          </TabsContent>
        </Tabs>
      </div>

      {/* 2. 코드 영역: bg-integra-gray-900 및 fs-14 적용 */}
      <div className="rounded-8 bg-integra-gray-900 p-20 overflow-x-auto font-mono fs-14 leading-24 text-white">
        <p className="text-integra-gray-500 mb-8">// Atomic Tabs Structure</p>
        <code className="block">
          &lt;Tabs defaultValue="account"&gt;<br />
          &nbsp;&nbsp;&lt;TabsList&gt;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;TabsTrigger value="account"&gt;Account&lt;/TabsTrigger&gt;<br />
          &nbsp;&nbsp;&lt;/TabsList&gt;<br />
          &nbsp;&nbsp;&lt;TabsContent value="account"&gt;...&lt;/TabsContent&gt;<br />
          &lt;/Tabs&gt;
        </code>
      </div>
    </Card>
  )
}