---
sidebar_position: 6
---

# Scan de serveur web

Le scan de serveur web de Copernik analyse la configuration et la sécurité de vos serveurs web pour identifier les problèmes de configuration, les technologies utilisées et les bonnes pratiques non respectées. Cette analyse permet d'optimiser la sécurité et les performances de vos services web.

## Que vérifie le scan de serveur web ?

### Identification des technologies
- **Serveur web** : Apache, Nginx, IIS, Cloudflare, etc.
- **Version du serveur** : Détection des versions obsolètes
- **Langages de programmation** : PHP, Python, Node.js, etc.
- **Frameworks** : Detection des frameworks web utilisés

### Configuration de sécurité
- **Headers HTTP** : Analyse des headers de sécurité
- **Pages d'erreur** : Vérification des pages 404/403 personnalisées
- **Méthodes HTTP** : Contrôle des méthodes autorisées
- **Modules et extensions** : Identification des composants installés

### Performance et CDN
- **CDN (Content Delivery Network)** : Détection de l'utilisation de CDN
- **Compression** : Vérification de la compression gzip/brotli
- **Cache HTTP** : Analyse des directives de mise en cache
- **Temps de réponse** : Mesure des performances

## Headers de sécurité analysés

### Headers de protection
```http
✅ Headers de sécurité configurés
Content-Security-Policy: default-src 'self'
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Strict-Transport-Security: max-age=31536000
Referrer-Policy: strict-origin-when-cross-origin
```

### Headers manquants ou faibles
```http
⚠️ Headers de sécurité à améliorer
❌ Content-Security-Policy: Non configuré
❌ X-Frame-Options: Absent (risque de clickjacking)
⚠️ Strict-Transport-Security: max-age trop court
❌ X-Content-Type-Options: Manquant
```

## Détection de technologies

### Serveurs web populaires
```
✅ Serveur identifié
   - Type : Nginx 1.20.2
   - Proxy : Cloudflare
   - CDN : Actif (cache hit rate: 85%)
   - Compression : gzip + brotli activée
```

### Stack technologique
```
🔍 Technologies détectées
   - Serveur : Apache/2.4.41 (Ubuntu)
   - PHP : 8.1.2
   - Framework : WordPress 6.2
   - Base de données : MySQL (via headers)
   - CDN : Non détecté
```

## Analyse de configuration

### Bonnes pratiques
- **Masquage des versions** : Serveur sans révélation de version
- **Pages d'erreur personnalisées** : Pas d'information sensible exposée
- **Compression activée** : Réduction de la bande passante
- **Cache optimisé** : Directives de cache appropriées

### Problèmes courants
- **Information leakage** : Révélation de versions et technologies
- **Méthodes HTTP dangereuses** : TRACE, TRACK activées
- **Répertoires listables** : Index automatique activé
- **Fichiers sensibles** : Backups, logs accessibles

## Exemples de résultats

### Configuration optimale
```
✅ Configuration serveur excellente
   - Serveur : Nginx (version masquée)
   - Headers de sécurité : Tous configurés
   - CDN : Cloudflare avec optimisations
   - Performance : 95/100 (temps de réponse < 200ms)
   - Compression : Brotli + gzip activées
```

### Problèmes de sécurité
```
⚠️ Configuration à améliorer
   - Server header révèle la version Apache/2.4.29
   - X-Powered-By header expose PHP/7.4.3
   - Répertoire /backup/ listable publiquement
   - Méthode TRACE activée (risque XST)
   - Aucun header CSP configuré
```

### CDN et performance
```
🚀 CDN détecté et optimisé
   - Fournisseur : Cloudflare
   - Cache hit ratio : 92%
   - Edge locations : 15 actives
   - Optimisations : Minification CSS/JS, Image optimization
   - SSL : TLS 1.3 avec ECDSA
```

## Types de problèmes détectés

### 🔴 Critiques
- Fichiers de sauvegarde accessibles publiquement
- Configuration de serveur exposant des données sensibles
- Versions avec vulnérabilités critiques connues
- Absence totale de protection contre le clickjacking

### 🟡 Moyens
- Headers de sécurité manquants
- Versions obsolètes mais non critiques
- Configuration de cache sous-optimale
- Information disclosure via headers

### 🟢 Informatifs
- Recommandations d'optimisation performance
- Suggestions de headers supplémentaires
- Bonnes pratiques CDN
- Améliorations mineures de configuration

## Optimisations recommandées

### Sécurité
1. **Masquer les versions** de serveur et technologies
2. **Configurer tous les headers** de sécurité essentiels
3. **Désactiver les méthodes** HTTP non nécessaires
4. **Personnaliser les pages** d'erreur

### Performance
1. **Implémenter un CDN** pour la distribution globale
2. **Activer la compression** (gzip minimum, brotli préféré)
3. **Optimiser les directives** de cache HTTP
4. **Minifier** les ressources CSS/JS

### Configuration serveur
```nginx
# Nginx - Configuration de sécurité recommandée
server_tokens off;
add_header X-Frame-Options "DENY" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Strict-Transport-Security "max-age=31536000" always;
add_header Content-Security-Policy "default-src 'self'" always;
```

## Surveillance continue

### Métriques importantes
- **Temps de réponse** : < 500ms recommandé
- **Disponibilité** : > 99.9% uptime
- **Cache hit ratio** : > 80% si CDN utilisé
- **Score de sécurité** : Headers correctement configurés

### Alertes configurables
- Changement de version de serveur
- Dégradation des performances
- Nouveau header de sécurité manquant
- Détection de nouvelles vulnérabilités

## Fréquence et impact

- **Fréquence** : Quotidienne
- **Impact sur les performances** : Minimal (requêtes HTTP standard)
- **Durée moyenne** : 10-30 secondes par domaine
- **Analyse** : Non-intrusive, lecture seule

---

:::info[Optimisation continue]
La configuration de serveur web évolue constamment. Surveillez régulièrement les nouvelles recommandations de sécurité et mettez à jour vos configurations pour maintenir un niveau de protection optimal.
:::
