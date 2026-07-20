import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://unomas.digital"),
  title: "UNO+ | Tu empleado digital",
  description: "Un empleado digital para autónomos, comercios, hostelería, oficios y pequeñas empresas. Trabaja desde un pequeño equipo instalado en tu negocio.",
  openGraph: {
    title: "UNO+ | Tu empleado digital",
    description: "Le hablas desde el móvil. Se ocupa del trabajo de oficina desde un pequeño equipo instalado en tu negocio.",
    url: "https://unomas.digital",
    siteName: "UNO+",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/images/og-unomas.png",
        width: 1200,
        height: 630,
        alt: "UNO+, tu empleado digital instalado en tu negocio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UNO+ | Tu empleado digital",
    description: "Le hablas desde el móvil. Se ocupa del trabajo de oficina.",
    images: ["/images/og-unomas.png"],
  },
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={geist.variable}>{children}</body></html>;
}
