# Prépa F4 2027

Appli web de préparation physique : séance du jour, chronos guidés, séances à rattraper, tests, repères.

## Installer sur l'iPhone

1. Ouvrir l'adresse du site dans **Safari**.
2. Bouton **Partager**, puis **Sur l'écran d'accueil**.
3. Lancer l'appli depuis son icône. Elle fonctionne ensuite hors ligne.

## Où sont les données

Les séances cochées et les tests restent **sur l'appareil** (stockage local du navigateur). Rien n'est envoyé à un serveur.
Dans l'onglet Repères, « Copier une sauvegarde » donne un texte à conserver ; « Restaurer » le recharge.

## Où est quoi

- `index.html` : toute l'appli (contenu des séances, illustrations, logique).
- `sw.js` : cache hors ligne. Changer `VERSION` à chaque mise à jour.
- `manifest.webmanifest`, `icons/`, `fonts/` : habillage de l'appli installée.

## Alertes

L'appli n'envoie pas de notification. Les alertes sont dans l'application Rappels de l'iPhone.
