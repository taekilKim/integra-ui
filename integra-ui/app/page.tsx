import Link from "next/link";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ComponentShowcase } from "@/components/landing/component-showcase";
import { ArrowRight, Check, MessageSquare, PenTool, Box, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* 1. Hero Section: Shadcn-like High Contrast */}
      <section className="flex flex-col items-center justify-center pt-120 pb-120 text-center px-24 md:pt-160 md:pb-160">
        <div className="space-y-32 max-w-1000 mx-auto">
          <Badge variant="secondary" className="rounded-full px-16 py-8 fs-14 font-medium bg-integra-gray-50 text-integra-gray-600">
            Integra UI v1.0 is now available
          </Badge>
          <h1 className="fs-48 font-bold leading-60 tracking--4 sm:fs-64 sm:leading-72 md:fs-80 md:leading-88 text-integra-gray-900">
            한국 디자이너를 위한 <br />
            가장 직관적인 디자인 시스템
          </h1>
          <p className="mx-auto max-w-600 fs-18 text-integra-gray-700 sm:fs-20 leading-32 tracking--1">
            피그마의 수치가 곧 코드가 되는 혁신적인 경험<br />
            복잡한 설정 없이 아토믹 토큰으로 제품의 본질에 집중하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-16 justify-center pt-16">
            <Link href="/docs/installation">
              <Button appearance="default" variant="default" size="default" className="gap-8 shadow-lg shadow-primary/20">
                지금 바로 시작하기 <ArrowRight className="w-20 h-20" />
              </Button>
            </Link>
            <Link href="/docs/components">
              <Button appearance="text" variant="tertiary" size="default" className="border border-integra-gray-200">
                컴포넌트 둘러보기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Component Showcase Section: 강력한 시각적 증거 */}
      <section className="py-120 bg-integra-gray-50 border-y border-integra-gray-100">
        <div className="container px-24 md:px-64 mx-auto space-y-80">
          <div className="text-center space-y-16">
            <h2 className="fs-32 md:fs-40 font-bold tracking--3 text-integra-gray-900 leading-40 md:leading-48">
                이미 준비된 완성형 컴포넌트
            </h2>
            <p className="fs-18 text-integra-gray-700 leading-28 tracking--1">
                디자인 환경에서 가장 많이 사용하는 4px 그리드 디자인 시스템을 완벽하게 적용했습니다
            </p>
          </div>
          <ComponentShowcase />
        </div>
      </section>

      {/* 3. Value Section A: Zero Translation */}
      <section className="py-120 bg-white">
        <div className="container px-24 md:px-64 mx-auto">
          <div className="grid lg:grid-cols-2 gap-80 items-center">
            <div className="space-y-32">
              <div className="inline-flex p-12 bg-integra-blue-50 rounded-12 text-primary">
                <MessageSquare className="w-24 h-24" />
              </div>
              <h2 className="fs-32 md:fs-40 font-bold leading-40 md:leading-52 tracking--3 text-integra-gray-900">
                번역이 필요 없는 <br />
                디자이너와 개발자의 언어
              </h2>
              <p className="fs-18 text-integra-gray-700 leading-32 tracking--1">
                "R값을 혹시 더 줄일 수 있을까요?" 대신 "rounded-12로 바꿔주세요"라고 전달해보세요.<br />
                추상적인 토큰과 코드를 해석하는 시간을 아껴 실제 제품의 문제를 해결하는 데 집중할 수 있습니다.
              </p>
              <ul className="space-y-8 pt-8">
                {["피그마 수치와 클래스명 1:1 매칭", "커뮤니케이션 오해 소지 0%", "신입 개발자도 즉시 이해하는 수치형 토큰"].map(item => (
                  <li key={item} className="flex items-center gap-12 fs-16 text-integra-gray-700 font-medium">
                    <Check className="w-16 h-16 text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-48 rounded-32 bg-integra-gray-900 border border-integra-gray-800 shadow-2xl text-white font-mono">
                <div className="space-y-24">
                  <div className="p-16 border border-white/10 rounded-12 bg-white/5">
                    <p className="text-primary fs-12 mb-4">// Figma Spec</p>
                    <p className="fs-16 italic text-integra-gray-400">Radius: 16px, Spacing: 32px</p>
                  </div>
                  <div className="fs-24 text-center leading-none text-integra-gray-700">↓</div>
                  <div className="p-16 border border-primary/30 rounded-12 bg-primary/10">
                    <p className="text-primary fs-12 mb-4">// Integra UI Code</p>
                    <p className="fs-16 font-bold text-white">className="rounded-16 p-32"</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Value Section B: Typography */}
      <section className="py-120 bg-integra-gray-50 border-y border-integra-gray-100">
        <div className="container px-24 md:px-64 mx-auto">
          <div className="text-center max-w-800 mx-auto space-y-32">
            <div className="inline-flex p-12 bg-white rounded-12 text-integra-gray-900 border border-integra-gray-100 shadow-sm">
              <PenTool className="w-24 h-24" />
            </div>
            <h2 className="fs-32 md:fs-40 font-bold leading-40 md:leading-52 tracking--3 text-integra-gray-900">
              한글 가독성의 임계점을 넘는 <br />
              <span className="font-bold">2px 단위 타이포그래피</span>
            </h2>
            <p className="fs-18 text-integra-gray-600 leading-32 tracking--1">
              항상 우리는 영문에 맞춰진 디자인 시스템의 타이포그라피 스케일을 사용했습니다.<br />
              때문에 맞지 않는 행간, 어색한 폰트 사이즈때문에 개발자와 항상 불필요한 토론을 해야 했죠.<br />
              이제는 한국어 본문에 최적화된 2px 단위의 세밀한 타이포그래피 스케일을 자유롭게 사용하세요.
            </p>
            <div className="pt-24 flex justify-center gap-16">
                <div className="px-24 py-12 rounded-8 bg-white border border-integra-gray-200 fs-12 font-bold shadow-sm">12px</div>
                <div className="px-24 py-12 rounded-8 bg-white border border-integra-gray-200 fs-13 font-bold shadow-sm">13px</div>
                <div className="px-24 py-12 rounded-8 bg-white border border-integra-gray-200 fs-14 font-bold shadow-sm">14px</div>
                <div className="px-24 py-12 rounded-8 bg-white border border-integra-gray-200 fs-15 font-bold shadow-sm">15px</div>
                <div className="px-24 py-12 rounded-8 bg-white border border-integra-gray-200 fs-16 font-bold shadow-sm">16px</div>
                <div className="px-24 py-12 rounded-8 bg-white border border-integra-gray-200 fs-18 font-bold shadow-sm">18px</div>
                <div className="px-24 py-12 rounded-8 bg-white border border-integra-gray-200 fs-20 font-bold shadow-sm">20px</div>
                <div className="px-24 py-12 rounded-8 bg-white border border-integra-gray-200 fs-22 font-bold shadow-sm">22px</div>
                <div className="px-24 py-12 rounded-8 bg-white border border-integra-gray-200 fs-24 font-bold shadow-sm">24px</div>
                <div className="px-24 py-12 rounded-8 bg-white border border-integra-gray-200 fs-26 font-bold shadow-sm">26px</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Value Section C: Ownership */}
      <section className="py-120 bg-white">
        <div className="container px-24 md:px-64 mx-auto">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-80">
            <div className="flex-1 space-y-32">
              <div className="inline-flex p-12 bg-primary/10 rounded-12 text-primary">
                <Box className="w-24 h-24" />
              </div>
              <h2 className="fs-32 md:fs-40 font-bold leading-40 md:leading-52 tracking--3 text-integra-gray-900">
                추가적인 외부 자원이 필요 없는 <br />
                <span className="text-primary font-bold">독립적인 디자인 시스템</span>
              </h2>
              <p className="fs-18 text-integra-gray-700 leading-32 tracking--1">
                필요한 라이브러리를 찾아서 헤매지 마세요.<br />
                Integra UI는 세세한 토큰 단위부터 모두 갖춰진 디자인 시스템입니다.<br />
                디자인 토큰을 이용해 원하는 대로 뜯고 고칠 수 있는 진정한 자유를 누리세요.
              </p>
              <div className="pt-8">
                <Link href="/docs/installation">
                    <Button appearance="outlined" variant="default" size="default" className="gap-8">
                      설치 가이드 보러가기 <ChevronRight className="w-16 h-16" />
                    </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full grid grid-cols-2 gap-24">
                <div className="aspect-square rounded-32 bg-integra-gray-50 border border-integra-gray-100 flex flex-col items-center justify-center gap-12">
                   <div className="w-40 h-40 bg-integra-gray-200 rounded-8 animate-pulse" />
                   <span className="fs-12 font-bold text-integra-gray-400 uppercase tracking-2">No Node_Modules</span>
                </div>
                <div className="aspect-square rounded-32 bg-integra-blue-50 border border-integra-blue-100 flex flex-col items-center justify-center gap-12">
                   <div className="w-40 h-40 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">100%</div>
                   <span className="fs-12 font-bold text-primary uppercase tracking-2">Ownership</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="py-120 border-t border-integra-gray-100 bg-integra-gray-50">
        <div className="container px-24 md:px-64 mx-auto flex flex-col md:flex-row justify-between items-center gap-32 text-integra-gray-400 font-medium">
            <div className="text-center md:text-left space-y-8">
                <p className="fs-18 text-integra-gray-900 font-bold tracking--2">Integra UI</p>
                <p className="fs-14">Designed for Korean Makers. <br />Atomic Design Standard v1.0</p>
            </div>
            <div className="flex gap-48 fs-14">
                <Link href="/docs/installation" className="hover:text-primary transition-colors tracking-0">Docs</Link>
                <Link href="https://github.com" className="hover:text-primary transition-colors tracking-0">GitHub</Link>
                <Link href="/docs/foundations/design-tokens" className="hover:text-primary transition-colors tracking-0">Tokens</Link>
            </div>
        </div>
      </footer>
    </div>
  );
}