import { Sidebar } from "@/components/layout/sidebar";
import { TableOfContents } from "@/components/layout/toc";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full bg-white">
      {/* 좌측 사이드바 */}
      <aside className="hidden lg:block sticky top-56 h-[calc(100vh-56px)] overflow-y-auto border-r">
        <Sidebar />
      </aside>

      {/* 중앙 본문 */}
      <main className="flex-1 w-full p-24 md:p-48 lg:p-64 max-w-1000 mx-auto">
        {children}
      </main>

      {/* 우측 TOC */}
      <aside className="hidden xl:block w-240 sticky top-56 h-[calc(100vh-56px)] px-24">
        <TableOfContents />
      </aside>
    </div>
  );
}