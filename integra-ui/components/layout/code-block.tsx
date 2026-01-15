"use client"

import * as React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/**
 * [Integra UI - Docs Infrastructure]
 * 문서 사이트 전용 코드 하이라이터 컴포넌트입니다.
 * 사용자가 복사해가는 UI 컴포넌트가 아니므로 layout 폴더에서 관리합니다.
 */
export function CodeBlock({ code, language = "tsx", className }: { code: string; language?: string; className?: string }) {
  const [isCopied, setIsCopied] = React.useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <div className={cn("relative group rounded-12 overflow-hidden shadow-2xl border border-integra-gray-800", className)}>
      <Button
        appearance="text"
        variant="tertiary"
        size="small"
        className="absolute right-12 top-12 h-32 w-32 p-0 bg-white/5 hover:bg-white/10 text-white/50 hover:text-white opacity-0 group-hover:opacity-100 transition-all border border-white/10"
        onClick={copyToClipboard}
      >
        {isCopied ? <Check className="w-16 h-16" /> : <Copy className="w-16 h-16" />}
      </Button>

      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: "24px",
          fontSize: "14px",
          lineHeight: "24px",
          backgroundColor: "#111827", // integra-gray-900
          fontFamily: "var(--font-mono)",
        }}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  )
}