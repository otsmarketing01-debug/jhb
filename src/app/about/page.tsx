import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  ShieldCheck,
  Truck,
  Lock,
  Flame,
  ArrowRight,
  Award,
  Users,
  Star,
  Clock,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import CookieConsent from "@/components/cookie-consent";
import Breadcrumbs from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FOUNDER, SITE_CONFIG } from "@/lib/site-data";

export const metadata: Metadata = {
  title:
    "About JHB Curtain Cleaning | Johannesburg's On-Site Specialists",
  description:
    "Founded in 2009 by Stephen Dunlop. 15+ years on-site curtain cleaning experience, 5,000+ clients, 4.9 Google rating. No-shrinkage guarantee, POPIA compliant, SANS certified.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About JHB Curtain Cleaning | Johannesburg's On-Site Specialists",
    description:
      "Founded 2009. 15+ years experience, 5,000+ clients, 4.9 Google rating. No-shrinkage guarantee.",
    type: "website",
    url: `${SITE_CONFIG.siteUrl}/about`,
  },
};

const STATS = [
  {
    icon: Clock,
    value: SITE_CONFIG.yearsExperience,
    label: "Years Experience",
  },
  {
    icon: Users,
    value: SITE_CONFIG.clientsServed,
    label: "Clients Served",
  },
  {
    icon: Star,
    value: SITE_CONFIG.googleRating.toString(),
    label: "Google Rating",
  },
  {
    icon: Clock,
    value: "24h",
    label: "Response Time",
  },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "No-Shrinkage Guarantee",
    description:
      "Our solvent-based dry-cleaning process uses zero water, which means zero fibre contraction. In 15+ years and 5,000+ jobs, the guarantee has never been breached.",
  },
  {
    icon: Truck,
    title: "On-Site Service",
    description:
      "We come to you across Johannesburg, Pretoria, and Midrand. Curtains stay hanging, hardware is inspected at the same time, and the work is finished the same day.",
  },
  {
    icon: Lock,
    title: "POPIA Compliant",
    description:
      "Full compliance with the Protection of Personal Information Act, 2013. Your data is stored locally, never shared with third parties, and retained only as long as needed.",
  },
  {
    icon: Flame,
    title: "SANS Compliance",
    description:
      "Our fire proofing treatment meets South African National Standards and carries compliance certificates that satisfy insurers, fire inspectors, and audit requirements.",
  },
];

const CREDENTIALS = [
  {
    title: "Interior Decorator Background",
    description:
      "Stephen's training as an interior decorator informs every fabric identification decision we make. Delicate sheers, silk blends, and heritage drapes are handled with specialist knowledge.",
  },
  {
    title: "Master Guarding Certified",
    description:
      "Our team is certified in the application of Master Guarding — a 12-month fluoropolymer stain protection that meets commercial-grade performance standards.",
  },
  {
    title: "SANS Fire Compliance",
    description:
      "We issue SANS-compliant fire retardant certificates for hotels, theatres, healthcare, schools, and corporate venues. Documentation is retained for 7 years.",
  },
  {
    title: "Local Johannesburg Operation",
    description:
      "Based in Florida, Roodepoort, we service every Johannesburg suburb plus Pretoria and Midrand. Same-day response is standard for most of the metro.",
  },
];

