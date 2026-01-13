import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, Check, Type, Ruler, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* 1. Hero Section: 문제 제기와 해결책 */}
      <section className="flex flex-col items-center justify-center pt-24 pb-32 text-center px-4 md:pt-32 md:pb-40">
        <div className="space-y-8 max-w-4xl mx-auto">
          <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-sm font-normal bg-slate-100 text-slate-700">
             Integra UI Beta
          </Badge>
          
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            폰트 설정, 간격 조정...<br />
            <span className="text-slate-400">반복되는 세팅</span>에 지치셨나요?
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg text-slate-600 sm:text-xl leading-8">
            Integra UI는 <strong>한국 웹 환경에 최적화된(Pretendard, 4px Grid)</strong> 디자인 시스템입니다.<br/>
            고민할 시간에 제품의 본질에 집중하세요.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link href="/docs/installation">
              <Button size="lg" className="h-14 px-8 text-lg gap-2 w-full sm:w-auto shadow-xl shadow-primary/20">
                지금 바로 시작하기 <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/docs/foundations/design-tokens">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg w-full sm:w-auto">
                디자인 토큰 살펴보기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Pain Points & Solution: 왜 이걸 써야 하는가? */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">한국 메이커들의 '진짜' 불편함을 해결합니다</h2>
            <p className="text-lg text-slate-500">글로벌 라이브러리가 채워주지 못했던 2%를 채웠습니다.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-sm ring-1 ring-slate-200">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 text-primary">
                  <Type className="w-6 h-6" />
                </div>
                <CardTitle>Zero-Config Pretendard</CardTitle>
                <CardDescription className="text-base pt-2 leading-relaxed">
                  "폰트가 왜 위로 떴지?" 구글 폰트 설정, 로컬 폰트 임포트... 
                  더 이상 헤매지 마세요. <strong>Pretendard가 기본 탑재</strong>되어 즉시 아름다운 한글 타이포그래피를 제공합니다.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-0 shadow-sm ring-1 ring-slate-200">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 text-primary">
                  <Ruler className="w-6 h-6" />
                </div>
                <CardTitle>Korean Standard Grid</CardTitle>
                <CardDescription className="text-base pt-2 leading-relaxed">
                  해외 라이브러리의 벙벙한 여백이 어색하셨나요?
                  국내 IT 서비스들이 선호하는 <strong>밀도 높은 4px 그리드 시스템</strong>을 적용해, 한국 사용자에게 익숙한 UI를 제공합니다.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-0 shadow-sm ring-1 ring-slate-200">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 text-primary">
                  <BookOpen className="w-6 h-6" />
                </div>
                <CardTitle>Designer-First Docs</CardTitle>
                <CardDescription className="text-base pt-2 leading-relaxed">
                  개발자만 읽을 수 있는 문서는 그만. 
                  디자이너가 직접 보고 토큰(Color, Radius)을 정의할 수 있는 
                  <strong>직관적인 가이드</strong>를 제공합니다.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. Footer */}
      <footer className="py-12 bg-white">
        <div className="container px-4 md:px-8 mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500">
            <p className="text-sm">© 2024 Integra UI. Designed for Korean Makers.</p>
            <div className="flex gap-6 text-sm font-medium">
                <Link href="/docs/installation" className="hover:text-primary">설치하기</Link>
                <Link href="https://github.com" className="hover:text-primary">GitHub</Link>
            </div>
        </div>
      </footer>
    </div>
  );
}