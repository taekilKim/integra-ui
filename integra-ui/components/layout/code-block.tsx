import * as React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/**
 * [Integra UI - CodeBlock SAI Version]
 * 문서용 코드 하이라이터입니다. 모든 스타일은 SAI 토큰을 따릅니다.
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
        variant="secondary"
        size="small"
        className="absolute right-12 top-12 h-32 w-32 p-0 text-integra-gray-400 hover:bg-white/10 hover:text-white opacity-0 group-hover:opacity-100 transition-all"
        onClick={copyToClipboard}
      >
        {isCopied ? <Check className="w-16 h-16" /> : <Copy className="w-16 h-16" />}
      </Button>

      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: "24px", // 4px 그리드 (24 = 6 * 4)
          fontSize: "14px", // fs-14 토큰을 직접 적용하거나, 여기에 맞춤
          lineHeight: "24px", // leading-24 토큰에 맞춤
          backgroundColor: "hsl(222 23% 13%)", // integra-gray-900 HSL 값 사용
          fontFamily: "var(--font-sans)", // Pretendard 기반 모노 스페이스 (필요하다면 별도 폰트 지정)
        }}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  )
}