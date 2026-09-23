import Link from "next/link"
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"

type OverviewItem = {
  title: string
  description: string
  href?: string
  status?: "준비됨" | "작성 예정" | "실험"
}

type DocsSectionOverviewProps = {
  eyebrow: string
  title: string
  description: string
  principle: string
  items: OverviewItem[]
}

export function DocsSectionOverview({
  eyebrow,
  title,
  description,
  principle,
  items,
}: DocsSectionOverviewProps) {
  return (
    <div className="space-y-64 pb-80">
      <header className="space-y-16">
        <p className="fs-13 font-bold uppercase tracking-2 text-primary">{eyebrow}</p>
        <h1 className="fs-40 font-bold leading-48 tracking--3 text-integra-gray-900">{title}</h1>
        <p className="max-w-720 fs-20 leading-32 tracking--1 text-integra-gray-600">{description}</p>
      </header>

      <section className="rounded-16 border border-integra-blue-100 bg-integra-blue-50 p-24 md:p-32">
        <p className="fs-12 font-bold uppercase tracking-2 text-primary">이 섹션의 원칙</p>
        <p className="mt-8 fs-18 font-semibold leading-28 tracking--1 text-integra-gray-900">{principle}</p>
      </section>

      <section className="space-y-24">
        <div className="space-y-8">
          <h2 className="fs-28 font-bold leading-36 tracking--2 text-integra-gray-900">콘텐츠 로드맵</h2>
          <p className="fs-16 leading-24 text-integra-gray-500">
            제목을 선택하면 준비된 문서로 이동합니다. 작성 예정 항목은 이 섹션의 다음 작업 순서입니다.
          </p>
        </div>

        <div className="grid gap-16 md:grid-cols-2">
          {items.map((item) => {
            const content = (
              <>
                <div className="flex items-start justify-between gap-16">
                  <h3 className="fs-18 font-bold leading-24 tracking--1 text-integra-gray-900">{item.title}</h3>
                  <span className="shrink-0 rounded-full bg-integra-gray-50 px-10 py-4 fs-11 font-semibold text-integra-gray-500">
                    {item.status ?? "작성 예정"}
                  </span>
                </div>
                <p className="fs-14 leading-24 text-integra-gray-600">{item.description}</p>
                {item.href && (
                  <span className="inline-flex items-center gap-6 fs-13 font-semibold text-primary">
                    문서 보기 <ArrowRight className="h-14 w-14" />
                  </span>
                )}
              </>
            )

            return item.href ? (
              <Link
                key={item.title}
                href={item.href}
                className="space-y-12 rounded-16 border border-integra-gray-200 bg-white p-20 transition-colors hover:border-primary"
              >
                {content}
              </Link>
            ) : (
              <article key={item.title} className="space-y-12 rounded-16 border border-integra-gray-100 bg-integra-gray-50 p-20">
                {content}
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}
