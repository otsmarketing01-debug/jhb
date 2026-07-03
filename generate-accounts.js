// ============================================================================
//  Accounts & Credentials Reference — JHB Curtain Cleaning
//  Generates a professional DOCX following the docx skill (R1 cover recipe).
// ============================================================================

const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell,
  WidthType, AlignmentType, BorderStyle, ShadingType, TableOfContents,
  PageBreak, Footer, Header, PageNumber, NumberFormat, SectionType,
  TableLayoutType, VerticalAlign, HeightRule,
} = require("docx");
const fs = require("fs");

// ─── Brand Palette (Emerald + Bronze) ─────────────────────────────────────
const BRAND = {
  bg:           "064e3b",   // Emerald (primary cover background)
  accent:       "a87d43",   // Bronze
  titleColor:   "FFFFFF",
  subtitleColor:"E5D9C2",
  metaColor:    "D4E5DD",
  footerColor:  "B5C8BF",
  primary:      "064e3b",
  body:         "1A1A1A",
  secondary:    "555555",
  surface:      "F2EFE8",   // very light bronze tint
  warningBg:    "FFF4E5",   // light amber for warning callouts
  warningBorder:"A87D43",
  warningText:  "7A4A12",
  headerBg:     "064e3b",   // table header emerald
  headerText:   "FFFFFF",
  zebra:        "F7F5EF",   // very light bronze tint for zebra rows
  innerLine:    "D8D2C2",
};

const c = (hex) => hex.replace("#", "");

// ─── Borders ───────────────────────────────────────────────────────────────
const NB = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const noBorders = { top: NB, bottom: NB, left: NB, right: NB };
const allNoBorders = {
  top: NB, bottom: NB, left: NB, right: NB,
  insideHorizontal: NB, insideVertical: NB,
};

// Table cell border (thin bronze)
const cellBorder = (color = BRAND.innerLine) => ({
  top:    { style: BorderStyle.SINGLE, size: 4, color },
  bottom: { style: BorderStyle.SINGLE, size: 4, color },
  left:   { style: BorderStyle.SINGLE, size: 4, color },
  right:  { style: BorderStyle.SINGLE, size: 4, color },
});

// ============================================================================
//  COVER PAGE — Recipe R1 (Pure Paragraph Cover, Left-Aligned)
//  Adapted from design-system.md buildCoverR1 with Emerald/Bronze palette.
// ============================================================================
function buildCover() {
  const padL = 1200, padR = 800;
  const accentLeft = { style: BorderStyle.SINGLE, size: 8, color: BRAND.accent, space: 12 };
  const children = [];

  // 1. Top whitespace
  children.push(new Paragraph({ spacing: { before: 3200 }, children: [] }));

  // 2. English label with accent bottom border
  children.push(new Paragraph({
    indent: { left: padL, right: padR },
    spacing: { after: 480 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: BRAND.accent, space: 8 } },
    children: [new TextRun({
      text: "C O N F I D E N T I A L   ·   I N T E R N A L",
      size: 18, color: BRAND.accent, bold: true,
      font: { ascii: "Calibri", eastAsia: "SimHei" },
      characterSpacing: 40,
    })],
  }));

  // 3. Main title (split into 2 lines at semantic boundary)
  const titleLines = ["Accounts & Credentials", "Reference"];
  for (let i = 0; i < titleLines.length; i++) {
    children.push(new Paragraph({
      indent: { left: padL },
      spacing: {
        after: i < titleLines.length - 1 ? 120 : 320,
        line: Math.ceil(36 * 23),
        lineRule: "atLeast",
      },
      children: [new TextRun({
        text: titleLines[i], size: 72, bold: true,
        color: BRAND.titleColor,
        font: { eastAsia: "SimHei", ascii: "Arial" },
      })],
    }));
  }

  // 4. Subtitle
  children.push(new Paragraph({
    indent: { left: padL },
    spacing: { after: 800 },
    children: [new TextRun({
      text: "JHB Curtain Cleaning  —  Digital Infrastructure",
      size: 26, color: BRAND.subtitleColor,
      font: { eastAsia: "Microsoft YaHei", ascii: "Arial" },
    })],
  }));

  // 5. Meta info lines with left accent border
  const metaLines = [
    "Version 1.0   ·   June 2026",
    "Classification: CONFIDENTIAL — Store Securely",
    "Prepared by: Z.ai Development Team",
  ];
  for (const line of metaLines) {
    children.push(new Paragraph({
      indent: { left: padL + 200 },
      spacing: { after: 120 },
      border: { left: accentLeft },
      children: [new TextRun({
        text: line, size: 24, color: BRAND.metaColor,
        font: { eastAsia: "Microsoft YaHei", ascii: "Arial" },
      })],
    }));
  }

  // 6. Bottom whitespace
  children.push(new Paragraph({ spacing: { before: 3800 }, children: [] }));

  // 7. Footer with top accent separator
  children.push(new Paragraph({
    indent: { left: padL, right: padR },
    border: { top: { style: BorderStyle.SINGLE, size: 2, color: BRAND.accent, space: 8 } },
    spacing: { before: 200 },
    children: [
      new TextRun({
        text: "Z.ai Development Team",
        size: 16, color: BRAND.footerColor, font: { ascii: "Arial" },
      }),
      new TextRun({ text: "                                                                                          " }),
      new TextRun({
        text: "jhbcurtaincleaning.co.za",
        size: 16, color: BRAND.footerColor, font: { ascii: "Arial" },
      }),
    ],
  }));

  // Single 16838 wrapper table — the ONLY table on cover
  return [new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    layout: TableLayoutType.FIXED,
    borders: allNoBorders,
    rows: [new TableRow({
      height: { value: 16838, rule: HeightRule.EXACT },
      children: [new TableCell({
        shading: { type: ShadingType.CLEAR, fill: BRAND.bg, color: "auto" },
        borders: noBorders,
        children,
      })],
    })],
  })];
}

