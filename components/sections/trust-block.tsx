import Balancer from "react-wrap-balancer"
import { ShieldCheck } from "lucide-react"
import { siteConfig } from "@/config/site"

export function TrustBlock() {
  const { trustBadges, business } = siteConfig

  return (
    <section id="about" className="border-y bg-muted/30 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <Balancer>Why Choose {business.name}?</Balancer>
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            <Balancer>Your safety and satisfaction are our top priority.</Balancer>
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustBadges.map((badge) => (
            <div
              key={badge.name}
              className="flex flex-col items-center gap-3 rounded-xl border bg-card p-6 text-center shadow-sm"
            >
              <div className="flex size-14 items-center justify-center rounded-full bg-primary/10">
                <ShieldCheck className="size-7 text-primary" />
              </div>
              <h3 className="font-semibold">{badge.name}</h3>
              {badge.description && (
                <p className="text-sm text-muted-foreground">
                  {badge.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
