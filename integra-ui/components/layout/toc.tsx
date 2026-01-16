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
      // 1. main 영역 내의 h2, h3만 선택
      const rawElements = Array.from(document.querySelectorAll("main h2, main h3"));
      
      // ✨ 2. 필터링: 버튼을 포함한 헤더(Accordion 등)나 제외 속성이 있는 요소 제거
      const elements = rawElements.filter((el) => {
        // 내부에 button 태그가 있으면(예: Accordion Trigger) 목차에서 제외
        if (el.querySelector("button")) return false;
        // 명시적으로 제외된 요소(data-toc-ignore) 제외
        if (el.closest("[data-toc-ignore]")) return false;
        return true;
      });

      const headingData = elements.map((el) => {
        if (!el.id) {
          // ID가 없으면 텍스트 내용을 기반으로 생성 (공백 -> 하이픈)
          el.id = el.textContent?.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-") || "";
        }
        return {
          id: el.id,
          text: el.textContent || "",
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
              document.querySelector(`#${heading.id}`)?.scrollIntoView({
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