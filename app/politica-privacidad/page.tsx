import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Política de privacidad | UNO+",
  description: "Información sobre cómo UNO+ trata los datos personales recibidos a través de su web.",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage
      eyebrow="INFORMACIÓN CLARA"
      title="Política de privacidad"
      intro="Aquí explicamos qué datos podemos recibir a través de esta web, para qué los utilizamos y cómo puedes ejercer tus derechos."
    >
      <section>
        <h2>1. Responsable del tratamiento</h2>
        <dl>
          <div><dt>Responsable</dt><dd>Antonio José Alonso Gómez</dd></div>
          <div><dt>Proyecto</dt><dd>UNO+</dd></div>
          <div><dt>Correo</dt><dd><a href="mailto:antonio@unomas.digital">antonio@unomas.digital</a></dd></div>
          <div><dt>Teléfono</dt><dd><a href="tel:+34657375287">+34 657 375 287</a></dd></div>
          <div><dt>Sitio web</dt><dd><a href="https://unomas.digital">unomas.digital</a></dd></div>
        </dl>
      </section>

      <section>
        <h2>2. Qué información tratamos</h2>
        <p>Podemos tratar los datos que facilites voluntariamente al solicitar información o una demostración:</p>
        <ul>
          <li>Nombre y datos de contacto.</li>
          <li>Profesión, empresa o tipo de negocio.</li>
          <li>La consulta y la información que decidas incluir en ella.</li>
          <li>Datos técnicos básicos necesarios para mantener la seguridad y el funcionamiento de la web.</li>
        </ul>
        <p>No envíes por el formulario información confidencial de clientes, contraseñas, datos bancarios ni documentación sensible.</p>
      </section>

      <section>
        <h2>3. Para qué y con qué base jurídica</h2>
        <div className="legal-table">
          <div><b>Atender consultas y demostraciones</b><span>Tu consentimiento y, cuando proceda, la aplicación de medidas precontractuales solicitadas por ti.</span></div>
          <div><b>Preparar una propuesta</b><span>La aplicación de medidas precontractuales y la gestión de la posible relación comercial.</span></div>
          <div><b>Mantener la seguridad de la web</b><span>Nuestro interés legítimo en prevenir abusos, errores y accesos no autorizados.</span></div>
          <div><b>Comunicaciones comerciales</b><span>Solo cuando exista consentimiento u otra base válida. Puedes pedir que cesen en cualquier momento.</span></div>
        </div>
      </section>

      <section>
        <h2>4. Cómo funciona el formulario</h2>
        <p>
          El formulario de esta web prepara un mensaje en WhatsApp. Nada se envía automáticamente: tú puedes
          revisar el texto y decidir si lo remites. Desde ese momento también resultan aplicables las condiciones
          y políticas del servicio de mensajería que utilices.
        </p>
      </section>

      <section>
        <h2>5. Destinatarios y proveedores</h2>
        <p>
          No vendemos tus datos. Podrán acceder a la información únicamente los proveedores imprescindibles
          para prestar el servicio —por ejemplo, alojamiento web, dominio, correo o comunicaciones— bajo sus
          propias condiciones y, cuando corresponda, como encargados del tratamiento.
        </p>
        <p>
          La web se publica mediante GitHub Pages y el dominio y correo se gestionan con DonDominio. Si utilizas
          WhatsApp para contactar, la comunicación se realizará a través de ese servicio. Algunos proveedores
          pueden operar fuera del Espacio Económico Europeo y aplicar los mecanismos de protección previstos
          en la normativa cuando resulten exigibles.
        </p>
      </section>

      <section>
        <h2>6. Durante cuánto tiempo</h2>
        <p>
          Conservaremos las consultas durante el tiempo necesario para responderlas y hacer el seguimiento
          razonable de la solicitud. Si se inicia una relación comercial, la información se conservará durante
          la relación y los plazos legales aplicables. Los datos basados únicamente en consentimiento se
          eliminarán o dejarán de utilizarse cuando lo retires, salvo obligación legal.
        </p>
      </section>

      <section>
        <h2>7. Tus derechos</h2>
        <p>
          Puedes solicitar acceso, rectificación, supresión, oposición, limitación o portabilidad, así como
          retirar tu consentimiento, escribiendo a <a href="mailto:antonio@unomas.digital">antonio@unomas.digital</a>.
          Podremos pedirte información razonable para verificar tu identidad.
        </p>
        <p>
          Si consideras que el tratamiento no es correcto, puedes presentar una reclamación ante la
          <a href="https://www.aepd.es/" target="_blank" rel="noreferrer"> Agencia Española de Protección de Datos</a>.
        </p>
      </section>

      <section>
        <h2>8. Seguridad, menores y cambios</h2>
        <p>
          Aplicamos medidas razonables para proteger la información. Esta web se dirige a profesionales y
          empresas y no está pensada para recoger datos de menores. Podemos actualizar esta política cuando
          cambien la web, sus proveedores o la normativa; la fecha visible indicará la versión vigente.
        </p>
      </section>

      <aside className="legal-note">
        Esta política describe el funcionamiento actual de la web. Antes de incorporar un CRM, analítica,
        newsletter o un formulario con envío directo, deberá revisarse y actualizarse.
      </aside>
    </LegalPage>
  );
}
