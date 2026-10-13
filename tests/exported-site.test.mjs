import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const index = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
test("the public offer is an external AI department without prices or product plans", () => {
  assert.match(index, /Tu departamento/);
  assert.match(index, /externo de/);
  for (const service of ["Diagnóstico y prioridades", "Soluciones e integraciones", "Formación del equipo", "Acompañamiento continuo"]) assert.ok(index.includes(service));
  assert.doesNotMatch(index, /\d[\d.,]*\s*(?:€|euros)|Precio futuro|oferta fundadores|UNO\+ Esencial|UNO\+ Especialista/i);
  assert.match(index, /Cuéntanos tu reto/);
});
test("existing anchors and legal routes are preserved", async () => {
  for (const id of ["inicio", "potencial", "negocios", "equipo", "oferta", "aprende", "seguridad", "demo"]) assert.ok(index.includes(`id="${id}"`), id);
  for (const route of ["politica-privacidad", "politica-cookies"]) {
    const html = await readFile(new URL(`../out/${route}/index.html`, import.meta.url), "utf8");
    assert.match(html, /<h1>/);
  }
  assert.match(index, /rel="canonical" href="https:\/\/unomas.digital\/"/);
});
test("the employee digital is a solution and training is part of the service", () => {
  assert.match(index, /UNA SOLUCIÓN DENTRO DE UNO\+/);
  assert.match(index, /El empleado digital sigue aquí/);
  assert.ok(index.includes('href="https://antonioalonso.xyz/formacion"'));
  assert.match(index, /data-ready-for="whatsapp"/);
  assert.match(index, /name="servicio"/);
});
test("the presentation and social metadata use the new positioning", async () => {
  const html = await readFile(new URL("../out/presentacion.html", import.meta.url), "utf8");
  assert.match(html, /Tu departamento/);
  assert.match(html, /Acompañamiento continuo/);
  assert.doesNotMatch(html, /890\s*(?:€|euros)|1[.,]490\s*(?:€|euros)|oferta fundadores/i);
  assert.match(index, /property="og:title" content="UNO\+ \| Tu departamento externo de IA"/);
});
