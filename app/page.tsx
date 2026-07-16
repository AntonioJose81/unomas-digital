"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";

const whatsappUrl = "https://wa.me/34657375287?text=Hola%2C%20quiero%20conocer%20UNO%20M%C3%81S%20y%20solicitar%20una%20demostraci%C3%B3n.";

type Profile = {
  name: string;
  short: string;
  image: string;
  alt: string;
  title: string;
  text: string;
  command: string;
  tasks: string[];
};

const profiles: Profile[] = [
  {
    name: "Oficios e instalaciones",
    short: "Oficios",
    image: "/images/oficios-unomas.webp",
    alt: "Electricista enviando una instrucción desde el móvil mientras trabaja en una reforma",
    title: "La obra termina. El presupuesto ya está en marcha.",
    text: "Para fontaneros, electricistas, instaladores, reformistas, carpinteros, pintores y técnicos de mantenimiento.",
    command: "Prepara el presupuesto del trabajo que acabo de terminar. Material: 430 €. Cinco horas.",
    tasks: ["Presupuestos por voz", "Visitas y desplazamientos", "Materiales y proveedores", "Fotos y ayuda técnica"],
  },
  {
    name: "Tiendas y comercios",
    short: "Comercio",
    image: "/images/comercio-unomas.webp",
    alt: "Propietaria de una tienda fotografiando un documento de proveedor desde el móvil",
    title: "El mostrador no tiene por qué parar para hacer oficina.",
    text: "Para tiendas de barrio, comercios especializados, distribuidores, centros de estética y pequeños negocios con encargos.",
    command: "Guarda este albarán, comprueba el pedido y recuérdame reclamar las dos unidades que faltan.",
    tasks: ["Pedidos y encargos", "Reposición programada", "Albaranes y facturas", "Seguimiento de clientes"],
  },
  {
    name: "Bares y restaurantes",
    short: "Hostelería",
    image: "/images/hosteleria-unomas.webp",
    alt: "Propietaria de un restaurante enviando una nota de voz durante el servicio",
    title: "Mientras sigue el servicio, alguien ordena lo de mañana.",
    text: "Para bares, restaurantes, cafeterías, catering y pequeños alojamientos que coordinan compras, tareas y documentación.",
    command: "Prepara el pedido del viernes con las cantidades habituales y déjalo listo para revisar.",
    tasks: ["Pedidos a proveedores", "Listas de compra", "Reservas y eventos", "Tareas recurrentes"],
  },
  {
    name: "Profesionales y servicios",
    short: "Servicios",
    image: "/images/profesionales-unomas.webp",
    alt: "Composición de profesionales de oficios, hostelería, comercio y taller usando el móvil",
    title: "Propuestas, clientes y documentos sin perder la tarde.",
    text: "Para consultores, estudios, academias, clínicas pequeñas, administradores, agencias y profesionales independientes.",
    command: "Prepara una propuesta con el alcance de la reunión y deja el seguimiento para el jueves.",
    tasks: ["Propuestas e informes", "Agenda y reuniones", "Expedientes", "Comunicaciones para revisar"],
  },
  {
    name: "Pequeños negocios y pymes",
    short: "Pymes",
    image: "/images/pyme-unomas.webp",
    alt: "Responsable de un pequeño taller coordinando al equipo mediante una nota de voz",
    title: "El equipo trabaja. La coordinación también.",
    text: "Para talleres, almacenes, mantenimiento, fabricación y pequeñas empresas que necesitan tener el trabajo bajo control.",
    command: "Resume los trabajos pendientes, cuáles esperan material y qué podemos entregar esta semana.",
    tasks: ["Órdenes de trabajo", "Tareas del equipo", "Compras y proveedores", "Resumen de actividad"],
  },
];

