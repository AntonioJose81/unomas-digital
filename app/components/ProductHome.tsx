"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import SiteFooter from "./SiteFooter";



const possibilities = [
  {
    short: "Ventas",
    number: "01",
    ask: "Cada mañana busca empresas que puedan necesitar mis servicios y prepara una primera toma de contacto.",
    title: "Prospección preparada para revisar",
    text: "Investiga posibles clientes, reúne información pública y adapta el mensaje a cada negocio.",
    results: ["Empresas que encajan", "Datos de contacto", "Borradores personalizados", "Seguimientos programados"],
  },
  {
    short: "Gastos",
    number: "02",
    ask: "Cuando llegue una factura por correo, guárdala y añádela al control de gastos.",
    title: "Documentación ordenada sin perseguirla",
    text: "Puede detectar el documento, extraer los datos y preparar el registro en las herramientas del negocio.",
    results: ["Factura localizada", "Datos extraídos", "Archivo organizado", "Registro actualizado"],
  },
  {
    short: "Compras",
    number: "03",
    ask: "Busca alternativas para este material y compárame precio, entrega y pedido mínimo.",
    title: "Una comparación útil, no diez pestañas",
    text: "Investiga opciones y deja una comparativa clara. El pedido se realiza únicamente cuando tú lo confirmas.",
    results: ["Proveedores posibles", "Precio y disponibilidad", "Plazos comparados", "Pedido listo para aprobar"],
  },
  {
    short: "Visibilidad",
    number: "04",
    ask: "Analiza mi web y prepara una página para posicionar este nuevo servicio.",
    title: "Tu negocio también avanza por fuera",
    text: "Puede investigar búsquedas, preparar contenidos y proponer mejoras para web, campañas y publicaciones.",
    results: ["Oportunidades detectadas", "Contenido preparado", "Mejoras priorizadas", "Publicación para revisar"],
  },
  {
    short: "Control",
    number: "05",
    ask: "A las ocho dime qué pedidos son urgentes, quién espera respuesta y qué cobros siguen pendientes.",
    title: "El día empieza con lo importante claro",
    text: "Reúne información de distintas fuentes y la convierte en un resumen breve y accionable.",
    results: ["Prioridades del día", "Clientes esperando", "Pedidos bloqueados", "Cobros pendientes"],
  },
  {
    short: "Herramientas",
    number: "06",
    ask: "Necesito una pantalla sencilla para controlar encargos, fechas de entrega y pagos.",
    title: "Puede ayudarte a crear la herramienta que falta",
    text: "Según el caso, puede preparar una hoja automatizada, un formulario, un informe o un pequeño panel interno.",
    results: ["Necesidad estructurada", "Prototipo funcional", "Datos conectados", "Proceso documentado"],
  },
];

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
    image: "/images/nipogi-pack/04-taller-uno-plus.webp",
    alt: "Electricista enviando una instrucción desde el móvil mientras trabaja en una reforma",
    title: "La obra termina. El presupuesto ya está en marcha.",
    text: "Para fontaneros, electricistas, instaladores, reformistas, carpinteros, pintores y técnicos de mantenimiento.",
    command: "Prepara el presupuesto del trabajo que acabo de terminar. Material según el albarán adjunto. Cinco horas.",
    tasks: ["Presupuestos por voz", "Visitas y desplazamientos", "Materiales y proveedores", "Fotos y ayuda técnica"],
  },
  {
    name: "Tiendas y comercios",
    short: "Comercio",
    image: "/images/nipogi-pack/05-tienda-uno-plus.webp",
    alt: "Propietaria de una tienda fotografiando un documento de proveedor desde el móvil",
    title: "El mostrador no tiene por qué parar para hacer oficina.",
    text: "Para tiendas de barrio, comercios especializados, distribuidores, centros de estética y pequeños negocios con encargos.",
    command: "Guarda este albarán, comprueba el pedido y recuérdame reclamar las dos unidades que faltan.",
    tasks: ["Pedidos y encargos", "Reposición programada", "Albaranes y facturas", "Seguimiento de clientes"],
  },
  {
    name: "Bares y restaurantes",
    short: "Hostelería",
    image: "/images/nipogi-pack/06-hosteleria-uno-plus.webp",
    alt: "Propietaria de un restaurante enviando una nota de voz durante el servicio",
    title: "Mientras sigue el servicio, alguien ordena lo de mañana.",
    text: "Para bares, restaurantes, cafeterías, catering y pequeños alojamientos que coordinan compras, tareas y documentación.",
    command: "Prepara el pedido del viernes con las cantidades habituales y déjalo listo para revisar.",
    tasks: ["Pedidos a proveedores", "Listas de compra", "Reservas y eventos", "Tareas recurrentes"],
  },
  {
    name: "Profesionales y servicios",
    short: "Servicios",
    image: "/images/nipogi-pack/03-oficina-uno-plus.webp",
    alt: "Composición de profesionales de oficios, hostelería, comercio y taller usando el móvil",
    title: "Propuestas, clientes y documentos sin perder la tarde.",
    text: "Para consultores, estudios, academias, clínicas pequeñas, administradores, agencias y profesionales independientes.",
    command: "Prepara una propuesta con el alcance de la reunión y deja el seguimiento para el jueves.",
    tasks: ["Propuestas e informes", "Agenda y reuniones", "Expedientes", "Comunicaciones para revisar"],
  },
  {
    name: "Pequeños negocios y pymes",
    short: "Pymes",
    image: "/images/nipogi-pack/08-banner-taller-uno-plus.webp",
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
  ["¿Puede aprender nuevas tareas?", "Sí. No tiene un catálogo cerrado: pueden añadirse procedimientos, habilidades e integraciones según evoluciona el negocio. Cada nueva capacidad se configura, prueba y limita antes de utilizarse."],
  ["¿Hay una cuota obligatoria?", "No. La compra y puesta en marcha se pagan una sola vez. El soporte posterior es opcional y los servicios externos se pagan según el consumo real."],
  ["¿Qué diferencia hay entre Esencial, Especialista y A Medida?", "Esencial incorpora un núcleo común y una plantilla estándar. Especialista añade las habilidades, documentos, tarifas y reglas de una profesión. A Medida conecta procesos y programas propios y se valora después de estudiar el negocio."],
  ["¿Puedo elegir el modelo de inteligencia artificial?", "En Esencial y Especialista instalamos el motor que mejor encaja por coste, calidad y uso. En A Medida podemos comparar y configurar modelos concretos. El motor puede cambiarse más adelante sin sustituir el equipo."],
  ["¿Puede enviar presupuestos o pedidos sin permiso?", "Configuramos qué acciones deben quedar preparadas para que tú las revises y apruebes antes de enviarlas."],
  ["¿Sustituye al TPV, la asesoría o mi programa de gestión?", "No necesariamente. Se ocupa de la capa de trabajo repetitivo y puede convivir con las herramientas que ya utilizas."],
];

