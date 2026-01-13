import { Card } from "@/components/ui/card";

export default function InstallationPage() {
  return (
    <div className="space-y-48 pb-80">
      <div className="space-y-16">
        <div className="flex items-center gap-8 font-mono text-12 text-primary">
            <span>Getting Started</span>
            <span>/</span>
            <span className="font-bold">Installation</span>
        </div>
        <h1 className="text-40 font-bold leading-48 tracking--4">설치하기</h1>
        <p className="text-20 text-muted-foreground leading-32 tracking--1 max-w-600">
          Integra UI의 4px 아토믹 토큰 시스템을 당신의 프로젝트에 이식하는 방법입니다.
        </p>
      </div>

      <hr className="border-slate-100" />

      <section className="space-y-32">
        {/* Step 1 */}
        <div className="space-y-16">
            <h2 className="text-24 font-bold tracking--2">1. 필수 패키지 설치</h2>
            <p className="text-16 text-slate-600">Tailwind CSS가 설치된 프로젝트에서 아래 라이브러리들을 설치하세요.</p>
            <Card className="bg-slate-950 p-24 rounded-12">
                <code className="text-white text-14 font-mono leading-24">
                    npm install clsx tailwind-merge class-variance-authority lucide-react
                </code>
            </Card>
        </div>

        {/* Step 2 */}
        <div className="space-y-16">
            <h2 className="text-24 font-bold tracking--2">2. Tailwind 설정 업데이트 (필수)</h2>
            <p className="text-16 text-slate-600 leading-24">
                Integra UI의 수치형 토큰(예: <code>text-14</code>, <code>p-24</code>)을 활성화하기 위해 <code>tailwind.config.ts</code>를 다음과 같이 수정해야 합니다.
            </p>
            <Card className="bg-slate-950 p-24 rounded-12 overflow-x-auto">
                <pre className="text-13 font-mono leading-20 text-slate-300">
{`import type { Config } from "tailwindcss";

const generate4pxScale = (maxPx: number) => {
  const scale: any = {};
  for (let i = 0; i <= maxPx; i += 4) { scale[i] = \`\${i}px\`; }
  return scale;
};

const config: Config = {
  theme: {
    extend: {
      fontFamily: { sans: ["Pretendard", "sans-serif"] },
      fontSize: {
        "12": "12px", "14": "14px", "16": "16px", "18": "18px",
        "20": "20px", "24": "24px", "28": "28px", "32": "32px", "40": "40px"
      },
      lineHeight: generate4pxScale(80),
      spacing: generate4pxScale(400),
      borderRadius: generate4pxScale(40),
    },
  },
};

export default config;`}
                </pre>
            </Card>
        </div>

        {/* Step 3 */}
        <div className="space-y-16">
            <h2 className="text-24 font-bold tracking--2">3. 컴포넌트 복사</h2>
            <p className="text-16 text-slate-600">
                이제 문서 사이트의 Components 메뉴에서 원하는 컴포넌트의 코드를 복사하여 
                당신의 프로젝트 <code>components/ui</code> 폴더에 넣어 사용하세요.
            </p>
        </div>
      </section>
    </div>
  );
}