# Configuration du Connecteur iRaiser

## Aperçu

> ⚠️ **Prérequis :** Avant de configurer ce connecteur, assurez-vous que la **Configuration Générale** est terminée.  
> Voir [Configuration Générale](3-data-connector-module-configuration.md) pour les étapes d'attribution des ensembles de permissions et de création d'un connecteur de données.

1. [**Créer le Connecteur de Données**](#data-connector) – Configurez l'enregistrement du connecteur avec le type "iRaiser Connector"
2. [**Stocker le Token iRaiser**](#store-the-iraiser-token) – Configurez le token de sécurité dans les paramètres
3. [**Créer des Définitions de Table de Données**](#data-table-definition) – Liez les données iRaiser aux objets Salesforce
4. [**Configurer les Mappages d'Attributs de Données**](#data-attribute-mappings) – Mappez les champs JSON d'iRaiser aux champs Salesforce
5. [**Créer le Site Public pour la Réception des Webhooks**](#create-the-public-site-for-webhook-reception) – Activez la réception des webhooks

Dans la section suivante, nous examinerons de plus près chacune de ces étapes de configuration.

---

## Connecteur de Données

### Créer l'Enregistrement du Connecteur de Données

L'enregistrement du connecteur de données identifie cela comme une intégration iRaiser.

#### Champs Obligatoires

| Champ | Signification | Valeur à Définir |
|-------|--------------|------------------|
| **Nom** | Identifiant unique pour ce connecteur | Exemple : `iRaiser Production` ou `iRaiser Sandbox` |
| **Type de Connecteur** | Type de connecteur | Sélectionnez `iRaiser Connector` dans la liste déroulante |

#### Configuration Exemple

| Champ | Valeur Exemple |
|-------|----------------|
| Nom | `iRaiser Production` |
| Type de Connecteur | `iRaiser Connector` |

#### Étapes

1. Allez dans l'onglet **Connecteurs de Données**
2. Cliquez sur **Nouveau**
3. Entrez un Nom (ex. "iRaiser Production")
4. Sélectionnez `iRaiser Connector` comme Type de Connecteur
5. Enregistrez l'enregistrement

---

## Stocker le Token iRaiser

### Configurer le Token de Sécurité

Le connecteur iRaiser utilise un token secret partagé pour valider les requêtes de webhook entrantes. Ce token doit être configuré dans les métadonnées personnalisées Mobee Settings.

#### Champs Obligatoires

| Champ | Signification | Valeur à Définir |
|-------|--------------|------------------|
| **iRaiser Token** | Clé secrète partagée pour l'authentification des webhooks | Le token fourni par iRaiser |

#### Étapes

1. Allez dans **Paramétrage** → **Types de Métadonnées Personnalisées**
2. Cliquez sur **Gérer les Enregistrements** à côté de **Mobee Settings**
3. Modifiez l'enregistrement **Paramètres** par défaut (ou créez-en un nouveau)
4. Entrez le Token iRaiser dans le champ **iRaiser Token**
5. Enregistrez l'enregistrement

> 🔐 **Note de Sécurité :** Ce token est utilisé pour valider l'en-tête `securetoken` dans les requêtes de webhook entrantes. Gardez-le sécurisé et ne l'exposez jamais dans le code côté client.

---

## Définition de Table de Données

### Aperçu

Les définitions de table de données lient les données iRaiser aux objets Salesforce. Pour le connecteur iRaiser, chaque définition spécifie quel objet Salesforce recevra les données de la charge utile du webhook.

Le connecteur prend en charge le traitement de plusieurs objets dans un seul appel de webhook, avec une gestion automatique des relations parent-enfant.

### Champs Obligatoires

| Champ | Signification | Valeur à Définir |
|-------|--------------|------------------|
| **Connecteur de Données** | Lie cette définition de table au connecteur | Sélectionnez votre connecteur iRaiser |
| **Nom de l'Objet** | L'objet Salesforce où les enregistrements seront créés/mis à jour | Saisissez le Nom d'API de l'Objet. Exemple : `Account`, `Contact`, `Opportunity` |
| **Type d'Enregistrement d'Objet** *(facultatif)* | Limite le traitement à des types d'enregistrement spécifiques | Noms du Développeur séparés par des virgules |
| **Mappage de Recherche de Table Parente** *(facultatif)* | Définit les relations parent-enfant pour le traitement hiérarchique | Format : `APIObjetParent->ChampRechercheEnfant` (une par ligne) |

> 💡 Si votre org **n'utilise pas** les types d'enregistrement sur l'objet désigné, laissez **Type d'Enregistrement d'Objet** vide.  
> Lors du remplissage du **Type d'Enregistrement d'Objet**, entrez le **Nom du Développeur**, pas le libellé.  
> Exemple : `Business_Account, PersonAccount`

### Configuration Exemple

#### Pour un Objet Contact (Enfant de Compte)

| Champ | Valeur Exemple |
|-------|----------------|
| Connecteur de Données | *iRaiser Production* |
| Nom de l'Objet | `Contact` |
| Type d'Enregistrement d'Objet | (vide) |
| Mappage de Recherche de Table Parente | `Account->AccountId` |

#### Pour un Objet Compte (Racine)

| Champ | Valeur Exemple |
|-------|----------------|
| Connecteur de Données | *iRaiser Production* |
| Nom de l'Objet | `Account` |
| Type d'Enregistrement d'Objet | `Business_Account` |
| Mappage de Recherche de Table Parente | (vide - il s'agit d'un objet racine) |

#### Pour un Objet Opportunité (Enfant de Compte et Contact)

| Champ | Valeur Exemple |
|-------|----------------|
| Connecteur de Données | *iRaiser Production* |
| Nom de l'Objet | `Opportunity` |
| Type d'Enregistrement d'Objet | `Donation` |
| Mappage de Recherche de Table Parente | `Account->AccountId` |

### Étapes

1. Allez dans l'onglet **Définitions de Table de Données**
2. Cliquez sur **Nouveau**
3. Sélectionnez votre connecteur iRaiser dans le champ **Connecteur de Données**
4. Entrez le **Nom de l'Objet** Salesforce (nom d'API)
5. Spécifiez éventuellement le **Type d'Enregistrement d'Objet** si vous devez filtrer par type d'enregistrement
6. Si cet objet a des relations parent, configurez le **Mappage de Recherche de Table Parente**
7. Enregistrez l'enregistrement

---

## Mappages d'Attributs de Données

### Aperçu

Les mappages d'attributs de données définissent comment les champs de la charge utile JSON d'iRaiser sont mappés aux champs des objets Salesforce. Le connecteur iRaiser utilise la **notation par points** pour accéder aux champs imbriqués dans la structure JSON.

> 💡 Seuls les champs avec les mappages appropriés seront peuplés dans les enregistrements Salesforce. Chaque mappage lie un chemin JSON spécifique à un champ Salesforce.

### Champs Clés

| Champ | Signification | Valeur à Définir |
|-------|--------------|------------------|
| **Définition de Table de Données** | Lie ce mappage à la définition de table correspondante | Sélectionnez l'enregistrement *Définition de Table de Données* concerné |
| **Champ Objet SF** | Champ Salesforce où la valeur doit être stockée | Nom du Développeur du champ (Exemple : `FirstName`, `LastName`, `Email`) |
| **Champ API** | Chemin du champ depuis la charge utile JSON d'iRaiser | Chemin du champ JSON utilisant la notation par points (Exemple : `contact.firstname`, `contact.lastname`) |
| **Est Identifiant Unique** | Marque ce champ comme un identifiant unique pour la correspondance des enregistrements | Cocher pour les champs qui identifient de manière unique les enregistrements (ex. : ID iRaiser, Email) |

#### 1. Définir le Champ Objet SF dans le Mappage d'Attributs de Données

- Il s'agit du nom d'API interne du champ Salesforce que vous souhaitez peupler.
- Il doit exister sur l'objet associé à votre Définition de Table de Données.
- Vous pouvez le trouver dans **Gestionnaire d'Objets → [Votre Objet] → Champs et Relations**.

📌 <u>*Exemple :*</u>

Pour mapper le prénom du contact, définissez le **Champ Objet SF** sur `FirstName`.

#### 2. Définir le Champ API dans le Mappage d'Attributs de Données

Il s'agit du chemin exact du champ tel que retourné par l'API iRaiser, en utilisant la **notation par points** pour accéder aux objets imbriqués.

- Utilisez la notation par points pour parcourir la structure JSON
- Assurez-vous que le champ existe dans la charge utile du webhook

📌 <u>*Exemple :*</u>

<details>
<summary>Voir un exemple de charge utile JSON iRaiser</summary>

```json
Exemple de charge utile de webhook :

{
  "event": "contact.updated",
  "data": {
    "contact": {
      "id": "12345",
      "firstname": "John",
      "lastname": "Doe",
      "email": "john.doe@example.com",
      "phone": "+33123456789",
      "account": {
        "id": "67890",
        "name": "Acme Corporation",
        "address": {
          "street": "123 Main Street",
          "city": "Paris",
          "postalcode": "75001",
          "country": "France"
        }
      }
    }
  },
  "timestamp": "2025-08-17T10:00:00Z"
}
```

</details>

| Champ Objet SF | Champ API | Est Identifiant Unique |
|---------------|------------|------------------------|
| FirstName | `contact.firstname` | Non |
| LastName | `contact.lastname` | Non |
| Email | `contact.email` | Oui |
| Phone | `contact.phone` | Non |
| iRaiser_Id__c | `contact.id` | Oui |

#### 3. Exemple d'Enregistrements de Mappage d'Attributs de Données

Pour un objet Contact recevant des données iRaiser :

| Définition de Table de Données | Champ Objet SF | Champ API | Est Identifiant Unique |
|---|---|---|---|
| iRaiser Contact | FirstName | contact.firstname | (non coché) |
| iRaiser Contact | LastName | contact.lastname | (non coché) |
| iRaiser Contact | Email | contact.email | ✅ (coché) |
| iRaiser Contact | Phone | contact.phone | (non coché) |
| iRaiser Contact | iRaiser_Id__c | contact.id | ✅ (coché) |

Pour un objet Compte :

| Définition de Table de Données | Champ Objet SF | Champ API | Est Identifiant Unique |
|---|---|---|---|
| iRaiser Account | Name | contact.account.name | (non coché) |
| iRaiser Account | iRaiser_Account_Id__c | contact.account.id | ✅ (coché) |
| iRaiser Account | BillingStreet | contact.account.address.street | (non coché) |
| iRaiser Account | BillingCity | contact.account.address.city | (non coché) |
| iRaiser Account | BillingPostalCode | contact.account.address.postalcode | (non coché) |

> 💡 **Meilleure Pratique :** Mappez toujours l'ID externe iRaiser (ex. : `contact.id`) vers un champ personnalisé dans Salesforce et marquez-le comme **Identifiant Unique**. Cela garantit une correspondance correcte des enregistrements entre les synchronisations et évite les doublons.

---

## Créer le Site Public pour la Réception des Webhooks

Le connecteur iRaiser reçoit les appels de webhook d'iRaiser, ce qui nécessite un point de terminaison publiquement accessible dans Salesforce. Cela est réalisé en créant et en activant un Site Salesforce.

> ⚠️ De légères différences peuvent apparaître en fonction de votre édition Salesforce — le principe reste le même.

### Étapes

1. Allez dans **Paramétrage > Interface Utilisateur > Sites et Domaines > Sites**
2. Cliquez sur **Nouveau**
3. Remplissez les champs suivants :

   | Champ | Valeur |
   |---|---|
   | Libellé du Site | `iRaiser Webhooks` |
   | Nom du Site | `iraiserwebhooks` |
   | Contact du Site | *(Administrateur Système)* |
   | Propriétaire d'Enregistrement par Défaut | *(Administrateur Système)* |
   | Actif | ✅ Coché |
   | Page d'Accueil du Site Active | `InMaintenance` |

4. Cliquez sur **Enregistrer**
5. Assurez-vous que le site est **Actif**

---

## Relations Parent-Enfant

### Aperçu

Le connecteur iRaiser gère automatiquement le traitement hiérarchique des données où les enregistrements parents sont créés avant leurs enfants. Cela est configuré en utilisant le champ **Mappage de Recherche de Table Parente** sur la Définition de Table de Données.

### Fonctionnement

Lorsque vous définissez des relations parent-enfant, le connecteur :
1. Identifie toutes les Définitions de Table de Données pour votre connecteur
2. Construit un graphe de dépendances basé sur les Mappages de Recherche de Table Parente
3. Trie automatiquement les définitions pour que les parents soient traités en premier
4. Crée/met à jour les enregistrements parents avant leurs enfants
5. Utilise les champs de recherche mappés pour établir les relations

> ⚠️ **Détection de Dépendance Circulaire :** Si des dépendances circulaires sont détectées (ex. : l'Objet A dépend de l'Objet B, et l'Objet B dépend de l'Objet A), le connecteur génère une erreur et arrête le traitement.

### Format de Configuration

Le champ **Mappage de Recherche de Table Parente** utilise le format suivant :

```
APIObjetParent->ChampRechercheEnfant
```

- **APIObjetParent** : Le nom d'API de l'objet Salesforce parent
- **ChampRechercheEnfant** : Le nom d'API du champ de recherche sur l'objet enfant qui référence le parent

Plusieurs relations parent peuvent être définies, une par ligne.

### Exemple : Hiérarchie à Trois Niveaux

Pour un scénario de don typique avec Compte → Contact → Opportunité :

**DTD Compte (Racine) :**
| Champ | Valeur |
|---|---|
| Mappage de Recherche de Table Parente | (vide - pas de parent) |

**DTD Contact (Enfant de Compte) :**
| Champ | Valeur |
|---|---|
| Mappage de Recherche de Table Parente | `Account->AccountId` |

**DTD Opportunité (Enfant de Compte) :**
| Champ | Valeur |
|---|---|
| Mappage de Recherche de Table Parente | `Account->AccountId` |

Cela garantit que :
1. Les enregistrements Compte sont créés/mis à jour en premier
2. Ensuite les enregistrements Contact (liés à leurs Comptes)
3. Enfin les enregistrements Opportunité (liés à leurs Comptes)

---

## Tester Votre Configuration

Avant de passer en production, testez votre configuration du connecteur iRaiser :

1. **Vérifiez le Connecteur de Données** - Assurez-vous qu'il est créé avec le type "iRaiser Connector"
2. **Vérifiez le Token** - Confirmez que le Token iRaiser est configuré dans Mobee Settings
3. **Vérifiez le Site** - Confirmez que le Site Salesforce est créé et actif
4. **Testez avec une Charge Utile Exemple** - Utilisez le bac à sable iRaiser pour envoyer des appels de webhook de test
5. **Validez les Mappages de Champs** - Confirmez que tous les champs attendus sont peuplés correctement
6. **Testez les Relations Parent-Enfant** - Vérifiez que les données hiérarchiques sont traitées dans le bon ordre

> 💡 Commencez avec un petit sous-ensemble de données et élargissez progressivement à mesure que vous validez l'intégration.

---

## Dépannage

### Problèmes Courants

#### Le Webhook Retourne 403 Interdit

**Symptômes :** Réponse HTTP 403 avec le message "Token invalide"

**Causes :**
- Token iRaiser incorrect dans les Paramètres
- Calcul du securetoken invalide
- En-têtes manquants ou incorrects

**Solution :**
1. Vérifiez le Token iRaiser dans Mobee Settings
2. Assurez-vous qu'iRaiser envoie les trois en-têtes requis : `securelogin`, `securetimestamp`, `securetoken`
3. Vérifiez le calcul du token : MD5(`securelogin` + `iRaiserToken` + `securetimestamp`).toLowerCase()
4. Vérifiez le format de l'horodatage : doit être au format ISO 8601 UTC

#### Aucun Enregistrement Créé/Mis à Jour

**Symptômes :** Le webhook retourne 202 Accepté mais aucun enregistrement n'est créé

**Causes :**
- Définitions de Table de Données manquantes
- Aucun Mappage d'Attributs de Données configuré
- Problèmes de sécurité au niveau des champs
- Champs requis manquants
- Site non actif ou mal configuré

**Solution :**
1. Vérifiez que les Définitions de Table de Données existent pour les objets cibles
2. Vérifiez que les Mappages d'Attributs de Données sont configurés pour tous les champs requis
3. Assurez-vous que l'utilisateur d'intégration a les permissions de création/modification sur les objets cibles
4. Vérifiez que le Site Salesforce est actif

#### Enregistrements en Double

**Symptômes :** Plusieurs enregistrements créés pour le même contact iRaiser

**Causes :**
- Aucun champ identifiant unique configuré
- Champ identifiant unique mal mappé
- Valeurs différentes d'identifiant unique entre les synchronisations

**Solution :**
1. Configurez au moins un mappage **Identifiant Unique** par objet
2. Assurez-vous que le champ mappé contient une valeur unique et cohérente d'iRaiser
3. Envisagez d'utiliser l'ID iRaiser comme champ ID externe dans Salesforce

#### Problèmes d'Ordre de Traitement Parent-Enfant

**Symptômes :** Les enregistrements enfants créés avant les parents, causant des erreurs de recherche

**Causes :**
- Mappage de Recherche de Table Parente manquant ou incorrect
- Dépendances circulaires dans les Définitions de Table de Données

**Solution :**
1. Vérifiez que le Mappage de Recherche de Table Parente est configuré pour tous les objets enfants
2. Vérifiez le graphe de dépendances pour garantir une hiérarchie valide

---

*Dernière mise à jour : Août 2026*
