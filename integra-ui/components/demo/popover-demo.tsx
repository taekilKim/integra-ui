"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Card } from "@/components/ui/card"

export function PopoverDemo() {
  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-800 mx-auto border border-slate-200 shadow-integra rounded-16">
      <div className="min-h-160 flex items-center justify-center rounded-12 border border-slate-200 bg-slate-50/50 border-dashed">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="tertiary">Open Settings</Button>
          </PopoverTrigger>
          <PopoverContent className="w-240">
            <div className="grid gap-16">
              <div className="space-y-4">
                <h4 className="font-bold leading-16 text-14">Dimensions</h4>
                <p className="text-12 text-muted-foreground">레이아웃의 크기를 조절하세요.</p>
              </div>
              <div className="grid gap-8">
                <div className="flex items-center gap-16">
                  <Label htmlFor="width" className="text-12">Width</Label>
                  <Input id="width" defaultValue="100%" className="h-32 text-12" />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <div className="rounded-8 bg-slate-950 p-20 overflow-x-auto font-mono text-14 leading-24 text-white">
        &lt;Popover&gt;<br/>
        &nbsp;&nbsp;&lt;PopoverTrigger&gt;Open&lt;/PopoverTrigger&gt;<br/>
        &nbsp;&nbsp;&lt;PopoverContent&gt;Content&lt;/PopoverContent&gt;<br/>
        &lt;/Popover&gt;
      </div>
    </Card>
  )
}