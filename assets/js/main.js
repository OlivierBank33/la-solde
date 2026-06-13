// La Solde — interactions UI
document.addEventListener("DOMContentLoaded", function () {
  // Menu mobile
  const burger = document.querySelector(".burger");
  const links = document.querySelector(".nav-links");
  if (burger && links) {
    burger.addEventListener("click", () => links.classList.toggle("open"));
  }

  // Apparition au scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  // Barre CTA collante : apparaît après avoir scrollé 600px
  const sticky = document.getElementById("stickyCta");
  if (sticky) {
    const toggle = () => {
      if (window.scrollY > 600) sticky.classList.add("show");
      else sticky.classList.remove("show");
    };
    window.addEventListener("scroll", toggle, { passive: true });
    toggle();
  }

  // Accordéon FAQ
  document.querySelectorAll(".faq-q").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      const answer = item.querySelector(".faq-a");
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach((o) => {
        o.classList.remove("open");
        o.querySelector(".faq-a").style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add("open");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});

// ---- Simulateurs ----
function fmt(n) {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
}

// Intérêts composés
function simInterets() {
  const initial = parseFloat(document.getElementById("ci-initial").value) || 0;
  const mensuel = parseFloat(document.getElementById("ci-mensuel").value) || 0;
  const taux = (parseFloat(document.getElementById("ci-taux").value) || 0) / 100;
  const annees = parseInt(document.getElementById("ci-annees").value) || 0;
  const r = taux / 12, n = annees * 12;
  const capital = initial * Math.pow(1 + r, n) + (r > 0 ? mensuel * ((Math.pow(1 + r, n) - 1) / r) : mensuel * n);
  const verse = initial + mensuel * n;
  const res = document.getElementById("ci-result");
  res.querySelector(".big").textContent = fmt(capital);
  res.querySelector(".detail").textContent =
    "Total versé : " + fmt(verse) + " — Intérêts générés : " + fmt(capital - verse) +
    " (+" + Math.round(((capital - verse) / verse) * 100) + " %)";
  res.classList.add("show");
}

// Épargne OPEX
function simOpex() {
  const solde = parseFloat(document.getElementById("op-solde").value) || 0;
  const mois = parseInt(document.getElementById("op-mois").value) || 0;
  const zone = parseFloat(document.getElementById("op-zone").value) || 1.5;
  const depenses = parseFloat(document.getElementById("op-depenses").value) || 0;
  const totalPercu = solde * zone * mois;
  const epargne = totalPercu - depenses * mois;
  const res = document.getElementById("op-result");
  res.querySelector(".big").textContent = fmt(Math.max(epargne, 0));
  res.querySelector(".detail").textContent =
    "Rémunération totale estimée sur la mission : " + fmt(totalPercu) +
    " — exonérée d'impôt sur le revenu. Placée 15 ans à 5 %/an, cette épargne deviendrait ≈ " +
    fmt(Math.max(epargne, 0) * Math.pow(1.05, 15)) + ".";
  res.classList.add("show");
}

// Pension militaire (estimation simplifiée)
function simPension() {
  const soldeIndiciaire = parseFloat(document.getElementById("pe-solde").value) || 0;
  const services = parseFloat(document.getElementById("pe-services").value) || 0;
  const bonif = parseFloat(document.getElementById("pe-bonif").value) || 0;
  const trimAcquis = (services + bonif) * 4;
  const trimRequis = 172; // génération 1973+
  const taux = Math.min((trimAcquis / trimRequis) * 0.75, 0.80);
  const pension = soldeIndiciaire * taux;
  const res = document.getElementById("pe-result");
  res.querySelector(".big").textContent = fmt(pension) + " / mois";
  res.querySelector(".detail").textContent =
    "Taux de liquidation estimé : " + (taux * 100).toFixed(1) + " % (" + trimAcquis +
    " trimestres dont bonifications). Estimation simplifiée hors décote/surcote et minimum garanti — faites une simulation officielle sur retraitesdeletat.gouv.fr avant toute décision.";
  res.classList.add("show");
}