// ============================================================================
//  REUSABLE COMPONENTS
// ============================================================================
function heading1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 480, after: 240, line: 312 },
    children: [new TextRun({
      text, bold: true, size: 32, color: c(BRAND.primary),
      font: { ascii: "Calibri", eastAsia: "SimHei" },
    })],
  });
}

function heading2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 320, after: 160, line: 312 },
    children: [new TextRun({
      text, bold: true, size: 28, color: c(BRAND.accent),
      font: { ascii: "Calibri", eastAsia: "SimHei" },
    })],
  });
}

function heading3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 240, after: 120, line: 312 },
    children: [new TextRun({
      text, bold: true, size: 24, color: c(BRAND.body),
      font: { ascii: "Calibri", eastAsia: "SimHei" },
    })],
  });
}

function body(text, opts = {}) {
  return new Paragraph({
    alignment: AlignmentType.JUSTIFIED,
    spacing: { after: 160, line: 312 },
    children: [new TextRun({
      text, size: 22, color: c(BRAND.body),
      bold: opts.bold || false,
      italics: opts.italics || false,
      font: { ascii: "Calibri", eastAsia: "SimSun" },
    })],
  });
}

function bodyRich(runs, opts = {}) {
  return new Paragraph({
    alignment: opts.align || AlignmentType.JUSTIFIED,
    spacing: { after: 160, line: 312 },
    children: runs,
  });
}

function bullet(text, level = 0) {
  return new Paragraph({
    bullet: { level },
    spacing: { after: 80, line: 300 },
    children: [new TextRun({
      text, size: 22, color: c(BRAND.body),
      font: { ascii: "Calibri", eastAsia: "SimSun" },
    })],
  });
}

function bulletRich(runs, level = 0) {
  return new Paragraph({
    bullet: { level },
    spacing: { after: 80, line: 300 },
    children: runs,
  });
}

function emptyLine() {
  return new Paragraph({ spacing: { after: 80 }, children: [] });
}

// Warning callout — a shaded amber box with bronze border
function warningCallout(title, lines) {
  const titleRun = new Paragraph({
    spacing: { after: 100, line: 312 },
    children: [
      new TextRun({
        text: "⚠  " + title,
        bold: true, size: 24, color: c(BRAND.warningText),
        font: { ascii: "Calibri", eastAsia: "SimHei" },
      }),
    ],
  });
  const lineParas = lines.map((line) =>
    new Paragraph({
      spacing: { after: 60, line: 312 },
      children: [new TextRun({
        text: line, size: 22, color: c(BRAND.warningText),
        font: { ascii: "Calibri", eastAsia: "SimSun" },
      })],
    })
  );
  // Wrap inside a single-cell borderless table with shading + bronze border
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    layout: TableLayoutType.FIXED,
    borders: {
      top:    { style: BorderStyle.SINGLE, size: 12, color: BRAND.warningBorder },
      bottom: { style: BorderStyle.SINGLE, size: 4,  color: BRAND.warningBorder },
      left:   { style: BorderStyle.SINGLE, size: 12, color: BRAND.warningBorder },
      right:  { style: BorderStyle.SINGLE, size: 4,  color: BRAND.warningBorder },
      insideHorizontal: NB, insideVertical: NB,
    },
    rows: [new TableRow({
      cantSplit: true,
      children: [new TableCell({
        shading: { type: ShadingType.CLEAR, fill: BRAND.warningBg, color: "auto" },
        margins: { top: 200, bottom: 200, left: 300, right: 300 },
        children: [titleRun, ...lineParas],
      })],
    })],
  });
}

// Build a header cell
function headerCell(text, widthPct) {
  return new TableCell({
    width: { size: widthPct, type: WidthType.PERCENTAGE },
    shading: { type: ShadingType.CLEAR, fill: BRAND.headerBg, color: "auto" },
    margins: { top: 100, bottom: 100, left: 120, right: 120 },
    borders: cellBorder(BRAND.headerBg),
    children: [new Paragraph({
      alignment: AlignmentType.LEFT,
      spacing: { line: 280 },
      children: [new TextRun({
        text, bold: true, size: 22, color: BRAND.headerText,
        font: { ascii: "Calibri", eastAsia: "SimHei" },
      })],
    })],
  });
}

