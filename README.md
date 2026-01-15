# Integra UI v1.0 ⚛️

**Atomic Design System for Korean Makers.**  
한국 디자이너와 개발자를 위한 가장 직관적인 아토믹 디자인 시스템 가이드입니다.

---

## 🛡️ Core Philosophy: Strict Atomic Integra UI (SAI)

Integra UI는 디자인의 원칙과 코드의 구현이 1:1로 일치하는 환경을 지향합니다. 우리는 추상화된 단어 뒤에 숨지 않고, 명확한 **수치(Numerical Tokens)**를 통해 소통합니다.

### 1. Numerical Token Prefix
모든 속성은 용도에 맞는 명확한 접두사를 가집니다.
- **`fs-{px}`**: Font Size (예: `.fs-14`, `.fs-13`)
- **`leading-{px}`**: Line Height (예: `.leading-24`)
- **`rounded-{px}`**: Border Radius (예: `.rounded-8`)
- **`p-{px}`, `m-{px}`, `gap-{px}`**: Spacing (예: `.p-16`, `.gap-24`)

### 2. Strict 2px/4px Grid
레이아웃과 곡률은 **4px 그리드**를 엄격히 준수하며, 미세 조정이 필요한 경우에만 **2px 스케일**을 허용합니다. 소수점 단위의 오차(예: 9.6px)를 철저히 배제합니다.

### 3. Strict Grayscale & Primary
`slate`, `zinc` 등 외부 컬러 팔레트를 배제합니다. Figma 원본 데이터를 이식한 **`integra-gray`** 및 **`integra-blue`** 팔레트만 사용하여 시스템의 순수성을 유지합니다.

---

## 🚀 Getting Started

### 1. 필수 패키지 설치
프로젝트 구동에 필요한 핵심 라이브러리와 Radix UI 프리미티브를 설치합니다.

```bash
npm install clsx tailwind-merge class-variance-authority lucide-react @radix-ui/react-popover @radix-ui/react-tooltip @radix-ui/react-accordion @radix-ui/react-tabs @radix-ui/react-dialog @radix-ui/react-checkbox @radix-ui/react-switch @radix-ui/react-select @radix-ui/react-toast
```

### 2. Tailwind 엔진 설정 (tailwind.config.ts)
Integra UI의 수치형 토큰과 `fs-` 플러그인을 활성화하기 위해 아래 설정을 적용하세요.

```typescript
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const generate2pxScale = (maxPx: number) => {
  const scale: Record<string, string> = {};
  for (let i = 0; i <= maxPx; i += 2) { scale[i] = `${i}px`; }
  scale[13] = "13px"; scale[15] = "15px";
  return scale;
};

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
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
    }
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function({ addUtilities }) {
      const fsUtils: Record<string, { fontSize: string }> = {};
      for (let i = 12; i <= 160; i += 2) { fsUtils[`.fs-${i}`] = { fontSize: `${i}px` }; }
      [13, 15].forEach(size => { fsUtils[`.fs-${size}`] = { fontSize: `${size}px` }; });
      addUtilities(fsUtils);
    })
  ]
};
export default config;
```

### 3. 컴포넌트 사용법 (Basic Usage)
원하는 컴포넌트의 코드를 복사하여 `components/ui` 폴더에 넣은 후, 다음과 같이 호출합니다.

```tsx
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="p-24 gap-16 flex flex-col">
      <h1 className="fs-32 font-bold leading-40">Hello Integra</h1>
      <Button appearance="default" variant="default" size="default">
        시작하기
      </Button>
    </div>
  )
}
```

---

## 📄 License
이 프로젝트는 개인 및 상업적 목적으로 자유롭게 사용 가능한 오픈소스입니다.  
Designed with ❤️ for Korean Makers.
