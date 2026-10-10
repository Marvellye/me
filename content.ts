export const PROFILE = {
  name: "Ezekiel Marvellous Oghenemaga",
  shortName: "Marvelly",
  title: "Software Engineer",
  tagline: "I build software from architecture to production.",
  intro:
    "I'm Ezekiel Marvellous Oghenemaga, a software engineer building full-stack products, backend systems, and financial infrastructure. I work across the stack from data models and APIs to shipped interfaces and production deploys.",
  location: "Nigeria",
  email: "info@marvelly.com.ng",
  phone: "+234 810 059 5468",
  whatsapp: "https://wa.me/2348100595468",
  github: "https://github.com/Marvellye",
  linkedin: "https://linkedin.com/in/ezekiel-marvellous-oghenemaga/",
  twitter: "https://twitter.com/marvelly_ng",
  instagram: "https://instagram.com/marvelly_ng",
  portrait: "/portrait.jpg",
};

export type WorkItem = {
  name: string;
  role: string;
  kind: string;
  period: string;
  blurb: string;
  points: string[];
  live?: string;
  logo?: string;
};

/**
 * Single merged list: each entry is a role AND its project.
 * Newest / most important first.
 */
export const WORK: WorkItem[] = [
  {
    name: "Bitilda",
    logo: "/logos/bitilda.svg",
    role: "Co-founder & CTO",
    kind: "Co-founded product",
    period: "2026 — Present",
    blurb:
      "A crypto payments and wallet product for simpler digital-asset payments, on/off-ramp access, and multi-chain financial infrastructure.",
    points: [
      "Raised $3k.",
      "Wallet architecture, multi-chain accounts, Interledger transfers.",
    ],
    live: "https://www.bitilda.com",
  },
  {
    name: "TrackDeck",
    logo: "/logos/trackdeck.webp",
    role: "Co-founder (backend)",
    kind: "Co-founded product",
    period: "2024 — Present",
    blurb:
      "Backend implementation, architecture, system design, and secure database engineering — built from scratch.",
    points: ["Acquired by a logistics company."],
    live: "https://www.track-deck.com",
  },
  {
    name: "AlgoMap",
    logo: "/logos/algomap.svg",
    role: "Builder",
    kind: "Independent product",
    period: "2025 — Present",
    blurb:
      "A blockchain investigation platform for tracing money flows, mapping wallet relationships, and investigating suspicious activity on Algorand.",
    points: ["Multi-hop transaction tracing and wallet intelligence graph."],
    live: "https://algomapp.com",
  },
  {
    name: "Alpha-Pins",
    logo: "/logos/alpha-pins.webp",
    role: "Full-stack Developer (freelance)",
    kind: "Client engineering",
    period: "2024 — Present",
    blurb:
      "Full-stack delivery from UI to backend reconstruction, including payment gateway integrations (Seerbit, Interswitch, Korapay, Cryptomus).",
    points: ["End-to-end implementation across frontend and backend."],
    live: "https://alpha-pins.com",
  },
  {
    name: "Success Heritage Modern Academy",
    logo: "/logos/shma.webp",
    role: "Full-stack Developer",
    kind: "Client engineering",
    period: "2025 — Present",
    blurb:
      "School-facing software supporting administrative and student workflows — portals, roles, and reporting.",
    points: ["Student/admin portals with permissions and reporting."],
    live: "https://www.shma.sch.ng",
  },
  {
    name: "ArgoZap",
    role: "Builder (internship)",
    kind: "Renaissance Africa Energy Company",
    period: "Jun — Dec 2026",
    blurb:
      "Simple, fast & secure file & folder sharing for Windows — share anywhere, instantly, without uploading to a server. Content goes directly from your PC; nothing stored anywhere.",
    points: ["Direct PC-to-PC transfer over generated secure links."],
    live: "https://www.argozap.name.ng",
  },
  {
    name: "MivaX Cred",
    role: "Author & maintainer",
    kind: "Open source",
    period: "2025 — Present",
    blurb:
      "Open-source API and JS SDK for Miva student records — plus a browser extension that automates LMS course completion.",
    points: ["Public API, SDK, and a Chromium extension used by students."],
    live: "https://mivax.vercel.app",
  },
];

export const CAPABILITIES = [
  {
    title: "Full-stack product engineering",
    body: "Web applications, interfaces, APIs, auth flows, data models, and third-party integrations.",
    tech: "Vue · Nuxt · React · Next.js · Node.js · PHP · Laravel · PostgreSQL · MySQL",
  },
  {
    title: "Backend & system architecture",
    body: "API design, database architecture, access control, deployment workflows, and operational reliability.",
    tech: "Node.js · Express · AdonisJS · PHP · Redis · Docker · Nginx · CI/CD",
  },
  {
    title: "Blockchain & financial infrastructure",
    body: "Wallet integration, transaction flows, on-chain data analysis, and payment infrastructure.",
    tech: "Algorand · EVM chains · Hedera · Stellar · Interledger",
  },
  {
    title: "Automation & AI-enabled workflows",
    body: "API integrations, repetitive-process automation, and AI services where they solve a concrete problem.",
    tech: "Python · n8n · LLM APIs · agent tooling",
  },
];


export const CERTS = [
  {
    name: "Hedera Certified Developer Associate (HCDA)",
    issuer: "The Hashgraph Association",
    date: "Jul 2026",
    id: "17e18ca0-a4af-4925-852b-79a573e0882a",
  },
  {
    name: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    date: "Jul 2026",
    id: "8f0c3016-2650-41b9-82f0-cbbca34bf7e7",
  },
  {
    name: "General Course on Intellectual Property",
    issuer: "WIPO",
    date: "Jul 2026",
    id: "2OJj1tlqsA",
  },
  {
    name: "Product Management Basics",
    issuer: "Pendo",
    date: "May 2024",
    id: "",
  },
  {
    name: "Operating Systems Basics",
    issuer: "Cisco",
    date: "Dec 2025",
    id: "6ea89f1e-6547-49d0-a7a4-bc8bb964f44f",
  },
];

