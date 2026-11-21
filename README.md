# Gaming Backlog Planner v1.3

## Nouveautés
- Hall of Fame : jeux terminés stockés dans `annualEntries`, indépendamment de la bibliothèque.
- Modification et suppression des entrées du Hall of Fame.
- Classement manuel par glisser-déposer, indépendant des notes (permet de départager les égalités).
- Les heures annuelles = heures des sessions du journal + durées saisies dans les entrées annuelles.
- Deux sections annuelles supplémentaires : jeux commencés mais non terminés (En cours / En attente) et jeux abandonnés.
- Nouveau statut bibliothèque `En attente` ; les anciens `En pause` sont automatiquement convertis.
- Nouvel onglet Wishlist, indépendant de la bibliothèque, ajout manuel ou RAWG, modification et suppression.
- Migration des anciennes entrées de bilan enregistrées comme jeux de bibliothèque (`source: Ajout bilan annuel`) vers le Hall of Fame, sans les conserver en double dans la bibliothèque.

## Mise à jour
1. Export JSON avant mise à jour.
2. Décompresser l'archive.
3. Remplacer les 7 fichiers dans la racine du dépôt GitHub.
4. Commit, attendre GitHub Pages, actualiser le site Chrome et relancer la PWA.

Les données restent dans le stockage local `ps-backlog-v5`. La clé RAWG n'est pas modifiée.
