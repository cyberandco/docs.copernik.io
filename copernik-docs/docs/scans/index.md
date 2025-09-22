---
sidebar_position: 1
---

# Vue d'ensemble des scans

Copernik propose une suite complète de scans de sécurité automatisés pour évaluer et surveiller la posture de sécurité de vos services web. Nos outils d'analyse utilisent des technologies de pointe pour identifier les vulnérabilités et les problèmes de configuration qui pourraient compromettre votre infrastructure.

## Types de scans disponibles

### Scans de base (gratuits)
- **[SSL/TLS](./ssl)** 🔒 : Vérification des certificats et de la configuration SSL
- **[DNS](./dns)** 🌐 : Analyse des enregistrements DNS et de la configuration
- **[Vulnérabilités](./vulnerabilites)** ⚠️ : Détection des failles de sécurité connues

### Scans avancés (plans payants)
- **[Sous-domaines](./sous-domaines)** 🔍 : Découverte et énumération des sous-domaines
- **[Serveur web](./serveur-web)** 🖥️ : Analyse de la configuration du serveur web
- **[Ports TCP](./ports-tcp)** 🔌 : Scan des ports ouverts et des services

## Comment fonctionnent nos scans

### Automatisation
Tous les scans sont exécutés automatiquement selon un planning optimisé pour minimiser l'impact sur vos services tout en maintenant une surveillance continue de votre sécurité.

### Analyse en temps réel
Notre infrastructure de scan distribuée analyse vos services web en permanence et vous alerte immédiatement en cas de détection de nouvelles vulnérabilités ou de changements critiques dans votre configuration.

### Rapports détaillés
Chaque scan génère un rapport complet avec :
- Une évaluation du niveau de risque
- Des recommandations spécifiques pour corriger les problèmes
- Un historique des changements pour suivre l'évolution de votre sécurité

## Fréquence des scans

| Type de scan | Fréquence | Impact |
|--------------|-----------|---------|
| SSL/TLS | Quotidien | Minimal |
| DNS | Quotidien | Minimal |
| Vulnérabilités | Hebdomadaire | Faible |
| Sous-domaines | Hebdomadaire | Faible |
| Serveur web | Quotidien | Minimal |
| Ports TCP | Hebdomadaire | Faible |

## Gestion des résultats

### Alertes automatiques
Configurez des alertes pour être notifié immédiatement des problèmes critiques détectés par nos scans.

### Intégrations
Connectez Copernik à vos outils existants via notre API ou nos webhooks pour intégrer la surveillance de sécurité dans vos workflows.

### Historique
Consultez l'historique complet de tous vos scans pour analyser les tendances et mesurer l'amélioration de votre posture de sécurité au fil du temps.

---

:::info[Démarrage rapide]
Pour commencer à utiliser nos scans, [ajoutez votre premier service web](../tutorial-basics/ajouter-un-domaine) à votre organisation. Les scans de base commenceront automatiquement dans les minutes qui suivent.
:::
