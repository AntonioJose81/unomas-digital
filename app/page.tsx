"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";

const whatsappUrl = "https://wa.me/34657375287?text=Hola%2C%20quiero%20conocer%20UNO%20M%C3%81S%20y%20solicitar%20una%20demostraci%C3%B3n.";

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
    command: "Prepara el presupuesto del trabajo que acabo de terminar. Material: 430 €. Cinco horas.",
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
    <img className="hero-image" src="/images/nipogi-pack/08-banner-taller-uno-plus.webp" alt="Profesional en su taller hablando con UNO desde el móvil junto al mini PC instalado en su negocio" />
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

function Possibilities() {
  const [active, setActive] = useState(0);
  const item = possibilities[active];
  return <section className="possibilities" id="aprende">
    <div className="wrap">
      <div className="possibilities-head reveal">
        <div><span className="eyebrow">NO ES UN CATÁLOGO CERRADO</span><h2>Lo que ves es solo <em>el primer día.</em></h2></div>
        <div><p>UNO+ llega preparado para las tareas habituales. Después puede aprender procedimientos, incorporar nuevas habilidades y conectarse con las herramientas que utiliza tu negocio.</p><strong>Si puedes explicarle cómo haces una tarea, podemos estudiar cómo enseñársela.</strong></div>
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
        <div className="possibility-tabs" role="tablist" aria-label="Ejemplos de nuevas capacidades">{possibilities.map((possibility, index) => <button key={possibility.short} role="tab" aria-selected={active === index} className={active === index ? "active" : ""} onClick={() => setActive(index)}><span>{possibility.number}</span>{possibility.short}</button>)}</div>
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
  return <section className="device" id="equipo"><div className="device-media"><img src="/images/nipogi-pack/01-hero-producto-uno-plus.webp" alt="Mini PC UNO personalizado junto a un teléfono móvil con una nota de voz"/><div className="device-badge"><i>●</i><span><b>UNO está trabajando</b><small>Resumen de hoy preparado</small></span></div></div><div className="device-copy"><span className="eyebrow lime">UN PRODUCTO FÍSICO, LISTO PARA TRABAJAR</span><h2>No alquilas una cuenta.<br/><em>El equipo es tuyo.</em></h2><p>Recibes el mini PC instalado y configurado con el nombre de tu empleado, tus datos, documentos, servicios y forma de trabajar.</p><ul><li><b>01</b><span>Mini PC en propiedad</span></li><li><b>02</b><span>Configuración adaptada</span></li><li><b>03</b><span>Acceso seguro desde el móvil</span></li><li><b>04</b><span>Formación y soporte inicial</span></li></ul></div></section>;
}

function ProductGallery() {
  return <section className="product-gallery wrap reveal" aria-label="El equipo UNO personalizado">
    <div className="product-gallery-copy">
      <span className="eyebrow">DISEÑADO PARA FORMAR PARTE DE TU NEGOCIO</span>
      <h2>Pequeño por fuera.<br/><em>Uno más por dentro.</em></h2>
      <p>Un equipo discreto, personalizado con la marca UNO y preparado para quedarse trabajando en tu oficina, taller, tienda o local.</p>
    </div>
    <figure className="product-shot product-shot-main"><img src="/images/nipogi-pack/02-catalogo-producto-uno-plus.webp" alt="Dos vistas del mini PC UNO personalizado"/></figure>
    <figure className="product-shot product-shot-detail"><img src="/images/nipogi-pack/07-aplicacion-uv-dtf-uno-plus.webp" alt="Aplicación del logotipo UNO sobre el mini PC"/><figcaption>Personalización resistente y acabado profesional.</figcaption></figure>
  </section>;
}

