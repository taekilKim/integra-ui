"use client"

import * as React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"

export function SelectDemo() {
  const [isDisabled, setIsDisabled] = React.useState(false)

  return (
    <Card className="p-6 md:p-10 flex flex-col gap-8 w-full max-w-3xl mx-auto border-2 border-slate-100">
      {/* 프리뷰 */}
      <div className="min-h-[250px] flex items-start pt-10 justify-center rounded-lg border bg-slate-50/50 border-dashed">
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label>Favorite Framework</Label>
            <Select disabled={isDisabled}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a framework" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
            </SelectContent>
            </Select>
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