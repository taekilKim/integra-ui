import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/layout/code-block";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export default function InstallationPage() {
  // 1. 필수 패키지 목록 (줄바꿈 및 모든 의존성 포함)
  const npmInstallCode = `npm install clsx tailwind-merge class-variance-authority lucide-react \\
  @radix-ui/react-slot \\
  @radix-ui/react-label \\
  @radix-ui/react-checkbox \\
  @radix-ui/react-radio-group \\
  @radix-ui/react-switch \\
  @radix-ui/react-toggle \\
  @radix-ui/react-toggle-group \\
  @radix-ui/react-slider \\
  @radix-ui/react-scroll-area \\
  @radix-ui/react-avatar \\
  @radix-ui/react-separator \\
  @radix-ui/react-select \\
  @radix-ui/react-accordion \\
  @radix-ui/react-tabs \\
  @radix-ui/react-dialog \\
  @radix-ui/react-popover \\
  @radix-ui/react-dropdown-menu \\
  @radix-ui/react-tooltip \\
  @radix-ui/react-toast`;
  
  // 2. Tailwind 설정 (config 파일만)
  const tailwindConfigCode = `import type { Config } from "tailwindcss";
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
      borderRadius: { ...generate2pxScale(80), full: "9999px" },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          hover: "hsl(var(--primary-hover))",
          active: "hsl(var(--primary-active))",
          foreground: "hsl(var(--primary-foreground))",
          subtle: "hsl(var(--primary-subtle))",
          "subtle-hover": "hsl(var(--primary-subtle-hover))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          hover: "hsl(var(--destructive-hover))",
          foreground: "hsl(var(--destructive-foreground))",
          subtle: "hsl(var(--destructive-subtle))",
        },
        integra: {
          gray: Object.fromEntries([50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(s => [s, \`hsl(var(--gray-\${s}))\`])),
          blue: Object.fromEntries([50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(s => [s, \`hsl(var(--blue-\${s}))\`])),
          green: Object.fromEntries([50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(s => [s, \`hsl(var(--green-\${s}))\`])),
          red: Object.fromEntries([50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(s => [s, \`hsl(var(--red-\${s}))\`])),
          orange: Object.fromEntries([50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(s => [s, \`hsl(var(--orange-\${s}))\`])),
          violet: Object.fromEntries([50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(s => [s, \`hsl(var(--violet-\${s}))\`])),
          grape: Object.fromEntries([50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(s => [s, \`hsl(var(--grape-\${s}))\`])),
        }
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
export default config;`;

  // 3. 글로벌 CSS
  const globalsCssCode = `@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");
@tailwind base; @tailwind components; @tailwind utilities;

@layer base {
  :root {
    /* Semantic Colors */
    --primary: var(--blue-500);
    --primary-foreground: 0 0% 100%;
    --background: 0 0% 100%;
    --foreground: 217 23% 13%;
    --border: 210 11% 91%;
    /* ... (생략된 Figma 토큰들도 모두 복사해서 넣으세요) */
  }

  /* 제목 태그 리셋 (SAI 필수) */
  h1, h2, h3, h4, h5, h6 {
    font-size: unset; font-weight: unset; line-height: unset; letter-spacing: unset;
  }
}

body {
  /* SAI 기본 타이포그래피 적용 */
  @apply bg-background text-integra-gray-900 antialiased font-sans fs-16 leading-24 tracking-0;
}`;

  return (
    <div className="space-y-48 pb-120">
      
      {/* 1. 헤더 섹션 */}
      <div className="space-y-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs">시작하기</BreadcrumbLink> {/* Getting Started -> 시작하기 */}
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>설치하기</BreadcrumbPage> {/* Installation -> 설치하기 */}
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">설치하기</h1>
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          Integra UI의 <strong>아토믹 엔진</strong>을 당신의 프로젝트에 이식하는 과정입니다.<br />
          기존의 설정 파일을 아래 내용으로 <strong>교체(Overwrite)</strong>하여 4px 그리드 시스템을 활성화하세요.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      <section className="space-y-64">
        {/* Step 1 */}
        <div className="space-y-16">
            <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">1. 필수 패키지 설치</h2>
            <p className="fs-16 text-integra-gray-600 leading-24">
              Integra UI의 모든 컴포넌트(28종)를 구동하기 위한 의존성 패키지를 설치합니다.
            </p>
            <CodeBlock language="bash" code={npmInstallCode} />
        </div>

        {/* Step 2 */}
        <div className="space-y-16">
            <div className="flex items-center gap-12">
                <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">2. Tailwind 엔진 이식 (Overwrite)</h2>
                <Badge variant="destructive" className="fs-12 px-8 py-2">기존 파일 교체 필수</Badge>
            </div>
            <p className="fs-16 text-integra-gray-600 leading-24">
                프로젝트 루트의 <code>tailwind.config.ts</code> 내용을 아래 코드로 <strong>완전히 덮어쓰세요.</strong><br />
                이 설정이 있어야 <code>fs-14</code>, <code>p-24</code> 등의 아토믹 토큰이 작동합니다.
            </p>
            <CodeBlock language="typescript" code={tailwindConfigCode} />
        </div>

        {/* Step 3 */}
        <div className="space-y-16">
            <div className="flex items-center gap-12">
                <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">3. 글로벌 스타일 및 폰트 적용</h2>
                <Badge variant="destructive" className="fs-12 px-8 py-2">기존 파일 교체 필수</Badge>
            </div>
            <p className="fs-16 text-integra-gray-600 leading-24">
                <code>app/globals.css</code> 파일의 내용을 아래 코드로 <strong>교체</strong>합니다.<br />
                Pretendard 폰트와 Integra UI 전용 컬러 변수들이 포함되어 있습니다.
            </p>
            <CodeBlock language="css" code={globalsCssCode} />
        </div>
      </section>
    </div>
  );
}