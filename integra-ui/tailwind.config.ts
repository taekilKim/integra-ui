import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

// ✨ 2px 단위로 스케일을 생성하는 함수 (0px ~ 400px)
const generate2pxScale = (maxPx: number) => {
  const scale: Record<string, string> = {};
  for (let i = 0; i <= maxPx; i += 2) {
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
  // 동적 클래스 생성을 위한 세이프리스트 (2px 단위 대응)
  safelist: [
    { pattern: /fs-(12|13|14|15|16|18|20|24|28|32|40|48|56|64|72|80|96|128|160)/ },
    { pattern: /leading-(0|2|4|6|8|10|12|14|16|18|20|22|24|26|28|30|32|34|36|38|40|44|48|52|56|60|64|68|72|76|80)/ },
    { pattern: /font-(regular|medium|semibold|bold)/ },
    { pattern: /rounded-(0|2|4|6|8|10|12|14|16|18|20|22|24|26|28|30|32|34|36|38|40)/ },
    { pattern: /(p|m|gap|w|h|px|py|pl|pr|pt|pb|mx|my|ml|mr|mt|mb)-(0|2|4|6|8|10|12|14|16|18|20|22|24|26|28|30|32|34|36|38|40|48|56|64|80|120|160|200|240|280|320|400)/ },
  ],
  theme: {
    // ✨ [중요] extend 밖의 spacing에 선언하여 테일윈드 기본 rem 수치를 완전히 제거합니다.
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
      // 행간도 2px 단위로 정교하게 제어
      lineHeight: generate2pxScale(80),
      letterSpacing: { "0": "0", "-1": "-0.01em", "-2": "-0.02em", "-3": "-0.03em", "-4": "-0.04em" },
      maxWidth: { 
        ...generate2pxScale(1400),
        "none": "none",
        "full": "100%",
        "min": "min-content",
        "max": "max-content",
        "fit": "fit-content",
      },
      // 곡률도 2px 단위로 정교하게 제어
      borderRadius: { 
        ...generate2pxScale(40), 
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
      addUtilities(fontSizeUtilities);
    })
  ],
};
export default config;