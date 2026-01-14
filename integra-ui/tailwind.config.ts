import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

// 2px 단위로 스케일을 생성하는 함수 (0px ~ 400px)
const generate2pxScale = (maxPx: number) => {
  const scale: Record<string, string> = {};
  for (let i = 0; i <= maxPx; i += 2) {
    scale[i] = `${i}px`;
  }
  // 13, 15px 같은 홀수 수치 수동 추가
  scale[13] = "13px";
  scale[15] = "15px";
  return scale;
};

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  // ✨ 세이프리스트 강화: 정규식을 단순화하여 빌드 시 무조건 포함되게 합니다.
  safelist: [
    { pattern: /^fs-/ },
    { pattern: /^leading-/ },
    { pattern: /^rounded-/ },
    { pattern: /^(p|m|gap|w|h|px|py|pl|pr|pt|pb|mx|my|ml|mr|mt|mb)-/ },
    { pattern: /^font-/ },
  ],
  theme: {
    // 테일윈드 기본 rem 수치를 제거하고 2px 그리드 주입
    spacing: {
      ...generate2pxScale(400),
      "full": "100%",
      "screen": "100vh",
      "min": "min-content",
      "max": "max-content",
      "fit": "fit-content",
    },
    extend: {
      fontFamily: { sans: ["Pretendard", "sans-serif"] },
      // 행간 범위를 160px까지 확장 (대형 폰트 대응)
      lineHeight: generate2pxScale(160),
      letterSpacing: { 
        "0": "0", 
        "-1": "-0.01em", 
        "-2": "-0.02em", 
        "-3": "-0.03em", 
        "-4": "-0.04em" 
      },
      maxWidth: { 
        ...generate2pxScale(1400),
        "none": "none",
        "full": "100%",
        "min": "min-content",
        "max": "max-content",
        "fit": "fit-content",
      },
      borderRadius: { 
        ...generate2pxScale(80), 
        full: "9999px" 
      },
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
  plugins: [
    require("tailwindcss-animate"),
    plugin(function({ addUtilities }) {
      const fontSizes = [12, 13, 14, 15, 16, 18, 20, 24, 28, 32, 40, 48, 56, 64, 72, 80, 96, 128, 160];
      const fontSizeUtilities = fontSizes.reduce((acc: Record<string, { fontSize: string }>, size) => {
        acc[`.fs-${size}`] = { fontSize: `${size}px` };
        return acc;
      }, {});
      // ✨ addUtilities를 통해 등록하여 Tailwind의 기본 리셋(Preflight)보다 높은 우선순위를 갖게 합니다.
      addUtilities(fontSizeUtilities);
    })
  ],
};
export default config;