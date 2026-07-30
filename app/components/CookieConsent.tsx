"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "uno-cookie-consent-v1";
const CONSENT_VERSION = 1;
const MAX_AGE = 1000 * 60 * 60 * 24 * 730;

type Consent = {
  version: number;
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
};

function readConsent(): Consent | null {
  try {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    if (!stored) return null;
    const consent = JSON.parse(stored) as Consent;
    if (consent.version !== CONSENT_VERSION || Date.now() - consent.timestamp > MAX_AGE) {
      window.localStorage.removeItem(CONSENT_KEY);
      return null;
    }
    return consent;
  } catch {
    return null;
  }
}

function saveConsent(analytics: boolean, marketing: boolean) {
  const consent: Consent = {
    version: CONSENT_VERSION,
    necessary: true,
    analytics,
    marketing,
    timestamp: Date.now(),
  };

  window.localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  document.documentElement.dataset.analyticsConsent = analytics ? "granted" : "denied";
  document.documentElement.dataset.marketingConsent = marketing ? "granted" : "denied";
  window.dispatchEvent(new CustomEvent("uno:consent-changed", { detail: consent }));
}

export default function CookieConsent() {
  const [ready, setReady] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const openSettings = () => setShowSettings(true);
    window.addEventListener("uno:open-cookie-settings", openSettings);
    const frame = window.requestAnimationFrame(() => {
      const consent = readConsent();
      if (consent) {
        setAnalytics(consent.analytics);
        setMarketing(consent.marketing);
        document.documentElement.dataset.analyticsConsent = consent.analytics ? "granted" : "denied";
        document.documentElement.dataset.marketingConsent = consent.marketing ? "granted" : "denied";
      } else {
        setShowBanner(true);
      }
      setReady(true);
    });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("uno:open-cookie-settings", openSettings);
    };
  }, []);

  useEffect(() => {
    if (!showSettings) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowSettings(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [showSettings]);

  const choose = (allowAnalytics: boolean, allowMarketing: boolean) => {
    setAnalytics(allowAnalytics);
    setMarketing(allowMarketing);
    saveConsent(allowAnalytics, allowMarketing);
    setShowBanner(false);
    setShowSettings(false);
  };

  if (!ready) return null;

  return (
    <>
      {showBanner && (
        <aside className="cookie-banner" aria-label="Aviso de privacidad y cookies">
          <div className="cookie-mark" aria-hidden="true">1+</div>
          <div className="cookie-copy">
            <strong>Tu privacidad, sin letra pequeña.</strong>
            <p>
              Ahora mismo solo usamos almacenamiento técnico para recordar tu elección. Si añadimos medición
              o publicidad, no se activará sin tu permiso. <a href="/politica-cookies/">Ver política de cookies</a>
            </p>
          </div>
          <div className="cookie-actions">
            <button className="cookie-choice reject" onClick={() => choose(false, false)}>Rechazar</button>
            <button className="cookie-choice accept" onClick={() => choose(true, true)}>Aceptar</button>
            <button className="cookie-configure" onClick={() => setShowSettings(true)}>Configurar</button>
          </div>
        </aside>
      )}

      {showSettings && (
        <div className="cookie-overlay" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setShowSettings(false);
        }}>
          <section className="cookie-modal" role="dialog" aria-modal="true" aria-labelledby="cookie-title">
            <div className="cookie-modal-head">
              <div>
                <span>CONTROL DE PRIVACIDAD</span>
                <h2 id="cookie-title">Elige qué permites</h2>
              </div>
              <button aria-label="Cerrar preferencias" onClick={() => setShowSettings(false)}>×</button>
            </div>
            <p className="cookie-intro">
              Las funciones necesarias están siempre activas. Las demás categorías solo se usarán si las
              incorporamos en el futuro y tú las autorizas.
            </p>
            <div className="cookie-options">
              <label>
                <span><b>Necesarias</b><small>Guardan tu elección y permiten el funcionamiento básico.</small></span>
                <input type="checkbox" checked disabled aria-label="Cookies necesarias activadas" />
              </label>
              <label>
                <span><b>Analítica</b><small>Ayudaría a medir el uso de la web. Actualmente no se utiliza.</small></span>
                <input type="checkbox" checked={analytics} onChange={(event) => setAnalytics(event.target.checked)} />
              </label>
              <label>
                <span><b>Marketing</b><small>Serviría para campañas o medición publicitaria. Actualmente no se utiliza.</small></span>
                <input type="checkbox" checked={marketing} onChange={(event) => setMarketing(event.target.checked)} />
              </label>
            </div>
            <div className="cookie-modal-actions">
              <button onClick={() => choose(false, false)}>Rechazar todas</button>
              <button onClick={() => choose(analytics, marketing)}>Guardar preferencias</button>
              <button className="lime" onClick={() => choose(true, true)}>Aceptar todas</button>
            </div>
            <a className="cookie-policy-link" href="/politica-cookies/">Consultar la política completa</a>
          </section>
        </div>
      )}
    </>
  );
}

export function CookieSettingsButton() {
  return (
    <button className="footer-link-button" onClick={() => {
      window.dispatchEvent(new Event("uno:open-cookie-settings"));
    }}>
      Configurar cookies
    </button>
  );
}
