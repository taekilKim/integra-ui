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
  // 동적 클래스 생성을 위한 세이프리스트
  safelist: [
    {
      pattern: /text-(12|13|14|15|16|18|20|24|28|32|40|48|56|64|72|80|96|128|160)/,
    },
    {
      pattern: /leading-(0|4|8|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80)/,
    },
    {
      pattern: /font-(regular|medium|semibold|bold)/,
    },
    {
      pattern: /rounded-(0|4|8|12|16|20|24|28|32|36|40)/,
    },
    {
      pattern: /(p|m|gap|w|h|px|py|pl|pr|pt|pb|mx|my|ml|mr|mt|mb)-(0|4|8|12|16|20|24|28|32|40|48|56|64|80|120|160|200|240|280|320|400)/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard", "sans-serif"],
      },
      fontSize: {
        "12": "12px",
        "13": "13px",
        "14": "14px",
        "15": "15px",
        "16": "16px",
        "18": "18px",
        "20": "20px",
        "24": "24px",
        "28": "28px",
        "32": "32px",
        "40": "40px",
        "48": "48px",
        "56": "56px",
        "64": "64px",
        "72": "72px",
        "80": "80px",
        "96": "96px",
        "128": "128px",
        "160": "160px",
      },
      lineHeight: generate4pxScale(80),
      letterSpacing: {
        "0": "0",
        "-1": "-0.01em",
        "-2": "-0.02em",
        "-3": "-0.03em",
        "-4": "-0.04em",
      },
      // 일반 간격 (Padding, Margin, Gap, Width, Height)
      spacing: generate4pxScale(400),
      
      // ✨ 추가된 부분: 최대 너비 설정 (이게 있어야 max-w-720이 작동합니다)
      maxWidth: {
        ...generate4pxScale(1400), // 1400px까지 4px 단위로 max-w 생성
      },

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
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        // Integra UI 전용 팔레트
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