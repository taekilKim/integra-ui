import type { Metadata } from "next";
import "./globals.css"; // 이 파일에서 Pretendard를 @import로 불러옵니다.

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
      {/* 
        <head> 태그 안에는 이제 Pretendard CDN 링크가 없습니다.
        globals.css에서 @import로 불러오기 때문에 여기서는 필요 없어요.
        만약 나중에 다른 외부 폰트나 CSS를 불러온다면 여기에 추가할 수 있습니다.
      */}
      <head>
        {/* head 태그는 비워두거나, 다른 메타 태그 등을 추가할 수 있습니다. */}
      </head>
      
      {/* 
        body에는 Tailwind의 `font-['Pretendard']` 클래스를 유지하여
        Pretendard 폰트가 HTML 전체에 적용되도록 합니다.
      */}
      <body className="font-['Pretendard'] antialiased">
        {children}
      </body>
    </html>
  );
}