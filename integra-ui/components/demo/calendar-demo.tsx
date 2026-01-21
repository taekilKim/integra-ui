"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function CalendarDemo() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <div className="flex flex-col gap-24 items-center justify-center p-24 bg-integra-gray-50 rounded-24">
            {/* 1. Simple Calendar Card */}
            <Card className="p-0 overflow-hidden shadow-integra border-0">
                <div className="bg-integra-gray-900 p-24 text-white">
                    <h3 className="fs-18 font-bold">날짜 선택</h3>
                    <p className="fs-14 text-integra-gray-400 mt-4 leading-20">
                        원하시는 방문 일정을 선택해주세요.
                    </p>
                </div>
                <div className="p-16 bg-white">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-16"
                    />
                </div>
                <div className="p-16 border-t border-integra-gray-100 bg-integra-gray-50 flex justify-end">
                    <Button size="small" variant="default" className="w-full sm:w-auto">
                        {date ? `${date.toLocaleDateString()} 예약하기` : "날짜를 선택하세요"}
                    </Button>
                </div>
            </Card>
        </div>
    )
}
