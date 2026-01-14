"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Sidebar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const pathname = usePathname();

  const sections = [
    {
      title: "시작하기",
      items: [
        { name: "소개", href: "/docs" },
        { name: "설치하기", href: "/docs/installation" },
      ],
    },
    {
      title: "Foundations",
      items: [
        { name: "Design Tokens", href: "/docs/foundations/design-tokens" },
        { name: "Colors", href: "/docs/foundations/colors" },
        { name: "Typography", href: "/docs/foundations/typography" },
      ],
    },
    {
      title: "Components",
      items: [
        "button", "input", "textarea", "label", "checkbox", 
        "badge", "switch", "select", "accordion", "tabs", 
        "dialog", "popover", "tooltip", "toast", "skeleton", 
        "breadcrumb", "table", "card" // ✨ 브레드크럼, 테이블 누락 없이 추가
      ].map(item => ({
        name: item.charAt(0).toUpperCase() + item.slice(1),
        href: `/docs/components/${item}`
      })),
    },
  ];

  return (
    <div className={cn("relative w-280 border-r min-h-screen bg-white", className)}>
      <div className="sticky top-56 h-[calc(100vh-56px)] overflow-y-auto scrollbar-hide mask-dissolve py-32 px-24">
        <div className="space-y-32 pb-48">
          {sections.map((section) => (
            <div key={section.title} className="space-y-8">
              {/* 섹션 타이틀 규격 유지: fs-12 font-semibold text-integra-gray-500 */}
              <h2 className="px-8 fs-12 font-semibold tracking-2 text-integra-gray-500">
                {section.title}
              </h2>
              <div>
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "group flex w-full items-center rounded-8 px-8 py-8 fs-14 transition-all font-medium",
                        // ✨ 사용자 활성화 규격 유지: bg-integra-gray-50
                        isActive 
                          ? "bg-integra-gray-50 text-integra-gray-900"
                          : "text-integra-gray-900 hover:bg-integra-gray-50"
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}