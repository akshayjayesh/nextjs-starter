"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const pathname = usePathname()
  const linkClass = (href: string) =>
    cn(
      "px-3 py-2 rounded-md text-sm font-medium transition-colors",
      pathname === href
        ? "bg-accent text-accent-foreground"
        : "text-foreground/80 hover:text-foreground hover:bg-accent",
    )

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-sm font-semibold">
          Next.js Starter
          <span className="sr-only">{"Home"}</span>
        </Link>

        <div className="flex items-center gap-1">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/about" className={linkClass("/about")}>
            About
          </Link>
          <Link href="/contact" className={linkClass("/contact")}>
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
