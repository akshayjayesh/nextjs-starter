"use client"

import { useEffect, useState, useCallback } from "react"

type Theme = "light" | "dark"

const THEME_KEY = "theme"

export function useDarkMode() {
  const [theme, setTheme] = useState<Theme>("light")

  // Apply theme to <html> to match Tailwind's class strategy
  const applyThemeClass = useCallback((t: Theme) => {
    const root = document.documentElement
    if (t === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [])

  // Initialize from localStorage or prefers-color-scheme
  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem(THEME_KEY)) as Theme | null
    if (stored === "light" || stored === "dark") {
      setTheme(stored)
      applyThemeClass(stored)
      return
    }
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches
    const initial: Theme = prefersDark ? "dark" : "light"
    setTheme(initial)
    applyThemeClass(initial)
  }, [applyThemeClass])

  // Persist changes
  useEffect(() => {
    try {
      localStorage.setItem(THEME_KEY, theme)
    } catch {
      // ignore write errors
    }
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark"
      applyThemeClass(next)
      return next
    })
  }, [applyThemeClass])

  return { theme, setTheme, toggle }
}
