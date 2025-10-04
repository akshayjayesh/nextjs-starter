"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useDarkMode } from "@/hooks/use-dark-mode"

export function ThemeToggle() {
  const { theme, toggle } = useDarkMode()

  return (
    <Button
      aria-label="Toggle theme"
      variant="outline"
      size="icon"
      onClick={toggle}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? <Sun aria-hidden className="size-4" /> : <Moon aria-hidden className="size-4" />}
    </Button>
  )
}
