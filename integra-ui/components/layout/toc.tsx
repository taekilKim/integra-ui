"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

/**
 * [Integra UI - TableOfContents SAI Version]
 * 본문의 h2, h3 제목을 추적하여 목차를 생성합니다.
 * ✨ Fix: Radix Accordion 등 컴포넌트 내부의 h3가 목차에 잡히는 문제를 해결했습니다.
 */
export function TableOfContents() {
  const pathname = usePathname()
  const [activeId, setActiveId] = React.useState<string>("");
  const [headings, setHeadings] = React.useState<{ id: string, text: string, level: number }[]>([]);

  React.useEffect(() => {
    const updateHeadings = () => {
      // 1. 문서 본문 영역 내의 h2, h3만 선택
      const rawElements = Array.from(document.querySelectorAll("[data-docs-content] h2, [data-docs-content] h3"));
      
      // ✨ 2. 필터링: 버튼을 포함한 헤더(Accordion 등)나 제외 속성이 있는 요소 제거
      const elements = rawElements.filter((el) => {
        // 내부에 button 태그가 있으면(예: Accordion Trigger) 목차에서 제외
        if (el.querySelector("button")) return false;
        // 명시적으로 제외된 요소(data-toc-ignore) 제외
        if (el.closest("[data-toc-ignore]")) return false;
        return true;
      });

      const usedIds = new Set<string>();
      const headingData = elements.map((el, index) => {
        const text = el.textContent?.trim() || "";
        const baseId = el.id || text
          .normalize("NFKC")
          .toLowerCase()
          .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
          .replace(/^-+|-+$/g, "") || `section-${index + 1}`;
        let uniqueId = baseId;
        let duplicateIndex = 2;

        while (usedIds.has(uniqueId)) {
          uniqueId = `${baseId}-${duplicateIndex}`;
          duplicateIndex += 1;
        }

        usedIds.add(uniqueId);
        el.id = uniqueId;

        return {
          id: uniqueId,
          text,
          level: Number(el.tagName.replace("H", "")),
        };
      });
      setHeadings(headingData);

      // 스크롤 감지
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
    return () => observer?.disconnect();
  }, [pathname]);

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
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(heading.id)?.scrollIntoView({
                behavior: "smooth",
                block: "start"
              });
              setActiveId(heading.id); // 클릭 시 즉시 활성화
            }}
          >
            {heading.text}
          </a>
        ))}
      </div>
    </div>
  );
}