const faq = [
  ["¿Tengo que aprender un programa?", "No. Le hablas desde el móvil con mensajes, notas de voz, fotos o documentos, como hablarías con alguien de tu oficina."],
  ["¿El mini PC es mío?", "Sí. UNO MÁS se instala en un pequeño equipo físico configurado para tu negocio y el equipo pasa a ser de tu propiedad."],
  ["¿Puede adaptarse a cualquier negocio?", "Parte de un núcleo común y añadimos el paquete de tu sector, tus datos, proveedores, precios, documentos y reglas de trabajo."],
  ["¿Hay una cuota obligatoria?", "No. La compra y puesta en marcha se pagan una sola vez. El soporte posterior es opcional y los servicios externos se pagan según el consumo real."],
  ["¿Puede enviar presupuestos o pedidos sin permiso?", "Las acciones importantes pueden quedar siempre preparadas para que tú las revises y apruebes antes de enviarlas."],
  ["¿Sustituye al TPV, la asesoría o mi programa de gestión?", "No necesariamente. Se ocupa de la capa de trabajo repetitivo y puede convivir con las herramientas que ya utilizas."],
];

function Logo({ light = false }: { light?: boolean }) {
  return <a className="brand" href="#inicio" aria-label="UNO, inicio"><img src={light ? "/logo-uno-light.svg" : "/logo-uno-dark.svg"} alt="UNO" /></a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <>
    <div className="launch-bar"><strong>10 FUNDADORES · SALAMANCA</strong><span>Instalación completa desde 890 € + IVA</span><a href="#oferta">Ver oferta</a></div>
    <header className="header">
      <Logo light />
      <button className="menu" aria-label="Abrir menú" aria-expanded={open} onClick={() => setOpen(!open)}><i/><i/></button>
      <nav className={open ? "open" : ""}>
        <a href="#potencial" onClick={() => setOpen(false)}>Qué hace</a>
        <a href="#negocios" onClick={() => setOpen(false)}>Para quién</a>
        <a href="#equipo" onClick={() => setOpen(false)}>El equipo</a>
        <a href="#oferta" onClick={() => setOpen(false)}>Precios</a>
        <a href="#seguridad" onClick={() => setOpen(false)}>Seguridad</a>
        <a className="nav-cta" href="#demo" onClick={() => setOpen(false)}>Solicitar demostración</a>
      </nav>
    </header>
  </>;
}

function Hero() {
  return <section className="hero" id="inicio">
    <Header />
    <img className="hero-image" src="/images/hero-negocio-unomas.webp" alt="Propietaria de un pequeño negocio enviando una nota de voz mientras el equipo continúa trabajando" />
    <div className="hero-shade" />
    <div className="hero-copy">
      <span className="eyebrow lime">TU EMPLEADO DIGITAL. EN UN EQUIPO QUE ES TUYO.</span>
      <h1>Tu negocio ya tiene <em>uno más.</em></h1>
      <p>Le hablas desde el móvil. Prepara, organiza, busca, recuerda y deja el trabajo listo para que tú decidas.</p>
      <div className="actions"><a className="button primary" href="#demo">Conoce a tu nuevo empleado <span>↗</span></a><a className="button ghost" href="#potencial">Ver todo lo que puede hacer</a></div>
      <div className="hero-proof"><span><b>Mensajes, voz y fotos</b><small>Sin aprender otro programa</small></span><span><b>Instalado en tu negocio</b><small>El mini PC es tuyo</small></span><span><b>Siempre bajo tu control</b><small>Revisas lo importante</small></span></div>
    </div>
  </section>;
}

function Intro() {
  return <section className="intro wrap reveal">
    <span className="eyebrow">NO IMPORTA DÓNDE TRABAJES</span>
    <h2>Con herramientas, detrás de un mostrador, entre mesas o coordinando un equipo.</h2>
    <p>UNO MÁS aprende cómo funciona tu negocio y se ocupa de la parte repetitiva que queda cuando el día ya debería haber terminado.</p>
    <div className="sector-line">{["Oficios", "Comercios", "Hostelería", "Servicios", "Talleres", "Pequeñas empresas"].map(x => <span key={x}>{x}</span>)}</div>
  </section>;
}

