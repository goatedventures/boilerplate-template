"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { siteConfig } from "@/config/site"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const { business, navigation, hero } = siteConfig

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] sm:w-[320px]">
        <SheetHeader>
          <SheetTitle className="text-left">{business.name}</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-1 pt-4">
          <div className="flex items-center gap-2 px-2 pb-3 text-sm text-muted-foreground">
            <MapPin className="size-4 shrink-0" />
            {business.serviceArea.slice(0, 3).join(", ")}
          </div>
          <Separator />
          <nav className="flex flex-col gap-1 pt-3" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-accent"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/blog"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-accent"
            >
              Blog
            </Link>
          </nav>
          <Separator className="my-3" />
          <div className="flex flex-col gap-2 px-2">
            <Button asChild size="lg" className="w-full">
              <a href={hero.primaryCTA.href}>
                <Phone className="size-4" />
                {hero.primaryCTA.text}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full">
              <a href={hero.secondaryCTA.href} onClick={() => setOpen(false)}>
                {hero.secondaryCTA.text}
              </a>
            </Button>
          </div>
          <p className="px-2 pt-4 text-xs text-muted-foreground">
            {business.availability}
          </p>
        </div>
      </SheetContent>
    </Sheet>
  )
}
