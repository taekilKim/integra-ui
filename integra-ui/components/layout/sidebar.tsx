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
        "button", "item", "input", "textarea", "label", "checkbox", 
        "badge", "switch", "toggle", "select", "accordion", "tabs", 
        "dialog", "popover", "dropdown-menu", "tooltip", "alert", "toast", 
        "skeleton", "avatar", "breadcrumb", "table", "radio-group", "card"
      ].map(item => ({
        // 하이픈 제거 및 첫 글자 대문자화 (예: radio-group -> Radio Group)
        name: item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        href: `/docs/components/${item}`
      })),
    },
  ];

  return (
    <div className={cn("relative w-280 border-r border-integra-gray-100 min-h-screen bg-white", className)}>
      <div className="sticky top-56 h-[calc(100vh-56px)] overflow-y-auto scrollbar-hide mask-dissolve py-32 px-24">
        <div className="space-y-32 pb-48">
          {sections.map((section) => (
            <div key={section.title} className="space-y-8">
              <h2 className="px-8 fs-12 font-semibold tracking-2 text-integra-gray-500 uppercase">
                {section.title}
              </h2>
              <div className="flex flex-col gap-4">
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "group flex w-full items-center rounded-8 px-8 py-8 fs-14 transition-all font-medium",
                        isActive 
                          ? "bg-integra-gray-50 text-integra-gray-900"
                          : "text-integra-gray-600 hover:bg-integra-gray-50 hover:text-integra-gray-900"
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