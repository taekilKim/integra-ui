import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function InstallationPage() {
  return (
    <div className="space-y-48 pb-120">
      <div className="space-y-16">
        <div className="flex items-center gap-8 font-mono text-12 text-primary">
            <span>Getting Started</span>
            <span>/</span>
            <span className="font-bold">Installation</span>
        </div>
        <h1 className="text-40 font-bold leading-48 tracking--4">설치하기</h1>
        <p className="text-20 text-muted-foreground leading-32 tracking--1 max-w-600">
          Integra UI는 원자 단위의 수치 토큰을 사용합니다. 아래 가이드를 따라 시스템을 당신의 프로젝트에 완벽하게 이식하세요.
        </p>
      </div>

      <hr className="border-slate-100" />

      <section className="space-y-40">
        {/* Step 1 */}
        <div className="space-y-16">
            <h2 className="text-24 font-bold tracking--2">1. 필수 패키지 설치</h2>
            <p className="text-16 text-slate-600">React 및 Radix UI 기반의 원활한 구동을 위해 다음 라이브러리를 설치합니다.</p>
            <Card className="bg-slate-950 p-24 rounded-12">
                <code className="text-white text-14 font-mono leading-24">
                    npm install clsx tailwind-merge class-variance-authority lucide-react @radix-ui/react-popover @radix-ui/react-tooltip @radix-ui/react-accordion @radix-ui/react-tabs @radix-ui/react-dialog @radix-ui/react-checkbox @radix-ui/react-switch @radix-ui/react-select
                </code>
            </Card>
        </div>

        {/* Step 2 */}
        <div className="space-y-16">
            <div className="flex items-center gap-12">
                <h2 className="text-24 font-bold tracking--2">2. Tailwind Config 설정 (Full)</h2>
                <Badge className="bg-primary">Must Copy</Badge>
            </div>
            <p className="text-16 text-slate-600 leading-24">
                Integra UI의 <strong>4px 아토믹 토큰 및 Safelist</strong>가 포함된 전체 설정입니다. <code>tailwind.config.ts</code>를 이 내용으로 교체하는 것을 강력 권장합니다.
            </p>
            <Card className="bg-slate-950 p-24 rounded-12 overflow-x-auto max-h-500 overflow-y-auto border border-slate-800 shadow-2xl">
                <pre className="text-13 font-mono leading-20 text-slate-300">
{`import type { Config } from "tailwindcss";

const generate4pxScale = (maxPx: number) => {
  const scale: Record<string, string> = {};
  for (let i = 0; i <= maxPx; i += 4) { scale[i] = \`\${i}px\`; }
  return scale;
};

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  safelist: [
    { pattern: /text-(12|14|16|18|20|24|28|32|40|48|56|64|72|80|96|128|160)/ },
    { pattern: /leading-(0|4|8|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80)/ },
    { pattern: /font-(regular|medium|semibold|bold)/ },
    { pattern: /rounded-(0|4|8|12|16|20|24|28|32|36|40)/ },
    { pattern: /(p|m|gap|w|h|px|py|pl|pr|pt|pb|mx|my|ml|mr|mt|mb)-(0|4|8|12|16|20|24|28|32|40|48|56|64|80|120|160|200|240|280|320|400)/ },
  ],
  theme: {
    extend: {
      fontFamily: { sans: ["Pretendard", "sans-serif"] },
      fontSize: {
        "12": "12px", "14": "14px", "16": "16px", "18": "18px", "20": "20px", 
        "24": "24px", "28": "28px", "32": "32px", "40": "40px", "48": "48px", 
        "56": "56px", "64": "64px", "72": "72px", "80": "80px", "96": "96px"
      },
      lineHeight: generate4pxScale(80),
      spacing: generate4pxScale(400),
      borderRadius: { ...generate4pxScale(40), full: "9999px" },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;`}
                </pre>
            </Card>
        </div>

        {/* Step 3 */}
        <div className="space-y-16">
            <h2 className="text-24 font-bold tracking--2">3. 글로벌 스타일 적용</h2>
            <p className="text-16 text-slate-600"><code>app/globals.css</code> 파일 상단에 Pretendard 폰트와 기본 스타일을 정의하세요.</p>
            <Card className="bg-slate-50 p-24 border rounded-12 overflow-x-auto">
                <pre className="text-13 font-mono text-slate-800">
{`@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");
@tailwind base; @tailwind components; @tailwind utilities;

@layer base {
  :root {
    --primary: 218 100% 58%; /* Blue 500 */
    --background: 0 0% 100%;
    --foreground: 217 23% 13%;
    --border: 210 11% 91%;
    /* ... 기타 HSL 토큰 명세 참고 */
  }
}`}
                </pre>
            </Card>
        </div>
      </section>
    </div>
  );
}