export default function AboutPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_CONFIG.siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: `${SITE_CONFIG.siteUrl}/about`,
      },
    ],
  };

  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About JHB Curtain Cleaning",
    description:
      "Johannesburg's on-site curtain cleaning specialists since 2009. 15+ years experience, 5,000+ clients, 4.9 Google rating.",
    url: `${SITE_CONFIG.siteUrl}/about`,
    mainEntity: {
      "@type": "LocalBusiness",
      name: SITE_CONFIG.name,
      founder: {
        "@type": "Person",
        name: FOUNDER.name,
        jobTitle: FOUNDER.title,
      },
      foundingDate: "2009",
      telephone: SITE_CONFIG.phone,
      email: SITE_CONFIG.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "10 2nd Ave",
        addressLocality: "Florida",
        addressRegion: "Roodepoort",
        postalCode: "1710",
        addressCountry: "ZA",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: SITE_CONFIG.googleRating,
        reviewCount: SITE_CONFIG.reviewCount,
      },
    },
  };

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      <Header />
      <Breadcrumbs items={[{ label: "About" }]} />

      <main className="flex-1">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28"
          aria-label="About JHB Curtain Cleaning"
        >
          {/* Background gradient */}
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
                About JHB Curtain Cleaning
              </Badge>
              <h1 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                About JHB Curtain Cleaning
              </h1>
              <p className="mt-4 text-lg font-medium text-white/90 sm:text-xl md:text-2xl">
                Johannesburg&apos;s on-site curtain cleaning specialists since 2009.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                We clean curtains exactly where they hang — no removal, no shrinkage,
                no disruption. Founded by interior decorator Stephen Dunlop after 15+
                years of watching beautiful curtains destroyed by conventional cleaning.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-bronze text-white shadow-lg hover:bg-brand-bronze/90 transition-all duration-200 text-base px-6 py-5"
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
                  className="border-white/40 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:text-white transition-all duration-200 text-base px-6 py-5"
                >
                  <a href={`tel:${SITE_CONFIG.phoneRaw}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    {SITE_CONFIG.phone}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats Grid ──────────────────────────────────────── */}
        <section className="py-14 md:py-20" aria-label="Company stats">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
              {STATS.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center rounded-xl border border-brand-bronze/20 bg-background p-5 text-center shadow-sm transition-shadow hover:shadow-md sm:p-6"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-emerald/10">
                      <Icon
                        className="h-5 w-5 text-brand-emerald"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    </div>
                    <span className="mt-3 text-2xl font-extrabold text-brand-emerald sm:text-3xl">
                      {stat.value}
                    </span>
                    <span className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Founder Story ────────────────────────────────────── */}
        <section
          className="bg-brand-surface-ivory py-16 md:py-24"
          aria-labelledby="founder-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Founder visual */}
              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <div className="gradient-emerald flex flex-col items-center justify-center px-6 py-16 sm:py-20">
                    <div
                      className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-white/5"
                      aria-hidden="true"
                    />
                    <div
                      className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-brand-bronze/10"
                      aria-hidden="true"
                    />
                    <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-4 border-brand-bronze-highlight bg-white/10 shadow-lg sm:h-32 sm:w-32">
                      <span className="font-heading text-5xl font-bold text-brand-bronze-highlight sm:text-6xl">
                        SD
                      </span>
                    </div>
                    <h2
                      id="founder-heading"
                      className="mt-5 text-2xl font-bold text-white sm:text-3xl"
                    >
                      {FOUNDER.name}
                    </h2>
                    <p className="mt-1 text-base font-medium text-brand-bronze-highlight">
                      {FOUNDER.title}
                    </p>
                    <p className="mt-1 text-sm font-medium text-white/70">
                      {FOUNDER.credentials}
                    </p>
                  </div>
                </div>

                {/* Founder stats */}
                <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
                  {FOUNDER.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col items-center rounded-xl border border-brand-bronze/15 bg-white px-4 py-4 text-center shadow-sm transition-shadow hover:shadow-md"
                    >
                      <span className="text-2xl font-extrabold text-brand-emerald sm:text-3xl">
                        {stat.value}
                      </span>
                      <span className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Founder content */}
              <div className="lg:col-span-7">
                <Badge
                  variant="outline"
                  className="mb-4 border-brand-bronze/30 text-brand-bronze px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                >
                  Founder Story
                </Badge>
                <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Meet Stephen Dunlop
                </h2>
                <p className="mt-2 text-lg font-semibold text-brand-bronze">
                  Managing Director &bull; Interior Decorator &bull; 15+ Years On-Site
                </p>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {FOUNDER.bio}
                </p>
                <blockquote className="relative mt-8 rounded-xl border-l-4 border-brand-bronze bg-white px-6 py-5 shadow-sm">
                  <div
                    className="absolute -top-3 left-4 text-5xl leading-none text-brand-bronze/20 font-heading"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </div>
                  <p className="relative text-base italic leading-relaxed text-foreground sm:text-lg">
                    I built this company because I was tired of seeing beautiful curtains
                    destroyed by conventional cleaning. There had to be a better way &mdash;
                    and there is.
                  </p>
                  <footer className="mt-3 text-sm font-semibold text-brand-bronze">
                    &mdash; {FOUNDER.name}, {FOUNDER.title}
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* ── Company Story ────────────────────────────────────── */}
        <section
          className="py-16 md:py-24"
          aria-labelledby="company-story-heading"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Badge
              variant="outline"
              className="mb-4 border-brand-bronze/30 text-brand-bronze px-3 py-1 text-xs font-semibold uppercase tracking-wider"
            >
              Our Story
            </Badge>
            <h2
              id="company-story-heading"
              className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              From one van to Johannesburg&apos;s trusted curtain specialists
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                JHB Curtain Cleaning was founded in 2009 by Stephen Dunlop, an interior
                decorator who had spent years watching clients invest in beautiful
                drapery only to see it shrink, fade, or tear after a single conventional
                wash. The standard industry answer at the time was to remove curtains,
                transport them to a facility, machine-wash them, and hope for the best.
                Too often, the best did not happen.
              </p>
              <p>
                Stephen saw a better way: bring professional dry-cleaning equipment
                to the client, clean each curtain exactly where it hangs, and never
                introduce water into the equation. The first van was bought second-hand
                in 2009. The first 100 jobs were done personally by Stephen, who used
                his interior-decorator training to identify fabrics by touch and match
                the correct solvent to each fibre.
              </p>
              <p>
                Fifteen years later, JHB Curtain Cleaning has served more than 5,000
                clients across Johannesburg, Pretoria, and Midrand. The company has
                grown to six services (curtain cleaning, mattress sanitisation,
                upholstery and carpet cleaning, Master Guarding protection, fire
                proofing, and Persian rug care) and six specialist sectors (hotels,
                corporate, healthcare, education, theatres, and residential). Through
                it all, the founding principle has not changed: clean where it hangs,
                guarantee no shrinkage, and treat every fabric as if it were our own.
              </p>
              <p>
                Today we maintain a 4.9-star Google rating across 500+ verified reviews.
                Stephen still personally scopes every commercial booking, and the team
                continues to train on the latest fibre identification, fire compliance,
                and allergen extraction techniques.
              </p>
            </div>
          </div>
        </section>

        {/* ── Values ───────────────────────────────────────────── */}
        <section
          className="bg-brand-surface-ivory py-16 md:py-24"
          aria-labelledby="values-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2
                id="values-heading"
                className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              >
                What We Stand For
              </h2>
              <p className="mt-3 mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
                Four commitments that have defined every job since 2009.
              </p>
              <div
                className="mx-auto mt-4 h-1 w-24 rounded-full bg-brand-bronze"
                aria-hidden="true"
              />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {VALUES.map((value) => {
                const Icon = value.icon;
                return (
                  <Card
                    key={value.title}
                    className="h-full border-brand-emerald/15 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <CardContent className="flex h-full flex-col">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-emerald/10">
                        <Icon
                          className="h-6 w-6 text-brand-emerald"
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="text-base font-semibold text-foreground">
                        {value.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Credentials / Team ──────────────────────────────── */}
        <section
          className="py-16 md:py-24"
          aria-labelledby="credentials-heading"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <Badge
                variant="outline"
                className="mb-4 border-brand-bronze/30 text-brand-bronze px-3 py-1 text-xs font-semibold uppercase tracking-wider"
              >
                Credentials &amp; Capabilities
              </Badge>
              <h2
                id="credentials-heading"
                className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              >
                Trained, Certified, Local
              </h2>
              <div
                className="mx-auto mt-4 h-1 w-24 rounded-full bg-brand-bronze"
                aria-hidden="true"
              />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {CREDENTIALS.map((credential) => (
                <Card
                  key={credential.title}
                  className="h-full border-brand-bronze/20 shadow-sm transition-shadow hover:shadow-md"
                >
                  <CardContent className="flex items-start gap-4">
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-bronze/10">
                      <Award
                        className="h-5 w-5 text-brand-bronze"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground">
                        {credential.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {credential.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact & CTA ────────────────────────────────────── */}
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
              Book Your Free On-Site Assessment
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/75 sm:text-lg">
              Stephen Dunlop personally scopes every booking. Free assessment within 48
              hours across all of Johannesburg, Pretoria, and Midrand.
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

            {/* Contact details */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col items-center gap-2 rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
                <Phone className="h-5 w-5 text-brand-bronze-highlight" />
                <span className="text-xs uppercase tracking-wider text-white/60">
                  Call / WhatsApp
                </span>
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="text-sm font-semibold text-white"
                >
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
                <Mail className="h-5 w-5 text-brand-bronze-highlight" />
                <span className="text-xs uppercase tracking-wider text-white/60">
                  Email
                </span>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-sm font-semibold text-white"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
                <MapPin className="h-5 w-5 text-brand-bronze-highlight" />
                <span className="text-xs uppercase tracking-wider text-white/60">
                  Workshop
                </span>
                <span className="text-sm font-semibold text-white">
                  {SITE_CONFIG.address}
                </span>
              </div>
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
