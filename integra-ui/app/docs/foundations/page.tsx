import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";
import { Palette, Type, Ruler, ArrowRight, Layers, Box } from "lucide-react";

/**
 * [Integra UI - Foundations Intro SAI Version]
 * 시스템의 근간이 되는 원자(Color, Typo, Tokens)를 소개하고 네비게이션을 제공합니다.
 */
export default function FoundationsIntro() {
  return (
    <div className="space-y-64 pb-120">
      
      {/* 1. Header Section */}
      <div className="space-y-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>Foundations</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">Foundations</h1>
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          Integra UI의 모든 구성 요소는 엄격한 시각적 원칙 위에 세워집니다.<br />
          시스템의 뼈대가 되는 3가지 핵심 기둥을 확인하세요.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. Core Pillars (Navigation Cards) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-24">
        
        {/* Colors */}
        <Link href="/docs/foundations/colors" className="group">
          <Card className="h-full border-integra-gray-200 shadow-sm hover:border-primary/50 hover:shadow-md transition-all p-32 space-y-24 bg-white">
            <div className="flex items-start justify-between">
              <div className="p-12 rounded-12 bg-integra-blue-50 text-primary">
                <Palette className="w-24 h-24" />
              </div>
              <ArrowRight className="w-20 h-20 text-integra-gray-300 group-hover:text-primary transition-colors" />
            </div>
            <div className="space-y-8">
              <h3 className="fs-20 font-bold text-integra-gray-900 group-hover:text-primary transition-colors">Colors</h3>
              <p className="fs-14 text-integra-gray-500 leading-24">
                Figma 데이터와 100% 일치하는 정밀한 HSL/HEX 컬러 팔레트와 의미론적(Semantic) 토큰 시스템입니다.
              </p>
            </div>
            {/* Visual Preview */}
            <div className="flex gap-8 pt-8">
               <div className="w-24 h-24 rounded-full bg-primary" />
               <div className="w-24 h-24 rounded-full bg-integra-gray-900" />
               <div className="w-24 h-24 rounded-full bg-integra-red-500" />
               <div className="w-24 h-24 rounded-full bg-integra-green-500" />
            </div>
          </Card>
        </Link>

        {/* Typography */}
        <Link href="/docs/foundations/typography" className="group">
          <Card className="h-full border-integra-gray-200 shadow-sm hover:border-primary/50 hover:shadow-md transition-all p-32 space-y-24 bg-white">
            <div className="flex items-start justify-between">
              <div className="p-12 rounded-12 bg-integra-gray-100 text-integra-gray-700">
                <Type className="w-24 h-24" />
              </div>
              <ArrowRight className="w-20 h-20 text-integra-gray-300 group-hover:text-primary transition-colors" />
            </div>
            <div className="space-y-8">
              <h3 className="fs-20 font-bold text-integra-gray-900 group-hover:text-primary transition-colors">Typography</h3>
              <p className="fs-14 text-integra-gray-500 leading-24">
                한글 가독성에 최적화된 2px 단위의 폰트 스케일과 행간(Leading) 규칙을 정의합니다.
              </p>
            </div>
            {/* Visual Preview */}
            <div className="flex items-baseline gap-8 pt-8 text-integra-gray-900 font-bold">
               <span className="fs-32">Aa</span>
               <span className="fs-24 text-integra-gray-500">Aa</span>
               <span className="fs-16 text-integra-gray-400">Aa</span>
            </div>
          </Card>
        </Link>

        {/* Design Tokens */}
        <Link href="/docs/foundations/design-tokens" className="group">
          <Card className="h-full border-integra-gray-200 shadow-sm hover:border-primary/50 hover:shadow-md transition-all p-32 space-y-24 bg-white">
            <div className="flex items-start justify-between">
              <div className="p-12 rounded-12 bg-integra-gray-100 text-integra-gray-700">
                <Ruler className="w-24 h-24" />
              </div>
              <ArrowRight className="w-20 h-20 text-integra-gray-300 group-hover:text-primary transition-colors" />
            </div>
            <div className="space-y-8">
              <h3 className="fs-20 font-bold text-integra-gray-900 group-hover:text-primary transition-colors">Design Tokens</h3>
              <p className="fs-14 text-integra-gray-500 leading-24">
                곡률(Radius), 간격(Spacing), 크기(Size) 등 4px 그리드 기반의 모든 아토믹 수치 명세입니다.
              </p>
            </div>
            {/* Visual Preview */}
            <div className="flex gap-8 pt-8">
               <div className="w-24 h-24 rounded-4 border border-integra-gray-300" />
               <div className="w-24 h-24 rounded-8 border border-integra-gray-300" />
               <div className="w-24 h-24 rounded-full border border-integra-gray-300" />
            </div>
          </Card>
        </Link>

      </section>

      {/* 3. The Atomic Workflow (철학 설명) */}
      <section className="space-y-32">
        <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900 border-l-4 border-primary pl-16">
          The Atomic Workflow
        </h2>
        
        <div className="grid gap-24 md:grid-cols-2">
          {/* Principle 1 */}
          <div className="p-32 rounded-16 bg-integra-gray-50 border border-integra-gray-100 space-y-16">
            <div className="flex items-center gap-12">
                <Layers className="w-20 h-20 text-primary" />
                <h3 className="fs-18 font-bold text-integra-gray-900">감각이 아닌 수치로</h3>
            </div>
            <p className="fs-15 text-integra-gray-600 leading-24">
              "조금만 더 넓게"라는 모호한 표현 대신 <strong>"padding-24"</strong>라는 명확한 언어를 사용합니다. 
              Integra UI의 모든 디자인 결정은 수학적으로 계산된 4px 그리드 위에서 이루어집니다.
            </p>
          </div>
          
          {/* Principle 2 */}
          <div className="p-32 rounded-16 bg-integra-gray-50 border border-integra-gray-100 space-y-16">
            <div className="flex items-center gap-12">
                <Box className="w-20 h-20 text-primary" />
                <h3 className="fs-18 font-bold text-integra-gray-900">예측 가능한 확장</h3>
            </div>
            <p className="fs-15 text-integra-gray-600 leading-24">
              기본 토큰을 조합하여 새로운 컴포넌트를 만들 때도 일관성이 유지됩니다. 
              버튼의 높이(40px)와 인풋의 높이(40px)가 일치하는 것은 우연이 아니라 설계된 규칙입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Bottom Note */}
      <section className="p-40 rounded-24 border border-dashed border-integra-gray-200 text-center bg-white">
        <p className="fs-16 text-integra-gray-500 leading-24">
          모든 파운데이션은 <code>tailwind.config.ts</code>와 <code>globals.css</code>에 
          <strong>Variable</strong> 형태로 내장되어 있어, 코드 한 줄 수정으로 시스템 전체를 제어할 수 있습니다.
        </p>
      </section>

    </div>
  );
}