"use client"

import { useActionState } from "react"
import Balancer from "react-wrap-balancer"
import { Phone, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { siteConfig } from "@/config/site"
import { handleQuoteRequest, type FormState } from "@/lib/actions"

const initialState: FormState = {
  success: false,
  message: "",
}

export function CTAForm() {
  const { hero, services, business } = siteConfig
  const [state, formAction, isPending] = useActionState(
    handleQuoteRequest,
    initialState
  )

  return (
    <section id="quote" className="border-y bg-primary/5 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: Value proposition */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <Balancer>Get Your Free Quote</Balancer>
            </h2>
            <p className="text-lg text-muted-foreground">
              <Balancer>
                Tell us what you need and we&apos;ll get back to you with a clear,
                no-obligation quote — usually within the hour.
              </Balancer>
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="size-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Prefer to call?</p>
                  <a
                    href={hero.primaryCTA.href}
                    className="text-primary hover:underline"
                  >
                    {business.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {hero.rating.score}/5 from {hero.rating.count.toLocaleString()}+
                  reviews
                </span>
              </div>
            </div>
          </div>

          {/* Right: Quote Form */}
          <Card className="shadow-lg">
            <CardContent className="p-6 sm:p-8">
              {state.success ? (
                <div className="flex flex-col items-center gap-3 py-8 text-center">
                  <div className="flex size-14 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="size-7 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Quote Requested!</h3>
                  <p className="text-muted-foreground">{state.message}</p>
                </div>
              ) : (
                <form action={formAction} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="e.g. John Smith"
                      required
                      minLength={2}
                    />
                    {state.errors?.name && (
                      <p className="text-sm text-destructive">
                        {state.errors.name[0]}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="e.g. 07700 900000"
                      required
                    />
                    {state.errors?.phone && (
                      <p className="text-sm text-destructive">
                        {state.errors.phone[0]}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="postcode">Postcode</Label>
                    <Input
                      id="postcode"
                      name="postcode"
                      placeholder="e.g. LS1 1AA"
                      required
                    />
                    {state.errors?.postcode && (
                      <p className="text-sm text-destructive">
                        {state.errors.postcode[0]}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="jobType">Type of Job</Label>
                    <Select name="jobType" required>
                      <SelectTrigger id="jobType">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem
                            key={service.title}
                            value={service.title}
                          >
                            {service.title}
                          </SelectItem>
                        ))}
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {state.errors?.jobType && (
                      <p className="text-sm text-destructive">
                        {state.errors.jobType[0]}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Additional Details{" "}
                      <span className="text-muted-foreground">(optional)</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about the problem..."
                      rows={3}
                    />
                  </div>

                  {state.message && !state.success && (
                    <p className="text-sm text-destructive">{state.message}</p>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-base"
                    disabled={isPending}
                  >
                    {isPending ? "Sending..." : "Request Free Quote"}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    No obligation. We typically respond within 1 hour.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
