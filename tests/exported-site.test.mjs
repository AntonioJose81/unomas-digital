import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const index = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
test("public landing has no sale prices or founder promotions", () => {
  assert.doesNotMatch(index, /\d[\d.,]*\s*(?:€|euros)|Precio futuro|oferta fundadores/i);
  assert.match(index, /Solicitar demostración/);
  assert.match(index, /propuesta/);
  assert.equal((index.match(/<article><span class="eyebrow">PARA /g) ?? []).length, 3);
});
test("existing anchors and legal routes remain available", async () => {
  for (const id of ["inicio", "potencial", "negocios", "equipo", "oferta", "aprende", "seguridad", "demo"]) assert.ok(index.includes(`id="${id}"`), id);
  for (const route of ["politica-privacidad", "politica-cookies"]) {
    const html = await readFile(new URL(`../out/${route}/index.html`, import.meta.url), "utf8");
    assert.match(html, /<h1>/);
  }
  assert.match(index, /rel="canonical" href="https:\/\/unomas.digital\/"/);
});
test("the public presentation does not advertise the removed prices", async () => {
  const html = await readFile(new URL("../out/presentacion.html", import.meta.url), "utf8");
  const text = html.replace(/src="data:[^"]+"/g, "");
  assert.doesNotMatch(text, /890\s*(?:€|euros)|1[.,]490\s*(?:€|euros)|39\s*€\/|oferta fundadores/i);
  assert.match(text, /Opciones UNO\+/);
});
test("product links to separate training and consulting offers", () => {
  assert.ok(index.includes('href="https://antonioalonso.xyz/formacion"'));
  assert.ok(index.includes('href="https://antonioalonso.xyz/partner-ia"'));
  assert.ok(index.includes('data-ready-for="whatsapp"'));
});
