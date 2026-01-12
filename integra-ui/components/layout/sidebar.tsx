import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12 w-64 border-r min-h-screen", className)}>
      <div className="space-y-4 py-4">
        
        {/* 그룹 1: 시작하기 */}
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            시작하기
          </h2>
          <div className="space-y-1">
            <Link href="/docs">
              <Button variant="ghost" className="w-full justify-start">
                소개 (Introduction)
              </Button>
            </Link>
            <Link href="/docs/installation">
              <Button variant="ghost" className="w-full justify-start">
                설치하기
              </Button>
            </Link>
          </div>
        </div>

        {/* 그룹 2: Foundations */}
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Foundations
          </h2>
          <div className="space-y-1">
            <Link href="/docs/foundations/design-tokens">
              {/* bg-primary/5, text-primary 등 강제 스타일 제거 */}
              <Button variant="ghost" className="w-full justify-start">
                Design Tokens (토큰)
              </Button>
            </Link>
          </div>
        </div>

        // components/layout/sidebar.tsx (일부)

        {/* 그룹 3: 컴포넌트 */}
        <div className="px-3 py-2">
          {/* ... */}
          <div className="space-y-1">
            <Link href="/docs/components/button">
              <Button variant="ghost" className="w-full justify-start">
                Button (버튼)
              </Button>
            </Link>
            <Link href="/docs/components/input">
              <Button variant="ghost" className="w-full justify-start">
                Input (입력창)
              </Button>
            </Link>
            <Link href="/docs/components/label">
              <Button variant="ghost" className="w-full justify-start">
                Label (라벨)
              </Button>
            </Link>
            <Link href="/docs/components/checkbox">
              <Button variant="ghost" className="w-full justify-start">
                Checkbox (체크박스)
              </Button>
            </Link>
            
            {/* ✨ 신규 추가된 컴포넌트 */}
            <Link href="/docs/components/badge">
              <Button variant="ghost" className="w-full justify-start">
                Badge (뱃지)
              </Button>
            </Link>
            <Link href="/docs/components/switch">
              <Button variant="ghost" className="w-full justify-start">
                Switch (스위치)
              </Button>
            </Link>
            
            <Link href="/docs/components/card">
              <Button variant="ghost" className="w-full justify-start">
                Card (카드)
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}