// Build a body cell with zebra striping
function bodyCell(text, widthPct, rowIdx, opts = {}) {
  const isZebra = rowIdx % 2 === 1;
  const fill = isZebra ? BRAND.zebra : "FFFFFF";
  const runs = Array.isArray(text)
    ? text
    : [new TextRun({
        text: String(text), size: 21, color: c(BRAND.body),
        bold: opts.bold || false,
        font: { ascii: "Calibri", eastAsia: "SimSun" },
      })];
  return new TableCell({
    width: { size: widthPct, type: WidthType.PERCENTAGE },
    shading: { type: ShadingType.CLEAR, fill, color: "auto" },
    margins: { top: 90, bottom: 90, left: 120, right: 120 },
    borders: cellBorder(),
    children: [new Paragraph({
      alignment: opts.align || AlignmentType.LEFT,
      spacing: { line: 280 },
      children: runs,
    })],
  });
}

// Build a complete table from a 2D array
function makeTable(headers, rows, widths) {
  // widths: array of percentages summing to 100. Default: equal.
  const colCount = headers.length;
  const w = widths && widths.length === colCount
    ? widths
    : Array(colCount).fill(Math.floor(100 / colCount));

  const headerRow = new TableRow({
    tableHeader: true,
    cantSplit: true,
    children: headers.map((h, i) => headerCell(h, w[i])),
  });

  const bodyRows = rows.map((row, rIdx) =>
    new TableRow({
      cantSplit: true,
      children: row.map((cell, cIdx) => {
        if (cell && typeof cell === "object" && cell.__rich) {
          return bodyCell(cell.runs, w[cIdx], rIdx, cell.opts || {});
        }
        return bodyCell(cell, w[cIdx], rIdx, {});
      }),
    })
  );

  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    layout: TableLayoutType.FIXED,
    borders: {
      top:    { style: BorderStyle.SINGLE, size: 4, color: BRAND.primary },
      bottom: { style: BorderStyle.SINGLE, size: 4, color: BRAND.primary },
      left:   { style: BorderStyle.SINGLE, size: 4, color: BRAND.innerLine },
      right:  { style: BorderStyle.SINGLE, size: 4, color: BRAND.innerLine },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 4, color: BRAND.innerLine },
      insideVertical:   { style: BorderStyle.SINGLE, size: 4, color: BRAND.innerLine },
    },
    rows: [headerRow, ...bodyRows],
  });
}

// Helper to mark a cell as rich (multiple runs)
function rich(runs, opts = {}) {
  return { __rich: true, runs, opts };
}

// Inline bold run helper
function b(text, color) {
  return new TextRun({
    text, bold: true, size: 21,
    color: color ? c(color) : c(BRAND.body),
    font: { ascii: "Calibri", eastAsia: "SimSun" },
  });
}
function t(text, color) {
  return new TextRun({
    text, size: 21,
    color: color ? c(color) : c(BRAND.body),
    font: { ascii: "Calibri", eastAsia: "SimSun" },
  });
}
function tmono(text) {
  return new TextRun({
    text, size: 20,
    color: c(BRAND.body),
    font: { ascii: "Consolas", eastAsia: "SimSun" },
  });
}

// ============================================================================
//  FRONT MATTER — Table of Contents
// ============================================================================
function buildTOC() {
  return [
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 480, after: 360 },
      children: [new TextRun({
        text: "Table of Contents",
        bold: true, size: 36, color: c(BRAND.primary),
        font: { ascii: "Calibri", eastAsia: "SimHei" },
      })],
    }),
    new TableOfContents("Table of Contents", {
      hyperlink: true,
      headingStyleRange: "1-3",
    }),
    new Paragraph({
      spacing: { before: 200 },
      children: [new TextRun({
        text: "Note: This Table of Contents is generated via field codes. To ensure page-number accuracy after editing, right-click the TOC and select \"Update Field.\"",
        italics: true, size: 18, color: "888888",
        font: { ascii: "Calibri", eastAsia: "SimSun" },
      })],
    }),
    new Paragraph({ children: [new PageBreak()] }),
  ];
}

// ============================================================================
//  BODY SECTIONS
// ============================================================================

// ─── Section 1: Executive Summary ─────────────────────────────────────────
function section1() {
  return [
    heading1("1. Executive Summary"),
    body(
      "This document is the single source of truth for all digital accounts, credentials, and access points supporting the JHB Curtain Cleaning website project. It consolidates domain registration, source-code repository, deployment platform, AI services, social media presence, and email infrastructure into one auditable reference. Every URL, identifier, and partial token recorded here corresponds to a live, production system and must be treated as confidential business information."
    ),
    body(
      "The document is organised by infrastructure layer: domain name system (Section 2), source code (Section 3), hosting and deployment (Section 4), email (Section 5), AI integration (Section 6), social channels (Section 7), canonical business NAP (Section 8), security best practices (Section 9), and emergency recovery procedures (Section 10). A revision-history table closes the document so future updates can be tracked."
    ),
    warningCallout("CRITICAL SECURITY WARNING", [
      "This document contains sensitive credentials, including GitHub Personal Access Tokens (PAT) and a Vercel deployment token. Although only partial token values are printed (sufficient for identification, not for authentication), the document itself is highly sensitive.",
      "Store this document securely — encrypted at rest, access limited to authorised personnel only. Never share credentials via email, chat, or unencrypted channels. If any credential is suspected to be compromised, rotate it immediately and update this document.",
    ]),
    emptyLine(),
  ];
}

