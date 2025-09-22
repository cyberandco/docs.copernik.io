---
sidebar_position: 8
---

# Gestion des domaines

Votre organisation peut gérer plusieurs domaines selon votre plan d'abonnement. Chaque domaine constitue un service web distinct avec ses propres scans, alertes et historiques de sécurité.

## Vue d'ensemble

Accédez à la page "Domaines" depuis votre tableau de bord pour une vue complète de tous vos domaines surveillés.

![Page des domaines](/img/copernik-list-domain.png)

## Organisation par périmètres

### Concept de périmètres
Les domaines sont organisés en **périmètres** qui permettent de :
- **Structurer** vos domaines par projet, environnement ou client
- **Gérer les accès** utilisateur avec des permissions spécifiques
- **Organiser** les alertes et rapports
- **Séparer** les responsabilités entre équipes

### Sélection du périmètre actif
- Utilisez le **sélecteur de périmètre** en haut de page
- Seuls les domaines du périmètre sélectionné sont affichés
- Chaque utilisateur peut avoir accès à plusieurs périmètres

## Informations des domaines

Pour chaque domaine, vous visualisez :

### Statut et état
- **État d'activation** (Actif/Inactif)
- **Statut de vérification DNS** (Vérifié/En attente/Échec)
- **Indicateur de sécurité** avec code couleur global

### Métadonnées
- **Date d'ajout** au périmètre
- **Configuration** (emails, CDN, etc.)
- **Dernière analyse** effectuée
- **Prochaine exécution** programmée

### Actions disponibles
- **Voir les scans** - Accès direct aux résultats
- **Configurer** - Modifier les paramètres du domaine
- **Activer/Désactiver** - Suspendre temporairement la surveillance
- **Supprimer** - Retirer définitivement (selon permissions)

## Gestion des domaines

### Ajouter un domaine
1. Cliquez sur "Nouveau domaine"
2. Sélectionnez le périmètre de destination
3. Configurez le domaine et ses caractéristiques
4. Validez la propriété via DNS

### Modifier un domaine
- **Configuration technique** (emails, CDN, etc.)
- **Fréquence des scans** automatiques
- **Paramètres d'alerte** associés

### Désactiver temporairement
Pour suspendre la surveillance sans perdre l'historique :
- Basculez le domaine en "Inactif"
- Les scans automatiques sont interrompus
- Les données restent accessibles
- Réactivation possible à tout moment

## Quotas et limitations

### Plan Découverte
- **1 domaine maximum** par organisation
- Tous périmètres confondus

### Plan Pro
- **5 domaines maximum** par organisation
- Répartition libre entre périmètres

### Plan Entreprise
- **Domaines illimités**
- Support pour grandes infrastructures

:::tip[Bonnes pratiques]
- Organisez vos domaines par environnement (prod, staging, dev)
- Utilisez des périmètres distincts pour chaque client
- Nommez clairement vos périmètres pour faciliter la navigation
:::

:::warning[Suppression définitive]
La suppression d'un domaine efface définitivement son historique de scans et ses alertes. Cette action est irréversible.
:::