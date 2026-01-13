import { TextareaDemo } from "@/components/demo/textarea-demo";
import { Badge } from "@/components/ui/badge";

export default function TextareaDocsPage() {
  return (
    <div className="space-y-48 pb-80">
      <div className="space-y-16">
        <div className="flex items-center gap-8 text-12 text-integra-gray-700">
            <span>Components</span>
            <span>/</span>
            <span className="font-bold">Textarea</span>
        </div>
        <h1 className="text-40 font-bold leading-48 tracking--4">Textarea</h1>
        <p className="text-20 text-muted-foreground leading-32 tracking--1 max-w-600">
          긴 문장이나 멀티라인 입력을 처리할 때 사용합니다. Input과 동일한 원자적 디자인 언어를 공유합니다.
        </p>
      </div>
      <hr className="border-slate-100" />
      <section className="space-y-16">
        <h2 className="text-24 font-bold tracking--2 leading-32">Playground</h2>
        <TextareaDemo />
      </section>
      <section className="space-y-16 p-32 bg-slate-50 rounded-16 border border-slate-100">
        <h2 className="text-20 font-bold leading-24 tracking--1">Atomic Design Note</h2>
        <div className="space-y-12 text-15 text-slate-600 leading-24 tracking--1">
            <p>텍스트 영역은 콘텐츠의 양에 유연하게 반응하도록 설계되었습니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Min-Height:</strong> 80px의 최소 높이를 기본으로 가집니다.</li>
                <li><strong>Typography:</strong> 긴 글의 가독성을 위해 1.5배(24px) 행간을 엄격히 적용합니다.</li>
                <li><strong>Radius:</strong> 인풋 시스템과 동일한 8px 곡률을 유지합니다.</li>
            </ul>
        </div>
      </section>
    </div>
  );
}