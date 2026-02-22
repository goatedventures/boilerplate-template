import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { siteConfig } from "@/config/site"

export function Footer() {
  const { business, navigation } = siteConfig
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Business Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">{business.name}</h3>
            <p className="text-sm text-muted-foreground">
              Professional {business.tradeType.toLowerCase()} services in{" "}
              {business.address.city} and surrounding areas. Trusted since{" "}
              {business.yearEstablished}.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${business.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone className="size-4 shrink-0" />
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="size-4 shrink-0" />
                  {business.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="size-4 shrink-0" />
                {business.address.city}, {business.address.region}
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Clock className="size-4 shrink-0" />
                {business.availability}
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h4 className="font-semibold">Areas We Cover</h4>
            <ul className="space-y-2 text-sm">
              {business.serviceArea.map((area) => (
                <li key={area} className="text-muted-foreground">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} {business.name}. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
      {/* Spacer for mobile sticky bar */}
      <div className="h-16 md:hidden" />
    </footer>
  )
}
