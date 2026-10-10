import Link from "next/link";
import Image from "next/image";
import HeroScene from "@/components/HeroScene";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import ScrollProgress from "@/components/ScrollProgress";
import ProjectThumb from "@/components/ProjectThumb";
import { PROFILE, PROJECTS, CAPABILITIES } from "@/content";

/**
 * RICH — the full experience. Three.js hero, parallax, images,
 * scroll progress, reveals, marquee. The works.
 */
export default function HomeRich() {
  const featured = PROJECTS.filter((p) => p.featured || ["algomap", "bitilda", "trackdeck", "alpha-pins"].includes(p.slug));

  return (
    <>
      <ScrollProgress />
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.10] dark:opacity-[0.13]">
          <HeroScene />
        </div>
        <div className="absolute inset-0 -z-0 bg-gradient-to-b from-transparent via-transparent to-cream dark:to-ink" />
        <div className="wrap relative pb-20 pt-10 sm:pb-28 sm:pt-14">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-bronze dark:text-sand">
              Software Engineer · Product Builder
            </p>
          </Reveal>
          <Parallax speed={0.1}>
            <h1 className="display mt-6 max-w-4xl text-5xl font-medium leading-[1.02] sm:text-7xl">
              I build software from <em className="italic">architecture</em> to production.
            </h1>
          </Parallax>
          <Reveal delay={180}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed opacity-80 sm:text-lg">
              {PROFILE.intro}
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/work"
                className="rounded-full bg-ink px-6 py-3 font-mono text-sm text-cream transition-transform hover:-translate-y-0.5 dark:bg-cream dark:text-ink"
              >
                Explore my work →
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-ink/25 px-6 py-3 font-mono text-sm transition-colors hover:bg-ink hover:text-cream dark:border-cream/30 dark:hover:bg-cream dark:hover:text-ink"
              >
                About & résumé
              </Link>
            </div>
          </Reveal>
          <Reveal delay={330}>
            <div className="mt-8 flex gap-5 font-mono text-[13px]">
              <a className="u-link" href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="u-link" href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="u-link" href={`mailto:${PROFILE.email}`}>Email</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROOF STRIP */}
      <section className="border-y border-ink/10 dark:border-cream/10">
        <div className="wrap grid grid-cols-2 gap-6 py-8 sm:grid-cols-4">
          {[
            ["4+", "years building software"],
            ["10+", "projects built & shipped"],
            ["Open-source", "public repos on GitHub"],
            ["Production", "systems running live today"],
          ].map(([big, small], i) => (
            <Reveal key={small} delay={i * 70}>
              <p className="display text-3xl font-medium sm:text-4xl">{big}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-wider opacity-60">{small}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="wrap py-20 sm:py-28">
        <Reveal>
          <div className="flex items-end justify-between">
            <h2 className="display text-4xl font-medium sm:text-5xl">Selected work</h2>
            <Link href="/work" className="u-link hidden font-mono text-sm sm:block">
              All projects ↗
            </Link>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 90}>
              <Link
                href={`/work/${p.slug}`}
                className="card-lift group block rounded-2xl border border-ink/10 p-5 dark:border-cream/10 sm:p-6"
              >
                <ProjectThumb project={p} className="aspect-[16/10]" />
                <div className="px-1 pb-1 pt-5 sm:px-2 sm:pt-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-bronze dark:text-sand">
                    {p.category}
                  </p>
                  <h3 className="display mt-3 text-3xl font-medium">{p.name}</h3>
                  <p className="mt-3 leading-relaxed opacity-75">{p.description}</p>
                  <p className="mt-4 font-mono text-xs opacity-60">
                    <span className="opacity-80">Feature:</span> {p.highlight}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full border border-ink/15 px-3 py-1 font-mono text-[11px] opacity-70 dark:border-cream/15">
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="mt-6 font-mono text-sm transition-transform group-hover:translate-x-1">
                    Case study →
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <Link href="/work" className="u-link mt-8 inline-block font-mono text-sm sm:hidden">
            All projects ↗
          </Link>
        </Reveal>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-ink/10 py-4 dark:border-cream/10" aria-hidden>
        <div className="marquee flex w-max gap-10 whitespace-nowrap font-mono text-sm uppercase tracking-widest opacity-50">
          {[0, 1].map((k) => (
            <span key={k} className="flex gap-10">
              {["Full-stack engineering", "Backend systems", "Fintech infrastructure", "Blockchain tooling", "Applied AI", "Shipping to production"].map((t) => (
                <span key={t}>{t} ✦</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* CAPABILITIES */}
      <section className="wrap py-20 sm:py-28">
        <Reveal>
          <h2 className="display max-w-xl text-4xl font-medium sm:text-5xl">
            What I can do <em className="italic">with</em> the stack
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {CAPABILITIES.map((c, i) => (
            <Reveal key={c.title} delay={(i % 2) * 90}>
              <div className="h-full rounded-2xl border border-ink/10 p-7 dark:border-cream/10">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 leading-relaxed opacity-75">{c.body}</p>
                <p className="mt-4 font-mono text-xs leading-relaxed text-bronze dark:text-sand">{c.tech}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SHORT INTRO */}
      <section className="border-t border-ink/10 dark:border-cream/10">
        <div className="wrap grid gap-10 py-20 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-14 sm:py-28">
          <Reveal className="justify-self-start">
            <Parallax speed={-0.06}>
              <div className="relative h-52 w-52 overflow-hidden rounded-3xl border border-ink/10 dark:border-cream/15 sm:h-64 sm:w-64">
                <Image
                  src={PROFILE.portrait}
                  alt="Ezekiel Marvellous Oghenemaga"
                  fill
                  className="object-cover"
                  sizes="256px"
                />
              </div>
            </Parallax>
          </Reveal>
          <div>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.25em] opacity-60">About — briefly</p>
            </Reveal>
            <Reveal delay={120}>
              <p className="display mt-4 text-2xl font-normal leading-snug sm:text-[2rem]">
                I&apos;m Ezekiel Marvellous Oghenemaga, a software engineer and independent product
                builder based in Nigeria. My work spans full-stack development, backend architecture,
                fintech, and blockchain tooling — and I care most about problems where engineering
                decisions actually matter.
              </p>
              <Link href="/about" className="u-link mt-6 inline-block font-mono text-sm">
                More about me →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-ink/10 dark:border-cream/10">
        <div className="wrap py-20 text-center sm:py-28">
          <Reveal>
            <Parallax speed={0.06}>
              <h2 className="display mx-auto max-w-2xl text-4xl font-medium sm:text-6xl">
                Have a problem worth solving?
              </h2>
            </Parallax>
            <p className="mx-auto mt-5 max-w-xl opacity-75">
              Open to engineering roles, technically challenging projects, and thoughtful product
              collaborations.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${PROFILE.email}`}
                className="rounded-full bg-ink px-7 py-3 font-mono text-sm text-cream transition-transform hover:-translate-y-0.5 dark:bg-cream dark:text-ink"
              >
                Email me
              </a>
              <a
                href={PROFILE.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-ink/25 px-7 py-3 font-mono text-sm transition-colors hover:bg-ink hover:text-cream dark:border-cream/30 dark:hover:bg-cream dark:hover:text-ink"
              >
                WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
