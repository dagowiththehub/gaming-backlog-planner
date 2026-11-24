# Phantom Backlog — version 1.4.1

Correctif de la version 1.4 : ajout du balisage HTML manquant pour le sélecteur de jeux du Gaming Diary. La clé de stockage locale reste `ps-backlog-v5` : les données existantes sont conservées sur la même adresse GitHub Pages.

## Installation / mise à jour
1. Exporte une sauvegarde JSON depuis l'application avant toute mise à jour.
2. Décompresse cette archive.
3. Remplace les 7 fichiers à la racine du dépôt GitHub Pages : `index.html`, `styles.css`, `app.js`, `manifest.webmanifest`, `sw.js`, `icon.svg` et `README.md`.
4. Attends la fin du déploiement GitHub Pages, puis ouvre le site dans Chrome et actualise-le.
5. Vérifie la bibliothèque et le journal avant de continuer à utiliser l'application.

Important : garde exactement la même adresse GitHub Pages. Ne désinstalle pas la PWA et n'efface pas les données du site. La sauvegarde JSON reste la protection en cas de problème.
