import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

export const metadata: Metadata = {
  title: "Integra UI | 한국형 아토믹 디자인 시스템",
  description: "한국 메이커를 위한 가장 직관적인 아토믹 디자인 시스템 가이드입니다.",
  // ✨ 파비콘 및 아이콘 설정
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" }, // 구형 브라우저 및 기본 대응
      { url: "/icon.svg", type: "image/svg+xml" }, // 최신 브라우저 고해상도 대응
    ],
    apple: "/icon.svg", // 애플 기기 홈 화면 아이콘 대응
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
        {/* globals.css에서 Pretendard를 @import로 불러오므로 여기서는 추가 설정이 필요 없습니다. */}
      </head>
      {/* 
         - font-sans: Pretendard 적용
         - bg-white: Integra 기본 배경색
         - text-integra-gray-900: Integra 기본 글자색
      */}
      <body className="font-sans antialiased min-h-screen flex flex-col bg-white text-integra-gray-900">
        
        {/* 상단 헤더 섹션 */}
        <Header />
        
        {/* 메인 콘텐츠 영역: flex-1로 남은 공간 전체 차지 */}
        <main className="flex-1">
          {children}
        </main>

        {/* 전역 토스트 알림 컨테이너 */}
        <Toaster />
        
      </body>
    </html>
  );
}