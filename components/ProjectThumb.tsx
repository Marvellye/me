import Image from "next/image";
import type { Project } from "@/content";

/** Real screenshot when one exists, otherwise a quiet typographic placeholder. */
export default function ProjectThumb({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  if (project.image) {
    return (
      <div className={`relative overflow-hidden rounded-xl border border-ink/10 dark:border-cream/10 ${className}`}>
        <Image
          src={project.image}
          alt={`${project.name} screenshot`}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-xl bg-ink/[0.04] dark:bg-cream/[0.06] ${className}`}
      aria-hidden
    >
      <span className="display text-7xl italic opacity-15">{project.name.slice(0, 1)}</span>
      <span className="absolute bottom-3 right-4 font-mono text-[11px] uppercase tracking-widest opacity-40">
        {project.status}
      </span>
    </div>
  );
}
