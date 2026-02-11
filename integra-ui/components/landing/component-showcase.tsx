"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CreditCard, EnvelopeSimple, User, Plus, Bell, Check, Clock } from "@phosphor-icons/react"

export function ComponentShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 items-start">
      
      {/* 1. Payment Method (Complex Form) */}
      <Card className="col-span-1 lg:col-span-2 border-integra-gray-200 bg-white shadow-sm">
        <CardHeader className="p-24 pb-16">
          <CardTitle className="fs-18 font-bold">결제 수단</CardTitle>
          <CardDescription className="fs-14 text-integra-gray-500">계정에 새 결제 수단을 추가하세요.</CardDescription>
        </CardHeader>
        <CardContent className="p-24 pt-0 space-y-24">
          <Tabs defaultValue="card" className="w-full">
            <TabsList className="grid w-full grid-cols-2 h-40">
              <TabsTrigger value="card" className="fs-14">카드</TabsTrigger>
              <TabsTrigger value="paypal" className="fs-14">간편결제</TabsTrigger>
            </TabsList>
            <TabsContent value="card" className="space-y-16 pt-16">
              <div className="space-y-8">
                <Label className="fs-12 text-integra-gray-700">이름</Label>
                <Input placeholder="홍길동" className="h-40" />
              </div>
              <div className="space-y-8">
                <Label className="fs-12 text-integra-gray-700">카드 번호</Label>
                <div className="relative">
                  {/* 아이콘을 absolute로 배치 */}
                  <CreditCard className="absolute left-12 top-12 w-16 h-16 text-integra-gray-400" />
                  {/* 인풋에 pl-40 (왼쪽 패딩)을 주어 텍스트 겹침 방지 */}
                  <Input
                    placeholder="0000 0000 0000 0000"
                    className="h-40 pl-40"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-16">
                <div className="space-y-8 col-span-2">
                  <Label className="fs-12 text-integra-gray-700">만료일</Label>
                  <Select>
                    <SelectTrigger className="h-40"><SelectValue placeholder="월" /></SelectTrigger>
                    <SelectContent><SelectItem value="1">1월</SelectItem></SelectContent>
                  </Select>
                </div>
                <div className="space-y-8">
                  <Label className="fs-12 text-integra-gray-700">보안코드</Label>
                  <Input placeholder="123" className="h-40" />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="paypal" className="pt-16">
                <div className="p-40 border border-dashed border-integra-gray-200 rounded-12 flex items-center justify-center text-integra-gray-400 bg-integra-gray-50">
                    <span className="fs-14">간편결제는 준비 중입니다</span>
                </div>
            </TabsContent>
          </Tabs>
          <Button className="w-full">계속하기</Button>
        </CardContent>
      </Card>

      {/* 2. Team Members (List Pattern) */}
      <Card className="border-integra-gray-200 bg-white shadow-sm">
        <CardHeader className="p-24 pb-16">
          <CardTitle className="fs-18 font-bold">팀원</CardTitle>
          <CardDescription className="fs-14 text-integra-gray-500">팀원을 초대하여 협업하세요.</CardDescription>
        </CardHeader>
        <CardContent className="p-24 pt-0 space-y-24">
          <div className="space-y-16">
            {[
              { name: "김민수", email: "minsu@integra.co.kr", role: "소유자" },
              { name: "이지은", email: "jieun@integra.co.kr", role: "멤버" },
            ].map((member, i) => (
              <div key={i} className="flex items-center justify-between space-x-16">
                <div className="flex items-center space-x-12">
                  <Avatar className="h-40 w-40">
                    <AvatarFallback>{member.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <p className="fs-14 font-medium leading-none">{member.name}</p>
                    <p className="fs-12 text-integra-gray-500">{member.email}</p>
                  </div>
                </div>
                 <Select>
                    <SelectTrigger className="h-32 w-100 fs-12 px-8"><SelectValue placeholder={member.role} /></SelectTrigger>
                 </Select>
              </div>
            ))}
          </div>
          <Separator />
          <div className="space-y-16">
             <Label className="fs-12 text-integra-gray-500">새 멤버 추가</Label>
             <div className="flex gap-8">
                <Input placeholder="이메일 주소" className="h-32 fs-13" />
                <Button size="small" variant="secondary">초대</Button>
             </div>
          </div>
        </CardContent>
      </Card>

      {/* 3. Notifications (Switch List) */}
      <Card className="border-integra-gray-200 bg-white shadow-sm">
        <CardHeader className="p-24 pb-16">
          <div className="flex items-center gap-12">
            <Bell className="w-20 h-20 text-primary" />
            <div className="space-y-2">
                <CardTitle className="fs-18 font-bold">알림</CardTitle>
                <CardDescription className="fs-14 text-integra-gray-500">알림 설정을 관리하세요</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-24 pt-0 grid gap-24">
          <div className="flex items-center justify-between space-x-16 p-12 rounded-12 border border-integra-gray-100 bg-integra-gray-50">
            <div className="space-y-2">
              <Label className="fs-14 font-medium">푸시 알림</Label>
              <p className="fs-12 text-integra-gray-500">모바일로 바로 전송됩니다.</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between space-x-16">
            <div className="space-y-2">
              <Label className="fs-14 font-medium">이메일 요약</Label>
              <p className="fs-12 text-integra-gray-500">매일 오전 9시 요약 발송</p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between space-x-16">
            <div className="space-y-2">
              <Label className="fs-14 font-medium">커뮤니티</Label>
              <p className="fs-12 text-integra-gray-500">멘션만 받기</p>
            </div>
            <Checkbox id="community" />
          </div>
        </CardContent>
      </Card>

      {/* 4. Report Issue (Radio & Textarea) */}
      <Card className="lg:col-span-2 border-integra-gray-200 bg-white shadow-sm">
        <CardHeader className="p-24 pb-16">
          <CardTitle className="fs-18 font-bold">문제 신고</CardTitle>
          <CardDescription className="fs-14 text-integra-gray-500">어떤 영역에서 문제가 있나요?</CardDescription>
        </CardHeader>
        <CardContent className="p-24 pt-0 grid gap-24">
          <RadioGroup defaultValue="billing" className="grid grid-cols-2 gap-16">
            <div>
              <RadioGroupItem value="billing" id="billing" className="peer sr-only" />
              <Label
                htmlFor="billing"
                className="flex flex-col items-center justify-between rounded-12 border-2 border-integra-gray-100 bg-white p-16 hover:bg-integra-gray-50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary cursor-pointer transition-all"
              >
                <CreditCard className="mb-12 h-24 w-24" />
                <span className="fs-14 font-bold">결제</span>
              </Label>
            </div>
            <div>
              <RadioGroupItem value="account" id="account" className="peer sr-only" />
              <Label
                htmlFor="account"
                className="flex flex-col items-center justify-between rounded-12 border-2 border-integra-gray-100 bg-white p-16 hover:bg-integra-gray-50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary cursor-pointer transition-all"
              >
                <User className="mb-12 h-24 w-24" />
                <span className="fs-14 font-bold">계정</span>
              </Label>
            </div>
          </RadioGroup>
          <div className="space-y-8">
            <Label className="fs-12 text-integra-gray-500">설명</Label>
            {/* Textarea 컴포넌트가 없으므로 div로 흉내내거나 Textarea 컴포넌트 사용 */}
            <textarea className="flex min-h-80 w-full rounded-8 border border-integra-gray-200 bg-white px-12 py-8 fs-14 focus:outline-none focus:ring-2 focus:ring-primary resize-none" placeholder="문제를 설명해 주세요..." />
          </div>
          <div className="flex justify-end gap-8">
            <Button variant="tertiary">취소</Button>
            <Button>신고하기</Button>
          </div>
        </CardContent>
      </Card>
      
      {/* 5. Recent Activity (Visual Density) */}
      <Card className="border-integra-gray-200 bg-white shadow-sm">
        <CardHeader className="p-24 pb-16">
           <CardTitle className="fs-18 font-bold">최근 활동</CardTitle>
        </CardHeader>
        <CardContent className="p-24 pt-0">
           <div className="space-y-24">
              {[
                  { text: "프로젝트 생성됨", time: "2분 전", icon: <Plus /> },
                  { text: "작업 완료됨", time: "1시간 전", icon: <Check /> },
                  { text: "회의 예정됨", time: "3시간 전", icon: <Clock /> }
              ].map((item, i) => (
                  <div key={i} className="flex gap-16 relative">
                      {/* Timeline Line */}
                      {i !== 2 && <div className="absolute left-10 top-24 bottom-[-24px] w-2 bg-integra-gray-100" />}

                      <div className="relative z-10 w-20 h-20 rounded-full bg-integra-gray-50 border border-integra-gray-200 flex items-center justify-center text-integra-gray-500">
                          {React.cloneElement(item.icon, { className: "w-10 h-10" })}
                      </div>
                      <div className="space-y-2">
                          <p className="fs-14 font-medium leading-none">{item.text}</p>
                          <p className="fs-12 text-integra-gray-400">{item.time}</p>
                      </div>
                  </div>
              ))}
           </div>
        </CardContent>
      </Card>

    </div>
  )
}
