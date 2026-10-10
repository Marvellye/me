export const PROFILE = {
  name: "Ezekiel Marvellous Oghenemaga",
  shortName: "Marvelly",
  title: "Software Engineer & Product Builder",
  tagline: "I build software from architecture to production.",
  intro:
    "I'm Ezekiel Marvellous Oghenemaga, a software engineer building full-stack products, backend systems, and financial infrastructure. I work across the stack — from data models and APIs to shipped interfaces and production deploys.",
  location: "Nigeria",
  email: "info@marvelly.com.ng",
  phone: "+234 810 059 5468",
  whatsapp: "https://wa.me/2348100595468",
  github: "https://github.com/Marvellye",
  linkedin: "https://linkedin.com/in/ezekiel-marvellousoghenemaga/",
  twitter: "https://twitter.com/marvelly_ng",
  instagram: "https://instagram.com/marvelly_ng",
  portrait: "/portrait.jpg",
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  tags: string[];
  description: string;
  role: string;
  type: string;
  status: string;
  highlight: string;
  live?: string;
  repo?: string;
  image?: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: "algomap",
    name: "AlgoMap",
    category: "Blockchain · Forensics",
    tags: ["NestJS", "Vue", "PostgreSQL", "Algorand"],
    description:
      "A blockchain investigation platform for tracing money flows, mapping wallet relationships, and investigating suspicious activity on Algorand.",
    role: "Builder",
    type: "Independent product",
    status: "Live",
    highlight: "Multi-hop transaction tracing and wallet intelligence graph.",
    live: "https://algomapp.com",
    repo: "https://github.com/Marvellye/algomap",
    image: "/projects/algomap.png",
    featured: true,
  },
  {
    slug: "bitilda",
    name: "Bitilda",
    category: "Fintech · Crypto payments",
    tags: ["Vue", "TypeScript", "Interledger", "Hedera"],
    description:
      "A crypto payments and wallet product for simpler digital-asset payments, on/off-ramp access, and multi-chain financial infrastructure. Raised $3k.",
    role: "Co-founder & CTO",
    type: "Co-founded product",
    status: "Funded prototype",
    highlight: "Raised $3k · wallet architecture + Open Payments / Interledger integration.",
    repo: "https://github.com/Marvellye/bit-app-interledger",
  },
  {
    slug: "trackdeck",
    name: "TrackDeck",
    category: "Backend · Product engineering",
    tags: ["Node.js", "PostgreSQL", "System design"],
    description:
      "Backend implementation, architecture, system design, and secure database engineering — built from scratch, later acquired by a logistics company.",
    role: "Co-founder (backend)",
    type: "Co-founded product",
    status: "Acquired",
    highlight: "Full backend ownership · acquired by a logistics company.",
  },
  {
    slug: "argozap",
    name: "ArgoZap",
    category: "Desktop · P2P sharing",
    tags: ["Windows", "P2P", "Security"],
    description:
      "Simple, fast & secure file & folder sharing for Windows — share anywhere, instantly, without uploading to a server. A secure link is generated; content goes directly from your PC, nothing stored anywhere.",
    role: "Builder (internship)",
    type: "Internship project",
    status: "Shipped",
    highlight: "Direct PC-to-PC transfer · zero server storage · Windows only.",
  },
  {
    slug: "alpha-pins",
    name: "Alpha-Pins",
    category: "Full-stack · Client engineering",
    tags: ["Laravel", "React", "Vite", "TypeScript"],
    description:
      "Full-stack delivery from UI to backend reconstruction, including payment gateway integrations (Seerbit, Interswitch, Korapay, Cryptomus).",
    role: "Full-stack Developer (freelance)",
    type: "Client engineering",
    status: "Live",
    highlight: "End-to-end implementation across frontend and backend.",
    live: "https://alpha-pins.com",
    image: "/projects/alpha-pins.png",
  },
  {
    slug: "shma",
    name: "Success Heritage Modern Academy",
    category: "Business software",
    tags: ["Nuxt", "FlightPHP", "MySQL"],
    description:
      "School-facing software supporting administrative and student workflows — portals, roles, and reporting.",
    role: "Full-stack Developer",
    type: "Client engineering",
    status: "In production",
    highlight: "Student/admin portals with permissions and reporting.",
  },
  {
    slug: "mivax",
    name: "MivaX Cred",
    category: "Open source · API",
    tags: ["JavaScript", "SDK", "API"],
    description:
      "Open-source API and JS SDK for Miva student records — plus a browser extension that automates LMS course completion.",
    role: "Author & maintainer",
    type: "Open source",
    status: "Live",
    highlight: "Public API, SDK, and a Chromium extension used by students.",
    repo: "https://github.com/Marvellye/mivax-cred",
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

export const EXPERIENCE = [
  {
    role: "Co-founder & CTO",
    org: "Bitilda",
    period: "2026 — Present",
    points: [
      "Raised $3k for a crypto payments and wallet product.",
      "Wallet architecture, multi-chain accounts, Interledger transfers.",
    ],
  },
  {
    role: "Software Engineering Intern",
    org: "Renaissance Africa Energy Company",
    period: "Jun — Dec 2026",
    points: [
      "Built ArgoZap: secure PC-to-PC file & folder sharing for Windows.",
      "Direct transfer over generated secure links — no server storage.",
    ],
  },
  {
    role: "Co-founder (backend)",
    org: "TrackDeck",
    period: "2024 — Present",
    points: [
      "Backend built from scratch: architecture and system design.",
      "Acquired by a logistics company.",
    ],
  },
  {
    role: "Full-stack Developer (freelance)",
    org: "Alpha-Pins",
    period: "2024 — Present",
    points: [
      "Full-stack delivery from UI to backend reconstruction.",
      "Payment gateway integrations across multiple providers.",
    ],
  },
  {
    role: "Full-stack Developer",
    org: "Success Heritage Modern Academy",
    period: "2025 — Present",
    points: [
      "School website plus student and admin portals.",
      "Roles, permissions, and reporting workflows.",
    ],
  },
  {
    role: "Backend Developer",
    org: "Viragovox",
    period: "2025 — Present",
    points: ["Backend implementation for the Viragovox brand."],
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

export const WRITING = [
  {
    slug: "blockchain-forensics-tool",
    title: "Building a blockchain forensics tool instead of another explorer",
    dek: "Displaying chain data is easy. Investigating money movement — graph traversal, counterparty analysis, useful workflows — is the actual problem. Notes from building AlgoMap.",
    date: "2026",
  },
  {
    slug: "backend-architecture-choices",
    title: "What I consider before choosing a backend architecture",
    dek: "Requirements, deployment environment, database needs, dependencies, and maintenance cost — how I pick between Node, PHP, and the rest before writing code.",
    date: "2026",
  },
  {
    slug: "multichain-wallet-engineering",
    title: "Engineering a multi-chain wallet: the parts beyond generating an address",
    dek: "Key management, chain differences, signing, fees, failure states, and security boundaries. Notes from building Bitilda.",
    date: "2026",
  },
];
