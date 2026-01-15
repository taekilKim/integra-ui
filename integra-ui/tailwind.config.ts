import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

// 2px 단위로 스케일을 생성하는 함수 (0px ~ 400px)
const generate2pxScale = (maxPx: number) => {
  const scale: Record<string, string> = {};
  for (let i = 0; i <= maxPx; i += 2) {
    scale[i] = `${i}px`;
  }
  // 13, 15px 같은 특수 홀수 수치 수동 추가
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
  // SAI 원칙: 동적 클래스 빌드 포함 보장
  safelist: [
    { pattern: /^fs-/ },
    { pattern: /^leading-/ },
    { pattern: /^rounded-/ },
    { pattern: /^(p|m|gap|w|h|px|py|pl|pr|pt|pb|mx|my|ml|mr|mt|mb)-/ },
    { pattern: /^font-/ },
  ],
  theme: {
    // 테일윈드 기본 rem 단위를 제거하고 2px 수치형 그리드 주입
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
        
        /* ✨ SAI 시맨틱 컬러 엔진 (State 기반 자동 연동) */
        primary: {
          DEFAULT: "hsl(var(--primary))",
          hover: "hsl(var(--primary-hover))",
          active: "hsl(var(--primary-active))",
          foreground: "hsl(var(--primary-foreground))",
          subtle: "hsl(var(--primary-subtle))",
          "subtle-hover": "hsl(var(--primary-subtle-hover))",
          "subtle-foreground": "hsl(var(--primary-subtle-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          hover: "hsl(var(--destructive-hover))",
          foreground: "hsl(var(--destructive-foreground))",
          subtle: "hsl(var(--destructive-subtle))",
          "subtle-hover": "hsl(var(--destructive-subtle-hover))",
        },

        // 원자 단위 컬러 팔레트 (Figma 데이터 기반)
        integra: {
          gray: Object.fromEntries([50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(s => [s, `hsl(var(--gray-${s}))`])),
          blue: Object.fromEntries([50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(s => [s, `hsl(var(--blue-${s}))`])),
          green: Object.fromEntries([50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(s => [s, `hsl(var(--green-${s}))`])),
          red: Object.fromEntries([50, 100, 500, 600].map(s => [s, `hsl(var(--red-${s}))`])),
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
      const fsUtils: Record<string, { fontSize: string }> = {};
      // 12px ~ 160px 모든 짝수 사이즈 fs- 클래스 자동 생성
      for (let i = 12; i <= 160; i += 2) {
        fsUtils[`.fs-${i}`] = { fontSize: `${i}px` };
      }
      // 특수 홀수 사이즈 수동 추가
      [13, 15].forEach(size => {
        fsUtils[`.fs-${size}`] = { fontSize: `${size}px` };
      });
      addUtilities(fsUtils);
    })
  ],
};
export default config;