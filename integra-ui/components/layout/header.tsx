import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-integra-gray-100 bg-white/95 backdrop-blur h-56">
      {/* px-20, md:px-32: 4px 그리드 규격 준수 */}
      <div className="flex h-56 items-center w-full px-20 md:px-32">
        
        {/* 왼쪽 영역: 로고 및 메인 메뉴 */}
        <div className="flex items-center">
          <Link href="/" className="mr-32 flex items-center gap-4 group">
            {/* 로고 컨테이너 */}
            <div className="relative w-24 h-24 transition-all group-hover:opacity-70">
              <Image
                src="/integraui-logo.svg"
                alt="Integra UI"
                fill
                priority
              />
            </div>
            {/* fs-20, tracking--4: 수치형 폰트 토큰 적용 */}
            <span className="font-semibold fs-14 tracking--4 text-integra-gray-900 leading-none">
              Integra UI
            </span>
          </Link>
          
          {/* 네비게이션 메뉴: text-integra-gray-500 적용 */}
          <nav className="hidden md:flex items-center gap-24 fs-14 font-medium">
            <Link 
              href="/docs" 
              className="transition-colors hover:text-primary text-integra-gray-500"
            >
              문서
            </Link>
            <Link 
              href="/docs/foundations" 
              className="transition-colors hover:text-primary text-integra-gray-500"
            >
              Foundations
            </Link>
            <Link 
              href="/docs/components" 
              className="transition-colors hover:text-primary text-integra-gray-500"
            >
              Components
            </Link>
          </nav>
        </div>

        {/* 오른쪽 영역: 유틸리티 버튼 */}
        <div className="flex flex-1 items-center justify-end">
          <nav className="flex items-center gap-8">
            <Link href="https://github.com" target="_blank" rel="noreferrer">
              <Button variant="tertiary" size="small">
                GitHub
              </Button>
            </Link>
            <Link href="/docs/installation">
              {/* shadow-integra를 사용하여 일관된 깊이감 부여 */}
              <Button variant="default" size="small" className="shadow-integra">
                Get Started
              </Button>
            </Link>
          </nav>
        </div>

      </div>
    </header>
  );
}