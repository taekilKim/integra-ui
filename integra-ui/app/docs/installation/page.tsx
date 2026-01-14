import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export default function InstallationPage() {
  return (
    <div className="space-y-48 pb-120">
      
      {/* 1. 헤더 섹션: 표준 Breadcrumb 및 SAI 타이포그래피 적용 */}
      <div className="space-y-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs">Getting Started</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Installation</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900">설치하기</h1>
        <p className="fs-20 text-integra-gray-500 leading-32">
          Integra UI는 원자 단위의 수치 토큰을 기반으로 설계되었습니다.<br />
          아래 가이드를 따라 시스템 엔진을 당신의 프로젝트에 완벽하게 이식하세요.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      <section className="space-y-64">
        {/* Step 1: 패키지 설치 */}
        <div className="space-y-16">
            <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">1. 필수 패키지 설치</h2>
            <p className="fs-16 text-integra-gray-600 leading-24">React 및 Radix UI 기반의 원활한 구동을 위해 필요한 코어 라이브러리들을 설치합니다.</p>
            <Card className="bg-integra-gray-900 p-24 rounded-12 border-integra-gray-800 shadow-2xl">
                <code className="text-white fs-14 font-mono leading-24 break-all">
                    npm install clsx tailwind-merge class-variance-authority lucide-react @radix-ui/react-popover @radix-ui/react-tooltip @radix-ui/react-accordion @radix-ui/react-tabs @radix-ui/react-dialog @radix-ui/react-checkbox @radix-ui/react-switch @radix-ui/react-select
                </code>
            </Card>
        </div>

        {/* Step 2: 테일윈드 설정 (가장 중요) */}
        <div className="space-y-16">
            <div className="flex items-center gap-12">
                <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">2. Tailwind Config 설정</h2>
                <Badge variant="default" className="fs-12 px-8 py-2">Strict Setup</Badge>
            </div>
            <p className="fs-16 text-integra-gray-600 leading-24">
                Integra UI의 <strong>2px 아토믹 엔진 및 fs- 플러그인</strong>이 포함된 전체 설정입니다.<br />
                <code>tailwind.config.ts</code>를 이 내용으로 교체하여 수치형 토큰을 활성화하세요.
            </p>
            <Card className="bg-integra-gray-900 p-24 rounded-12 overflow-x-auto max-h-500 overflow-y-auto border border-integra-gray-800 shadow-2xl">
                <pre className="fs-13 font-mono leading-20 text-integra-gray-300">
{`import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const generate2pxScale = (maxPx: number) => {
  const scale: Record<string, string> = {};
  for (let i = 0; i <= maxPx; i += 2) { scale[i] = \`\${i}px\`; }
  scale[13] = "13px"; scale[15] = "15px";
  return scale;
};

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  safelist: [
    { pattern: /^fs-/ }, { pattern: /^leading-/ }, { pattern: /^rounded-/ },
    { pattern: /^(p|m|gap|w|h|px|py|pl|pr|pt|pb|mx|my|ml|mr|mt|mb)-/ },
    { pattern: /^font-/ },
  ],
  theme: {
    spacing: {
      ...generate2pxScale(400),
      "full": "100%", "screen": "100vh", "min": "min-content", "max": "max-content", "fit": "fit-content",
    },
    extend: {
      fontFamily: { sans: ["Pretendard", "sans-serif"] },
      lineHeight: generate2pxScale(160),
      letterSpacing: { "0": "0", "-1": "-0.01em", "-2": "-0.02em", "-3": "-0.03em", "-4": "-0.04em" },
      maxWidth: { ...generate2pxScale(1400), "none": "none", "full": "100%" },
      borderRadius: { ...generate2pxScale(80), full: "9999px" },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        // ... (Figma 색상 토큰 추가)
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function({ addUtilities }) {
      const fsUtils: Record<string, { fontSize: string }> = {};
      for (let i = 12; i <= 160; i += 2) { fsUtils[\`.fs-\${i}\`] = { fontSize: \`\${i}px\` }; }
      [13, 15].forEach(size => { fsUtils[\`.fs-\${size}\`] = { fontSize: \`\${size}px\` }; });
      addUtilities(fsUtils);
    })
  ],
};
export default config;`}
                </pre>
            </Card>
        </div>

        {/* Step 3: 글로벌 스타일 */}
        <div className="space-y-16">
            <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">3. 글로벌 스타일 적용</h2>
            <p className="fs-16 text-integra-gray-600 leading-24">
                <code>app/globals.css</code> 상단에 폰트를 임포트하고 기본 변수를 설정합니다.
            </p>
            <Card className="bg-integra-gray-50 p-24 border border-integra-gray-200 rounded-16 overflow-x-auto">
                <pre className="fs-13 font-mono text-integra-gray-700 leading-20">
{`@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");
@tailwind base; @tailwind components; @tailwind utilities;

@layer base {
  :root {
    --primary: 218 100% 58%; /* Blue 500 */
    --background: 0 0% 100%;
    --foreground: 217 23% 13%;
    --border: 210 11% 91%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: unset; font-weight: unset; line-height: unset; letter-spacing: unset;
  }
}

body {
  @apply bg-background text-integra-gray-900 antialiased font-sans;
  line-height: 1.5;
}`}
                </pre>
            </Card>
        </div>
      </section>
    </div>
  );
}