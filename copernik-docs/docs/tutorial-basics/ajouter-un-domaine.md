---
sidebar_position: 2
---

# Ajouter un domaine

Une fois votre organisation créée, vous pouvez ajouter des domaines à surveiller. Copernik utilise un système de **vérification DNS** pour s'assurer que vous êtes bien propriétaire du domaine.

## Premier domaine

Après avoir créé votre organisation, vous serez automatiquement redirigé vers la page d'ajout de domaine pour configurer votre premier domaine à surveiller.

![Ajouter un domaine](/img/copernik-add-domain.png)

## Processus d'ajout

### 1. Renseigner les informations du domaine

- **Nom du domaine** : Entrez votre domaine sans protocole (ex: `exemple.com`)
- **Périmètre** : Sélectionnez le périmètre de rattachement
- **Configuration** : Indiquez les caractéristiques de votre domaine :
  - Envoie des emails (SPF, DKIM, DMARC)
  - Reçoit des emails (MX)
  - Utilise un CDN/reverse proxy (Cloudflare, etc.)

### 2. Vérification DNS

Une fois le domaine ajouté, vous devrez **configurer un enregistrement TXT** dans votre DNS pour prouver que vous en êtes propriétaire.

Copernik génère automatiquement :
- Un token de vérification unique
- Les instructions détaillées pour configurer l'enregistrement TXT

### 3. Validation

Une fois l'enregistrement DNS configuré, vous pouvez déclencher la vérification. Le domaine sera marqué comme **vérifié** et les scans pourront commencer.

## Périmètres

Les domaines sont organisés en **périmètres** qui permettent de :
- Structurer vos domaines par projet, client ou environnement
- Gérer les accès par équipe
- Organiser vos alertes et rapports

:::warning[Vérification DNS obligatoire]
Depuis la dernière mise à jour, tous les domaines doivent être vérifiés via DNS avant de pouvoir être scannés. Cette mesure garantit que vous êtes bien propriétaire du domaine.
:::

:::info[Quota par plan]
- **Plan Découverte** : 1 seul domaine
- **Plan Pro** : Jusqu'à 5 domaines
- **Plan Entreprise** : Domaines illimités
:::