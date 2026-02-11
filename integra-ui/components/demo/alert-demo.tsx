"use client"

import * as React from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card } from "@/components/ui/card"
import { Playground } from "@/components/layout/playground"
import { Info, Warning, CheckCircle, XCircle } from "@phosphor-icons/react"

export function AlertDemo() {
  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-960 mx-auto border border-integra-gray-200 shadow-integra rounded-16 bg-white">
      <Playground className="flex-col items-start gap-24">
        
        {/* Default */}
        <Alert variant="default">
          <Info />
          <AlertTitle>안내</AlertTitle>
          <AlertDescription>새로운 버전의 업데이트가 준비되었습니다.</AlertDescription>
        </Alert>

        {/* Success */}
        <Alert variant="success">
          <CheckCircle />
          <AlertTitle>성공</AlertTitle>
          <AlertDescription>변경 사항이 성공적으로 저장되었습니다.</AlertDescription>
        </Alert>

        {/* Warning */}
        <Alert variant="warning">
          <Warning />
          <AlertTitle>주의</AlertTitle>
          <AlertDescription>세션이 곧 만료됩니다. 작업을 저장해주세요.</AlertDescription>
        </Alert>

        {/* Destructive */}
        <Alert variant="destructive">
          <XCircle />
          <AlertTitle>오류</AlertTitle>
          <AlertDescription>파일 업로드에 실패했습니다. 네트워크를 확인해주세요.</AlertDescription>
        </Alert>

      </Playground>
    </Card>
  )
}