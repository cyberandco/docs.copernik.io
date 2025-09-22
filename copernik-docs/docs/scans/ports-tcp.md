---
sidebar_position: 7
---

# Scan de ports TCP

Le scan de ports TCP de Copernik identifie les services actifs sur vos serveurs en analysant les ports ouverts et accessibles depuis Internet. Cette reconnaissance permet de détecter les services exposés involontairement et d'évaluer la surface d'attaque de votre infrastructure.

## Que détecte le scan de ports ?

### Ports couramment scannés
- **Port 21** : FTP (File Transfer Protocol)
- **Port 22** : SSH (Secure Shell)
- **Port 25** : SMTP (Simple Mail Transfer Protocol)
- **Port 53** : DNS (Domain Name System)
- **Port 80** : HTTP (HyperText Transfer Protocol)
- **Port 110** : POP3 (Post Office Protocol)
- **Port 143** : IMAP (Internet Message Access Protocol)
- **Port 443** : HTTPS (HTTP Secure)
- **Port 993** : IMAPS (IMAP Secure)
- **Port 995** : POP3S (POP3 Secure)

### Services identifiés
- **Serveurs web** : Apache, Nginx, IIS
- **Serveurs de messagerie** : Postfix, Sendmail, Exchange
- **Bases de données** : MySQL, PostgreSQL, MongoDB
- **Services d'administration** : SSH, RDP, VNC
- **Services de fichiers** : FTP, SFTP, SMB

## Types d'analyse

### Détection des services
```
✅ Services légitimes détectés
Port 22  : SSH OpenSSH 8.9 (authentification par clé)
Port 80  : HTTP Nginx 1.20.2 (redirection vers HTTPS)
Port 443 : HTTPS Nginx 1.20.2 (certificat valide)
Port 25  : SMTP Postfix 3.6.4 (relay restreint)
```

### Services potentiellement problématiques
```
⚠️ Services à sécuriser
Port 21  : FTP vsftpd 3.0.3 (authentification anonyme)
Port 3306: MySQL 8.0.28 (accessible depuis Internet)
Port 5432: PostgreSQL 14.2 (pas de restriction IP)
Port 8080: Application web (interface d'admin)
```

### Ports fermés ou filtrés
```
🔒 Ports sécurisés
Port 23  : Telnet (fermé - bonne pratique)
Port 139 : NetBIOS (filtré par firewall)
Port 445 : SMB (non accessible depuis Internet)
Port 1433: SQL Server (fermé)
```

## Niveaux de risque

### 🔴 Critique
- Bases de données accessibles depuis Internet
- Services d'administration non chiffrés (Telnet, FTP)
- Interfaces de gestion exposées sans authentification
- Services obsolètes avec vulnérabilités connues

### 🟠 Élevé
- SSH avec authentification par mot de passe
- Services de messagerie mal configurés
- Applications web sur ports non-standard
- Services de développement en production

### 🟡 Moyen
- Services exposés mais correctement sécurisés
- Versions légèrement obsolètes
- Configuration par défaut non optimisée
- Ports non-standard mais légitimes

### 🟢 Faible
- Services web standard (80, 443)
- SSH correctement configuré
- Services de messagerie sécurisés
- Ports fermés appropriés

## Exemples de détections

### Infrastructure web sécurisée
```
✅ Configuration réseau optimale
Port 22  : SSH (clé publique uniquement, fail2ban actif)
Port 80  : HTTP (redirection automatique vers HTTPS)
Port 443 : HTTPS (TLS 1.3, certificat Let's Encrypt)
Firewall : 97% des ports filtrés ou fermés
```

### Problèmes de sécurité détectés
```
🔴 CRITIQUE - Base de données exposée
Port 3306: MySQL 8.0.28
   - Accessible depuis Internet
   - Authentification par mot de passe
   - Pas de chiffrement SSL forcé
   - Recommandation : Restriction IP + SSL obligatoire

⚠️ MOYEN - FTP non sécurisé
Port 21  : vsftpd 3.0.3
   - Authentification en clair
   - Connexions anonymes autorisées
   - Recommandation : Migration vers SFTP
```

### Services de développement en production
```
🟠 ÉLEVÉ - Services de développement exposés
Port 3000: Node.js development server
Port 8080: Tomcat manager interface
Port 9200: Elasticsearch cluster
   - Pas d'authentification configurée
   - Données sensibles potentiellement accessibles
   - Recommandation : Restriction d'accès immédiate
```

## Bonnes pratiques de sécurité

### Principe du moindre privilège
1. **Fermer** tous les ports non nécessaires
2. **Filtrer** l'accès par adresse IP quand possible
3. **Utiliser** des VPN pour l'administration
4. **Implémenter** des authentifications fortes

### Services recommandés
- **SSH** au lieu de Telnet
- **SFTP/SCP** au lieu de FTP
- **HTTPS** systématique pour les applications web
- **VPN** pour l'accès aux services internes

### Configuration firewall
```bash
# Exemple de règles iptables basiques
# Autoriser SSH (port 22)
iptables -A INPUT -p tcp --dport 22 -j ACCEPT

# Autoriser HTTP/HTTPS (ports 80, 443)
iptables -A INPUT -p tcp --dport 80 -j ACCEPT
iptables -A INPUT -p tcp --dport 443 -j ACCEPT

# Bloquer tout le reste
iptables -A INPUT -j DROP
```

## Services par catégorie

### Services web (recommandés ouverts)
- **Port 80** : HTTP (avec redirection HTTPS)
- **Port 443** : HTTPS (obligatoire)

### Services d'administration (accès restreint)
- **Port 22** : SSH (IP autorisées uniquement)
- **Port 3389** : RDP (VPN recommandé)

### Services de données (accès interne uniquement)
- **Port 3306** : MySQL (localhost/VPN)
- **Port 5432** : PostgreSQL (localhost/VPN)
- **Port 6379** : Redis (localhost uniquement)

### Services à éviter en exposition publique
- **Port 21** : FTP (remplacer par SFTP)
- **Port 23** : Telnet (remplacer par SSH)
- **Port 135** : RPC (Microsoft, très risqué)

## Surveillance et alertes

### Alertes automatiques
- Ouverture de nouveaux ports
- Détection de services non autorisés
- Changement de version de service
- Tentatives de connexion suspectes

### Métriques de sécurité
- Nombre de ports ouverts vs politique
- Services obsolètes détectés
- Ports sans authentification forte
- Score de conformité réseau

## Fréquence et impact

- **Fréquence** : Hebdomadaire
- **Impact sur les performances** : Faible (scan non-intrusif)
- **Durée moyenne** : 30 secondes à 2 minutes par IP
- **Couverture** : Top 1000 ports + ports spécifiques métier

---

:::warning[Conformité]
Certaines réglementations (PCI DSS, ISO 27001) exigent un contrôle strict des ports ouverts. Documentez et justifiez chaque service exposé pour maintenir votre conformité.
:::
