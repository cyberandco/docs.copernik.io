---
sidebar_position: 9
---

# Vérification DNS

Depuis la dernière mise à jour de Copernik, tous les domaines doivent être **vérifiés via DNS** avant de pouvoir être scannés. Cette mesure garantit que vous êtes bien propriétaire du domaine et renforce la sécurité de la plateforme.

## Pourquoi la vérification DNS ?

### Sécurité renforcée
- **Preuve de propriété** - Seul le propriétaire du domaine peut modifier les enregistrements DNS
- **Prévention des abus** - Empêche le scan de domaines non autorisés
- **Conformité** - Respect des bonnes pratiques de sécurité

### Protection des données
- **Pas de scan sans autorisation** - Évite l'analyse non consensuelle
- **Responsabilité claire** - Traçabilité des domaines ajoutés
- **Respect de la vie privée** - Contrôle total sur vos données

## Processus de vérification

### 1. Ajout du domaine
Lorsque vous ajoutez un nouveau domaine à Copernik :
1. Renseignez le nom de domaine et sa configuration
2. Sélectionnez le périmètre de rattachement
3. Validez l'ajout du domaine

### 2. Génération du token
Copernik génère automatiquement :
- **Token de vérification unique** (format : `copernik-verify-XXXXXXXX`)
- **Instructions détaillées** pour configurer l'enregistrement DNS
- **Nom d'enregistrement** exact à créer

### 3. Configuration DNS
Vous devez créer un **enregistrement TXT** dans votre zone DNS :

```
Type: TXT
Nom: _copernik-verify.votre-domaine.com
Valeur: copernik-verify-a1b2c3d4e5f6g7h8
TTL: 300 (recommandé)
```

### 4. Vérification
Une fois l'enregistrement configuré :
- Cliquez sur "Vérifier maintenant" dans l'interface
- Copernik interroge vos serveurs DNS
- La vérification prend quelques secondes à quelques minutes

## Instructions par fournisseur DNS

### Cloudflare
1. Connectez-vous à votre tableau de bord Cloudflare
2. Sélectionnez votre domaine
3. Allez dans "DNS" > "Records"
4. Cliquez "Add record"
5. Configurez :
   - **Type** : TXT
   - **Name** : `_copernik-verify`
   - **Content** : `copernik-verify-XXXXXXXX`
6. Sauvegardez

### OVH
1. Accédez à votre espace client OVH
2. Allez dans "Domaines" > votre domaine > "Zone DNS"
3. Cliquez "Ajouter une entrée"
4. Sélectionnez "TXT"
5. Configurez :
   - **Sous-domaine** : `_copernik-verify`
   - **Valeur** : `copernik-verify-XXXXXXXX`
6. Validez

### Gandi
1. Connectez-vous à votre compte Gandi
2. Allez dans "Domaines" > votre domaine
3. Cliquez sur "Enregistrements DNS"
4. "Ajouter un enregistrement"
5. Configurez :
   - **Type** : TXT
   - **Nom** : `_copernik-verify`
   - **Valeur** : `copernik-verify-XXXXXXXX`
6. Sauvegardez

### Route 53 (AWS)
1. Ouvrez la console Route 53
2. Sélectionnez votre zone hébergée
3. "Create record"
4. Configurez :
   - **Record name** : `_copernik-verify`
   - **Record type** : TXT
   - **Value** : `copernik-verify-XXXXXXXX`
5. Créez l'enregistrement

## Statuts de vérification

### 🟡 En attente
- L'enregistrement DNS n'a pas encore été configuré
- Ou la propagation DNS est en cours
- Actions possibles : Configurer l'enregistrement ou attendre

### 🔴 Échec
- L'enregistrement DNS est incorrect ou absent
- Le token ne correspond pas
- Actions : Vérifier la configuration et relancer

### ✅ Vérifié
- L'enregistrement DNS est correct et détecté
- Le domaine peut maintenant être scanné
- Les analyses automatiques vont commencer

### ⚠️ Expiré
- La vérification a échoué plusieurs fois
- Le domaine est temporairement désactivé
- Actions : Corriger la configuration et relancer

## Résolution des problèmes

### La vérification échoue
**Vérifiez que** :
- Le nom d'enregistrement est exact : `_copernik-verify.votre-domaine.com`
- La valeur correspond au token généré
- L'enregistrement est bien de type TXT
- La propagation DNS est terminée (jusqu'à 24h)

**Outils de diagnostic** :
```bash
# Linux/macOS - Vérifier l'enregistrement
nslookup -type=TXT _copernik-verify.votre-domaine.com

# Windows
nslookup -type=TXT _copernik-verify.votre-domaine.com
```

### Propagation DNS lente
- **Patience** - La propagation peut prendre jusqu'à 24h
- **TTL faible** - Configurez un TTL de 300 secondes
- **Serveurs DNS** - Testez sur différents serveurs (8.8.8.8, 1.1.1.1)

### Sous-domaine vs domaine principal
- **Domaine principal** : `exemple.com` → `_copernik-verify.exemple.com`
- **Sous-domaine** : `app.exemple.com` → `_copernik-verify.app.exemple.com`

## Maintenance de la vérification

### Suppression de l'enregistrement
Une fois la vérification réussie, vous **pouvez supprimer** l'enregistrement TXT :
- La vérification est stockée côté Copernik
- L'enregistrement n'est plus nécessaire
- Suppression sans impact sur le fonctionnement

### Re-vérification
Une re-vérification peut être nécessaire si :
- Le domaine change de propriétaire
- Vous modifiez significativement la configuration DNS
- Copernik détecte des incohérences

:::tip[Bonnes pratiques]
- **Configurez immédiatement** l'enregistrement après ajout du domaine
- **Utilisez un TTL faible** (300s) pour accélérer la propagation
- **Gardez les tokens** en sécurité (ne les partagez pas)
- **Testez la propagation** avant de lancer la vérification
:::

:::warning[Sécurité]
Ne partagez jamais vos tokens de vérification. Ils permettent de prouver la propriété de votre domaine et doivent rester confidentiels.
:::