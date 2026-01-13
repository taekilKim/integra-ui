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
          Integra UI의 아토믹 토큰 시스템을 당신의 프로젝트에 이식하는 방법입니다.
        </p>
      </div>

      <hr className="border-slate-100" />

      <section className="space-y-32">
        <div className="space-y-16">
            <h2 className="text-24 font-bold tracking--2">1. 필수 패키지 설치</h2>
            <p className="text-16 text-slate-600">Tailwind CSS와 함께 아토믹 구동을 위한 필수 라이브러리를 설치합니다.</p>
            <Card className="bg-slate-950 p-24 rounded-12">
                <code className="text-white text-14 font-mono leading-24">
                    npm install clsx tailwind-merge class-variance-authority lucide-react
                </code>
            </Card>
        </div>

        <div className="space-y-16">
            <h2 className="text-24 font-bold tracking--2">2. Tailwind 설정 (중요)</h2>
            <p className="text-16 text-slate-600">
                Integra UI의 <strong>4px 그리드 및 수치형 토큰</strong>을 사용하기 위해 <code>tailwind.config.ts</code>를 아래와 같이 수정해야 합니다. 
                이 설정이 없으면 <code>text-14</code>, <code>p-16</code> 등의 클래스가 작동하지 않습니다.
            </p>
            <Card className="bg-slate-50 p-24 border rounded-12 overflow-x-auto">
                <pre className="text-13 font-mono leading-20 text-slate-800">
{`// tailwind.config.ts 핵심 설정 부분
const generate4pxScale = (maxPx: number) => {
  const scale: any = {};
  for (let i = 0; i <= maxPx; i += 4) { scale[i] = \`\${i}px\`; }
  return scale;
};

// extend 내부에 추가
fontSize: {
  "12": "12px", "14": "14px", "16": "16px", "20": "20px", "24": "24px", ...
},
lineHeight: generate4pxScale(80),
spacing: generate4pxScale(400),
borderRadius: generate4pxScale(40),`}
                </pre>
            </Card>
        </div>

        <div className="space-y-16">
            <h2 className="text-24 font-bold tracking--2">3. 원자(Atoms) 복사하기</h2>
            <p className="text-16 text-slate-600">
                이제 원하는 컴포넌트의 코드를 <code>components/ui</code> 폴더에 복사하여 즉시 사용하세요. 
                별도의 빌드 과정 없이 코드 수정이 자유롭습니다.
            </p>
        </div>
      </section>
    </div>
  );
}