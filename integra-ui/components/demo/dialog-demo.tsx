"use client"

import * as React from "react"
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function DialogDemo() {
  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-960 mx-auto border border-integra-gray-200 shadow-integra rounded-16 bg-white">
      
      {/* 1. 프리뷰 영역: bg-integra-gray-50 및 border-integra-gray-200 적용 */}
      <div className="min-h-160 flex items-center justify-center rounded-12 border border-integra-gray-200 bg-integra-gray-50 border-dashed p-24">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="tertiary">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>프로젝트 생성</DialogTitle>
              <DialogDescription>
                새로운 워크스페이스를 생성합니다. 이름을 입력하고 완료 버튼을 눌러주세요.
              </DialogDescription>
            </DialogHeader>
            {/* fs-14 적용 및 text-integra-gray-500 적용 */}
            <div className="py-16 fs-14 text-integra-gray-500">
                (여기에 폼 요소를 추가할 수 있습니다)
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="tertiary">취소</Button>
              </DialogClose>
              <Button>완료</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* 2. 코드 영역: bg-integra-gray-900 및 fs-14 적용 */}
      <div className="rounded-8 bg-integra-gray-900 p-20 overflow-x-auto font-mono fs-14 leading-24 text-white">
        <p className="text-integra-gray-500 mb-8">// Atomic Dialog Structure</p>
        <code className="block">
          &lt;Dialog&gt;<br/>
          &nbsp;&nbsp;&lt;DialogTrigger&gt;Open&lt;/DialogTrigger&gt;<br/>
          &nbsp;&nbsp;&lt;DialogContent&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;...<br/>
          &nbsp;&nbsp;&lt;/DialogContent&gt;<br/>
          &lt;/Dialog&gt;
        </code>
      </div>
    </Card>
  )
}