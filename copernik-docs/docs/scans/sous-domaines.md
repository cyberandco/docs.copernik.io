---
sidebar_position: 5
---

# Scan de sous-domaines 🔍

Le scan de sous-domaines de Copernik découvre automatiquement tous les sous-domaines associés à votre domaine principal. Cette reconnaissance permet d'identifier des ressources potentiellement oubliées ou non sécurisées qui pourraient représenter des points d'entrée pour des attaquants.

## Pourquoi scanner les sous-domaines ?

### Découverte d'assets oubliés
- **Environnements de test** : dev.example.com, staging.example.com
- **Anciennes applications** : old-app.example.com, legacy.example.com
- **Services internes** : admin.example.com, internal.example.com
- **Infrastructures** : mail.example.com, ftp.example.com

### Réduction de la surface d'attaque
- Identification des services exposés involontairement
- Détection des configurations obsolètes
- Surveillance des certificats génériques
- Contrôle de la propagation des sous-domaines

## Méthodes de découverte

### Sources publiques
- **Chaos** : Base de données de sous-domaines de ProjectDiscovery
- **Certificate Transparency** : Logs publics des certificats SSL
- **DNS passif** : Historique des résolutions DNS
- **Moteurs de recherche** : Indexation publique

### Techniques actives
- **Bruteforce DNS** : Test de listes de noms communs
- **Zone transfer** : Tentative de transfert de zone DNS
- **Résolution inversée** : Recherche à partir des plages IP
- **Altération de domaines** : Variations typographiques

## Types de sous-domaines détectés

### 🟢 Sous-domaines légitimes
```
✅ Sous-domaines actifs découverts
   - www.example.com (Production)
   - api.example.com (API publique)
   - cdn.example.com (CDN)
   - support.example.com (Support client)
```

### 🟡 Sous-domaines à surveiller
```
⚠️ Sous-domaines sensibles détectés
   - admin.example.com (Interface d'administration)
   - dev.example.com (Environnement de développement)
   - staging.example.com (Environnement de test)
   - backup.example.com (Services de sauvegarde)
```

### 🔴 Sous-domaines problématiques
```
❌ Sous-domaines à risque
   - test.example.com (Non sécurisé, indexé par Google)
   - old.example.com (Version obsolète avec vulnérabilités)
   - internal.example.com (Service interne exposé)
   - db.example.com (Interface base de données accessible)
```

## Analyse des résultats

### Informations collectées
- **Adresses IP** : Résolution DNS des sous-domaines
- **Status HTTP** : Codes de réponse des services web
- **Certificats SSL** : Validation et expiration
- **Technologies** : Identification des serveurs et frameworks
- **Redirections** : Chaînes de redirection HTTP

### Classification des risques
- **Exposition involontaire** : Services internes accessibles
- **Données sensibles** : Informations de développement exposées
- **Authentification faible** : Interfaces sans protection
- **Versions obsolètes** : Logiciels non maintenus

## Exemples de découvertes

### Environnement de développement exposé
```
🔴 CRITIQUE - Environnement de dev exposé
   - Sous-domaine : dev.example.com
   - Status : 200 OK (accessible publiquement)
   - Contenu : Code source, clés API, données de test
   - Recommandation : Restriction d'accès IP ou VPN
```

### Interface d'administration non sécurisée
```
🟠 ÉLEVÉ - Panel admin accessible
   - Sous-domaine : admin.example.com
   - Authentification : Basique (bruteforce possible)
   - Protection : Aucune limitation de tentatives
   - Recommandation : 2FA et restriction d'accès
```

### Certificat expiré
```
🟡 MOYEN - Certificat SSL expiré
   - Sous-domaine : old.example.com
   - Expiration : Il y a 3 mois
   - Impact : Erreurs SSL, perte de confiance
   - Recommandation : Renouvellement ou suppression
```

## Protection et bonnes pratiques

### Inventaire et gouvernance
1. **Tenir un inventaire** à jour de tous les sous-domaines
2. **Définir une politique** de nommage des sous-domaines
3. **Documenter** le responsable de chaque service
4. **Automatiser** la surveillance des nouveaux sous-domaines

### Sécurisation
1. **Authentification forte** sur les interfaces sensibles
2. **Restriction d'accès** par IP ou VPN pour les environnements internes
3. **Chiffrement SSL** pour tous les sous-domaines
4. **Headers de sécurité** appropriés

### Nettoyage régulier
1. **Supprimer** les sous-domaines obsolètes
2. **Rediriger** les anciens services vers les nouveaux
3. **Renouveler** les certificats SSL
4. **Auditer** régulièrement les permissions

## Configuration recommandée

### DNS
```dns
; Sous-domaines publics
www.example.com.     IN A     192.0.2.1
api.example.com.     IN A     192.0.2.2
cdn.example.com.     IN CNAME cdn.cloudflare.com.

; Sous-domaines internes (accès restreint)
admin.example.com.   IN A     10.0.1.10
dev.example.com.     IN A     10.0.1.20
```

### Certificats SSL génériques
```
*.example.com (couvre tous les sous-domaines)
OU
Certificats spécifiques par sous-domaine critique
```

## Fréquence et impact

- **Fréquence** : Hebdomadaire
- **Impact sur les performances** : Minimal (requêtes DNS externes)
- **Durée moyenne** : 1-5 minutes selon la taille du service web
- **Couverture** : Jusqu'à 3 niveaux de sous-domaines

---

:::tip[Surveillance continue]
Configurez des alertes pour être notifié immédiatement de la découverte de nouveaux sous-domaines. Cela vous permet de réagir rapidement en cas de création non autorisée ou d'exposition accidentelle.
:::