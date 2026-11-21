# Gaming Backlog Planner v1.1.1 — hotfix

Correctif urgent : v1.1.0 avait conservé un gestionnaire de clic vers le bandeau d'accueil supprimé. L'élément absent provoquait une erreur JavaScript au démarrage, empêchant l'initialisation des boutons.

## Récupération
- Ne pas effacer les données du site / stockage Chrome.
- Les données sont toujours lues depuis la même clé locale `ps-backlog-v5`.
- Si la page ne fonctionne plus, déployer les 7 fichiers de cette archive en remplacement de la v1.1.
- Le correctif conserve le stockage local existant.

Faire un export JSON dès que l'application redémarre.
