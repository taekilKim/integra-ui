import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-4">
      {/* 
        <div> 대신 <Card>를 사용합니다. 
        이제 테두리, 그림자, 배경색을 일일이 신경 쓸 필요가 없습니다.
      */}
      <Card className="w-full max-w-sm">
        
        {/* 헤더 영역: 제목과 설명 */}
        <CardHeader className="text-center">
          <CardTitle>Integra UI</CardTitle>
          <CardDescription>
            한국형 디자인 시스템에 오신 것을 환영합니다.
          </CardDescription>
        </CardHeader>

        {/* 본문 영역: 입력 폼 */}
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

        {/* 푸터 영역: 하단 링크 */}
        <CardFooter className="justify-center">
          <p className="text-sm text-muted-foreground">
            계정이 없으신가요?{" "}
            <a href="#" className="underline hover:text-primary">
              회원가입
            </a>
          </p>
        </CardFooter>
      
      </Card>
    </main>
  );
}