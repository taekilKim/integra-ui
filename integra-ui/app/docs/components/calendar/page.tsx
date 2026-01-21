import { CalendarDemo } from "@/components/demo/calendar-demo";
import { Playground } from "@/components/layout/playground";
import { Badge } from "@/components/ui/badge";
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb";

/**
 * [Integra UI - Calendar Document SAI Version]
 * B2C/Mobile-First 환경을 위한 캘린더 컴포넌트 문서입니다.
 */
export default function CalendarDocsPage() {

    // 1. 디자인 토큰 정의
    const calendarTokens = [
        { property: "Cell Size (Touch Target)", class: "w-{px} h-{px}", value: "w-40 h-40" },
        { property: "Cell Radius", class: "rounded-{px}", value: "rounded-12" },
        { property: "Container Padding", class: "p-{px}", value: "p-16" },
        { property: "Font Size (Day)", class: "fs-{px}", value: "fs-14" },
        { property: "Font Size (Header)", class: "fs-{px}", value: "fs-16" },
    ];

    return (
        <div className="space-y-64 pb-120">

            {/* 1. Header */}
            <div className="space-y-16">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Calendar</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">
                    Calendar
                </h1>

                <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
                    날짜를 선택하거나 일정을 관리하는 월간 뷰 컴포넌트입니다.<br />
                    모바일 터치 환경을 고려하여 40px의 충분한 터치 타겟을 제공합니다.
                </p>
            </div>

            <hr className="border-integra-gray-100" />

            {/* 2. Playground */}
            <section className="space-y-16">
                <div className="flex items-center justify-between">
                    <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Playground</h2>
                    <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500 font-medium">Interactive</Badge>
                </div>
                <div className="max-w-960">
                    <Playground>
                        <CalendarDemo />
                    </Playground>
                </div>
            </section>

            {/* 3. Atomic Design Note */}
            <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
                <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
                <div className="space-y-12 fs-15 text-integra-gray-600 leading-24 tracking--1">
                    <ul className="list-disc pl-20 space-y-4">
                        <li><strong>Touch-First Geometry:</strong> 날짜 셀은 <code>w-40 h-40</code>의 크기를 가져 엄지손가락으로도 쉽게 터치할 수 있도록 설계되었습니다.</li>
                        <li><strong>Rounded Aesthetics:</strong> <code>rounded-12</code>를 적용하여 부드럽고 현대적인 B2C 앱의 감성을 전달합니다.</li>
                        <li><strong>Strict Typography:</strong> <code>fs-14</code>(날짜)와 <code>fs-16</code>(헤더)를 엄격하게 사용하여 정보 위계를 명확히 합니다.</li>
                    </ul>
                </div>
            </section>

            {/* 4. Detailed Design Tokens */}
            <section className="space-y-48">
                <div className="space-y-8">
                    <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">디자인 토큰 상세</h2>
                    <p className="fs-16 text-integra-gray-500">캘린더 구성 요소에 적용된 SAI 수치형 토큰입니다.</p>
                </div>

                <div className="rounded-12 border border-integra-gray-100 overflow-hidden shadow-sm">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-integra-gray-50 border-b border-integra-gray-200">
                            <tr className="fs-12 font-bold text-integra-gray-400">
                                <th className="px-24 py-16">Property</th>
                                <th className="px-24 py-16">Class Syntax</th>
                                <th className="px-24 py-16">SAI Value</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y border-integra-gray-100 fs-14">
                            {calendarTokens.map((token) => (
                                <tr key={token.property} className="hover:bg-integra-gray-50/50 transition-colors">
                                    <td className="px-24 py-16 font-medium text-integra-gray-700">{token.property}</td>
                                    <td className="px-24 py-16 font-mono text-integra-blue-600 font-bold">{token.class}</td>
                                    <td className="px-24 py-16 font-mono text-integra-gray-900">{token.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* 5. Usage */}
            <section className="space-y-16">
                <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Usage</h2>
                <div className="rounded-12 bg-integra-gray-900 p-24 overflow-x-auto font-mono fs-14 leading-24 shadow-2xl text-white">
                    <p className="text-integra-gray-500 mb-8">// Basic Usage</p>
                    <p className="text-integra-blue-400">import &#123; Calendar &#125; from "@/components/ui/calendar"</p>
                    <br />
                    <p className="text-white">&lt;Calendar</p>
                    <p className="text-white pl-16">mode="single"</p>
                    <p className="text-white pl-16">selected=&#123;date&#125;</p>
                    <p className="text-white pl-16">onSelect=&#123;setDate&#125;</p>
                    <p className="text-white pl-16">className="rounded-16 border border-integra-gray-100"</p>
                    <p className="text-white">/&gt;</p>
                </div>
            </section>

        </div>
    );
}
