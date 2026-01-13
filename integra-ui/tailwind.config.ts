import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin"; // 플러그인 추가

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
  safelist: [
    // ✨ text- 대신 fs- 패턴으로 변경
    { pattern: /fs-(12|13|14|15|16|18|20|24|28|32|40|48|56|64|72|80|96|128|160)/ },
    { pattern: /leading-(0|4|8|12|14|16|18|20|22|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80)/ },
    { pattern: /font-(regular|medium|semibold|bold)/ },
    { pattern: /rounded-(0|4|8|12|14|16|20|24|28|32|36|40)/ },
    { pattern: /(p|m|gap|w|h|px|py|pl|pr|pt|pb|mx|my|ml|mr|mt|mb)-(0|4|8|12|14|16|20|24|28|32|40|48|56|64|80|120|160|200|240|280|320|400)/ },
  ],
  theme: {
    extend: {
      fontFamily: { sans: ["Pretendard", "sans-serif"] },
      // 기존 fontSize는 제거하거나 그대로 두셔도 됩니다. 
      // 우리는 fs- 라는 커스텀 유틸리티를 아래 플러그인에서 만들 것입니다.
      lineHeight: generate4pxScale(80),
      letterSpacing: { "0": "0", "-1": "-0.01em", "-2": "-0.02em", "-3": "-0.03em", "-4": "-0.04em" },
      spacing: generate4pxScale(400),
      maxWidth: { ...generate4pxScale(1400) },
      borderRadius: { ...generate4pxScale(40), "14": "14px", full: "9999px" },
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
          red: Object.fromEntries([50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(s => [s, `hsl(var(--red-${s}))`])),
          // ... 다른 색상들 동일
        }
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // ✨ fs-14 형태의 커스텀 폰트 사이즈 유틸리티 생성 플러그인
    plugin(function({ addUtilities }) {
      const fontSizes = [12, 13, 14, 15, 16, 18, 20, 24, 28, 32, 40, 48, 56, 64, 72, 80, 96, 128, 160];
      
      // ✨ acc 뒤에 : Record<string, { fontSize: string }> 타입을 명시하여 에러 해결
      const fontSizeUtilities = fontSizes.reduce((acc: Record<string, { fontSize: string }>, size) => {
        acc[`.fs-${size}`] = { fontSize: `${size}px` };
        return acc;
      }, {});

      addUtilities(fontSizeUtilities);
    })
  ],
};
export default config;