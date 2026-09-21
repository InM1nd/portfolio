import type { Metadata } from "next";
import { Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import ClientPageTransition from "@/components/ClientPageTransition";
import PipBoyShell from "@/components/pipboy/PipBoyShell";

const shareTechMono = Share_Tech_Mono({ 
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
});

const SITE_URL = "https://inm1nd.vercel.app";
const DESCRIPTION =
  "Frontend / product engineer in Vienna. React, Next.js, TypeScript — production sites, products and developer tooling, shipped since 2021.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Oleksandr Zabolotnyi — Frontend / Product Engineer",
    template: "%s — Oleksandr Zabolotnyi",
  },
  description: DESCRIPTION,
  keywords: [
    "Oleksandr Zabolotnyi",
    "frontend engineer",
    "product engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Vienna",
  ],
  authors: [{ name: "Oleksandr Zabolotnyi", url: SITE_URL }],
  creator: "Oleksandr Zabolotnyi",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Oleksandr Zabolotnyi",
    title: "Oleksandr Zabolotnyi — Frontend / Product Engineer",
    description: DESCRIPTION,
    locale: "en_US",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Oleksandr Zabolotnyi — Frontend / Product Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oleksandr Zabolotnyi — Frontend / Product Engineer",
    description: DESCRIPTION,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={shareTechMono.variable} suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-1/2 focus:top-2 focus:z-[999] focus:-translate-x-1/2 focus:bg-terminal-green focus:px-6 focus:py-3 focus:font-mono focus:font-bold focus:text-black"
        >
          Skip to main content
        </a>
        <ClientPageTransition>
          <PipBoyShell>{children}</PipBoyShell>
        </ClientPageTransition>
      </body>
    </html>
  );
}

