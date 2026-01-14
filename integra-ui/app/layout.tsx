import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

export const metadata: Metadata = {
  title: "Integra UI | 한국형 아토믹 디자인 시스템",
  description: "한국 메이커를 위한 가장 직관적인 아토믹 디자인 시스템 가이드입니다.",
  // 파비콘 및 아이콘 설정
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        {/* globals.css에서 Pretendard를 @import로 불러오므로 추가 설정은 생략합니다. */}
      </head>
      {/* 
         [SAI Standard Body]
         - font-sans: Pretendard 폰트 패밀리 적용
         - fs-16, leading-24: 전역 기본 폰트 크기(16px) 및 행간(24px, 1.5em) 적용
         - text-integra-gray-900: 시스템 표준 기본 텍스트 컬러
         - bg-white: 시스템 표준 배경색
      */}
      <body className="font-sans antialiased min-h-screen flex flex-col bg-white text-integra-gray-900 fs-16 leading-24 tracking-0">
        
        {/* 상단 전역 헤더 */}
        <Header />
        
        {/* 메인 콘텐츠 래퍼 */}
        <main className="flex-1">
          {children}
        </main>

        {/* 전역 토스트 시스템 */}
        <Toaster />
        
      </body>
    </html>
  );
}