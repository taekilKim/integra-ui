import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur h-56">
      {/* h-56: 56px 높이, px-20/md:px-32: 좌우 여백 20px/32px */}
      <div className="flex h-56 items-center w-full px-20 md:px-32">
        
        {/* 왼쪽 영역: 로고 및 메인 메뉴 */}
        <div className="mr-16 flex items-center">
          <Link href="/" className="mr-32 flex items-center">
            {/* text-20: 20px 폰트, tracking--2: 자간 -0.02em */}
            <span className="font-bold text-20 tracking--2 text-primary">
              Integra UI
            </span>
          </Link>
          
          {/* 네비게이션 메뉴: space-x-24: 메뉴 간격 24px */}
          <nav className="hidden md:flex items-center space-x-24 text-14 font-medium">
            <Link 
              href="/docs" 
              className="transition-colors hover:text-primary text-slate-500"
            >
              문서
            </Link>
            <Link 
              href="/docs/foundations/design-tokens" 
              className="transition-colors hover:text-primary text-slate-500"
            >
              Foundations
            </Link>
            {/* ✨ 다시 추가된 Components 링크 */}
            <Link 
              href="/docs/components/button" 
              className="transition-colors hover:text-primary text-slate-500"
            >
              Components
            </Link>
          </nav>
        </div>

        {/* 오른쪽 영역: 유틸리티 버튼 */}
        <div className="flex flex-1 items-center justify-end">
          <nav className="flex items-center gap-8">
            <Link href="https://github.com" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="sm" className="h-32 px-12 text-14">
                GitHub
              </Button>
            </Link>
            <Link href="/docs/installation">
              <Button size="sm" className="h-32 px-12 text-14 shadow-integra">
                Get Started
              </Button>
            </Link>
          </nav>
        </div>

      </div>
    </header>
  );
}