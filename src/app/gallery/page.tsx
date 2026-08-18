import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  Home,
  Hotel,
  Building2,
  Sparkles,
  Clock,
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
import { SITE_CONFIG } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Gallery | JHB Curtain Cleaning — Before & After Photos",
  description:
    "Before-and-after curtain cleaning results from JHB Curtain Cleaning across Johannesburg: Sandton hotels, Fourways silk drapes, Roodepoort heritage homes, and commercial venues.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery | JHB Curtain Cleaning — Before & After Photos",
    description:
      "Before-and-after curtain cleaning results across Johannesburg. Sandton hotels, Fourways silk drapes, heritage homes and commercial venues.",
    type: "website",
    url: `${SITE_CONFIG.siteUrl}/gallery`,
  },
};

type Category = "Residential" | "Hotels" | "Commercial" | "Specialist Fabric Care";

interface GalleryItem {
  id: string;
  title: string;
  location: string;
  category: Category;
  description: string;
  duration: string;
  gradient: string;
  pattern?: "sheer" | "velvet" | "lined" | "silk" | "blackout" | "stage";
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "sandton-hotel-200-rooms",
    title: "Sandton Hotel — 200 Rooms",
    location: "Sandton, Johannesburg North",
    category: "Hotels",
    description:
      "Full after-hours curtain refresh across 200 guest rooms over five nights. Combined dry cleaning with SANS fire retardant top-up and full compliance certificate re-issue.",
    duration: "5 nights",
    gradient: "linear-gradient(135deg, #6C3483 0%, #a87d43 100%)",
    pattern: "lined",
  },
  {
    id: "fourways-silk-drapes",
    title: "Fourways Residential — Silk Drapes",
    location: "Fourways, Johannesburg North",
    category: "Specialist Fabric Care",
    description:
      "Floor-to-ceiling silk drapes with original 1990s hardware. Pre-tested dye stability, solvent dry clean, and full hardware restoration including re-cording tracks.",
    duration: "1 day",
    gradient: "linear-gradient(135deg, #064e3b 0%, #0d7a5f 100%)",
    pattern: "silk",
  },
  {
    id: "rosebank-heritage-victorian",
    title: "Rosebank Heritage Home — Victorian Drapes",
    location: "Rosebank, Johannesburg Central",
    category: "Specialist Fabric Care",
    description:
      "Original Edwardian drapes in a heritage Parktown residence. Specialist antique fabric care with fibre identification, gentle solvent extraction, and pile restoration.",
    duration: "2 days",
    gradient: "linear-gradient(135deg, #7c2d12 0%, #a87d43 100%)",
    pattern: "velvet",
  },
  {
    id: "roodepoort-family-home",
    title: "Roodepoort Family Home — Living Room Drapes",
    location: "Roodepoort, Johannesburg West",
    category: "Residential",
    description:
      "Heavy velvet drapes in a family living room, heavily loaded with mining dust and pet dander. Full solvent dry clean plus Master Guarding 12-month stain protection applied.",
    duration: "Half day",
    gradient: "linear-gradient(135deg, #064e3b 0%, #1a5c3a 100%)",
    pattern: "velvet",
  },
  {
    id: "melrose-corporate-boardroom",
    title: "Melrose Corporate Boardroom",
    location: "Melrose, Johannesburg Central",
    category: "Commercial",
    description:
      "Corporate boardroom with floor-to-ceiling blackout drapes. Weekend service to avoid disruption, full hardware inspection, and indoor air quality report issued.",
    duration: "1 day (weekend)",
    gradient: "linear-gradient(135deg, #0d9488 0%, #064e3b 100%)",
    pattern: "blackout",
  },
  {
    id: "bedfordview-guesthouse",
    title: "Bedfordview Guesthouse — 12 Guest Rooms",
    location: "Bedfordview, Johannesburg East",
    category: "Hotels",
    description:
      "Boutique guesthouse required full curtain refresh between busy seasons. Same-day completion per room, fire compliance certificate renewed, and stain protection applied.",
    duration: "2 days",
    gradient: "linear-gradient(135deg, #6C3483 0%, #0d7a5f 100%)",
    pattern: "lined",
  },
  {
    id: "bryanston-sheer-voiles",
    title: "Bryanston Home — Sheer Voiles",
    location: "Bryanston, Johannesburg North",
    category: "Residential",
    description:
      "Delicate sheer voile panels across a four-bedroom family home. Low-suction solvent extraction preserved the sheer fabric while removing fine Highveld dust.",
    duration: "Half day",
    gradient: "linear-gradient(135deg, #c69c6d 0%, #f9f9f6 100%)",
    pattern: "sheer",
  },
  {
    id: "parktown-clinic-curtains",
    title: "Parktown Healthcare Clinic",
    location: "Parktown, Johannesburg Central",
    category: "Commercial",
    description:
      "Patient-facing clinical facility required clinical-grade sanitisation of all soft furnishings. Combined curtain cleaning with hypoallergenic treatment and HAI prevention protocol.",
    duration: "1 day",
    gradient: "linear-gradient(135deg, #16a34a 0%, #064e3b 100%)",
    pattern: "lined",
  },
  {
    id: "fourways-theatre-stage",
    title: "Fourways Theatre — Stage Curtains",
    location: "Fourways, Johannesburg North",
    category: "Specialist Fabric Care",
    description:
      "Heavy stage drapes with acoustic lining. Dark-week scheduling, full SANS fire compliance re-treatment, and acoustic restoration to original performance specification.",
    duration: "3 days (dark week)",
    gradient: "linear-gradient(135deg, #6C3483 0%, #1a1a1a 100%)",
    pattern: "stage",
  },
  {
    id: "centurion-school-hall",
    title: "Centurion School — Assembly Hall",
    location: "Centurion, Pretoria & Midrand",
    category: "Commercial",
    description:
      "School assembly hall drapes cleaned during term holiday. Child-safe product selection, allergen audit, and SANS fire compliance certificate issued for insurance.",
    duration: "1 day (holiday)",
    gradient: "linear-gradient(135deg, #ea580c 0%, #a87d43 100%)",
    pattern: "lined",
  },
  {
    id: "midrand-mattress-programme",
    title: "Midrand Residential — Mattress + Curtain Package",
    location: "Midrand, Pretoria & Midrand",
    category: "Residential",
    description:
      "Combined allergen-control programme: full curtain dry clean plus mattress sanitisation across a four-bedroom family home. Measurable indoor air quality improvement within 48 hours.",
    duration: "1 day",
    gradient: "linear-gradient(135deg, #064e3b 0%, #16a34a 100%)",
    pattern: "lined",
  },
  {
    id: "kempton-park-hotel-corridor",
    title: "Kempton Park Hotel — O.R. Tambo Corridor",
    location: "Kempton Park, Johannesburg East",
    category: "Hotels",
    description:
      "After-hours service across a 150-room airport hotel. Guest-ready turnaround, full fire compliance re-issue, and quarterly maintenance programme established.",
    duration: "4 nights",
    gradient: "linear-gradient(135deg, #6C3483 0%, #c69c6d 100%)",
    pattern: "lined",
  },
];