// ─── Section 2: Domain Registration ───────────────────────────────────────
function section2() {
  return [
    heading1("2. Domain Registration — domains.co.za"),
    body(
      "The jhbcurtaincleaning.co.za domain is the public-facing address of the website and the email namespace for the business. It is registered with Domains.co.za and currently points to Vercel for web hosting and to the Domains.co.za mail platform for email. The configuration below was captured in June 2026 and reflects the live DNS state."
    ),

    heading2("2.1 Registration Details"),
    makeTable(
      ["Field", "Value"],
      [
        ["Registrar", "Domains.co.za"],
        ["Registrar URL", "https://domains.co.za"],
        ["Domain Name", "jhbcurtaincleaning.co.za"],
        ["Registration Date", "2026-06-16"],
        ["Expiry Date", "~2027-06-16 (12.43 months from June 2026)"],
        ["Auto-Renew", "Enabled"],
        ["Lock Status", "Unlocked"],
        ["DNSSEC", "Disabled"],
        ["Domain Status", "Active"],
      ],
      [30, 70]
    ),
    emptyLine(),

    heading2("2.2 Nameservers"),
    makeTable(
      ["Server", "Value"],
      [
        ["NS1", "ns1.tld-ns.net"],
        ["NS2", "ns2.tld-ns.com"],
        ["NS3", "ns3.tld-ns.net"],
        ["NS4", "ns4.tld-ns.com"],
      ],
      [30, 70]
    ),
    emptyLine(),

    heading2("2.3 DNS Records (Current Configuration)"),
    makeTable(
      ["Host", "Type", "Value", "Purpose"],
      [
        ["jhbcurtaincleaning.co.za", "A", "76.76.21.21", "Website (Vercel)"],
        ["www.jhbcurtaincleaning.co.za", "CNAME", "cname.vercel-dns.com", "WWW redirect (Vercel)"],
        ["mail.jhbcurtaincleaning.co.za", "A", "169.239.218.74", "Email server"],
        ["jhbcurtaincleaning.co.za", "MX", "mx1.tld-mx.com (priority 10)", "Email routing"],
        ["jhbcurtaincleaning.co.za", "TXT", "v=spf1 +a:mail.jhbcurtaincleaning.co.za +mx include:_spf.tld-mx.com ~all", "SPF (email auth)"],
        ["default._domainkey.jhbcurtaincleaning.co.za", "TXT", "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG...", "DKIM (email signing)"],
        ["_dmarc.jhbcurtaincleaning.co.za", "TXT", "v=DMARC1; p=none;", "DMARC (email policy)"],
        ["cpcalendars, cpcontacts, imap, pop, smtp, webmail", "CNAME", "mail.jhbcurtaincleaning.co.za", "Email subdomains"],
      ],
      [28, 8, 36, 28]
    ),
    emptyLine(),

    heading2("2.4 Login Access"),
    bullet("Login URL: https://domains.co.za/clientarea.php"),
    bullet("Username: 【USER TO FILL IN】"),
    bullet("Password: 【USER TO FILL IN — store in password manager】"),
    emptyLine(),
  ];
}

// ─── Section 3: GitHub Repository ─────────────────────────────────────────
function section3() {
  return [
    heading1("3. GitHub Repository"),
    body(
      "Source code for the JHB Curtain Cleaning website lives in a public GitHub repository under the otsmarketing01-debug account. Every push to the main branch automatically triggers a production deployment on Vercel (see Section 4), so repository access equates to deployment access. Treat write access to this repository as equivalent to write access to the live website."
    ),

    heading2("3.1 Repository Details"),
    makeTable(
      ["Field", "Value"],
      [
        ["Platform", "GitHub"],
        ["Repository URL", "https://github.com/otsmarketing01-debug/jhb"],
        ["Owner", "otsmarketing01-debug"],
        ["Repository Name", "jhb"],
        ["Visibility", "Public"],
        ["Default Branch", "main"],
        ["Auto-Deploy", "Enabled (triggers Vercel on push)"],
        ["Repo ID", "1287130539"],
      ],
      [35, 65]
    ),
    emptyLine(),

    heading2("3.2 Personal Access Tokens (PAT)"),
    warningCallout("SECURITY WARNING", [
      "These tokens grant full access to the GitHub account. Treat them like passwords. Store only in a password manager; never paste into chat, screenshots, or commit messages.",
      "Rotate every 90 days. Revoke immediately if suspected of being exposed.",
    ]),
    emptyLine(),
    makeTable(
      ["Token Owner", "Scope", "Token (Partial)", "Purpose"],
      [
        ["otsmarketing01-debug", "repo (classic)", "ghp_odgBmrWvYRaLE...", "Project push / deploy"],
        ["luxrugcare-cmyk", "repo (classic)", "ghp_O1L74I69SLMYB3...", "Secondary access"],
      ],
      [25, 22, 28, 25]
    ),
    emptyLine(),

    heading2("3.3 Login Access"),
    bullet("Login URL: https://github.com/login"),
    bullet("Username: otsmarketing01-debug"),
    bullet("Password: 【USER TO FILL IN — store in password manager】"),
    bullet("2FA: 【USER TO CONFIRM — recommended enabled】"),
    emptyLine(),

    heading2("3.4 Repository Structure"),
    bullet("Main codebase: Next.js 16 + TypeScript 5 + Tailwind CSS 4"),
    bullet("19 routes (1 homepage + 6 services + 6 sectors + 6 areas)"),
    bullet("3 API endpoints (chat, contact, newsletter)"),
    bullet("Auto-deploys to Vercel on every push to main"),
    emptyLine(),
  ];
}

