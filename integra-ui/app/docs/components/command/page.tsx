import { CommandDemo } from "@/components/demo/command-demo";
import { CommandDialogDemo } from "@/components/demo/command-dialog-demo";
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
 * [Integra UI - Command Document SAI Version]
 */
export default function CommandDocsPage() {

    const commandTokens = [
        { property: "Input Height", class: "h-{px}", value: "h-44" },
        { property: "Item Height", class: "h-{px}", value: "min h-40" },
        { property: "Item Radius", class: "rounded-{px}", value: "rounded-8" },
        { property: "Container Radius", class: "rounded-{px}", value: "rounded-16" },
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
                            <BreadcrumbPage>Command</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <h1 className="fs-40 font-bold leading-48 text-integra-gray-900 tracking--4">
                    Command
                </h1>

                <p className="fs-20 text-integra-gray-500 leading-32 tracking--1">
                    빠르고 효율적인 검색 및 명령 실행을 위한 팔레트 인터페이스입니다.<br />
                    <code>cmdk</code> 라이브러리를 기반으로 SAI 디자인 시스템에 맞춰 정밀하게 스타일링되었습니다.
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
                        <CommandDemo />
                    </Playground>
                </div>
            </section>

            {/* 2.1 Dialog Demo */}
            <section className="space-y-16">
                <div className="flex items-center justify-between">
                    <h2 className="fs-24 font-bold tracking--2 leading-32 text-integra-gray-900">Dialog Example</h2>
                    <Badge variant="outline" className="fs-12 px-8 py-2 border-integra-gray-200 text-integra-gray-500 font-medium">Interactive</Badge>
                </div>
                <div className="max-w-960">
                    <Playground>
                        <CommandDialogDemo />
                    </Playground>
                </div>
            </section>

            {/* 3. Atomic Design Note */}
            <section className="space-y-16 p-32 bg-integra-gray-50 rounded-16 border border-integra-gray-100">
                <h2 className="fs-20 font-bold leading-24 tracking--1 text-integra-gray-900">Atomic Design Note</h2>
                <div className="space-y-12 fs-15 text-integra-gray-600 leading-24 tracking--1">
                    <ul className="list-disc pl-20 space-y-4">
                        <li><strong>Strict Typography:</strong> Input의 폰트 사이즈를 <code>fs-14</code>로 설정하되, 모바일 사파리의 자동 확대 방지를 위해 터치 환경 고려가 필요할 수 있습니다 (현재는 데스크탑 우선 토큰 적용).</li>
                        <li><strong>Item Interaction:</strong> Command Item은 <code>data-[selected=true]</code> 속성을 통해 부모로부터 상태를 전달받으며, 이때 <code>bg-integra-gray-50</code>을 적용하여 부드러운 하이라이팅을 제공합니다.</li>
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
                            {commandTokens.map((token) => (
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
                    <p className="text-integra-blue-400">import &#123; <br />&nbsp;&nbsp;Command,<br />&nbsp;&nbsp;CommandInput,<br />&nbsp;&nbsp;CommandList,<br />&nbsp;&nbsp;CommandItem<br />&#125; from "@/components/ui/command"</p>
                    <br />
                    <p className="text-white">&lt;Command&gt;</p>
                    <p className="text-white pl-16">&lt;CommandInput placeholder="..." /&gt;</p>
                    <p className="text-white pl-16">&lt;CommandList&gt;</p>
                    <p className="text-white pl-32">&lt;CommandItem&gt;Profile&lt;/CommandItem&gt;</p>
                    <p className="text-white pl-32">&lt;CommandItem&gt;Settings&lt;/CommandItem&gt;</p>
                    <p className="text-white pl-16">&lt;/CommandList&gt;</p>
                    <p className="text-white">&lt;/Command&gt;</p>
                </div>
            </section>

        </div>
    );
}
