"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * [Integra UI - TableOfContents SAI Version]
 * 본문의 h2, h3 제목을 실시간으로 추적하여 내비게이션 목차를 생성합니다.
 * 모든 수치는 4px/2px 그리드 시스템을 준수하며 SAI 전용 토큰을 사용합니다.
 */
export function TableOfContents() {
  const [activeId, setActiveId] = React.useState<string>("");
  const [headings, setHeadings] = React.useState<{ id: string, text: string, level: number }[]>([]);

  React.useEffect(() => {
    // 본문 내의 제목 요소들을 찾아 데이터 추출
    const elements = Array.from(document.querySelectorAll("h2, h3"));
    const headingData = elements.map((el) => {
      if (!el.id) {
        el.id = el.textContent?.toLowerCase().replace(/\s+/g, "-") || "";
      }
      return {
        id: el.id,
        text: el.textContent || "",
        level: Number(el.tagName.replace("H", "")),
      };
    });
    setHeadings(headingData);

    // 현재 스크롤 위치에 따른 활성 제목 감지 (IntersectionObserver)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "0% 0% -80% 0%" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <div className="space-y-16 py-32">
      {/* 
         On This Page 레이블 
         - fs-12, font-bold, tracking-2
         - text-integra-gray-900: SAI 전용 토큰 적용
      */}
      <p className="fs-12 font-bold tracking-2 text-integra-gray-900 px-8">
        On This Page
      </p>
      
      <div className="space-y-4">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={cn(
              // [Layout] px-8, py-4, fs-13: 아토믹 규격 준수
              "block px-8 py-4 fs-13 transition-all border-l-2",
              // 계층 구조에 따른 왼쪽 패딩 차등 부여 (2px scale: 20px / 8px)
              heading.level === 3 ? "pl-20" : "pl-8",
              // [States] Active 시 브랜드 컬러 및 보더 강조
              activeId === heading.id
                ? "text-primary border-primary font-medium"
                : "text-integra-gray-500 border-transparent hover:text-integra-gray-900"
            )}
          >
            {heading.text}
          </a>
        ))}
      </div>
    </div>
  );
}