// components/layout/sidebar.tsx
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

        {/* 그룹 2: 컴포넌트 */}
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            컴포넌트
          </h2>
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