function Logo({ light = false }: { light?: boolean }) {
  return <a className="brand" href="#inicio" aria-label="UNO, inicio"><img src={light ? "/logo-uno-light.svg" : "/logo-uno-dark.svg"} alt="UNO" /></a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <>
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <header className="header">
      <Logo />
      <button className="menu" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-controls="main-navigation" aria-expanded={open} onClick={() => setOpen(!open)}><i/><i/></button>
      <nav id="main-navigation" aria-label="Navegación principal" className={open ? "open" : ""}>
        <a href="#potencial" onClick={() => setOpen(false)}>Qué hace</a>
        <a href="#negocios" onClick={() => setOpen(false)}>Para quién</a>
        <a href="#equipo" onClick={() => setOpen(false)}>El equipo</a>
        <a href="#oferta" onClick={() => setOpen(false)}>Opciones</a>
        <a href="#seguridad" onClick={() => setOpen(false)}>Seguridad</a>
        <a className="nav-cta" href="#demo" onClick={() => setOpen(false)}>Solicitar demostración</a>
      </nav>
    </header>
  </>;
}

function Hero() {
  return <>
    <section className="hero" id="inicio">
      <div className="hero-copy">
        <span className="eyebrow">UNO+ · TU EMPLEADO DIGITAL</span>
        <h1>Menos trabajo pendiente.<br /><em>Uno más en tu negocio.</em></h1>
        <p>Le hablas desde el móvil. UNO+ prepara presupuestos, ordena documentos y recuerda lo que falta. Tú revisas y decides.</p>
        <div className="actions"><a className="button primary" href="#demo">Solicitar demostración <span aria-hidden="true">↗</span></a><a className="button ghost" href="#potencial">Ver cómo trabaja</a></div>
        <div className="hero-proof"><span><b>Un equipo que es tuyo</b><small>Mini PC instalado en tu negocio</small></span><span><b>Tu forma de trabajar</b><small>Reglas, documentos y tareas configuradas</small></span><span><b>Tu criterio, siempre</b><small>Revisas las acciones importantes</small></span></div>
      </div>
      <figure className="hero-product"><img src="/images/nipogi-pack/01-hero-producto-uno-plus.webp" alt="Mini PC UNO+ personalizado junto al móvil desde el que se utiliza" width="1024" height="1024" fetchPriority="high" /><figcaption>Un empleado digital en un equipo físico.<span>Texto · Voz · Fotos · Documentos</span></figcaption></figure>
    </section>
  </>;
}

