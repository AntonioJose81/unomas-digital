"use client";

import Image from "next/image";
import Link from "next/link";
import { CookieSettingsButton } from "./CookieConsent";

export default function SiteFooter() {
  return (
    <footer>
      <Link className="brand" href="/" aria-label="UNO, inicio">
        <Image src="/logo-uno-light.svg" alt="UNO" width={145} height={42} />
      </Link>
      <p>UNO · Tu empleado digital.</p>
      <div>
        <Link href="/#negocios">Para quién</Link>
        <Link href="/politica-privacidad/">Privacidad</Link>
        <Link href="/politica-cookies/">Cookies</Link>
        <CookieSettingsButton />
        <a href="https://wa.me/34657375287" target="_blank" rel="noreferrer">WhatsApp</a>
      </div>
    </footer>
  );
}
