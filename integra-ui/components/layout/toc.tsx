"use client"

import { cn } from "@/lib/utils";

export function TableOfContents() {
  // 실제로는 h2, h3 태그를 파싱해야 하지만, 현재는 구조적 가이드만 제공합니다.
  const items = [
    { title: "Introduction", href: "#introduction" },
    { title: "Usage", href: "#usage" },
    { title: "Atomic Design Note", href: "#atomic-design-note" },
    { title: "Props", href: "#props" },
  ];

  return (
    <div className="space-y-16 py-32">
      <p className="text-12 font-bold uppercase tracking-2 text-slate-900 px-8">
        On This Page
      </p>
      <div className="space-y-8">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="block px-8 py-4 text-13 text-slate-500 hover:text-primary transition-colors border-l border-transparent hover:border-primary/30"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
}