import { cn } from "@/lib/utils"

/**
 * [Integra UI - Skeleton SAI Version]
 * 콘텐츠 로딩 시 플레이스홀더로 사용되는 아토믹 컴포넌트입니다.
 * bg-integra-gray-100 토큰과 animate-pulse 애니메이션을 결합하여 사용합니다.
 */
function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        // [Base] SAI 원칙: 전용 컬러 토큰 및 4px 그리드 곡률(rounded-8) 적용
        "animate-pulse rounded-8 bg-integra-gray-100",
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }