import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          // 기본 스타일: 높이 40px, 둥근 모서리, 배경색, 테두리
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
          // 파일 업로드 스타일
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
          // 플레이스홀더 색상
          "placeholder:text-muted-foreground",
          // 포커스(클릭) 했을 때 테두리 링 효과 (접근성 핵심)
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          // 비활성화 상태 스타일
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }