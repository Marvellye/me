import type { Metadata } from "next";
import { Inter, Newsreader, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Nav from "@/components/Nav";
import SmoothScroll from "@/components/SmoothScroll";
import { PROFILE } from "@/content";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const display = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
});
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('mv-theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="bg-cream text-ink dark:bg-ink dark:text-cream antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LWMFHFNMYM"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-LWMFHFNMYM');`}
        </Script>
        <SmoothScroll />
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
