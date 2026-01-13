import { Card } from "@/components/ui/card";

export default function InstallationPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">설치하기 (Installation)</h1>
        <p className="text-lg text-muted-foreground">
          Integra UI를 당신의 Next.js 프로젝트에 적용하는 방법입니다.
        </p>
      </div>

      <hr className="border-slate-200" />

      <section className="space-y-6">
        <div className="space-y-4">
            <h2 className="text-xl font-semibold">1. 프로젝트 준비</h2>
            <p className="text-sm text-slate-600">Tailwind CSS가 설치된 Next.js 프로젝트가 필요합니다.</p>
            <Card className="bg-slate-950 p-4">
                <code className="text-white text-sm font-mono">
                    npx create-next-app@latest my-app --typescript --tailwind --eslint
                </code>
            </Card>
        </div>

        <div className="space-y-4">
            <h2 className="text-xl font-semibold">2. 필수 유틸리티 설치</h2>
            <p className="text-sm text-slate-600">스타일 충돌 방지를 위해 다음 패키지들을 설치하세요.</p>
            <Card className="bg-slate-950 p-4">
                <code className="text-white text-sm font-mono">
                    npm install clsx tailwind-merge class-variance-authority lucide-react
                </code>
            </Card>
        </div>

        <div className="space-y-4">
            <h2 className="text-xl font-semibold">3. cn 함수 추가</h2>
            <p className="text-sm text-slate-600">
                <code>lib/utils.ts</code> 파일을 만들고 아래 코드를 붙여넣으세요.
            </p>
            <Card className="bg-slate-50 p-4 border overflow-x-auto">
                <pre className="text-sm font-mono text-slate-800">
{`import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`}
                </pre>
            </Card>
        </div>

        <div className="space-y-4">
            <h2 className="text-xl font-semibold">4. 컴포넌트 가져오기</h2>
            <p className="text-sm text-slate-600">
                이제 원하는 컴포넌트(예: Button)의 코드를 복사해서 
                <code>components/ui/button.tsx</code> 파일을 만들면 끝입니다.
            </p>
        </div>
      </section>
    </div>
  );
}