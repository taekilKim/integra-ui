"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function TabsDemo() {
  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-800 mx-auto border border-slate-200 shadow-integra rounded-16">
      <Tabs defaultValue="account" className="w-400 mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="space-y-16 py-16">
          <div className="space-y-8">
            <Label>Name</Label>
            <Input defaultValue="Integra UI" />
          </div>
          <Button className="w-full">Save changes</Button>
        </TabsContent>
        <TabsContent value="password" className="space-y-16 py-16">
          <div className="space-y-8">
            <Label>Current Password</Label>
            <Input type="password" />
          </div>
          <Button className="w-full">Update password</Button>
        </TabsContent>
      </Tabs>
    </Card>
  )
}