function PowerMap() {
  return <section className="power" id="potencial">
    <div className="wrap">
      <div className="power-heading reveal"><span className="eyebrow lime">TODO ESTO DESDE UNA CONVERSACIÓN</span><h2>Le llega trabajo.<br/><em>Te devuelve resultados.</em></h2><p>Ejemplos de tareas que podemos configurar. El alcance y las conexiones se acuerdan para tu negocio.</p></div>
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
          <div><small>EN TU MINI PC</small><i>CONFIGURADO PARA TI</i></div>
        </div>
        <div className="map-arrow"><span>PREPARA</span><i>→</i></div>
        <div className="output-stack">
          <span><b>Presupuestos y propuestas</b><i>PDF listo para revisar</i></span>
          <span><b>Agenda y tareas</b><i>Citas, avisos y tareas programadas</i></span>
          <span><b>Clientes y cobros</b><i>Seguimiento y pendientes</i></span>
          <span><b>Compras y proveedores</b><i>Búsqueda y comparativas</i></span>
          <span><b>Documentos y gastos</b><i>Lectura, clasificación y archivo</i></span>
          <span><b>Ayuda técnica</b><i>Fotos, manuales y comprobaciones</i></span>
        </div>
      </div>
      <div className="approval"><span>✓</span><p><b>Tú decides qué se envía.</b> Presupuestos, pedidos, pagos y comunicaciones pueden quedar preparados para tu aprobación.</p></div>
    </div>
  </section>;
}

function Possibilities() {
  const [active, setActive] = useState(0);
  const item = possibilities[active];
  return <section className="possibilities" id="aprende">
    <div className="wrap">
      <div className="possibilities-head reveal">
        <div><span className="eyebrow">NO ES UN CATÁLOGO CERRADO</span><h2>Lo que ves es solo <em>el primer día.</em></h2></div>
        <div><p>UNO+ se configura para las tareas acordadas. Después puede aprender procedimientos, incorporar nuevas habilidades y conectarse con las herramientas que utiliza tu negocio.</p><strong>Si puedes explicarle cómo haces una tarea, podemos estudiar cómo enseñársela.</strong></div>
      </div>

      <div className="growth-path reveal" aria-label="Cómo crece UNO con el negocio">
        <span><i>01</i><b>Llega preparado</b><small>Presupuestos, clientes, agenda, documentos y seguimientos.</small></span>
        <em>→</em>
        <span><i>02</i><b>Aprende tu forma</b><small>Precios, reglas, plantillas, proveedores y manera de comunicar.</small></span>
        <em>→</em>
        <span className="growth-highlight"><i>03</i><b>Suma habilidades</b><small>Nuevos procesos, automatizaciones e integraciones cuando los necesitas.</small></span>
      </div>

      <div className="possibility-console reveal">
        <div className="console-bar"><span>UNO+ · NUEVA PETICIÓN</span><i>● LISTO PARA APRENDER</i></div>
        <div className="console-content">
          <div className="console-request"><small>TÚ LE PIDES</small><p>“{item.ask}”</p><span>Mensaje · Voz · Foto · Documento</span></div>
          <div className="console-response"><div className="response-label"><small>UNO+ PREPARA</small><b>NUEVA HABILIDAD</b></div><h3>{item.title}</h3><p>{item.text}</p><div className="response-results">{item.results.map(result => <span key={result}>✓ {result}</span>)}</div></div>
        </div>
        <div className="possibility-tabs" role="group" aria-label="Ejemplos de nuevas capacidades">{possibilities.map((possibility, index) => <button key={possibility.short} aria-pressed={active === index} className={active === index ? "active" : ""} onClick={() => setActive(index)}><span>{possibility.number}</span>{possibility.short}</button>)}</div>
      </div>

      <div className="possibility-foot reveal"><b>No prometemos magia.</b><span>Las nuevas capacidades dependen de las herramientas, permisos e integraciones disponibles. Las acciones sensibles pueden requerir siempre tu aprobación.</span></div>
    </div>
  </section>;
}