function PowerMap() {
  return <section className="power" id="potencial">
    <div className="wrap">
      <div className="power-heading reveal"><span className="eyebrow lime">TODO ESTO DESDE UNA CONVERSACIÓN</span><h2>Le llega trabajo.<br/><em>Te devuelve resultados.</em></h2><p>Una imagen rápida de lo más potente que puede hacer desde el primer día.</p></div>
      <div className="power-map reveal">
        <div className="input-stack">
          <span><i>01</i><b>Nota de voz</b><small>“Prepara el presupuesto…”</small></span>
          <span><i>02</i><b>Foto</b><small>Ticket, albarán o instalación</small></span>
          <span><i>03</i><b>Documento</b><small>Factura, PDF o plantilla</small></span>
          <span><i>04</i><b>Mensaje</b><small>Una tarea o una consulta</small></span>
        </div>
        <div className="map-arrow"><span>ENTRA</span><i>→</i></div>
        <div className="core">
          <div className="core-logo"><b>UNO</b><strong>+</strong></div>
          <span>TU EMPLEADO DIGITAL</span>
          <p>Conoce tus reglas, tus datos y tu forma de trabajar.</p>
          <div><small>EN TU MINI PC</small><i>● ACTIVO</i></div>
        </div>
        <div className="map-arrow"><span>PREPARA</span><i>→</i></div>
        <div className="output-stack">
          <span><b>Presupuestos y propuestas</b><i>PDF listo para revisar</i></span>
          <span><b>Agenda y tareas</b><i>Citas, avisos y cron jobs</i></span>
          <span><b>Clientes y cobros</b><i>Seguimiento y pendientes</i></span>
          <span><b>Compras y proveedores</b><i>Búsqueda y comparativas</i></span>
          <span><b>Documentos y gastos</b><i>Lectura, clasificación y archivo</i></span>
          <span><b>Ayuda técnica</b><i>Fotos, manuales y comprobaciones</i></span>
        </div>
      </div>
      <div className="approval"><span>✓</span><p><b>Nada importante sale sin ti.</b> Presupuestos, pedidos, pagos y comunicaciones pueden quedar preparados para tu aprobación.</p></div>
    </div>
  </section>;
}

function Businesses() {
  const [active, setActive] = useState(0);
  const p = profiles[active];
  return <section className="businesses wrap" id="negocios">
    <div className="section-head reveal"><div><span className="eyebrow">UN MISMO EMPLEADO. DISTINTOS NEGOCIOS.</span><h2>Elige dónde trabajaría.</h2></div><p>La base es la misma. Cambian el vocabulario, los procesos, los documentos y las tareas propias de cada sector.</p></div>
    <div className="profile-tabs" role="tablist" aria-label="Tipos de negocio">{profiles.map((item, i) => <button key={item.short} className={i === active ? "active" : ""} onClick={() => setActive(i)} role="tab" aria-selected={i === active}><span>0{i + 1}</span>{item.short}</button>)}</div>
    <div className="profile-stage reveal">
      <img key={p.image} src={p.image} alt={p.alt} />
      <div className="profile-copy">
        <span className="profile-name">{p.name}</span>
        <h3>{p.title}</h3>
        <p>{p.text}</p>
        <blockquote>“{p.command}”</blockquote>
        <div className="task-tags">{p.tasks.map(x => <span key={x}>✓ {x}</span>)}</div>
      </div>
    </div>
  </section>;
}

