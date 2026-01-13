import { Sidebar } from "@/components/layout/sidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full">
      {/* 왼쪽 사이드바 고정 */}
      <aside className="hidden md:block sticky top-56 h-[calc(100vh-56px)] overflow-y-auto">
        <Sidebar />
      </aside>

      {/* 오른쪽 본문 영역 */}
      <main className="flex-1 w-full p-24 md:p-48 lg:p-64 max-w-1200">
        <div className="mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}