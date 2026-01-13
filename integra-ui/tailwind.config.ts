import type { Config } from "tailwindcss";

const generate4pxScale = (maxPx: number) => {
  const scale: Record<string, string> = {};
  for (let i = 0; i <= maxPx; i += 4) {
    scale[i] = `${i}px`;
  }
  return scale;
};

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  // ✨ 추가: 수치형 토큰 클래스들이 동적으로 조합되어도 빌드에 포함되도록 강제 설정
  safelist: [
    {
      // 폰트 사이즈 패턴
      pattern: /text-(12|14|16|18|20|24|28|32|40|48|56|64|72|80|96|128|160)/,
    },
    {
      // 행간 패턴 (0px ~ 80px)
      pattern: /leading-(0|4|8|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80)/,
    },
    {
      // 폰트 굵기 패턴
      pattern: /font-(regular|medium|semibold|bold)/,
    },
    {
      // 곡률 패턴 (0px ~ 40px)
      pattern: /rounded-(0|4|8|12|16|20|24|28|32|36|40)/,
    },
    {
      // 간격/너비/높이 패턴 (p, m, gap, w, h 등 주요 수치 400px까지)
      pattern: /(p|m|gap|w|h|px|py|pl|pr|pt|pb|mx|my|ml|mr|mt|mb)-(0|4|8|12|16|20|24|28|32|40|48|56|64|80|120|160|200|240|280|320|400)/,
    },
  ],
  theme: {
    extend: {
      fontFamily: { sans: ["Pretendard", "sans-serif"] },
      fontSize: {
        "12": "12px", "14": "14px", "16": "16px", "18": "18px",
        "20": "20px", "24": "24px", "32": "32px", "40": "40px",
        "48": "48px", "56": "56px", "64": "64px", "72": "72px",
        "80": "80px", "96": "96px", "128": "128px", "160": "160px",
      },
      lineHeight: generate4pxScale(80),
      // ✨ 레이아웃을 위해 400px까지 확장
      spacing: generate4pxScale(400),
      borderRadius: {
        ...generate4pxScale(40),
        full: "9999px",
      },
      // tailwind.config.ts의 colors 부분 수정
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        // Integra UI 전용 팔레트 네임스페이스
        integra: {
          gray: Object.fromEntries([50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(s => [s, `hsl(var(--gray-${s}))`])),
          blue: Object.fromEntries([50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(s => [s, `hsl(var(--blue-${s}))`])),
          green: Object.fromEntries([50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(s => [s, `hsl(var(--green-${s}))`])),
          red: Object.fromEntries([50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(s => [s, `hsl(var(--red-${s}))`])),
          orange: Object.fromEntries([50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(s => [s, `hsl(var(--orange-${s}))`])),
          violet: Object.fromEntries([50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(s => [s, `hsl(var(--violet-${s}))`])),
          grape: Object.fromEntries([50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(s => [s, `hsl(var(--grape-${s}))`])),
        }
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;