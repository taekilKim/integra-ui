import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ArrowRight, Check, Copy, Layout, Palette, Terminal, Type } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. Hero Section: 메인 타이틀 영역 */}
      <section className="flex flex-col items-center justify-center pt-24 pb-32 text-center px-4 md:pt-32 md:pb-40">
        <div className="space-y-6 max-w-4xl mx-auto">
          {/* 버전 뱃지 */}
          <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-sm font-normal">
            🎉 Integra UI v1.0 is now available
          </Badge>
          
          {/* 메인 카피 */}
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            한국 메이커를 위한 <br className="hidden sm:inline" />
            <span className="text-primary">가장 직관적인 디자인 시스템</span>
          </h1>
          
          {/* 서브 카피 */}
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl leading-8">
            Pretendard 폰트 기본 탑재, 4px 그리드 시스템, 그리고 디자이너 친화적인 토큰 설계.
            복잡한 설정 없이 복사하여 바로 사용하세요.
          </p>

          {/* CTA 버튼들 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/docs">
              <Button size="lg" className="h-12 px-8 text-base gap-2 w-full sm:w-auto">
                문서 보러가기 <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="https://github.com" target="_blank">
              <Button size="lg" variant="outline" className="h-12 px-8 text-base w-full sm:w-auto">
                GitHub에서 보기
              </Button>
            </Link>
          </div>
        </div>
      </section>


      {/* 2. Feature Grid: 핵심 특징 3가지 */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">왜 Integra UI 인가요?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              기존 라이브러리의 불편함을 해소하고, 국내 웹 환경에 최적화된 경험을 제공합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 특징 1 */}
            <Card className="bg-white border-slate-200 shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <Type className="w-6 h-6" />
                </div>
                <CardTitle>Pretendard First</CardTitle>
                <CardDescription className="text-base pt-2">
                  설정하기 귀찮았던 Pretendard 폰트가 기본으로 적용되어 있습니다. 
                  가독성 높은 타이포그래피 시스템을 즉시 경험하세요.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* 특징 2 */}
            <Card className="bg-white border-slate-200 shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <Palette className="w-6 h-6" />
                </div>
                <CardTitle>Designer Friendly</CardTitle>
                <CardDescription className="text-base pt-2">
                  개발자만 아는 변수명은 그만. 4px 그리드와 의미론적 컬러 토큰으로 
                  디자이너와 개발자가 같은 언어로 소통합니다.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* 특징 3 */}
            <Card className="bg-white border-slate-200 shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <Layout className="w-6 h-6" />
                </div>
                <CardTitle>Just Copy & Paste</CardTitle>
                <CardDescription className="text-base pt-2">
                  npm 설치 지옥에서 벗어나세요. shadcn 아키텍처를 기반으로,
                  필요한 컴포넌트 코드만 복사해서 내 프로젝트에 붙여넣으세요.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>


      {/* 3. Component Showcase: 실제 컴포넌트 모음 */}
      <section className="py-24 overflow-hidden">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
            <div className="space-y-4 max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight">강력한 컴포넌트</h2>
              <p className="text-lg text-muted-foreground">
                버튼, 입력창, 스위치, 뱃지 등 웹 서비스 구축에 필요한 핵심 블록들을 미리 준비했습니다.
                접근성(Accessibility)은 기본입니다.
              </p>
              <ul className="space-y-2 pt-4">
                {["Radix UI 기반의 견고한 로직", "Tailwind CSS로 자유로운 스타일링", "다크 모드 자동 지원 (System Preferred)"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-700">
                    <Check className="w-4 h-4 text-primary" /> {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link href="/docs/components/button">
                    <Button variant="outline">컴포넌트 전체보기</Button>
                </Link>
              </div>
            </div>

            {/* 우측: 컴포넌트 그리드 (시각적 요소) */}
            <div className="w-full max-w-md bg-slate-50 border rounded-xl p-8 shadow-sm">
                <div className="grid gap-6">
                    {/* Row 1: Badges */}
                    <div className="flex flex-wrap gap-2">
                        <Badge>Primary</Badge>
                        <Badge variant="secondary">Secondary</Badge>
                        <Badge variant="outline">Outline</Badge>
                        <Badge variant="destructive">Error</Badge>
                    </div>

                    {/* Row 2: Inputs & Button */}
                    <div className="space-y-3">
                        <div className="space-y-1">
                            <Label htmlFor="demo-email">Email</Label>
                            <Input id="demo-email" placeholder="hello@integra.ui" />
                        </div>
                        <Button className="w-full">Sign Up with Email</Button>
                    </div>

                    {/* Row 3: Switch & Card items */}
                    <div className="flex items-center justify-between p-4 border rounded-lg bg-white">
                        <div className="space-y-0.5">
                            <Label className="text-base">Marketing emails</Label>
                            <p className="text-xs text-muted-foreground">Receive emails about new products.</p>
                        </div>
                        <Switch />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>


      {/* 4. Footer: 하단 마무리 */}
      <footer className="py-12 border-t bg-slate-50">
        <div className="container px-4 md:px-8 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
                <p className="font-bold text-lg">Integra UI</p>
                <p className="text-sm text-muted-foreground mt-1">
                    Designed for Korean Makers. Built with Next.js & Tailwind.
                </p>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
                <Link href="/docs" className="hover:text-primary transition-colors">Documentation</Link>
                <Link href="https://github.com" className="hover:text-primary transition-colors">GitHub</Link>
                <Link href="/docs/foundations/design-tokens" className="hover:text-primary transition-colors">Design Tokens</Link>
            </div>
        </div>
      </footer>

    </div>
  );
}