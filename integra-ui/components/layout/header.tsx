// components/layout/header.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    // 스크롤 해도 상단에 붙어있게(sticky) 하고, 배경을 흐리게(backdrop-blur) 처리
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        
        {/* 왼쪽: 로고 */}
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            {/* 로고 아이콘 대신 텍스트로 대체 */}
            <span className="font-bold text-xl tracking-tight">
              Integra UI
            </span>
          </Link>
          
          {/* 데스크탑용 메뉴 */}
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/docs"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              문서 (Docs)
            </Link>
            <Link
              href="/docs/components/button"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              컴포넌트
            </Link>
          </nav>
        </div>

        {/* 오른쪽: 버튼들 (GitHub 링크 등) */}
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            {/* 깃허브 링크 예시 (나중에 실제 주소로 연결) */}
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