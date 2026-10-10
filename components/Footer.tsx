"use client";

import { usePathname } from "next/navigation";
import { useMode } from "./ModeContext";
import SocialIcons from "./SocialIcons";
import { PROFILE } from "@/content";

export default function Footer() {
  const { mode } = useMode();
  const pathname = usePathname();
  // Slim home carries its own icon row under Education — no global footer there.
  if (mode === "slim" && pathname === "/") return null;

  return (
    <footer className="border-t border-ink/10 py-10 dark:border-cream/10">
      <div className="wrap flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs uppercase tracking-widest opacity-60">
          © MMXXVI · {PROFILE.shortName}
        </p>
        <div className="flex items-center gap-5 text-lg">
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}
