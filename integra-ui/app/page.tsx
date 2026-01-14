import Link from "next/link";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ComponentShowcase } from "@/components/landing/component-showcase";
import { ArrowRight, Check, Zap, Target, MousePointer2, MessageSquare, PenTool, Box, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      
      {/* 1. Hero Section: 프로젝트 아이덴티티 고정 */}
      <section className="flex flex-col items-center justify-center pt-120 pb-120 text-center px-24 md:pt-160 md:pb-160">
        <div className="space-y-32 max-w-1000 mx-auto">
          <Badge variant="secondary" className="rounded-full px-16 py-4 fs-14 font-medium bg-integra-gray-50 text-integra-gray-600">
            🎉 Integra UI v1.0 is now available
          </Badge>
          <h1 className="fs-48 font-bold leading-56 tracking--4 sm:fs-64 sm:leading-72 md:fs-80 md:leading-88 text-integra-gray-900">
            한국 디자이너를 위한 <br />
            <span className="text-primary">가장 직관적인 디자인 시스템</span>
          </h1>
          <p className="mx-auto max-w-600 fs-18 text-integra-gray-500 sm:fs-20 leading-32 tracking--1">
            피그마의 수치가 곧 코드가 되는 혁신적인 경험.<br />
            복잡한 설정 없이 아토믹 토큰으로 제품의 본질에 집중하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-16 justify-center pt-16">
            <Link href="/docs/installation">
              <Button appearance="default" variant="default" size="default" className="gap-8 shadow-lg shadow-primary/20">
                지금 바로 시작하기 <ArrowRight className="w-20 h-20" />
              </Button>
            </Link>
            <Link href="/docs/components">
              {/* ✨ variant="outline"을 제거하고 명세에 맞는 "tertiary" 적용 */}
              <Button appearance="default" variant="tertiary" size="default" className="border border-integra-gray-200">
                컴포넌트 살펴보기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Component Showcase Section */}
      <section className="py-120 bg-integra-gray-50 border-y border-integra-gray-100">
        <div className="container px-24 md:px-64 mx-auto space-y-80">
          <div className="text-center space-y-16">
            <h2 className="fs-32 md:fs-40 font-bold tracking--3 text-integra-gray-900 leading-40 md:leading-48">
                이미 준비된 아토믹 피스
            </h2>
            <p className="fs-18 text-integra-gray-500 leading-28 tracking--1">
                모든 컴포넌트는 4px 그리드 시스템 위에서 완벽하게 정렬되어 있습니다.
            </p>
          </div>
          <ComponentShowcase />
        </div>
      </section>

      {/* 3. 소구점 A: Zero Translation */}
      <section className="py-120 bg-white">
        <div className="container px-24 md:px-64 mx-auto">
          <div className="grid lg:grid-cols-2 gap-80 items-center">
            <div className="space-y-32">
              <div className="inline-flex p-12 bg-integra-blue-50 rounded-12 text-primary">
                <MessageSquare className="w-24 h-24" />
              </div>
              <h2 className="fs-32 md:fs-40 font-bold leading-40 md:leading-52 tracking--3 text-integra-gray-900">
                번역이 필요 없는 <br />
                <span className="text-primary">디자이너와 개발자의 언어</span>
              </h2>
              <p className="fs-18 text-integra-gray-600 leading-32 tracking--1">
                "버튼 곡률 조금만 더 둥글게 해주세요" 대신 "rounded-12로 바꿔주세요"라고 말하세요.<br />
                추상적인 단어를 해석하는 시간을 아껴 실제 제품의 문제를 해결하는 데 집중할 수 있습니다.
              </p>
              <ul className="space-y-16 pt-8">
                {["피그마 수치와 클래스명 1:1 매칭", "커뮤니케이션 오해 소지 0%", "신입 개발자도 즉시 이해하는 수치형 토큰"].map(item => (
                  <li key={item} className="flex items-center gap-12 fs-15 text-integra-gray-700 font-medium">
                    <Check className="w-16 h-16 text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-integra-gray-900 rounded-32 p-48 text-white shadow-2xl">
                <div className="space-y-24 font-mono">
                    <div className="p-16 border border-white/10 rounded-12 bg-white/5">
                        <p className="text-primary fs-12 mb-4">// Figma Spec</p>
                        <p className="fs-16 italic text-integra-gray-300">Radius: 12px, Padding: 24px</p>
                    </div>
                    <div className="fs-24 leading-32">→</div>
                    <div className="p-16 border border-primary/30 rounded-12 bg-primary/10">
                        <p className="text-primary fs-12 mb-4">// Integra UI Code</p>
                        <p className="fs-16 font-bold text-white">className="rounded-12 p-24"</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 소구점 B: Typography for Korean */}
      <section className="py-120 bg-integra-gray-50 border-y border-integra-gray-100">
        <div className="container px-24 md:px-64 mx-auto">
          <div className="text-center max-w-800 mx-auto space-y-32">
            <div className="inline-flex p-12 bg-white rounded-12 text-integra-gray-900 border border-integra-gray-100">
              <PenTool className="w-24 h-24" />
            </div>
            <h2 className="fs-32 md:fs-40 font-bold leading-40 md:leading-52 tracking--3 text-integra-gray-900">
              한글 가독성의 임계점을 넘는 <br />
              <span className="text-integra-gray-400">2px 단위 타이포그래피</span>
            </h2>
            <p className="fs-18 text-integra-gray-600 leading-32 tracking--1">
              한글은 영문보다 획이 복잡합니다. 12px은 작고 14px은 클 때, 우리는 <strong>fs-13</strong>을 선택합니다.<br />
              최적의 판독성을 위해 4px 그리드 원칙을 유연하게 적용하여 가장 정갈한 한글 렌더링을 제공합니다.
            </p>
            <div className="pt-24 flex justify-center gap-16">
                <div className="px-24 py-12 rounded-8 bg-white border border-integra-gray-100 fs-13 font-medium text-integra-gray-900">fs-13 (고밀도 가독성)</div>
                <div className="px-24 py-12 rounded-8 bg-white border border-integra-gray-100 fs-15 font-medium text-integra-gray-900">fs-15 (본문 최적화)</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 소구점 C: Ownership */}
      <section className="py-120 bg-white">
        <div className="container px-24 md:px-64 mx-auto">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-80">
            <div className="flex-1 space-y-32">
              <div className="inline-flex p-12 bg-integra-blue-50 rounded-12 text-primary">
                <Box className="w-24 h-24" />
              </div>
              <h2 className="fs-32 md:fs-40 font-bold leading-40 md:leading-52 tracking--3 text-integra-gray-900">
                의존성 없는 <br />
                <span className="text-primary font-bold">코드 소유권의 확보</span>
              </h2>
              <p className="fs-18 text-integra-gray-600 leading-32 tracking--1">
                Integra UI는 라이브러리에 설치하는 블랙박스가 아닙니다.<br />
                아토믹한 코드를 당신의 프로젝트에 직접 복사하세요. 라이브러리 업데이트에 휘둘리지 않고<br />
                원하는 대로 뜯고 고칠 수 있는 진정한 자유를 누리세요.
              </p>
              <div className="pt-8">
                <Link href="/docs/installation">
                    {/* ✨ variant="outline"을 제거하고 명세에 맞는 "tertiary" 적용 */}
                    <Button appearance="default" variant="tertiary" size="medium" className="gap-8 border border-integra-gray-200">
                      설치 가이드 확인 <ChevronRight className="w-16 h-16" />
                    </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full grid grid-cols-2 gap-16">
                <div className="aspect-square rounded-24 bg-integra-gray-50 border border-integra-gray-100 flex items-center justify-center fs-14 font-bold text-integra-gray-400 italic">No Node_Modules</div>
                <div className="aspect-square rounded-24 bg-integra-blue-50 border border-integra-blue-100 flex items-center justify-center fs-14 font-bold text-primary italic">100% Ownership</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="py-80 border-t border-integra-gray-100 bg-integra-gray-50 mt-120">
        <div className="container px-24 md:px-64 mx-auto flex flex-col md:flex-row justify-between items-center gap-32 text-integra-gray-400 font-medium">
            <div className="text-center md:text-left space-y-8">
                <p className="fs-16 text-integra-gray-900 font-bold">Integra UI</p>
                <p className="fs-14 leading-20">Designed for Korean Makers. <br />Atomic Design Standard v1.0</p>
            </div>
            <div className="flex gap-32 fs-14">
                <Link href="/docs/installation" className="hover:text-primary transition-colors tracking-0">Installation</Link>
                <Link href="https://github.com" className="hover:text-primary transition-colors tracking-0">GitHub</Link>
                <Link href="/docs/foundations/design-tokens" className="hover:text-primary transition-colors tracking-0">Design Tokens</Link>
            </div>
        </div>
      </footer>
    </div>
  );
}