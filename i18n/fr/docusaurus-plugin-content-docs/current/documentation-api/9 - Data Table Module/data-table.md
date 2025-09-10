# Configuration du module Data Table

![Aperçu de la Data Table](./img/data-table.png)

## Présentation

Le composant Lightning Web "Mobee Data Table" (LWC) offre un tableau performant, configurable et robuste pour afficher les enregistrements Salesforce. Il prend en charge les colonnes dynamiques, les champs de relation, la multi-monnaie, la sélection de lignes et l'intégration transparente avec les Flows Salesforce.

## Fonctionnement
Mobee Data Table construit dynamiquement ses colonnes et ses requêtes en fonction de la configuration et des métadonnées. Il prend en charge :

- **Colonnes dynamiques :** Spécifiez n'importe quel champ Salesforce, y compris les champs de relation (ex : `Account.Name`).
- **Multi-monnaie :** Les champs de devise sont inclus automatiquement lorsque l'option est activée.
- **Modes de sélection :** Sélection de ligne unique, multiple ou consultation uniquement.
- **Prise en charge de tous les types de données Salesforce :** Le tableau formate automatiquement les champs de devise, pourcentage, email et référence.
- **Intégration Flow :** Variables d'entrée/sortie pour les lignes sélectionnées, la configuration et la validation.

## Prérequis

Assurez-vous que Lightning Web Security (LWS) est activé dans votre organisation. Pour plus d'informations, consultez la [documentation Salesforce sur l'activation de LWS](https://developer.salesforce.com/docs/platform/lightning-components-security/guide/lws-enable.html).

L'attribution du jeu d'autorisations **Mobee User** est requise pour permettre aux utilisateurs d'accéder et d'utiliser le composant Data Table.

## Utilisation

### Configuration dans un Flow

Pour utiliser le Mobee Data Table dans un Flow, suivez ces étapes :

1. **Définir la variable de collection**
   - Dans Flow Builder, créez une variable (ex : `RecordCollection`) de type "Enregistrement" (correspondant à votre objet).
   - Assurez-vous que "Autoriser plusieurs valeurs (collection)" est coché.

2. **Configurer le composant Data Table**
   - Ajoutez le composant Mobee Data Table à l'écran de votre Flow.
   - Définissez les propriétés suivantes :
     - **Collection source :** La variable Flow contenant vos enregistrements.
     - **Colonnes :** Noms d'API des champs à afficher, séparés par des virgules (ex : `Name,Account.Name,Amount`).
     - **Mode de sélection des lignes :** Choisissez "Unique", "Multiple" ou "Consultation uniquement".
     - **Utiliser le label comme titre :** Affichez éventuellement un label personnalisé comme titre du tableau.
     - **Sélection requise :** Exigez éventuellement que l'utilisateur sélectionne au moins une ligne avant de continuer.

3. **Gérer les variables de sortie**
   - Faites correspondre les variables de sortie du composant (ex : `selectedRows`, `firstSelectedRow`) aux variables du Flow pour les utiliser dans la logique suivante.

4. **Enregistrez et activez le Flow**
   - Enregistrez votre Flow et activez-le.