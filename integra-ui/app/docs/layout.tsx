import { Sidebar } from "@/components/layout/sidebar";
import { TableOfContents } from "@/components/layout/toc";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full bg-white">
      {/* 1. 좌측 사이드바 */}
      <aside className="hidden lg:block w-280 shrink-0 border-r sticky top-56 h-[calc(100vh-56px)]">
        <Sidebar />
      </aside>

      {/* 2. 중앙 본문 영역 (너비 720px 제한 및 중앙 정렬) */}
      <main className="flex-1 min-w-0">
        <div className="mx-auto max-w-960 px-24 py-48 md:px-48 md:py-80 lg:px-64">
          {children}
        </div>
      </main>

      {/* 3. 우측 TOC (화면이 클 때만 노출) */}
      <aside className="hidden xl:block w-240 shrink-0 sticky top-56 h-[calc(100vh-56px)] overflow-y-auto px-24 border-l border-slate-50">
        <TableOfContents />
      </aside>
    </div>
  );
}