import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Anton, Geist } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SITE_URL } from "@/lib/site";

const GTM_ID = "GTM-PMXP2LXZ";

// "Stay" (wordmark) → Anton
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

// Geist (Vercel) — fallback / secondary
const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-geist",
});

const DESCRIPTION =
  "Tus huéspedes escanean una placa en la habitación y piden Wi-Fi, toallas, reportan fallas o reservan tours. Sin apps: todo llega directo al WhatsApp de tu personal.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Seven Stay | Atención al huésped por WhatsApp",
    template: "%s | Seven Stay",
  },
  description: DESCRIPTION,
  applicationName: "Seven Stay",
  keywords: [
    "hoteles Honduras",
    "atención al huésped",
    "WhatsApp hotel",
    "placa NFC QR habitación",
    "Roatán",
    "La Ceiba",
    "Tela",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_HN",
    url: "/",
    siteName: "Seven Stay",
    title: "Seven Stay | Atención al huésped por WhatsApp",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Seven Stay | Atención al huésped por WhatsApp",
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${anton.variable} ${geist.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Activa las animaciones de scroll solo si hay JavaScript */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('motion')",
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=TikTok+Sans:wght@400;500;600;700&family=Geist:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body id="top" className="font-tiktok">
        <Header />
        {children}
        <Footer />

        {/* Google Tag Manager */}
        <Script
          id="gtm-src"
          src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `}
        </Script>
      </body>
    </html>
  );
}