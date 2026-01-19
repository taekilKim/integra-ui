import * as React from "react"
import { CaretLeft, CaretRight, DotsThree } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"
import { ButtonProps, buttonVariants } from "@/components/ui/button"

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
)
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-4", className)}
    {...props}
  />
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
))
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">

const PaginationLink = ({
  className,
  isActive,
  size = "small", // ✨ 수정: 유효한 버튼 사이즈인 'small'(32px)을 베이스로 함
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      // 1. 버튼 스타일 상속: Appearance(Text/Outlined) + Variant(Tertiary)
      buttonVariants({
        appearance: isActive ? "outlined" : "text",
        variant: "tertiary",
        size,
      }),
      // 2. 페이지네이션 전용 규격 오버라이딩 (40px 정사각)
      // w-40 h-40: 40px 크기 강제 (SAI 토큰)
      // p-0: 아이콘/숫자 중앙 정렬을 위해 패딩 제거
      "w-40 h-40 p-0 fs-14 rounded-8 cursor-pointer",
      
      // Active 상태의 추가 스타일 (배경 흰색, 보더)
      isActive && "bg-white border-integra-gray-200 text-integra-gray-900 shadow-sm hover:bg-white",
      className
    )}
    {...props}
  />
)
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="small"
    // 텍스트가 포함된 버튼이므로 너비 제한 해제 (w-auto) 및 패딩 재설정
    className={cn("gap-4 pl-10 pr-16 w-auto", className)}
    {...props}
  >
    <CaretLeft weight="bold" className="h-16 w-16" />
    <span className="fs-14">Previous</span>
  </PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="small"
    className={cn("gap-4 pl-16 pr-10 w-auto", className)}
    {...props}
  >
    <span className="fs-14">Next</span>
    <CaretRight weight="bold" className="h-16 w-16" />
  </PaginationLink>
)
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-40 w-40 items-center justify-center", className)}
    {...props}
  >
    <DotsThree weight="bold" className="h-16 w-16 text-integra-gray-400" />
    <span className="sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = "PaginationEllipsis"

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}