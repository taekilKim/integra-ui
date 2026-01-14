"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/**
 * [Integra UI - Sidebar SAI Version]
 * 문서 내비게이션을 담당하는 컴포넌트입니다.
 * 모든 수치는 4px/2px 그리드 시스템을 준수하며, 
 * 활성화(Active) 상태는 bg-integra-gray-50 토큰으로 시각화합니다.
 */
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
        "breadcrumb", "table", "card"
      ].map(item => ({
        // 첫 글자 대문자화 및 특수 케이스 처리
        name: item.charAt(0).toUpperCase() + item.slice(1),
        href: `/docs/components/${item}`
      })),
    },
  ];

  return (
    <div className={cn("relative w-280 border-r border-integra-gray-100 min-h-screen bg-white", className)}>
      {/* 
         - h-[calc(100vh-56px)]: 헤더 높이 제외 전체 높이
         - scrollbar-hide: 스크롤바 숨김 유틸리티 적용
         - mask-dissolve: 상하단 디졸브 효과 적용
      */}
      <div className="sticky top-56 h-[calc(100vh-56px)] overflow-y-auto scrollbar-hide mask-dissolve py-32 px-24">
        <div className="space-y-32 pb-48">
          {sections.map((section) => (
            <div key={section.title} className="space-y-8">
              {/* 섹션 타이틀: fs-12 및 전용 그레이 토큰 적용 */}
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
                        // [Base Layout] rounded-8, px-8, py-8: 아토믹 간격 준수
                        "group flex w-full items-center rounded-8 px-8 py-8 fs-14 transition-all font-medium",
                        // [States] 
                        // Active: bg-integra-gray-50
                        // Default: text-integra-gray-900
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