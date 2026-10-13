"use client";

import { useRef } from "react";

export default function ServiceMobileMenu({ links }: { links: string[][] }) {
  const menu = useRef<HTMLDetailsElement>(null);
  function close() { if (menu.current) menu.current.open = false; }
  return <details className="service-mobile" ref={menu} onKeyDown={event => { if (event.key === "Escape") { close(); menu.current?.querySelector("summary")?.focus(); } }}><summary>Menú</summary><nav aria-label="Navegación móvil">{links.map(([label, href]) => <a key={href} href={href} onClick={close}>{label}</a>)}<a href="#contacto" onClick={close}>Hablemos</a></nav></details>;
}
