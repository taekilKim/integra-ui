import { Card } from "@/components/ui/card";

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
    <div className="space-y-48 pb-80">
      <div className="space-y-16">
        <h1 className="text-40 font-bold leading-48 tracking--4">Typography Styles</h1>
        <p className="text-20 text-muted-foreground leading-32 tracking--1 max-w-800">
          아토믹 토큰을 조합하여 사전 정의된 텍스트 스타일 가이드입니다. 일관된 계층 구조를 위해 아래 스타일 사용을 권장합니다.
        </p>
      </div>

      <hr />

      <section className="space-y-32">
        {styles.map((style) => (
          <div key={style.name} className="group space-y-12">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-8 border-b border-slate-50 pb-16">
              <div className="space-y-4">
                <p className="text-14 font-bold text-primary uppercase tracking-1">{style.name}</p>
                <p className={`text-${style.size} font-${style.weight} leading-${style.lh} tracking--1 text-slate-900`}>
                  가나다라마바사 Integra UI
                </p>
              </div>
              <div className="bg-slate-50 p-12 rounded-8 border text-12 font-mono text-slate-500 space-y-2 min-w-200">
                <p>Class: .text-{style.size} .leading-{style.lh} .font-{style.weight}</p>
                <p className="text-primary/60 italic">{style.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="p-32 bg-slate-900 rounded-16 text-white space-y-16">
        <h3 className="text-20 font-bold">Designer Tip</h3>
        <p className="text-14 leading-24 opacity-80">
          한글은 영문에 비해 획이 복잡하여 행간(Line Height)을 <strong>최소 1.5배 이상</strong> 확보하는 것이 좋습니다. <br/>
          Integra UI의 타이포 가이드는 이 황금 비율을 4px 그리드 안에서 완벽하게 구현했습니다.
        </p>
      </section>
    </div>
  );
}