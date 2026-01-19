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
import { CreditCard, Mail, User, Plus, Bell, Check, Clock } from "lucide-react"

export function ComponentShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 items-start">
      
      {/* 1. Payment Method (Complex Form) */}
      <Card className="col-span-1 lg:col-span-2 border-integra-gray-200 bg-white shadow-sm">
        <CardHeader className="p-24 pb-16">
          <CardTitle className="fs-18 font-bold">Payment Method</CardTitle>
          <CardDescription className="fs-14 text-integra-gray-500">Add a new payment method to your account.</CardDescription>
        </CardHeader>
        <CardContent className="p-24 pt-0 space-y-24">
          <Tabs defaultValue="card" className="w-full">
            <TabsList className="grid w-full grid-cols-2 h-40">
              <TabsTrigger value="card" className="fs-14">Card</TabsTrigger>
              <TabsTrigger value="paypal" className="fs-14">PayPal</TabsTrigger>
            </TabsList>
            <TabsContent value="card" className="space-y-16 pt-16">
              <div className="space-y-8">
                <Label className="fs-12 text-integra-gray-700">Name</Label>
                <Input placeholder="First Last" className="h-40" />
              </div>
              <div className="space-y-8">
                <Label className="fs-12 text-integra-gray-700">Card Number</Label>
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
                  <Label className="fs-12 text-integra-gray-700">Expires</Label>
                  <Select>
                    <SelectTrigger className="h-40"><SelectValue placeholder="Month" /></SelectTrigger>
                    <SelectContent><SelectItem value="1">January</SelectItem></SelectContent>
                  </Select>
                </div>
                <div className="space-y-8">
                  <Label className="fs-12 text-integra-gray-700">CVC</Label>
                  <Input placeholder="123" className="h-40" />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="paypal" className="pt-16">
                <div className="p-40 border border-dashed border-integra-gray-200 rounded-12 flex items-center justify-center text-integra-gray-400 bg-integra-gray-50">
                    <span className="fs-14">PayPal is not available</span>
                </div>
            </TabsContent>
          </Tabs>
          <Button className="w-full">Continue</Button>
        </CardContent>
      </Card>

      {/* 2. Team Members (List Pattern) */}
      <Card className="border-integra-gray-200 bg-white shadow-sm">
        <CardHeader className="p-24 pb-16">
          <CardTitle className="fs-18 font-bold">Team Members</CardTitle>
          <CardDescription className="fs-14 text-integra-gray-500">Invite your team members to collaborate.</CardDescription>
        </CardHeader>
        <CardContent className="p-24 pt-0 space-y-24">
          <div className="space-y-16">
            {[
              { name: "Sofia Davis", email: "m@example.com", role: "Owner" },
              { name: "Jackson Lee", email: "p@example.com", role: "Member" },
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
             <Label className="fs-12 text-integra-gray-500">Add New Member</Label>
             <div className="flex gap-8">
                <Input placeholder="Email address" className="h-32 fs-13" />
                <Button size="small" variant="secondary">Invite</Button>
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
                <CardTitle className="fs-18 font-bold">Notifications</CardTitle>
                <CardDescription className="fs-14 text-integra-gray-500">Manage your alert preferences</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-24 pt-0 grid gap-24">
          <div className="flex items-center justify-between space-x-16 p-12 rounded-12 border border-integra-gray-100 bg-integra-gray-50">
            <div className="space-y-2">
              <Label className="fs-14 font-medium">Push Messages</Label>
              <p className="fs-12 text-integra-gray-500">Send direct to mobile.</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between space-x-16">
            <div className="space-y-2">
              <Label className="fs-14 font-medium">Email Digest</Label>
              <p className="fs-12 text-integra-gray-500">Daily summary at 9 AM.</p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between space-x-16">
            <div className="space-y-2">
              <Label className="fs-14 font-medium">Community</Label>
              <p className="fs-12 text-integra-gray-500">Receive mentions only.</p>
            </div>
            <Checkbox id="community" />
          </div>
        </CardContent>
      </Card>

      {/* 4. Report Issue (Radio & Textarea) */}
      <Card className="lg:col-span-2 border-integra-gray-200 bg-white shadow-sm">
        <CardHeader className="p-24 pb-16">
          <CardTitle className="fs-18 font-bold">Report an Issue</CardTitle>
          <CardDescription className="fs-14 text-integra-gray-500">What area are you having problems with?</CardDescription>
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
                <span className="fs-14 font-bold">Billing</span>
              </Label>
            </div>
            <div>
              <RadioGroupItem value="account" id="account" className="peer sr-only" />
              <Label
                htmlFor="account"
                className="flex flex-col items-center justify-between rounded-12 border-2 border-integra-gray-100 bg-white p-16 hover:bg-integra-gray-50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary cursor-pointer transition-all"
              >
                <User className="mb-12 h-24 w-24" />
                <span className="fs-14 font-bold">Account</span>
              </Label>
            </div>
          </RadioGroup>
          <div className="space-y-8">
            <Label className="fs-12 text-integra-gray-500">Description</Label>
            {/* Textarea 컴포넌트가 없으므로 div로 흉내내거나 Textarea 컴포넌트 사용 */}
            <textarea className="flex min-h-80 w-full rounded-8 border border-integra-gray-200 bg-white px-12 py-8 fs-14 focus:outline-none focus:ring-2 focus:ring-primary resize-none" placeholder="Please describe the issue..." />
          </div>
          <div className="flex justify-end gap-8">
            <Button variant="tertiary">Cancel</Button>
            <Button>Submit Report</Button>
          </div>
        </CardContent>
      </Card>
      
      {/* 5. Recent Activity (Visual Density) */}
      <Card className="border-integra-gray-200 bg-white shadow-sm">
        <CardHeader className="p-24 pb-16">
           <CardTitle className="fs-18 font-bold">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent className="p-24 pt-0">
           <div className="space-y-24">
              {[
                  { text: "Project created", time: "2 min ago", icon: <Plus /> },
                  { text: "Task completed", time: "1 hour ago", icon: <Check /> },
                  { text: "Meeting scheduled", time: "3 hours ago", icon: <Clock /> }
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