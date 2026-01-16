"use client"

import * as React from "react"
import { toast } from "@/hooks/use-toast"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"

// 1. Figma 원본과 100% 일치하는 HEX 데이터
const COLORS = {
  Gray: { 50: "#F9FAFB", 100: "#F2F4F6", 200: "#E5E8EB", 300: "#D1D6DB", 400: "#B0B8C1", 500: "#8B95A1", 600: "#6B7684", 700: "#4E5968", 800: "#333D4B", 900: "#191F28" },
  Blue: { 50: "#EAF2FF", 100: "#D4E3FF", 200: "#A6C8FF", 300: "#75A8FF", 400: "#4589FF", 500: "#2A7BFF", 600: "#1F5EFF", 700: "#1446E6", 800: "#0F35B3", 900: "#0A247A" },
  Green: { 50: "#E6F8F3", 100: "#C0EFE5", 200: "#8ADDCF", 300: "#4FCAB5", 400: "#20CE9F", 500: "#09B687", 600: "#00966D", 700: "#007555", 800: "#00543D", 900: "#003325" },
  Red: { 50: "#FFF0F1", 100: "#FFD4D7", 200: "#FF9AA1", 300: "#FF6673", 400: "#FF3849", 500: "#F04452", 600: "#D92B3A", 700: "#B31926", 800: "#8C0F1A", 900: "#660811" },
  Orange: { 50: "#FFF9E6", 100: "#FFEDC2", 200: "#FFD985", 300: "#FFC447", 400: "#FFAF1A", 500: "#F79009", 600: "#D67200", 700: "#A85200", 800: "#7D3900", 900: "#542400" },
  Violet: { 50: "#F3F1FF", 100: "#E3DFFF", 200: "#C6BCFF", 300: "#A696FF", 400: "#8873FF", 500: "#6C4DFA", 600: "#5534D9", 700: "#4123AB", 800: "#2F1782", 900: "#1E0D57" },
  Grape: { 50: "#FAF5FF", 100: "#F4E8FF", 200: "#EAD6FF", 300: "#D8B4FE", 400: "#C28EFC", 500: "#A855F7", 600: "#9333EA", 700: "#7E22CE", 800: "#6B21A8", 900: "#581C87" },
};

export default function ColorsPage() {
  const copyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    toast({ title: "Copied!", description: `${hex} copied to clipboard.` });
  };

  return (
    <div className="space-y-64 pb-120">
      
      {/* 1. 헤더 섹션 (기존 컨텐츠 복구) */}
      <div className="space-y-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs/foundations">Foundations</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Colors</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">Colors</h1>
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1 max-w-800">
          Figma에서 설계된 Integra UI 전용 컬러 시스템입니다.<br />
          모든 색상은 의미론적 역할에 최적화되어 디자인의 시각적 질서와 계층을 형성합니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 컬러 스케일 섹션 (신규 기능 적용) */}
      {Object.entries(COLORS).map(([name, shades]) => (
        <section key={name} className="space-y-24">
          <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">{name}</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-12">
            {Object.entries(shades).map(([step, hex]) => (
              <button
                key={step}
                onClick={() => copyHex(hex)}
                className="group text-left space-y-8 focus:outline-none"
              >
                <div 
                  className="h-80 w-full rounded-12 border border-integra-gray-100 shadow-sm transition-transform group-hover:scale-105 group-focus:ring-2 group-focus:ring-primary relative"
                  style={{ backgroundColor: hex }}
                >
                    <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/10 text-white fs-12 font-bold transition-opacity">Copy</span>
                </div>
                <div className="space-y-4">
                    <p className="fs-12 font-bold text-integra-gray-900">{step}</p>
                    <p className="fs-10 text-integra-gray-400 font-mono uppercase tracking-0">{hex}</p>
                </div>
              </button>
            ))}
          </div>
        </section>
      ))}

      {/* 3. 아토믹 설계 원칙 노트 (기존 컨텐츠 복구) */}
      <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
        <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
        <div className="space-y-12 fs-15 text-integra-gray-600 leading-24 tracking--1">
            <p>Integra UI의 컬러는 피그마와 동일한 HEX 값을 기반으로 정밀하게 토큰화된 시스템을 사용합니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Semantic:</strong> <code>--primary</code>, <code>--border</code>와 같이 역할 기반의 이름을 부여하여 테마 확장에 대응합니다.</li>
                <li><strong>Contrast:</strong> 가독성을 보장하기 위해 900번대는 텍스트, 50-100번대는 배경 및 보더로 구분하여 사용합니다.</li>
                <li><strong>Blue 500:</strong> 시스템의 핵심 조력자로서 모든 주요 액션 요소의 배경색을 담당합니다.</li>
            </ul>
        </div>
      </section>

    </div>
  );
}