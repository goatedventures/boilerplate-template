import Balancer from "react-wrap-balancer"
import { Phone, Star, ShieldCheck, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { siteConfig } from "@/config/site"

export function Hero() {
  const { hero, business } = siteConfig

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Content */}
          <div className="space-y-6">
            {/* Availability Badge */}
            <Badge variant="secondary" className="gap-1.5 px-3 py-1 text-sm">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-green-500" />
              </span>
              {business.availability}
            </Badge>

            {/* H1 - The main headline */}
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              <Balancer>{hero.headline}</Balancer>
            </h1>

            {/* Subheadline */}
            <p className="max-w-xl text-lg text-muted-foreground sm:text-xl">
              <Balancer>{hero.subheadline}</Balancer>
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="text-base">
                <a href={hero.primaryCTA.href}>
                  <Phone className="size-5" />
                  {hero.primaryCTA.text}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <a href={hero.secondaryCTA.href}>
                  {hero.secondaryCTA.text}
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>

            {/* Trust Proof next to CTA */}
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:gap-6">
              {/* Star Rating */}
              <div className="flex items-center gap-2">
                <div className="flex" aria-label={`${hero.rating.score} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`size-5 ${
                        i < Math.floor(hero.rating.score)
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold">
                  {hero.rating.score}
                </span>
                <span className="text-sm text-muted-foreground">
                  on {hero.rating.platform} ({hero.rating.count.toLocaleString()}+
                  reviews)
                </span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 pt-1">
              {hero.trustBadges.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground"
                >
                  <ShieldCheck className="size-4 text-primary" />
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative hidden md:block">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
              {/* AI agents: replace with next/image pointing to a real photo */}
              <div className="flex h-full items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <div className="mx-auto mb-3 flex size-16 items-center justify-center rounded-full bg-primary/10">
                    <ShieldCheck className="size-8 text-primary" />
                  </div>
                  <p className="text-sm font-medium">Add team / van photo</p>
                  <p className="text-xs">Replace with hero image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
