"use client"

import { InputDemo } from "@/components/demo/input-demo";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/layout/code-block"; // ✨ 추가
import { EnvelopeSimple, Lock } from "@phosphor-icons/react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

/**
 * [Integra UI - Input Document SAI Version]
 * 텍스트 입력을 위한 표준 원자 컴포넌트 및 확장 패턴 문서입니다.
 * 고도화된 CodeBlock을 통해 실무용 패턴 조립법을 안내합니다.
 */
export default function InputDocsPage() {
  const baseTokens = [
    { property: "Height (높이)", class: "h-40", value: "40px" },
    { property: "Font Size (글자)", class: "fs-14", value: "14px" },
    { property: "Border Radius (곡률)", class: "rounded-8", value: "8px" },
  ];

  const patternTokens = [
    { property: "Icon Padding (좌측)", class: "pl-40", value: "40px" },
    { property: "Unit Padding (우측)", class: "pr-32", value: "32px" },
    { property: "Icon Color", class: "text-integra-gray-400", value: "Gray 400" },
  ];

  // 코드 스니펫 정의
  const importCode = `import { Input } from "@/components/ui/input"`;
  
  const baseUsageCode = `<div className="grid w-full max-w-320 items-center gap-8">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Email Address" />
</div>`;

  const authPatternCode = `/* Icon + Input (Email/Password) */
<div className="relative">
  <EnvelopeSimple className="absolute left-12 top-12 w-16 h-16 text-integra-gray-400" />
  <Input className="pl-40" type="email" placeholder="name@example.com" />
</div>`;

  const financialPatternCode = `/* Unit + Input (Currency) */
<div className="relative">
  <span className="absolute right-12 top-8 fs-14 font-bold text-integra-gray-400">원</span>
  <Input className="pr-32 text-right font-mono" type="number" placeholder="0" />
</div>`;

  return (
    <div className="space-y-64 pb-120">
      
      {/* 1. 헤더 섹션: 표준 규격 준수 */}
      <div className="space-y-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/docs/components">Components</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbPage>Input</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">Input</h1>
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          사용자로부터 텍스트 데이터를 입력받는 가장 기본적인 원자 컴포넌트입니다.<br />
          표준화된 규격과 실무에서 자주 쓰이는 확장 패턴을 아토믹 조립을 통해 제공합니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      <Tabs defaultValue="overview" className="space-y-48">
        <TabsList className="bg-integra-gray-50 p-4 rounded-8">
          <TabsTrigger value="overview" className="fs-14 font-medium">Overview</TabsTrigger>
          <TabsTrigger value="patterns" className="fs-14 font-medium">Extended Patterns</TabsTrigger>
        </TabsList>

        {/* 탭 1: 기본 개요 */}
        <TabsContent value="overview" className="space-y-64">
          <section className="space-y-16">
            <div className="flex items-center justify-between">
              <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
              <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500 font-medium">Interactive</Badge>
            </div>
            <InputDemo />
          </section>

          <section className="space-y-24">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">디자인 토큰</h2>
            <div className="rounded-12 border border-integra-gray-100 overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead className="bg-integra-gray-50 border-b border-integra-gray-100">
                  <tr className="fs-12 font-bold text-integra-gray-400">
                    <th className="px-24 py-16">속성</th><th className="px-24 py-16">토큰 클래스</th><th className="px-24 py-16">Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y border-integra-gray-100 fs-14">
                  {baseTokens.map((t) => (
                    <tr key={t.property} className="hover:bg-integra-gray-50/50 transition-colors">
                      <td className="px-24 py-16 font-medium text-integra-gray-700">{t.property}</td>
                      <td className="px-24 py-16 font-mono text-integra-blue-600 font-bold">.{t.class}</td>
                      <td className="px-24 py-16 font-mono text-integra-gray-900">{t.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-24">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
            <div className="space-y-16">
              <p className="fs-14 text-integra-gray-500 font-medium tracking-1 uppercase">1. Import Component</p>
              <CodeBlock code={importCode} />
              <p className="fs-14 text-integra-gray-500 font-medium tracking-1 uppercase mt-32">2. Basic Usage</p>
              <CodeBlock code={baseUsageCode} />
            </div>
          </section>
        </TabsContent>

        {/* 탭 2: 확장 패턴 (Input Patterns) */}
        <TabsContent value="patterns" className="space-y-64">
          <section className="space-y-32">
            <h3 className="fs-20 font-bold text-integra-gray-900 tracking--1">Pattern Showcase</h3>
            <div className="p-40 rounded-16 border border-integra-gray-200 bg-white max-w-960 mx-auto w-full flex items-center justify-center">
              <div className="grid gap-24 w-full max-w-320">
                <div className="space-y-8">
                  <Label className="fs-12 text-integra-gray-500">Email Address (Icon Pattern)</Label>
                  <div className="relative">
                    <EnvelopeSimple className="absolute left-12 top-12 w-16 h-16 text-integra-gray-400" />
                    <Input className="pl-40" placeholder="hello@integra.ui" type="email" />
                  </div>
                </div>
                <div className="space-y-8">
                  <Label className="fs-12 text-integra-gray-500">Price (Currency Pattern)</Label>
                  <div className="relative">
                    <span className="absolute right-12 top-8 fs-14 font-bold text-integra-gray-400">원</span>
                    <Input className="pr-32 text-right font-mono" placeholder="0" type="number" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-24">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">패턴 디자인 토큰</h2>
            <div className="rounded-12 border border-integra-gray-100 overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead className="bg-integra-gray-50 border-b border-integra-gray-100">
                  <tr className="fs-12 font-bold text-integra-gray-400">
                    <th className="px-24 py-16">패턴 속성</th><th className="px-24 py-16">토큰 클래스</th><th className="px-24 py-16">Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y border-integra-gray-100 fs-14">
                  {patternTokens.map((t) => (
                    <tr key={t.property} className="hover:bg-integra-gray-50/50 transition-colors">
                      <td className="px-24 py-16 font-medium text-integra-gray-700">{t.property}</td>
                      <td className="px-24 py-16 font-mono text-primary font-bold">.{t.class}</td>
                      <td className="px-24 py-16 font-mono text-integra-gray-900">{t.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-24">
            <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Pattern Recipe</h2>
            <div className="space-y-32">
               <div className="space-y-12">
                 <p className="fs-14 text-integra-gray-500 font-medium tracking-1 uppercase">1. Icon + Input Combination</p>
                 <CodeBlock code={authPatternCode} />
               </div>
               <div className="space-y-12">
                 <p className="fs-14 text-integra-gray-500 font-medium tracking-1 uppercase">2. Currency / Unit Combination</p>
                 <CodeBlock code={financialPatternCode} />
               </div>
            </div>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}