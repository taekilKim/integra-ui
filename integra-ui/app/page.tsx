import Link from "next/link";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ComponentShowcase } from "@/components/landing/component-showcase";
import { ArrowRight, Check, Zap, Target, MousePointer2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* 1. Hero Section */}
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
              <Button appearance="default" variant="default" className="h-56 px-32 fs-16 font-bold gap-8 shadow-lg shadow-primary/20">
                지금 바로 시작하기 <ArrowRight className="w-20 h-20" />
              </Button>
            </Link>
            <Link href="/docs/components">
              <Button appearance="default" variant="tertiary" className="h-56 px-32 fs-16 font-bold border border-integra-gray-200">
                컴포넌트 살펴보기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Component Showcase Section (Plan C 정답지) */}
      <section className="py-120 bg-integra-gray-50 border-y border-integra-gray-100">
        <div className="container px-24 md:px-64 mx-auto space-y-80">
          <div className="text-center space-y-16">
            <h2 className="fs-32 md:fs-40 font-bold tracking--3 text-integra-gray-900">
              이미 준비된 아토믹 피스
            </h2>
            <p className="fs-18 text-integra-gray-500 leading-28">
              모든 컴포넌트는 4px 그리드 시스템 위에서 완벽하게 정렬되어 있습니다.
            </p>
          </div>
          <ComponentShowcase />
        </div>
      </section>

      {/* 3. Why Integra: 1:1 매핑의 확신 */}
      <section className="py-120 bg-white">
        <div className="container px-24 md:px-64 mx-auto">
          <div className="max-w-800 mx-auto text-center space-y-40">
            <div className="inline-flex p-16 bg-primary/5 rounded-24 text-primary">
              <Target className="w-40 h-40" />
            </div>
            <h2 className="fs-36 md:fs-48 font-bold tracking--3 text-integra-gray-900 leading-48 md:leading-64">
              디자이너의 언어와 <br />
              <span className="text-primary font-bold">개발자의 코드가 일치하는 순간</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-24 pt-24">
              <div className="p-32 rounded-24 bg-integra-gray-50 border border-integra-gray-100 text-left space-y-12">
                <Zap className="w-24 h-24 text-primary" />
                <h4 className="fs-18 font-bold text-integra-gray-900">압도적인 속도</h4>
                <p className="fs-14 text-integra-gray-600 leading-24">
                  "곡률 얼마로 할까요?" 더 이상 묻지 마세요. 피그마에서 확인한 8px은 코드에서 <code>rounded-8</code>이 됩니다.
                </p>
              </div>
              <div className="p-32 rounded-24 bg-integra-gray-50 border border-integra-gray-100 text-left space-y-12">
                <MousePointer2 className="w-24 h-24 text-primary" />
                <h4 className="fs-18 font-bold text-integra-gray-900">직관적인 커스텀</h4>
                <p className="fs-14 text-integra-gray-600 leading-24">
                  추상적인 추론 없이 수치 그대로를 제어하세요. 4px 그리드 토큰이 당신의 디자인 자유도를 보장합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Footer */}
      <footer className="py-80 border-t border-integra-gray-100 bg-integra-gray-50">
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