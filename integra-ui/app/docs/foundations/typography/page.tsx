import { Card } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export default function TypographyPage() {
  const styles = [
    { name: "Display", size: 48, lh: 56, weight: "bold", desc: "히어로 섹션, 초대형 타이틀" },
    { name: "Heading 1", size: 40, lh: 48, weight: "bold", desc: "페이지 메인 제목" },
    { name: "Heading 2", size: 32, lh: 40, weight: "bold", desc: "섹션 타이틀" },
    { name: "Heading 3", size: 24, lh: 32, weight: "semibold", desc: "중간 제목" },
    { name: "Title", size: 20, lh: 28, weight: "semibold", desc: "강조된 본문 제목" },
    { name: "Body Large", size: 18, lh: 28, weight: "regular", desc: "가독성이 중요한 긴 본문" },
    { name: "Body Default", size: 16, lh: 24, weight: "regular", desc: "기본 텍스트 스타일" },
    { name: "Body Small", size: 14, lh: 20, weight: "regular", desc: "부연 설명, 폼 라벨" },
    { name: "Caption", size: 12, lh: 16, weight: "regular", desc: "최소 단위 텍스트, 도움말" },
  ];

  return (
    <div className="space-y-48 pb-120">
      
      {/* 1. 헤더 섹션: 표준 Breadcrumb 적용 및 설명글 줄바꿈 규격 준수 */}
      <div className="space-y-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs/foundations">Foundations</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Typography</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900">Typography Styles</h1>
        <p className="fs-20 text-integra-gray-500 leading-32">
          아토믹 토큰을 조합하여 사전 정의된 텍스트 스타일 가이드입니다.<br />
          일관된 계층 구조와 최적의 가독성을 위해 아래 스타일 사용을 권장합니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      {/* 2. 타이포그래피 스타일 리스트 */}
      <section className="space-y-48">
        {styles.map((style) => (
          <div key={style.name} className="group space-y-12">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-16 border-b border-integra-gray-50 pb-24">
              <div className="space-y-8">
                {/* fs-14 및 integra-blue 토큰 적용 */}
                <p className="fs-14 font-bold text-primary uppercase tracking-1">{style.name}</p>
                {/* ✨ SAI: text- 대신 fs- 접두사 사용 */}
                <p className={`fs-${style.size} font-${style.weight} leading-${style.lh} tracking--1 text-integra-gray-900 transition-all group-hover:text-primary`}>
                  가나다라마바사 Integra UI
                </p>
              </div>
              
              {/* 토큰 명세 카드: bg-integra-gray-50 적용 */}
              <div className="bg-integra-gray-50 p-16 rounded-12 border border-integra-gray-100 fs-12 font-mono text-integra-gray-500 space-y-4 min-w-240">
                <div className="flex justify-between">
                    <span className="font-bold text-integra-gray-400">Class</span>
                    <span className="text-blue-600">.fs-{style.size} .leading-{style.lh} .font-{style.weight}</span>
                </div>
                <div className="flex justify-between border-t border-integra-gray-200 pt-4 mt-4">
                    <span className="font-bold text-integra-gray-400">Usage</span>
                    <span className="text-integra-gray-600 italic">{style.desc}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 3. 디자이너 팁 섹션: bg-integra-gray-900 및 SAI 텍스트 규격 적용 */}
      <section className="p-40 bg-integra-gray-900 rounded-24 text-white space-y-16 shadow-integra">
        <h3 className="fs-24 font-bold tracking--1">Designer Tip</h3>
        <p className="fs-16 leading-28 opacity-80 font-medium">
          한글은 영문에 비해 획이 복잡하고 밀도가 높아, 행간(Line Height)을 <strong>최소 1.5배 이상</strong> 확보하는 것이 시각적 피로도를 줄이는 핵심입니다.<br />
          Integra UI의 타이포 가이드는 4px 그리드 시스템 안에서 이 황금 비율을 엄격하게 구현했습니다.
        </p>
      </section>
    </div>
  );
}