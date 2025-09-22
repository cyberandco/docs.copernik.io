---
sidebar_position: 3
---

# Scan DNS 🌐

Le scan DNS de Copernik analyse la configuration de vos enregistrements DNS pour détecter les erreurs de configuration, les vulnérabilités potentielles et les bonnes pratiques non respectées. Une configuration DNS correcte est cruciale pour la sécurité et la disponibilité de vos services.

## Que vérifie le scan DNS ?

### Enregistrements essentiels
- **Enregistrements A/AAAA** : Résolution correcte des noms vers les adresses IP
- **Enregistrements MX** : Configuration des serveurs de messagerie
- **Enregistrements NS** : Validation des serveurs de noms autoritaires
- **Enregistrements CNAME** : Vérification des alias de domaine

### Sécurité DNS
- **DNSSEC** : Validation des signatures cryptographiques
- **SPF** : Analyse des politiques d'envoi d'emails
- **DKIM** : Vérification des signatures de service web pour les emails
- **DMARC** : Contrôle des politiques d'authentification des emails

### Configuration des serveurs
- **Temps de réponse** : Mesure de la latence des serveurs DNS
- **Redondance** : Vérification de la présence de serveurs DNS multiples
- **Cohérence** : Contrôle de la synchronisation entre serveurs
- **Versions logicielles** : Détection des versions obsolètes

## Types de problèmes détectés

### 🔴 Critiques
- Absence de résolution DNS
- Serveurs DNS non accessibles
- Incohérences dans les enregistrements
- Absence totale de sécurité email (SPF/DKIM/DMARC)

### 🟡 Moyens
- DNSSEC non configuré
- Configuration SPF permissive
- Absence de redondance DNS
- Temps de réponse élevés

### 🟢 Informatifs
- Recommandations d'optimisation TTL
- Suggestions de configuration DMARC
- Bonnes pratiques de nommage

## Contrôles de sécurité email

### SPF (Sender Policy Framework)
```
✅ SPF configuré correctement
   v=spf1 ip4:192.0.2.1 include:_spf.example.com ~all

⚠️ SPF trop permissif
   v=spf1 include:_spf.google.com +all (recommandé: ~all)
```

### DKIM (DomainKeys Identified Mail)
```
✅ DKIM détecté
   Sélecteur : default._domainkey.example.com
   Algorithme : RSA 2048 bits

❌ DKIM non configuré
   Aucun enregistrement DKIM trouvé
```

### DMARC (Domain-based Message Authentication)
```
✅ DMARC actif
   v=DMARC1; p=quarantine; rua=mailto:dmarc@example.com

⚠️ DMARC en mode surveillance
   v=DMARC1; p=none (recommandé: quarantine ou reject)
```

## Analyse de la configuration

### Serveurs de noms
- **Nombre** : Vérification d'au moins 2 serveurs NS
- **Géolocalisation** : Recommandation de serveurs géographiquement distribués
- **Fournisseurs** : Détection des serveurs du même fournisseur (risque)

### Enregistrements MX
- **Priorités** : Validation de la logique des priorités MX
- **Accessibilité** : Test de connectivité SMTP
- **Sécurité** : Vérification du support TLS

## Exemples de résultats

### Configuration optimale
```
✅ Configuration DNS excellente
   - DNSSEC activé et valide
   - SPF, DKIM et DMARC configurés
   - 4 serveurs NS géographiquement distribués
   - Temps de réponse < 50ms
```

### Problèmes détectés
```
⚠️ Sécurité email à améliorer
   - SPF présent mais trop permissif (~all recommandé)
   - DKIM manquant pour le service web principal
   - DMARC en mode "none" (surveillance uniquement)
   - Aucun enregistrement TLSRPT configuré
```

## Recommandations

### Sécurité
1. **Activer DNSSEC** pour protéger contre les attaques DNS
2. **Configurer SPF** avec des règles restrictives
3. **Implémenter DKIM** pour tous les services web d'envoi
4. **Déployer DMARC** en mode "quarantine" ou "reject"

### Performance et fiabilité
1. **Utiliser** au moins 2 serveurs DNS différents
2. **Optimiser** les valeurs TTL selon l'usage
3. **Surveiller** les temps de réponse DNS
4. **Maintenir** la cohérence entre serveurs

## Fréquence et impact

- **Fréquence** : Quotidienne
- **Impact sur les performances** : Minimal (requêtes externes uniquement)
- **Durée moyenne** : 10-30 secondes par service web

---

:::warning[Important]
Les changements DNS peuvent prendre jusqu'à 48h pour se propager complètement. Planifiez vos modifications et surveillez la propagation avec des outils comme [DNS Checker](https://dnschecker.org/).
:::