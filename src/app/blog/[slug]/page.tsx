import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowLeft,
  Phone,
  MessageCircle,
  Clock,
  User,
  Calendar,
  ChevronRight,
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
import {
  BLOG_POSTS,
  getBlogPostBySlug,
  getRelatedPosts,
  type BlogContentBlock,
} from "@/lib/blog-data";

/* ── SSG: pre-render every blog post at build time ── */
export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

/* ── Per-post metadata for SEO / OG / Twitter ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    keywords: post.keywords,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `${SITE_CONFIG.siteUrl}/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

/* ── Format ISO date for human display ── */
function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-ZA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/* ── Render a single content block ── */
function renderContentBlock(block: BlogContentBlock, idx: number) {
  switch (block.type) {
    case "heading":
      if (block.level === 3) {
        return (
          <h3
            key={idx}
            className="mt-8 text-xl font-bold text-foreground sm:text-2xl"
          >
            {block.text}
          </h3>
        );
      }
      return (
        <h2
          key={idx}
          className="mt-10 font-heading text-2xl font-bold tracking-tight text-brand-emerald sm:text-3xl"
        >
          {block.text}
        </h2>
      );
    case "paragraph":
      return (
        <p
          key={idx}
          className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {block.text}
        </p>
      );
    case "list":
      return (
        <ul
          key={idx}
          className="mt-4 space-y-2 text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {block.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span
                className="mt-2.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-bronze"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, 3);

  /* ── Article JSON-LD for rich results ── */
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.title,
      worksFor: {
        "@type": "Organization",
        name: SITE_CONFIG.name,
      },
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.siteUrl}/brand/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.siteUrl}/blog/${post.slug}`,
    },
    keywords: post.keywords.join(", "),
    articleSection: post.category,
  };

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
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SITE_CONFIG.siteUrl}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Header />
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <main className="flex-1">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden pt-12 pb-14 md:pt-16 md:pb-16"
          aria-label={post.title}
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

          <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Badge
              variant="outline"
              className="mb-4 border-white/30 bg-white/10 text-white backdrop-blur-sm px-3 py-1 text-xs font-semibold uppercase tracking-wider"
            >
              {post.category}
            </Badge>
            <h1 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-base font-medium text-white/85 sm:text-lg">
              {post.excerpt}
            </p>

            {/* Meta row */}
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/70">
              <span className="inline-flex items-center gap-1.5">
                <User className="h-4 w-4 text-brand-bronze-highlight" aria-hidden="true" />
                <span className="font-medium text-white/90">{post.author.name}</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-brand-bronze-highlight" aria-hidden="true" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-brand-bronze-highlight" aria-hidden="true" />
                {post.readTime}
              </span>
            </div>
          </div>
        </section>

        {/* ── Article Body ─────────────────────────────────────── */}
        <article className="py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            {/* Decorative hero tag */}
            <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-emerald/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-emerald">
              {post.heroTag}
            </p>

            {/* Render content blocks */}
            <div className="space-y-2">
              {post.content.map((block, idx) => renderContentBlock(block, idx))}
            </div>

            {/* Author block */}
            <div className="mt-12 rounded-2xl border border-brand-bronze/20 bg-brand-surface-ivory p-6">
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full gradient-emerald shadow-md">
                  <span className="font-heading text-lg font-bold text-brand-bronze-highlight">
                    SD
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">
                    {post.author.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{post.author.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Founder of JHB Curtain Cleaning. Stephen personally scopes every
                    commercial booking and trains every technician. Contact him directly
                    for tailored advice on your fabric, sector, or compliance question.
                  </p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button
                  asChild
                  size="sm"
                  className="bg-brand-emerald text-white hover:bg-brand-emerald/90"
                >
                  <Link href="/about">Read full bio</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a href={`tel:${SITE_CONFIG.phoneRaw}`}>
                    <Phone className="mr-1.5 h-3.5 w-3.5" />
                    Call {SITE_CONFIG.phone}
                  </a>
                </Button>
              </div>
            </div>

            {/* Back to blog link */}
            <div className="mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-emerald transition-colors hover:text-brand-bronze"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to all articles
              </Link>
            </div>
          </div>
        </article>

        {/* ── Related Posts ────────────────────────────────────── */}
        {related.length > 0 && (
          <section
            className="border-t border-border bg-muted/30 py-14 md:py-16"
            aria-labelledby="related-heading"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-8 flex items-end justify-between">
                <div>
                  <h2
                    id="related-heading"
                    className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
                  >
                    Related Articles
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                    More curtain care guides from the JHB Curtain Cleaning team.
                  </p>
                </div>
                <Link
                  href="/blog"
                  className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-brand-emerald transition-colors hover:text-brand-bronze sm:inline-flex"
                >
                  View all
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {related.map((rp) => (
                  <Card
                    key={rp.slug}
                    className="group flex h-full flex-col overflow-hidden border-brand-bronze/15 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
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
                      <div className="absolute inset-0 flex flex-col justify-end p-4">
                        <Badge
                          variant="outline"
                          className="self-start border-white/30 bg-white/10 text-white backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                        >
                          {rp.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="flex h-full flex-col">
                      <h3 className="text-base font-bold leading-tight text-foreground transition-colors group-hover:text-brand-emerald">
                        {rp.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {rp.excerpt}
                      </p>
                      <Link
                        href={`/blog/${rp.slug}`}
                        className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-emerald transition-colors hover:text-brand-bronze"
                      >
                        Read more
                        <ArrowRight
                          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

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
              Need this applied to your curtains?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/75 sm:text-lg">
              Book a free on-site assessment anywhere in Johannesburg, Pretoria, or
              Midrand. Stephen Dunlop will personally scope your curtains and recommend
              the right approach.
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
