"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Playground } from "@/components/layout/playground"
import { User, CreditCard, Gear, SignOut } from "@phosphor-icons/react"

export function DropdownMenuDemo() {
  return (
    <Card className="p-24 md:p-40 w-full max-w-960 mx-auto border border-integra-gray-200 shadow-integra rounded-16 bg-white">
      <Playground>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button appearance="outlined" variant="default">Open Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-240">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User className="mr-8 h-16 w-16" />
                <span>Profile</span>
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard className="mr-8 h-16 w-16" />
                <span>Billing</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Gear className="mr-8 h-16 w-16" />
                <span>Settings</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <SignOut className="mr-8 h-16 w-16" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Playground>
    </Card>
  )
}