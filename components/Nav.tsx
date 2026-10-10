"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

/**
 * Minimal top row: SOUL.md link + theme icon.
 */
export default function Nav() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("mv-theme", next ? "dark" : "light");
    } catch { }
  };

  return (
    <div className="mx-auto w-full max-w-2xl px-5">
      <nav
        aria-label="Site"
        className="flex items-center justify-end gap-3 py-12 font-sans text-[11px] font-medium tracking-[0.18em] text-[#6b6560] dark:text-cream/40 sm:py-16"
      >
        <a href="/soul.md" className="py-1 transition-colors hover:text-ink dark:hover:text-cream">
          SOUL.md
        </a>
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
