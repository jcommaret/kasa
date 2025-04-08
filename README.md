# Kasa - Application de location immobilière

Ce projet est une application web pour Kasa, une plateforme de location d'appartements entre particuliers en France.

## Description

Kasa est une application React permettant de naviguer dans une liste de logements, consulter leurs détails et visualiser les équipements disponibles. Cette application a été développée en suivant les maquettes Figma fournies et en respectant les standards modernes de développement web.

## Technologies utilisées

- React 18
- React Router v6
- Dart Sass
- JavaScript ES6+

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
# ou
yarn install
```

3. Lancez l'application en mode développement :
```bash
npm start
# ou
yarn start
```

L'application sera disponible à l'adresse [http://localhost:3000/kasa](http://localhost:3000/kasa).

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
├── public/
├── src/
│   ├── assets/       # Images et ressources
│   ├── components/   # Composants réutilisables
│   ├── data/         # Données (logements.json)
│   ├── pages/        # Pages principales
│   ├── routes/       # Configuration des routes
│   ├── styles/       # Fichiers SCSS
│   └── index.js      # Point d'entrée de l'application
└── package.json
```

## Notes techniques

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

Pour déployer sur GitHub Pages :

```bash
npm run deploy
# ou
yarn deploy
```

## Licence

Ce projet est développé dans le cadre d'une formation et est destiné à des fins éducatives.
