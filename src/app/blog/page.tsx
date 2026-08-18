import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  Clock,
  User,
  ArrowLeft,
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import CookieConsent from "@/components/cookie-consent";
import Breadcrumbs from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/site-data";
import { BLOG_POSTS } from "@/lib/blog-data";

export const metadata: Metadata = {
  title:
    "Curtain Cleaning Blog | JHB Curtain Cleaning — Tips & Guides",
  description:
    "Practical curtain care guides, fabric science, and Johannesburg-specific cleaning tips from 15+ years of on-site experience. No-shrinkage guarantee, SANS compliance, allergen removal.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Curtain Cleaning Blog | JHB Curtain Cleaning — Tips & Guides",
    description:
      "Practical curtain care guides and Johannesburg-specific cleaning tips from 15+ years of on-site experience.",
    type: "website",
    url: `${SITE_CONFIG.siteUrl}/blog`,
  },
};

/* ── Format date in ISO form for display ── */
function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-ZA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_CONFIG.siteUrl}/blog`,
      },
    ],
  };

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "JHB Curtain Cleaning Blog",
    description:
      "Curtain care guides, fabric science, and Johannesburg-specific cleaning tips.",
    url: `${SITE_CONFIG.siteUrl}/blog`,
    blogPost: BLOG_POSTS.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      dateModified: post.date,
      author: {
        "@type": "Person",
        name: post.author.name,
        jobTitle: post.author.title,
      },
      url: `${SITE_CONFIG.siteUrl}/blog/${post.slug}`,
      keywords: post.keywords.join(", "),
    })),
  };

  // Sort posts by date descending
  const posts = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />

      <Header />
      <Breadcrumbs items={[{ label: "Blog" }]} />

      <main className="flex-1">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden pt-16 pb-16 md:pt-24 md:pb-20"
          aria-label="Curtain Care Blog"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #064e3b 0%, #0d7a5f 60%, #064e3baa 100%)",
            }}
          />
          <div
            className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, #064e3b88 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full opacity-15 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, #a87d4366 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 hero-pattern opacity-30" aria-hidden="true" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <Badge
                variant="outline"
                className="mb-6 border-white/30 bg-white/10 text-white backdrop-blur-sm px-4 py-1.5 text-sm"
              >
                JHB Curtain Cleaning Blog
              </Badge>
              <h1 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Curtain Care Blog
              </h1>
              <p className="mt-4 text-lg font-medium text-white/90 sm:text-xl md:text-2xl">
                Practical guides, fabric science, and Johannesburg-specific tips from
                15+ years on the road.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                Written by Stephen Dunlop and the JHB Curtain Cleaning team. Every
                article draws on real on-site experience across more than 5,000 jobs in
                Johannesburg, Pretoria, and Midrand — covering fabric science, allergen
                control, fire compliance, and practical care guides you can apply
                between professional visits.
              </p>
            </div>
          </div>
        </section>

        {/* ── Blog Post Grid ───────────────────────────────────── */}
        <section className="py-14 md:py-20" aria-label="Blog posts">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Card
                  key={post.slug}
                  className="group flex h-full flex-col overflow-hidden border-brand-bronze/15 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Hero gradient header */}
                  <div
                    className="relative aspect-[16/9] w-full overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, #064e3b 0%, #0d7a5f 70%, #a87d43 100%)",
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(90deg, transparent, transparent 28px, rgba(255,255,255,0.18) 28px, rgba(255,255,255,0.18) 30px)",
                      }}
                      aria-hidden="true"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-5">
                      <Badge
                        variant="outline"
                        className="self-start border-white/30 bg-white/10 text-white backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                      >
                        {post.category}
                      </Badge>
                      <p className="mt-2 text-xs font-medium text-white/70">
                        {post.heroTag}
                      </p>
                    </div>
                  </div>

                  <CardContent className="flex h-full flex-col">
                    <h2 className="text-lg font-bold leading-tight text-foreground transition-colors group-hover:text-brand-emerald">
                      {post.title}
                    </h2>

                    {/* Meta row */}
                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <User className="h-3 w-3" aria-hidden="true" />
                        {post.author.name}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" aria-hidden="true" />
                        {post.readTime}
                      </span>
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                    </div>

                    {/* Excerpt */}
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>

                    {/* Read more link */}
                    <div className="mt-4">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-emerald transition-colors hover:text-brand-bronze"
                      >
                        Read more
                        <ArrowRight
                          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── Author CTA strip ────────────────────────────────── */}
        <section
          className="bg-brand-surface-ivory py-14 md:py-16"
          aria-label="About the author"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start gap-6 rounded-2xl border border-brand-bronze/15 bg-background p-6 shadow-sm sm:flex-row sm:items-center sm:p-8">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full gradient-emerald shadow-md">
                <span className="font-heading text-xl font-bold text-brand-bronze-highlight">
                  SD
                </span>
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-bold text-foreground">
                  Written by Stephen Dunlop
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Managing Director of JHB Curtain Cleaning. Interior decorator with
                  15+ years on-site experience across more than 5,000 jobs in
                  Johannesburg, Pretoria, and Midrand. Every article draws on real
                  on-site work — not theory.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Button
                    asChild
                    size="sm"
                    className="bg-brand-emerald text-white hover:bg-brand-emerald/90"
                  >
                    <Link href="/about">
                      Read full bio
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/guides">
                      <ArrowLeft className="mr-1.5 h-3.5 w-3.5" />
                      Browse guides
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden py-16 md:py-20"
          aria-label="Get in touch"
        >
          <div className="absolute inset-0 gradient-emerald" />
          <div
            className="absolute -top-20 -right-20 h-80 w-80 rounded-full opacity-20 blur-3xl"
            style={{
              background: "radial-gradient(circle, #a87d4355 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Have a curtain question we haven&apos;t answered?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/75 sm:text-lg">
              Book a free on-site assessment and Stephen Dunlop will personally inspect
              your curtains and answer any fabric, allergen, or compliance question you
              have.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button
                asChild
                size="lg"
                className="bg-brand-bronze text-white shadow-lg hover:bg-brand-bronze/90 transition-all duration-200 text-base px-8 py-5"
              >
                <Link href="/#contact">
                  Book Free Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/40 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:text-white transition-all duration-200 text-base px-8 py-5"
              >
                <a href={`tel:${SITE_CONFIG.phoneRaw}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call {SITE_CONFIG.phone}
                </a>
              </Button>
            </div>
            <div className="mt-6 text-center text-sm text-white/60">
              <a
                href={SITE_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-brand-bronze-highlight transition-colors hover:text-white"
              >
                <MessageCircle className="h-4 w-4" />
                Or WhatsApp us: {SITE_CONFIG.whatsapp}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
}
