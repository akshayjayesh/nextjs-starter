export const SITE_NAME = "Next.js Starter"
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const

export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
