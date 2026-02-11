"use client"

import * as React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Playground } from "@/components/layout/playground"

export function TabsDemo() {
  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-960 mx-auto border border-integra-gray-200 shadow-integra rounded-16 bg-white">
      
      {/* 1. 프리뷰 영역: bg-integra-gray-50 및 border-integra-gray-200 적용 */}
      <Playground>
        <Tabs defaultValue="account" className="w-400">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account" className="fs-14">이름 변경</TabsTrigger>
            <TabsTrigger value="password" className="fs-14">비밀번호 변경</TabsTrigger>
          </TabsList>
          
          <TabsContent value="account" className="space-y-16 py-16">
            <div className="space-y-8">
              <Label className="fs-14 text-integra-gray-900">이름</Label>
              <Input defaultValue="홍길동" className="fs-14" />
            </div>
            <Button appearance="default" variant="default" className="w-full">
              저장
            </Button>
          </TabsContent>
          
          <TabsContent value="password" className="space-y-16 py-16">
            <div className="space-y-8">
              <Label className="fs-14 text-integra-gray-900">현재 비밀번호</Label>
              <Input type="password" placeholder="••••••••" className="fs-14" />
            </div>
            <Button appearance="default" variant="default" className="w-full">
              비밀번호 변경
            </Button>
          </TabsContent>
        </Tabs>
      </Playground>

      {/* 2. 코드 영역: bg-integra-gray-900 및 fs-14 적용 */}
      <div className="rounded-8 bg-integra-gray-900 p-20 overflow-x-auto font-mono fs-14 leading-24 text-white">
        <p className="text-integra-gray-500 mb-8">// 탭 구조 예시</p>
        <code className="block">
          &lt;Tabs defaultValue="account"&gt;<br />
          &nbsp;&nbsp;&lt;TabsList&gt;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;TabsTrigger value="account"&gt;계정 정보&lt;/TabsTrigger&gt;<br />
          &nbsp;&nbsp;&lt;/TabsList&gt;<br />
          &nbsp;&nbsp;&lt;TabsContent value="account"&gt;...&lt;/TabsContent&gt;<br />
          &lt;/Tabs&gt;
        </code>
      </div>
    </Card>
  )
}
