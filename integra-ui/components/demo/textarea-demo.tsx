"use client"

import * as React from "react"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"

export function TextareaDemo() {
  const [isDisabled, setIsDisabled] = React.useState(false)

  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-800 mx-auto border border-slate-200 shadow-integra rounded-16">
      <div className="min-h-200 flex items-center justify-center rounded-12 border border-slate-200 bg-slate-50/50 border-dashed p-24">
        <div className="grid w-full gap-8">
          <Label htmlFor="demo-textarea">Your Message</Label>
          <Textarea id="demo-textarea" placeholder="Type here..." disabled={isDisabled} className="min-h-120" />
        </div>
      </div>

      <div className="pt-24 border-t border-slate-100 flex items-center gap-8">
        <input 
          type="checkbox" 
          checked={isDisabled}
          onChange={(e) => setIsDisabled(e.target.checked)}
          className="w-16 h-16 accent-primary"
        />
        <Label className="text-14">Disabled State</Label>
      </div>

      <div className="rounded-8 bg-slate-950 p-20 overflow-x-auto font-mono text-14 leading-24 text-white">
        &lt;Textarea {isDisabled ? 'disabled' : ''} /&gt;
      </div>
    </Card>
  )
}