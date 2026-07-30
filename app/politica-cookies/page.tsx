import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Política de cookies | UNO+",
  description: "Información sobre las cookies y el almacenamiento local utilizado en la web de UNO+.",
};

export default function CookiePolicy() {
  return (
    <LegalPage
      eyebrow="TÚ DECIDES"
      title="Política de cookies"
      intro="Esta web utiliza únicamente lo necesario para funcionar y recordar tus preferencias. Te contamos exactamente qué guardamos."
    >
      <section>
        <h2>1. Qué son las cookies</h2>
        <p>
          Las cookies y tecnologías similares, como el almacenamiento local del navegador, permiten guardar
          pequeñas cantidades de información en tu dispositivo. Pueden ser necesarias para el funcionamiento
          de una web o utilizarse, con autorización, para medir su uso o personalizar publicidad.
        </p>
      </section>

      <section>
        <h2>2. Qué utiliza actualmente UNO+</h2>
        <p>
          En este momento la web no instala herramientas de analítica ni píxeles publicitarios. Solo guarda
          una preferencia técnica para recordar la decisión que tomes en el panel de privacidad.
        </p>
        <div className="cookie-table" role="table" aria-label="Tecnologías utilizadas">
          <div className="cookie-table-head" role="row">
            <b role="columnheader">Nombre</b><b role="columnheader">Tipo</b><b role="columnheader">Finalidad</b><b role="columnheader">Duración</b>
          </div>
          <div role="row">
            <span role="cell">uno-cookie-consent-v1</span>
            <span role="cell">Propia · necesaria · localStorage</span>
            <span role="cell">Recordar si aceptaste, rechazaste o configuraste categorías opcionales.</span>
            <span role="cell">Máximo 24 meses</span>
          </div>
        </div>
      </section>

      <section>
        <h2>3. Categorías del panel</h2>
        <ul>
          <li><b>Necesarias:</b> permiten recordar tu elección y mantener el funcionamiento básico. No pueden desactivarse desde el panel.</li>
          <li><b>Analítica:</b> serviría para conocer de forma agregada cómo se usa la web. Actualmente no se utiliza.</li>
          <li><b>Marketing:</b> serviría para campañas o medición publicitaria. Actualmente no se utiliza.</li>
        </ul>
        <p>
          Si incorporamos tecnologías no necesarias, permanecerán bloqueadas hasta que exista una elección
          válida. Esta política se actualizará con su nombre, proveedor, finalidad y duración.
        </p>
      </section>

      <section>
        <h2>4. Cambiar o retirar tu elección</h2>
        <p>
          Puedes volver a abrir el panel en cualquier momento mediante el enlace «Configurar cookies» del pie
          de página. Rechazar es tan sencillo como aceptar y no condiciona el acceso a la información de la web.
        </p>
        <p>
          También puedes borrar el almacenamiento del sitio desde la configuración de tu navegador. Si lo
          haces, volveremos a pedirte una elección en la siguiente visita.
        </p>
      </section>

      <section>
        <h2>5. Enlaces y servicios externos</h2>
        <p>
          La web contiene enlaces a servicios como WhatsApp. UNO+ no instala las cookies de esas páginas:
          pueden hacerlo sus respectivos titulares cuando accedes a ellas, de acuerdo con sus propias políticas.
        </p>
      </section>

      <section>
        <h2>6. Contacto</h2>
        <p>
          Para cualquier consulta sobre privacidad o cookies, escribe a
          <a href="mailto:antonio@unomas.digital"> antonio@unomas.digital</a>.
        </p>
      </section>

      <aside className="legal-note">
        El panel está preparado para bloquear futuras categorías opcionales. Antes de añadir analítica,
        publicidad o contenido incrustado de terceros, habrá que inventariar cada tecnología y actualizar
        esta tabla.
      </aside>
    </LegalPage>
  );
}
