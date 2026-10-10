"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { PROFILE } from "@/content";
import { useMode } from "./ModeContext";

const LINKS: [string, string][] = [
  ["Home", "/"],
  ["Work", "/work"],
  ["About", "/about"],
];

/**
 * Quiet editorial nav à la akinkunmi.dev: no bar, no blur, no pills —
 * just small uppercase links, right-aligned, `/`-separated, inside the
 * content column. Active page glows bronze; theme + mode are tiny
 * text toggles at the end of the same row.
 */
export default function Nav() {
  const pathname = usePathname();
  const [dark, setDark] = useState(false);
  const { mode, setMode } = useMode();

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("mv-theme", next ? "dark" : "light");
    } catch {}
  };

  const toggleMode = () => setMode(mode === "rich" ? "slim" : "rich");
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div className="wrap">
      <nav
        aria-label="Primary"
        className="flex flex-wrap items-center justify-end gap-x-3 gap-y-2 py-12 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-[#6b6560] dark:text-cream/40 sm:py-16"
      >
        {LINKS.map(([label, href], i) => (
          <span key={href} className="flex items-center gap-3">
            {i > 0 && (
              <span className="select-none opacity-25" aria-hidden>
                /
              </span>
            )}
            <Link
              href={href}
              aria-current={isActive(href) ? "page" : undefined}
              className={`py-1 transition-colors hover:text-ink dark:hover:text-cream ${
                isActive(href) ? "text-bronze dark:text-sand" : ""
              }`}
            >
              {label}
            </Link>
          </span>
        ))}
        <span className="select-none opacity-25" aria-hidden>
          /
        </span>
        <button
          onClick={toggleMode}
          title={mode === "rich" ? "Switch to slim CV mode" : "Switch to rich mode"}
          className="py-1 transition-colors hover:text-ink dark:hover:text-cream"
        >
          {mode === "rich" ? "Rich" : "Slim"}
        </button>
        <span className="select-none opacity-25" aria-hidden>
          /
        </span>
        <button
          onClick={toggle}
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          title={dark ? "Switch to light mode" : "Switch to dark mode"}
          className="py-1 text-[13px] transition-colors hover:text-ink dark:hover:text-cream"
        >
          <FontAwesomeIcon icon={dark ? faSun : faMoon} fixedWidth />
        </button>
      </nav>
    </div>
  );
}
