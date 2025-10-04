import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="text-foreground/70">The page you are looking for does not exist.</p>
      <Button asChild>
        <Link href="/">Go back home</Link>
      </Button>
    </main>
  )
}
