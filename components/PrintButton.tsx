"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="mt-8 rounded-full bg-ink px-6 py-2.5 font-mono text-sm text-cream print:hidden dark:bg-cream dark:text-ink"
    >
      Print / save as PDF
    </button>
  );
}
