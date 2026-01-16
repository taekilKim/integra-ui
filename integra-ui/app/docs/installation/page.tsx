import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/layout/code-block"; // ✨ CodeBlock 임포트
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

/**
 * [Integra UI - Installation Document SAI Version]
 * CodeBlock 컴포넌트를 사용하여 개발자 경험(DX)을 극대화한 설치 가이드입니다.
 */
export default function InstallationPage() {
  // 1. 코드 스니펫 데이터 정의
  const npmInstallCode = `npm install clsx tailwind-merge class-variance-authority lucide-react @radix-ui/react-popover @radix-ui/react-tooltip @radix-ui/react-accordion @radix-ui/react-tabs @radix-ui/react-dialog @radix-ui/react-checkbox @radix-ui/react-switch @radix-ui/react-select @radix-ui/react-toast`;
  
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
    { pattern: /^(p|m|gap|w|h|...)-/ }, { pattern: /^font-/ },
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
      colors: { /* ... Your color tokens ... */ },
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

  const globalsCssCode = `@import url("...");
@tailwind base; @tailwind components; @tailwind utilities;

@layer base {
  :root {
    --primary: 218 100% 58%; /* Blue 500 */
    --background: 0 0% 100%;
    /* ... and other semantic HSL tokens ... */
  }
}`;

  return (
    <div className="space-y-64 pb-120">
      
      {/* 1. 헤더 섹션: 표준 규격 준수 */}
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
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">설치하기</h1>
        <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
          Integra UI는 원자 단위의 수치 토큰을 기반으로 설계되었습니다.<br />
          아래 가이드를 따라 시스템 엔진을 당신의 프로젝트에 완벽하게 이식하세요.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      <section className="space-y-48">
        {/* Step 1: 패키지 설치 */}
        <div className="space-y-16">
            <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">1. 필수 패키지 설치</h2>
            <p className="fs-16 text-integra-gray-600 leading-24">Radix UI 기반의 원활한 구동을 위해 필요한 코어 라이브러리들을 설치합니다.</p>
            {/* ✨ CodeBlock 적용 */}
            <CodeBlock language="bash" code={npmInstallCode} />
        </div>

        {/* Step 2: 테일윈드 설정 */}
        <div className="space-y-16">
            <div className="flex items-center gap-12">
                <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">2. Tailwind Config 설정</h2>
                <Badge variant="default" className="fs-12 px-8 py-2">Must Copy</Badge>
            </div>
            <p className="fs-16 text-integra-gray-600 leading-24">
                Integra UI의 <strong>2px 아토믹 엔진 및 fs- 플러그인</strong>이 포함된 설정입니다.<br />
                <code>tailwind.config.ts</code>를 이 내용으로 교체하여 수치형 토큰을 활성화하세요.
            </p>
            {/* ✨ CodeBlock 적용 */}
            <CodeBlock language="typescript" code={tailwindConfigCode} />
        </div>

        {/* Step 3: 글로벌 스타일 */}
        <div className="space-y-16">
            <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">3. 글로벌 스타일 적용</h2>
            <p className="fs-16 text-integra-gray-600 leading-24">
                <code>app/globals.css</code> 상단에 Pretendard 폰트를 임포트하고 기본 변수를 설정합니다.
            </p>
            {/* ✨ CodeBlock 적용 */}
            <CodeBlock language="css" code={globalsCssCode} />
        </div>
      </section>
    </div>
  );
}