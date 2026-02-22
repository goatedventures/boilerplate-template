"use client"

import { Phone, MessageSquare, Navigation } from "lucide-react"
import { siteConfig } from "@/config/site"

export function MobileStickyBar() {
  const { hero, business } = siteConfig

  const mapsQuery = encodeURIComponent(
    `${business.address.street}, ${business.address.city}, ${business.address.postcode}`
  )

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur-sm md:hidden safe-area-bottom">
      <div className="grid grid-cols-3">
        <a
          href={hero.primaryCTA.href}
          className="flex flex-col items-center gap-1 py-3 text-xs font-medium text-primary transition-colors hover:bg-accent active:bg-accent"
          aria-label="Call us"
        >
          <Phone className="size-5" />
          <span>Call</span>
        </a>
        <a
          href={hero.secondaryCTA.href}
          className="flex flex-col items-center gap-1 py-3 text-xs font-medium text-foreground transition-colors hover:bg-accent active:bg-accent"
          aria-label="Get a quote"
        >
          <MessageSquare className="size-5" />
          <span>Quote</span>
        </a>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-3 text-xs font-medium text-foreground transition-colors hover:bg-accent active:bg-accent"
          aria-label="Get directions"
        >
          <Navigation className="size-5" />
          <span>Directions</span>
        </a>
      </div>
    </div>
  )
}
