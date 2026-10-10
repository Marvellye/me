import Reveal from "@/components/Reveal";
import PrintButton from "@/components/PrintButton";
import { PROFILE, PROJECTS, EXPERIENCE, CERTS } from "@/content";

export const metadata = {
  title: "About — Ezekiel Marvellous Oghenemaga",
  description:
    "Software engineer from Nigeria. Background, philosophy, experience, selected work, education.",
};

const PRINCIPLES = [
  ["Solve the actual problem", "Technology is a means to an end. Requirements and constraints first, implementation second."],
  ["Design for the whole system", "Interfaces, APIs, databases, integrations, infrastructure — they ship together or fail together."],
  ["Reliability and security are requirements", "Correctness, access control, data handling, and failure recovery matter as much as the happy path."],
  ["Prefer practical execution", "Working software, understandable architecture, and measurable progress over unnecessary complexity."],
];

export default function About() {
  return (
    <div className="wrap max-w-3xl pb-24 pt-4 sm:pt-6">
      {/* STORY */}
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-bronze dark:text-sand">About</p>
        <h1 className="display mt-4 text-5xl font-medium sm:text-6xl">Engineer, builder, owner.</h1>
        <div className="mt-6 space-y-5 text-[1.05rem] leading-relaxed opacity-85">
          <p>
            I&apos;m a software engineer from Nigeria focused on building practical software
            products and the systems behind them. My work spans frontend and backend development,
            database design, infrastructure, fintech, and blockchain tooling.
          </p>
          <p>
            I enjoy the full process: understanding a problem, evaluating possible solutions,
            designing the system, implementing it, and getting it into a state where people can
            actually use it. Building independent products taught me to think beyond whether the
            code works — UX, security, infrastructure cost, dependencies, and maintenance all
            count.
          </p>
          <p>
            I study Software Engineering at Miva Open University (400L), and I build in public at{" "}
            <a className="u-link" href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a>.
          </p>
        </div>
      </Reveal>

      {/* PHILOSOPHY */}
      <Reveal>
        <h2 className="display mt-16 text-3xl font-medium">Engineering philosophy</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {PRINCIPLES.map(([t, b]) => (
            <div key={t} className="rounded-2xl border border-ink/10 p-6 dark:border-cream/10">
              <h3 className="font-semibold">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed opacity-75">{b}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* EXPERIENCE */}
      <Reveal>
        <h2 className="display mt-16 text-3xl font-medium">Experience</h2>
        <div className="mt-6 space-y-8">
          {EXPERIENCE.map((e) => (
            <div key={e.org} className="border-l-2 border-bronze pl-6 dark:border-sand">
              <h3 className="text-lg font-semibold">{e.role}</h3>
              <p className="font-mono text-xs uppercase tracking-widest opacity-60">
                {e.org} · {e.period}
              </p>
              <ul className="mt-3 space-y-1.5 opacity-80">
                {e.points.map((p) => (
                  <li key={p}>— {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>

      {/* SELECTED WORK (résumé merge) */}
      <Reveal>
        <h2 className="display mt-16 text-3xl font-medium">Selected work</h2>
        <div className="mt-6 space-y-5">
          {PROJECTS.slice(0, 4).map((p) => (
            <div key={p.slug}>
              <h3 className="font-semibold">
                {p.name} <span className="font-normal opacity-60">— {p.role}</span>
              </h3>
              <p className="mt-1 text-[0.95rem] opacity-80">{p.description}</p>
              <p className="mt-1 font-mono text-xs opacity-60">{p.highlight}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* EDUCATION + CERTIFICATIONS */}
      <Reveal>
        <h2 className="display mt-16 text-3xl font-medium">Education & Certifications</h2>
        <div className="mt-6 space-y-4 opacity-85">
          <p>
            <strong>Miva Open University</strong> — B.Sc. Software Engineering (2024 — 2027).
            CGPA 4.82.
          </p>
        </div>
        <div className="mt-6 space-y-4">
          {CERTS.map((c) => (
            <div key={c.name}>
              <h3 className="font-semibold">{c.name}</h3>
              <p className="font-mono text-xs uppercase tracking-widest opacity-60">
                {c.issuer} · {c.date}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* CONTACT + PRINT (résumé merge) */}
      <Reveal>
        <h2 className="display mt-16 text-3xl font-medium">Contact</h2>
        <div className="mt-4 flex flex-wrap gap-4 font-mono text-[13px]">
          <a className="u-link" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
          <a className="u-link" href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="u-link" href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <PrintButton />
      </Reveal>
    </div>
  );
}
