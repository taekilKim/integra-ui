import { cn } from "@/lib/utils";

/**
 * [Integra UI - Playground SAI Version]
 * 모든 컴포넌트 데모의 프리뷰 영역을 담당하는 표준 컨테이너입니다.
 * 배경색, 테두리, 최소 높이 등 모든 스타일을 여기서 중앙 제어합니다.
 */
export function Playground({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  return (
    <div 
      className={cn(
        "min-h-200 flex items-center justify-center rounded-12 border border-dashed p-24",
        "border-integra-gray-200 bg-white", // ✨ 배경색을 white로 변경
        className
      )}
    >
      {children}
    </div>
  );
}