"use client"

import Link from "next/link";
import { 
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage 
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
import { Stack, Cursor, Lightning } from "@phosphor-icons/react";

export default function ComponentsIntro() {
  // 컴포넌트 갤러리 데이터
  const components = [
    { 
      name: "Button", 
      desc: "이벤트 트리거 및 액션 실행", 
      href: "/docs/components/button",
      preview: <Button appearance="default" variant="default" size="medium">버튼</Button>
    },
    { 
      name: "Input", 
      desc: "텍스트 데이터 입력 필드", 
      href: "/docs/components/input",
      preview: <div className="w-full max-w-200"><Input placeholder="이메일" className="h-40 bg-white" /></div>
    },
    { 
      name: "Badge", 
      desc: "상태 및 카테고리 표시", 
      href: "/docs/components/badge",
      preview: <Badge variant="secondary">신규</Badge>
    },
    { 
      name: "Switch", 
      desc: "On/Off 상태 토글", 
      href: "/docs/components/switch",
      preview: <Switch checked /> 
    },
    { 
      name: "Slider", 
      desc: "수치 범위 선택", 
      href: "/docs/components/slider",
      preview: <div className="w-160"><Slider defaultValue={[50]} max={100} step={1} /></div> 
    },
    { 
      name: "Avatar", 
      desc: "사용자 프로필 이미지", 
      href: "/docs/components/avatar",
      preview: <Avatar><AvatarImage src="https://github.com/shadcn.png" /><AvatarFallback>CN</AvatarFallback></Avatar> 
    },
    { 
      name: "Checkbox", 
      desc: "다중 선택 제어", 
      href: "/docs/components/checkbox",
      preview: <div className="flex items-center gap-8"><Checkbox id="c1" checked /><label htmlFor="c1" className="fs-14">동의</label></div>
    },
    { 
      name: "Skeleton", 
      desc: "로딩 상태 플레이스홀더", 
      href: "/docs/components/skeleton",
      preview: <div className="space-y-8 w-160"><Skeleton className="h-16 w-3/4 rounded-4" /><Skeleton className="h-12 w-full rounded-4" /></div> 
    },
    { 
      name: "Card", 
      desc: "콘텐츠 컨테이너", 
      href: "/docs/components/card",
      preview: <div className="w-160 h-80 rounded-12 border border-integra-gray-200 bg-white shadow-sm" /> 
    },
  ];

  // 설계 원칙 데이터
  const principles = [
    { title: "Radix UI Core", icon: <Stack className="w-20 h-20" />, desc: "검증된 접근성과 키보드 인터랙션을 기본으로 제공합니다." },
    { title: "Atomic Tokens", icon: <Lightning className="w-20 h-20" />, desc: "모든 컴포넌트는 4px 그리드 토큰으로 정교하게 조립됩니다." },
    { title: "Copy-Paste DX", icon: <Cursor className="w-20 h-20" />, desc: "설치 없이 코드를 복사하여 완전한 소유권을 가집니다." },
  ];

  return (
    <div className="space-y-64 pb-120">
      
      {/* 1. Header */}
      <div className="space-y-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs">문서</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>컴포넌트</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">컴포넌트</h1>
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          Integra UI의 핵심인 22종의 아토믹 컴포넌트 컬렉션입니다.<br />
          아래 갤러리에서 원하는 컴포넌트를 선택하여 상세 가이드를 확인하세요.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. Component Gallery (Showcase Grid) */}
      <section className="space-y-32">
        <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">갤러리</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
          {components.map((c) => (
            <Link key={c.name} href={c.href} className="group block h-full">
              <Card className="h-full border border-integra-gray-200 shadow-sm transition-all duration-200 hover:border-primary/50 hover:shadow-md overflow-hidden bg-white">
                {/* Preview Area: Light Gray Background */}
                <div className="h-160 bg-integra-gray-50 flex items-center justify-center p-24 group-hover:bg-primary/5 transition-colors border-b border-integra-gray-100">
                    {c.preview}
                </div>
                {/* Text Area */}
                <div className="p-24 space-y-8">
                    <div className="flex items-center justify-between">
                        <h3 className="fs-16 font-bold text-integra-gray-900 group-hover:text-primary transition-colors">{c.name}</h3>
                    </div>
                    <p className="fs-14 text-integra-gray-500 leading-20 line-clamp-2">{c.desc}</p>
                </div>
              </Card>
            </Link>
          ))}
          
          {/* More Components Placeholder */}
          <Link href="/docs/components/table" className="group block h-full">
              <Card className="h-full border border-dashed border-integra-gray-200 shadow-none flex items-center justify-center p-24 hover:border-integra-gray-300 hover:bg-integra-gray-50 transition-all">
                  <span className="fs-14 font-medium text-integra-gray-400 group-hover:text-integra-gray-600">모든 컴포넌트 보기 →</span>
              </Card>
          </Link>
        </div>
      </section>

      {/* 3. Design Principles (Bottom Summary) */}
      <section className="space-y-24 pt-32">
        <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">설계 원칙</h2>
        <div className="grid gap-16 md:grid-cols-3">
            {principles.map((rule) => (
                <div key={rule.title} className="p-24 border border-integra-gray-100 rounded-12 bg-white space-y-12">
                    <div className="flex items-center gap-8 text-primary font-bold fs-16">
                        {rule.icon} {rule.title}
                    </div>
                    <p className="fs-14 text-integra-gray-500 leading-24">{rule.desc}</p>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
}