import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "./SiteFooter";

export default function LegalPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <>
      <main className="legal-page">
        <header className="legal-header">
          <Link className="brand" href="/" aria-label="Volver a UNO">
            <Image src="/logo-uno-light.svg" alt="UNO" width={145} height={42} />
          </Link>
          <Link href="/">← Volver a la web</Link>
        </header>
        <section className="legal-hero">
          <div className="legal-wrap">
            <span>{eyebrow}</span>
            <h1>{title}</h1>
            <p>{intro}</p>
            <small>Última actualización: 30 de julio de 2026</small>
          </div>
        </section>
        <article className="legal-content legal-wrap">{children}</article>
      </main>
      <SiteFooter />
    </>
  );
}
