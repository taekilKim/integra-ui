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
        { name: "Overview", href: "/docs/foundations" },
        { name: "Design Tokens", href: "/docs/foundations/design-tokens" },
        { name: "Colors", href: "/docs/foundations/colors" },
        { name: "Typography", href: "/docs/foundations/typography" },
      ],
    },
    {
      title: "Components",
      items: [
        { name: "Overview", href: "/docs/components" },
        "button", "input", "select", "dialog", "item"
      ].map(item => typeof item === "string" ? ({
        name: item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        href: `/docs/components/${item}`
      }) : item),
    },
  ];

  return (
    <div className={cn("relative min-h-screen w-280 border-r border-line bg-surface-canvas", className)}>
      <div className="sticky top-56 h-[calc(100vh-56px)] overflow-y-auto scrollbar-hide mask-dissolve py-32 px-24">
        <div className="space-y-32 pb-48">
          {sections.map((section) => (
            <div key={section.title} className="space-y-8">
              <h2 className="px-8 fs-12 font-semibold tracking-2 text-content-tertiary uppercase">
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
                          ? "bg-primary-subtle text-primary-subtle-foreground"
                          : "text-content-secondary hover:bg-surface-subtle hover:text-content-primary"
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
