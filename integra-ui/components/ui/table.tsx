import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * [Integra UI - Table SAI Version]
 * 대량의 데이터를 원자 단위의 그리드 시스템에 맞춰 정렬합니다.
 * 모든 간격은 4px/2px 배수 수치를 엄격히 준수합니다.
 */
const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto scrollbar-hide">
    <table
      ref={ref}
      // fs-14 적용 및 기본 글자색 지정
      className={cn("w-full caption-bottom fs-14 text-integra-gray-900", className)}
      {...props}
    />
  </div>
))
Table.displayName = "Table"

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("border-b border-integra-gray-100 bg-white", className)} {...props} />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("divide-y divide-integra-gray-100", className)}
    {...props}
  />
))
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    // ✨ SAI: 투명도(/50)를 제거하고 순수 integra-gray-50 토큰 적용
    className={cn(
      "border-t border-integra-gray-100 bg-integra-gray-50 font-medium",
      className
    )}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b border-integra-gray-100 transition-colors hover:bg-integra-gray-50 data-[state=selected]:bg-integra-gray-100",
      className
    )}
    {...props}
  />
))
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    // ✨ SAI: fs-12 적용 및 uppercase 제거 (직관적 대소문자 유지)
    className={cn(
      "h-44 px-16 text-left align-middle font-bold text-integra-gray-500 fs-12 tracking-1",
      className
    )}
    {...props}
  />
))
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    // fs-14 및 leading-20 적용 (4px 수직 리듬)
    className={cn("px-16 py-12 align-middle text-integra-gray-900 leading-20 tracking-0", className)}
    {...props}
  />
))
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-16 fs-12 text-integra-gray-400 font-medium", className)}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}