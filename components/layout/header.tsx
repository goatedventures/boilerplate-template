import Link from "next/link"
import { Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { MobileNav } from "./mobile-nav"

export function Header() {
  const { business, navigation, hero } = siteConfig

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo + Service Area */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex flex-col">
            <span className="text-lg font-bold text-foreground leading-tight">
              {business.name}
            </span>
            <span className="hidden text-xs text-muted-foreground sm:flex items-center gap-1">
              <MapPin className="size-3" />
              {business.serviceArea.slice(0, 3).join(", ")}
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/blog" className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Blog
          </Link>
        </nav>

        {/* CTA + Mobile Nav */}
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={hero.primaryCTA.href}>
              <Phone className="size-4" />
              {hero.primaryCTA.text}
            </a>
          </Button>
          <Button asChild size="icon" variant="default" className="sm:hidden">
            <a href={hero.primaryCTA.href} aria-label="Call us now">
              <Phone className="size-4" />
            </a>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
