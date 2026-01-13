"use client"

import * as React from "react"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function TextareaDemo() {
  const [isDisabled, setIsDisabled] = React.useState(false)

  return (
    <Card className="p-6 md:p-10 flex flex-col gap-8 w-full max-w-3xl mx-auto border-2 border-slate-100">
      {/* 프리뷰 */}
      <div className="min-h-[250px] flex items-center justify-center rounded-lg border bg-slate-50/50 border-dashed p-8">
        <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Your Message</Label>
            <Textarea placeholder="Type your message here." id="message" disabled={isDisabled} />
            <p className="text-sm text-muted-foreground">
                We will reply to you within 24 hours.
            </p>
            <div className="flex justify-end mt-2">
                <Button disabled={isDisabled}>Send Message</Button>
            </div>
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