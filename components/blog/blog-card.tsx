import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getOgImagePath } from "@/lib/blog"
import type { BlogPostMeta } from "@/lib/blog"

export function BlogCard({ post }: { post: BlogPostMeta }) {
  const ogImage = getOgImagePath(post)
  const formattedDate = new Date(post.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="group h-full cursor-pointer gap-0 overflow-hidden py-0 transition-all hover:border-primary/30 hover:shadow-md">
        <div className="relative aspect-1200/630 overflow-hidden bg-muted">
          <Image
            src={ogImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <CardContent className="p-5 pt-4">
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mb-2 flex flex-wrap gap-1.5">
              {post.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          <h3 className="mb-2 text-lg font-semibold leading-snug group-hover:text-primary transition-colors">
            {post.title}
          </h3>

          <p className="mb-3 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {post.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar className="size-3.5" />
              <time dateTime={post.date}>{formattedDate}</time>
            </div>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
              Read more
              <ArrowRight className="size-3" />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
