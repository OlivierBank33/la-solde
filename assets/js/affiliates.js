/**
 * LA SOLDE — Configuration centrale des liens d'affiliation
 * ----------------------------------------------------------
 * MODE D'EMPLOI :
 * 1. Inscrivez-vous aux programmes d'affiliation (voir MONETISATION.md à la racine).
 * 2. Remplacez chaque valeur "#inscription-en-attente" par VOTRE lien affilié tracké.
 * 3. C'est tout : tous les boutons du site pointant sur data-aff="cle" seront mis à jour.
 *
 * Tant qu'un lien n'est pas renseigné, le bouton redirige vers la page comparatifs.
 */
const AFFILIATE_LINKS = {
  // --- Banques en ligne ---
  fortuneo:        "#inscription-en-attente",
  boursobank:      "#inscription-en-attente",
  hellobank:       "#inscription-en-attente",

  // --- Assurance-vie / épargne ---
  linxea:          "#inscription-en-attente",
  yomoni:          "#inscription-en-attente",
  nalo:            "#inscription-en-attente",

  // --- SCPI / immobilier ---
  louveinvest:     "#inscription-en-attente",
  homunity:        "#inscription-en-attente",

  // --- Crédit / assurance emprunteur ---
  floabank:        "#inscription-en-attente",
  pretto:          "#inscription-en-attente",
  magnolia:        "#inscription-en-attente",

  // --- PER / retraite ---
  per_yomoni:      "#inscription-en-attente",
  per_linxea:      "#inscription-en-attente",

  // --- Bourse / PEA ---
  trade_republic:  "#inscription-en-attente",
  bourse_direct:   "#inscription-en-attente",

  // --- Outils / budget ---
  finary:          "#inscription-en-attente",
  moneyvox:        "#inscription-en-attente"
};

document.addEventListener("DOMContentLoaded", function () {
  const fallback = document.body.dataset.root
    ? document.body.dataset.root + "comparatifs.html"
    : "comparatifs.html";

  document.querySelectorAll("[data-aff]").forEach(function (el) {
    const key = el.dataset.aff;
    const url = AFFILIATE_LINKS[key];
    if (url && url !== "#inscription-en-attente") {
      el.href = url;
      el.target = "_blank";
      el.rel = "sponsored nofollow noopener";
    } else {
      el.href = fallback;
    }
  });
});
