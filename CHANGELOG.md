# Integra UI Changelog

모든 작업 내역은 SAI(Strict Atomic Integra UI) 원칙을 준수하여 기록됩니다.

### **v1.3.0**
- **Feature:** `Calendar` 컴포넌트 시스템 구축 (`ui`, `demo`, `docs`).
  - `react-day-picker` 기반의 아토믹 달력.
  - SAI 토큰(`h-36`, `rounded-8`, `primary`)을 적용하여 커스텀 스타일링.

### **v1.2.7 **
- **Brand Identity:** 기하학적 'i' 모티프의 벡터 로고(`icon.svg`) 및 파비콘 적용.
- **Header Refactor:** 로고 적용, `slate` 컬러 제거 및 SAI 토큰 기반 디자인 정화.

### **v1.2.6**
- **Landing Page:** `ComponentShowcase`를 21종 컴포넌트가 조립된 4개 모듈(Profile, Form, Data, Nav)로 전면 재구성.
- **Content Fix:** 랜딩 페이지 'Core Vision' 섹션의 텍스트 및 레이아웃을 이전 기획 의도대로 복구.

### **v1.2.5**
- **New Utilities:** 시스템 완성도를 위한 `ScrollArea`, `Separator` 컴포넌트 추가.
- **Sidebar Update:** 누락되었던 컴포넌트(Radio Group, Table, Avatar 등) 및 신규 유틸리티를 포함하여 메뉴 리스트 최신화.

### **v1.2.4**
- **Build Fix:** `Accordion`, `Dialog` 등 Radix 기반 컴포넌트 및 `CodeBlock`에서의 `"use client"` 누락 및 `displayName` 설정 오류 수정.
- **Demo Fix:** 모든 데모 파일(`demo/*.tsx`)의 배경색 및 테두리 스타일을 `Playground` 컴포넌트로 통일.

### **v1.2.3**
- **Docs Standardization:** 
  - 모든 컴포넌트 문서에 **디자인 토큰(Applied Tokens)** 테이블 및 **Usage** 코드 블록 추가.
  - 하드코딩된 헤더를 **`Breadcrumb` 컴포넌트**로 전면 교체.
  - 문서 본문 너비를 `max-w-960`으로 확장.

### **v1.2.2**
- **Component Refactor (SAI):** 
  - 21종 전 컴포넌트 본체의 `text-` 접두사를 `fs-`로 변경.
  - `slate`, `zinc` 등 외부 컬러를 `integra-gray` 토큰으로 100% 교체.

### **v1.2.1**
- **System Engine Overhaul:**
  - `tailwind.config.ts`: 2px 단위 `fs-` 플러그인 도입 및 `spacing` 시스템 재설계.
  - `globals.css`: Figma 원본 HEX 데이터 이식 및 시맨틱 토큰(`primary-hover` 등) 매핑 구축.

### **v1.2.0**
- **Feature:** `Sheet` 컴포넌트 시스템 구축 (`ui`, `demo`, `docs`).
  - **Purpose:** 데스크탑 중심의 고정형 보조 패널(Sidebar) 및 정보 입력 창.
  - **Atomic:** `w-400`, `p-24` 등 SAI 수치 토큰 적용.
  - **Note:** 제스처 기반의 `Drawer`는 Phase 5에서 별도 구현 예정.

### **v1.1.3**
- **Feature:** `Slider` 컴포-넌트 시스템 구축 (`ui`, `demo`, `docs`).
  - Radix UI 기반으로 제작하여 키보드 접근성 및 터치 지원.
  - SAI 토큰을 사용하여 트랙, 범위, 핸들 스타일 정밀 제어.

### **v1.1.2**
- **Feature:** `Alert` 컴포-넌트 시스템 구축 (`ui`, `demo`, `docs`).
  - 4가지 상태(Default, Destructive, Warning, Success)를 `variant`로 정의.
  - 아이콘과 텍스트의 정렬을 위한 아토믹 구조 설계.

### **v1.1.1**
- **Feature:** `Toggle Group`을 상태 관리(`type="single"|"multiple"`)가 가능한 독립 컴포넌트로 구현.
- **Docs:** `toggle/page.tsx` 문서를 새로운 `ToggleGroup` 컴포넌트 사용법으로 전면 업데이트.
- **Refactor:** `toggle.tsx`가 그룹 내에서 사용될 때 스타일이 조정되도록 리팩토링.

### **v1.1.0**
- **Feature:** `Toggle Group` 컴포-넌트화. (div 조립 패턴 -> 컴포-넌트)
- **Refactor:** `Item` 컴포-넌트의 스타일(`itemVariants`)을 `DropdownMenuItem`에 적용하여 시스템 재사용성 증명.

### **v1.0.0 - MVP Release (완료)**

#### **Phase 4: Ecosystem & DX (완료)**
- **Feature:** `Item` 컴포-넌트 시스템 구축 (`ui`, `demo`, `docs`).
- **Feature:** `Toggle` 컴포-넌트 시스템 구축 (`ui`, `demo`, `docs`).
- **Docs:** 모든 컴포-넌트(22종), 파운데이션, 레이아웃 문서 페이지 SAI 최종 정화 완료.
- **Landing:** Shadcn 스타일의 고밀도 `ComponentShowcase`를 포함한 랜딩 페이지 최종 완성.

#### **Phase 1-3: Core System & Components (완료)**
- **System:** 2px/4px 그리드 기반 수치형 아토믹 토큰 엔진 (`tailwind.config.ts`) 구축.
- **System:** `fs-` 접두사를 사용한 폰트 사이즈 시스템 도입 및 컬러 충돌 해결.
- **System:** Figma 데이터 기반 정밀 컬러 시스템 (`globals.css`) 구축.
- **System:** 상태 기반 시맨틱 토큰(`primary-hover` 등) 도입.
- **Components:** 핵심 22종 컴포-넌트 본체 및 데모 SAI 정화.
- **Layout:** 3컬럼 문서 레이아웃 (`max-w-960` 본문), 동적 TOC, Active 사이드바 구현.
- **Assets:** `integraui-logo.svg` 로고 및 파비콘 적용.

---