function Advanced() {
  const items = [
    ["08:00", "Tareas programadas", "Cada mañana puede enviarte citas, cobros y trabajos urgentes. También deja seguimientos preparados a la hora acordada."],
    ["⌕", "Búsqueda de proveedores", "Compara opciones, precio, entrega y condiciones. Tú confirmas stock y pedido antes de comprar."],
    ["▣", "Entiende fotografías", "Lee tickets, albaranes, etiquetas y placas. Si un dato no está claro, pregunta en lugar de inventarlo."],
    ["↗", "Ayuda técnica", "Parte de una foto, consulta documentación y propone comprobaciones. El criterio y la seguridad siguen siendo del profesional."],
  ];
  return <section className="advanced wrap"><div className="section-head reveal"><div><span className="eyebrow">MÁS QUE PAPELEO</span><h2>Trabajo que avanza aunque tú estés en otra cosa.</h2></div><p>Rutinas automáticas y capacidades útiles configuradas con límites claros.</p></div><div className="advanced-grid">{items.map(([n,t,d]) => <article className="reveal" key={t}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>;
}

function Device() {
  return <section className="device" id="equipo"><div className="device-media"><img src="/images/equipo-unomas-v2.webp" alt="Mini PC de UNO y un teléfono móvil sobre el mostrador de un pequeño negocio"/><div className="device-badge"><i>●</i><span><b>UNO está trabajando</b><small>Resumen de hoy preparado</small></span></div></div><div className="device-copy"><span className="eyebrow lime">UN PRODUCTO FÍSICO, LISTO PARA TRABAJAR</span><h2>No alquilas una cuenta.<br/><em>El equipo es tuyo.</em></h2><p>Recibes el mini PC instalado y configurado con el nombre de tu empleado, tus datos, documentos, servicios y forma de trabajar.</p><ul><li><b>01</b><span>Mini PC en propiedad</span></li><li><b>02</b><span>Configuración adaptada</span></li><li><b>03</b><span>Acceso seguro desde el móvil</span></li><li><b>04</b><span>Formación y soporte inicial</span></li></ul></div></section>;
}

function Offer() {
  return <section className="offer" id="oferta"><div className="wrap"><div className="section-head light reveal"><div><span className="eyebrow lime">OFERTA FUNDADORES · 10 NEGOCIOS EN SALAMANCA</span><h2>Entrar antes.<br/>Pagar menos. <em>Ayudarnos a afinar.</em></h2></div><p>Sin cuota obligatoria. La compra incluye equipo, instalación y puesta en marcha.</p></div><div className="price-grid">
    <article><span className="price-label">UNO · EMPLEADO DIGITAL</span><h3>La oficina común de cualquier negocio.</h3><p>Para empezar con presupuestos, clientes, agenda, documentos, gastos y seguimientos.</p><div className="price"><del>1.290 €</del><strong>890 €</strong><small>+ IVA · pago único</small></div><ul>{["Mini PC en propiedad", "Núcleo general configurado", "Acceso desde el móvil", "Plantilla inicial", "3 meses de soporte"].map(x => <li key={x}>✓ {x}</li>)}</ul><a href="#demo">Quiero conocerlo <span>↗</span></a></article>
    <article className="featured"><span className="price-label">UNO · ADAPTADO A TU NEGOCIO</span><h3>Ya conoce el trabajo de tu sector.</h3><p>Añade proveedores, vocabulario, procesos, documentos y rutinas propias de tu actividad.</p><div className="price"><del>Desde 2.490 €</del><strong>1.490 €</strong><small>+ IVA · pago único</small></div><ul>{["Todo lo anterior", "Paquete sectorial disponible", "Servicios o productos", "Reglas y tareas programadas", "6 meses de ajustes"].map(x => <li key={x}>✓ {x}</li>)}</ul><a href="#demo">Quiero uno adaptado <span>↗</span></a></article>
  </div><div className="costs"><p><b>Servicios externos</b><span>El consumo de inteligencia se paga según uso y queda a nombre del cliente, con límites configurables.</span></p><p><b>Soporte posterior</b><span>Opcional desde 39 €/mes o 390 €/año. No es necesario para conservar el equipo.</span></p></div></div></section>;
}

function Security() {
  return <section className="security wrap" id="seguridad"><div className="section-head reveal"><div><span className="eyebrow">TU INFORMACIÓN. TUS REGLAS.</span><h2>Útil por fuera.<br/>Protegido por dentro.</h2></div><p>Decides qué permanece en local, qué puede procesarse fuera y qué acciones requieren aprobación.</p></div><div className="security-flow reveal"><span><i>01</i><b>Documento</b><small>Entra en tu equipo</small></span><em>→</em><span><i>02</i><b>Detección</b><small>Localiza datos sensibles</small></span><em>→</em><span><i>03</i><b>Anonimización</b><small>Oculta lo innecesario</small></span><em>→</em><span className="safe"><i>04</i><b>Procesamiento</b><small>Solo con lo necesario</small></span></div><div className="security-notes"><span>Información local cuando lo necesites</span><span>Registro de acciones realizadas</span><span>Aprobación humana de lo importante</span></div><small className="legal">La configuración se adapta al negocio. UNO ayuda a aplicar controles, pero no garantiza por sí solo el cumplimiento normativo ni sustituye el asesoramiento especializado.</small></section>;
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return <section className="faq wrap"><div><span className="eyebrow">PREGUNTAS FRECUENTES</span><h2>Claro desde el principio.</h2></div><div>{faq.map(([q,a],i) => <article key={q} className={open === i ? "open" : ""}><button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}><span>{q}</span><b>{open === i ? "−" : "+"}</b></button><p>{a}</p></article>)}</div></section>;
}

function Demo() {
  const [sent, setSent] = useState(false);
  return <section className="demo" id="demo"><div className="wrap"><div className="demo-copy"><span className="eyebrow lime">DEMOSTRACIÓN CON TU PROPIO NEGOCIO</span><h2>Diez minutos.<br/>Un caso real.<br/><em>Y lo ves trabajar.</em></h2><p>Utilizamos una tarea tuya para enseñarte cómo UNO podría preparar trabajo y devolvértelo listo para revisar.</p><div className="demo-example"><span>NOTA DE VOZ · 00:09</span><b>“Prepara esto y recuérdame revisarlo mañana.”</b><i>▮▮▮▮▮▮▮</i></div></div><form onSubmit={e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const message = [
      "Hola, quiero solicitar una demostración de UNO MÁS.",
      `Nombre: ${form.get("nombre")}`,
      `Negocio: ${form.get("negocio")}`,
      `Teléfono: ${form.get("telefono")}`,
      `Correo: ${form.get("correo")}`,
      `La tarea que más tiempo me quita: ${form.get("tarea") || "No indicada"}`,
    ].join("\n");
    setSent(true);
    window.open(`https://wa.me/34657375287?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }} data-ready-for="whatsapp"><div><label>Nombre<input required name="nombre" placeholder="Tu nombre"/></label><label>Tipo de negocio<input required name="negocio" placeholder="Ej. Restaurante"/></label></div><div><label>Teléfono<input required type="tel" name="telefono" placeholder="600 000 000"/></label><label>Correo<input required type="email" name="correo" placeholder="nombre@correo.es"/></label></div><label>¿Qué tarea te quita más tiempo?<textarea name="tarea" rows={3} placeholder="Presupuestos, proveedores, citas, facturas…"/></label><button>Solicitar por WhatsApp <span>↗</span></button>{sent && <p className="success" role="status">Solicitud preparada. Se ha abierto WhatsApp para que revises y envíes el mensaje.</p>}<small>Sin compromiso. Nada se envía hasta que confirmes el mensaje en WhatsApp.</small></form></div></section>;
}

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add("visible")), { threshold: .12 });
    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return <><main><Hero/><Intro/><PowerMap/><Businesses/><Advanced/><Device/><Offer/><Security/><FAQ/><Demo/><section className="closing"><Logo light/><h2>Tu negocio no necesita más horas.<br/><em>Necesita uno más.</em></h2><div className="actions"><a className="button primary" href="#demo">Conoce al tuyo <span>↗</span></a><a className="button ghost" href={whatsappUrl} target="_blank" rel="noreferrer">Hablar por WhatsApp</a></div></section></main><footer><Logo light/><p>UNO · Tu empleado digital.</p><div><a href="#negocios">Para quién</a><a href="#seguridad">Privacidad</a><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a></div></footer></>;
}
