// app/page.tsx 전문
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ArrowRight, Check, Atom, Ruler, Layers, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* 1. Hero Section: 이전 버전의 구성을 완벽히 유지 */}
      <section className="flex flex-col items-center justify-center pt-80 pb-64 text-center px-16 md:pt-120 md:pb-80">
        <div className="space-y-24 max-w-1000 mx-auto">
          <Badge variant="secondary" className="rounded-full px-16 py-4 text-14 font-medium leading-20">
            🎉 Integra UI v1.0 is now available
          </Badge>
          
          <h1 className="text-40 font-bold leading-48 tracking--4 sm:text-56 sm:leading-64 md:text-72 md:leading-80">
            한국 메이커를 위한 <br className="hidden sm:inline" />
            <span className="text-primary font-bold">가장 직관적인 디자인 시스템</span>
          </h1>
          
          <p className="mx-auto max-w-600 text-18 text-muted-foreground sm:text-20 leading-32 tracking--1">
            Pretendard 폰트 기본 탑재, 4px 그리드 시스템, 그리고 디자이너 친화적인 토큰 설계.
            복잡한 설정 없이 복사하여 바로 사용하세요.
          </p>

          <div className="flex flex-col sm:flex-row gap-16 justify-center pt-8">
            <Link href="/docs/installation">
              <Button className="h-48 px-32 text-16 leading-24 font-bold gap-8 shadow-lg shadow-primary/20">
                지금 바로 시작하기 <ArrowRight className="w-16 h-16" />
              </Button>
            </Link>
            <Link href="/docs/foundations/design-tokens">
              <Button variant="outline" className="h-48 px-32 text-16 leading-24 font-bold">
                디자인 토큰 살펴보기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Atomic Intro Section: 토스 스타일의 압도적 인트로 (New) */}
      <section className="py-120 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="container px-16 md:px-32 mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-64">
                <div className="flex-1 space-y-32">
                    <div className="inline-flex p-12 bg-primary/10 rounded-12 text-primary">
                        <Atom className="w-32 h-32" />
                    </div>
                    <h2 className="text-32 md:text-48 font-bold leading-40 md:leading-56 tracking--3">
                        컴포넌트보다 앞선 <br/>
                        <span className="text-primary font-bold">원자(Atoms)의 정의</span>
                    </h2>
                    <p className="text-18 md:text-20 text-slate-600 leading-32 tracking--1 max-w-500">
                        Integra UI는 단순히 만들어진 부품을 나열하지 않습니다. 
                        **아토믹 디자인 시스템** 철학에 따라 폰트 크기, 행간, 자간, 곡률을 독립된 원자로 정의합니다. 
                        이것이 어떤 규모의 프로젝트에서도 일관성을 유지하는 비결입니다.
                    </p>
                </div>
                {/* 시각적 요소: 토큰 조합 예시 */}
                <div className="flex-1 w-full max-w-500 bg-white p-32 rounded-24 shadow-integra border border-slate-100">
                    <div className="space-y-24 font-mono">
                        <div className="flex justify-between items-center border-b pb-12 border-slate-50">
                            <span className="text-12 text-slate-400 uppercase tracking-1">Token Name</span>
                            <span className="text-12 text-slate-400 uppercase tracking-1">Value</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-14 font-medium text-blue-600">--font-size-24</span>
                            <span className="text-14 text-slate-900">24px</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-14 font-medium text-blue-600">--line-height-32</span>
                            <span className="text-14 text-slate-900">32px (1.33em)</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-14 font-medium text-blue-600">--radius-12</span>
                            <span className="text-14 text-slate-900">12px</span>
                        </div>
                        <div className="pt-12">
                            <div className="p-16 bg-slate-50 rounded-12 border-2 border-dashed border-slate-200 text-center">
                                <p className="text-24 leading-32 tracking--2 font-bold">Atomic Combination</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 3. Spacing Section: 4px 그리드 강조 (토스 스타일) */}
      <section className="py-120 bg-white">
        <div className="container px-16 md:px-32 mx-auto">
            <div className="text-center space-y-24 mb-80">
                <div className="inline-flex p-12 bg-slate-100 rounded-12 text-slate-600">
                    <Ruler className="w-32 h-32" />
                </div>
                <h2 className="text-32 md:text-48 font-bold leading-40 md:leading-56 tracking--3">
                    질서 있는 여백, <br/>
                    <span className="text-slate-400 font-bold">4px 그리드 시스템</span>
                </h2>
                <p className="text-18 text-slate-600 leading-32 tracking--1 max-w-600 mx-auto">
                    무분별한 수치는 디자인을 어지럽힙니다. Integra UI의 모든 간격은 4px 배수로 규격화되어 
                    복잡한 레이아웃에서도 완벽한 균형을 유지합니다.
                </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-32">
                <Card className="bg-slate-50 border-0 p-8 shadow-none">
                    <CardHeader className="space-y-16">
                        <CardTitle className="text-20 font-bold leading-24 tracking--1 italic text-primary underline underline-offset-4">01. Typography</CardTitle>
                        <CardDescription className="text-16 leading-24 text-slate-600">
                            12px부터 48px까지 최적의 가독성을 보장하는 수치형 텍스트 스케일을 사용합니다.
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card className="bg-slate-50 border-0 p-8 shadow-none">
                    <CardHeader className="space-y-16">
                        <CardTitle className="text-20 font-bold leading-24 tracking--1 italic text-primary underline underline-offset-4">02. Spacing</CardTitle>
                        <CardDescription className="text-16 leading-24 text-slate-600">
                            모든 패딩과 마진은 4px 단위 토큰으로 분리되어 직관적인 레이아웃 구축이 가능합니다.
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card className="bg-slate-50 border-0 p-8 shadow-none">
                    <CardHeader className="space-y-16">
                        <CardTitle className="text-20 font-bold leading-24 tracking--1 italic text-primary underline underline-offset-4">03. Radius</CardTitle>
                        <CardDescription className="text-16 leading-24 text-slate-600">
                            컴포넌트의 곡률 또한 4px 단위로 제어하여 시스템 전체에 부드럽고 일관된 인상을 줍니다.
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </div>
      </section>

      {/* 4. Component Showcase: 미리보기 복구 */}
      <section className="py-120 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="container px-16 md:px-32 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-64">
            <div className="space-y-24 max-w-lg">
              <h2 className="text-32 md:text-40 font-bold leading-40 md:leading-48 tracking--3">검증된 컴포넌트 프리뷰</h2>
              <p className="text-18 text-slate-600 leading-28 tracking--1">
                버튼, 입력창, 스위치 등 필수 블록들을 준비했습니다. 
                아토믹 토큰을 조합하여 만든 실제 컴포넌트의 완성도를 확인하세요.
              </p>
              <div className="pt-8">
                <Link href="/docs/components/button">
                    <Button variant="default" size="default" className="h-48 px-24 gap-8">
                        컴포넌트 전체보기 <ChevronRight className="w-16 h-16" />
                    </Button>
                </Link>
              </div>
            </div>

            <div className="w-full max-w-400 bg-white border border-slate-200 rounded-24 p-32 shadow-integra">
                <div className="grid gap-32">
                    <div className="flex flex-wrap gap-8">
                        <Badge className="px-12 py-4">Atomic v1.0</Badge>
                        <Badge variant="outline" className="px-12 py-4">4px Grid</Badge>
                    </div>
                    <div className="space-y-16">
                        <div className="space-y-8">
                            <Label className="text-14 font-semibold tracking-0">Project Title</Label>
                            <Input placeholder="Integra UI Project" className="h-40 rounded-8" />
                        </div>
                        <Button className="w-full h-44 rounded-8 font-bold">Create New Project</Button>
                    </div>
                    <div className="flex items-center justify-between p-16 border rounded-12 bg-slate-50/50">
                        <Label className="text-16 font-semibold tracking--1">Enable Token System</Label>
                        <Switch checked />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="py-80 bg-white">
        <div className="container px-16 md:px-32 mx-auto flex flex-col md:flex-row justify-between items-center gap-32 text-slate-400 font-medium">
            <div className="text-center md:text-left space-y-8">
                <p className="text-16 text-slate-900 font-bold">Integra UI</p>
                <p className="text-14 leading-20">Atomic Design System for Korean Makers.</p>
            </div>
            <div className="flex gap-32 text-14">
                <Link href="/docs/installation" className="hover:text-primary transition-colors tracking-0">Installation</Link>
                <Link href="https://github.com" className="hover:text-primary transition-colors tracking-0">GitHub</Link>
                <Link href="/docs/foundations/design-tokens" className="hover:text-primary transition-colors tracking-0">Design Tokens</Link>
            </div>
        </div>
      </footer>

    </div>
  );
}