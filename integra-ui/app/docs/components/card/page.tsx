import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CardDocsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Card</h1>
        <p className="text-lg text-muted-foreground">
          관련된 콘텐츠와 동작을 하나의 주제로 묶어서 보여주는 컨테이너입니다.
        </p>
      </div>

      <hr className="border-slate-200" />

      {/* 미리보기 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Preview</h2>
        <div className="flex min-h-[350px] items-center justify-center rounded-xl border bg-slate-50 p-10">
          
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>프로젝트 생성</CardTitle>
              <CardDescription>새로운 프로젝트를 시작해보세요.</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Integra UI Project" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">취소</Button>
              <Button>생성하기</Button>
            </CardFooter>
          </Card>

        </div>
      </section>

      {/* 사용법 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <div className="rounded-md bg-slate-950 p-4 overflow-x-auto">
            <code className="text-white text-sm font-mono block">
                import &#123; Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle &#125; from "@/components/ui/card"
                <br /><br />
                &lt;Card&gt;<br/>
                &nbsp;&nbsp;&lt;CardHeader&gt;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;CardTitle&gt;Title&lt;/CardTitle&gt;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;CardDescription&gt;Description&lt;/CardDescription&gt;<br/>
                &nbsp;&nbsp;&lt;/CardHeader&gt;<br/>
                &nbsp;&nbsp;&lt;CardContent&gt;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Content&lt;/p&gt;<br/>
                &nbsp;&nbsp;&lt;/CardContent&gt;<br/>
                &nbsp;&nbsp;&lt;CardFooter&gt;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Footer&lt;/p&gt;<br/>
                &nbsp;&nbsp;&lt;/CardFooter&gt;<br/>
                &lt;/Card&gt;
            </code>
        </div>
      </section>
    </div>
  );
}