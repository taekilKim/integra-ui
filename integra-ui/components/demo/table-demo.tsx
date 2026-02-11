"use client"

import * as React from "react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Playground } from "@/components/layout/playground"

const invoices = [
  { id: "INV-001", status: "결제 완료", method: "신용카드", amount: "₩250,000" },
  { id: "INV-002", status: "대기중", method: "계좌이체", amount: "₩150,000" },
  { id: "INV-003", status: "미결제", method: "가상계좌", amount: "₩350,000" },
]

export function TableDemo() {
  return (
    <Card className="p-24 md:p-40 flex flex-col gap-32 w-full max-w-960 mx-auto border border-integra-gray-200 shadow-integra rounded-16 bg-white">
      
      {/* 1. 프리뷰 영역: bg-integra-gray-50 및 border-integra-gray-200 적용 */}
      <Playground>
        <div className="w-full rounded-12 border border-integra-gray-100 overflow-hidden bg-white shadow-sm">
          <Table>
            <TableHeader className="bg-integra-gray-50/50">
              <TableRow>
                <TableHead className="fs-12 text-integra-gray-500 font-bold uppercase tracking-1">주문번호</TableHead>
                <TableHead className="fs-12 text-integra-gray-500 font-bold uppercase tracking-1">상태</TableHead>
                <TableHead className="fs-12 text-integra-gray-500 font-bold uppercase tracking-1">결제 수단</TableHead>
                <TableHead className="text-right fs-12 text-integra-gray-500 font-bold uppercase tracking-1">금액</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id} className="hover:bg-integra-gray-50/50 transition-colors">
                  <TableCell className="fs-14 font-medium text-integra-gray-900">{invoice.id}</TableCell>
                  <TableCell>
                    <Badge variant={invoice.status === "결제 완료" ? "default" : "secondary"} className="fs-12">
                      {invoice.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="fs-14 text-integra-gray-600">{invoice.method}</TableCell>
                  <TableCell className="text-right fs-14 font-bold text-integra-gray-900">{invoice.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Playground>

      {/* 2. 코드 영역: bg-integra-gray-900 및 fs-14 적용 */}
      <div className="rounded-8 bg-integra-gray-900 p-20 overflow-x-auto font-mono fs-14 leading-24 text-white">
        <p className="text-integra-gray-500 mb-8">// 테이블 구조 예시</p>
        <code className="block">
          &lt;Table&gt;<br />
          &nbsp;&nbsp;&lt;TableHeader&gt;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;TableRow&gt;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;TableHead&gt;...&lt;/TableHead&gt;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/TableRow&gt;<br />
          &nbsp;&nbsp;&lt;/TableHeader&gt;<br />
          &nbsp;&nbsp;&lt;TableBody&gt;<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;TableRow&gt;...&lt;/TableRow&gt;<br />
          &nbsp;&nbsp;&lt;/TableBody&gt;<br />
          &lt;/Table&gt;
        </code>
      </div>
    </Card>
  )
}
