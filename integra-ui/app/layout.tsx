import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster" //

export const metadata: Metadata = {
  title: "Integra UI",
  description: "한국형 오픈소스 디자인 시스템",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head></head>
      {/* ThemeProvider 제거, min-h-screen 등 레이아웃 클래스는 유지 */}
      <body className="font-['Pretendard'] antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}