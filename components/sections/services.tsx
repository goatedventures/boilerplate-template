import Balancer from "react-wrap-balancer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { siteConfig } from "@/config/site"

export function Services() {
  const { services } = siteConfig

  return (
    <section id="services" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <Balancer>How Can We Help?</Balancer>
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            <Balancer>Pick your problem — we&apos;ll get it sorted fast.</Balancer>
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link key={service.title} href={service.href}>
                <Card className="group h-full cursor-pointer transition-all hover:border-primary/30 hover:shadow-md">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-6" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h3 className="font-semibold leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-1 pt-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                        Get a quote
                        <ArrowRight className="size-3" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
