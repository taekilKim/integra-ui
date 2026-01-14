import Link from "next/link";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TokenExperience } from "@/components/landing/token-experience";
import { ArrowRight, Type, Ruler, BookOpen, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* 1. Hero Section: 고정 아이덴티티 */}
      <section className="flex flex-col items-center justify-center pt-120 pb-120 text-center px-24 md:pt-160 md:pb-160">
        <div className="space-y-32 max-w-1000 mx-auto">
          <Badge variant="secondary" className="rounded-full px-16 py-4 fs-14 font-medium leading-20 bg-integra-gray-50 text-integra-gray-600">
            🎉 Integra UI v1.0 is now available
          </Badge>
          
          <h1 className="fs-48 font-bold leading-56 tracking--4 sm:fs-64 sm:leading-72 md:fs-80 md:leading-88 text-integra-gray-900">
            한국 디자이너를 위한 <br />
            <span className="text-primary">가장 직관적인 디자인 시스템</span>
          </h1>
          
          <p className="mx-auto max-w-600 fs-18 text-integra-gray-500 sm:fs-20 leading-32 tracking--1">
            Pretendard 폰트 기본 탑재, 4px 그리드 시스템, 그리고 디자이너 친화적인 토큰 설계.<br />
            복잡한 설정 없이 복사하여 바로 사용하세요.
          </p>

          <div className="flex flex-col sm:flex-row gap-16 justify-center pt-16">
            <Link href="/docs/installation">
              {/* 핵심 액션: Primary 적용 */}
              <Button appearance="default" variant="default" className="h-56 px-32 fs-16 font-bold gap-8 shadow-lg shadow-primary/20">
                지금 바로 시작하기 <ArrowRight className="w-20 h-20" />
              </Button>
            </Link>
            <Link href="/docs/foundations/design-tokens">
              {/* 보조 액션: Grayscale 적용 (Shadcn Style) */}
              <Button appearance="default" variant="tertiary" className="h-56 px-32 fs-16 font-bold border border-integra-gray-200">
                디자인 토큰 살펴보기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Interactive Experience Section: SAI 원칙 기반 실시간 체험 */}
      <section className="py-120 bg-integra-gray-50 border-y border-integra-gray-100">
        <div className="container px-24 md:px-64 mx-auto">
          <TokenExperience />
        </div>
      </section>

      {/* 3. Problem Intro Section: 공감과 문제 제기 */}
      <section className="py-120 bg-white">
        <div className="container px-24 md:px-64 mx-auto">
            <div className="max-w-800 mx-auto text-center space-y-32">
                <h2 className="fs-36 md:fs-48 font-bold tracking--3 text-integra-gray-900 leading-48 md:leading-64">
                    폰트 설정, 간격 조정...<br />
                    <span className="text-integra-gray-300 font-medium italic block mt-8">반복되는 세팅에 지쳐있지는 않으신가요?</span>
                </h2>
                <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
                    Integra UI는 단순한 UI 라이브러리가 아닙니다. <br/>
                    한국 메이커들이 매번 겪는 <strong>폰트 정렬, 이질적인 여백, 개발-디자인 불일치</strong>를 <br />
                    해결하기 위해 탄생한 실전형 디자인 시스템입니다.
                </p>
            </div>
        </div>
      </section>

      {/* 4. Feature Highlights: 수치 기반 특징 */}
      <section className="py-120 bg-integra-gray-50 border-y border-integra-gray-100">
        <div className="container px-24 md:px-64 mx-auto">
          <div className="grid md:grid-cols-3 gap-32">
            {[
              { icon: <Type />, title: "Pretendard First", desc: "한글 가독성에 최적화된 폰트 환경을<br />별도의 설정 없이 즉시 제공합니다." },
              { icon: <Ruler />, title: "Strict 4px Grid", desc: "모든 간격과 크기는 4px의 배수입니다.<br />소수점 오차 없는 정밀한 UI를 완성하세요." },
              { icon: <BookOpen />, title: "Atomic Tokens", desc: "속성을 원자 단위로 분리했습니다.<br />피그마의 변수를 코드로 그대로 옮기세요." }
            ].map((f, i) => (
              <div key={i} className="p-32 rounded-24 border border-integra-gray-200 bg-white shadow-sm space-y-24">
                <div className="w-40 h-40 text-primary">{React.cloneElement(f.icon as React.ReactElement, { className: "w-full h-full" })}</div>
                <div className="space-y-8">
                  <h3 className="fs-20 font-bold text-integra-gray-900">{f.title}</h3>
                  <p className="fs-15 text-integra-gray-500 leading-24" dangerouslySetInnerHTML={{ __html: f.desc }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="py-80 bg-white">
        <div className="container px-24 md:px-64 mx-auto flex flex-col md:flex-row justify-between items-center gap-32 text-integra-gray-400 font-medium">
            <div className="text-center md:text-left space-y-8">
                <p className="fs-16 text-integra-gray-900 font-bold">Integra UI</p>
                <p className="fs-14">Atomic Design System for Korean Makers.</p>
            </div>
            <div className="flex gap-32 fs-14">
                <Link href="/docs/installation" className="hover:text-primary transition-colors">Docs</Link>
                <Link href="https://github.com" className="hover:text-primary transition-colors">GitHub</Link>
                <Link href="/docs/foundations/design-tokens" className="hover:text-primary transition-colors">Tokens</Link>
            </div>
        </div>
      </footer>
    </div>
  );
}