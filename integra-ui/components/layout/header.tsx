// components/layout/header.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* 
        Container 삭제됨 -> w-full로 화면 꽉 차게 변경
        px-4 md:px-8로 좌우 여백 확보 
      */}
      <div className="flex h-14 items-center w-full px-4 md:px-8">
        
        {/* 왼쪽: 로고 & 메뉴 */}
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl tracking-tight">
              Integra UI
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/docs"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              문서
            </Link>
            <Link
              href="/docs/foundations/design-tokens"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Foundations
            </Link>
            <Link
              href="/docs/components/button"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Components
            </Link>
          </nav>
        </div>

        {/* 오른쪽: GitHub 버튼 (토글 삭제됨) */}
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center gap-2">
            <Link href="https://github.com" target="_blank" rel="noreferrer">
                <Button variant="ghost" size="sm">
                    GitHub
                </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}