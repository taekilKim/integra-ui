"use client"

import * as React from "react"
import { DatePicker } from "@/components/ui/date-picker"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function DatePickerDemo() {
    const [date, setDate] = React.useState<Date>()

    return (
        <div className="p-24 bg-white flex justify-center">
            <DatePicker
                date={date}
                setDate={setDate}
                placeholder="Ex) 1995.05.24"
            />
        </div>
    )
}
