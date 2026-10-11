"use client";

import { useState } from "react";

const TRANSLATIONS = {
  KJV: {
    label: "KJV",
    text: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
  },
  NIV: {
    label: "NIV",
    text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
  },
};

type TranslationKey = keyof typeof TRANSLATIONS;

export default function John316Widget() {
  const [version, setVersion] = useState<TranslationKey>("KJV");
  const active = TRANSLATIONS[version];

  return (
    <aside
      aria-label="John 3:16 Scripture Widget"
      className="rounded-lg border border-ink/10 bg-ink/[0.02] p-4 font-mono transition-colors hover:border-ink/20 dark:border-cream/10 dark:bg-cream/[0.02] dark:hover:border-cream/20"
    >
      <div className="flex items-center justify-between gap-3 text-[11px] uppercase tracking-[0.2em]">
        <div className="flex items-center gap-2 font-bold text-bronze dark:text-sand">
          <span className="opacity-60 text-[10px]" aria-hidden="true">✦</span>
          <span>John 3:16</span>
        </div>

        <div className="flex items-center gap-3 lowercase tracking-normal text-[11px] opacity-75">
          <div className="flex items-center rounded border border-ink/10 p-0.5 font-mono text-[10px] dark:border-cream/10">
            {(Object.keys(TRANSLATIONS) as TranslationKey[]).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setVersion(key)}
                className={`rounded px-1.5 py-0.5 transition-colors ${version === key
                    ? "bg-bronze text-cream font-semibold dark:bg-sand dark:text-ink"
                    : "opacity-60 hover:opacity-100"
                  }`}
                title={`Switch to ${key}`}
                aria-label={`Switch to ${key} translation`}
              >
                {key}
              </button>
            ))}
          </div>
        </div>
      </div>

      <blockquote className="mt-3 font-display italic text-[14px] sm:text-[15px] leading-relaxed text-ink/85 dark:text-cream/85">
        &ldquo;{active.text}&rdquo;
      </blockquote>
    </aside>
  );
}
