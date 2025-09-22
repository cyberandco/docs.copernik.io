---
sidebar_position: 4
---

# Rôles utilisateurs

Le système de rôles de Copernik permet de contrôler finement les accès et les permissions des utilisateurs au sein de votre organisation. Il existe deux niveaux de rôles : **au niveau de l'organisation** et **au niveau du périmètre**.

## 🏢 Rôles au niveau de l'organisation

### 🔑 Administrateur (Admin)
**Contrôle total de l'organisation**

- ✅ Gestion complète de l'organisation (paramètres, facturation)
- ✅ Invitation et gestion de tous les utilisateurs
- ✅ Création et gestion de tous les périmètres
- ✅ Accès à tous les domaines et scans
- ✅ Configuration des alertes globales
- ✅ Gestion des projets et paramètres avancés

### 📊 Analyste (Analyst)
**Analyse et surveillance de sécurité**

- ✅ Visualisation de tous les scans et rapports
- ✅ Déclenchement de scans manuels
- ✅ Gestion des alertes et notifications
- ✅ Accès aux tableaux de bord et métriques
- ❌ Gestion des utilisateurs et périmètres
- ❌ Modification des paramètres d'organisation

### 👀 Observateur (Viewer)
**Consultation en lecture seule**

- ✅ Visualisation des scans et résultats
- ✅ Consultation des alertes
- ✅ Accès aux rapports et tableaux de bord
- ❌ Déclenchement de scans
- ❌ Gestion des alertes
- ❌ Modification de paramètres

## 🎯 Rôles au niveau du périmètre

### 🔧 Administrateur de périmètre
**Contrôle total du périmètre**

- ✅ Gestion des domaines du périmètre
- ✅ Ajout/suppression d'utilisateurs dans le périmètre
- ✅ Attribution des rôles aux autres utilisateurs
- ✅ Configuration des paramètres de scan
- ✅ Gestion des alertes spécifiques au périmètre

### ✏️ Éditeur (Writer)
**Modification et gestion des contenus**

- ✅ Ajout et modification des domaines
- ✅ Déclenchement de scans
- ✅ Configuration des paramètres de scan
- ✅ Gestion des alertes du périmètre
- ❌ Gestion des utilisateurs du périmètre
- ❌ Attribution de rôles

### 👁️ Observateur de périmètre (Viewer)
**Consultation du périmètre**

- ✅ Visualisation des domaines et scans
- ✅ Consultation des alertes
- ✅ Accès aux rapports du périmètre
- ❌ Modification des domaines
- ❌ Déclenchement de scans
- ❌ Gestion des paramètres

## 🔄 Hiérarchie des rôles

### Au niveau organisation
```
Administrateur (Niveau 3)
    ↓ Peut gérer
Analyste (Niveau 2)
    ↓ Peut gérer
Observateur (Niveau 1)
```

### Au niveau périmètre
```
Admin périmètre (Niveau 3)
    ↓ Peut gérer
Éditeur (Niveau 2)
    ↓ Peut gérer
Observateur périmètre (Niveau 1)
```

## 🎯 Attribution des rôles

### Principe de gestion
- **Administrateurs d'organisation** : Peuvent gérer tous les rôles
- **Administrateurs de périmètre** : Peuvent gérer les rôles dans leur périmètre uniquement
- **Éditeurs** : Peuvent attribuer le rôle "Observateur" uniquement

### Règles importantes
- Un utilisateur ne peut pas modifier son propre rôle
- Il doit toujours exister au moins un administrateur par organisation
- Il doit toujours exister au moins un administrateur par périmètre

## 🚀 Gestion des utilisateurs

### Inviter un nouvel utilisateur
1. **Accédez à la gestion des utilisateurs**
2. **Cliquez sur "Inviter un utilisateur"**
3. **Configurez l'invitation** :
   - Email de l'utilisateur
   - Rôle au niveau organisation
   - Périmètres à assigner
   - Rôles spécifiques par périmètre

### Modifier les rôles
1. **Sélectionnez l'utilisateur** dans la liste
2. **Choisissez le nouveau rôle** approprié
3. **Confirmez la modification**

:::tip Principe du moindre privilège
Accordez toujours le niveau d'accès minimum nécessaire pour que l'utilisateur puisse accomplir ses tâches.
:::

## 📊 Cas d'usage typiques

### 🏗️ Équipe de développement
- **Chef de projet** : Administrateur de périmètre "Développement"
- **Développeurs** : Éditeurs du périmètre "Développement"
- **Testeurs** : Observateurs du périmètre "Développement"

### 🛡️ Équipe sécurité
- **RSSI** : Administrateur d'organisation
- **Analystes SOC** : Analystes avec accès à tous les périmètres
- **Consultants externes** : Observateurs sur périmètres spécifiques

### 💼 Direction
- **DSI** : Administrateur d'organisation
- **Responsables métier** : Observateurs des périmètres pertinents

:::warning Sécurité
Révisez régulièrement les accès utilisateurs et retirez les permissions inutiles. Documentez les raisons d'attribution des rôles élevés.
:::
