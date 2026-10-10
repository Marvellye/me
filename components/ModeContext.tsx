"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Mode = "rich" | "slim";

const Ctx = createContext<{ mode: Mode; setMode: (m: Mode) => void }>({
  mode: "slim",
  setMode: () => {},
});

const DEFAULT_MODE: Mode = "slim";

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<Mode>(DEFAULT_MODE);

  useEffect(() => {
    try {
      const q = new URLSearchParams(window.location.search).get("mode");
      if (q === "slim" || q === "rich") {
        setModeState(q);
        return;
      }
      const saved = localStorage.getItem("mv-mode");
      if (saved === "slim" || saved === "rich") setModeState(saved);
    } catch {}
  }, []);

  const setMode = (m: Mode) => {
    setModeState(m);
    try {
      localStorage.setItem("mv-mode", m);
    } catch {}
    document.documentElement.dataset.mode = m;
  };

  useEffect(() => {
    document.documentElement.dataset.mode = mode;
  }, [mode]);

  return <Ctx.Provider value={{ mode, setMode }}>{children}</Ctx.Provider>;
}

export const useMode = () => useContext(Ctx);
