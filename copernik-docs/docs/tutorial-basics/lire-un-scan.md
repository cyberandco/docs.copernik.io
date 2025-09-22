---
sidebar_position: 6
---

# Lire un scan

Une fois vos scans terminés, vous pouvez les consulter depuis votre [Tableau de bord](https://beta.copernik.io/app) ou dans la section [Résultats des scans](https://beta.copernik.io/app/scans/result). Chaque scan fournit une analyse détaillée des vulnérabilités et améliorations possibles.

![Résultats des scans](/img/copernik-scans-list.png)

## Vue d'ensemble des scans

### Tableau de bord principal
Le dashboard affiche pour chaque type de scan :
- **Statut du dernier scan** (Réussi, En cours, Échoué)
- **Score de sécurité** avec indicateur coloré
- **Date du dernier scan**
- **Prochaine exécution programmée**

### Liste complète des scans
La page "Résultats" présente l'historique complet avec :
- Filtrage par domaine et type de scan
- Statut et durée d'exécution
- Export des résultats en JSON

## Détail d'un scan

Cliquez sur un scan pour accéder aux informations détaillées :

### 1. Informations générales
![Informations générales du scan](/img/copernik-scan-info.png)

- **Domaine scanné** et type d'analyse
- **Dates** de début et fin d'exécution
- **Statut** et durée totale
- **Score global** de sécurité

### 2. Résumé intelligible
![Résumé des résultats du scan](/img/copernik-scan-summary.png)

Un résumé généré par IA qui explique :
- **Les points positifs** de votre configuration
- **Les vulnérabilités détectées** et leur gravité
- **Les recommandations concrètes** pour corriger les problèmes
- **L'impact métier** des vulnérabilités trouvées

### 3. Données techniques brutes
![Détails techniques du scan](/img/copernik-scan-raw.png)

Les détails techniques complets au format JSON, incluant :
- Tous les tests effectués et leurs résultats
- Certificats SSL analysés
- Enregistrements DNS découverts
- CVE (vulnérabilités) identifiées avec scores CVSS

## Interprétation des résultats

### Codes couleur de sévérité
- 🔴 **Critique** - Action immédiate requise
- 🟠 **Élevée** - Correction recommandée sous 7 jours
- 🟡 **Moyenne** - À traiter dans le mois
- 🟢 **Faible** - Amélioration suggérée
- ✅ **Parfait** - Aucun problème détecté

### Actions disponibles
- **Télécharger en JSON** - Export pour analyse approfondie
- **Partager le scan** - Envoi sécurisé à votre équipe
- **Programmer un nouveau scan** - Si vous avez des crédits disponibles
- **Configurer une alerte** - Pour être notifié des changements

:::tip[Assistance disponible]
Besoin d'aide pour interpréter un résultat ? Contactez notre équipe via le chat intégré. Nous sommes là pour vous expliquer les vulnérabilités et vous guider dans les corrections.
:::

:::info[Historique conservé]
Tous vos scans sont conservés dans votre compte pour vous permettre de suivre l'évolution de votre posture de sécurité dans le temps.
:::