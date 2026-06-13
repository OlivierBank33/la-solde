# Guide de monétisation — Ma Solde

Ce document vous explique pas à pas comment activer les liens d'affiliation
et diversifier les revenus du site.

---

## 1. Activer les liens affiliés (priorité n°1)

Le fichier `assets/js/affiliates.js` centralise tous les liens.
Remplacez chaque `"#inscription-en-attente"` par votre lien tracké personnel.

### Programmes à rejoindre en premier (commissions les plus élevées)

| Produit | Programme / Réseau | Commission estimée |
|---|---|---|
| **SCPI Louve Invest** | Direct sur louveinvest.com (espace partenaires) | ~3 % du montant investi |
| **Assurance-vie Linxea** | Direct sur linxea.com (espace affiliés) | 40–80 € par contrat ouvert |
| **Courtier Pretto** | Pretto Partenaires | 500–1 500 € par dossier financé |
| **BoursoBank** | Programme d'affiliation direct ou via Affilae | 60–120 € par compte ouvert |
| **Yomoni** | Direct sur yomoni.fr ou via Affilae | 50–100 € par ouverture |
| **Assurance emprunteur Magnolia** | Magnolia Partenaires | ~200 € par dossier |
| **Trade Republic** | Direct sur traderepublic.com | Actions gratuites ou cash |
| **Fortuneo** | Via Affilae / Direct | 60–100 € par compte |
| **PER Linxea** | Même programme que l'assurance-vie | 40–80 € |
| **Hello bank!** | BNP Paribas Partenaires | Selon barème actuel |

**Réseaux d'affiliation à rejoindre :**
- **Affilae** (affilae.com) — de nombreuses fintech françaises
- **Financeads** (financeads.com/fr) — spécialiste finance
- **Awin** (awin.com) — réseau généraliste avec offres financières

---

## 2. La newsletter : la source de revenus la plus stable

Une liste email active est votre atout le plus précieux.

**Outils recommandés (offres gratuites pour démarrer) :**
- **Brevo** (ex-Sendinblue) — gratuit jusqu'à 300 emails/jour
- **MailerLite** — gratuit jusqu'à 1 000 abonnés
- **ConvertKit** — gratuit jusqu'à 10 000 abonnés

**Dans `index.html`**, remplacez `action="#"` du formulaire newsletter par
l'URL de votre formulaire d'inscription (fourni par votre outil emailing).

**Contenu de la newsletter mensuelle (modèle) :**
1. Nouveauté réglementaire (ex. revalorisation de la grille, changement fiscal)
2. « Bon plan du mois » → lien affilié mis en avant
3. Rappel d'un guide du site

**Monétisation newsletter :**
- Liens affiliés dans le corps de l'email (même commissions que le site)
- Sponsoring de newsletter : 100–500 € par envoi auprès de prestataires
  financiers ciblant les militaires dès 2 000–5 000 abonnés

---

## 3. Revenus publicitaires (Google AdSense)

Dès 50–100 visiteurs/jour, vous pouvez activer Google AdSense.

**À faire :**
1. Ouvrir un compte sur adsense.google.com
2. Ajouter le script AdSense dans `<head>` de chaque page
3. Créer des blocs d'annonces et les insérer dans les articles

**Zones recommandées :**
- Après le 1er H2 de chaque guide
- En fin d'article, avant le bloc affilié

L'affiliation restera toujours plus rentable que l'AdSense sur ce type de
niche à forte valeur commerciale : ne surchargez pas les pages de pub.

---

## 4. Contenu sponsorisé (moyen terme, dès 5 000 visiteurs/mois)

Proposez des articles sponsorisés aux acteurs du secteur :
- Mutuelles militaires (Unéo, Tégo, AGPM, GMPA)
- Organismes de crédit (IGESA, prêts aidés)
- Plateformes SCPI et gestion pilotée
- Cabinets de CGP spécialisés défense

**Prix de marché :** 200–800 € l'article sponsorisé selon l'audience.

