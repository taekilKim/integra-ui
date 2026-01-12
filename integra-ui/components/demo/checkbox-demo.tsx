"use client"

import * as React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"

export function CheckboxDemo() {
  const [isDisabled, setIsDisabled] = React.useState(false)

  return (
    <Card className="p-6 md:p-10 flex flex-col gap-8 w-full max-w-3xl mx-auto border-2 border-slate-100">
      {/* 프리뷰 */}
      <div className="min-h-[150px] flex items-center justify-center rounded-lg border bg-slate-50/50 border-dashed">
        <div className="flex items-center space-x-2">
            <Checkbox id="demo-terms" disabled={isDisabled} />
            <Label htmlFor="demo-terms" className={isDisabled ? "opacity-50" : ""}>
                Accept terms and conditions
            </Label>
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