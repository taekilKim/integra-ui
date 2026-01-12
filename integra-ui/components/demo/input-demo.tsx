"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"

export function InputDemo() {
  const [isDisabled, setIsDisabled] = React.useState(false)
  const [placeholder, setPlaceholder] = React.useState("이메일을 입력하세요")

  return (
    <Card className="p-6 md:p-10 flex flex-col gap-8 w-full max-w-3xl mx-auto border-2 border-slate-100">
      {/* 프리뷰 */}
      <div className="min-h-[150px] flex items-center justify-center rounded-lg border bg-slate-50/50 border-dashed p-8">
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="demo-email">Email</Label>
            <Input type="email" id="demo-email" disabled={isDisabled} placeholder={placeholder} />
        </div>
      </div>

      {/* 컨트롤러 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t">
        <div className="space-y-2">
            <Label>Placeholder Text</Label>
            <Input 
                value={placeholder} 
                onChange={(e) => setPlaceholder(e.target.value)} 
            />
        </div>
        <div className="space-y-2">
             <Label>State</Label>
             <div className="flex items-center gap-2 h-10">
                <input 
                    type="checkbox" 
                    checked={isDisabled}
                    onChange={(e) => setIsDisabled(e.target.checked)}
                    className="w-4 h-4 accent-primary"
                />
                <span className="text-sm">Disabled</span>
             </div>
        </div>
      </div>
    </Card>
  )
}