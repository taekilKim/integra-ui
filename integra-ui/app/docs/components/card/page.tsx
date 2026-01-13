import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CardDocsPage() {
  return (
    <div className="space-y-48 pb-80">
      <div className="space-y-16">
        <div className="flex items-center gap-8 text-12 text-integra-gray-700">
            <span>Components</span>
            <span>/</span>
            <span className="font-bold">Card</span>
        </div>
        <h1 className="text-40 font-bold leading-48 tracking--4">Card</h1>
        <p className="text-20 text-muted-foreground leading-32 tracking--1 max-w-600">
          정보를 그룹화하여 깔끔하게 정리하는 컨테이너입니다. 헤더, 본문, 푸터를 조합하여 다양한 레이아웃을 생성할 수 있습니다.
        </p>
      </div>
      <hr className="border-slate-100" />
      <section className="space-y-16">
        <h2 className="text-24 font-bold tracking--2 leading-32">Preview</h2>
        <div className="flex min-h-240 items-center justify-center rounded-12 border border-slate-200 bg-slate-50/50 border-dashed p-40">
          <Card className="w-320">
            <CardHeader>
              <CardTitle>Project Card</CardTitle>
              <CardDescription>Integrate your design system easily.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-14 text-slate-600">아토믹 토큰 시스템으로 제작된 카드 컴포넌트입니다.</p>
            </CardContent>
            <CardFooter className="justify-end gap-8">
              <Button variant="outline" size="sm">Cancel</Button>
              <Button size="sm">Confirm</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
      <section className="space-y-16 p-32 bg-slate-50 rounded-16 border border-slate-100">
        <h2 className="text-20 font-bold leading-24 tracking--1">Atomic Design Note</h2>
        <div className="space-y-12 text-15 text-slate-600 leading-24 tracking--1">
            <p>카드는 시스템 전체의 조형미를 결정하는 가장 큰 원자들의 모임입니다.</p>
            <ul className="list-disc pl-20 space-y-4">
                <li><strong>Padding:</strong> 모든 방향에 24px(p-24)의 넉넉한 여백을 제공합니다.</li>
                <li><strong>Radius:</strong> 16px(rounded-16)을 사용하여 큰 요소 특유의 안정감을 줍니다.</li>
                <li><strong>Shadow:</strong> Integra 고유의 <code>shadow-integra</code>를 사용하여 부드러운 깊이감을 표현합니다.</li>
            </ul>
        </div>
      </section>
    </div>
  );
}