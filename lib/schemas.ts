import { siteConfig } from "@/config/site"

export function generateLocalBusinessSchema() {
  const { business, hero, seo } = siteConfig

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    description: seo.defaultDescription,
    url: seo.siteUrl,
    telephone: business.phone,
    email: business.email,
    image: `${seo.siteUrl}${business.logo}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postcode,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 0,
      longitude: 0,
    },
    areaServed: business.serviceArea.map((area) => ({
      "@type": "City",
      name: area,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: hero.rating.score,
      reviewCount: hero.rating.count,
      bestRating: 5,
    },
    foundingDate: String(business.yearEstablished),
    openingHours: business.availability,
    priceRange: "££",
  }
}

export function generateServiceSchema() {
  const { business, services, seo } = siteConfig

  return services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: business.name,
      telephone: business.phone,
      url: seo.siteUrl,
    },
    areaServed: business.serviceArea.map((area) => ({
      "@type": "City",
      name: area,
    })),
  }))
}

export function generateFAQSchema() {
  const { faqs } = siteConfig

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function generateArticleSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  image,
}: {
  title: string
  description: string
  slug: string
  datePublished: string
  dateModified?: string
  image?: string
}) {
  const { business, seo } = siteConfig

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${seo.siteUrl}/blog/${slug}`,
    image: image?.startsWith("http") ? image : image ? `${seo.siteUrl}${image}` : undefined,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Organization",
      name: business.name,
      url: seo.siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: business.name,
      url: seo.siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${seo.siteUrl}${business.logo}`,
      },
    },
  }
}

export function generateBreadcrumbSchema(
  items: { name: string; href: string }[]
) {
  const { seo } = siteConfig

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${seo.siteUrl}${item.href}`,
    })),
  }
}