function Offer() {
  const essential = ["Mini PC en propiedad", "Núcleo general de UNO+", "Acceso desde móvil por texto, voz y fotos", "Una plantilla estándar de presupuesto", "Agenda, recordatorios y tareas", "3 meses de soporte inicial"];
  const specialist = ["Todo lo incluido en Esencial", "Paquete de habilidades de tu profesión", "Tus tarifas, servicios y reglas de trabajo", "Plantillas y documentos adaptados", "Tareas programadas y seguimientos", "6 meses de ajustes iniciales"];
  const custom = ["Estudio completo del proceso", "Integraciones con ERP, TPV, CRM o correo", "Flujos y herramientas desarrollados para ti", "Varios usuarios, sedes o empresas", "Elección y combinación de motores", "Soporte y evolución a definir"];
  return <section className="offer" id="oferta"><div className="wrap">
    <div className="section-head light reveal"><div><span className="eyebrow lime">TRES FORMAS DE INCORPORAR UNO+ A TU NEGOCIO</span><h2>Empieza sencillo.<br/><em>Hazlo tan tuyo como necesites.</em></h2></div><p>El equipo y la puesta en marcha se pagan una sola vez. La diferencia está en cuánto debe conocer y conectarse con tu forma de trabajar.</p></div>
    <div className="founder-note reveal"><span>OFERTA FUNDADORES</span><b>10 primeros negocios de Salamanca</b><p>Precio especial a cambio de ayudarnos a probar, medir y mejorar el producto con casos reales.</p></div>
    <div className="price-grid">
      <article><div className="plan-top"><span className="price-label">UNO+ ESENCIAL</span><small>LISTO PARA EMPEZAR</small></div><h3>Un empleado digital para la oficina común.</h3><p>Para quien quiere empezar sin complicaciones con un conjunto de funciones generales ya preparadas.</p><div className="price"><del>Precio futuro 1.290 €</del><strong>890 €</strong><small>+ IVA · oferta fundadores · pago único</small></div><ul>{essential.map(x => <li key={x}>✓ {x}</li>)}</ul><div className="scope-note"><b>Presupuestos</b><span>Incluye una plantilla UNO+ y cálculos configurados. Tú revisas antes de enviar.</span></div><a href="#demo">Quiero empezar <span>↗</span></a></article>
      <article className="featured"><span className="recommended">RECOMENDADO</span><div className="plan-top"><span className="price-label">UNO+ ESPECIALISTA</span><small>ADAPTADO A TU PROFESIÓN</small></div><h3>Ya conoce cómo trabaja tu sector.</h3><p>Para oficios, comercios, hostelería, servicios y pymes que necesitan vocabulario, documentos y rutinas propias.</p><div className="price"><del>Precio futuro desde 2.490 €</del><strong>1.490 €</strong><small>+ IVA · oferta fundadores · pago único</small></div><ul>{specialist.map(x => <li key={x}>✓ {x}</li>)}</ul><div className="scope-note"><b>Presupuestos</b><span>Configuramos tus tarifas, reglas y plantilla profesional con validación antes del PDF.</span></div><a href="#demo">Quiero uno especialista <span>↗</span></a></article>
      <article className="custom-plan"><div className="plan-top"><span className="price-label">UNO+ A MEDIDA</span><small>DESARROLLO COMPLETO</small></div><h3>Construido alrededor de tu empresa.</h3><p>Para procesos propios, integraciones y automatizaciones que no encajan en un paquete sectorial.</p><div className="price"><span className="price-from">PROYECTO PERSONALIZADO</span><strong>A presupuestar</strong><small>Propuesta cerrada después del estudio inicial</small></div><ul>{custom.map(x => <li key={x}>✓ {x}</li>)}</ul><div className="scope-note"><b>Alcance real</b><span>Confirmamos por escrito qué puede hacerse, qué necesita integración y qué queda fuera.</span></div><a href="#demo">Cuéntame mi caso <span>↗</span></a></article>
    </div>
    <div className="costs"><p><b>Motor inteligente</b><span>En Esencial y Especialista instalamos la opción más adecuada. En A Medida se puede elegir o combinar. El consumo externo se factura aparte con límites configurables.</span></p><p><b>Soporte posterior</b><span>Opcional desde 39 €/mes o 390 €/año. Sin cuota conservas el equipo y la configuración entregada, pero no incluye consultas, mantenimiento ni nuevas funciones.</span></p></div>
    <p className="offer-clarity">UNO+ no es un programa cerrado ni promete hacerlo todo sin preparación: cada función utiliza plantillas, reglas, datos o integraciones verificadas. Las acciones importantes pueden requerir siempre tu aprobación.</p>
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
  }} data-ready-for="whatsapp"><div><label>Nombre<input required name="nombre" placeholder="Tu nombre"/></label><label>Tipo de negocio<input required name="negocio" placeholder="Ej. Restaurante"/></label></div><div><label>Teléfono<input required type="tel" name="telefono" placeholder="600 000 000"/></label><label>Correo<input required type="email" name="correo" placeholder="nombre@correo.es"/></label></div><label>¿Qué tarea te quita más tiempo?<textarea name="tarea" rows={3} placeholder="Presupuestos, proveedores, citas, facturas…"/></label><button>Solicitar por WhatsApp <span>↗</span></button>{sent && <p className="success" role="status">Solicitud preparada. Se ha abierto WhatsApp para que revises y envíes el mensaje.</p>}<small>Sin compromiso. Nada se envía hasta que confirmes el mensaje en WhatsApp.</small></form></div></section>;
}

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add("visible")), { threshold: .12 });
    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return <><main><Hero/><Intro/><PowerMap/><Possibilities/><Businesses/><Advanced/><Device/><ProductGallery/><Offer/><Security/><FAQ/><Demo/><section className="closing"><Logo light/><h2>Tu negocio no necesita más horas.<br/><em>Necesita uno más.</em></h2><div className="actions"><a className="button primary" href="#demo">Conoce al tuyo <span>↗</span></a><a className="button ghost" href={whatsappUrl} target="_blank" rel="noreferrer">Hablar por WhatsApp</a></div></section></main><footer><Logo light/><p>UNO · Tu empleado digital.</p><div><a href="#negocios">Para quién</a><a href="#seguridad">Privacidad</a><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a></div></footer></>;
}
