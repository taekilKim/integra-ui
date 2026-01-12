import type { Metadata } from "next";
import { Header } from "@/components/layout/header"; // ✨ 헤더 컴포넌트 불러오기
import "./globals.css";

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
      <head>
        {/* globals.css에서 폰트를 불러오므로 여기는 비워둡니다. */}
      </head>
      
      {/* 
         ✨ 수정됨: 
         1. min-h-screen flex flex-col: 전체 화면을 꽉 채우고 세로 정렬
         2. Header 추가: 모든 페이지 상단에 고정
         3. main: 본문 내용이 남은 공간을 차지하도록 flex-1 설정
      */}
      <body className="font-['Pretendard'] antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}