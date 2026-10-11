import Image from "next/image";
import { PROFILE, WORK, CAPABILITIES, CERTS } from "@/content";
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
        <p className="mt-3 flex items-center gap-4 text-base opacity-70">
          <SocialIcons />
        </p>
        <p className="mt-4 opacity-80">{PROFILE.intro}</p>
      </header>

      <hr className="my-8 border-ink/15 dark:border-cream/15" />

      <section>
        <h2 className="text-xs font-bold uppercase tracking-[0.25em] opacity-50">Selected work</h2>
        <div className="mt-4 space-y-5">
          {WORK.map((w) => (
            <div key={w.name}>
              <p className="flex items-center gap-2 font-bold">
                {w.logo && (
                  <Image
                    src={w.logo}
                    alt=""
                    width={20}
                    height={20}
                    className="h-5 w-5 shrink-0 bg-transparent object-contain [&>span]:!bg-transparent"
                    style={{ background: "transparent" }}
                    loading={w.name === "Bitilda" ? "eager" : "lazy"}
                  />
                )}
                {w.live ? (
                  <a
                    className="transition-colors hover:text-bronze dark:hover:text-sand"
                    href={w.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {w.name}
                  </a>
                ) : (
                  w.name
                )}{" "}
                {/* <span className="font-normal opacity-50">[{w.kind} · {w.period}]</span> */}
              </p>
              <p className="opacity-80">
                {w.role} — {w.blurb}
              </p>
              {w.points.map((pt) => (
                <p key={pt} className="opacity-50">· {pt}</p>
              ))}
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
