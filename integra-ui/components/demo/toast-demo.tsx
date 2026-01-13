"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Card } from "@/components/ui/card"

export function ToastDemo() {
  const { toast } = useToast()

  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-800 mx-auto border border-slate-200 shadow-integra rounded-16">
      <div className="min-h-160 flex items-center justify-center rounded-12 border border-slate-200 bg-slate-50/50 border-dashed gap-16">
        <Button
          variant="tertiary"
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
          appearance="destructive"
          variant="default"
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
      </div>
    </Card>
  )
}