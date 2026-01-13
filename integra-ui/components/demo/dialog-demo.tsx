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
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-800 mx-auto border border-slate-200 shadow-integra rounded-16">
      {/* 프리뷰 영역 */}
      <div className="min-h-160 flex items-center justify-center rounded-12 border border-slate-200 bg-slate-50/50 border-dashed">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>프로젝트 생성</DialogTitle>
              <DialogDescription>
                새로운 워크스페이스를 생성합니다. 이름을 입력하고 완료 버튼을 눌러주세요.
              </DialogDescription>
            </DialogHeader>
            <div className="py-16 text-14 text-slate-500">
                (여기에 폼 요소를 추가할 수 있습니다)
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="ghost">취소</Button>
              </DialogClose>
              <Button>완료</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* 코드 영역 */}
      <div className="rounded-8 bg-slate-950 p-20 overflow-x-auto font-mono text-14 leading-24 text-white">
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