**Obligation légale :** mention explicite « article sponsorisé » ou
« contenu partenaire » — obligatoire en France (ARPP + DGCCRF).

---

## 5. Lead generation / mise en relation CGP (long terme)

Les CGP spécialisés dans le patrimoine des militaires paient cher pour des
contacts qualifiés. Modèles :

- **CPL (coût par lead)** : 20–150 € par formulaire de contact rempli
- **CPA (coût par action)** : % des honoraires ou de l'investissement
- **Invest'Aide** (invest-aide.fr) : programme d'affiliation avec ~1 % du
  montant investi, soit 1 500 € pour un lead à 150 000 € en moyenne

Pour activer ce canal, ajoutez un formulaire « je veux être mis en relation
avec un conseiller spécialisé militaire » et négociez un accord avec 2-3 CGP.

---

## 6. SEO : attirer du trafic organique gratuit

Les articles du site sont optimisés sur des mots-clés à fort potentiel :

| Mot-clé | Volume estimé | Difficulté |
|---|---|---|
| solde militaire 2026 | Élevé | Moyenne |
| prime OPEX exonération impôt | Moyen | Faible |
| retraite militaire 17 ans | Moyen | Faible |
| SCPI militaire | Faible | Très faible |
| mutuelle militaire OPEX | Faible | Très faible |

**Actions prioritaires :**
1. Déclarer le site dans Google Search Console
2. Créer un fichier `sitemap.xml` (voir section 7)
3. Obtenir des backlinks : forums militaires, groupes Facebook/Discord de
   militaires, sites de reconversion

---

## 7. Fichier sitemap.xml à créer

Créez `sitemap.xml` à la racine avec la liste de toutes les URLs pour
l'indexation Google.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://votre-domaine.fr/</loc></url>
  <url><loc>https://votre-domaine.fr/comparatifs.html</loc></url>
  <url><loc>https://votre-domaine.fr/guides/solde-militaire.html</loc></url>
  <url><loc>https://votre-domaine.fr/guides/primes-indemnites.html</loc></url>
  <url><loc>https://votre-domaine.fr/guides/impots-opex.html</loc></url>
  <url><loc>https://votre-domaine.fr/guides/retraite-militaire.html</loc></url>
  <url><loc>https://votre-domaine.fr/guides/investir-immobilier.html</loc></url>
  <url><loc>https://votre-domaine.fr/guides/epargne-placements.html</loc></url>
  <url><loc>https://votre-domaine.fr/guides/banques-credits.html</loc></url>
  <url><loc>https://votre-domaine.fr/guides/mutuelles-assurances.html</loc></url>
</urlset>
```

---

## 8. Hébergement du site (déploiement)

Ce site est 100 % statique (HTML/CSS/JS) : pas de serveur, pas de base de
données. Options de déploiement gratuites :

- **GitHub Pages** : gratuit, domaine personnalisé possible
- **Netlify** : gratuit, HTTPS automatique, déploiement depuis GitHub
- **Vercel** : même avantages que Netlify

**Étapes :**
1. Pousser le dépôt sur GitHub (ce qui est fait sur la branche `claude/military-finance-site-j2ci8u`)
2. Connecter Netlify / Vercel au dépôt
3. Configurer votre nom de domaine (ex. `masolde.fr`)

---

## Récapitulatif des revenus potentiels par palier

| Trafic mensuel | Revenus estimés |
|---|---|
| 500 visiteurs/mois | 50–150 € (premières commissions affiliés) |
| 2 000 visiteurs/mois | 200–600 € |
| 5 000 visiteurs/mois | 500–1 500 € (AdSense + affiliés + newsletter) |
| 20 000 visiteurs/mois | 2 000–6 000 € (+ sponsoring + leads CGP) |

Les niches finance à forte valeur commerciale (assurance-vie, immobilier,
crédit) génèrent 3 à 10× plus de revenus par visiteur qu'un blog généraliste.
