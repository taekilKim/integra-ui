"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"

export function InputDemo() {
  const [isDisabled, setIsDisabled] = React.useState(false)
  const [placeholder, setPlaceholder] = React.useState("이메일을 입력하세요")

  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-800 mx-auto border border-slate-200 shadow-integra rounded-16">
      <div className="min-h-160 flex items-center justify-center rounded-12 border border-slate-200 bg-slate-50/50 border-dashed p-24">
        <div className="grid w-full max-w-320 gap-8">
          <Label htmlFor="demo-input">Email Address</Label>
          <Input id="demo-input" placeholder={placeholder} disabled={isDisabled} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 pt-24 border-t border-slate-100">
        <div className="space-y-8">
          <Label className="text-12 font-bold text-slate-400 uppercase tracking-1">Placeholder</Label>
          <Input value={placeholder} onChange={(e) => setPlaceholder(e.target.value)} />
        </div>
        <div className="flex items-center gap-8 self-end h-40">
          <input 
            type="checkbox" 
            checked={isDisabled}
            onChange={(e) => setIsDisabled(e.target.checked)}
            className="w-16 h-16 accent-primary"
          />
          <Label className="text-14">Disabled</Label>
        </div>
      </div>

      <div className="rounded-8 bg-slate-950 p-20 overflow-x-auto font-mono text-14 leading-24 text-white">
        &lt;Input placeholder="{placeholder}" {isDisabled ? 'disabled' : ''} /&gt;
      </div>
    </Card>
  )
}