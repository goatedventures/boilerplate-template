import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { siteConfig } from "@/config/site"

const BLOG_DIR = path.join(process.cwd(), "content", "blog")

export interface BlogPostMeta {
  slug: string
  title: string
  description: string
  date: string
  author: string
  image?: string
  imageAlt?: string
  tags?: string[]
}

export interface BlogPost extends BlogPostMeta {
  content: string
}

function ensureBlogDir() {
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true })
  }
}

export function getAllPosts(): BlogPostMeta[] {
  ensureBlogDir()

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))

  const posts = files
    .map((filename) => {
      const filePath = path.join(BLOG_DIR, filename)
      const fileContents = fs.readFileSync(filePath, "utf-8")
      const { data } = matter(fileContents)
      const slug = filename.replace(/\.(mdx|md)$/, "")

      return {
        slug,
        title: data.title ?? slug,
        description: data.description ?? "",
        date: data.date ?? new Date().toISOString(),
        author: data.author ?? "Team",
        image: data.image,
        imageAlt: data.imageAlt,
        tags: data.tags,
      } satisfies BlogPostMeta
    })
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )

  return posts
}

export function getPostBySlug(slug: string): BlogPost | null {
  ensureBlogDir()

  const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`)
  const mdPath = path.join(BLOG_DIR, `${slug}.md`)

  const filePath = fs.existsSync(mdxPath)
    ? mdxPath
    : fs.existsSync(mdPath)
      ? mdPath
      : null

  if (!filePath) return null

  const fileContents = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    date: data.date ?? new Date().toISOString(),
    author: data.author ?? "Team",
    image: data.image,
    imageAlt: data.imageAlt,
    tags: data.tags,
    content,
  }
}

function buildOgSearchParams(post: BlogPostMeta): string {
  return new URLSearchParams({
    title: post.title,
    description: post.description,
    author: post.author,
    date: new Date(post.date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
  }).toString()
}

/** Relative path for use in components with next/image */
export function getOgImagePath(post: BlogPostMeta): string {
  return `/api/og?${buildOgSearchParams(post)}`
}

/** Absolute URL for use in metadata and structured data */
export function getOgImageUrl(post: BlogPostMeta): string {
  return `${siteConfig.seo.siteUrl}/api/og?${buildOgSearchParams(post)}`
}

export function getAllSlugs(): string[] {
  ensureBlogDir()

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => file.replace(/\.(mdx|md)$/, ""))
}
