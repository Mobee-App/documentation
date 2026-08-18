# iRaiser Connector

## Introduction

Le connecteur **iRaiser Connector** permet aux utilisateurs Salesforce de recevoir en temps réel les données de dons et de donateurs d'iRaiser directement dans Salesforce via une intégration sécurisée par webhook. Contrairement aux autres connecteurs de données qui utilisent une approche basée sur la recherche où les utilisateurs récupèrent activement les données, le connecteur iRaiser fonctionne selon un **modèle push** où iRaiser envoie automatiquement les données à Salesforce chaque fois que des modifications se produisent.

🌐 Documentation iRaiser : https://www.iraiser.eu/

> ✅ Cas d'usage typique : Créer ou mettre à jour automatiquement des enregistrements **Contact**, **Compte**, **Opportunité** ou des objets donateur personnalisés dans Salesforce lorsque des dons ou des informations de donateur sont créés ou modifiés dans iRaiser.

---

## Comment ça fonctionne ?

### Intégration Webhook

Le connecteur iRaiser reçoit les données d'iRaiser via des appels HTTP POST de webhook. Lorsqu'un événement se produit dans iRaiser (tel qu'un nouveau don, une mise à jour de contact ou un paiement récurrent), iRaiser envoie les données à un point de terminaison désigné dans Salesforce.

Le connecteur :
1. Valide la requête entrante à l'aide d'une authentification basée sur des tokens
2. Traite la charge utile JSON d'iRaiser
3. Fait correspondre ou crée des enregistrements dans les objets Salesforce appropriés
4. Gère automatiquement les relations parent-enfant
5. Journalise toutes les activités pour le suivi et le dépannage

### Authentification

Le connecteur utilise **l'authentification par token** pour sécuriser les communications par webhook. Un token secret partagé configuré dans Salesforce est utilisé pour valider chaque requête entrante d'iRaiser.

Chaque requête inclut trois en-têtes de sécurité qui sont validés :
- `securelogin` — Identifiant de connexion iRaiser
- `securetimestamp` — Horodatage UTC actuel
- `securetoken` — Hash MD5 généré à partir du token et des détails de la requête

> ℹ️ L'authentification est gérée automatiquement par le connecteur. Aucune configuration côté client n'est requise.

### Flux de données

Le connecteur iRaiser traite les données via ces objets personnalisés clés :

- **[Data Connector](3-data-connector-module-configuration.md#create-a-data-connector)** – Identifie cela comme une intégration iRaiser en définissant le type de connecteur.
- **[Data Table Definition](8-iraiser-connector-configuration.md#data-table-definition)** – Lie le connecteur aux objets Salesforce (Exemple : Contact, Compte, Opportunité) et définit les relations parent-enfant.
- **[Data Attribute Mapping](8-iraiser-connector-configuration.md#data-attribute-mappings)** – Mappe les champs de la charge utile JSON d'iRaiser aux champs Salesforce, définissant comment les données sont importées dans les enregistrements Salesforce.

### Traitement Asynchrone

Pour garantir la scalabilité et la fiabilité, le connecteur utilise les **Événements de Plateforme** Salesforce pour un traitement asynchrone. Cela signifie :

- Les requêtes de webhook sont acceptées immédiatement (réponse HTTP 202)
- Le traitement réel des enregistrements se fait en arrière-plan
- De grands volumes de données peuvent être gérés sans impacter l'expérience utilisateur
- Les opérations échouées sont automatiquement réessayées

---
