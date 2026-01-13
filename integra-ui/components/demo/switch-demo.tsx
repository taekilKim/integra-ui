"use client"

import * as React from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"

export function SwitchDemo() {
  const [isDisabled, setIsDisabled] = React.useState(false)

  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-800 mx-auto border border-slate-200 shadow-integra rounded-16">
      <div className="min-h-160 flex items-center justify-center rounded-12 border border-slate-200 bg-slate-50/50 border-dashed">
        <div className="flex items-center gap-16">
          <Switch id="demo-switch" disabled={isDisabled} />
          <Label htmlFor="demo-switch" className={isDisabled ? "opacity-50" : ""}>
            Airplane Mode
          </Label>
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
        &lt;Switch {isDisabled ? 'disabled' : ''} /&gt;
      </div>
    </Card>
  )
}