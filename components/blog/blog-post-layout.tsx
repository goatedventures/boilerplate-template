import Image from "next/image"
import Link from "next/link"
import Balancer from "react-wrap-balancer"
import { ArrowLeft, Calendar, User, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { siteConfig } from "@/config/site"
import type { BlogPostMeta } from "@/lib/blog"

export function BlogPostLayout({
  post,
  ogImage,
  children,
}: {
  post: BlogPostMeta
  ogImage: string
  children: React.ReactNode
}) {
  const { business, hero } = siteConfig

  const formattedDate = new Date(post.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Back link */}
      <Link
        href="/blog"
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Back to Blog
      </Link>

      <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
        {/* Main content */}
        <article>
          {/* Meta */}
          <header className="mb-8">
            {post.tags && post.tags.length > 0 && (
              <div className="mb-3 flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <Balancer>{post.title}</Balancer>
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <User className="size-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="size-4" />
                <time dateTime={post.date}>{formattedDate}</time>
              </div>
            </div>
          </header>

          <div className="relative mb-8 aspect-1200/630 overflow-hidden rounded-lg bg-muted">
            <Image
              src={ogImage}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 720px"
            />
          </div>

          <Separator className="mb-8" />

          {/* Post content */}
          <div className="prose max-w-none">{children}</div>
        </article>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Contact Card */}
          <Card className="sticky top-20">
            <CardContent className="p-6">
              <h3 className="mb-3 text-lg font-semibold">Need Help?</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Get in touch with {business.name} for a free, no-obligation
                quote.
              </p>
              <div className="space-y-3">
                <Button asChild className="w-full">
                  <a href={hero.primaryCTA.href}>
                    <Phone className="size-4" />
                    {business.phone}
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href={hero.secondaryCTA.href}>
                    {hero.secondaryCTA.text}
                  </a>
                </Button>
              </div>
              <Separator className="my-4" />
              <p className="text-xs text-muted-foreground">
                {business.availability} &middot;{" "}
                {business.serviceArea.slice(0, 3).join(", ")}
              </p>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  )
}
