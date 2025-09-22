---
sidebar_position: 7
---

# Les alertes

Copernik vous permet de recevoir des **alertes automatiques** lorsque des vulnérabilités sont détectées ou que l'état de sécurité de vos domaines change. Ces notifications sont essentielles pour réagir rapidement aux menaces.

## Types d'alertes disponibles

### Plan Découverte
- **1 alerte par email** configurée par défaut
- Notification sur l'adresse email de votre compte
- Alertes pour vulnérabilités critiques et élevées

### Plan Pro
- **Alertes illimitées** avec canaux multiples :
  - **Email** - Personnalisable par domaine
  - **Slack** - Intégration via webhook
  - **Discord** - Notifications sur serveur
  - **Microsoft Teams** - Connecteur d'équipe
  - **Webhook personnalisé** - Pour vos outils internes

## Configuration des alertes

### Créer une alerte
1. Accédez à la section "Alertes" de votre tableau de bord
2. Cliquez sur "Nouvelle alerte"
3. Configurez les paramètres :
   - **Domaine(s) surveillé(s)**
   - **Types de scans** à monitorer
   - **Seuils de gravité** (critique, élevée, moyenne, faible)
   - **Canal de notification** et paramètres

### Gestion des alertes existantes
![Alertes Copernik](/img/copernik-alerts.png)

Dans la section Alertes, vous pouvez :
- **Consulter l'historique** des notifications envoyées
- **Modifier les paramètres** d'alertes existantes
- **Tester les configurations** avant activation
- **Activer/désactiver** temporairement des alertes

## Contenu des alertes

### Informations incluses
- **Domaine concerné** et type de scan
- **Nouvelle vulnérabilité détectée** ou changement d'état
- **Niveau de gravité** avec code couleur
- **Description de la menace** et impact potentiel
- **Liens directs** vers les détails du scan
- **Recommandations** de correction

### Format des notifications
- **Email** : HTML formaté avec résumé exécutif
- **Slack/Discord/Teams** : Cartes interactives avec boutons d'action
- **Webhook** : JSON structuré pour intégration système

## Fréquence et déduplication

### Éviter le spam
Copernik optimise les notifications pour éviter la surcharge :
- **Déduplication** - Pas de répétition pour la même vulnérabilité
- **Regroupement** - Plusieurs alertes combinées si détection simultanée
- **Cooldown** - Délai minimum entre notifications similaires

### Urgence vs. routine
- **Vulnérabilités critiques** : Notification immédiate
- **Changements d'état** : Notification en temps réel
- **Résumés périodiques** : Rapport hebdomadaire (Plan Pro)

:::tip[Intégration DevOps]
Avec le Plan Pro, utilisez les webhooks pour intégrer les alertes Copernik dans vos outils de monitoring existants (PagerDuty, Jira, etc.).
:::

:::warning[Gestion des accès]
Seuls les utilisateurs ayant les permissions appropriées dans le périmètre peuvent configurer les alertes pour les domaines de ce périmètre.
:::