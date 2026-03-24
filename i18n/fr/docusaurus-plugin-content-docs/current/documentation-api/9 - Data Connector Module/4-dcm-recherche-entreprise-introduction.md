# Recherche Entreprise

## Introduction

Le connecteur **Recherche Entreprise** permet aux utilisateurs Salesforce de rechercher des entreprises françaises en temps réel, de récupérer des informations commerciales vérifiées à partir de bases de données nationales officielles (y compris le registre SIRENE géré par l'INSEE et d'autres sources gouvernementales), puis de remplir efficacement les enregistrements Salesforce. Il utilise des règles de mappage configurables pour déterminer comment les résultats apparaissent et où les données sont stockées dans Salesforce.

🌐 Documentation de l'API : https://recherche-entreprises.api.gouv.fr/docs/

> ✅ Cas d'usage typique : Créer ou enrichir rapidement des enregistrements **Compte** (Account) avec des informations officielles sur les entreprises.

**Démo** — Comment fonctionne le connecteur

La démo suivante illustre comment un utilisateur peut rechercher une entreprise, vérifier les enregistrements Salesforce existants et créer un nouvel enregistrement d'entreprise avec les informations récupérées depuis l'API.

![Démo Recherche Entreprise](img/Demo/DataConnectorDemo.gif "Démo Recherche Entreprise")

---

## Comment ça fonctionne ?

### Authentification

Le connecteur Recherche Entreprise utilise une authentification sécurisée pour accéder à l'API externe.

L'authentification est gérée automatiquement via une configuration **Named Credential + External Credential** livrée avec la solution.
Cela garantit un accès sécurisé à la source de données d'entreprise sans que l'administrateur n'ait besoin de configurer manuellement la sécurité de l'API.

> ℹ️ *Aucune configuration d'authentification côté client n'est requise — les identifiants sont packagés et maintenus par l'implémenteur.*

### Cinq objets personnalisés

Pour permettre à l'API Recherche Entreprise d'interagir avec Salesforce, vous devez configurer le connecteur à l'aide de quatre objets personnalisés principaux. Ces objets définissent le connecteur, la cible Salesforce, les champs à mapper et les filtres de recherche :

- **[Data Connector](3-data-connector-module-configuration.md#create-a-data-connector)** – Représente la connexion à l'API externe en définissant le type de connecteur.
- **[Data Table Definition](5-dcm-recherche-entreprise-configuration.md#data-table-definition)** – Lie le connecteur à un objet Salesforce spécifique (Exemple : Account) et optionnellement à des types d'enregistrement spécifiques. Cela détermine où les données de l'API seront appliquées.
- **[Data Attribute Mapping](5-dcm-recherche-entreprise-configuration.md#search-results-display)** – Mappe les champs de la réponse de l'API externe aux champs Salesforce, définissant comment les données sont importées dans les enregistrements Salesforce.
- **[Data Search Mapping](5-dcm-recherche-entreprise-configuration.md#filters--search-inputs)** – Définit les paramètres de recherche et les filtres utilisés pour interroger l'API externe, contrôlant comment et quelles données sont récupérées.
- **[Data Code Mapping](5-dcm-recherche-entreprise-configuration.md#data-code-mapping)** – Définit la couche de traduction entre les codes bruts de l'API externe et les valeurs standardisées internes. Chaque mappage lie un code à un libellé lisible, assurant une normalisation cohérente pour les listes de sélection, les menus déroulants, les champs de statut, etc.

### Lightning Web Component [(LWC)](5-dcm-recherche-entreprise-configuration.md#lightning-web-component-data-connector)

Au cœur du connecteur se trouve un **Lightning Web Component** réutilisable qui fournit l'interface de recherche et l'expérience de prévisualisation des données.

Le composant s'adapte dynamiquement aux paramètres de configuration :

- **Data Connector Type** — détermine quelle API externe appeler, dans ce cas l'`API Recherche Entreprise`
- **Salesforce Object Name** — définit où les données seront stockées (Exemple : `Account`)
- **Mappages de champs et filtres de recherche** — pilotent les champs de recherche, l'affichage des résultats et le remplissage des enregistrements

> 💡 Le composant peut être utilisé dans les vues de liste, les pages d'enregistrement, ou ouvert via des boutons ou onglets personnalisés, selon votre configuration.

---
