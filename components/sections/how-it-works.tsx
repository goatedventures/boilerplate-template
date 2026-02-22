import Balancer from "react-wrap-balancer"
import { siteConfig } from "@/config/site"

export function HowItWorks() {
  const { howItWorks } = siteConfig

  return (
    <section className="border-y bg-muted/30 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <Balancer>How It Works</Balancer>
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            <Balancer>Getting help is simple — here&apos;s what to expect.</Balancer>
          </p>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-0">
          {howItWorks.map((step, index) => (
            <div
              key={step.step}
              className="relative flex flex-col items-center text-center"
            >
              {/* Connector between circles (desktop only, not after last) */}
              {index < howItWorks.length - 1 && (
                <div className="absolute left-[calc(50%+28px)] right-[calc(-50%+28px)] top-6 hidden border-t-2 border-dashed border-border md:block" />
              )}

              {/* Step Number */}
              <div className="relative z-10 mb-4 flex size-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                {step.step}
              </div>

              <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
              <p className="max-w-xs text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