// ─── Section 4: Vercel Deployment ─────────────────────────────────────────
function section4() {
  return [
    heading1("4. Vercel Deployment"),
    body(
      "The website is hosted on Vercel under the otsmarketing01-2742's projects team. Vercel auto-detects the Next.js framework, builds on every git push to main, and serves the production build from its global edge network. Both the apex domain (jhbcurtaincleaning.co.za) and the www subdomain are attached to this Vercel project, with the apex serving production traffic and www issuing a 308 redirect to the apex."
    ),

    heading2("4.1 Project Details"),
    makeTable(
      ["Field", "Value"],
      [
        ["Platform", "Vercel"],
        ["Dashboard URL", "https://vercel.com/otsmarketing01-2742s-projects"],
        ["Project Name", "jhb-curtain-cleaning"],
        ["Project ID", "prj_E0lZ4Z1q9ev1fCgtMJfErqktPRGB"],
        ["Framework", "Next.js 16 (auto-detected)"],
        ["Plan", "Hobby (Free)"],
        ["Region", "iad1 (Washington DC)"],
        ["Auto-Deploy", "Enabled (on git push to main)"],
        ["Production URL", "https://jhbcurtaincleaning.co.za"],
        ["Vercel Subdomain", "https://jhb-curtain-cleaning.vercel.app"],
      ],
      [32, 68]
    ),
    emptyLine(),

    heading2("4.2 Deployment URLs"),
    makeTable(
      ["URL", "Type"],
      [
        ["https://jhbcurtaincleaning.co.za", "Production (custom domain)"],
        ["https://www.jhbcurtaincleaning.co.za", "Redirects to production (308)"],
        ["https://jhb-curtain-cleaning.vercel.app", "Vercel subdomain (backup)"],
        ["https://jhb-curtain-cleaning-otsmarketing01-2742s-projects.vercel.app", "Project URL"],
        ["https://jhb-curtain-cleaning-git-main-otsmarketing01-2742s-projects.vercel.app", "Branch URL"],
      ],
      [62, 38]
    ),
    emptyLine(),

    heading2("4.3 Vercel Access Token"),
    warningCallout("SECURITY WARNING", [
      "This token grants full account access. Revoke immediately if compromised.",
      "Rotate every 90 days via the Vercel dashboard and update this document with the new partial value.",
    ]),
    emptyLine(),
    makeTable(
      ["Field", "Value"],
      [
        ["Token Name", "deploy-token"],
        ["Token (Partial)", "vcp_5MVSAcO4tNv5quC0..."],
        ["Scope", "Full Account"],
        ["Created", "June 2026"],
        ["Management URL", "https://vercel.com/account/tokens"],
      ],
      [32, 68]
    ),
    emptyLine(),

    heading2("4.4 Login Access"),
    bullet("Login URL: https://vercel.com/login"),
    bullet("Login Method: Continue with GitHub"),
    bullet("GitHub Account: otsmarketing01-debug"),
    bullet("Team Name: otsmarketing01-2742's projects"),
    emptyLine(),

    heading2("4.5 SSL Certificate"),
    bullet("Provider: Let's Encrypt (via Vercel)"),
    bullet("Auto-renewal: Enabled (free, automatic)"),
    bullet("Current cert valid: 3 July 2026 → 1 October 2026"),
    emptyLine(),

    heading2("4.6 Security Headers Applied"),
    bullet("strict-transport-security: max-age=31536000; includeSubDomains; preload"),
    bullet("x-frame-options: DENY"),
    bullet("x-content-type-options: nosniff"),
    bullet("referrer-policy: origin-when-cross-origin"),
    bullet("x-dns-prefetch-control: on"),
    bullet("permissions-policy: camera=(), microphone=(), geolocation=()"),
    emptyLine(),
  ];
}

