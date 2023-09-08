# Configuration de la Communauté Mobee
## Configuration de la Communauté Mobee

Salesforce n'autorise pas les utilisateurs de la communauté à accéder à certaines métadonnées à l'aide de l'API. Pour contourner ces limitations et optimiser les limites du gouverneur, Mobee fournit un ensemble d'outils automatisés qui extraient les métadonnées requises, y compris les pages de l'Experience Cloud et d'autres ressources. Les outils automatisés de Mobee génèrent des fichiers JSON et des fichiers zip pour les ressources de métadonnées qui seront incluses dans la ressource statique.

Pour configurer la Communauté Mobee, suivez les étapes ci-dessous :

1. Exécutez la procédure Mobee fournie avec l'AppExchange. Fournissez le nom du site de l'Experience Cloud et toute langue supplémentaire requise.

    ```javascript
    Mobee.SetupUtils.prepareMobeeResources('Customer_Site1', 'fr');
    ```

2. Vous pouvez également exécuter les outils individuels en utilisant les sous-procédures suivantes :

    ```javascript
    Mobee.SetupUtils.refreshCoreMetadata();
    Mobee.SetupUtils.refreshCustomLabel();
    Mobee.SetupUtils.refreshExternalStringLocalization('fr');
    Mobee.SetupUtils.siteExperienceBundleQueueable('Customer_Site1');
    ```

Il est important d'exécuter ces outils automatisés la première fois et à chaque fois que vous publiez votre site Experience Cloud. Le temps estimé pour l'exécution des outils est d'environ 2 minutes.

La sortie de la procédure générera les fichiers suivants dans le répertoire des Ressources Statiques :

| Ressource                             | Description                                                                               |
| ------------------------------------ | ----------------------------------------------------------------------------------------- |
| Mobee_CoreMetadata                   | Contient les principales métadonnées du système principal de Salesforce, telles que les règles de validation, les liens web, les filtres de recherche et les définitions de flux. |
| Mobee_CoreCustomLabel                | Contient les libellés personnalisés.                                                                |
| Mobee_CoreExternalStringLocalization | Contient les libellés personnalisés traduits pour la langue spécifiée.                          |
| Mobee_Community_Customer_Site1       | Contient les pages, les thèmes et les autres ressources du site Experience Cloud.                     |

**Comment vérifier si vos ressources sont à jour ?**  
Vérifiez la date de dernière modification des fichiers de sortie pour vous assurer qu'ils sont à jour.

## Fichiers de sortie dans les Ressources Statiques

| Fichier                                 | Type        | Description                                                                               |
| ------------------------------------ | ----------- | ----------------------------------------------------------------------------------------- |
| Mobee_CoreMetadata                   | `Fichier JSON` | Liste des métadonnées de base de Mobee                                                                |
| Mobee_CoreCustomLabel                | `Fichier JSON` | CustomLabels de base de Mobee                                                                   |
| Mobee_CoreExternalStringLocalization | `Fichier JSON` | ExternalStringLocalization de base de Mobee                                                     |
| Mobee_Community_Customer_Site1       | `Fichier Zip`  | Pages du site, composants et propriétés de l'Experience Cloud                                             |