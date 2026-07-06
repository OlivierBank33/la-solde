/* ==========================================================================
   Ma Solde — Suivi d'audience (Google Analytics 4) + consentement RGPD
   --------------------------------------------------------------------------
   POUR ACTIVER LE SUIVI :
   1. Crée un compte gratuit sur https://analytics.google.com
   2. Crée une propriété "Ma Solde" puis un flux de données "Web" (masolde.fr)
   3. Copie ton "ID de mesure" (format G-XXXXXXXXXX)
   4. Colle-le ci-dessous à la place de G-XXXXXXXXXX
   C'est tout. Le bandeau cookies et le suivi s'activent automatiquement.
   Tant que l'ID reste "G-XXXXXXXXXX", aucun cookie n'est déposé.
   ========================================================================== */

var GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // <-- REMPLACE PAR TON ID

(function () {
  "use strict";

  var STORAGE_KEY = "masolde_consent"; // "granted" | "denied"
  var isConfigured = GA_MEASUREMENT_ID && GA_MEASUREMENT_ID.indexOf("XXXX") === -1;

  // Rien à faire tant que l'ID n'est pas renseigné.
  if (!isConfigured) return;

  // ---- Chargement de Google Analytics 4 ----
  function loadGA() {
    if (window.__gaLoaded) return;
    window.__gaLoaded = true;

    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_MEASUREMENT_ID;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
  }

  // ---- Bandeau de consentement (RGPD / CNIL) ----
  function showBanner() {
    var bar = document.createElement("div");
    bar.setAttribute("role", "dialog");
    bar.setAttribute("aria-label", "Consentement aux cookies");
    bar.style.cssText =
      "position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;" +
      "max-width:720px;margin:0 auto;background:#0d1b2e;color:#e8eef7;" +
      "border:1px solid rgba(255,255,255,.14);border-radius:14px;" +
      "box-shadow:0 20px 50px rgba(0,0,0,.45);padding:18px 20px;" +
      "font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;" +
      "font-size:.92rem;line-height:1.5;display:flex;flex-wrap:wrap;" +
      "align-items:center;gap:12px 16px;";

    var txt = document.createElement("div");
    txt.style.cssText = "flex:1 1 300px;min-width:260px;";
    txt.innerHTML =
      "🍪 <strong>On respecte votre vie privée.</strong> Nous utilisons une mesure " +
      "d'audience anonyme (Google Analytics) pour améliorer le site. Aucune donnée " +
      "personnelle n'est revendue. " +
      '<a href="mentions-legales.html" style="color:#f3d98a;text-decoration:underline;">En savoir plus</a>.';

    var btns = document.createElement("div");
    btns.style.cssText = "display:flex;gap:10px;flex:0 0 auto;";

    var refuse = document.createElement("button");
    refuse.type = "button";
    refuse.textContent = "Refuser";
    refuse.style.cssText =
      "cursor:pointer;border:1px solid rgba(255,255,255,.25);background:transparent;" +
      "color:#e8eef7;border-radius:9px;padding:10px 16px;font-size:.9rem;font-weight:600;";

    var accept = document.createElement("button");
    accept.type = "button";
    accept.textContent = "Accepter";
    accept.style.cssText =
      "cursor:pointer;border:0;background:linear-gradient(135deg,#e8c15a,#f3d98a);" +
      "color:#070b13;border-radius:9px;padding:10px 18px;font-size:.9rem;font-weight:800;";

    function close() { if (bar.parentNode) bar.parentNode.removeChild(bar); }

    accept.addEventListener("click", function () {
      try { localStorage.setItem(STORAGE_KEY, "granted"); } catch (e) {}
      loadGA();
      close();
    });
    refuse.addEventListener("click", function () {
      try { localStorage.setItem(STORAGE_KEY, "denied"); } catch (e) {}
      close();
    });

    btns.appendChild(refuse);
    btns.appendChild(accept);
    bar.appendChild(txt);
    bar.appendChild(btns);
    document.body.appendChild(bar);
  }

  // ---- Décision au chargement ----
  function init() {
    var consent = null;
    try { consent = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (consent === "granted") {
      loadGA();
    } else if (consent === "denied") {
      // rien : l'utilisateur a refusé
    } else {
      showBanner();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
