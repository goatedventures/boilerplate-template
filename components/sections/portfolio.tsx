import Balancer from "react-wrap-balancer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { siteConfig } from "@/config/site"

export function Portfolio() {
  const { portfolio } = siteConfig

  if (portfolio.length === 0) return null

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <Balancer>Recent Work</Balancer>
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            <Balancer>See the quality of our work for yourself.</Balancer>
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item) => (
            <Card key={item.title} className="gap-0 overflow-hidden py-0">
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-muted">
                {/* AI agents: replace with next/image */}
                <div className="flex h-full items-center justify-center text-muted-foreground">
                  <p className="text-sm">Add project photo</p>
                </div>
              </div>
              <CardContent className="p-5 pt-4">
                <Badge variant="secondary" className="mb-2">
                  {item.category}
                </Badge>
                <h3 className="mb-1 font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
