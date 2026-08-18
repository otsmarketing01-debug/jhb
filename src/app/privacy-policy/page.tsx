import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import CookieConsent from "@/components/cookie-consent";
import Breadcrumbs from "@/components/breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Privacy Policy | JHB Curtain Cleaning — POPIA Compliant",
  description:
    "JHB Curtain Cleaning privacy policy. POPIA compliant. Learn how we collect, use, store, and protect your personal information. Your rights, data retention, cookies, and contact details.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | JHB Curtain Cleaning — POPIA Compliant",
    description:
      "How JHB Curtain Cleaning collects, uses, stores, and protects your personal information under POPIA.",
    type: "article",
    url: `${SITE_CONFIG.siteUrl}/privacy-policy`,
  },
};

interface PolicySection {
  number: string;
  title: string;
  body: React.ReactNode;
}

const EFFECTIVE_DATE = "June 2026";

const SECTIONS: PolicySection[] = [
  {
    number: "1",
    title: "Introduction",
    body: (
      <div className="space-y-4">
        <p>
          {SITE_CONFIG.name} (&ldquo;JHB Curtain Cleaning&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is a curtain, drapery, and soft
          furnishings cleaning business registered and operating in South Africa. Our
          physical workshop is at {SITE_CONFIG.address}.
        </p>
        <p>
          We are committed to protecting your privacy and complying fully with the
          Protection of Personal Information Act, 2013 (Act 4 of 2013) &mdash; commonly
          known as POPIA. This Privacy Policy explains what personal information we
          collect, why we collect it, how we use it, how long we keep it, and the
          rights you have over your data.
        </p>
        <p>
          By using our website at {SITE_CONFIG.siteUrl.replace("https://www.", "")} or
          engaging our services, you consent to the practices described in this policy.
          If you do not agree with any part of this policy, please do not use our
          website or services.
        </p>
      </div>
    ),
  },
  {
    number: "2",
    title: "Information We Collect",
    body: (
      <div className="space-y-4">
        <p>We collect only the personal information necessary to respond to your enquiries, provide quotes, schedule services, and fulfil our contractual obligations to you. Specifically, we may collect:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Personal identifiers:</strong> Your full name and title.</li>
          <li><strong>Contact details:</strong> Your email address, mobile number, and landline number if provided.</li>
          <li><strong>Location data:</strong> The suburb, address, or area where the service is to be performed.</li>
          <li><strong>Service information:</strong> The type of service requested (curtain cleaning, mattress sanitisation, fire proofing, etc.), preferred dates, and any access or parking instructions.</li>
          <li><strong>Communication records:</strong> Records of emails, WhatsApp messages, and phone calls you exchange with us, retained for service quality and dispute resolution.</li>
          <li><strong>Technical data:</strong> If you contact us through our website contact form, we may record the IP address, browser type, and approximate location (city-level) for fraud prevention and security.</li>
        </ul>
        <p>We do <strong>not</strong> collect sensitive personal information such as race, ethnicity, religious beliefs, health information, biometric data, or political opinions unless directly relevant to a specific service request (for example, allergen sensitivities disclosed to inform a mattress sanitisation booking).</p>
      </div>
    ),
  },
  {
    number: "3",
    title: "How We Use Your Information",
    body: (
      <div className="space-y-4">
        <p>We use your personal information strictly for the following legitimate purposes:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>To respond to your enquiries and provide requested quotes or assessments.</li>
          <li>To schedule and deliver on-site curtain cleaning and related services at your premises.</li>
          <li>To issue compliance certificates (such as SANS fire retardant certificates) and retain these for audit purposes.</li>
          <li>To communicate about your booking, including appointment reminders and follow-up quality checks.</li>
          <li>To send service-related information that you have opted into, such as quarterly maintenance reminders.</li>
          <li>To maintain accurate accounting and tax records as required by South African law.</li>
          <li>To respond to legitimate legal requests, defend our rights, and prevent fraud.</li>
        </ul>
        <p>We do <strong>not</strong> use your personal information for unsolicited marketing, do <strong>not</strong> sell your data to third parties, and do <strong>not</strong> use it for automated decision-making that produces legal or similarly significant effects on you.</p>
      </div>
    ),
  },
  {
    number: "4",
    title: "Legal Basis for Processing (POPIA)",
    body: (
      <div className="space-y-4">
        <p>Our processing of your personal information is based on the lawful grounds defined in Section 11 of POPIA:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Consent:</strong> You voluntarily provide your personal information when filling in our contact form, sending an email, or messaging us on WhatsApp. You may withdraw consent at any time.</li>
          <li><strong>Contract:</strong> Processing is necessary to enter into and perform a service contract with you.</li>
          <li><strong>Legal obligation:</strong> We retain certain records (tax invoices, compliance certificates) as required by South African law.</li>
          <li><strong>Legitimate interest:</strong> We maintain communication records to deliver quality service and resolve any disputes.</li>
        </ul>
        <p>Where we rely on consent, you have the right to withdraw that consent at any time by contacting us using the details in Section 10.</p>
      </div>
    ),
  },
  {
    number: "5",
    title: "Data Storage and Security",
    body: (
      <div className="space-y-4">
        <p>Your personal information is stored using the following technical and organisational measures:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Local database:</strong> Lead and booking data is stored in a local SQLite database managed via Prisma ORM on our secure server infrastructure. We do not use cloud-hosted customer relationship management (CRM) services.</li>
          <li><strong>Encrypted transmission:</strong> All data transmitted between your browser and our website uses HTTPS / TLS encryption. Our SSL certificate is auto-renewing through our hosting provider.</li>
          <li><strong>Access control:</strong> Access to personal information is restricted to authorised JHB Curtain Cleaning staff and is protected by individual credentials and two-factor authentication where supported.</li>
          <li><strong>No third-party sharing:</strong> We do <strong>not</strong> share, sell, rent, or trade your personal information with any third party for marketing or commercial purposes. Sub-processors used strictly for service delivery (such as our hosting provider) are bound by written confidentiality obligations.</li>
          <li><strong>Retention limits:</strong> Personal information is retained only as long as needed to fulfil the purposes set out in this policy and as required by law.</li>
        </ul>
        <p>Despite our safeguards, no system can be guaranteed 100% secure. If a data breach occurs that materially affects you, we will notify you and the Information Regulator as required by Sections 72 and 73 of POPIA.</p>
      </div>
    ),
  },
  {
    number: "6",
    title: "Data Retention",
    body: (
      <div className="space-y-4">
        <p>We retain personal information only for as long as necessary to fulfil the purposes described above:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Lead records:</strong> Information collected through enquiry forms (where no service is booked) is retained for 24 months from the date of enquiry, after which it is permanently archived and de-identified.</li>
          <li><strong>Client booking records:</strong> Information related to completed services (including compliance certificates and service notes) is retained for 7 years to satisfy audit, warranty, and tax requirements.</li>
          <li><strong>Marketing opt-ins:</strong> Where you have opted into marketing communications, your information is retained until you unsubscribe or request deletion.</li>
          <li><strong>Communication records:</strong> Emails, WhatsApp messages, and call records are retained for 24 months for service-quality purposes.</li>
        </ul>
        <p>After the retention period expires, personal information is securely deleted or anonymised so that it can no longer be used to identify you.</p>
      </div>
    ),
  },
  {
    number: "7",
    title: "Your Rights Under POPIA",
    body: (
      <div className="space-y-4">
        <p>POPIA grants you the following rights over your personal information. To exercise any of these rights, contact us using the details in Section 10:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Right of access:</strong> You may request a copy of the personal information we hold about you, free of charge (one request per year).</li>
          <li><strong>Right to correction:</strong> You may request that we correct any inaccurate or incomplete personal information.</li>
          <li><strong>Right to deletion:</strong> You may request that we delete your personal information, subject to our legal obligations to retain certain records.</li>
          <li><strong>Right to object:</strong> You may object to the processing of your personal information for direct marketing or any purpose based on legitimate interest.</li>
          <li><strong>Right to withdraw consent:</strong> Where processing is based on your consent, you may withdraw that consent at any time without affecting the lawfulness of processing carried out before withdrawal.</li>
          <li><strong>Right to complain:</strong> You have the right to lodge a complaint with the Information Regulator of South Africa if you believe we have not handled your personal information in accordance with POPIA.</li>
        </ul>
        <p>We will respond to all legitimate requests within 30 days of receipt. If we refuse to action a request, we will provide written reasons for our refusal.</p>
      </div>
    ),
  },
  {
    number: "8",
    title: "Cookies and Analytics",
    body: (
      <div className="space-y-4">
        <p>Our website uses cookies and similar technologies for the following purposes:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Essential cookies:</strong> Required for the website to function correctly (such as remembering your cookie consent preference). These cannot be disabled.</li>
          <li><strong>Analytics cookies:</strong> Used to understand how visitors use our website so we can improve it. These are only placed after you give explicit consent through our cookie consent banner.</li>
          <li><strong>Preference cookies:</strong> Remember choices you make (such as preferred contact method) to improve your experience.</li>
        </ul>
        <p>You can control cookies through your browser settings. Most browsers allow you to refuse cookies or alert you when cookies are being sent. Disabling cookies may affect the functionality of our website.</p>
        <p>Our cookie consent banner appears on your first visit and gives you the choice to accept all cookies, accept only essential cookies, or learn more by reading this policy. Your preference is stored locally in your browser for future visits.</p>
      </div>
    ),
  },
  {
    number: "9",
    title: "Third-Party Services",
    body: (
      <div className="space-y-4">
        <p>While we do not share your personal information with third parties for marketing, we do rely on the following third-party service providers to operate our business:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Vercel Inc.</strong> &mdash; Website hosting provider. Vercel hosts our website and serves pages to your browser. They may log IP addresses and standard request metadata for security and abuse prevention. Vercel is GDPR/POPIA aware and bound by their own data protection commitments.</li>
          <li><strong>z-ai-web-dev-sdk</strong> &mdash; Powers our AI chatbot widget. Conversations with the chatbot may be processed by the underlying model provider to generate responses. We do not store chat transcripts on our servers unless you explicitly request a follow-up by leaving your contact details.</li>
          <li><strong>Email and messaging providers</strong> &mdash; Standard email (SMTP) and WhatsApp infrastructure used to communicate with you. Their standard data handling practices apply.</li>
        </ul>
        <p>We have written agreements with each sub-processor that obliges them to protect your personal information to a standard no lower than this policy. We do not transfer your personal information outside of South Africa except through these sub-processors, whose data flows are governed by their own compliance frameworks.</p>
      </div>
    ),
  },
  {
    number: "10",
    title: "Contact Information",
    body: (
      <div className="space-y-4">
        <p>If you have any questions about this Privacy Policy, wish to exercise any of your rights, or want to lodge a complaint about how we handle your personal information, please contact our Information Officer:</p>
        <div className="rounded-xl border border-brand-bronze/20 bg-brand-surface-ivory p-5">
          <p className="text-base font-semibold text-foreground">{SITE_CONFIG.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">Attention: Information Officer</p>
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
        </div>
        <p>You may also lodge a complaint with the Information Regulator of South Africa:</p>
        <p className="text-sm text-muted-foreground">
          Information Regulator (South Africa)<br />
          Physical: JD House, 108 Stiemens Street, Braamfontein, Johannesburg<br />
          Email: <a href="mailto:complaints.IR@inforegulator.org.za" className="text-brand-emerald underline underline-offset-2 hover:text-brand-bronze">complaints.IR@inforegulator.org.za</a><br />
          Website: <a href="https://inforegulator.org.za" target="_blank" rel="noopener noreferrer" className="text-brand-emerald underline underline-offset-2 hover:text-brand-bronze">inforegulator.org.za</a>
        </p>
      </div>
    ),
  },
  {
    number: "11",
    title: "Updates to This Policy",
    body: (
      <div className="space-y-4">
        <p>We may update this Privacy Policy from time to time to reflect changes in our practices, legal obligations, or operational requirements. When we do, we will revise the &ldquo;Effective Date&rdquo; at the top of this page.</p>
        <p>Material changes will be communicated by posting a prominent notice on our website at least 30 days before the change takes effect. We encourage you to review this policy periodically.</p>
        <p>Continued use of our website or services after any update constitutes acceptance of the revised policy.</p>
      </div>
    ),
  },
];

export default function PrivacyPolicyPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Privacy Policy",
        item: `${SITE_CONFIG.siteUrl}/privacy-policy`,
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
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

      <main className="flex-1">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden pt-16 pb-14 md:pt-24 md:pb-16"
          aria-label="Privacy Policy"
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
                <ShieldCheck className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
                POPIA Compliant
              </Badge>
              <h1 className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Privacy Policy
              </h1>
              <p className="mt-4 text-lg font-medium text-white/90 sm:text-xl md:text-2xl">
                How JHB Curtain Cleaning collects, uses, stores, and protects your
                personal information.
              </p>
              <p className="mt-4 text-sm text-white/70 sm:text-base">
                <span className="font-semibold text-white/90">Effective Date:</span>{" "}
                {EFFECTIVE_DATE}
                <span className="mx-2 text-white/30">|</span>
                <span className="font-semibold text-white/90">Compliance:</span>{" "}
                POPIA (Protection of Personal Information Act, 2013)
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

        {/* ── Policy Body ──────────────────────────────────────── */}
        <article className="py-14 md:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            {/* Intro paragraph */}
            <p className="mb-10 text-base leading-relaxed text-muted-foreground sm:text-lg">
              This Privacy Policy describes how {SITE_CONFIG.name} handles your personal
              information when you visit our website, contact us, or engage our
              on-site curtain cleaning services. We are committed to full compliance
              with the Protection of Personal Information Act, 2013 (POPIA) and to
              handling your data with the care it deserves.
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
                <strong className="text-foreground">Need to exercise a right?</strong>{" "}
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
                and we&apos;ll respond within 30 days as required by POPIA.
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
