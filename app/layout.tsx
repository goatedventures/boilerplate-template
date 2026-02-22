import type { Metadata } from "next";
import { Provider as BalancerProvider } from "react-wrap-balancer";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/config/site";
import { generateLocalBusinessSchema } from "@/lib/schemas";
import "./globals.css";

const { seo } = siteConfig;

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: {
    default: seo.defaultTitle,
    template: seo.titleTemplate,
  },
  description: seo.defaultDescription,
  openGraph: {
    type: seo.openGraph.type as "website",
    locale: seo.openGraph.locale,
    siteName: seo.openGraph.siteName,
    title: seo.defaultTitle,
    description: seo.defaultDescription,
    url: seo.siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.defaultTitle,
    description: seo.defaultDescription,
  },
  alternates: {
    canonical: seo.siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "format-detection": "telephone=yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`antialiased`}>
        <BalancerProvider>
          {children}
          <Toaster position="top-right" />
        </BalancerProvider>
      </body>
    </html>
  );
}
