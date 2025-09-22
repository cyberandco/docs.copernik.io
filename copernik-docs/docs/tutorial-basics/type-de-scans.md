---
sidebar_position: 5
---

# Les types de scans

Copernik propose 6 types de scans spécialisés pour analyser tous les aspects de la sécurité de vos domaines. Chaque scan cible des vulnérabilités spécifiques et fournit des recommandations détaillées pour renforcer votre posture de sécurité.

## Disponibilité par plan

### Plan Découverte (3 scans de base)
- ✅ **SSL/TLS** - Certificats et chiffrement
- ✅ **DNS** - Configuration et sécurité DNS
- ✅ **Vulnérabilités** - Failles de sécurité connues

### Plan Pro (tous les scans)
- ✅ **Tous les scans** du plan Découverte
- ✅ **Sous-domaines** - Découverte et analyse
- ✅ **Serveur web** - Configuration et headers
- ✅ **Ports TCP** - Services exposés et vulnérabilités

## Description détaillée des scans

### 🔒 SSL/TLS

**Objectif** : Vérifier la sécurité de vos certificats et du chiffrement

**Analyses effectuées** :
- **Validité des certificats** (expiration, autorité, chaîne)
- **Protocoles supportés** (TLS 1.2, 1.3, protocoles obsolètes)
- **Suites de chiffrement** et force cryptographique
- **Configuration HSTS** et redirection HTTPS
- **Vulnérabilités SSL** connues (Heartbleed, POODLE, etc.)

**Fréquence recommandée** : Quotidienne (certificats peuvent expirer)

### 🌐 DNS

**Objectif** : Analyser la configuration DNS et détecter les vulnérabilités

**Analyses effectuées** :
- **Enregistrements DNS** (A, AAAA, MX, CNAME, TXT)
- **Configuration DNSSEC** et validation des signatures
- **Enregistrements de sécurité** (SPF, DKIM, DMARC, CAA)
- **Serveurs DNS autoritaires** et leur sécurité
- **Zone transfers** et fuites d'informations
- **DNS hijacking** et empoisonnement

**Fréquence recommandée** : Hebdomadaire (changements moins fréquents)

### ⚠️ Vulnérabilités

**Objectif** : Détecter les failles de sécurité connues dans vos services

**Analyses effectuées** :
- **CVE publiques** (Common Vulnerabilities and Exposures)
- **Versions logicielles** et patches manquants
- **Services exposés** et leur niveau de sécurité
- **Configurations faibles** et par défaut
- **Injections SQL, XSS** et autres OWASP Top 10
- **Headers de sécurité** manquants

**Fréquence recommandée** : Quotidienne (nouvelles CVE quotidiennes)

### 📡 Sous-domaines *(Pro uniquement)*

**Objectif** : Découvrir l'infrastructure complète et les services oubliés

**Analyses effectuées** :
- **Énumération passive** via certificats CT Logs
- **Brute force DNS** sur les noms courants
- **Sous-domaines actifs** et leurs services
- **Services oubliés** ou non maintenus
- **Wildcard DNS** et leurs implications
- **Shadow IT** et expositions non documentées

**Fréquence recommandée** : Hebdomadaire (infrastructure stable)

### 🖥️ Serveur web *(Pro uniquement)*

**Objectif** : Auditer la configuration du serveur et ses headers de sécurité

**Analyses effectuées** :
- **Type et version** du serveur web
- **Headers de sécurité** (CSP, X-Frame-Options, etc.)
- **Configuration SSL** avancée
- **Méthodes HTTP** autorisées et sécurité
- **Modules installés** et leurs vulnérabilités
- **Pages d'erreur** et fuites d'informations
- **Compression** et vulnérabilités associées

**Fréquence recommandée** : Hebdomadaire (configuration stable)

### 🔌 Ports TCP *(Pro uniquement)*

**Objectif** : Cartographier les services exposés et identifier les risques

**Analyses effectuées** :
- **Scan des ports** courants (top 1000)
- **Services identifiés** et leurs versions
- **Bannières** et informations exposées
- **Services non sécurisés** (Telnet, FTP, etc.)
- **Ports inhabituels** ouverts
- **Firewall** et filtrage réseau
- **Services redondants** ou inutiles

**Fréquence recommandée** : Mensuelle (impact réseau)

## Planification et exécution

### Scans automatiques
- **Plan Découverte** : Exécution mensuelle
- **Plan Pro** : Exécution quotidienne personnalisable
- **Fenêtres de maintenance** configurables

### Scans manuels
- **Lancement immédiat** depuis le tableau de bord
- **Consommation des crédits** selon votre plan
- **Scans ciblés** par type selon vos besoins

### Optimisation des performances
- **Exécution en parallèle** pour réduire le temps global
- **Cache intelligent** pour éviter les redondances
- **Adaptation** selon la configuration déclarée du domaine

:::tip[Stratégie de scan recommandée]
**Nouveaux domaines** : Lancez tous les scans manuellement pour un état des lieux complet

**Surveillance continue** :
- SSL/DNS/Vulnérabilités en quotidien
- Sous-domaines/Serveur web en hebdomadaire
- Ports TCP en mensuel ou avant changements majeurs
:::

:::info[Résultats et historique]
Tous les résultats sont conservés pour vous permettre de suivre l'évolution de votre sécurité. Les comparaisons automatiques détectent les nouveaux risques et améliorations.
:::