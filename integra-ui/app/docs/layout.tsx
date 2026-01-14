import { Sidebar } from "@/components/layout/sidebar";
import { TableOfContents } from "@/components/layout/toc";

/**
 * [Integra UI - Docs Layout SAI Version]
 * 3컬럼 레이아웃을 구성하며, 중앙 본문의 가독성을 위해 너비를 720px로 엄격히 제한합니다.
 * 모든 보더와 간격은 Integra 전용 아토믹 토큰을 사용합니다.
 */
export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full bg-white">
      {/* 
        1. 좌측 사이드바 
        w-280: 280px 고정 너비
        border-integra-gray-100: 시스템 표준 구분선
      */}
      <aside className="hidden lg:block w-280 shrink-0 border-r border-integra-gray-100 sticky top-56 h-[calc(100vh-56px)] bg-white">
        <Sidebar />
      </aside>

      {/* 
        2. 중앙 본문 영역 
        max-w-720: 가독성 최적화를 위한 본문 너비 제한
        py-80, px-64: 4px 그리드 기반의 여유로운 여백
      */}
      <main className="flex-1 min-w-0">
        <div className="mx-auto max-w-720 px-24 py-48 md:px-48 md:py-80 lg:px-64">
          {children}
        </div>
      </main>

      {/* 
        3. 우측 TOC (Table of Contents)
        w-240: 240px 고정 너비
        border-integra-gray-100: 시스템 표준 구분선
      */}
      <aside className="hidden xl:block w-240 shrink-0 sticky top-56 h-[calc(100vh-56px)] overflow-y-auto px-24 border-l border-integra-gray-100 bg-white">
        <TableOfContents />
      </aside>
    </div>
  );
}