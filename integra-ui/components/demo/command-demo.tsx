"use client"

import * as React from "react"
import {
    Calendar,
    CreditCard,
    Gear,
    User,
    EnvelopeSimple,
    Rocket
} from "@phosphor-icons/react"

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"

export function CommandDemo() {
    return (
        <div className="flex flex-col gap-24 items-center justify-center p-24 bg-integra-gray-50 rounded-24">
            <div className="w-full max-w-400">
                <Command className="shadow-integra">
                    <CommandInput placeholder="검색어를 입력하세요..." />
                    <CommandList>
                        <CommandEmpty>검색 결과가 없습니다.</CommandEmpty>
                        <CommandGroup heading="Suggestions">
                            <CommandItem>
                                <Calendar className="mr-8 h-16 w-16" />
                                <span>일정 관리</span>
                            </CommandItem>
                            <CommandItem>
                                <Rocket className="mr-8 h-16 w-16" />
                                <span>빠른 실행</span>
                                <CommandShortcut>⌘E</CommandShortcut>
                            </CommandItem>
                            <CommandItem>
                                <Gear className="mr-8 h-16 w-16" />
                                <span>설정</span>
                                <CommandShortcut>⌘S</CommandShortcut>
                            </CommandItem>
                        </CommandGroup>
                        <CommandSeparator />
                        <CommandGroup heading="Settings">
                            <CommandItem>
                                <User className="mr-8 h-16 w-16" />
                                <span>프로필</span>
                                <CommandShortcut>⌘P</CommandShortcut>
                            </CommandItem>
                            <CommandItem>
                                <CreditCard className="mr-8 h-16 w-16" />
                                <span>결제 관리</span>
                                <CommandShortcut>⌘B</CommandShortcut>
                            </CommandItem>
                            <CommandItem>
                                <EnvelopeSimple className="mr-8 h-16 w-16" />
                                <span>초대하기</span>
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </div>
        </div>
    )
}
