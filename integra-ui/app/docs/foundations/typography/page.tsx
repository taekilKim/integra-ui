import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card } from "@/components/ui/card"

const typographyPrinciples = [
  {
    title: "Basic Typography",
    description: "큰 제목과 본문은 역할을 분리해 정의하고, 각 스타일은 재사용 가능한 semantic type scale로 매핑합니다.",
  },
  {
    title: "Word Break",
    description: "한글과 영문이 혼합되는 문맥을 고려해 줄바꿈 기준과 최소 line height를 함께 문서화합니다.",
  },
  {
    title: "Style Table",
    description: "모든 타입 스타일은 size, weight, line-height, usage를 한 테이블 안에서 비교 가능하게 제공합니다.",
  },
]

const styles = [
  { name: "Display / Hero", size: 48, lineHeight: 56, weight: "Bold", usage: "브랜드 메시지, 랜딩 메인 헤드라인" },
  { name: "Heading 1", size: 40, lineHeight: 48, weight: "Bold", usage: "페이지 타이틀" },
  { name: "Heading 2", size: 32, lineHeight: 40, weight: "Bold", usage: "주요 섹션 제목" },
  { name: "Heading 3", size: 24, lineHeight: 32, weight: "Semibold", usage: "보조 섹션 제목" },
  { name: "Body 1", size: 16, lineHeight: 24, weight: "Regular", usage: "기본 본문, 폼 설명" },
  { name: "Body 2", size: 14, lineHeight: 20, weight: "Regular", usage: "보조 설명, 라벨" },
  { name: "Caption", size: 12, lineHeight: 16, weight: "Regular", usage: "메타 정보, 작은 힌트" },
]

const wordBreakRules = [
  "한글 본문은 단어 단위보다 의미 단위로 줄바꿈되는 경우가 많으므로 최소 1.5 line-height를 유지합니다.",
  "영문 URL, 이메일, 코드 조각은 overflow보다 wrap 우선 정책을 둡니다.",
  "숫자/단위 조합은 한 덩어리로 읽히도록 non-breaking 패턴을 고려합니다.",
]

export default function TypographyPage() {
  return (
    <div className="space-y-64 pb-120">
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
        <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">Typography</h1>
        <p className="max-w-800 fs-20 leading-32 text-integra-gray-500">
          원티드 Montage의 Typography 문서 흐름처럼
          <br />
          기본 원칙, 줄바꿈 규칙, 스타일 테이블을 같은 페이지 안에서 단계적으로 보여줍니다.
        </p>
      </div>

      <hr className="border-integra-gray-100" />

      <section className="space-y-24">
        <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">Basic Typography</h2>
        <div className="grid gap-16 md:grid-cols-3">
          {typographyPrinciples.map((item) => (
            <Card key={item.title} className="border-integra-gray-200 p-24 space-y-10">
              <p className="fs-16 font-bold text-integra-gray-900">{item.title}</p>
              <p className="fs-14 leading-24 text-integra-gray-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-24">
        <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">Word Break</h2>
        <div className="rounded-24 bg-integra-gray-900 p-32 text-white shadow-integra space-y-14">
          {wordBreakRules.map((rule) => (
            <p key={rule} className="fs-16 leading-28 text-white/85">
              {rule}
            </p>
          ))}
        </div>
      </section>

      <section className="space-y-24">
        <div className="space-y-8">
          <h2 className="fs-24 font-bold tracking--2 text-integra-gray-900">Style Table</h2>
          <p className="fs-16 leading-28 text-integra-gray-500">
            각 스타일은 미리보기와 스펙을 함께 보여줘서 디자이너와 개발자가 같은 기준으로 선택할 수 있게 합니다.
          </p>
        </div>
        <div className="rounded-12 border border-integra-gray-100 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-integra-gray-50 border-b border-integra-gray-100">
              <tr className="fs-12 font-bold uppercase tracking-1 text-integra-gray-500">
                <th className="px-20 py-14">Style</th>
                <th className="px-20 py-14">Spec</th>
                <th className="px-20 py-14">Preview</th>
                <th className="px-20 py-14">Usage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-integra-gray-100 bg-white">
              {styles.map((style) => (
                <tr key={style.name}>
                  <td className="px-20 py-16 fs-14 font-semibold text-integra-gray-900">{style.name}</td>
                  <td className="px-20 py-16 font-mono fs-13 text-integra-gray-600">
                    {style.size}px / {style.lineHeight}px / {style.weight}
                  </td>
                  <td className="px-20 py-16">
                    <span
                      className="text-integra-gray-900"
                      style={{
                        fontSize: `${style.size}px`,
                        lineHeight: `${style.lineHeight}px`,
                        fontWeight: style.weight === "Regular" ? 400 : style.weight === "Semibold" ? 600 : 700,
                      }}
                    >
                      Integra Typography
                    </span>
                  </td>
                  <td className="px-20 py-16 fs-14 text-integra-gray-600">{style.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
