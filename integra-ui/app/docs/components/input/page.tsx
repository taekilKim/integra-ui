import { InputDemo } from "@/components/demo/input-demo";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Lock } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export default function InputDocsPage() {
  const designTokens = [
    { property: "Height (높이)", class: "h-40", value: "40px" },
    { property: "Font Size (글자)", class: "fs-14", value: "14px" },
    { property: "Border Radius (곡률)", class: "rounded-8", value: "8px" },
    { property: "Padding H (좌우)", class: "px-12", value: "12px" },
  ];

  return (
    <div className="space-y-64 pb-120">
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
          표준화된 규격과 실무에서 자주 쓰이는 확장 패턴을 함께 제공합니다.
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-48">
        <TabsList className="bg-integra-gray-50 p-4 rounded-8">
          <TabsTrigger value="overview" className="fs-14">Overview</TabsTrigger>
          <TabsTrigger value="patterns" className="fs-14">Extended Patterns</TabsTrigger>
        </TabsList>

        {/* 탭 1: 기본 개요 */}
        <TabsContent value="overview" className="space-y-64">
          <section className="space-y-16">
            <div className="flex items-center justify-between">
              <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">Playground</h2>
              <Badge variant="outline" className="fs-12 px-8 py-2">Interactive</Badge>
            </div>
            <InputDemo />
          </section>

          <section className="space-y-24">
            <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">디자인 토큰</h2>
            <div className="rounded-12 border border-integra-gray-100 overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead className="bg-integra-gray-50 border-b border-integra-gray-100">
                  <tr className="fs-12 font-bold text-integra-gray-400">
                    <th className="px-24 py-16">속성</th>
                    <th className="px-24 py-16">클래스</th>
                    <th className="px-24 py-16">Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y border-integra-gray-100 fs-14">
                  {designTokens.map((t) => (
                    <tr key={t.property} className="hover:bg-integra-gray-50/50">
                      <td className="px-24 py-16 font-medium text-integra-gray-700">{t.property}</td>
                      <td className="px-24 py-16 font-mono text-integra-blue-600 font-bold">.{t.class}</td>
                      <td className="px-24 py-16 font-mono text-integra-gray-900">{t.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </TabsContent>

        {/* 탭 2: 확장 패턴 (이메일, 비밀번호, 금액 등) */}
        <TabsContent value="patterns" className="space-y-64">
          <section className="space-y-32">
            <div className="space-y-16">
              <h3 className="fs-20 font-bold text-integra-gray-900">1. Icons & Auth</h3>
              <div className="p-40 rounded-16 border border-integra-gray-200 bg-white space-y-24 max-w-960">
                <div className="grid gap-16 max-w-320">
                  <div className="space-y-8">
                    <Label className="fs-12 text-integra-gray-500">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-12 top-12 w-16 h-16 text-integra-gray-400" />
                      <Input className="pl-40" placeholder="hello@integra.ui" />
                    </div>
                  </div>
                  <div className="space-y-8">
                    <Label className="fs-12 text-integra-gray-500">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-12 top-12 w-16 h-16 text-integra-gray-400" />
                      <Input className="pl-40" type="password" placeholder="••••••••" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-16">
              <h3 className="fs-20 font-bold text-integra-gray-900">2. Currency & Number</h3>
              <div className="p-40 rounded-16 border border-integra-gray-200 bg-white max-w-960">
                <div className="space-y-8 max-w-320">
                  <Label className="fs-12 text-integra-gray-500">Price (KRW)</Label>
                  <div className="relative">
                    <span className="absolute right-12 top-8 fs-14 font-bold text-integra-gray-400">원</span>
                    <Input className="pr-32 text-right font-mono" placeholder="0" type="number" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}