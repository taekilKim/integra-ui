// tailwind.config.ts 전문
import type { Config } from "tailwindcss";

// 4px 단위 스케일 생성 함수 (0px ~ 160px)
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
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard", "sans-serif"],
      },

      // 1. Font Size (Line Height/Letter Spacing 제거, 순수 크기만)
      fontSize: {
        "12": "12px",
        "14": "14px",
        "16": "16px",
        "18": "18px",
        "20": "20px",
        "24": "24px",
        "28": "28px",
        "32": "32px",
        "40": "40px",
        "48": "48px",
      },

      // 2. Line Height (4px 단위 독립 토큰)
      // 사용 예: leading-16, leading-24 (1.5em)
      lineHeight: generate4pxScale(80),

      // 3. Letter Spacing (0을 기본값으로 설정 및 수치화)
      letterSpacing: {
        "0": "0",
        "-1": "-0.01em",
        "-2": "-0.02em",
        "-3": "-0.03em",
        "-4": "-0.04em",
      },

      // 4. Spacing (Padding, Margin, Gap - 4px 단위)
      spacing: generate4pxScale(160),

      // 5. Border Radius (4px 단위 독립 토큰)
      // 사용 예: rounded-4, rounded-8, rounded-12
      borderRadius: {
        ...generate4pxScale(40),
        full: "9999px",
      },

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
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;