"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Card } from "@/components/ui/card"
import { Playground } from "@/components/layout/playground"

export function ToastDemo() {
  const { toast } = useToast()

  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-960 mx-auto border border-integra-gray-200 shadow-integra rounded-16 bg-white">
      
      {/* 1. 프리뷰 영역: bg-integra-gray-50 및 border-integra-gray-200 적용 */}
      <Playground className="gap-24 flex flex-col">
        <Button
          size="medium"
          variant="tertiary"
          appearance="outlined"
          onClick={() => {
            toast({
              title: "알림",
              description: "성공적으로 저장되었습니다.",
            })
          }}
        >
          기본 토스트
        </Button>
        <Button
          size="medium"
          variant="secondary"
          appearance="destructive"
          onClick={() => {
            toast({
              variant: "destructive",
              title: "에러 발생",
              description: "데이터를 불러오지 못했습니다.",
            })
          }}
        >
          에러 토스트
        </Button>
      </Playground>

      {/* 2. 코드 영역: bg-integra-gray-900 및 fs-14 적용 */}
      <div className="rounded-8 bg-integra-gray-900 p-20 overflow-x-auto font-mono fs-14 leading-24 text-white">
        <p className="text-integra-gray-500 mb-8">// 토스트 트리거 예시</p>
        <code className="block">
          const &#123; toast &#125; = useToast();<br /><br />
          &lt;Button onClick=&#123;() =&gt; toast(&#123; title: "저장 완료" &#125;)&#125;&gt;<br />
          &nbsp;&nbsp;토스트 표시<br />
          &lt;/Button&gt;
        </code>
      </div>
    </Card>
  )
}
