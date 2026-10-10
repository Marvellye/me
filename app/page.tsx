import type { Metadata } from "next";
import HomeSlim from "@/components/HomeSlim";
import { PROFILE } from "@/content";

export const metadata: Metadata = {
  title: "Ezekiel Marvellous Oghenemaga — Software Engineer",
  description:
    "Portfolio of Ezekiel Marvellous Oghenemaga, a software engineer building full-stack applications, backend systems, fintech infrastructure, and blockchain tools.",
  openGraph: {
    title: "Ezekiel Marvellous Oghenemaga — Software Engineer",
    description: PROFILE.intro,
    type: "website",
  },
};

export default function Page() {
  return <HomeSlim />;
}
