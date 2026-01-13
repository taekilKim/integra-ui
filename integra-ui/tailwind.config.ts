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
  theme: {
    extend: {
      fontFamily: { sans: ["Pretendard", "sans-serif"] },
      fontSize: {
        "12": "12px", "14": "14px", "16": "16px", "18": "18px",
        "20": "20px", "24": "24px", "32": "32px", "40": "40px",
      },
      lineHeight: generate4pxScale(80),
      // ✨ 레이아웃을 위해 400px까지 확장
      spacing: generate4pxScale(400),
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
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;