# Backlog — PlayStation Planner v0.4

Application web progressive (PWA) en français, pensée pour Android/Chrome et PlayStation.

## Fonctionnalités
- Bibliothèque PS4 / PS5 : jeux possédés, achetés, PS Plus Extra/Premium/Essential, statuts, temps joué, priorité, genre, note et jaquette.
- Historique : date de fin personnalisable pour les jeux terminés, y compris les jeux terminés avant 2027.
- HLTB manuel : histoire principale, histoire + extras, complétion.
- Planning annuel 2027 : vue par mois, objectifs par jeu, retrait d'une entrée.
- Gaming Diary : calendrier quotidien, sessions, durée en minutes et notes.
- Objectifs annuels : jeux terminés et heures jouées.
- Catalogue PS Plus local : import CSV ou JSON, puis ajout des jeux à la bibliothèque.
- Sauvegarde/restauration JSON.
- Fonctionnement hors ligne après le premier chargement via Service Worker.

## Coût
Le code ne dépend d'aucune API payante, d'aucun compte, ni d'aucun serveur applicatif. Les données sont stockées dans le navigateur avec localStorage. L'hébergement HTTPS peut être fait gratuitement via GitHub Pages (sous réserve des conditions du service). Les jaquettes dont l'URL est externe nécessitent une connexion internet.

## Installation
1. Décompresser l'archive.
2. Publier le contenu du dossier sur un hébergement statique HTTPS gratuit (ex. GitHub Pages).
3. Sur Android, ouvrir l'URL dans Chrome.
4. Menu ⋮ → Installer l'application (ou Ajouter à l'écran d'accueil).

## Sauvegardes et confidentialité
- Utiliser le bouton d'export régulièrement et conserver le fichier JSON hors du téléphone.
- Les données de jeu ne sont pas envoyées à GitHub Pages : seul le code de l'application y est hébergé.
- Ne pas publier de sauvegarde JSON dans le dépôt GitHub.
- Effacer les données du site ou changer de navigateur peut supprimer les données locales : exporter avant toute manipulation.

## Import PS Plus
CSV avec en-têtes `title,platform,tier,cover`, ou JSON sous forme de tableau d'objets (ou `{ "games": [...] }`). Exemple CSV :

```csv
title,platform,tier,cover
Astro Bot,PS5,Achat,
Ghost of Tsushima,PS4,PS Plus Extra,
```

Le catalogue doit être constitué à partir d'une source que tu es autorisé à utiliser. L'application ne synchronise pas automatiquement ton compte PSN.

## Limites assumées pour rester à 0 €
- Pas de synchronisation PSN automatique.
- Pas de recherche HLTB automatique : les durées sont saisies manuellement.
- Pas de base de jaquettes intégrée ni de clé API nécessaire.
- Le stockage local dépend du navigateur et de l'appareil ; l'export JSON est donc important.