// ─── Section 5: Email Infrastructure ──────────────────────────────────────
function section5() {
  return [
    heading1("5. Email Infrastructure"),
    body(
      "Email for jhbcurtaincleaning.co.za is hosted on the Domains.co.za mail platform (tld-mx.com). The primary mailbox is info@jhbcurtaincleaning.co.za, accessible via webmail or via IMAP/POP3/SMTP using the mail.jhbcurtaincleaning.co.za host. SPF, DKIM, and DMARC records are all active, providing email authentication that protects both deliverability and brand reputation."
    ),

    heading2("5.1 Email Provider Details"),
    makeTable(
      ["Field", "Value"],
      [
        ["Email Provider", "Domains.co.za (tld-mx.com)"],
        ["Primary Email", "info@jhbcurtaincleaning.co.za"],
        ["Mail Server", "mail.jhbcurtaincleaning.co.za (169.239.218.74)"],
        ["MX Record", "mx1.tld-mx.com (priority 10)"],
        ["Webmail URL", "https://webmail.jhbcurtaincleaning.co.za"],
      ],
      [32, 68]
    ),
    emptyLine(),

    heading2("5.2 Email Protocols"),
    makeTable(
      ["Protocol", "Host", "Port"],
      [
        ["IMAP", "imap.jhbcurtaincleaning.co.za", "993 (SSL)"],
        ["POP3", "pop.jhbcurtaincleaning.co.za", "995 (SSL)"],
        ["SMTP", "smtp.jhbcurtaincleaning.co.za", "465 (SSL)"],
        ["Webmail", "webmail.jhbcurtaincleaning.co.za", "443 (HTTPS)"],
      ],
      [22, 48, 30]
    ),
    emptyLine(),

    heading2("5.3 Email Authentication"),
    makeTable(
      ["Method", "Status", "Record"],
      [
        ["SPF", "✅ Active", "v=spf1 +a:mail.jhbcurtaincleaning.co.za +mx include:_spf.tld-mx.com ~all"],
        ["DKIM", "✅ Active", "default._domainkey (RSA 2048-bit)"],
        ["DMARC", "✅ Active (monitoring)", "v=DMARC1; p=none;"],
      ],
      [16, 28, 56]
    ),
    emptyLine(),

    heading2("5.4 Login Access"),
    bullet("Webmail: https://webmail.jhbcurtaincleaning.co.za"),
    bullet("Email: info@jhbcurtaincleaning.co.za"),
    bullet("Password: 【USER TO FILL IN — store in password manager】"),
    emptyLine(),
  ];
}

// ─── Section 6: AI Services Integration ───────────────────────────────────
function section6() {
  return [
    heading1("6. AI Services Integration"),
    body(
      "The website integrates the z-ai-web-dev-sdk (version 0.0.18) to power the floating AI chatbot in the bottom-right corner. The chatbot runs entirely server-side via Next.js API routes — the API key never ships to the browser. The system prompt is pre-loaded with the business name, services, pricing tiers, hours, and contact information so the chatbot can answer most customer questions without human intervention."
    ),

    heading2("6.1 SDK Configuration"),
    makeTable(
      ["Field", "Value"],
      [
        ["AI SDK", "z-ai-web-dev-sdk"],
        ["Version", "0.0.18"],
        ["Used In", "/api/chat (AI Chatbot)"],
        ["Environment", "Server-side only (Next.js API routes)"],
        ["API Key", "Configured in environment variables"],
        ["Features Used", "LLM Chat Completions"],
      ],
      [32, 68]
    ),
    emptyLine(),

    heading2("6.2 Available AI Skills (via z-ai-web-dev-sdk)"),
    bullet("LLM (Chat completions) — ✅ Active in chatbot"),
    bullet("VLM (Vision / Image understanding) — Available"),
    bullet("TTS (Text-to-Speech) — Available"),
    bullet("ASR (Speech-to-Text) — Available"),
    bullet("Image Generation — Available"),
    bullet("Video Generation — Available"),
    bullet("Web Search — Available"),
    bullet("Web Reading — Available"),
    emptyLine(),

    heading2("6.3 Chatbot Configuration"),
    bullet("Location: Floating button (bottom-right corner)"),
    bullet("API Endpoint: /api/chat"),
    bullet("System Prompt: Includes business name, services, pricing, hours, contact info"),
    bullet("Fallback: Displays phone number on error"),
    emptyLine(),
  ];
}

// ─── Section 7: Social Media Accounts ─────────────────────────────────────
function section7() {
  return [
    heading1("7. Social Media Accounts"),
    body(
      "The website footer is wired to seven social-media platforms. Where accounts already exist, the URLs below point to live profiles. Where accounts have not yet been claimed, the URLs represent the canonical handles to register so that the footer links resolve correctly once the accounts go live."
    ),

    heading2("7.1 Platform Matrix"),
    makeTable(
      ["Platform", "URL", "Handle"],
      [
        ["Facebook",  "https://facebook.com/jhbcurtaincleaning",   "@jhbcurtaincleaning"],
        ["Instagram", "https://instagram.com/jhbcurtaincleaning", "@jhbcurtaincleaning"],
        ["YouTube",   "https://youtube.com/@jhbcurtaincleaning",  "@jhbcurtaincleaning"],
        ["LinkedIn",  "https://linkedin.com/company/jhbcurtaincleaning", "jhbcurtaincleaning"],
        ["TikTok",    "https://tiktok.com/@jhbcurtaincleaning",   "@jhbcurtaincleaning"],
        ["Pinterest", "https://pinterest.com/jhbcurtaincleaning", "jhbcurtaincleaning"],
        ["Twitter / X", "https://twitter.com/jhbcurtaincleaning", "@jhbcurtaincleaning"],
      ],
      [22, 48, 30]
    ),
    emptyLine(),

    body(
      "Note: These URLs are configured in the website footer. Accounts may need to be created or claimed if not yet active."
    ),
    emptyLine(),
  ];
}

