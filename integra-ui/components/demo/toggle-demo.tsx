"use client"

import * as React from "react"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Playground } from "@/components/layout/playground"
import { TextB, TextItalic, TextUnderline } from "@phosphor-icons/react"

export function ToggleDemo() {
  const [size, setSize] = React.useState<any>("default");
  const [variant, setVariant] = React.useState<any>("default");

  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-960 mx-auto border border-integra-gray-200 shadow-integra rounded-16 bg-white">
      <Playground className="flex-col md:flex-row gap-32 items-center justify-center">
        <div className="flex flex-col items-center gap-12">
          <p className="fs-12 font-bold text-integra-gray-400 uppercase tracking-1">Single Toggle</p>
          <Toggle size={size} variant={variant} aria-label="Toggle bold">
            <TextB className="h-16 w-16" />
          </Toggle>
        </div>
        
        <div className="flex flex-col items-center gap-12">
          <p className="fs-12 font-bold text-integra-gray-400 uppercase tracking-1">Multiple Group</p>
          <ToggleGroup type="multiple" size={size} variant={variant}>
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <TextB className="h-16 w-16" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <TextItalic className="h-16 w-16" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
              <TextUnderline className="h-16 w-16" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="flex flex-col items-center gap-12">
          <p className="fs-12 font-bold text-integra-gray-400 uppercase tracking-1">Single Group</p>
          <ToggleGroup type="single" defaultValue="center" size={size} variant={variant}>
            <ToggleGroupItem value="left">Left</ToggleGroupItem>
            <ToggleGroupItem value="center">Center</ToggleGroupItem>
            <ToggleGroupItem value="right">Right</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </Playground>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 pt-24 border-t border-integra-gray-100">
        <div className="space-y-8">
          <Label className="fs-12 font-semibold text-integra-gray-500 uppercase tracking-1">Size</Label>
          <select 
            className="w-full h-40 rounded-8 border border-integra-gray-200 bg-white px-12 fs-14"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="default">Default (40px)</option>
            <option value="sm">Small (32px)</option>
            <option value="lg">Large (48px)</option>
          </select>
        </div>
        <div className="space-y-8">
          <Label className="fs-12 font-semibold text-integra-gray-500 uppercase tracking-1">Variant</Label>
          <select 
            className="w-full h-40 rounded-8 border border-integra-gray-200 bg-white px-12 fs-14"
            value={variant}
            onChange={(e) => setVariant(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="outline">Outline</option>
          </select>
        </div>
      </div>

      <div className="rounded-12 bg-integra-gray-900 p-24 font-mono fs-14 leading-24 text-white">
        <code className="block text-integra-gray-500 mb-8">// Single Toggle</code>
        <code>&lt;Toggle size="{size}" variant="{variant}"&gt;...&lt;/Toggle&gt;</code>
        <br/><br/>
        <code className="block text-integra-gray-500 mb-8">// Toggle Group</code>
        <code>&lt;ToggleGroup type="multiple"&gt;...&lt;/ToggleGroup&gt;</code>
      </div>
    </Card>
  )
}