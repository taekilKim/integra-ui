"use client"

import * as React from "react"
import { usePathname } from "next/navigation" // ✨ 추가
import { cn } from "@/lib/utils"

export function TableOfContents() {
  const pathname = usePathname() // ✨ 현재 경로 감시
  const [activeId, setActiveId] = React.useState<string>("");
  const [headings, setHeadings] = React.useState<{ id: string, text: string, level: number }[]>([]);

  React.useEffect(() => {
    // 페이지 이동 시 목차 데이터를 새로 추출하는 함수
    const updateHeadings = () => {
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

      // 스크롤 감지 로직 재설정
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveId(entry.target.id);
          });
        },
        { rootMargin: "0% 0% -80% 0%" }
      );

      elements.forEach((el) => observer.observe(el));
      return observer;
    };

    const observer = updateHeadings();
    return () => observer.disconnect();
  }, [pathname]); // ✨ 경로가 바뀔 때마다 다시 실행

  if (headings.length === 0) return null;

  return (
    <div className="space-y-16 py-32">
      <p className="fs-12 font-bold tracking-2 text-integra-gray-900 px-8">
        On This Page
      </p>
      <div className="space-y-4">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={cn(
              "block px-8 py-4 fs-13 transition-all border-l-2",
              heading.level === 3 ? "pl-20" : "pl-8",
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