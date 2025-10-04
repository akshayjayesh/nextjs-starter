import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-[calc(100dvh-4rem)] max-w-6xl flex-col items-center justify-center px-4 text-center">
      <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">Hello Next.js 🚀</h1>
      <p className="mt-3 max-w-prose text-pretty text-base text-foreground/80 sm:text-lg">
        A minimal, production-ready starter with Tailwind, TypeScript, and dark mode.
      </p>
      <div className="mt-6 flex items-center gap-3">
        <Button variant="primary">Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </div>
    </main>
  )
}
