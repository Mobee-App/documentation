# Introduction

Ce guide utilisateur vous aidera à comprendre et à utiliser l'outil Data Connector.

Le **Data Connector** est un outil flexible et puissant intégré à votre environnement Salesforce qui permet des connexions en temps réel avec des API externes. Il permet à vos utilisateurs de **rechercher des données externes**, **visualiser les résultats dans Salesforce** et **utiliser ces données pour créer des enregistrements Salesforce**.

Ce connecteur a été conçu pour être :
- 🔌 **Adaptable** – Il peut être configuré pour fonctionner avec un large éventail de systèmes externes (API publiques ou privées)
- 🎯 **Personnalisé** – Vous pouvez définir exactement quelles données sont affichées, comment elles sont mappées et quels filtres sont disponibles
- 🚀 **Convivial** – Toute la configuration est gérée en coulisses, tandis que les utilisateurs travaillent avec une interface claire et guidée

---

## Que fait-il ?

En termes pratiques, le Data Connector vous permet de :

- Vous connecter à des API externes en utilisant des paramètres sécurisés et préconfigurés
- Définir quelles données doivent être affichées aux utilisateurs
- Permettre aux utilisateurs de rechercher des données externes à l'aide de filtres
- Remplir automatiquement les champs Salesforce avec les résultats sélectionnés
- Étendre facilement le connecteur pour prendre en charge des API supplémentaires à l'avenir

---

## Comment ça fonctionne ?

### Authentification et sécurité

Chaque Data Connector repose sur une méthode d'authentification sécurisée pour communiquer avec les systèmes externes. Selon le connecteur, cela peut être géré via :
- **Named Credentials / External Credentials**
- Un **jeton ou clé API** stocké de manière sécurisée dans les paramètres Mobee
- Ou d'autres mécanismes d'authentification sécurisés fournis par la plateforme ou l'API

### Cinq [objets personnalisés](2-data-connector-module-custom-objects.md#salesforce-objects-data-settings)

Définissent la structure, les filtres, les champs et les correspondances entre Salesforce et les API externes.
- [Data Connector](2-data-connector-module-custom-objects.md#1-data-connector)
- [Data Table Definition](2-data-connector-module-custom-objects.md#2-data-table-definition)
- [Data Attribute Mapping](2-data-connector-module-custom-objects.md#3-data-attribute-mapping)
- [Data Search Mapping](2-data-connector-module-custom-objects.md#4-data-search-mapping)
- [Data Code Mapping](2-data-connector-module-custom-objects.md#5-data-code-mapping)

### Interface utilisateur et modèles d'automatisation

Chaque Data Connector peut fonctionner différemment selon son objectif :

#### Connecteurs interactifs
Ces connecteurs incluent un **Lightning Web Component (LWC)** qui permet aux utilisateurs d'effectuer des recherches en temps réel depuis Salesforce et de sélectionner les données qu'ils souhaitent intégrer dans les enregistrements. Ils reposent sur des paramètres configurables — tels que la source de données et l'objet Salesforce cible — et peuvent être ajoutés aux pages d'enregistrement, aux barres utilitaires ou aux boutons.

#### Connecteurs automatisés
Certains connecteurs fonctionnent entièrement en arrière-plan sans interface utilisateur. Une fois configurés, ils traitent les données automatiquement — par exemple, en synchronisant les dons et les informations des donateurs depuis le système externe vers Salesforce — sans nécessiter d'action manuelle de la part des utilisateurs finaux.

> 💡 Selon le connecteur, l'interaction peut être **pilotée par l'utilisateur (via LWC)** ou **entièrement automatisée (sans interface)**.

---
