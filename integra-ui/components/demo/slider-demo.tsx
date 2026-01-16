"use client"

import * as React from "react"
import { Slider } from "@/components/ui/slider"
import { Card } from "@/components/ui/card"
import { Playground } from "@/components/layout/playground"
import { Badge } from "@/components/ui/badge"

export function SliderDemo() {
  const [value, setValue] = React.useState(50)

  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-960 mx-auto border border-integra-gray-200 shadow-integra rounded-16 bg-white">
      <Playground className="flex-col gap-24">
        <Slider
          defaultValue={[value]}
          max={100}
          step={1}
          onValueChange={(vals) => setValue(vals[0])}
          className="w-3/4 max-w-320"
        />
        <Badge variant="outline" className="fs-12 font-mono border-integra-gray-200">
          Current Value: {value}
        </Badge>
      </Playground>
      <div className="rounded-12 bg-integra-gray-900 p-24 font-mono fs-14 leading-24 text-white">
        <code>&lt;Slider defaultValue=&#123;[50]&#125; max=&#123;100&#125; step=&#123;1&#125; /&gt;</code>
      </div>
    </Card>
  )
}