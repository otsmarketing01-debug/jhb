/**
 * Blog post data for JHB Curtain Cleaning.
 *
 * Each post contains substantial (300–500+ word) content covering the
 * six AEO topics identified in the SEO audit. Content is written for
 * both human readers and AI-powered search engines (AEO / LLM retrieval).
 *
 * Author: Stephen Dunlop, Managing Director.
 */

export interface BlogContentBlock {
  type: "heading" | "paragraph" | "list";
  level?: 2 | 3;
  text?: string;
  items?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    title: string;
  };
  heroTag: string;
  content: BlogContentBlock[];
  keywords: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-clean-curtains-without-taking-them-down",
    title:
      "How to Clean Curtains Without Taking Them Down — Complete Guide",
    excerpt:
      "Removing curtains to clean them is the single biggest cause of shrinkage, damage, and rehanging frustration. Here is the complete on-site curtain cleaning method Johannesburg homeowners can trust.",
    category: "How-To Guides",
    date: "2026-06-15",
    readTime: "6 min read",
    author: {
      name: "Stephen Dunlop",
      title: "Managing Director, JHB Curtain Cleaning",
    },
    heroTag: "On-Site Curtain Cleaning",
    keywords: [
      "clean curtains without taking them down",
      "on-site curtain cleaning Johannesburg",
      "dry clean curtains in place",
      "no shrinkage curtain cleaning",
    ],
    content: [
      {
        type: "paragraph",
        text: "For most Johannesburg homeowners, the very idea of cleaning curtains triggers a familiar dread: take them down, transport them, wait two weeks, then struggle to rehang them — and pray they have not shrunk in the process. The good news is that modern on-site curtain cleaning eliminates every one of those pain points. At JHB Curtain Cleaning we have spent more than 15 years proving that curtains do not need to come down to be properly cleaned.",
      },
      {
        type: "heading",
        level: 2,
        text: "Why on-site cleaning beats removal every time",
      },
      {
        type: "paragraph",
        text: "When you remove a curtain from its track you immediately introduce three risks. First, the fabric folds and creases differently in transit, which is where permanent set-lines form. Second, off-site washing machines agitate delicate fibres against metal drums, leading to mechanical shrinkage of anywhere between 3% and 12%. Third, rehanging requires two people, a step ladder, and 30 to 90 minutes per room — and you still need to fix the inevitable track repairs.",
      },
      {
        type: "paragraph",
        text: "On-site cleaning sidesteps all of this. The curtain stays in its natural hanging position, the fabric is never stressed beyond what gravity already does, and the hardware (tracks, runners, cords, pulleys) is inspected at the same time.",
      },
      {
        type: "heading",
        level: 2,
        text: "The four-step on-site method we use",
      },
      {
        type: "list",
        items: [
          "Visual assessment — identify fabric type (sheer, velvet, lined, blackout, silk blend), note existing damage, and inspect hardware.",
          "Area preparation — protect floors and furniture with drop sheets and set up portable dry-cleaning equipment.",
          "Fabric-specific dry cleaning — apply solvent-based solutions that lift dust, allergens, and stains without introducing water.",
          "Hardware inspection and final QC — tracks, runners, and cords are checked and minor repairs handled at no extra cost.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Why dry cleaning matters for curtains",
      },
      {
        type: "paragraph",
        text: "Curtain shrinkage is overwhelmingly a water problem. Natural fibres like cotton, linen, and silk absorb moisture, swell, and then contract as they dry — this is the same mechanism that turns a cotton shirt into a smaller version of itself. By using a solvent-based dry-cleaning process with zero water, we remove the shrinkage risk entirely. In 15 years and over 5,000 clients, our no-shrinkage guarantee has never been breached.",
      },
      {
        type: "heading",
        level: 2,
        text: "What you can do between professional cleans",
      },
      {
        type: "paragraph",
        text: "Between professional visits, the most important thing you can do is weekly vacuuming with an upholstery attachment. Use low suction on delicate sheers and a soft brush head on heavier drapes. Avoid steam cleaning curtains at home — steam introduces moisture into fibres not designed to handle it, and the resulting tide marks and shrinkage are costly to reverse.",
      },
      {
        type: "paragraph",
        text: "If you would like a free on-site assessment, our team covers all of Johannesburg including Sandton, Randburg, Fourways, Roodepoort, and Pretoria. Book through our contact form or WhatsApp +27 75 011 9200 and Stephen Dunlop will personally scope your curtains before any work begins.",
      },
    ],
  },
  {
    slug: "can-curtains-shrink-when-washed",
    title: "Can Curtains Shrink When Washed? The Science Explained",
    excerpt:
      "Curtain shrinkage is not a myth — it is a predictable physical reaction between water, heat, and natural fibres. Here is exactly why curtains shrink, by how much, and how to prevent it.",
    category: "Fabric Science",
    date: "2026-06-10",
    readTime: "7 min read",
    author: {
      name: "Stephen Dunlop",
      title: "Managing Director, JHB Curtain Cleaning",
    },
    heroTag: "No-Shrinkage Guarantee",
    keywords: [
      "do curtains shrink when washed",
      "curtain shrinkage science",
      "why curtains shrink",
      "how much do curtains shrink",
    ],
    content: [
      {
        type: "paragraph",
        text: "Yes — curtains can absolutely shrink when washed, and the shrinkage is often permanent. We have seen cotton drapes shrink by up to 12% in a single wash cycle, which on a 2.4-metre drop means losing nearly 30 centimetres of length. To understand why this happens, you have to look at the physics of natural fibres and the chemistry of water absorption.",
      },
      {
        type: "heading",
        level: 2,
        text: "The three mechanisms of curtain shrinkage",
      },
      {
        type: "heading",
        level: 3,
        text: "1. Relaxation shrinkage",
      },
      {
        type: "paragraph",
        text: "During manufacturing, fibres are stretched under tension to weave them into fabric. When that fabric finally meets water, the fibres relax back toward their natural state. This is called relaxation shrinkage and it accounts for 1–3% of total shrinkage in most cotton and linen curtains.",
      },
      {
        type: "heading",
        level: 3,
        text: "2. Hygral expansion and contraction",
      },
      {
        type: "paragraph",
        text: "Natural fibres absorb moisture from the air (hygral expansion) and release it when dried (hygral contraction). A wash cycle is the extreme version of this cycle. As the fabric absorbs water the fibres swell; as it dries — particularly in a tumble dryer — they contract beyond their original dimension. This contraction is permanent.",
      },
      {
        type: "heading",
        level: 3,
        text: "3. Thermal shrinkage",
      },
      {
        type: "paragraph",
        text: "Heat is the second accelerant. Washing at 60°C rather than 30°C can triple the shrinkage rate. Tumble drying compounds this because the drum tumbles the fabric while applying heat — exactly the conditions under which wool felts and cotton contracts. Silk and viscose are even more heat-sensitive.",
      },
      {
        type: "heading",
        level: 2,
        text: "Shrinkage risk by fabric type",
      },
      {
        type: "list",
        items: [
          "Cotton and linen: 5–12% shrinkage risk. Highest risk group.",
          "Silk and silk blends: 3–8% shrinkage risk. Also vulnerable to water marks and tide lines.",
          "Velvet and chenille: 4–10% shrinkage risk. Pile distortion is an additional concern.",
          "Blackout-lined curtains: 2–6% shrinkage risk on the face fabric, with secondary risk of thermal backing cracking.",
          "100% polyester: 1–3% shrinkage risk. Lower risk but holds odour and static.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "How we eliminate shrinkage entirely",
      },
      {
        type: "paragraph",
        text: "The only reliable way to clean curtains without shrinkage is to avoid introducing water in the first place. Our process uses solvent-based dry cleaning with zero moisture, which means none of the three shrinkage mechanisms can activate. The fabric never goes through a wet-dry cycle, so there is no contraction.",
      },
      {
        type: "paragraph",
        text: "We also pre-test every fabric before cleaning. A small, hidden section of curtain is tested for dye stability, fibre type, and any existing damage — only then does the full clean begin. This is why we have not breached our no-shrinkage guarantee in 15 years and over 5,000 jobs across Johannesburg.",
      },
      {
        type: "paragraph",
        text: "If you have a curtain that has already shrunk, do not throw it away. In many cases we can stretch and re-block the fabric on-site. Book a free assessment and we will tell you honestly whether the curtain is salvageable.",
      },
    ],
  },
  {
    slug: "on-site-vs-off-site-curtain-cleaning-johannesburg",
    title:
      "On-Site vs Off-Site Curtain Cleaning: What Johannesburg Residents Need to Know",
    excerpt:
      "Both methods can clean curtains, but only one respects your time, your fabric, and your hardware. Here is the Johannesburg-specific comparison every homeowner should read.",
    category: "Comparisons",
    date: "2026-06-05",
    readTime: "5 min read",
    author: {
      name: "Stephen Dunlop",
      title: "Managing Director, JHB Curtain Cleaning",
    },
    heroTag: "On-Site vs Off-Site",
    keywords: [
      "on-site vs off-site curtain cleaning",
      "curtain cleaning Johannesburg comparison",
      "should I take curtains down to clean",
      "in-home curtain cleaning",
    ],
    content: [
      {
        type: "paragraph",
        text: "Ask any Johannesburg homeowner who has tried off-site curtain cleaning and you will hear the same story: it took three weeks, two of the curtains shrank, and one of them came back with a small tear that no one would take responsibility for. On-site curtain cleaning was invented to solve exactly these problems. In this article we compare both methods honestly so you can make an informed choice.",
      },
      {
        type: "heading",
        level: 2,
        text: "Off-site curtain cleaning — how it works",
      },
      {
        type: "paragraph",
        text: "Off-site cleaning requires you (or the cleaner) to remove every curtain from its track, fold or roll it, transport it to a facility, machine-clean it, dry it, transport it back, and rehang it. The cleaning itself is usually a wet wash or a large-scale dry-cleaning machine. Turnaround time is 5 to 14 days. Cost is comparable to on-site, but the hidden cost is the disruption.",
      },
      {
        type: "heading",
        level: 2,
        text: "On-site curtain cleaning — how it works",
      },
      {
        type: "paragraph",
        text: "On-site cleaning is performed exactly where the curtain hangs. A technician brings portable dry-cleaning equipment into your home, protects the surrounding area, and cleans each curtain in place using solvent-based chemistry. The curtain never leaves the track, never folds in transit, and never meets water. Turnaround is the same day.",
      },
      {
        type: "heading",
        level: 2,
        text: "Side-by-side comparison",
      },
      {
        type: "list",
        items: [
          "Turnaround: Off-site 5–14 days vs On-site same day.",
          "Shrinkage risk: Off-site 3–12% vs On-site 0% (with solvent dry cleaning).",
          "Hardware inspection: Off-site rarely vs On-site always included.",
          "Rehanging effort: Off-site homeowner's responsibility vs On-site never required.",
          "Track repairs: Off-site not included vs On-site minor repairs at no extra cost.",
          "Suitability for delicate fabrics: Off-site low vs On-site high.",
          "Disruption to home: Off-site high (curtains missing for 2 weeks) vs On-site minimal.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Why Johannesburg homes specifically benefit",
      },
      {
        type: "paragraph",
        text: "Johannesburg's Highveld climate adds two factors that make on-site cleaning especially valuable. First, fine Highveld dust — particularly on the West Rand where mining heritage leaves residual mineral particles — settles deep into curtain fibres and is best removed with solvent extraction rather than water, which can set the dust into mud-like staining. Second, our afternoon thunderstorms and humidity swings make wet curtain transport a mildew risk if any moisture is retained in transit.",
      },
      {
        type: "paragraph",
        text: "There is one legitimate case where off-site makes sense: heavily soiled Persian or Oriental rugs that require immersion cleaning. For curtains, however, on-site is now the industry standard for any fabric that matters to you.",
      },
      {
        type: "paragraph",
        text: "If you would like to compare on-site and off-site quotes for your home, reach out to us with the number of curtain drops and the fabric type. We will give you an honest recommendation even if off-site turns out to be the better fit for your specific case.",
      },
    ],
  },
  {
    slug: "how-often-should-you-clean-your-curtains",
    title:
      "How Often Should You Clean Your Curtains? A Room-by-Room Guide",
    excerpt:
      "Curtain cleaning frequency depends on the room, the household, and the fabric. Here is the definitive Johannesburg room-by-room cleaning calendar based on 15 years of on-site work.",
    category: "How-To Guides",
    date: "2026-05-28",
    readTime: "6 min read",
    author: {
      name: "Stephen Dunlop",
      title: "Managing Director, JHB Curtain Cleaning",
    },
    heroTag: "Cleaning Frequency",
    keywords: [
      "how often to clean curtains",
      "curtain cleaning frequency",
      "how often should curtains be cleaned",
      "curtain care schedule",
    ],
    content: [
      {
        type: "paragraph",
        text: "Curtains are the largest piece of fabric in most rooms, which means they are also the largest dust and allergen trap. Yet most homeowners clean their curtains only when they visibly look dirty — by which point the fabric has been holding allergens for months. The right cleaning frequency depends on the room, who uses it, and the household's sensitivities. Here is the room-by-room guide we give every new JHB Curtain Cleaning client.",
      },
      {
        type: "heading",
        level: 2,
        text: "Living rooms and family rooms — every 9–12 months",
      },
      {
        type: "paragraph",
        text: "Living rooms see the most human and pet traffic. Open windows, cooking odours from adjacent kitchens, and daily dust all settle into curtain fibres. A 12-month cycle is the absolute minimum; 9 months is better if you have pets or anyone with allergies. Signs you are overdue include visible dust lines along the bottom hem and a faint musty smell on humid days.",
      },
      {
        type: "heading",
        level: 2,
        text: "Bedrooms — every 12 months",
      },
      {
        type: "paragraph",
        text: "Bedrooms generate significant dust mite populations. The average mattress absorbs 4.5kg of skin cells per year, and much of that becomes airborne and lands on curtains. Annual curtain cleaning is essential for respiratory health, particularly in children's rooms and primary bedrooms. Pair the curtain clean with a mattress sanitisation for full benefit.",
      },
      {
        type: "heading",
        level: 2,
        text: "Kitchens — every 6 months",
      },
      {
        type: "paragraph",
        text: "Kitchen curtains absorb cooking grease, steam, and food odours. The grease film actively damages fabric over time and creates a fire risk if it builds up. Six-monthly cleaning is non-negotiable here. If your kitchen curtain is near a hob, consider quarterly cleaning instead.",
      },
      {
        type: "heading",
        level: 2,
        text: "Bathrooms — every 6 months",
      },
      {
        type: "paragraph",
        text: "Bathroom curtains are exposed to constant moisture and soap residue. They are also a primary site for mildew growth. If your bathroom has poor ventilation, drop to quarterly cleaning and consider replacing fabric curtains with a washable synthetic that handles moisture better.",
      },
      {
        type: "heading",
        level: 2,
        text: "Hotels and guest rooms — quarterly or per guest turnover",
      },
      {
        type: "paragraph",
        text: "Hospitality operators should clean curtains at least quarterly, with spot cleaning between long-stay guests. For guesthouses and B&Bs in Johannesburg's hotel corridor (Sandton, Rosebank, Melrose), quarterly maintenance with our fire compliance certification covers both cleaning and SANS requirements in a single visit.",
      },
      {
        type: "heading",
        level: 2,
        text: "Households with allergies, asthma, or pets",
      },
      {
        type: "paragraph",
        text: "If anyone in the household has asthma, dust mite allergy, or pet allergy, halve every interval above. Curtains act as reservoirs for allergens; cleaning them regularly is one of the highest-leverage interventions you can make for indoor air quality.",
      },
      {
        type: "paragraph",
        text: "Book a free assessment and we will build you a customised curtain care calendar based on your home's rooms, fabrics, and household needs. Many clients combine this with annual mattress sanitisation for a complete allergen-control programme.",
      },
    ],
  },
  {
    slug: "fire-proofing-curtains-for-south-african-hotels-sans-compliance",
    title:
      "Fire Proofing Curtains for South African Hotels: SANS Compliance Guide",
    excerpt:
      "South African hotels, theatres, and healthcare facilities are legally required to maintain fire-treated soft furnishings. Here is the SANS compliance guide every GM and facilities manager should read.",
    category: "Compliance",
    date: "2026-05-20",
    readTime: "8 min read",
    author: {
      name: "Stephen Dunlop",
      title: "Managing Director, JHB Curtain Cleaning",
    },
    heroTag: "SANS Fire Compliance",
    keywords: [
      "SANS fire compliance curtains",
      "hotel fire proofing South Africa",
      "fire retardant curtains Johannesburg",
      "SANS 10400 curtain compliance",
    ],
    content: [
      {
        type: "paragraph",
        text: "Fire compliance is one of the most overlooked areas in South African hospitality operations. Soft furnishings — curtains, drapes, and stage fabrics — are required by SANS regulations to be treated with fire retardant and to carry valid compliance certificates. Insurance companies and fire inspectors are increasingly demanding proof of compliance, and the consequences of non-compliance range from policy invalidation to criminal liability. This guide walks through everything a hotel GM, facilities manager, or compliance officer needs to know.",
      },
      {
        type: "heading",
        level: 2,
        text: "What SANS compliance actually requires",
      },
      {
        type: "paragraph",
        text: "South African National Standards (SANS) — particularly SANS 10400 Part T (Fire Protection) and the relevant SABS fabric standards — require that combustible soft furnishings in commercial and public spaces be treated with an approved fire retardant. The treatment must be documented, certified, and re-applied on the schedule specified by the chemical manufacturer (typically every 12 to 36 months depending on traffic and cleaning frequency).",
      },
      {
        type: "heading",
        level: 2,
        text: "Which venues legally require fire-treated curtains",
      },
      {
        type: "list",
        items: [
          "Hotels, B&Bs, guesthouses, and backpackers — all guest rooms and public areas.",
          "Theatres, cinemas, and performance venues — particularly stage curtains and acoustic drapes.",
          "Healthcare facilities — hospitals, clinics, and care homes with patient-facing fabric.",
          "Schools, crèches, and universities — particularly assembly halls and dormitories.",
          "Corporate venues — conferencing centres, ballrooms, and event spaces with public foot traffic.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "The five-step fire proofing process",
      },
      {
        type: "list",
        items: [
          "Fabric inspection — identify fibre type and confirm compatibility with fire retardant chemistry.",
          "Pre-cleaning — remove dust, oils, and surface contaminants that would block retardant absorption.",
          "Application — apply SANS-approved fire retardant using fabric-specific equipment (spray, immersion, or fogging).",
          "Curing — allow full drying and bonding time before rehanging or reopening the room.",
          "Compliance certification — issue a stamped SANS compliance certificate valid for insurance and audit purposes.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Why fire proofing must be reapplied after every clean",
      },
      {
        type: "paragraph",
        text: "Fire retardant does not last forever. Every cleaning cycle removes a portion of the chemical barrier — wet cleaning removes it faster than dry cleaning, which is one of many reasons we recommend solvent dry cleaning for commercial venues. As a rule of thumb: if your curtains are cleaned four times a year, fire retardant should be re-applied at least annually. If they are cleaned twice a year, you may stretch to an 18-month cycle, but only with a valid re-test.",
      },
      {
        type: "heading",
        level: 2,
        text: "Insurance and liability implications",
      },
      {
        type: "paragraph",
        text: "Most hospitality insurance policies contain a clause invalidating cover where soft furnishings are not fire-treated to SANS standard. In the event of a fire, the burden of proof falls on the venue operator. Without a current compliance certificate, you may be personally liable for damages — even if the fire did not originate in the curtains themselves.",
      },
      {
        type: "paragraph",
        text: "We issue SANS compliance certificates with every fire proofing job and maintain a 7-year digital record that auditors and insurers can request at any time. For a free compliance audit of your venue, contact Stephen Dunlop directly on +27 75 011 9200 or email info@jhbcurtaincleaning.co.za.",
      },
    ],
  },
  {
    slug: "dust-mites-in-curtains-health-risks-and-professional-removal",
    title:
      "Dust Mites in Curtains: Health Risks and Professional Removal",
    excerpt:
      "Curtains are one of the largest dust mite habitats in your home. Here is what they do to your health, why vacuuming is not enough, and how professional extraction works.",
    category: "Health & Allergens",
    date: "2026-05-12",
    readTime: "7 min read",
    author: {
      name: "Stephen Dunlop",
      title: "Managing Director, JHB Curtain Cleaning",
    },
    heroTag: "Allergen Removal",
    keywords: [
      "dust mites in curtains",
      "curtain dust mite removal",
      "allergen cleaning curtains",
      "asthma curtain cleaning Johannesburg",
    ],
    content: [
      {
        type: "paragraph",
        text: "The average Johannesburg home hosts between one and two million dust mites, and a significant portion of them live in your curtains. Curtains offer dust mites everything they need: warmth, humidity, retained skin cells to feed on, and a fabric structure that protects them from light and air movement. This guide explains the health risks, why home vacuuming is not enough, and how professional allergen extraction works.",
      },
      {
        type: "heading",
        level: 2,
        text: "What dust mites actually do to your health",
      },
      {
        type: "paragraph",
        text: "Dust mites themselves are not directly harmful — they do not bite and they do not spread disease. The problem is their waste. Each mite produces around 20 faecal pellets per day, and these pellets contain a protein (Der p 1) that is one of the most common indoor allergens in the world. Inhaled Der p 1 triggers asthma attacks, allergic rhinitis, eczema flare-ups, and chronic sinus inflammation.",
      },
      {
        type: "heading",
        level: 2,
        text: "Symptoms of curtain-borne dust mite allergy",
      },
      {
        type: "list",
        items: [
          "Morning congestion, sneezing, or runny nose that improves when you leave the house.",
          "Worsening asthma symptoms at night, particularly in bedrooms with fabric curtains.",
          "Itchy, watery eyes in rooms with heavy drapes.",
          "Persistent cough, particularly in children.",
          "Eczema flare-ups that correlate with being in a specific room.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Why vacuuming is not enough",
      },
      {
        type: "paragraph",
        text: "Domestic vacuum cleaners — even those with HEPA filters — cannot extract dust mites from curtain fabric. The mites grip fibres with microscopic hooks, and their faecal pellets are small enough to embed deep within the weave. Vacuuming the surface removes loose dust but leaves 70–80% of the allergen load intact. Worse, the suction can actually disperse fine allergen particles into the air, where they remain airborne for up to two hours.",
      },
      {
        type: "heading",
        level: 2,
        text: "How professional allergen extraction works",
      },
      {
        type: "paragraph",
        text: "Our process combines solvent-based dry cleaning with mechanical agitation. The solvent breaks down the protein structure of the allergen (denaturing Der p 1 so it can no longer trigger an immune response), while specialised extraction equipment pulls the denatured allergen out of the fabric entirely. The curtain stays hanging throughout, and there is no wet-dry cycle to worry about. We can also apply a hypoallergenic surface treatment that inhibits future mite colonisation for up to 6 months.",
      },
      {
        type: "heading",
        level: 2,
        text: "Pairing curtain cleaning with mattress sanitisation",
      },
      {
        type: "paragraph",
        text: "If allergen control is your priority, do not stop at curtains. The average mattress absorbs 4.5kg of skin cells per year and hosts up to 10 million dust mites. Our combined curtain-and-mattress sanitisation package delivers measurable indoor air quality improvements within 48 hours and is particularly recommended for households with asthma sufferers, infants, or elderly residents.",
      },
      {
        type: "paragraph",
        text: "Book a free allergen assessment and we will measure dust mite load in your curtains and mattresses using a handheld particle counter. You will receive a written report and a recommended treatment plan before any work begins. Call +27 75 011 9200 or WhatsApp us to schedule a visit anywhere in Johannesburg, Pretoria, or Midrand.",
      },
    ],
  },
];

/* ── Helper functions for blog post retrieval ────────────────── */

export function getAllBlogPosts(): BlogPost[] {
  return BLOG_POSTS;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.slug !== currentSlug).slice(0, limit);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((post) => post.slug);
}
