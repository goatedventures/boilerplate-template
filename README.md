# Trade Website Boilerplate

A conversion-optimised Next.js template for trade/contractor businesses (plumbers, electricians, locksmiths, pest control, builders, etc.). Designed to be cloned and customised by AI agents.

## Quick Start

```bash
# Clone the repo
git clone <repo-url> my-trade-site
cd my-trade-site

# Install dependencies
bun install

# Start dev server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## How to Customise This Template

**All business-specific content lives in a single file: `config/site.ts`.**

Edit this file to change the business name, phone number, services, testimonials, FAQs, service areas, and every other piece of content on the site. The types are defined in `config/site.types.ts` — TypeScript will catch any misconfiguration.

### Key fields in `config/site.ts`

| Section | What to edit |
|---|---|
| `business` | Name, trade type, phone, email, address, service areas, availability, year established |
| `hero` | Headline, subheadline, CTAs, star rating, trust badges, hero image path |
| `services` | Array of 3-8 service tiles with title, description, icon (from lucide-react), and link |
| `testimonials` | Array of customer reviews with name, town, service type, quote, and star rating |
| `trustBadges` | Certifications, insurance, guarantees (e.g. "Gas Safe Registered", "DBS Checked") |
| `howItWorks` | 3-step process (customise titles and descriptions) |
| `portfolio` | Recent work items with title, description, image path, and category |
| `faqs` | Array of question/answer pairs targeting common objections |
| `navigation` | Nav items (anchor links to page sections) |
| `seo` | Site URL, title template, default description, OpenGraph settings |

### Changing the colour palette

Edit the CSS custom properties in `app/globals.css` under the `:root` block. The current palette uses a professional blue/navy scheme. All colours use oklch values.

### Changing service icons

Icons come from [lucide-react](https://lucide.dev/icons). Import the icon at the top of `config/site.ts` and assign it to the `icon` field of any service.

### Adding images

Place images in `public/images/` and reference them as `/images/filename.jpg`. Replace the placeholder hero image, portfolio photos, and logo with real assets.

## Project Structure

```
config/
  site.ts              # ALL business content (single source of truth)
  site.types.ts        # TypeScript interfaces for the config

app/
  layout.tsx           # Root layout: fonts, metadata, JSON-LD, Toaster
  page.tsx             # Landing page: composes all sections
  globals.css          # Tailwind CSS v4 theme + prose styles
  robots.ts            # Dynamic robots.txt
  sitemap.ts           # Dynamic sitemap (landing page + blog posts)
  opengraph-image.tsx  # Auto-generated OG image from config
  twitter-image.tsx    # Auto-generated Twitter card image
  blog/
    page.tsx           # Blog listing page
    [slug]/page.tsx    # Individual blog post (MDX rendered)

components/
  layout/
    header.tsx         # Sticky header: logo, service area, nav, tap-to-call
    footer.tsx         # Contact footer: phone, email, hours, areas
    mobile-nav.tsx     # Sheet-based mobile navigation
    mobile-sticky-bar.tsx  # Sticky bottom bar (Call | Quote | Directions)
  sections/
    hero.tsx           # Hero: headline, CTAs, trust badges, rating
    services.tsx       # "Pick your problem" service tile grid
    social-proof.tsx   # Rating strip with review count
    testimonials.tsx   # Customer testimonial cards
    trust-block.tsx    # Certifications, insurance, guarantees
    how-it-works.tsx   # 3-step process row
    portfolio.tsx      # Recent work gallery
    cta-form.tsx       # Mid-page quote form (Server Action)
    faq.tsx            # Accordion FAQ section
  blog/
    blog-card.tsx      # Blog post preview card
    blog-post-layout.tsx   # Blog post layout with contact sidebar
  ui/                  # shadcn/ui components (do not edit directly)

lib/
  actions.ts           # Server Actions for quote + contact forms
  blog.ts              # Read MDX files from content/blog/
  schemas.ts           # JSON-LD generators (LocalBusiness, FAQ, Article)
  utils.ts             # Tailwind class merge utility

content/
  blog/                # Blog posts as .mdx files

public/
  images/              # Static assets (logo, hero, portfolio, blog images)
```

## Blog

Blog posts are MDX files in `content/blog/`. Each file needs frontmatter:

```yaml
---
title: "Your Post Title"
description: "A short summary for SEO and social sharing."
date: "2025-12-15"
author: "Business Name"
image: "/images/blog/your-image.jpg"
imageAlt: "Descriptive alt text for the featured image"
tags:
  - Tag One
  - Tag Two
---
```

Posts are statically generated at build time via `generateStaticParams`. Add a new `.mdx` file to `content/blog/` and it will appear automatically.

## Form Submissions

The quote form and contact sidebar use Next.js Server Actions defined in `lib/actions.ts`. By default they validate input with Zod and log to the console.

**To wire up real delivery**, replace the `console.log` calls in `handleQuoteRequest` and `handleContactForm` with your preferred backend:
- Email via Resend, SendGrid, or Nodemailer
- CRM via HubSpot, Pipedrive, or webhook
- Slack/Discord notification
- Database insert

## SEO

The template includes:
- **JSON-LD schemas**: LocalBusiness (global), FAQPage + Service (landing page), Article + Breadcrumb (blog posts)
- **Dynamic metadata**: `generateMetadata` on blog posts with OpenGraph images and alt text
- **Sitemap**: Auto-generated at `/sitemap.xml` including all blog posts
- **Robots.txt**: Auto-generated at `/robots.txt`
- **OpenGraph images**: Auto-generated from config data at build time
- **Heading hierarchy**: One H1 per page, logical H2/H3/H4 cascade
- **Canonical URLs**: Set via `metadataBase` in the root layout

## Tech Stack

- **Next.js 16** (App Router, Server Components, Server Actions)
- **React 19**
- **Tailwind CSS v4** (CSS-based config, oklch colours)
- **shadcn/ui** (57 pre-installed components, New York style)
- **TypeScript** (strict mode)
- **Zod** (form validation)
- **MDX** (blog posts via next-mdx-remote + gray-matter)
- **Geist** font family (via next/font)

## Performance

- Server Components by default (minimal client JS)
- `optimizePackageImports` for lucide-react (avoids barrel import overhead)
- `content-visibility: auto` on heavy sections for faster initial render
- Smooth scroll with `prefers-reduced-motion` respected
- Light mode only (no dark mode toggle — optimised for trade site conversions)
- All pages statically prerendered at build time

## Build & Deploy

```bash
# Build for production
bun run build

# Start production server
bun start

# Lint
bun run lint
```

Deploy to Vercel, Cloudflare Pages, or any Node.js hosting that supports Next.js.

## Landing Page Sections (top to bottom)

1. **Sticky Header** — Logo, service area, desktop nav, tap-to-call CTA
2. **Hero** — Headline, availability badge, dual CTAs, star rating, trust badges
3. **Social Proof Strip** — Rating count with platform name
4. **Services** — "Pick your problem" tile grid linking to quote form
5. **How It Works** — 3-step process with connector lines
6. **Testimonials** — Customer review cards with star ratings
7. **Trust Block** — Certifications, insurance, and guarantees
8. **Portfolio** — Recent work gallery with category badges
9. **Quote Form** — Mid-page conversion form (name, phone, postcode, job type)
10. **FAQ** — Accordion targeting common objections
11. **Footer** — Contact details, hours, service areas, quick links
12. **Mobile Sticky Bar** — Fixed bottom bar with Call, Quote, and Directions (mobile only)