const CATEGORIES: { label: Category | "All"; icon: typeof Home }[] = [
  { label: "All", icon: Sparkles },
  { label: "Residential", icon: Home },
  { label: "Hotels", icon: Hotel },
  { label: "Commercial", icon: Building2 },
  { label: "Specialist Fabric Care", icon: Sparkles },
];

/* ── Decorative pattern overlays for image placeholders ── */
function PatternOverlay({ pattern }: { pattern?: string }) {
  if (!pattern) return null;

  const patterns: Record<string, React.CSSProperties> = {
    sheer: {
      backgroundImage:
        "repeating-linear-gradient(90deg, transparent, transparent 12px, rgba(255,255,255,0.18) 12px, rgba(255,255,255,0.18) 14px)",
    },
    velvet: {
      backgroundImage:
        "repeating-linear-gradient(90deg, transparent, transparent 24px, rgba(0,0,0,0.15) 24px, rgba(0,0,0,0.15) 26px), repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(255,255,255,0.05) 24px, rgba(255,255,255,0.05) 25px)",
    },
    lined: {
      backgroundImage:
        "repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.12) 40px, rgba(255,255,255,0.12) 42px)",
    },
    silk: {
      backgroundImage:
        "repeating-linear-gradient(135deg, transparent, transparent 8px, rgba(255,255,255,0.10) 8px, rgba(255,255,255,0.10) 10px)",
    },
    blackout: {
      backgroundImage:
        "repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(0,0,0,0.20) 60px, rgba(0,0,0,0.20) 62px)",
    },
    stage: {
      backgroundImage:
        "repeating-linear-gradient(90deg, transparent, transparent 48px, rgba(255,255,255,0.08) 48px, rgba(255,255,255,0.08) 50px), repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(168,125,67,0.10) 24px, rgba(168,125,67,0.10) 25px)",
    },
  };

  return (
    <div
      className="absolute inset-0 opacity-60"
      style={patterns[pattern]}
      aria-hidden="true"
    />
  );
}

