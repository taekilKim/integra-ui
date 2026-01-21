import { DatePickerDemo } from "@/components/demo/date-picker-demo";
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
 * [Integra UI - DatePicker Document SAI Version]
 */
export default function DatePickerDocsPage() {

    const datePickerTokens = [
        { property: "Trigger Width", class: "w-full", value: "Fluid (100%)" },
        { property: "Icon Margin", class: "mr-{px}", value: "mr-8" },
        { property: "Text Alignment", class: "text-left", value: "start" },
        { property: "Popover Radius", class: "rounded-{px}", value: "rounded-16" },
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
                            <BreadcrumbPage>DatePicker</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">
                    Date Picker
                </h1>

                <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
                    팝오버와 캘린더를 결합하여 사용자로부터 날짜 입력을 받는 컴포넌트입니다.<br />
                    폼(Form) 요소와 자연스럽게 어울리도록 Input 스타일을 상속받은 트리거를 사용합니다.
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
                        <DatePickerDemo />
                    </Playground>
                </div>
            </section>

            {/* 3. Atomic Design Note */}
            <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
                <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
                <div className="space-y-12 fs-15 text-integra-gray-600 leading-24 tracking--1">
                    <ul className="list-disc pl-20 space-y-4">
                        <li><strong>Organism Pattern:</strong> DatePicker는 독립적인 Atom이 아니라, <code>Button(Trigger)</code>, <code>Popover(Container)</code>, <code>Calendar(Content)</code> Atom들의 조합으로 이루어진 유기체입니다.</li>
                        <li><strong>UX Consistency:</strong> Trigger 버튼은 <code>variant="outline"</code>을 기반으로 하되, <code>font-normal</code>과 <code>justify-start</code>를 적용하여 일반 <code>Input</code>과 시각적 동질성을 유지합니다.</li>
                    </ul>
                </div>
            </section>

            {/* 4. Detailed Design Tokens */}
            <section className="space-y-48">
                <div className="space-y-8">
                    <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">디자인 토큰 상세</h2>
                    <p className="fs-16 text-integra-gray-500">Atomic 조합에 추가된 오버라이딩 토큰입니다.</p>
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
                            {datePickerTokens.map((token) => (
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
                    <p className="text-integra-blue-400">import &#123; DatePicker &#125; from "@/components/ui/date-picker"</p>
                    <br />
                    <p className="text-white">&lt;DatePicker</p>
                    <p className="text-white pl-16">date=&#123;date&#125;</p>
                    <p className="text-white pl-16">setDate=&#123;setDate&#125;</p>
                    <p className="text-white pl-16">placeholder="날짜 선택"</p>
                    <p className="text-white">/&gt;</p>
                </div>
            </section>

        </div>
    );
}
