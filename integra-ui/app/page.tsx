import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="container relative flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 min-h-[calc(100vh-3.5rem)]">
      
      {/* 왼쪽: 텍스트 소개 영역 */}
      <div className="relative flex h-full flex-col p-10 text-white lg:flex dark:border-r lg:p-20 bg-slate-900">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          Integra UI
        </div>
        <div className="relative z-20 mt-auto">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">
            한국 개발자를 위한<br />
            가장 직관적인 디자인 시스템
          </h1>
          <p className="text-lg text-slate-300 mb-8">
            Pretendard 폰트 기본 탑재, shadcn 아키텍처 기반.<br />
            복사하고 붙여넣기만 하면 끝납니다.
          </p>
          <div className="flex gap-4">
            <Link href="/docs">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-200">
                    문서 보러가기
                </Button>
            </Link>
            <Link href="https://github.com">
                <Button variant="outline" size="lg" className="bg-transparent text-white hover:bg-white/10 hover:text-white border-white/20">
                    GitHub
                </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* 오른쪽: 데모(로그인 폼) 영역 */}
      <div className="flex h-full items-center justify-center p-8 bg-slate-50">
        <div className="w-full max-w-sm space-y-4">
            <div className="text-center mb-8">
                <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">Live Demo</p>
            </div>
            
            {/* 아까 만든 카드 컴포넌트 재사용 */}
            <Card>
                <CardHeader className="text-center">
                <CardTitle>Integra UI</CardTitle>
                <CardDescription>
                    실제 컴포넌트가 어떻게 보이는지 확인하세요.
                </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="email">이메일</label>
                    <Input id="email" placeholder="name@example.com" type="email" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="password">비밀번호</label>
                    <Input id="password" type="password" />
                </div>
                <Button className="w-full">로그인하기</Button>
                </CardContent>
                <CardFooter className="justify-center">
                <p className="text-sm text-muted-foreground">
                    계정이 없으신가요? <span className="underline cursor-pointer hover:text-primary">회원가입</span>
                </p>
                </CardFooter>
            </Card>
        </div>
      </div>

    </div>
  );
}