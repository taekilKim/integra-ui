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
        "dialog", "popover", "tooltip", "toast", "skeleton", "card"
      ].map(item => ({
        name: item.charAt(0).toUpperCase() + item.slice(1),
        href: `/docs/components/${item}`
      })),
    },
  ];

  return (
    <div className={cn("pb-48 w-280 border-r min-h-screen bg-white", className)}>
      <div className="space-y-24 py-32 px-24">
        {sections.map((section) => (
          <div key={section.title} className="space-y-12">
            <h2 className="px-8 text-12 font-bold uppercase tracking-2 text-slate-400">
              {section.title}
            </h2>
            <div className="space-y-4">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "group flex w-full items-center rounded-8 px-12 py-8 text-14 font-medium transition-colors",
                      isActive 
                        ? "bg-primary/10 text-primary" 
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
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
  );
}