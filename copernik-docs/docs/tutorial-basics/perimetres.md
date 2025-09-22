---
sidebar_position: 3
---

# Périmètres

Un **périmètre** dans Copernik représente un regroupement logique de domaines et d'utilisateurs au sein de votre organisation. Il permet d'organiser vos ressources de sécurité et de gérer les accès de manière granulaire.

## 🎯 Qu'est-ce qu'un périmètre ?

Un périmètre est une unité d'organisation qui :

- **Regroupe des domaines** : Organisez vos sites web, applications et services par projet, équipe ou environnement
- **Contrôle les accès** : Définissez qui peut voir et gérer quels domaines
- **Centralise la gestion** : Simplifiez l'administration de vos ressources de sécurité
- **Isole les données** : Séparez les résultats de scan selon vos besoins organisationnels

## 🏗️ Structure organisationnelle

```
Organisation (Entreprise)
├── Périmètre Production
│   ├── example.com
│   ├── api.example.com
│   └── admin.example.com
├── Périmètre Développement
│   ├── dev.example.com
│   └── staging.example.com
└── Périmètre Partenaires
    ├── partner1.example.com
    └── partner2.example.com
```

## ⚙️ Fonctionnalités principales

### 🔧 Gestion des domaines
- Ajout et suppression de domaines dans le périmètre
- Configuration des scans par défaut pour tous les domaines
- Paramètres de fréquence de scan personnalisés

### 👥 Gestion des utilisateurs
- Attribution de rôles spécifiques au périmètre
- Contrôle d'accès granulaire aux domaines
- Isolation des données entre périmètres

### 📈 Surveillance centralisée
- Vue d'ensemble des alertes du périmètre
- Tableaux de bord dédiés
- Rapports consolidés

## 🚀 Créer un nouveau périmètre

1. **Accédez aux paramètres** de votre organisation
2. **Cliquez sur "Nouveau périmètre"**
3. **Configurez les informations** :
   - **Nom** : Choisissez un nom descriptif (ex: "Production", "Développement")
   - **Description** : Ajoutez une description claire de l'objectif du périmètre
   - **Fréquence de scan** : Définissez la fréquence par défaut des scans

4. **Assignez des utilisateurs** avec les rôles appropriés
5. **Ajoutez des domaines** à surveiller

## 📋 Bonnes pratiques

### 🎯 Organisation efficace
- **Séparez par environnement** : Production, staging, développement
- **Groupez par équipe** : Frontend, backend, infrastructure
- **Isolez par criticité** : Systèmes critiques vs. non-critiques

### 🔒 Sécurité
- **Principe du moindre privilège** : N'accordez que les accès nécessaires
- **Révision régulière** : Contrôlez périodiquement les accès
- **Documentation** : Tenez à jour la liste des responsables

### 📊 Surveillance
- **Configurez des alertes** adaptées à chaque périmètre
- **Définissez des SLA** selon la criticité
- **Planifiez des revues** régulières des résultats

## ⚠️ Limitations par plan

Les limites de périmètres varient selon votre plan :

- **Discovery** : 1 périmètre maximum
- **Pro** : 5 périmètres maximum

:::tip Conseil
Commencez par créer un périmètre par environnement (Production, Staging) puis affinez selon vos besoins organisationnels.
:::

:::warning Important
Chaque organisation doit avoir au moins un périmètre. Un périmètre par défaut est automatiquement créé lors de la création de votre organisation.
:::
