import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

/**
 * [Integra UI - Header SAI Version]
 * 전역 내비게이션을 담당하는 컴포넌트입니다.
 * 모든 수치는 4px/2px 그리드 시스템을 준수하며, 임의의 투명도 사용을 배제합니다.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-integra-gray-100 bg-white backdrop-blur h-56">
      {/* px-20, md:px-32: 4px 그리드 기반 좌우 여백 적용 */}
      <div className="flex h-56 items-center w-full px-20 md:px-32">
        
        {/* 왼쪽 영역: 로고 및 메인 메뉴 */}
        <div className="flex items-center">
          <Link href="/" className="mr-32 flex items-center gap-12 group">
            {/* 로고 이미지: 24px 정정사각형 규격 */}
            <div className="relative w-24 h-24 transition-all">
              <Image
                src="/integraui-logo.svg"
                alt="Integra UI"
                fill
                priority
              />
            </div>
            {/* 
               Integra UI 로고 텍스트 
               - fs-16: 사용자 지정 규격 적용
               - tracking--4: 대문자/제목용 타이포그래피 보정
            */}
            <span className="font-bold fs-16 tracking--4 text-integra-gray-900 leading-none group-hover:text-primary transition-colors">
              Integra UI
            </span>
          </Link>
          
          {/* 네비게이션 메뉴: gap-24 (24px) 간격 및 전용 그레이 토큰 적용 */}
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

        {/* 오른쪽 영역: 액션 버튼 그룹 */}
        <div className="flex flex-1 items-center justify-end">
          <nav className="flex items-center gap-8">
            {/* 깃허브 링크: tertiary 변형 사용 */}
            <Link href="https://github.com" target="_blank" rel="noreferrer">
              <Button appearance="default" variant="tertiary" size="small">
                GitHub
              </Button>
            </Link>
            {/* 시작하기 버튼: shadow-integra로 입체감 부여 */}
            <Link href="/docs/installation">
              <Button appearance="default" variant="default" size="small" className="shadow-integra">
                Get Started
              </Button>
            </Link>
          </nav>
        </div>

      </div>
    </header>
  );
}