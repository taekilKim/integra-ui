"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export function TableOfContents() {
  const [activeId, setActiveId] = React.useState<string>("");

  // 페이지의 h2, h3 태그들을 찾아 목록 생성
  const [headings, setHeadings] = React.useState<{ id: string, text: string, level: number }[]>([]);

  React.useEffect(() => {
    // 본문 내의 모든 h2, h3를 찾아 ID 부여 및 데이터 추출
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

    // 스크롤 감지 로직
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
      <p className="text-12 font-bold uppercase tracking-2 text-slate-900 px-8">
        On This Page
      </p>
      <div className="space-y-4">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={cn(
              "block px-8 py-4 text-13 transition-colors border-l-2",
              heading.level === 3 ? "pl-20" : "pl-8",
              activeId === heading.id
                ? "text-primary border-primary font-medium"
                : "text-slate-500 border-transparent hover:text-slate-900"
            )}
          >
            {heading.text}
          </a>
        ))}
      </div>
    </div>
  );
}