/* ── Decorative curtain silhouette SVG ── */
function CurtainIcon() {
  return (
    <svg
      viewBox="0 0 200 120"
      className="absolute inset-0 h-full w-full opacity-20"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="curtainGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <path
        d="M20,10 L20,110 Q40,100 40,80 Q60,100 60,80 Q80,100 80,80 Q100,100 100,80 Q120,100 120,80 Q140,100 140,80 Q160,100 160,80 Q180,100 180,110 L180,10 Z"
        fill="url(#curtainGrad)"
      />
    </svg>
  );
}

export default function GalleryPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Gallery",
        item: `${SITE_CONFIG.siteUrl}/gallery`,
      },
    ],
  };

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Curtain Cleaning Gallery",
    description:
      "Before-and-after curtain cleaning results from JHB Curtain Cleaning across Johannesburg and Pretoria.",
    url: `${SITE_CONFIG.siteUrl}/gallery`,
    hasPart: GALLERY_ITEMS.map((item) => ({
      "@type": "CreativeWork",
      name: item.title,
      description: item.description,
      creator: {
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
      <Breadcrumbs items={[{ label: "Gallery" }]} />

      <main className="flex-1">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden pt-16 pb-16 md:pt-24 md:pb-20"
          aria-label="Our work gallery"
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
                Our Work Gallery
              </Badge>
              <h1 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Our Work Gallery
              </h1>
              <p className="mt-4 text-lg font-medium text-white/90 sm:text-xl md:text-2xl">
                Before-and-after results from across Johannesburg, Pretoria &amp; Midrand.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                A selection of recent projects spanning hotels, residential homes,
                corporate venues, and specialist fabric care. Each card shows the
                project location, scope, and turnaround time. Full photo galleries are
                available on request — contact us for a portfolio specific to your sector.
              </p>
            </div>
          </div>
        </section>

        {/* ── Category filter strip (informational) ────────────── */}
        <section className="border-b border-border bg-muted/30 py-6" aria-label="Categories">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                return (
                  <span
                    key={cat.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-brand-bronze/20 bg-background px-3 py-1.5 text-xs font-medium text-foreground sm:text-sm"
                  >
                    <Icon className="h-3.5 w-3.5 text-brand-bronze" aria-hidden="true" />
                    {cat.label}
                  </span>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Gallery Grid ──────────────────────────────────────── */}
        <section className="py-14 md:py-20" aria-label="Project gallery">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {GALLERY_ITEMS.map((item) => (
                <Card
                  key={item.id}
                  className="h-full overflow-hidden border-brand-bronze/15 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Image placeholder */}
                  <div
                    className="relative aspect-[4/3] w-full overflow-hidden"
                    style={{ background: item.gradient }}
                  >
                    <PatternOverlay pattern={item.pattern} />
                    <CurtainIcon />
                    {/* Category badge */}
                    <div className="absolute left-3 top-3 z-10">
                      <span className="inline-flex items-center rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-emerald shadow-sm backdrop-blur-sm">
                        {item.category}
                      </span>
                    </div>
                    {/* Duration badge */}
                    <div className="absolute right-3 top-3 z-10">
                      <span className="inline-flex items-center gap-1 rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">
                        <Clock className="h-3 w-3" aria-hidden="true" />
                        {item.duration}
                      </span>
                    </div>
                  </div>

                  <CardContent className="flex h-full flex-col">
                    <h2 className="text-lg font-bold leading-tight text-foreground">
                      {item.title}
                    </h2>
                    <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-brand-bronze">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {item.location}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
              Full before-and-after photo sets, client references, and sector-specific
              portfolios are available on request. Contact us to arrange a tailored
              presentation for your venue or property.
            </p>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden py-16 md:py-20"
          aria-label="Get started"
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
              Want to see your project here next?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/75 sm:text-lg">
              Book a free on-site assessment and we&apos;ll scope your curtains,
              mattresses, and upholstery on the spot — across Johannesburg, Pretoria &amp;
              Midrand.
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
