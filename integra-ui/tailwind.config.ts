import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const generate2pxScale = (maxPx: number) => {
  const scale: Record<string, string> = {};
  for (let i = 0; i <= maxPx; i += 2) { scale[i] = `${i}px`; }
  scale[13] = "13px"; scale[15] = "15px";
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
        // ✨ hsl() 래퍼 제거 -> var(...) 직접 사용
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        
        primary: {
          DEFAULT: "var(--primary)",
          hover: "var(--primary-hover)",
          active: "var(--primary-active)",
          foreground: "var(--primary-foreground)",
          subtle: "var(--primary-subtle)",
          "subtle-hover": "var(--primary-subtle-hover)",
          "subtle-foreground": "var(--primary-subtle-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          hover: "var(--destructive-hover)",
          foreground: "var(--destructive-foreground)",
          subtle: "var(--destructive-subtle)",
          "subtle-hover": "var(--destructive-subtle-hover)",
        },

        integra: {
          gray: Object.fromEntries([50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(s => [s, `var(--gray-${s})`])),
          blue: Object.fromEntries([50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(s => [s, `var(--blue-${s})`])),
          green: Object.fromEntries([50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(s => [s, `var(--green-${s})`])),
          red: Object.fromEntries([50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(s => [s, `var(--red-${s})`])),
          orange: Object.fromEntries([50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(s => [s, `var(--orange-${s})`])),
          violet: Object.fromEntries([50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(s => [s, `var(--violet-${s})`])),
          grape: Object.fromEntries([50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(s => [s, `var(--grape-${s})`])),
        }
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function({ addUtilities }) {
      const fsUtils: Record<string, { fontSize: string }> = {};
      for (let i = 12; i <= 160; i += 2) { fsUtils[`.fs-${i}`] = { fontSize: `${i}px` }; }
      [13, 15].forEach(size => { fsUtils[`.fs-${size}`] = { fontSize: `${size}px` }; });
      addUtilities(fsUtils);
    })
  ],
};
export default config;