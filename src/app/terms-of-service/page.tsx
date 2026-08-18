import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, FileText } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import CookieConsent from "@/components/cookie-consent";
import Breadcrumbs from "@/components/breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Terms of Service | JHB Curtain Cleaning",
  description:
    "Terms of Service for JHB Curtain Cleaning. Booking, quotes, cancellations, payment, guarantees, liability, IP, and governing law for on-site curtain cleaning in Johannesburg.",
  alternates: { canonical: "/terms-of-service" },
  openGraph: {
    title: "Terms of Service | JHB Curtain Cleaning",
    description:
      "Terms governing bookings, payments, guarantees, and service delivery for on-site curtain cleaning in Johannesburg.",
    type: "article",
    url: `${SITE_CONFIG.siteUrl}/terms-of-service`,
  },
};

interface TermsSection {
  number: string;
  title: string;
  body: React.ReactNode;
}

const EFFECTIVE_DATE = "June 2026";

const SECTIONS: TermsSection[] = [
  {
    number: "1",
    title: "Acceptance of Terms",
    body: (
      <div className="space-y-4">
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the website at{" "}
          {SITE_CONFIG.siteUrl.replace("https://www.", "")} and the booking, quotation,
          and provision of on-site curtain cleaning and related services by{" "}
          {SITE_CONFIG.name} (&ldquo;JHB Curtain Cleaning&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
        </p>
        <p>
          By accessing our website, requesting a quote, or booking a service, you
          confirm that you have read, understood, and agree to be bound by these
          Terms. If you do not agree to these Terms, please do not use our website or
          engage our services.
        </p>
        <p>
          If you are accepting these Terms on behalf of a company, hotel, or other
          organisation, you represent and warrant that you have the authority to bind
          that entity to these Terms.
        </p>
      </div>
    ),
  },
  {
    number: "2",
    title: "Description of Services",
    body: (
      <div className="space-y-4">
        <p>
          JHB Curtain Cleaning provides professional on-site curtain, drapery, blind,
          and soft-furnishings cleaning services across Johannesburg, Pretoria, and
          Midrand. Our services include, but are not limited to:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>On-site curtain and blind dry cleaning (no removal required).</li>
          <li>Deep mattress sanitisation and allergen extraction.</li>
          <li>Upholstery and carpet cleaning.</li>
          <li>Master Guarding 12-month stain protection.</li>
          <li>SANS-compliant fire proofing with certification.</li>
          <li>Persian and Oriental rug specialist care (on-site or collection).</li>
        </ul>
        <p>
          All services are performed at the client&apos;s premises unless explicitly
          agreed otherwise in writing. Our standard service area covers all
          Johannesburg suburbs, Pretoria, and Midrand. Locations outside this area may
          incur additional travel charges, which will be communicated before booking.
        </p>
      </div>
    ),
  },
  {
    number: "3",
    title: "Quotes and Pricing",
    body: (
      <div className="space-y-4">
        <p>
          We provide a free on-site assessment during which we inspect your curtains,
          identify fabric types, and provide a written quote. The assessment carries
          no obligation to proceed with a booking.
        </p>
        <p>Quotes are subject to the following conditions:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Validity:</strong> All written quotes are valid for 30 days from the date of issue.</li>
          <li><strong>Scope:</strong> Quotes are based on the visible condition of curtains, fabric type, and the area to be cleaned at the time of assessment. If additional work is identified during the service itself (such as hardware repairs or hidden stains), we will seek your approval before proceeding with any additional charge.</li>
          <li><strong>Indicative ranges:</strong> Indicative price ranges published on our website or in marketing materials are estimates only. The binding price is the figure quoted in your written assessment.</li>
          <li><strong>No hidden costs:</strong> We commit to no hidden costs. Any cost not included in the original quote will be communicated and agreed before it is incurred.</li>
        </ul>
      </div>
    ),
  },
  {
    number: "4",
    title: "Bookings and Cancellations",
    body: (
      <div className="space-y-4">
        <p>To book a service, you may contact us via WhatsApp, phone, email, or our website contact form. Once a booking is confirmed, the following cancellation policy applies:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>48-hour policy:</strong> Cancellations made more than 48 hours before the scheduled appointment incur no charge.</li>
          <li><strong>Less than 48 hours:</strong> Cancellations made with less than 48 hours&apos; notice may incur a call-out fee of R350, payable before any future booking is confirmed.</li>
          <li><strong>No-shows:</strong> If our technician arrives at the scheduled time and is unable to access the premises, a call-out fee of R500 will apply.</li>
          <li><strong>Rescheduling:</strong> Rescheduling is free of charge provided it is done more than 48 hours before the appointment.</li>
          <li><strong>Weather and access:</strong> We reserve the right to reschedule appointments affected by severe weather, load shedding, or access issues beyond our control. No cancellation fee will apply in such cases.</li>
        </ul>
        <p>Our team will always attempt to accommodate your schedule and communicate proactively about any changes.</p>
      </div>
    ),
  },
  {
    number: "5",
    title: "Payment Terms",
    body: (
      <div className="space-y-4">
        <p>Payment for services is governed by the following terms:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Timing:</strong> Payment is due on completion of the service, unless alternative terms have been agreed in writing for commercial or hospitality clients.</li>
          <li><strong>Methods:</strong> We accept Electronic Funds Transfer (EFT) and cash. Card facilities may be available on request but are not guaranteed on-site.</li>
          <li><strong>Invoicing:</strong> A tax-compliant invoice will be issued on completion. Commercial clients on monthly account terms must settle within 7 days of invoice date.</li>
          <li><strong>Deposits:</strong> For large commercial or hospitality jobs (typically above R15,000), we may request a 50% deposit on booking. The balance is due on completion.</li>
          <li><strong>Late payment:</strong> Overdue accounts may attract interest at the maximum rate permitted by South African law and may suspend future bookings until settled.</li>
        </ul>
      </div>
    ),
  },
  {
    number: "6",
    title: "Guarantees",
    body: (
      <div className="space-y-4">
        <p>We stand behind our work with the following guarantees:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>No-Shrinkage Guarantee:</strong> Our solvent-based dry-cleaning process uses zero water. If any curtain we clean shrinks as a direct result of our cleaning, we will either restore the curtain at no charge or refund the cleaning cost of that curtain. This guarantee has not been breached in 15+ years and 5,000+ jobs.</li>
          <li><strong>100% Satisfaction Guarantee:</strong> If you are not satisfied with the result of our cleaning, contact us within 7 days and we will re-clean the affected area at no charge.</li>
          <li><strong>Hardware inspection:</strong> We inspect tracks, runners, cords, and pulleys as part of every curtain cleaning job and carry out minor repairs at no extra cost. Major hardware repairs will be quoted separately.</li>
          <li><strong>Compliance certificates:</strong> SANS fire compliance certificates are valid for the period stated on the certificate. Re-cleaning or re-treatment may be required to maintain validity.</li>
        </ul>
        <p>Guarantees do not cover damage caused by pre-existing fabric weakness, sun damage, mechanical failure of hardware not noted at assessment, or issues arising from third-party interventions after our service.</p>
      </div>
    ),
  },
  {
    number: "7",
    title: "Limitation of Liability",
    body: (
      <div className="space-y-4">
        <p>To the maximum extent permitted by South African law:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Our total liability for any claim arising out of or relating to our services is limited to the amount paid by you for the specific service giving rise to the claim.</li>
          <li>We are not liable for indirect, incidental, consequential, or special damages, including but not limited to loss of revenue, loss of profit, loss of business, or loss of goodwill.</li>
          <li>We are not liable for damage to items not disclosed to us at the time of assessment, including but not limited to antique fabrics, heritage drapes, or curtains with pre-existing damage.</li>
          <li>We are not liable for failures or delays caused by events beyond our reasonable control, including but not limited to acts of God, severe weather, load shedding, civil unrest, or government restrictions.</li>
        </ul>
        <p>Nothing in these Terms limits liability that cannot be excluded under South African law, including liability for death or personal injury caused by negligence or for fraud.</p>
      </div>
    ),
  },
  {
    number: "8",
    title: "Intellectual Property",
    body: (
      <div className="space-y-4">
        <p>
          All content on our website &mdash; including but not limited to text,
          graphics, logos, images, photographs, service descriptions, downloadable
          resources, and software &mdash; is the property of {SITE_CONFIG.name} or its
          licensors and is protected by South African and international copyright,
          trademark, and intellectual property laws.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>You may view, download, and print pages from our website for personal, non-commercial use only.</li>
          <li>You may not reproduce, redistribute, republish, or commercially exploit any part of our website without our prior written consent.</li>
          <li>The JHB Curtain Cleaning name, logo, and brand identity are trademarks of {SITE_CONFIG.name} and may not be used without our written permission.</li>
          <li>Any trademarks, service marks, or trade names not owned by us that appear on our website are the property of their respective owners.</li>
        </ul>
      </div>
    ),
  },
  {
    number: "9",
    title: "Governing Law and Jurisdiction",
    body: (
      <div className="space-y-4">
        <p>
          These Terms and any dispute or claim arising out of or in connection with
          them or their subject matter (including non-contractual disputes or claims)
          are governed by and construed in accordance with the laws of the Republic of
          South Africa.
        </p>
        <p>
          The courts of Johannesburg, South Africa shall have exclusive jurisdiction to
          settle any dispute or claim arising out of or in connection with these Terms
          or our services, save that we may bring proceedings in any other court of
          competent jurisdiction to protect our intellectual property or enforce
          payment of overdue accounts.
        </p>
        <p>
          The United Nations Convention on Contracts for the International Sale of
          Goods (CISG) does not apply to any transaction between you and{" "}
          {SITE_CONFIG.name}.
        </p>
      </div>
    ),
  },
  {
    number: "10",
    title: "Changes to These Terms",
    body: (
      <div className="space-y-4">
        <p>
          We may revise these Terms from time to time to reflect changes in our
          services, legal obligations, or operational practices. When we do, we will
          update the &ldquo;Effective Date&rdquo; at the top of this page.
        </p>
        <p>
          Material changes will be communicated by posting a prominent notice on our
          website at least 14 days before the change takes effect. Continued use of
          our website or services after any update constitutes acceptance of the
          revised Terms.
        </p>
        <p>
          You are encouraged to review these Terms periodically. The version
          currently in effect is the one published on this page.
        </p>
      </div>
    ),
  },
  {
    number: "11",
    title: "Contact Information",
    body: (
      <div className="space-y-4">
        <p>If you have any questions about these Terms, our services, or wish to discuss a booking or concern, please contact us:</p>
        <div className="rounded-xl border border-brand-bronze/20 bg-brand-surface-ivory p-5">
          <p className="text-base font-semibold text-foreground">{SITE_CONFIG.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">Attention: Managing Director &mdash; {SITE_CONFIG.contactPerson}</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-bronze" aria-hidden="true" />
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-brand-emerald underline underline-offset-2 hover:text-brand-bronze">
                {SITE_CONFIG.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-bronze" aria-hidden="true" />
              <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="text-brand-emerald underline underline-offset-2 hover:text-brand-bronze">
                {SITE_CONFIG.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-bronze" aria-hidden="true" />
              <span className="text-muted-foreground">{SITE_CONFIG.address}</span>
            </li>
          </ul>
          <div className="mt-3 rounded-md bg-white px-3 py-2 text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">Office hours:</span>{" "}
            {SITE_CONFIG.hours.weekday} &bull; {SITE_CONFIG.hours.saturday}
          </div>
        </div>
      </div>
    ),
  },
];

export default function TermsOfServicePage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Terms of Service",
        item: `${SITE_CONFIG.siteUrl}/terms-of-service`,
      },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Header />
      <Breadcrumbs items={[{ label: "Terms of Service" }]} />

      <main className="flex-1">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden pt-16 pb-14 md:pt-24 md:pb-16"
          aria-label="Terms of Service"
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

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <Badge
                variant="outline"
                className="mb-6 border-white/30 bg-white/10 text-white backdrop-blur-sm px-4 py-1.5 text-sm"
              >
                <FileText className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
                Legal Agreement
              </Badge>
              <h1 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Terms of Service
              </h1>
              <p className="mt-4 text-lg font-medium text-white/90 sm:text-xl md:text-2xl">
                The terms under which JHB Curtain Cleaning provides on-site curtain
                cleaning services across Johannesburg, Pretoria &amp; Midrand.
              </p>
              <p className="mt-4 text-sm text-white/70 sm:text-base">
                <span className="font-semibold text-white/90">Effective Date:</span>{" "}
                {EFFECTIVE_DATE}
                <span className="mx-2 text-white/30">|</span>
                <span className="font-semibold text-white/90">Governing Law:</span>{" "}
                Republic of South Africa
              </p>
            </div>
          </div>
        </section>

        {/* ── Table of Contents ──────────────────────────────── */}
        <section
          className="border-b border-border bg-muted/30 py-10"
          aria-label="Table of contents"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-bronze">
              Contents
            </h2>
            <nav className="mt-3">
              <ol className="grid grid-cols-1 gap-x-6 gap-y-1.5 text-sm sm:grid-cols-2">
                {SECTIONS.map((section) => (
                  <li key={section.number}>
                    <a
                      href={`#section-${section.number}`}
                      className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-brand-emerald"
                    >
                      <span className="font-semibold text-brand-bronze">
                        {section.number}.
                      </span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </section>

        {/* ── Terms Body ──────────────────────────────────────── */}
        <article className="py-14 md:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            {/* Intro paragraph */}
            <p className="mb-10 text-base leading-relaxed text-muted-foreground sm:text-lg">
              These Terms of Service constitute a legally binding agreement between you
              and {SITE_CONFIG.name} governing your use of our website and on-site
              curtain cleaning services. Please read them carefully before booking. By
              engaging our services, you acknowledge that you understand and agree to
              all the terms set out below.
            </p>

            {/* Numbered sections */}
            <div className="space-y-12">
              {SECTIONS.map((section) => (
                <section
                  key={section.number}
                  id={`section-${section.number}`}
                  className="scroll-mt-24"
                  aria-labelledby={`heading-${section.number}`}
                >
                  <Card className="border-brand-bronze/15 shadow-sm">
                    <CardContent>
                      <div className="flex items-start gap-3">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-emerald text-sm font-bold text-white">
                          {section.number}
                        </span>
                        <h2
                          id={`heading-${section.number}`}
                          className="mt-1 font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl"
                        >
                          {section.title}
                        </h2>
                      </div>
                      <div className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-[1.05rem] sm:leading-relaxed">
                        {section.body}
                      </div>
                    </CardContent>
                  </Card>
                </section>
              ))}
            </div>

            {/* Footer note */}
            <div className="mt-12 rounded-xl border-l-4 border-brand-bronze bg-brand-surface-ivory p-5">
              <p className="text-sm leading-relaxed text-muted-foreground">
                <strong className="text-foreground">Questions about these Terms?</strong>{" "}
                Email{" "}
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="font-medium text-brand-emerald underline underline-offset-2"
                >
                  {SITE_CONFIG.email}
                </a>{" "}
                or call{" "}
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="font-medium text-brand-emerald underline underline-offset-2"
                >
                  {SITE_CONFIG.phone}
                </a>{" "}
                before booking. We&apos;ll happily clarify any clause in plain language.
              </p>
            </div>

            {/* Back to home */}
            <div className="mt-8 text-sm">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-brand-emerald transition-colors hover:text-brand-bronze"
              >
                &larr; Back to home
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
}
