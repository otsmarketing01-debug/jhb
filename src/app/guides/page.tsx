import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  Home,
  Hotel,
  Flame,
  Shield,
  Calendar,
  Heart,
  BookOpen,
  Clock,
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

export const metadata: Metadata = {
  title:
    "Curtain Cleaning Guides | JHB Curtain Cleaning — How-To Resources",
  description:
    "Comprehensive curtain cleaning guides for Johannesburg homes and venues. Room-by-room care, hotel maintenance checklists, fire compliance, fabric protection, and allergen reduction.",
  alternates: { canonical: "/guides" },
  openGraph: {
    title: "Curtain Cleaning Guides | JHB Curtain Cleaning — How-To Resources",
    description:
      "Comprehensive curtain cleaning guides for Johannesburg homes and venues. Care checklists, compliance, fabric protection.",
    type: "website",
    url: `${SITE_CONFIG.siteUrl}/guides`,
  },
};

interface Guide {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  icon: typeof Home;
  readTime: string;
  gradient: string;
  topics: string[];
}

const GUIDES: Guide[] = [
  {
    id: "complete-curtain-care-johannesburg",
    title: "The Complete Curtain Care Guide for Johannesburg Homes",
    category: "Residential",
    excerpt:
      "A room-by-room curtain care framework tailored to Johannesburg's Highveld climate, dust patterns, and household lifestyles. Includes cleaning frequency, fabric selection, and seasonal maintenance.",
    icon: Home,
    readTime: "12 min read",
    gradient: "linear-gradient(135deg, #064e3b 0%, #0d7a5f 100%)",
    topics: [
      "Room-by-room frequency chart",
      "Highveld dust and pollen management",
      "Fabric selection by room",
      "Seasonal maintenance calendar",
    ],
  },
  {
    id: "hotel-curtain-maintenance-checklist",
    title: "Hotel Curtain Maintenance: A GM's Checklist",
    category: "Hospitality",
    excerpt:
      "A general manager's complete checklist for hotel curtain maintenance — covering guest turnover, fire compliance re-treatment cycles, vendor scheduling, and insurance documentation.",
    icon: Hotel,
    readTime: "10 min read",
    gradient: "linear-gradient(135deg, #6C3483 0%, #a87d43 100%)",
    topics: [
      "Per-room cleaning cadence",
      "Fire compliance re-treatment schedule",
      "Vendor SLA template",
      "Insurance documentation requirements",
    ],
  },
  {
    id: "fire-compliance-theatres-venues",
    title: "Fire Compliance for Theatres and Venues",
    category: "Compliance",
    excerpt:
      "SANS fire compliance is non-negotiable for theatres and public venues. This guide walks through the regulatory framework, treatment cycles, certificate retention, and inspection prep.",
    icon: Flame,
    readTime: "14 min read",
    gradient: "linear-gradient(135deg, #ea580c 0%, #6C3483 100%)",
    topics: [
      "SANS 10400 Part T overview",
      "Stage curtain specific requirements",
      "Certificate retention (7-year rule)",
      "Pre-inspection preparation checklist",
    ],
  },
  {
    id: "choosing-right-fabric-protection",
    title: "Choosing the Right Fabric Protection",
    category: "Services",
    excerpt:
      "Master Guarding, Scotchgard, and DIY fabric protection products compared. Understand fluoropolymer chemistry, durability, and where professional application is worth the investment.",
    icon: Shield,
    readTime: "8 min read",
    gradient: "linear-gradient(135deg, #0d9488 0%, #064e3b 100%)",
    topics: [
      "Fluoropolymer chemistry basics",
      "Hydrophobic vs oleophobic barriers",
      "12-month vs DIY reapplication",
      "When to skip fabric protection",
    ],
  },
  {
    id: "seasonal-curtain-cleaning-calendar",
    title: "Seasonal Curtain Cleaning Calendar",
    category: "How-To",
    excerpt:
      "A 12-month curtain care calendar aligned to Johannesburg's seasons — jacaranda pollen in spring, summer thunderstorms, dry winter dust, and autumn allergen spikes.",
    icon: Calendar,
    readTime: "9 min read",
    gradient: "linear-gradient(135deg, #a87d43 0%, #c69c6d 100%)",
    topics: [
      "Spring: jacaranda pollen removal",
      "Summer: thunderstorm humidity management",
      "Autumn: dust mite peak preparation",
      "Winter: dry Highveld dust extraction",
    ],
  },
  {
    id: "allergen-reduction-professional-cleaning",
    title: "Allergen Reduction Through Professional Cleaning",
    category: "Health",
    excerpt:
      "Dust mites, pet dander, and pollen reservoirs in curtains are a measurable driver of indoor allergy symptoms. This guide covers the science and the professional extraction methods.",
    icon: Heart,
    readTime: "11 min read",
    gradient: "linear-gradient(135deg, #16a34a 0%, #064e3b 100%)",
    topics: [
      "Der p 1 allergen explained",
      "Why vacuuming alone is insufficient",
      "Solvent extraction vs wet cleaning",
      "Combined curtain + mattress protocol",
    ],
  },
];

