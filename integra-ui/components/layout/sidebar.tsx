import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Sidebar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("pb-48 w-280 border-r min-h-screen", className)}>
      <div className="space-y-16 py-24">
        
        {/* 시작하기 */}
        <div className="px-12 py-8">
          <h2 className="mb-8 px-16 text-12 font-bold uppercase tracking-1 text-slate-400">시작하기</h2>
          <div className="space-y-4">
            <Link href="/docs">
              <Button variant="ghost" className="w-full justify-start h-36 px-16 text-14">소개</Button>
            </Link>
            <Link href="/docs/installation">
              <Button variant="ghost" className="w-full justify-start h-36 px-16 text-14">설치하기</Button>
            </Link>
          </div>
        </div>

        {/* Foundations (기초 자산) */}
        <div className="px-12 py-8">
          <h2 className="mb-8 px-16 text-12 font-bold uppercase tracking-1 text-slate-400">Foundations</h2>
          <div className="space-y-4">
            {/* 디자인 토큰 설명 페이지 */}
            <Link href="/docs/foundations/design-tokens">
              <Button variant="ghost" className="w-full justify-start h-36 px-16 text-14">Design Tokens</Button>
            </Link>
            {/* ✨ 신규 추가: 전용 컬러칩 페이지 */}
            <Link href="/docs/foundations/colors">
              <Button variant="ghost" className="w-full justify-start h-36 px-16 text-14">Colors (컬러칩)</Button>
            </Link>
          </div>
        </div>

        {/* Components (컴포넌트) */}
        <div className="px-12 py-8">
          <h2 className="mb-8 px-16 text-12 font-bold uppercase tracking-1 text-slate-400">Components</h2>
          <div className="space-y-4">
            {[
              "button", 
              "input", 
              "label", 
              "checkbox", 
              "badge", 
              "switch", 
              "select", 
              "textarea", 
              "dialog", 
              "card"
            ].map((item) => (
              <Link key={item} href={`/docs/components/${item}`}>
                <Button variant="ghost" className="w-full justify-start h-36 px-16 text-14 capitalize">
                  {item}
                </Button>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}