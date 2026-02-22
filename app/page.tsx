import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { MobileStickyBar } from "@/components/layout/mobile-sticky-bar"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { SocialProof } from "@/components/sections/social-proof"
import { Testimonials } from "@/components/sections/testimonials"
import { TrustBlock } from "@/components/sections/trust-block"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Portfolio } from "@/components/sections/portfolio"
import { CTAForm } from "@/components/sections/cta-form"
import { FAQ } from "@/components/sections/faq"
import { FeaturedPosts } from "@/components/sections/featured-posts"
import {
  generateFAQSchema,
  generateServiceSchema,
} from "@/lib/schemas"

export default function HomePage() {
  const faqSchema = generateFAQSchema()
  const serviceSchemas = generateServiceSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />

      <Header />

      <main>
        <Hero />
        <SocialProof />
        <Services />
        <HowItWorks />
        <Testimonials />
        <TrustBlock />
        <Portfolio />
        <CTAForm />
        <FAQ />
        <FeaturedPosts />
      </main>

      <Footer />
      <MobileStickyBar />
    </>
  )
}
