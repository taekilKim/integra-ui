"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"

export function BadgeDemo() {
  const [variant, setVariant] = React.useState<any>("default")

  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-800 mx-auto border border-slate-200 shadow-integra rounded-16">
      <div className="min-h-160 flex items-center justify-center rounded-12 border border-slate-200 bg-slate-50/50 border-dashed">
        <Badge variant={variant}>Badge Preview</Badge>
      </div>

      <div className="grid grid-cols-1 gap-24 pt-24 border-t border-slate-100">
        <div className="space-y-8">
          <Label className="text-12 font-bold text-slate-400 uppercase tracking-1">Variant</Label>
          <select 
            className="w-full h-40 rounded-8 border border-input bg-background px-12 py-8 text-14 outline-none focus:ring-2 focus:ring-ring"
            value={variant}
            onChange={(e) => setVariant(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="secondary">Secondary</option>
            <option value="outline">Outline</option>
            <option value="destructive">Destructive</option>
          </select>
        </div>
      </div>

      <div className="rounded-8 bg-slate-950 p-20 overflow-x-auto font-mono text-14 leading-24">
        <code className="text-white">&lt;Badge variant="{variant}"&gt;Badge Preview&lt;/Badge&gt;</code>
      </div>
    </Card>
  )
}