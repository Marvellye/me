import Link from "next/link";
import Reveal from "@/components/Reveal";
import { PROJECTS } from "@/content";

export const metadata = {
  title: "Work — Ezekiel Marvellous Oghenemaga",
  description: "Selected projects: blockchain forensics, fintech infrastructure, backend systems, and client engineering.",
};

export default function Work() {
  return (
    <div className="wrap pb-24 pt-4 sm:pt-6">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-bronze dark:text-sand">Work</p>
        <h1 className="display mt-4 max-w-3xl text-5xl font-medium sm:text-6xl">
          Proof, not promises.
        </h1>
        <p className="mt-5 max-w-2xl opacity-75">
          Independent products, client work, and open source — each one labeled honestly, each with
          a case study on the engineering behind it.
        </p>
      </Reveal>
      <div className="mt-12 flex flex-col gap-5">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.slug} delay={Math.min(i * 60, 240)}>
            <Link
              href={`/work/${p.slug}`}
              className="card-lift group grid gap-4 rounded-2xl border border-ink/10 p-7 dark:border-cream/10 sm:grid-cols-[1fr_2fr_auto] sm:items-center sm:gap-8 sm:p-8"
            >
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-bronze dark:text-sand">
                  {p.category}
                </p>
                <h2 className="display mt-2 text-3xl font-medium">{p.name}</h2>
                <p className="mt-1 font-mono text-xs opacity-60">
                  {p.type} · {p.status}
                </p>
              </div>
              <div>
                <p className="leading-relaxed opacity-75">{p.description}</p>
                <p className="mt-2 font-mono text-xs opacity-60">
                  <span className="opacity-80">Feature:</span> {p.highlight}
                </p>
              </div>
              <p className="font-mono text-sm transition-transform group-hover:translate-x-1">
                Case study →
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
