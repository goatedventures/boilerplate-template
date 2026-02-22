import type { Metadata } from "next"
import Balancer from "react-wrap-balancer"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BlogCard } from "@/components/blog/blog-card"
import { getAllPosts } from "@/lib/blog"
import { siteConfig } from "@/config/site"
import { generateBreadcrumbSchema } from "@/lib/schemas"

export const metadata: Metadata = {
  title: "Blog",
  description: `Tips, guides, and news from ${siteConfig.business.name}. Expert ${siteConfig.business.tradeType.toLowerCase()} advice for homeowners in ${siteConfig.business.address.city}.`,
}

export default function BlogPage() {
  const posts = getAllPosts()
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main className="min-h-screen">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <Balancer>Blog</Balancer>
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              <Balancer>Helpful guides, tips, and news from our team.</Balancer>
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="rounded-lg border border-dashed p-12 text-center">
              <p className="text-muted-foreground">
                No blog posts yet. Add <code>.mdx</code> files to{" "}
                <code>content/blog/</code> to get started.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}
