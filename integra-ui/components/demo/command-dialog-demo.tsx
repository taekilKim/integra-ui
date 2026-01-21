"use client"

import * as React from "react"
import {
    Calculator,
    Calendar,
    CreditCard,
    Gear,
    User,
    EnvelopeSimple,
    Rocket
} from "@phosphor-icons/react"

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"

export function CommandDialogDemo() {
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    return (
        <>
            <p className="fs-14 text-integra-gray-500">
                Press{" "}
                <kbd className="pointer-events-none inline-flex h-20 select-none items-center gap-4 rounded-4 border border-integra-gray-200 bg-integra-gray-50 px-6 font-mono fs-10 font-medium text-integra-gray-500 opacity-100">
                    <span className="fs-12">⌘</span>J
                </kbd>{" "}
                to open the command menu.
            </p>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        <CommandItem>
                            <Calendar className="mr-8 h-16 w-16" />
                            <span>Calendar</span>
                        </CommandItem>
                        <CommandItem>
                            <Rocket className="mr-8 h-16 w-16" />
                            <span>Search Emoji</span>
                        </CommandItem>
                        <CommandItem>
                            <Calculator className="mr-8 h-16 w-16" />
                            <span>Calculator</span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Settings">
                        <CommandItem>
                            <User className="mr-8 h-16 w-16" />
                            <span>Profile</span>
                            <CommandShortcut>⌘P</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                            <CreditCard className="mr-8 h-16 w-16" />
                            <span>Billing</span>
                            <CommandShortcut>⌘B</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                            <Gear className="mr-8 h-16 w-16" />
                            <span>Settings</span>
                            <CommandShortcut>⌘S</CommandShortcut>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    )
}
