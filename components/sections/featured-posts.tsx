import Balancer from "react-wrap-balancer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { BlogCard } from "@/components/blog/blog-card"
import { getAllPosts } from "@/lib/blog"

export function FeaturedPosts() {
  const posts = getAllPosts().slice(0, 3)

  if (posts.length === 0) return null

  return (
    <section className="border-t bg-muted/30 py-16 sm:py-20" id="blog">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <Balancer>Latest from the Blog</Balancer>
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              <Balancer>Helpful guides, tips, and news from our team.</Balancer>
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80 sm:inline-flex"
          >
            View all posts
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            View all posts
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
