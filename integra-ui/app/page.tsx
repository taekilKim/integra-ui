import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    // 전체 화면 중앙 정렬 및 배경색 설정
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-4">
      
      {/* 로그인 카드 컨테이너 */}
      <div className="w-full max-w-sm space-y-6 rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
        
        {/* 헤더 영역 */}
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold tracking-tight">Integra UI</h1>
          <p className="text-sm text-slate-500">
            한국형 디자인 시스템에 오신 것을 환영합니다.
          </p>
        </div>

        {/* 폼 영역 */}
        <div className="space-y-4">
          <div className="space-y-2">
            <label 
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" 
              htmlFor="email"
            >
              이메일
            </label>
            <Input id="email" placeholder="name@example.com" type="email" />
          </div>
          
          <div className="space-y-2">
            <label 
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" 
              htmlFor="password"
            >
              비밀번호
            </label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>

          <Button className="w-full">로그인하기</Button>
        </div>

        {/* 푸터 영역 */}
        <div className="text-center text-sm text-slate-500">
            계정이 없으신가요?{" "}
            <a href="#" className="underline underline-offset-4 hover:text-primary">
              회원가입
            </a>
        </div>
      </div>
    </main>
  );
}