"use client"

import * as React from "react"
import { Item } from "@/components/ui/item"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Check, Mail } from "lucide-react"

export function ItemDemo() {
  const [selected, setSelected] = React.useState("inbox")

  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-960 mx-auto border border-integra-gray-200 shadow-integra rounded-16 bg-white">
      {/* 프리뷰 영역 */}
      <div className="min-h-160 flex items-center justify-center rounded-12 border border-integra-gray-200 bg-integra-gray-50 border-dashed p-24">
        <div className="w-full max-w-240 space-y-4">
          <Item 
            size="default" 
            data-state={selected === "inbox" ? "on" : "off"}
            onClick={() => setSelected("inbox")}
          >
            <Mail className="w-16 h-16 mr-8 text-integra-gray-500" />
            <span className="flex-1">Inbox</span>
            {selected === "inbox" && <Check className="w-16 h-16 text-primary" />}
          </Item>
          <Item 
            size="default" 
            data-state={selected === "sent" ? "on" : "off"}
            onClick={() => setSelected("sent")}
          >
            <span className="flex-1 ml-24">Sent</span>
          </Item>
        </div>
      </div>
      {/* 코드 영역 */}
      <div className="rounded-12 bg-integra-gray-900 p-24 overflow-x-auto font-mono fs-14 leading-24 text-white">
        <p className="text-integra-gray-500 mb-8">// As a selectable list item</p>
        <code>&lt;Item data-state="on"&gt;...&lt;/Item&gt;</code>
      </div>
    </Card>
  )
}