// ─── Section 8: Business NAP ──────────────────────────────────────────────
function section8() {
  return [
    heading1("8. Business NAP (Reference)"),
    body(
      "The canonical Name-Address-Phone (NAP) data for JHB Curtain Cleaning is recorded below. This is the authoritative version that should appear identically on the website, Google Business Profile, social-media profiles, directory listings, and any printed collateral. Consistency of NAP data across the web is a significant local-SEO ranking factor — never vary the formatting."
    ),

    heading2("8.1 Canonical NAP"),
    makeTable(
      ["Field", "Value"],
      [
        ["Business Name", "JHB CURTAIN CLEANING"],
        ["Short Name", "JHB Curtain Cleaning"],
        ["Contact Person", "Stephen Dunlop (Managing Director)"],
        ["Address", "10 2nd Ave, Florida, Roodepoort, 1710, South Africa"],
        ["Phone", "+27 75 011 9200"],
        ["Office Phone", "071 622 6723"],
        ["Email", "info@jhbcurtaincleaning.co.za"],
        ["Website", "https://www.jhbcurtaincleaning.co.za"],
        ["WhatsApp", "+27 75 011 9200"],
        ["Geo Coordinates", "-26.1752726, 27.9233293"],
        ["Hours", "Mon–Fri 07:00–18:00, Sat 08:00–14:00"],
        ["Founded", "2009"],
        ["Google Rating", "4.9 (500+ reviews)"],
      ],
      [28, 72]
    ),
    emptyLine(),
  ];
}

// ─── Section 9: Security Best Practices ───────────────────────────────────
function section9() {
  return [
    heading1("9. Security Best Practices"),
    body(
      "Token Rotation. Rotate the GitHub Personal Access Tokens and the Vercel deploy token every 90 days, even if no compromise is suspected. Never reuse tokens across services — each system should have its own named token with a clearly documented owner. If any token is exposed (committed to git, pasted in chat, leaked in a screenshot), revoke it immediately in the relevant dashboard and issue a replacement. Update this document with the new partial token value the same day."
    ),
    body(
      "Password Manager. All credentials in this document — registrar login, GitHub password, Vercel account email, webmail password, and any API keys not displayed here — must live in a password manager such as 1Password, Bitwarden, or LastPass. Never store credentials in plain-text files, email drafts, chat messages, sticky notes, or browser autofill on shared devices. The password manager vault itself must be protected by a strong master password and hardware-backed two-factor authentication."
    ),
    body(
      "Two-Factor Authentication. Enable 2FA on every account referenced in this document: GitHub, Vercel, domains.co.za, the info@jhbcurtaincleaning.co.za mailbox, and each social-media platform. Prefer authenticator-app second factors (Google Authenticator, Authy, Microsoft Authenticator) over SMS-based codes — SIM-swap attacks make SMS the weakest option. Generate and securely store backup recovery codes for every account; these are the only way back in if the second-factor device is lost."
    ),
    body(
      "Access Control. Limit who has access to this document. The GitHub PAT and Vercel token recorded here grant full account access — treat them like the keys to your business. Distribute this document on a need-to-know basis only, store the master copy in an encrypted location, and maintain a signed access log if more than two people require ongoing access. When a contractor or team member departs, rotate every credential they may have seen."
    ),
    body(
      "Backup. Keep a printed copy of this document in a secure physical location — a locked drawer or a fireproof safe — as an offline backup in case digital access is lost. Re-print whenever a credential is rotated so the paper copy stays current. The printed copy should be clearly labelled \"Confidential\" and stored separately from any device that holds the digital version, so that a single theft cannot compromise both representations."
    ),
    emptyLine(),
  ];
}

// ─── Section 10: Emergency Contacts & Recovery ────────────────────────────
function section10() {
  return [
    heading1("10. Emergency Contacts & Recovery"),
    body(
      "When something breaks, the table below maps the most common failure scenarios to the specific recovery procedure. Following the procedure in order — from least invasive (status check) to most invasive (token rotation) — minimises downtime and avoids unnecessary credential churn."
    ),

    heading2("10.1 Recovery Scenarios"),
    makeTable(
      ["Scenario", "Action"],
      [
        ["Website down", "Check https://www.vercel-status.com/ → if Vercel is up, check git push status → redeploy from Vercel dashboard"],
        ["Domain expired", "Log into domains.co.za → renew → verify auto-renew is enabled"],
        ["Email not working", "Check MX record at https://dnschecker.org/#MX/jhbcurtaincleaning.co.za → contact domains.co.za support"],
        ["SSL expired", "Vercel auto-renews — check Vercel dashboard → Domains → if issue, redeploy"],
        ["GitHub locked out", "Use backup email → contact GitHub support → have 2FA recovery codes ready"],
        ["Token compromised", "GitHub: Settings → Developer settings → Tokens → Revoke → Generate new. Vercel: Account → Tokens → Revoke → Generate new. Update this document."],
      ],
      [24, 76]
    ),
    emptyLine(),

    heading2("10.2 Support Contacts"),
    makeTable(
      ["Service", "URL", "Phone"],
      [
        ["Domains.co.za", "https://domains.co.za/support", "0861 DOMAINS (366 426)"],
        ["GitHub", "https://support.github.com", "—"],
        ["Vercel", "https://vercel.com/help", "—"],
      ],
      [22, 48, 30]
    ),
    emptyLine(),
  ];
}

