"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"

export function BadgeDemo() {
  const [variant, setVariant] = React.useState<any>("default")

  return (
    <Card className="p-6 md:p-10 flex flex-col gap-8 w-full max-w-3xl mx-auto border-2 border-slate-100">
      {/* 프리뷰 */}
      <div className="min-h-[150px] flex items-center justify-center rounded-lg border bg-slate-50/50 border-dashed">
        <Badge variant={variant}>Badge Preview</Badge>
      </div>

      {/* 컨트롤러 */}
      <div className="grid grid-cols-1 gap-6 pt-4 border-t">
        <div className="space-y-2">
          <Label>Variant</Label>
          <select 
            className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
            value={variant}
            onChange={(e) => setVariant(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="secondary">Secondary</option>
            <option value="destructive">Destructive</option>
            <option value="outline">Outline</option>
          </select>
        </div>
      </div>
    </Card>
  )
}