export default function GuidesPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Guides",
        item: `${SITE_CONFIG.siteUrl}/guides`,
      },
    ],
  };

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Curtain Cleaning Guides",
    description:
      "Comprehensive how-to guides for curtain care, fire compliance, and allergen reduction in Johannesburg.",
    url: `${SITE_CONFIG.siteUrl}/guides`,
    hasPart: GUIDES.map((g) => ({
      "@type": "Article",
      headline: g.title,
      description: g.excerpt,
      articleSection: g.category,
      author: {
        "@type": "Person",
        name: "Stephen Dunlop",
      },
      publisher: {
        "@type": "Organization",
        name: SITE_CONFIG.name,
      },
    })),
  };

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />

      <Header />
      <Breadcrumbs items={[{ label: "Guides" }]} />

      <main className="flex-1">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden pt-16 pb-16 md:pt-24 md:pb-20"
          aria-label="Curtain Cleaning Guides"
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
                How-To Resources
              </Badge>
              <h1 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Curtain Cleaning Guides
              </h1>
              <p className="mt-4 text-lg font-medium text-white/90 sm:text-xl md:text-2xl">
                Comprehensive how-to resources for homes, venues, and facilities.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                Each guide is written by Stephen Dunlop and draws on 15+ years of
                on-site experience across Johannesburg, Pretoria, and Midrand. Whether
                you manage a hotel, run a theatre, or simply want to extend the life of
                your home curtains, you&apos;ll find an actionable framework below.
              </p>
            </div>
          </div>
        </section>

        {/* ── Guides Grid ──────────────────────────────────────── */}
        <section className="py-14 md:py-20" aria-label="All guides">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {GUIDES.map((guide) => {
                const Icon = guide.icon;
                return (
                  <Card
                    key={guide.id}
                    className="group flex h-full flex-col overflow-hidden border-brand-bronze/15 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    {/* Hero header with icon */}
                    <div
                      className="relative aspect-[16/10] w-full overflow-hidden"
                      style={{ background: guide.gradient }}
                    >
                      <div
                        className="absolute inset-0 opacity-30"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(90deg, transparent, transparent 28px, rgba(255,255,255,0.15) 28px, rgba(255,255,255,0.15) 30px)",
                        }}
                        aria-hidden="true"
                      />
                      <div className="absolute inset-0 flex flex-col items-start justify-between p-5">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/15 backdrop-blur-sm">
                          <Icon
                            className="h-6 w-6 text-white"
                            strokeWidth={1.75}
                            aria-hidden="true"
                          />
                        </div>
                        <div>
                          <Badge
                            variant="outline"
                            className="border-white/30 bg-white/10 text-white backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                          >
                            {guide.category}
                          </Badge>
                          <p className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-white/70">
                            <Clock className="h-3 w-3" aria-hidden="true" />
                            {guide.readTime}
                          </p>
                        </div>
                      </div>
                    </div>

                    <CardContent className="flex h-full flex-col">
                      <h2 className="text-lg font-bold leading-tight text-foreground transition-colors group-hover:text-brand-emerald">
                        {guide.title}
                      </h2>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {guide.excerpt}
                      </p>

                      {/* Topic chips */}
                      <ul className="mt-4 space-y-1.5">
                        {guide.topics.map((topic) => (
                          <li
                            key={topic}
                            className="flex items-start gap-2 text-xs text-muted-foreground"
                          >
                            <span
                              className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-brand-bronze"
                              aria-hidden="true"
                            />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5">
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-emerald transition-colors group-hover:text-brand-bronze">
                          <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                          Coming soon
                          <ArrowRight
                            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
              New guides are added monthly. Have a topic you&apos;d like us to cover?
              Email <a href={`mailto:${SITE_CONFIG.email}`} className="font-medium text-brand-emerald underline underline-offset-2">{SITE_CONFIG.email}</a> and
              we&apos;ll prioritise it in our editorial calendar.
            </p>
          </div>
        </section>

        {/* ── Browse blog too ─────────────────────────────────── */}
        <section
          className="bg-brand-surface-ivory py-14 md:py-16"
          aria-label="Also browse the blog"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-brand-bronze/15 bg-background p-6 text-center shadow-sm sm:p-8">
              <BookOpen className="h-8 w-8 text-brand-bronze" aria-hidden="true" />
              <h2 className="text-lg font-bold text-foreground sm:text-xl">
                Looking for shorter reads?
              </h2>
              <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
                Our blog covers the same topics in shorter, more focused articles.
                Each post is 5–8 minutes and zero fluff.
              </p>
              <Button
                asChild
                size="sm"
                className="bg-brand-emerald text-white hover:bg-brand-emerald/90"
              >
                <Link href="/blog">
                  Browse the blog
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </Button>
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
              Prefer an expert to walk you through it?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/75 sm:text-lg">
              Book a free on-site assessment. Stephen Dunlop will personally scope your
              curtains, explain the right approach in plain language, and answer any
              compliance or care question you have.
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
