"use client"

import * as React from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card } from "@/components/ui/card"
import { Playground } from "@/components/layout/playground"
import { Info, AlertTriangle, CheckCircle, XCircle } from "lucide-react"

export function AlertDemo() {
  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-960 mx-auto border border-integra-gray-200 shadow-integra rounded-16 bg-white">
      <Playground className="flex-col items-start gap-24">
        
        {/* Default */}
        <Alert variant="default">
          <Info />
          <AlertTitle>Information</AlertTitle>
          <AlertDescription>This is a standard informational message.</AlertDescription>
        </Alert>

        {/* Success */}
        <Alert variant="success">
          <CheckCircle />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>Your changes have been saved successfully.</AlertDescription>
        </Alert>

        {/* Warning */}
        <Alert variant="warning">
          <AlertTriangle />
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>Your session is about to expire.</AlertDescription>
        </Alert>

        {/* Destructive */}
        <Alert variant="destructive">
          <XCircle />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>Failed to upload the file.</AlertDescription>
        </Alert>

      </Playground>
    </Card>
  )
}