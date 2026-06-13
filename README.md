# Ma Solde — Site finance pour militaires

Site statique HTML/CSS/JS de conseils financiers et d'affiliation destiné aux militaires français.

## Structure

```
la-solde/
├── index.html                    # Page d'accueil
├── comparatifs.html              # Page comparatifs (monétisation principale)
├── sitemap.xml                   # Pour Google Search Console
├── mentions-legales.html
├── MONETISATION.md               # Guide pour activer les liens affiliés
├── assets/
│   ├── css/style.css
│   └── js/affiliates.js          # Config centrale des liens d'affiliation
└── guides/
    ├── solde-militaire.html
    ├── primes-indemnites.html
    ├── impots-opex.html
    ├── retraite-militaire.html
    ├── investir-immobilier.html
    ├── epargne-placements.html
    ├── banques-credits.html
    └── mutuelles-assurances.html
```

## Activer les liens affiliés

Ouvrez `assets/js/affiliates.js` et remplacez chaque `"#inscription-en-attente"`
par vos liens d'affiliation personnels. Voir `MONETISATION.md` pour la liste
des programmes à rejoindre et les revenus estimés.

## Déploiement

Site 100 % statique : compatible GitHub Pages, Netlify, Vercel (gratuit).

1. Pusher sur GitHub
2. Connecter Netlify ou Vercel
3. Configurer le domaine personnalisé
