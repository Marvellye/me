import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { PROJECTS } from "@/content";

const CASE_NOTES: Record<string, { problem: string; responsibility: string; architecture: string; decisions: string; hard: string; improve: string }> = {
  algomap: {
    problem:
      "Block explorers show data; investigators need answers. Tracing funds across hops, spotting counterparty clusters, and separating noise from suspicious flow is slow, manual work on Algorand.",
    responsibility:
      "Product direction, backend API design, graph traversal logic, data normalization from on-chain sources, and the deployed web experience (NestJS + Prisma, Vue + cytoscape).",
    architecture:
      "Indexer ingestion normalizes transactions into Postgres; a NestJS API serves trace queries and risk views; a Vue/cytoscape frontend renders wallet graphs. Supabase Postgres backs both app data and cached chain state.",
    decisions:
      "Graph-first modeling over flat transaction lists; cached multi-hop traversal with depth limits to keep queries fast; risk scoring kept explainable (heuristics + labels) rather than a black-box ML claim.",
    hard:
      "Multi-hop tracing explodes combinatorially. Solved with bounded breadth-first traversal, per-hop caps, and caching intermediate subgraphs — fast enough for interactive investigation without losing the important paths.",
    improve:
      "Add streaming ingestion for near-real-time tracing and a public read-only API so external agents and researchers can query traces programmatically.",
  },
  bitilda: {
    problem:
      "Moving value across chains and rails is fragmented: key management, chain differences, fees, failure states, and on/off-ramp access all live in different tools with different trust models.",
    responsibility:
      "Wallet and key-management architecture, multi-chain account handling, transaction lifecycle design, and Open Payments / Interledger integration for transfers.",
    architecture:
      "Mobile/web clients talk to a TypeScript backend that abstracts chain adapters (Hedera, EVM, Interledger) behind one transfer API. Keys are generated client-side; the backend never holds raw secrets — only encrypted references with strict separation.",
    decisions:
      "Client-side key generation with encrypted backup over custodial storage; one transfer abstraction with per-chain adapters instead of per-chain UIs; Interledger for fiat-adjacent rails rather than building settlement from scratch.",
    hard:
      "Chain-specific failure modes (finality, fees, reverted txs) break generic UIs. Solved with per-adapter error normalization into a single transaction state machine the frontend can render honestly.",
    improve:
      "Production-grade audit of the key lifecycle, formalized on/off-ramp partnerships, and published security boundaries so users know exactly what Bitilda can and cannot touch.",
  },
  trackdeck: {
    problem:
      "The product needed a backend that could grow: clean data models, enforced access control, and API boundaries the frontend team could build against without surprises.",
    responsibility:
      "Lead backend developer — architecture, system design, database schema, auth/authz, API contracts, and deployment, built from scratch.",
    architecture:
      "REST API with layered architecture (routes → services → data access), relational schema with constraints and indexes designed up front, role-based access control enforced server-side, and CI-driven deploys.",
    decisions:
      "Relational over document store for integrity guarantees; explicit service layer instead of fat controllers so business rules stay testable; RBAC middleware at the route level so authorization can't be forgotten per-endpoint.",
    hard:
      "Evolving frontend requirements kept pulling new shapes out of the API. Solved with versioned response contracts and a validation layer that rejects bad input at the boundary — noisy early, quiet later.",
    improve:
      "Add contract tests between frontend and backend, plus read replicas and query-level observability before the next order-of-magnitude scale-up.",
  },
  "alpha-pins": {
    problem:
      "A live product needed reconstruction: a coherent frontend experience on top of a backend that had to be rebuilt without breaking paying flows — including multiple payment gateways.",
    responsibility:
      "Full-stack freelancer — UI implementation through backend reconstruction, gateway integrations, and end-to-end delivery.",
    architecture:
      "Laravel backend with React/Vite frontend; payment processing abstracted behind one interface with per-gateway adapters (Seerbit, Interswitch, Korapay, Cryptomus); staged rollout behind the existing domain.",
    decisions:
      "Adapter pattern for gateways so a provider outage or API change touches one file; rebuild behind the live system rather than a big-bang rewrite; staging environment mirroring production config.",
    hard:
      "Four gateways, four failure modes, one checkout. Solved with idempotency keys, webhook verification per provider, and a reconciliation pass that catches anything the callbacks miss.",
    improve:
      "Centralized payment observability — one dashboard for success rates and latency per gateway — so integration health is visible instead of inferred.",
  },
  shma: {
    problem:
      "A school running on manual processes needed software for students, teachers, bursars, and admins — with permissions that match real organizational roles.",
    responsibility:
      "Full-stack developer — school website plus student/admin portals, role design, and reporting workflows.",
    architecture:
      "Nuxt frontend with a FlightPHP API over MySQL; role-based portals (student, teacher, bursar, admin); server-side permission checks on every data boundary.",
    decisions:
      "Separate portals per role instead of one overloaded dashboard; server-enforced permissions (never trust the client); simple relational reporting queries over a warehouse nobody would maintain.",
    hard:
      "Real school data is messy — duplicate records, partial payments, mid-term role changes. Solved with idempotent imports, audit-friendly payment records, and admin override flows with logs.",
    improve:
      "Parent-facing portal and SMS/email notifications so the school's communication stops living in spreadsheets.",
  },
  argozap: {
    problem:
      "Sharing files inside a company usually means uploading to a third party — slow for big folders, and sensitive content ends up on servers nobody controls.",
    responsibility:
      "Sole builder during my Renaissance Africa Energy internship — Windows app, transfer protocol, secure-link generation, and the end-to-end sharing flow.",
    architecture:
      "A Windows sender app serves selected files/folders over an encrypted direct connection; a short secure link encodes the route and a one-time token; the receiver's browser pulls bytes straight from the sender's PC — no storage, no relay of content.",
    decisions:
      "Direct transfer over relay-by-default so large folders stay fast and private; link-scoped tokens instead of accounts so sharing stays frictionless; sender's PC as the only source of truth so nothing persists after the session ends.",
    hard:
      "NATs and flaky office networks break naive direct connections. Solved with automatic fallback traversal plus resumable chunked transfer — a dropped connection picks up where it left off instead of restarting.",
    improve:
      "Add cross-platform receivers beyond the browser flow, plus link expiry policies and transfer auditing for enterprise compliance.",
  },
  mivax: {
    problem:
      "Miva students had no programmatic access to their own academic records — no API, no SDK, no tooling for the LMS workflows they repeat daily.",
    responsibility:
      "Author and maintainer — API design, JS SDK, docs, and a Chromium extension automating LMS course completion.",
    architecture:
      "A hosted API over student data with key-based access; a typed JS SDK wrapping every endpoint; a content-script extension that drives the LMS player and marks progress.",
    decisions:
      "Open-source the SDK so students can build their own tools; keep credentials client-side only; extension scoped to LMS domains with minimal permissions.",
    hard:
      "The LMS is a moving target — DOM changes break automation silently. Solved with resilient selectors, graceful degradation, and fast patch releases when the markup shifts.",
    improve:
      "Official data partnership with the university so the API reads from a stable source instead of scraping around one.",
  },
};

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) notFound();
  const notes = CASE_NOTES[project.slug];

  const sections: [string, string][] = notes
    ? [
        ["1 · The problem", notes.problem],
        ["2 · My responsibility", notes.responsibility],
        ["3 · The architecture", notes.architecture],
        ["4 · Key engineering decisions", notes.decisions],
        ["5 · The hardest problem", notes.hard],
        ["6 · What I would improve", notes.improve],
      ]
    : [];

  return (
    <div className="wrap max-w-3xl pb-24 pt-4 sm:pt-6">
      <Reveal>
        <Link href="/work" className="u-link font-mono text-sm">← All work</Link>
        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-bronze dark:text-sand">
          {project.category}
        </p>
        <h1 className="display mt-3 text-5xl font-medium sm:text-6xl">{project.name}</h1>
        <p className="mt-4 text-lg opacity-80">{project.description}</p>
        <dl className="mt-8 grid grid-cols-2 gap-4 border-y border-ink/10 py-6 font-mono text-[13px] dark:border-cream/10 sm:grid-cols-4">
          {[["Role", project.role], ["Type", project.type], ["Status", project.status], ["Stack", project.tags.join(" · ")]].map(
            ([k, v]) => (
              <div key={k}>
                <dt className="uppercase tracking-widest opacity-50">{k}</dt>
                <dd className="mt-1">{v}</dd>
              </div>
            )
          )}
        </dl>
        <div className="mt-6 flex flex-wrap gap-3 font-mono text-sm">
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="rounded-full bg-ink px-5 py-2 text-cream dark:bg-cream dark:text-ink">
              Live product ↗
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer" className="rounded-full border border-ink/25 px-5 py-2 dark:border-cream/30">
              Source code ↗
            </a>
          )}
        </div>
      </Reveal>
      {sections.map(([title, body], i) => (
        <Reveal key={title} delay={Math.min(i * 50, 200)}>
          <section className="mt-12">
            <h2 className="font-mono text-sm uppercase tracking-[0.2em] opacity-60">{title}</h2>
            <p className="mt-3 text-[1.05rem] leading-relaxed opacity-85">{body}</p>
          </section>
        </Reveal>
      ))}
      <Reveal>
        <div className="mt-16 flex justify-between border-t border-ink/10 pt-8 font-mono text-sm dark:border-cream/10">
          <Link href="/work" className="u-link">← All work</Link>
          <a href={`mailto:info@marvelly.com.ng?subject=${encodeURIComponent(`About ${project.name}`)}`} className="u-link">
            Ask me about this →
          </a>
        </div>
      </Reveal>
    </div>
  );
}
