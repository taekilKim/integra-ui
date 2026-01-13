"use client"

import * as React from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"

export function SelectDemo() {
  const [isDisabled, setIsDisabled] = React.useState(false)

  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-800 mx-auto border border-slate-200 shadow-integra rounded-16">
      <div className="min-h-240 flex items-start pt-40 justify-center rounded-12 border border-slate-200 bg-slate-50/50 border-dashed">
        <div className="grid w-full max-w-200 gap-8">
          <Label>Framework</Label>
          <Select disabled={isDisabled}>
            <SelectTrigger>
              <SelectValue placeholder="Select one" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="next">Next.js</SelectItem>
              <SelectItem value="react">React</SelectItem>
              <SelectItem value="vue">Vue</SelectItem>
            </SelectContent>
          </Select>
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
        &lt;Select {isDisabled ? 'disabled' : ''}&gt;...&lt;/Select&gt;
      </div>
    </Card>
  )
}