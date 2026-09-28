"use client"

import * as React from "react"
import { Moon, Sun } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [dark, setDark] = React.useState(false)

  React.useEffect(() => {
    const storedTheme = window.localStorage.getItem("integra-theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initialDark = storedTheme ? storedTheme === "dark" : prefersDark
    setDark(initialDark)
    document.documentElement.dataset.theme = initialDark ? "dark" : "light"
  }, [])

  function toggleTheme() {
    const nextDark = !dark
    setDark(nextDark)
    document.documentElement.dataset.theme = nextDark ? "dark" : "light"
    window.localStorage.setItem("integra-theme", nextDark ? "dark" : "light")
  }

  return (
    <Button
      type="button"
      size="small"
      shape="square"
      appearance="text"
      variant="tertiary"
      aria-label={dark ? "라이트 모드로 전환" : "다크 모드로 전환"}
      aria-pressed={dark}
      onClick={toggleTheme}
    >
      {dark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
    </Button>
  )
}
