// app/docs/layout.tsx
import { Sidebar } from "@/components/layout/sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* 왼쪽: 사이드바 (모바일에서는 숨김 처리하거나 나중에 조정 가능) */}
      <aside className="hidden md:block">
        <Sidebar />
      </aside>

      {/* 오른쪽: 실제 문서 내용 */}
      <div className="flex-1 lg:max-w-3xl px-6 py-6 md:px-10 md:py-10">
        {children}
      </div>
    </div>
  );
}