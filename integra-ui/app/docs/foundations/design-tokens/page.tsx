import { ThemeCustomizer } from "@/components/theme-customizer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DesignTokensPage() {
  return (
    <div className="space-y-8">
      {/* 1. 페이지 헤더 */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Design Tokens</h1>
        <p className="text-lg text-muted-foreground">
          서비스 전체의 룩앤필(Look & Feel)을 결정하는 핵심 변수들입니다.
        </p>
      </div>

      <hr className="border-slate-200" />

      {/* 2. 컨트롤러 (Theme Customizer) */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Radius (곡률)</h2>
        <p className="text-sm text-slate-600 mb-4">
           슬라이더를 움직여 전체 컴포넌트의 둥글기를 실시간으로 조정해보세요.
        </p>
        
        <div className="max-w-md">
            {/* 아까 만든 슬라이더 컴포넌트 불러오기 */}
            <ThemeCustomizer />
        </div>
      </section>

      {/* 3. 라이브 프리뷰 (변경사항 확인용) */}
      <section className="space-y-6 pt-8">
        <h2 className="text-xl font-semibold tracking-tight">Live Preview</h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* 예시 1: 카드 + 버튼 */}
            <Card>
                <CardHeader>
                    <CardTitle>Card Component</CardTitle>
                    <CardDescription>카드 모서리도 함께 변합니다.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button className="w-full">Primary Button</Button>
                </CardContent>
            </Card>

            {/* 예시 2: 인풋 폼 */}
            <Card>
                <CardHeader>
                    <CardTitle>Form Elements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="radius-demo">Email Address</Label>
                        <Input id="radius-demo" placeholder="radius check..." />
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm">Cancel</Button>
                        <Button size="sm">Save Changes</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
      </section>
    </div>
  );
}