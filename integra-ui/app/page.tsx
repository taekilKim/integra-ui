"use client"

import Link from "next/link";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ComponentShowcase } from "@/components/landing/component-showcase";
import { ArrowRight, Check, ChatTeardropText, PencilLine, Cube, CaretRight } from "@phosphor-icons/react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* 1. Hero Section: Shadcn-like High Contrast */}
      <section className="flex flex-col items-center justify-center pt-120 pb-120 text-center px-24 md:pt-160 md:pb-160">
        <div className="space-y-32 max-w-1000 mx-auto">
          <Badge variant="secondary" className="rounded-full px-16 py-8 fs-14 font-medium bg-integra-gray-50 text-integra-gray-600">
            Learn · Customize · Build
          </Badge>
          <h1 className="fs-48 font-bold leading-60 tracking--4 sm:fs-64 sm:leading-72 md:fs-80 md:leading-96 text-integra-gray-900">
            디자인 시스템을 이해하고 <br />
            내 제품에 맞게 사용하는 법
          </h1>
          <p className="mx-auto max-w-600 fs-18 text-integra-gray-700 sm:fs-20 leading-32 tracking--1">
            현대적인 UI 규칙과 React 구조를 한국어로 이해하고,<br />
            디자인에서 코드까지 같은 원칙으로 커스터마이징하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-16 justify-center pt-16">
            <Link href="/docs/learn">
              <Button appearance="default" variant="default" size="default" className="gap-8 shadow-lg shadow-primary/20">
                개념부터 배우기 <ArrowRight className="w-20 h-20" />
              </Button>
            </Link>
            <Link href="/docs/components">
              <Button appearance="outlined" variant="tertiary" size="default">
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
                규칙까지 설명하는 컴포넌트
            </h2>
            <p className="fs-18 text-integra-gray-700 leading-28 tracking--1">
                모양만 복사하지 않도록 구조, 상태, 토큰과 사용 원칙을 함께 제공합니다
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
                <ChatTeardropText className="w-24 h-24" />
              </div>
              <h2 className="fs-32 md:fs-40 font-bold leading-40 md:leading-52 tracking--3 text-integra-gray-900">
                Figma에서 React까지 <br />
                하나로 이어지는 규칙
              </h2>
              <p className="fs-18 text-integra-gray-700 leading-32 tracking--1">
                Figma의 Property가 React Props와 어떤 관계인지, Semantic Token이 실제 스타일에 어떻게 연결되는지 보여줍니다.<br />
                디자이너와 개발자가 같은 구조를 보고 더 구체적으로 이야기할 수 있습니다.
              </p>
              <ul className="space-y-8 pt-8">
                {["Figma Property와 React Props 연결", "Primitive와 Semantic Token의 역할 구분", "실제 코드와 렌더링을 함께 확인"].map(item => (
                  <li key={item} className="flex items-center gap-12 fs-16 text-integra-gray-700 font-medium">
                    <Check className="w-16 h-16 text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-48 rounded-32 bg-integra-gray-900 border border-integra-gray-800 shadow-2xl text-white font-mono">
                <div className="space-y-24">
                  <div className="p-16 border border-white/10 rounded-12 bg-white/5">
                    <p className="text-primary fs-12 mb-4">{"// Figma Spec"}</p>
                    <p className="fs-16 italic text-integra-gray-400">Radius: 16px, Spacing: 32px</p>
                  </div>
                  <div className="fs-24 text-center leading-none text-integra-gray-700">↓</div>
                  <div className="p-16 border border-primary/30 rounded-12 bg-primary/10">
                    <p className="text-primary fs-12 mb-4">{"// Integra UI Code"}</p>
                    <p className="fs-16 font-bold text-white">{'className="rounded-16 p-32"'}</p>
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
              <PencilLine className="w-24 h-24" />
            </div>
            <h2 className="fs-32 md:fs-40 font-bold leading-40 md:leading-52 tracking--3 text-integra-gray-900">
              영어 용어를 새로 번역하지 않고 <br />
              <span className="font-bold">한국어로 제대로 이해하기</span>
            </h2>
            <p className="fs-18 text-integra-gray-600 leading-32 tracking--1">
              Variant, State, Semantic Token 같은 표준 용어는 그대로 사용합니다.<br />
              대신 왜 나누는지, 언제 선택하는지, 바꾸면 어떤 영향이 생기는지를 실제 UI 사례로 설명합니다.<br />
              외워서 쓰는 라이브러리가 아니라 응용할 수 있는 시스템을 만듭니다.
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
                <Cube className="w-24 h-24" />
              </div>
              <h2 className="fs-32 md:fs-40 font-bold leading-40 md:leading-52 tracking--3 text-integra-gray-900">
                복사해서 끝내지 않는 <br />
                <span className="text-primary font-bold">커스터마이징 가이드</span>
              </h2>
              <p className="fs-18 text-integra-gray-700 leading-32 tracking--1">
                브랜드 컬러와 Radius처럼 자유롭게 바꿔도 되는 것,<br />
                Density처럼 제품 맥락에 따라 판단할 것, Focus와 키보드 동작처럼 지켜야 할 것을 구분합니다.<br />
                무엇을 바꿀 수 있는지보다 어떻게 안전하게 바꿀지를 안내합니다.
              </p>
              <div className="pt-8">
                <Link href="/docs/customize">
                    <Button appearance="outlined" variant="default" size="default" className="gap-8">
                      커스터마이징 가이드 보기 <CaretRight className="w-16 h-16" />
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
                <p className="fs-14">Learn the rules. Customize with confidence.<br />Built for Korean UI designers.</p>
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
