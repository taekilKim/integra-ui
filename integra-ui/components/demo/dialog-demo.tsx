"use client"

import * as React from "react"
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogBody,
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Card } from "@/components/ui/card"
import { Playground } from "@/components/layout/playground"

export function DialogDemo() {
  const [layout, setLayout] = React.useState<
    "single-fill" | "double-fit" | "double-fill-5-5" | "double-fill-3-7"
  >("single-fill")
  const [showCloseIcon, setShowCloseIcon] = React.useState(true)
  const [showSubtext, setShowSubtext] = React.useState(true)
  const [showBody, setShowBody] = React.useState(true)

  const layoutOptions: {
    label: string
    value: "single-fill" | "double-fit" | "double-fill-5-5" | "double-fill-3-7"
  }[] = [
    { label: "Single Fill (100%)", value: "single-fill" },
    { label: "Double Fit", value: "double-fit" },
    { label: "Double Fill 5:5", value: "double-fill-5-5" },
    { label: "Double Fill 3:7", value: "double-fill-3-7" },
  ]

  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-960 mx-auto border border-integra-gray-200 shadow-integra rounded-16 bg-white">
      <div className="space-y-8">
        <p className="fs-12 font-semibold uppercase tracking-1 text-integra-gray-500">Dialog Props</p>
        <div className="flex flex-wrap items-center gap-8">
          <Button
            size="small"
            appearance={showCloseIcon ? "default" : "text"}
            variant={showCloseIcon ? "default" : "secondary"}
            onClick={() => setShowCloseIcon((prev) => !prev)}
          >
            Close Icon {showCloseIcon ? "On" : "Off"}
          </Button>
          <Button
            size="small"
            appearance={showSubtext ? "default" : "text"}
            variant={showSubtext ? "default" : "secondary"}
            onClick={() => setShowSubtext((prev) => !prev)}
          >
            Subtext {showSubtext ? "On" : "Off"}
          </Button>
          <Button
            size="small"
            appearance={showBody ? "default" : "text"}
            variant={showBody ? "default" : "secondary"}
            onClick={() => setShowBody((prev) => !prev)}
          >
            Body {showBody ? "On" : "Off"}
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-8">
        {layoutOptions.map((option) => (
          <Button
            key={option.value}
            size="small"
            appearance={layout === option.value ? "default" : "text"}
            variant={layout === option.value ? "default" : "secondary"}
            onClick={() => setLayout(option.value)}
          >
            {option.label}
          </Button>
        ))}
      </div>
      
      {/* 1. 프리뷰 영역: bg-integra-gray-50 및 border-integra-gray-200 적용 */}
      <Playground>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="medium" variant="tertiary" appearance="outlined">다이얼로그 열기</Button>
          </DialogTrigger>
          <DialogContent showCloseIcon={showCloseIcon} showSubtext={showSubtext} showBody={showBody}>
            <DialogHeader>
              <DialogTitle>프로젝트 생성</DialogTitle>
              <DialogDescription>
                새로운 워크스페이스를 생성합니다. 이름을 입력하고 완료 버튼을 눌러주세요.
              </DialogDescription>
            </DialogHeader>
            <DialogBody>
                (여기에 폼 요소를 추가할 수 있습니다)
            </DialogBody>
            <DialogFooter>
              <ButtonGroup layout={layout}>
                {layout === "single-fill" ? (
                  <Button className="w-full">확인</Button>
                ) : (
                  <>
                    <DialogClose asChild>
                      <Button appearance="text" variant="secondary">취소</Button>
                    </DialogClose>
                    <Button>저장</Button>
                  </>
                )}
              </ButtonGroup>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Playground>

      {/* 2. 코드 영역: bg-integra-gray-900 및 fs-14 적용 */}
      <div className="rounded-8 bg-integra-gray-900 p-20 overflow-x-auto font-mono fs-14 leading-24 text-white">
        <p className="text-integra-gray-500 mb-8">{"// 다이얼로그 구조 예시"}</p>
        <code className="block">
          &lt;Dialog&gt;<br/>
          &nbsp;&nbsp;&lt;DialogTrigger&gt;열기&lt;/DialogTrigger&gt;<br/>
          &nbsp;&nbsp;&lt;DialogContent&gt;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;...<br/>
          &nbsp;&nbsp;&lt;/DialogContent&gt;<br/>
          &lt;/Dialog&gt;
        </code>
      </div>
    </Card>
  )
}
