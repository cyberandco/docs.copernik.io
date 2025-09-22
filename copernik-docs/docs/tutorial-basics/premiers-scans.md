---
sidebar_position: 4
---

# Premiers scans

Une fois votre domaine **vérifié via DNS**, les premiers scans de sécurité se lancent automatiquement. Vous pouvez suivre l'avancement en temps réel dans votre [Tableau de bord Copernik](https://beta.copernik.io/app).

![Tableau de bord Copernik](/img/copernik-first-scans.png)

## Lancement automatique

Dès qu'un domaine est vérifié, Copernik déclenche automatiquement :
- **Scan SSL/TLS** - Vérification des certificats et configuration
- **Scan DNS** - Analyse des enregistrements et configuration
- **Scan de vulnérabilités** - Détection des failles de sécurité connues

## Suivi en temps réel

Dans votre tableau de bord, vous pouvez :
- **Voir l'état des scans** (En cours, Terminé, Échoué)
- **Consulter les résultats** dès qu'ils sont disponibles
- **Planifier des scans manuels** supplémentaires
- **Configurer la fréquence** des scans automatiques

## Types de scans disponibles

### Plan Découverte
- **SSL/TLS** - Configuration des certificats
- **DNS** - Enregistrements et sécurité DNS
- **Vulnérabilités** - Failles de sécurité connues

### Plan Pro (scans supplémentaires)
- **Sous-domaines** - Découverte et analyse
- **Serveur web** - Configuration et sécurité
- **Ports TCP** - Services exposés et vulnérabilités

## Temps de traitement

:::info[Durée des scans]
- **Premiers scans** : 5-15 minutes selon la complexité du domaine
- **Scans SSL/DNS** : 1-3 minutes
- **Scans de vulnérabilités** : 5-10 minutes
- **Scans avancés** (Pro) : 10-30 minutes

Les scans s'exécutent en parallèle pour optimiser le temps de traitement.
:::

:::tip[Optimisation]
Pour accélérer les scans futurs, renseignez précisément la configuration de votre domaine lors de l'ajout (emails, CDN, etc.). Cela permet à Copernik d'adapter les analyses.
:::