function Businesses() {
  const [active, setActive] = useState(0);
  const p = profiles[active];
  return <section className="businesses wrap" id="negocios">
    <div className="section-head reveal"><div><span className="eyebrow">UN MISMO EMPLEADO. DISTINTOS NEGOCIOS.</span><h2>Elige dónde trabajaría.</h2></div><p>La base es la misma. Cambian el vocabulario, los procesos, los documentos y las tareas propias de cada sector.</p></div>
    <div className="profile-tabs" role="group" aria-label="Tipos de negocio">{profiles.map((item, i) => <button key={item.short} className={i === active ? "active" : ""} onClick={() => setActive(i)} aria-pressed={i === active}><span>0{i + 1}</span>{item.short}</button>)}</div>
    <div className="profile-stage reveal">
      <img key={p.image} loading="lazy" src={p.image} alt={p.alt} />
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

function Device() {
  return <section className="device" id="equipo"><div className="device-media"><img loading="lazy" src="/images/nipogi-pack/01-hero-producto-uno-plus.webp" alt="Mini PC UNO personalizado junto a un teléfono móvil con una nota de voz"/></div><div className="device-copy"><span className="eyebrow lime">UN PRODUCTO FÍSICO, LISTO PARA TRABAJAR</span><h2>No alquilas una cuenta.<br/><em>El equipo es tuyo.</em></h2><p>Recibes el mini PC instalado y configurado con el nombre de tu empleado, tus datos, documentos, servicios y forma de trabajar.</p><ul><li><b>01</b><span>Mini PC en propiedad</span></li><li><b>02</b><span>Configuración adaptada</span></li><li><b>03</b><span>Acceso seguro desde el móvil</span></li><li><b>04</b><span>Formación y soporte inicial</span></li></ul></div></section>;
}

function Offer() {
  const options = [
    { name: "UNO+ Esencial", label: "PARA EMPEZAR", title: "Las tareas habituales, bajo control.", text: "Un punto de partida para organizar el trabajo de oficina con funciones generales configuradas.", features: ["Mini PC en propiedad y configuración inicial", "Acceso desde móvil por texto, voz y fotos", "Una plantilla estándar de presupuesto", "Agenda, recordatorios y tareas", "Soporte de puesta en marcha"], cta: "Consultar Esencial" },
    { name: "UNO+ Especialista", label: "PARA TU PROFESIÓN", title: "Tu vocabulario. Tus documentos. Tus reglas.", text: "Adaptamos el núcleo de UNO+ a las rutinas y documentos que utiliza tu sector.", features: ["Todo lo incluido en Esencial", "Habilidades específicas de tu profesión", "Tus tarifas, servicios y reglas", "Plantillas y documentos adaptados", "Tareas programadas y seguimientos"], cta: "Consultar Especialista" },
    { name: "UNO+ A medida", label: "PARA PROCESOS PROPIOS", title: "Conectado con las herramientas de tu empresa.", text: "Estudiamos las integraciones y automatizaciones que necesitas antes de definir el alcance.", features: ["Estudio del proceso y sus requisitos", "Integraciones a valorar con ERP, TPV o CRM", "Flujos y herramientas para tu caso", "Usuarios y sedes según alcance", "Plan de soporte y evolución acordado"], cta: "Consultar mi caso" },
  ];
  return <section className="offer" id="oferta"><div className="wrap">
    <div className="section-head"><div><span className="eyebrow">CÓMO INCORPORAR UNO+</span><h2>Elige el punto de partida.<br /><em>Definimos el alcance contigo.</em></h2></div><p>Cuéntanos qué tareas quieres delegar y qué herramientas utilizas. Recibirás una propuesta con configuración, puesta en marcha y soporte.</p></div>
    <div className="options-grid">{options.map(option => <article key={option.name}><span className="eyebrow">{option.label}</span><h3>{option.name}</h3><h4>{option.title}</h4><p>{option.text}</p><ul>{option.features.map(feature => <li key={feature}>{feature}</li>)}</ul><a href={`https://wa.me/34657375287?text=${encodeURIComponent(`Hola, me interesa ${option.name}. Quiero conocer el alcance y solicitar una propuesta para mi negocio.`)}`} target="_blank" rel="noreferrer">{option.cta}<span aria-hidden="true">↗</span></a></article>)}</div>
    <div className="costs"><p><b>Servicios externos</b><span>El consumo del motor de IA y las herramientas externas se detalla en la propuesta, con límites configurables.</span></p><p><b>Soporte posterior</b><span>Es opcional. Acordamos qué incluye el mantenimiento, los ajustes y las nuevas funciones antes de comenzar.</span></p></div>
    <p className="offer-clarity">Cada función utiliza plantillas, reglas, datos o integraciones verificadas. Confirmamos por escrito qué puede hacerse y qué requiere desarrollo adicional.</p>
  </div></section>;
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
    const message = ["Hola, quiero solicitar una demostración de UNO MÁS.", `Nombre: ${form.get("nombre")}`, `Negocio: ${form.get("negocio")}`, `Teléfono: ${form.get("telefono")}`, `Correo: ${form.get("correo")}`, `La tarea que más tiempo me quita: ${form.get("tarea") || "No indicada"}`].join("\n");
    setSent(true);
    window.open(`https://wa.me/34657375287?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }} data-ready-for="whatsapp"><div><label>Nombre<input required name="nombre" placeholder="Tu nombre"/></label><label>Tipo de negocio<input required name="negocio" placeholder="Ej. Restaurante"/></label></div><div><label>Teléfono<input required type="tel" name="telefono" placeholder="600 000 000"/></label><label>Correo<input required type="email" name="correo" placeholder="nombre@correo.es"/></label></div><label>¿Qué tarea te quita más tiempo?<textarea name="tarea" rows={3} placeholder="Presupuestos, proveedores, citas, facturas…"/></label><p className="privacy-layer"><b>Responsable:</b> Antonio José Alonso Gómez. <b>Finalidad:</b> atender tu solicitud y preparar la demostración. <b>Base:</b> tu consentimiento y medidas precontractuales. <b>Derechos:</b> puedes ejercerlos en antonio@unomas.digital. <a href="/politica-privacidad/" target="_blank">Más información</a>.</p><label className="privacy-check"><input required type="checkbox" name="privacidad"/><span>He leído la <a href="/politica-privacidad/" target="_blank">política de privacidad</a> y autorizo el uso de mis datos para gestionar esta solicitud.</span></label><button>Solicitar por WhatsApp <span>↗</span></button>{sent && <p className="success" role="status">Solicitud preparada. Se ha abierto WhatsApp para que revises y envíes el mensaje.</p>}<small>Sin compromiso. Nada se envía hasta que confirmes el mensaje en WhatsApp.</small></form></div></section>;
}

function ServiceBridge() {
  return <aside className="service-bridge wrap"><div><span className="eyebrow">PRODUCTO, CONSULTORÍA Y FORMACIÓN</span><h2>UNO+ es tu empleado digital.</h2><p>Si buscas un proyecto de implantación más amplio o formación para tu equipo, conoce los servicios de Antonio Alonso.</p></div><div><a href="https://antonioalonso.xyz/partner-ia">Consultoría e implantación ↗</a><a href="https://antonioalonso.xyz/formacion">Formación para equipos ↗</a></div></aside>;
}

export default function Home() {
  return <><Header/><main id="contenido"><Hero/><PowerMap/><Businesses/><Device/><Offer/><Possibilities/><Security/><FAQ/><Demo/><ServiceBridge/></main><SiteFooter /></>;
}
