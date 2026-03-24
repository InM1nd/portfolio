import type { Metadata } from "next";
import { Space_Grotesk, Share_Tech_Mono, Inter } from "next/font/google";
import "./globals.css";
import ClientPageTransition from "@/components/ClientPageTransition";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space",
});

const shareTechMono = Share_Tech_Mono({ 
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
});

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-tech",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio website",
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
      <body className={`${spaceGrotesk.variable} ${shareTechMono.variable} ${inter.variable}`} suppressHydrationWarning>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <ClientPageTransition>
          {children}
        </ClientPageTransition>
      </body>
    </html>
  );
}

