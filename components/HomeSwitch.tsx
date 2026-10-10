"use client";

import { useMode } from "./ModeContext";
import HomeRich from "./HomeRich";
import HomeSlim from "./HomeSlim";

export default function HomeSwitch() {
  const { mode } = useMode();
  return mode === "slim" ? <HomeSlim /> : <HomeRich />;
}
