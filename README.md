# Kasa - Application de location immobilière

Ce projet est une application web pour Kasa, une plateforme de location d'appartements entre particuliers en France.

## Description

Kasa est une application React permettant de naviguer dans une liste de logements, consulter leurs détails et visualiser les équipements disponibles. Cette application a été développée en suivant les maquettes Figma fournies et en respectant les standards modernes de développement web.

## Technologies utilisées

- Vite
- Sass
- JavaScript ES6+
- Vitest pour les tests

## Prérequis

- Node.js (v14 ou supérieur)
- NPM ou Yarn

## Installation

1. Clonez ce dépôt GitHub :
```bash
git clone https://github.com/jcommaret/kasa.git
cd kasa
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez l'application en mode développement :
```bash
npm run dev
```

## Fonctionnalités

- Navigation via React Router
- Page d'accueil avec liste des logements
- Page détaillée pour chaque logement
- Galerie d'images avec carrousel
- Système d'accordéons pour afficher la description et les équipements
- Page À propos avec informations sur Kasa
- Page d'erreur 404 personnalisée
- Design responsive (mobile, tablette, desktop)

## Structure du projet

```
kasa/
├── public/             # Ressources statiques
├── src/
│   ├── assets/         # Images et ressources
│   ├── components/     # Composants réutilisables
│   ├── data/           # Données (logements.json)
│   ├── pages/          # Pages principales
│   ├── routes/         # Configuration des routes
│   ├── styles/         # Fichiers SCSS
│   └── index.jsx       # Point d'entrée de l'application
├── index.html          # Page HTML principale pour Vite
├── vite.config.js      # Configuration de Vite
├── sass-wrapper.js     # Wrapper pour supprimer les avertissements Sass
├── vitest.config.js    # Configuration des tests
└── package.json
```

## Notes techniques

### Migration vers Vite
Le projet a été migré de Create React App vers Vite pour bénéficier de :
- Performance de développement supérieure
- Temps de build optimisé
- Hot Module Replacement (HMR) plus rapide
- Configuration simplifiée

### Optimisation pour GitHub Pages
Le projet utilise HashRouter au lieu de BrowserRouter pour une meilleure compatibilité avec GitHub Pages :
- URLs préfixées par # (ex: `/#/about` au lieu de `/about`)
- Pas de problème de rechargement de page 404 sur GitHub Pages
- Navigation client-side uniquement, sans besoin de configuration serveur

### Utilisation de modules ES (ESM)
Le projet utilise exclusivement les modules ES (ESM) :
- Configuration `"type": "module"` dans package.json
- Meilleure compatibilité avec Vite et les outils modernes
- Évite les avertissements de dépréciation des modules CommonJS (CJS)

### Gestion des avertissements Sass
Pour supprimer les avertissements de dépréciation liés à l'API Legacy JS de Sass, nous avons :
- Créé un wrapper ESM pour Sass qui intercepte et supprime tous les avertissements
- Configuré Vite pour utiliser ce wrapper personnalisé
- Mis à jour la configuration CSS dans vite.config.js
- Ces modifications permettent d'avoir une console de développement propre sans avertissements

### Utilisation de Dart Sass
Le projet utilise exclusivement Dart Sass (l'implémentation officielle et moderne de Sass) et a abandonné l'utilisation de Node Sass (basé sur LibSass) qui est déprécié.

### Corrections de dépréciation Sass
Les fichiers SCSS ont été mis à jour pour corriger les avertissements de dépréciation :
- Remplacement de `map-get` par `map.get` avec ajout de `@use "sass:map"`
- Réorganisation des déclarations CSS pour résoudre les avertissements concernant les déclarations apparaissant après des règles imbriquées
- Ces corrections assurent la compatibilité avec les futures versions de Dart Sass (2.0.0 et 3.0.0)

## Déploiement

Pour créer une version de production :

```bash
npm run build
# ou
yarn build
```

Pour prévisualiser la version de production localement :

```bash
npm run preview
# ou
yarn preview
```

Pour déployer sur GitHub Pages :

```bash
npm run deploy
# ou
yarn deploy
```

## Licence

Ce projet est développé dans le cadre d'une formation et est destiné à des fins éducatives.
