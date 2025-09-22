---
sidebar_position: 2
---

# Scan SSL/TLS 🔒

Le scan SSL/TLS de Copernik effectue une analyse complète de vos certificats et de la configuration de sécurité de vos connexions chiffrées. Ce scan est essentiel pour garantir que vos communications sont protégées contre l'interception et la manipulation.

## Que vérifie le scan SSL ?

### Validité des certificats
- **Date d'expiration** : Détection des certificats expirés ou bientôt expirés
- **Chaîne de confiance** : Vérification de la validité de la chaîne complète jusqu'à l'autorité racine
- **Révocation** : Contrôle du statut de révocation via OCSP et CRL
- **Correspondance de domaine** : Validation que le certificat correspond bien au domaine utilisé

### Configuration SSL/TLS
- **Versions de protocoles** : Détection des versions obsolètes (SSLv2, SSLv3, TLS 1.0/1.1)
- **Algorithmes de chiffrement** : Identification des suites de chiffrement faibles ou dépréciées
- **Perfect Forward Secrecy** : Vérification du support PFS pour une sécurité renforcée
- **Compression SSL** : Détection des vulnérabilités liées à la compression (CRIME)

### Vulnérabilités spécifiques
- **Heartbleed** : Test de la vulnérabilité OpenSSL CVE-2014-0160
- **POODLE** : Vérification des attaques de rétrogradation SSLv3
- **BEAST** : Détection des configurations vulnérables aux attaques CBC
- **BREACH** : Analyse des risques liés à la compression HTTP

## Types de problèmes détectés

### 🔴 Critiques
- Certificats expirés ou invalides
- Protocoles SSL/TLS non sécurisés (SSLv2, SSLv3)
- Vulnérabilités connues (Heartbleed, POODLE)
- Chiffrements faibles ou cassés

### 🟡 Moyens
- Certificats proches de l'expiration (< 30 jours)
- Absence de Perfect Forward Secrecy
- Suites de chiffrement dépréciées
- Configuration HSTS manquante

### 🟢 Informatifs
- Recommandations d'optimisation
- Nouvelles versions TLS disponibles
- Bonnes pratiques de configuration

## Exemples de résultats

### Certificat valide
```
✅ Certificat SSL valide
   - Émis par : Let's Encrypt Authority X3
   - Valide jusqu'au : 15/12/2024
   - Algorithme : RSA 2048 bits
   - Services web couverts : example.com, www.example.com
```

### Problème détecté
```
⚠️ Configuration SSL à améliorer
   - TLS 1.0 activé (déprécié)
   - Perfect Forward Secrecy non configuré
   - Header HSTS manquant
```

## Recommandations

### Configuration optimale
1. **Désactiver** les protocoles obsolètes (< TLS 1.2)
2. **Configurer** des suites de chiffrement modernes
3. **Activer** Perfect Forward Secrecy
4. **Implémenter** HSTS avec une durée appropriée

### Gestion des certificats
1. **Surveiller** les dates d'expiration
2. **Automatiser** le renouvellement quand possible
3. **Utiliser** des certificats avec SAN pour plusieurs services web
4. **Privilégier** les certificats ECC pour de meilleures performances

## Fréquence et impact

- **Fréquence** : Quotidienne
- **Impact sur les performances** : Minimal (connexions externes uniquement)
- **Durée moyenne** : 5-15 secondes par service web

---

:::tip[Bonnes pratiques]
- Renouvelez vos certificats au moins 30 jours avant expiration
- Utilisez TLS 1.2 minimum, de préférence TLS 1.3
- Configurez HSTS avec une durée d'au moins 6 mois
- Testez régulièrement votre configuration sur [SSL Labs](https://www.ssllabs.com/ssltest/)
:::