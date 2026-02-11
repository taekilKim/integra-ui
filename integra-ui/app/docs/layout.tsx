import { Sidebar } from "@/components/layout/sidebar";
import { TableOfContents } from "@/components/layout/toc";
import { DocsContentExtensions } from "@/components/layout/docs-content-extensions";

/**
 * [Integra UI - Docs Layout SAI Version]
 * 3컬럼 레이아웃 시스템입니다. 
 * 중앙 본문의 너비를 960px로 확장하여 플레이그라운드 카드와 일치시켰습니다.
 */
export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full bg-white">
      {/* 
        1. 좌측 사이드바 
        - w-280: 280px 고정 너비 (SAI 수치 토큰)
        - border-integra-gray-100: 시스템 표준 경계선
      */}
      <aside className="hidden lg:block w-280 shrink-0 border-r border-integra-gray-100 sticky top-56 h-[calc(100vh-56px)] bg-white">
        <Sidebar />
      </aside>

      {/* 
        2. 중앙 본문 영역 
        - max-w-960: 플레이그라운드 카드 규격과 1:1 대응 (720px에서 상향 조정)
        - mx-auto: 중앙 정렬
        - py-80, px-64: 4px 그리드 기반의 최적화된 여백
      */}
      <main className="flex-1 min-w-0">
        <div className="mx-auto max-w-960 px-24 py-48 md:px-48 md:py-80 lg:px-64">
          {children}
          <DocsContentExtensions />
        </div>
      </main>

      {/* 
        3. 우측 TOC (Table of Contents)
        - w-240: 240px 고정 너비
        - border-integra-gray-100: 시스템 표준 경계선
      */}
      <aside className="hidden xl:block w-240 shrink-0 sticky top-56 h-[calc(100vh-56px)] overflow-y-auto px-24 border-l border-integra-gray-100 bg-white">
        <TableOfContents />
      </aside>
    </div>
  );
}
