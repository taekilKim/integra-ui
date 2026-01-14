# Integra UI v1.0 ⚛️

**Atomic Design System for Korean Makers.**  
한국 디자이너와 개발자를 위한 가장 직관적인 아토믹 디자인 시스템 가이드입니다.

---

## 🛡️ Strict Atomic Integra UI (SAI) Principles

Integra UI는 디자인의 원칙과 코드의 구현이 1:1로 일치하는 환경을 지향합니다. 우리는 추상화된 단어 대신 명확한 **수치(Numerical Tokens)**를 통해 소통합니다.

### 1. Numerical Token Prefix
모든 속성은 용도에 맞는 명확한 접두사를 가지며, 2px 단위의 정교한 조절을 지원합니다.
- **`fs-{px}`**: Font Size (예: `.fs-14`, `.fs-13`)
- **`leading-{px}`**: Line Height (예: `.leading-24`)
- **`rounded-{px}`**: Border Radius (예: `.rounded-8`)
- **`p-{px}`, `m-{px}`, `gap-{px}`**: Spacing (예: `.p-16`, `.gap-24`)

### 2. Strict Grayscale & Primary
`slate`, `zinc` 등 외부 컬러 팔레트를 배제합니다. Figma 원본 데이터를 이식한 **`integra-gray`** 및 **`integra-blue`** 팔레트만 사용하여 시스템의 순수성을 유지합니다.

### 3. Pretendard & Atomic Typography
한글 가독성을 최우선으로 하며, 폰트 크기와 행간, 자간을 원자(Atoms) 단위로 분리하여 디자이너가 의도한 시각적 위계를 코드로 100% 재현합니다.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install clsx tailwind-merge class-variance-authority lucide-react @radix-ui/react-popover @radix-ui/react-tooltip @radix-ui/react-accordion @radix-ui/react-tabs @radix-ui/react-dialog @radix-ui/react-checkbox @radix-ui/react-switch @radix-ui/react-select @radix-ui/react-toast
### 2. Configure Tailwind Engine
tailwind.config.ts를 아래와 같이 설정하여 Integra UI 전용 2px 아토믹 엔진을 활성화하세요.
code
TypeScript
// tailwind.config.ts
import plugin from "tailwindcss/plugin";

const generate2pxScale = (maxPx) => {
  const scale = {};
  for (let i = 0; i <= maxPx; i += 2) { scale[i] = `${i}px`; }
  scale[13] = "13px"; scale[15] = "15px";
  return scale;
};

export default {
  theme: {
    spacing: generate2pxScale(400),
    extend: {
      fontFamily: { sans: ["Pretendard", "sans-serif"] },
      lineHeight: generate2pxScale(160),
      borderRadius: { ...generate2pxScale(80), full: "9999px" },
    }
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const fsUtils = {};
      for (let i = 12; i <= 160; i += 2) { fsUtils[`.fs-${i}`] = { fontSize: `${i}px` }; }
      addUtilities(fsUtils);
    })
  ]
}
### 3. Copy Component
원하는 컴포넌트 코드를 복사하여 components/ui에 붙여넣으면 즉시 사용 가능합니다.
📄 License
MIT License. Designed with ❤️ for Korean Makers.
