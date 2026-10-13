import type { Metadata } from "next";
import { Geist } from "next/font/google";
import CookieConsent from "./components/CookieConsent";
import "./globals.css";
import "./service.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://unomas.digital"),
  title: "UNO+ | Tu departamento externo de IA",
  description: "Diagnóstico, mejora de procesos, soluciones e integraciones, formación y acompañamiento de IA para pymes y autónomos.",
  openGraph: {
    title: "UNO+ | Tu departamento externo de IA",
    description: "Tu departamento externo de IA: soluciones para ahorrar tiempo, reducir costes y dar más capacidad a tu equipo.",
    url: "https://unomas.digital",
    siteName: "UNO+",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "UNO+, tu departamento externo de IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UNO+ | Tu departamento externo de IA",
    description: "Diagnóstico, soluciones, formación y acompañamiento de IA para tu negocio.",
    images: ["/opengraph-image"],
  },
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={geist.variable}>{children}<CookieConsent /></body></html>;
}
