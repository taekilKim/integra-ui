"use client"

import * as React from "react"
import { DatePicker } from "@/components/ui/date-picker"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function DatePickerDemo() {
    const [date, setDate] = React.useState<Date>()

    return (
        <div className="flex flex-col gap-24 items-center justify-center p-24 bg-integra-gray-50 rounded-24">
            {/* Form Card */}
            <Card className="w-full max-w-400 p-24 space-y-24 shadow-integra border-0">
                <div className="space-y-4 text-center">
                    <h3 className="fs-20 font-bold text-integra-gray-900">생년월일 입력</h3>
                    <p className="fs-14 text-integra-gray-500">
                        정확한 서비스 제공을 위해 생년월일을 입력해주세요.
                    </p>
                </div>

                <div className="space-y-8">
                    <Label className="fs-13 font-medium text-integra-gray-700">Birthday</Label>
                    <DatePicker
                        date={date}
                        setDate={setDate}
                        placeholder="Ex) 1995.05.24"
                    />
                </div>

                <Button className="w-full" disabled={!date}>
                    다음 단계로
                </Button>
            </Card>
        </div>
    )
}
