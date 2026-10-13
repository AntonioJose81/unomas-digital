"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

export default function ServiceInquiry() {
  const [prepared, setPrepared] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hola, quiero valorar cómo UNO+ puede ayudar a mi negocio con IA.",
      `Nombre: ${data.get("nombre")}`, `Empresa o actividad: ${data.get("negocio")}`,
      `Correo: ${data.get("correo")}`, `Necesidad: ${data.get("servicio")}`,
      `Proceso o reto: ${data.get("reto")}`,
    ].join("\n");
    window.open(`https://wa.me/34657375287?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setPrepared(true);
  }
  return <form className="inquiry-form" onSubmit={submit} data-ready-for="whatsapp">
    <div className="field-pair"><label>Tu nombre<input name="nombre" autoComplete="name" required /></label><label>Empresa o actividad<input name="negocio" autoComplete="organization" required /></label></div>
    <label>Correo de contacto<input name="correo" type="email" autoComplete="email" required /></label>
    <label>¿Por dónde quieres empezar?<select name="servicio" defaultValue="Diagnóstico y prioridades"><option>Diagnóstico y prioridades</option><option>Mejorar un proceso o integrar herramientas</option><option>Formación para el equipo</option><option>Acompañamiento continuo</option><option>Empleado digital</option><option>Necesito orientarme</option></select></label>
    <label>¿Qué te gustaría mejorar?<textarea name="reto" rows={4} required placeholder="Cuéntanos qué tarea consume tiempo, qué información se pierde o qué necesita aprender tu equipo." /></label>
    <p className="inquiry-privacy">Responsable: Antonio José Alonso Gómez. Utilizaremos los datos para atender tu consulta y valorar la propuesta. Puedes ejercer tus derechos en antonio@unomas.digital. <Link href="/politica-privacidad/">Información sobre privacidad</Link>.</p>
    <label className="inquiry-consent"><input name="privacidad" type="checkbox" required /><span>He leído la <Link href="/politica-privacidad/">política de privacidad</Link> y autorizo el uso de mis datos para gestionar esta solicitud.</span></label>
    <button className="service-button primary" type="submit">Preparar consulta en WhatsApp <span aria-hidden="true">↗</span></button>
    <small>Revisa y envía el mensaje en WhatsApp para completar la solicitud.</small>
    {prepared ? <p role="status" className="inquiry-status">Consulta preparada. Si WhatsApp no se ha abierto, puedes escribirnos en <a href="mailto:antonio@unomas.digital">antonio@unomas.digital</a>.</p> : null}
  </form>;
}
