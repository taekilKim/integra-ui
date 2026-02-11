"use client"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Card } from "@/components/ui/card"
import { Playground } from "@/components/layout/playground"

export function PaginationDemo() {
  return (
    <Card className="p-24 md:p-40 w-full max-w-960 mx-auto border border-integra-gray-200 shadow-integra rounded-16 bg-white">
      {/* ✨ Playground 컴포넌트 래퍼 사용 */}
      <Playground>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </Playground>

      <div className="rounded-12 bg-integra-gray-900 p-24 font-mono fs-14 leading-24 text-white mt-32">
        <p className="text-integra-gray-500 mb-8">// 페이지네이션 구조 예시</p>
        <code>&lt;Pagination&gt;...&lt;/Pagination&gt;</code>
      </div>
    </Card>
  )
}
