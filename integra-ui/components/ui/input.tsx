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
          // [Base Layout] h-40, rounded-8, px-12, py-8: 4px 그리드 준수
          "flex h-40 w-full rounded-8 border px-12 py-8 transition-all tracking-0 leading-24",
          
          // [Colors & Typography] SAI 원칙 적용
          // fs-14: 수치형 폰트 토큰
          // border-integra-gray-200: 표준 경계선 색상
          "fs-14 border-integra-gray-200 bg-white text-integra-gray-900",
          
          // [File Input Styling]
          "file:border-0 file:bg-transparent file:fs-14 file:font-medium file:text-integra-gray-900",
          
          // [Placeholder]
          "placeholder:text-integra-gray-400",
          
          // [States] focus 시 브랜드 컬러(primary) 링 적용
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          
          // [Disabled] 비활성 시 배경색 gray-50 적용하여 시각적 구분
          "disabled:cursor-not-allowed disabled:bg-integra-gray-50 disabled:text-integra-gray-400 disabled:opacity-100",
          
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