"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

interface DatePickerProps extends React.HTMLAttributes<HTMLDivElement> {
    date?: Date;
    setDate?: (date?: Date) => void;
    placeholder?: string;
}

/**
 * [Integra UI - DatePicker SAI Version]
 * 팝오버(Atom)와 캘린더(Molecule)를 조합한 Organism 컴포넌트입니다.
 * w-280, justify-start 등의 토큰을 사용하여 인풋 필드처럼 보이도록 구성합니다.
 */
export function DatePicker({
    date,
    setDate,
    placeholder = "날짜를 선택하세요",
    className,
}: DatePickerProps) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="secondary"
                    appearance="outlined"
                    // [Trigger Button] w-full justification-start: 인풋과 유사한 UX
                    // text-left font-normal: 날짜 텍스트 가독성 확보
                    className={cn(
                        "w-full justify-start text-left font-normal border-integra-gray-200 hover:bg-white",
                        !date && "text-integra-gray-500",
                        className
                    )}
                >
                    <CalendarIcon className="mr-8 h-16 w-16 text-integra-gray-500" />
                    {date ? format(date, "PPP") : <span>{placeholder}</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 rounded-16" align="start">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    autoFocus
                />
            </PopoverContent>
        </Popover>
    )
}
