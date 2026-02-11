"use client"

import * as React from "react"
import { Item } from "@/components/ui/item"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Check, EnvelopeSimple, Gear, User } from "@phosphor-icons/react"
import { Playground } from "@/components/layout/playground"

export function ItemDemo() {
  const [selected, setSelected] = React.useState("user")

  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-960 mx-auto border border-integra-gray-200 shadow-integra rounded-16 bg-white">
      
      {/* 프리뷰 영역: 다양한 Item 조합 */}
      <Playground className="flex-col md:flex-row gap-32 items-start justify-center">
        {/* 예시 1: 기본 리스트 */}
        <div className="w-full max-w-280 space-y-4">
          <p className="fs-12 font-bold text-integra-gray-400 uppercase tracking-1 px-12">기본 리스트</p>
          <Item>받은 메일</Item>
          <Item>보낸 메일</Item>
          <Item>휴지통</Item>
        </div>

        {/* 예시 2: 아이콘 + 선택 상태 */}
        <div className="w-full max-w-280 space-y-4">
          <p className="fs-12 font-bold text-integra-gray-400 uppercase tracking-1 px-12">아이콘 + 선택 상태</p>
          <Item
            data-state={selected === "user" ? "on" : "off"}
            onClick={() => setSelected("user")}
          >
            <User className="w-16 h-16 mr-8 text-integra-gray-500" />
            <span className="flex-1">프로필</span>
            {selected === "user" && <Check className="w-16 h-16 text-primary" />}
          </Item>
          <Item
            data-state={selected === "settings" ? "on" : "off"}
            onClick={() => setSelected("settings")}
          >
            <Gear className="w-16 h-16 mr-8 text-integra-gray-500" />
            <span className="flex-1">설정</span>
            {selected === "settings" && <Check className="w-16 h-16 text-primary" />}
          </Item>
        </div>
      </Playground>

      {/* 코드 영역 */}
      <div className="rounded-12 bg-integra-gray-900 p-24 overflow-x-auto font-mono fs-14 leading-24 text-white">
        <p className="text-integra-gray-500 mb-8">// 아이콘 포함 선택형 아이템</p>
        <code>
          &lt;Item data-state="on"&gt;<br/>
          &nbsp;&nbsp;&lt;Icon /&gt;<br/>
          &nbsp;&nbsp;&lt;span&gt;메뉴 텍스트&lt;/span&gt;<br/>
          &nbsp;&nbsp;&lt;Check /&gt;<br/>
          &lt;/Item&gt;
        </code>
      </div>
    </Card>
  )
}
