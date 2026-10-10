import { PROFILE, PROJECTS, EXPERIENCE, CAPABILITIES, CERTS } from "@/content";
import SocialIcons from "./SocialIcons";

/**
 * SLIM — the minimalist CV. One column, monospace, no images,
 * no motion, no decoration. Everything on one screenful-ish page.
 */
export default function HomeSlim() {
  return (
    <div className="mx-auto w-full max-w-2xl px-5 pb-24 pt-4 font-mono text-[13px] leading-relaxed">
      <header>
        <h1 className="font-sans text-3xl font-bold tracking-tight">{PROFILE.name}</h1>
        <p className="mt-1 text-bronze dark:text-sand">{PROFILE.title}</p>
        <p className="mt-3 opacity-70">
          {PROFILE.location} ·{" "}
          <a className="underline" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a> ·{" "}
          <a className="underline" href={PROFILE.github} target="_blank" rel="noreferrer">github</a> ·{" "}
          <a className="underline" href={PROFILE.linkedin} target="_blank" rel="noreferrer">linkedin</a> ·{" "}
          <a className="underline" href={PROFILE.twitter} target="_blank" rel="noreferrer">x</a>
        </p>
        <p className="mt-4 opacity-80">{PROFILE.intro}</p>
      </header>

      <hr className="my-8 border-ink/15 dark:border-cream/15" />

      <section>
        <h2 className="text-xs font-bold uppercase tracking-[0.25em] opacity-50">Experience</h2>
        <div className="mt-4 space-y-5">
          {EXPERIENCE.map((e) => (
            <div key={e.org}>
              <p className="font-bold">
                {e.role} — {e.org}
              </p>
              <p className="opacity-50">{e.period}</p>
              {e.points.map((p) => (
                <p key={p} className="opacity-80">· {p}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <hr className="my-8 border-ink/15 dark:border-cream/15" />

      <section>
        <h2 className="text-xs font-bold uppercase tracking-[0.25em] opacity-50">Selected work</h2>
        <div className="mt-4 space-y-5">
          {PROJECTS.map((p) => (
            <div key={p.slug}>
              <p className="font-bold">
                <a className="underline" href={`/work/${p.slug}`}>{p.name}</a>{" "}
                <span className="font-normal opacity-50">[{p.type} · {p.status}]</span>
              </p>
              <p className="opacity-80">{p.description}</p>
              <p className="opacity-50">
                {p.highlight}
                {p.live && <> · <a className="underline" href={p.live} target="_blank" rel="noreferrer">live</a></>}
                {p.repo && <> · <a className="underline" href={p.repo} target="_blank" rel="noreferrer">code</a></>}
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr className="my-8 border-ink/15 dark:border-cream/15" />

      <section>
        <h2 className="text-xs font-bold uppercase tracking-[0.25em] opacity-50">Capabilities</h2>
        <div className="mt-4 space-y-3">
          {CAPABILITIES.map((c) => (
            <p key={c.title} className="opacity-80">
              <span className="font-bold">{c.title}:</span> {c.tech}
            </p>
          ))}
        </div>
      </section>

      <hr className="my-8 border-ink/15 dark:border-cream/15" />

      <section>
        <h2 className="text-xs font-bold uppercase tracking-[0.25em] opacity-50">Education & Certifications</h2>
        <p className="mt-4 opacity-80">
          <span className="font-bold">Miva Open University</span> — B.Sc. Software Engineering,
          2024–2027. CGPA 4.82.
        </p>
        <div className="mt-4 space-y-3">
          {CERTS.map((c) => (
            <p key={c.name} className="opacity-80">
              <span className="font-bold">{c.name}</span> — {c.issuer}, {c.date}
            </p>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-5 text-base">
          <SocialIcons />
        </div>
      </section>

    </div>
  );
}
