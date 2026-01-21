"use client"

import * as React from "react"
import { type DialogProps } from "@radix-ui/react-dialog"
import { Command as CommandPrimitive } from "cmdk"
import { MagnifyingGlass } from "@phosphor-icons/react"

import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const Command = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
    <CommandPrimitive
        ref={ref}
        // [Command Root] rounded-16 bg-white overflow-hidden text-integra-gray-900
        className={cn(
            "flex h-full w-full flex-col overflow-hidden rounded-16 bg-white text-integra-gray-900 border border-integra-gray-100",
            className
        )}
        {...props}
    />
))
Command.displayName = CommandPrimitive.displayName

interface CommandDialogProps extends DialogProps { }

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
    return (
        <Dialog {...props}>
            <DialogContent className="overflow-hidden p-0 shadow-integra border-0">
                <Command className="[&_[cmdk-group-heading]]:px-8 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-integra-gray-500 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-8 [&_[cmdk-input-wrapper]_svg]:h-20 [&_[cmdk-input-wrapper]_svg]:w-20 [&_[cmdk-input]]:h-48 [&_[cmdk-item]]:px-8 [&_[cmdk-item]]:py-12 [&_[cmdk-item]_svg]:h-20 [&_[cmdk-item]_svg]:w-20">
                    {children}
                </Command>
            </DialogContent>
        </Dialog>
    )
}

const CommandInput = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Input>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
    <div className="flex items-center border-b px-12 border-integra-gray-100" cmdk-input-wrapper="">
        <MagnifyingGlass className="mr-8 h-16 w-16 shrink-0 opacity-50" />
        <CommandPrimitive.Input
            ref={ref}
            // [Command Input] h-44 fs-14: 깔끔한 검색 인풋
            className={cn(
                "flex h-44 w-full rounded-8 bg-transparent py-12 fs-14 outline-none placeholder:text-integra-gray-500 disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
            {...props}
        />
    </div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
    <CommandPrimitive.List
        ref={ref}
        className={cn("max-h-300 overflow-y-auto overflow-x-hidden", className)}
        {...props}
    />
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Empty>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
    <CommandPrimitive.Empty
        ref={ref}
        className="py-24 text-center fs-14 text-integra-gray-500"
        {...props}
    />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Group>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
    <CommandPrimitive.Group
        ref={ref}
        className={cn(
            "overflow-hidden p-4 text-integra-gray-900 [&_[cmdk-group-heading]]:px-8 [&_[cmdk-group-heading]]:py-6 [&_[cmdk-group-heading]]:fs-12 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-integra-gray-500",
            className
        )}
        {...props}
    />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Separator>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
    <CommandPrimitive.Separator
        ref={ref}
        className={cn("-mx-4 h-1 bg-integra-gray-100", className)}
        {...props}
    />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
    <CommandPrimitive.Item
        ref={ref}
        // [Command Item] rounded-8 outline-none: 호버 및 선택 시 스타일
        // data-[selected=true]: bg-integra-gray-100 (표준 호버)
        className={cn(
            "relative flex cursor-default select-none items-center rounded-8 px-8 py-6 fs-14 outline-none data-[disabled]:pointer-events-none aria-selected:bg-integra-gray-50 aria-selected:text-integra-gray-900 data-[selected=true]:bg-integra-gray-50 data-[selected=true]:text-integra-gray-900 data-[disabled]:opacity-50",
            className
        )}
        {...props}
    />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
    return (
        <span
            className={cn(
                "ml-auto fs-12 tracking-widest text-integra-gray-500",
                className
            )}
            {...props}
        />
    )
}
CommandShortcut.displayName = "CommandShortcut"

export {
    Command,
    CommandDialog,
    CommandInput,
    CommandList,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandShortcut,
    CommandSeparator,
}
