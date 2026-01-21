"use client"

import * as React from "react"
import { CaretLeft, CaretRight } from "@phosphor-icons/react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

/**
 * [Integra UI - Calendar SAI Version]
 * B2C 서비스에 최적화된 Date Picker 컴포넌트입니다.
 * 40px 터치 타겟과 16px 라운딩을 통해 모바일 친화적인 UX를 제공합니다.
 */
function Calendar({
    className,
    classNames,
    showOutsideDays = true,
    ...props
}: CalendarProps) {
    return (
        <DayPicker
            showOutsideDays={showOutsideDays}
            className={cn("p-16", className)}
            classNames={{
                months: "flex flex-col sm:flex-row space-y-16 sm:space-x-16 sm:space-y-0",
                month: "space-y-16",
                caption: "flex justify-center pt-4 relative items-center",
                // [Caption Label] fs-16 font-semibold: 명확한 년월 표시
                caption_label: "fs-16 font-semibold text-integra-gray-900",
                nav: "space-x-4 flex items-center",
                // [Nav Button] h-28 w-28: 컴팩트한 네비게이션 버튼 (opacity 활용)
                nav_button: cn(
                    buttonVariants({ variant: "tertiary", appearance: "outlined" }),
                    "h-28 w-28 bg-transparent p-0 opacity-50 hover:opacity-100"
                ),
                nav_button_previous: "absolute left-4",
                nav_button_next: "absolute right-4",
                table: "w-full border-collapse",
                head_row: "flex",
                // [Head Cell] fs-13 text-integra-gray-500: 요일 헤더
                head_cell:
                    "text-integra-gray-500 rounded-8 w-40 font-normal fs-13",
                row: "flex w-full mt-8",
                // [Cell] w-40, h-40: 40px 터치 타겟 확보 (SAI Strict)
                cell: "h-40 w-40 text-center fs-14 p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-8 [&:has([aria-selected].day-outside)]:bg-integra-gray-50/50 [&:has([aria-selected])]:bg-integra-gray-50 first:[&:has([aria-selected])]:rounded-l-8 last:[&:has([aria-selected])]:rounded-r-8 focus-within:relative focus-within:z-20",
                day: cn(
                    buttonVariants({ appearance: "text" }),
                    // [Day Button] w-40, h-40, rounded-12: 터치하기 편한 원형에 가까운 스퀘어클
                    "h-40 w-40 p-0 font-normal rounded-12 aria-selected:opacity-100 hover:bg-integra-gray-100"
                ),
                day_range_end: "day-range-end",
                // [State: Selected] primary 브랜드 컬러 적용
                day_selected:
                    "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                // [State: Today] text-primary로 강조
                day_today: "bg-integra-gray-50 text-integra-gray-900",
                day_outside:
                    "day-outside text-integra-gray-400 opacity-50 aria-selected:bg-integra-gray-50/50 aria-selected:text-integra-gray-500 aria-selected:opacity-30",
                day_disabled: "text-integra-gray-300 opacity-50",
                day_range_middle:
                    "aria-selected:bg-integra-gray-50 aria-selected:text-integra-gray-900",
                day_hidden: "invisible",
                ...classNames,
            }}
            components={{
                Chevron: ({ ...props }) => <CalendarChevron {...props} />,
            }}
            {...props}
        />
    )
}
Calendar.displayName = "Calendar"

function CalendarChevron({ orientation, className, ...props }: React.ComponentProps<"svg"> & { orientation?: "left" | "right" | "up" | "down" }) {
    const iconClass = cn("h-16 w-16", className);
    switch (orientation) {
        case "left":
            return <CaretLeft className={iconClass} {...props} />
        case "right":
            return <CaretRight className={iconClass} {...props} />
        default:
            return <CaretRight className={iconClass} {...props} />
    }
}

export { Calendar }
