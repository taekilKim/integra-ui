"use client"

import * as React from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"

export function SwitchDemo() {
  const [isDisabled, setIsDisabled] = React.useState(false)

  return (
    <Card className="p-6 md:p-10 flex flex-col gap-8 w-full max-w-3xl mx-auto border-2 border-slate-100">
      {/* 프리뷰 */}
      <div className="min-h-[150px] flex items-center justify-center rounded-lg border bg-slate-50/50 border-dashed">
        <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" disabled={isDisabled} />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
      </div>

      {/* 컨트롤러 */}
      <div className="grid grid-cols-1 gap-6 pt-4 border-t">
        <div className="flex items-center gap-2">
             <input 
                 type="checkbox" 
                 checked={isDisabled}
                 onChange={(e) => setIsDisabled(e.target.checked)}
                 className="w-4 h-4 accent-primary"
             />
             <Label>Disabled State</Label>
        </div>
      </div>
    </Card>
  )
}