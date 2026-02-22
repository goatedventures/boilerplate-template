import { Star } from "lucide-react"
import { siteConfig } from "@/config/site"

export function SocialProof() {
  const { hero, business } = siteConfig

  return (
    <section id="reviews" className="border-y bg-muted/30 py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-4 sm:flex-row sm:gap-8 sm:px-6 lg:px-8">
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
          <span className="text-lg font-bold">{hero.rating.score}</span>
        </div>

        {/* Review Count */}
        <p className="text-sm text-muted-foreground">
          Rated{" "}
          <span className="font-semibold text-foreground">
            {hero.rating.score}/5
          </span>{" "}
          from{" "}
          <span className="font-semibold text-foreground">
            {hero.rating.count.toLocaleString()}+
          </span>{" "}
          reviews on {hero.rating.platform}
        </p>

        {/* Service Areas */}
        <div className="hidden h-4 w-px bg-border sm:block" />
        <p className="hidden text-sm text-muted-foreground sm:block">
          Trusted across{" "}
          <span className="font-semibold text-foreground">
            {business.serviceArea.slice(0, 3).join(", ")}
          </span>{" "}
          &amp; more
        </p>
      </div>
    </section>
  )
}
