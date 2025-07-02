# Value Fluctuation Chart

![Exemple du Value Fluctuation Chart](./img/value_fluctuation_chart.png)

## Aperçu

Le composant Lightning Web Component (LWC) 'Value Fluctuation Chart' offre un outil de visualisation clair et efficace pour afficher des données comparatives au sein de Salesforce. Ce composant est conçu pour représenter les données dans un format permettant aux utilisateurs de comparer facilement des métriques sur différentes périodes. En utilisant le Value Fluctuation Chart, les utilisateurs peuvent évaluer rapidement les fluctuations de performance, identifier les tendances et prendre des décisions basées sur les données.

## Comment ça Marche ?

Le Value Fluctuation Chart affiche les données dans un format comparatif, mettant en évidence les fluctuations entre différentes périodes. Le graphique comprend :
- **Valeur Actuelle** : La valeur actuelle de la métrique pour la période spécifiée.
- **Valeur Précédente** : La valeur de la métrique d'une période antérieure, utilisée pour la comparaison.
- **Titre** (Optionnel) : Un titre spécifique pour le graphique, fournissant un contexte aux données affichées.
- **Détails de Fluctuation** (Optionnel) : Contexte ou détails supplémentaires sur la fluctuation affichée.
- **Format Pipe** (Optionnel) : Une fonction pour personnaliser le format des valeurs affichées (par exemple, formatage en devise).

## Utilisation

### Configuration du Flux

Pour utiliser le Value Fluctuation Chart, vous devez configurer un flux dans Salesforce qui récupère les données nécessaires et les transmet au LWC. Voici comment procéder :

1. **Définir la Variable `ResultCollection`** :
   - Dans le Flow Builder, créez une nouvelle variable nommée `ResultCollection`.
   - Définissez le Type de Données sur `Texte`.
   - Assurez-vous que "Autoriser plusieurs valeurs (collection)" est coché.
   - Marquez-la comme "Disponible pour la sortie" afin qu'elle puisse être accessible par le composant.

2. **Créer une Ressource de Formule** :
   - Créez une nouvelle ressource de type `Formule`.
   - Définissez le Nom API sur quelque chose comme `LaFormule`.
   - Définissez le Type de Données sur `Texte`.
   - Utilisez l'éditeur de formule pour construire votre chaîne JSON. Par exemple :
     ```plaintext
     '{"actualValue": "' + TEXT(5) + '", "previousValue": "' + TEXT(10) + '", "title": "Test"}'
     ```
   - Cette formule construit une chaîne JSON avec les valeurs spécifiées.

3. **Attribuer la Formule à `ResultCollection`** :
   - Ajoutez un élément `Affectation` à votre Flux.
   - Définissez la variable `ResultCollection` sur la valeur de la ressource de formule (`LaFormule`).
   - Assurez-vous que l'opérateur est défini sur `Ajouter`.

4. **Enregistrer et Activer le Flux** :
   - Enregistrez votre Flux.
   - Activez le Flux s'il n'est pas déjà actif.

### Utilisation des Requêtes d'Entrée

Alternativement, vous pouvez utiliser des requêtes d'entrée pour fournir des données au Value Fluctuation Chart. Voici comment :

1. **Définir les Requêtes d'Entrée** :
   - Créez une liste de requêtes d'entrée sous forme de chaîne JSON. Chaque requête doit inclure une clé (ID de référence) et une valeur (requête SOQL).
   - Exemple :
     ```json
     [
       {"referenceId": "opportunities", "query": "SELECT Id, Amount, CloseDate FROM Opportunity WHERE IsWon = true AND CloseDate != null"}
     ]
     ```

2. **Passer les Requêtes d'Entrée au Composant** :
   - Utilisez l'attribut `inputQueries` du composant Value Fluctuation Chart pour passer la chaîne JSON des requêtes d'entrée.
   - Le composant exécutera cette requête et utilisera les résultats pour remplir le graphique.

3. **Créer une Fonction de Transformation** :
   - Définissez une fonction de transformation JavaScript dans un fichier et téléchargez-la en tant que Ressource Statique dans Salesforce. Cette fonction traitera les résultats des requêtes et les formatera pour le Value Fluctuation Chart.
   - Exemple :
     ```javascript
     /* Toutes les fonctions doivent être définies dans la portée window.MobeeDynamicFunctions pour fonctionner avec l'application mobile Mobee */

     window.MobeeDynamicFunctions = {
       opportunityFluctuation: (inputData) => {
         let opportunities = inputData['opportunities'];
         const result = [];
         let opportunitiesWithYear = opportunities.map((item) => {
           let dateYear = '';
           if (item.CloseDate) {
             dateYear = new Date(item.CloseDate).getFullYear();
           }
           let resultItem = { ...item };
           resultItem.CloseDateYear = dateYear;
           return resultItem;
         });

         const groupBy = (xs, key) => {
           return xs.reduce(function (rv, x) {
             (rv[x[key]] = rv[x[key]] || []).push(x);
             return rv;
           }, {});
         };
         let groupedData = groupBy(opportunitiesWithYear, 'CloseDateYear');
         let sumPreviousYear = 0;
         let currentYear = new Date().getFullYear() - 1;
         let previousYear = currentYear - 1;
         if (groupedData[currentYear]) {
           sumPreviousYear = groupedData[previousYear]
             .map((item) => item.Amount || 0)
             .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
         }

         let sumCurrentYear = 0;
         if (groupedData[currentYear]) {
           sumCurrentYear = groupedData[currentYear]
             .map((item) => item.Amount || 0)
             .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
         }

         // Calculer les détails de fluctuation
         let fluctuation = sumCurrentYear - sumPreviousYear;
         let fluctuationPercentage = (fluctuation / sumPreviousYear) * 100;

         result.push({
           actualValue: sumCurrentYear,
           previousValue: sumPreviousYear,
           title: 'Montants des Opportunités Gagnées Clôturées de ' + currentYear,
           fluctuationDetails: `Différence : ${fluctuation.toFixed(2)} (${fluctuationPercentage.toFixed(2)}%) vs année ${previousYear}`,
           formatPipe: (actualValue) => {
             return new Intl.NumberFormat('fr-FR', {
               style: 'currency',
               currency: 'EUR',
               notation: 'compact',
             }).format(actualValue);
           },
         });
         return result;
       }
     }
     ```

4. **Télécharger le Fichier JavaScript en tant que Ressource Statique** :
   - Dans Salesforce, allez dans **Setup**.
   - Dans la boîte de recherche rapide, tapez **Static Resources** et sélectionnez **Static Resources**.
   - Cliquez sur **New** pour télécharger votre fichier JavaScript contenant la fonction de transformation.
   - Fournissez un nom pour la Ressource Statique (par exemple, `MyMobeeFunctions`) et téléchargez le fichier.

5. **Définir la Fonction de Transformation** :
   - Dans les paramètres Mobee, définissez `Mobee Dynamic Function File Name` sur le nom de la Ressource Statique que vous avez créée (par exemple, `MyMobeeFunctions`).
   - Dans le champ intitulé **Nom de la Fonction de Transformation JavaScript**, entrez le nom de la fonction que vous avez définie (par exemple, `opportunityFluctuation`).