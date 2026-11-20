# Gaming Backlog Planner v0.5

- Recherche RAWG de jeux PS4/PS5 avec jaquettes.
- Ajout depuis RAWG à la bibliothèque ou au planning.
- Planning ouvert sur l'année actuelle et diary ouvert sur aujourd'hui.
- Ajout manuel d'un jeu directement depuis le planning, avec statut « À jouer ».
- Migration automatique des données locales v0.4/v0.3.
- Clé RAWG enregistrée uniquement dans localStorage sur l'appareil, non incluse dans le code ni dans les exports.

Configurer RAWG : bouton ⚙, coller la clé, enregistrer. Rechercher ensuite dans la bibliothèque ou depuis le planning. L'API utilise `/api/games` et `platforms=18,187` (PS4/PS5).

RAWG exige une attribution avec lien actif sur les pages utilisant ses données/images. Vérifier les conditions de l'offre gratuite : https://rawg.io/apidocs

La clé est saisie dans le navigateur, non publiée dans le dépôt GitHub et non exportée. Comme l'appel est direct depuis le navigateur, elle peut être visible dans les outils réseau du navigateur. Conserver la clé privée.