// ─── Section 11: Document Revision History ────────────────────────────────
function section11() {
  return [
    heading1("11. Document Revision History"),
    body(
      "All material changes to this document — credential rotations,新增 accounts, configuration changes, or scope expansions — must be recorded in the table below. Each entry should reference the date, the author, and a brief description of what changed and why."
    ),
    makeTable(
      ["Version", "Date", "Author", "Changes"],
      [
        ["1.0", "June 2026", "Z.ai Development Team", "Initial document creation. Captured all accounts for JHB Curtain Cleaning website launch."],
      ],
      [12, 18, 28, 42]
    ),
    emptyLine(),
  ];
}

// ============================================================================
//  ASSEMBLE THE DOCUMENT
// ============================================================================
function pageFooter(romanize = false) {
  // Roman numerals (TOC), Arabic (body)
  return new Footer({
    children: [new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({
          children: [PageNumber.CURRENT],
          size: 18, color: "808080",
          font: { ascii: "Calibri", eastAsia: "SimSun" },
        }),
      ],
    })],
  });
}

function bodyHeader() {
  return new Header({
    children: [new Paragraph({
      alignment: AlignmentType.RIGHT,
      children: [new TextRun({
        text: "Accounts & Credentials Reference  ·  CONFIDENTIAL",
        size: 16, color: "808080", italics: true,
        font: { ascii: "Calibri", eastAsia: "SimSun" },
      })],
    })],
  });
}

const PAGE_SIZE = { width: 11906, height: 16838 };
const BODY_MARGIN = { top: 1440, bottom: 1440, left: 1701, right: 1417 };

const doc = new Document({
  creator: "Z.ai Development Team",
  title: "Accounts & Credentials Reference — JHB Curtain Cleaning",
  description: "Confidential reference of all digital accounts and credentials for the JHB Curtain Cleaning website.",
  styles: {
    default: {
      document: {
        run: {
          font: { ascii: "Calibri", eastAsia: "SimSun" },
          size: 22, color: c(BRAND.body),
        },
        paragraph: { spacing: { line: 312 } },
      },
      heading1: {
        run: {
          font: { ascii: "Calibri", eastAsia: "SimHei" },
          size: 32, bold: true, color: c(BRAND.primary),
        },
        paragraph: { spacing: { before: 480, after: 240, line: 312 }, outlineLevel: 0 },
      },
      heading2: {
        run: {
          font: { ascii: "Calibri", eastAsia: "SimHei" },
          size: 28, bold: true, color: c(BRAND.accent),
        },
        paragraph: { spacing: { before: 320, after: 160, line: 312 }, outlineLevel: 1 },
      },
      heading3: {
        run: {
          font: { ascii: "Calibri", eastAsia: "SimHei" },
          size: 24, bold: true, color: c(BRAND.body),
        },
        paragraph: { spacing: { before: 240, after: 120, line: 312 }, outlineLevel: 2 },
      },
    },
  },
  sections: [
    // ── Section 1: COVER ── no margins, no header/footer, no page number ──
    {
      properties: {
        page: {
          size: PAGE_SIZE,
          margin: { top: 0, bottom: 0, left: 0, right: 0 },
        },
      },
      children: buildCover(),
    },
    // ── Section 2: FRONT MATTER (TOC) — Roman numerals ──
    {
      properties: {
        type: SectionType.NEXT_PAGE,
        page: {
          size: PAGE_SIZE,
          margin: BODY_MARGIN,
          pageNumbers: { start: 1, formatType: NumberFormat.UPPER_ROMAN },
        },
      },
      footers: { default: pageFooter(true) },
      children: buildTOC(),
    },
    // ── Section 3: BODY — Arabic numerals, reset to 1 ──
    {
      properties: {
        type: SectionType.NEXT_PAGE,
        page: {
          size: PAGE_SIZE,
          margin: BODY_MARGIN,
          pageNumbers: { start: 1, formatType: NumberFormat.DECIMAL },
        },
      },
      headers: { default: bodyHeader() },
      footers: { default: pageFooter(false) },
      children: [
        ...section1(),
        ...section2(),
        ...section3(),
        ...section4(),
        ...section5(),
        ...section6(),
        ...section7(),
        ...section8(),
        ...section9(),
        ...section10(),
        ...section11(),
      ],
    },
  ],
});

(async () => {
  const buffer = await Packer.toBuffer(doc);
  const outPath = "/home/z/my-project/accounts-document.docx";
  fs.writeFileSync(outPath, buffer);
  console.log("✅ Document generated successfully!");
  console.log("   Output:", outPath);
  console.log("   Size:", (buffer.length / 1024).toFixed(1), "KB");
})().catch((err) => {
  console.error("Error generating document:", err);
  process.exit(1);
});
