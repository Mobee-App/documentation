# Configuration et utilisation

## Exigences de profil et autorisations

Pour utiliser le module, les utilisateurs doivent remplir les prérequis suivants :

- Possession d'une licence Mobee.
- Attribution soit de l'ensembles d'autorisations "Utilisateur Mobee" ou "Administrateur Mobee".
- Activer les Identifiants externes utilisateur via les profils utilisateur.

# Récupération et réinitialisation du jeton de génération de documents

1. Ouvrez les Paramètres Mobee en naviguant vers le **Lanceur d'applications** et en recherchant **Paramètres de Mobee**.

2. Cliquez sur "Paramètres de Mobee" dans la section "Éléments".

![Image d'exemple](./img/Mobee-Settings-Tab.png)

3. Dans les paramètres de Mobee, accédez à l'onglet "Génération de Documents".

4. À l'intérieur de l'onglet "Génération de Documents", vous trouverez le Jeton de votre Organisation si votre Organisation est abonnée au service de Génération de Documents de Mobee. Utilisez ce jeton pour autoriser votre accès à la génération de documents. Vous pouvez cliquer sur le bouton à gauche du 'Bouton de Réinitialisation' pour copier le jeton dans votre presse-papiers ou le sélectionner et le copier.

![Image d'exemple](./img/Mobee-Token.png)

Si votre Organisation a besoin de réinitialiser le jeton, localisez le bouton "Réinitialiser le Jeton" sur la droite. En cliquant sur ce bouton, vous pourrez générer un nouveau jeton pour votre Organisation.

![Image d'exemple](./img/Token-Reset.png)

**Attention:** [Assurez-vous de mettre à jour le jeton dans les en-têtes personnalisés lorsque vous le réinitialisez dans les Paramètres de Mobee](#autorisation-daccès).


## Autorisation d'accès

La génération de documents de Mobee repose sur un service externe, soulignant ainsi le rôle essentiel de l'autorisation en matière de sécurité. En utilisant l'authentification par jeton, seules les entités authentifiées peuvent accéder au service, éliminant ainsi le risque d'utilisation non autorisée et assurant une protection robuste contre les violations de données.

### Configuration des identifiants externes pour le générateur de documents Mobee

Cette section décrit un guide étape par étape sur la configuration des identifiants externes pour le générateur de documents Mobee, notamment la création d'un protocole d'authentification personnalisé, l'ajout de paramètres, d'en-têtes personnalisés, et l'intégration avec Uprizon pour l'authentification.

### Configuration des identifiants externes

1. Ouvrez l'interface de gestion des identifiants externes en naviguant vers **Configuration** > **Sécurité** > **Identifiants nommés**.

   ![Image d'exemple](./img/Setup-Named-Credential.png)

2. Cliquez sur l'onglet "Identifiants Externes".

   ![Image d'exemple](./img/Named-Credentials.png)

3. Localisez l'identifiant externe portant le libellé "Document Generation External Credentials" et cliquez dessus.

   ![Image d'exemple](./img/External-Credentials.png)

   ![Image d'exemple](./img/External-Credentials-Page.png)

4. Dans "Document Generation External Credentials", trouvez l'en-tête personnalisé avec le nom "Authorization", cliquez sur la flèche à droite et sélectionnez "Modifier".

   ![Image d'exemple](./img/Custom-Headers.png)

   ![Image d'exemple](./img/Custom-Headers-Edit-Button.png)

5. À l'intérieur de la fenêtre En-tête personnalisé, ajoutez le [jeton](#récupération-et-réinitialisation-du-jeton-de-génération-de-documents) à l'en-tête personnalisé :
    - Remplacez la **Valeur** par le jeton fourni par Mobee :
        - **Nom :** Authorization
        - **Valeur :** Bearer [Jeton fourni par Mobee]

          **Remarque :** Avant de sauvegarder, assurez-vous que le jeton a le préfixe "Bearer ". Si ce n'est pas le cas, ajoutez le préfixe avec un espace à la fin.

            Par exemple : Si le jeton est `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`, faites-le : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`

    - Cliquez sur "Enregistrer" pour sauvegarder l'en-tête personnalisé.
    
   ![Image d'exemple](./img/Custom-Headers-Windows.png)

Vous avez maintenant terminé la configuration des identifiants externes pour le générateur de documents Mobee.

**Attention:** Assurez-vous de mettre à jour le jeton dans les en-têtes personnalisés lorsque ce dernier est mis à jour dans la configuration Mobee.


## Création d'un modèle de document

1. Accédez à l'onglet **Modèles de Documents Mobee** dans Salesforce pour lancer la création d'un nouveau modèle.
2. Cliquez sur le bouton "**Nouveau**" et attribuez un nom approprié au modèle.

![Alt text](img/prep_word.png)

Après la création du modèle, la prochaine étape consiste à l'associer à un objet Salesforce spécifique. Suivez les étapes ci-dessous :

1. Accédez au modèle nouvellement créé en sélectionnant son nom dans la liste.
2. Dans la section initiale, cliquez sur le bouton "**Choisir l'objet principal**" situé à droite.
3. Utilisez le champ de recherche pour désigner l'objet principal souhaité.
4. Optez pour un champ Salesforce sur l'objet sélectionné pour servir de convention de nommage du fichier généré. Les types pris en charge incluent les champs de texte et les formules. Le champ **Nom** est sélectionné par défaut.

![Sample Image](img/prep_word2.png)

5. Après la sélection de l'objet principal et du champ de nommage, procédez au téléchargement de votre modèle de document Word en sélectionnant le bouton "**Charger des fichiers**". Veuillez noter que seuls les fichiers avec l'extension `.docx` sont pris en charge.

![Sample Image](img/prep_word3.png)

## Générer des documents à partir du modèle

Mobee propose une gamme d'options pour faciliter la génération de documents adaptée à vos besoins spécifiques. Le package englobe des composants pré-construits prêts à être utilisés, intégrables de manière transparente dans vos pages. De plus, Mobee offre des fonctionnalités vous permettant de personnaliser l'ensemble de vos processus de génération de documents en utilisant Lightning ou même Apex.

### Lightning Web Component

Pour la génération manuelle de documents dans un écran, Mobee présente un composant Lightning Web fondamental conçu pour générer des documents pour l'enregistrement actuel en fonction d'un ID de modèle specific.

**Voici les paramètres du composant :**

![Composant Lightning Web de Génération de Documents](img/document_generator_lwc.png)

- **Current Record Id :** Lorsqu'il est placé sur une page d'enregistrement, ce paramètre peut être laissé vide, car il détecte automatiquement l'ID de l'enregistrement actuel.

- **Multiple Record Ids (Comma Separated):** Ce paramètre peut être laissé vide lors de la génération de documents unitaires et sera utilisé pour les modèles de document regroupés ultérieurement.

- **Attach to Record:** Un indicateur indiquant si l'utilisateur souhaite attacher le document généré aux Notes & Pièces jointes de l'enregistrement actuel. Si non cochée, le document sera automatiquement téléchargé.

- **Current Object API Name:** Lorsqu'il est placé sur une page d'enregistrement, ce paramètre peut être laissé vide, car il détecte automatiquement le nom de l'objet de l'enregistrement actuel.

- **Selected Template Id:** Informe le composant sur le modèle à utiliser pour la génération.

- **Show Generate Button:** Un indicateur indiquant si un bouton physique est souhaité pour déclencher la génération. Si non cochée, la génération de documents sera déclenchée lors du chargement de la page contenant le composant.

- **Output Format:** Ce paramètre indique le format souhaité pour le fichier généré. Mobee prend actuellement en charge `docx` et `pdf`.

**Utilisation :**

Ce composant convient à une utilisation dans les **"Pages Lightning d'Enregistrement"** et les **"Écrans de flux"**. Pour exploiter pleinement les capacités de ce composant, il est recommandé de l'utiliser dans les **Écrans de flux**. En tirant parti de la flexibilité des flux Salesfoce, cela permet de récupérer dynamiquement le modèle souhaité en fonction de critères de recherche spécifiques, de fournir un paramètre dynamique au composant et d'éviter l'inclusion de paramètres en dur.

Voici un exemple de son utilisation dans un Écran de flux.

![Écran de Flow LWC](img/screen_flow_lwc.png)

### Bouton d'action

Le package Mobee s'intègre parfaitement aux pages d'enregistrement Salesforce, fournissant un flux prêt à l'emploi qui peut être ajouté facilement en tant que bouton d'action.

**Création du bouton d'action :**

1. Accédez au gestionnaire d'objets et sélectionnez l'objet où vous souhaitez que le bouton de génération soit disponible.
2. Accédez à la section "Boutons, liens et actions" et cliquez sur le bouton "Nouvelle action".
3. Choisissez l'option "Composant Web Lightning" pour le "Type d'action" et sélectionnez "Mobee:documentGeneratorAction" pour le "Composant Web Lightning".

![Ajouter un Bouton d'Action](./img/ajouter_button_action.png)

**Ajout du bouton d'action à une présentation de page :**

Une fois que le bouton d'action est créé, suivez ces étapes pour l'ajouter à une "Présentation de page" désirée.

1. Ouvrez la section "Présentation de page" depuis le gestionnaire d'objets et sélectionnez la page souhaitée où vous souhaitez ajouter votre bouton.
2. Localisez votre nouveau bouton créé dans la section "Actions Mobiles et Lightning".
3. Faites glisser le bouton et déposez-le dans la section "Actions de Salesforce mobile et de Lightning Experience".

![Sample Image](./img/ajouter_button_action2.jpg)

**Utilisation du bouton ajouté :**

Pour utiliser le bouton ajouté, suivez ces étapes :

1. Accédez à un enregistrement du même type d'objet que le modèle de document créé.
2. Cliquez sur le bouton d'action "Générer le Document".
3. Sélectionnez le modèle souhaité dans la liste fournie.
4. Le document sera généré et téléchargé automatiquement.

![Sample Image](./img/generer_apartir_modele_creer.png)

### Bouton de liste

Similaire au bouton d'action mentionné précédemment, Mobee étend sa fonctionnalité en offrant un flux qui peut être invoqué à partir des boutons de liste. Cette fonction met l'accent sur la capacité à générer des documents pour plusieurs enregistrements simultanément.

**Création d'un Bouton de Liste :**

Suivez ces étapes pour créer le bouton :

1. Préparez un modèle à utiliser sur l'objet principal souhaité.
2. Depuis l'écran de configuration, sélectionnez l'objet principal souhaité.
3. Accédez à la section "Boutons, liens et actions".
4. Cliquez sur le bouton "Nouveau bouton ou lien" en haut à droite.
5. Remplissez les champs Étiquette et Nom requis.
6. Sélectionnez "Bouton de liste" pour le "Type d'Affichage" et assurez-vous que l'option "Afficher les cases (pour la sélection de plusieurs enregistrements)" est cochée.
7. Dans la zone de texte de la formule, saisissez le chemin suivant et remplacez l'ID du modèle par votre modèle souhaité : `/flow/Mobee__ListViewDocumentGenerator?templateId=a057Q000005Yd7BQAS&attachToRecord=false&outputFormat=pdf`

![Bouton de Liste](img/list_view_button.png)

**Ajout du Bouton à la Vue de Liste :**

Pour ajouter le bouton à la vue de liste, suivez ces étapes :

1. Depuis le "Gestionnaire d'Objets", accédez à la section "**Présentation du bouton Vue de liste**".
2. Pour la mise en page de la vue de liste, cliquez sur le bouton déroulant à droite et sélectionnez "Modifier".
3. Dans l'Éditeur de Vue de Liste, trouvez votre bouton dans la section "Boutons disponibles" et ajoutez-le à la liste des boutons sélectionnés.
4. Cliquez sur Enregistrer.

**Utilisation du bouton ajouté :**

Pour utiliser le bouton de vue de liste, suivez ces étapes :

1. Accédez à la vue de liste de l'objet.
2. Sélectionnez les enregistrements souhaités en cliquant sur la case à cocher sur chaque ligne.
3. Trouvez votre bouton dans la liste des boutons dans la section des actions principales.
4. Cliquez sur le bouton, ce qui ouvrira le flux dans une nouvelle page et générera les documents.

**Remarque :** Ce "Bouton Personnalisé" peut également être utilisé pour les **Vues de liste associées**.

### Apex

La génération de documents n'est pas toujours une fonctionnalité déclenchée par l'utilisateur ; parfois, il est nécessaire de générer des documents à partir de déclencheurs, de jobs et d'autres processus automatisés. Pour faciliter cela, Mobee fournit une fonction Apex qui permet une génération de documents fluide adaptée à des besoins spécifiques.

La fonction est accessible dans le package Mobee en invoquant la fonction `Mobee.DocumentTemplaterController.generateDocuments` d'Apex.

Tout comme le composant Lightning Web, cette fonction Apex prend quatre paramètres en entrée :

1. Une liste d'IDs d'enregistrements Salesforce pour lesquels des documents doivent être générés. (Il peut s'agir d'une liste contenant un seul ID)
2. L'ID du Modèle de Document Mobee à utiliser comme modèle pour la génération.
3. Le format de sortie souhaité (`docx` ou `pdf`).
4. Un indicateur indiquant s'il faut attacher le fichier généré à l'enregistrement donné.

Cette fonction renvoie une `Map` contenant le fichier généré en tant que `Blob` indexé par leurs IDs d'enregistrement respectifs.

Voici un exemple d'utilisation de cette fonction Apex :

**Contexte :** Dans cet exemple, l'Objet Principal du Modèle Mobee est l'objet personnalisé `Application__c`, et l'ID du modèle est stocké dans le champ de recherche `ContractTemplate__c`, qui est sur le champ parent `Sector__c`.

```java
public class DocumentGeneration {
    @Future(callout=true)
    public static void generateContract(String applicationId) {
        String OUTPUT_FORMAT = 'pdf';
        Application__c application = [SELECT Id, Sector__c.ContractTemplate__c FROM Application__c WHERE Id = :applicationId];
        if (application.Sector__c.ContractTemplate__c == null) {
            throw new Mobee.DocumentGenerationException('Template is not defined on this Sector.');
        }
        Map<Id, Blob> generatedDocuments;
        if (Test.isRunningTest()) {
            generatedDocuments = generateDocumentMock(new List<Id>{applicationId});
        } else {
            generatedDocuments = Mobee.DocumentTemplaterController.generateDocuments(
                // recordsIds
                new List<String>{applicationId},
                // templateId
                application.Sector__c.ContractTemplate__c,
                // outputFormat
                OUTPUT_FORMAT,
                // attachToRecords
                false);
        }
        Blob generatedDocument = generatedDocuments.get(applicationId);
        if (generatedDocument == null) {
            throw new Mobee.DocumentGenerationException('Error while generating document.');
        }
        // Do whatever you want with the Blob...
    }
}
```
## Compresseur PDF

Mobee offre une fonctionnalité pour compresser les fichiers PDF afin de réduire leur taille. Elle utilise Ghostscript pour la compression. Les utilisateurs peuvent fournir soit le chemin d'accès local d'un fichier, soit une URL vers un fichier PDF, qui sera alors téléchargé et compressé.

### Utilisation

**Paramètres d'entrée**

- **Chemin du fichier ou URL :** Le chemin d'accès au fichier PDF ou l'URL du PDF à compresser.
- **Color Image Resolution:(par défaut : 120 DPI)** Ce paramètre contrôle la résolution des images couleur dans le PDF. Une valeur plus élevée donnera une meilleure qualité d'image mais une taille de fichier plus grande. Les images couleur contiennent généralement une gamme plus large de couleurs et de détails.
- **Gray Image Resolution: (par défaut : 120 DPI)** Ce paramètre contrôle la résolution des images en niveaux de gris dans le PDF. Les images en niveaux de gris contiennent des nuances de gris mais aucune couleur. Ajuster ce paramètre peut impacter la clarté des images en niveaux de gris dans le PDF compressé.
- **Mono Image Resolution:(par défaut : 120 DPI)** Ce paramètre contrôle la résolution des images monochromes (noir et blanc) dans le PDF. Les images monochromes n'ont que deux couleurs, généralement noir et blanc. Ajuster ce paramètre peut affecter la clarté du texte et des illustrations linéaires dans le PDF compressé.

**Remarques**

- Les valeurs par défaut sont définies pour les paramètres de résolution d'image à 120 points par pouce (DPI).
- Des valeurs de résolution plus élevées donnent généralement une meilleure qualité d'image mais des tailles de fichier plus grandes.
- Ajustez les paramètres de résolution en fonction de vos préférences en termes de qualité d'image et de taille de fichier.

## Apex

La compression de documents n'est pas toujours une fonctionnalité déclenchée par l'utilisateur ; parfois, il est nécessaire de compresser des documents à partir de déclencheurs, de tâches et d'autres processus automatisés. Pour faciliter cela, Mobee fournit une fonction Apex qui permet une compression de documents transparente adaptée à des besoins spécifiques.

La fonction est accessible dans le package Mobee en invoquant la fonction `Mobee.DocumentTemplaterController.compressDocument`.

Similaire au composant web Lightning, cette fonction Apex prend quatre paramètres en entrée :

1. Une liste d'IDs d'enregistrements Salesforce pour lesquels des documents doivent être générés. (Il peut s'agir d'une liste contenant un seul ID) ou une URL
2. Résolution de l'image couleur
3. Résolution de l'image en niveaux de gris
4. Résolution de l'image monochrome

Voici un exemple d'utilisation de cette fonction Apex :

**Contexte :** Dans cet exemple, le document à compresser est identifié par son **record ID** ou son **url**.

```java
public class DocumentCompression {
    @Future(callout=true)
    public static void compressDocument(Id contentDocumentId, Map<String, String> options) {
        Blob fileContent = DocumentsApiClient.getFileContent(contentDocumentId);
        if (fileContent == null) {
            throw new DocumentGenerationException('Template is required');
        }
        String contentType = 'application/pdf';
        String docCompressUrl = DOCUMENTS_API_URL + 'documents/compress';
        try{
            Blob result = DocumentsHttpUtils.sendMultiPartFormRequest(docCompressUrl, 'compressed_file.pdf', template, options, contentType);
            // Do whatever you want with the Blob...
        }catch (Exception e) {
            throw new DocumentGenerationException('Error while compressing document. ' + e.getMessage());
        }
    }


    @Future(callout=true)
    public static void compressDocumentFromUrl(String url, String options) {
        if (url == null || url.trim() == '') {
        throw new DocumentGenerationException('URL is required');
    }

    String queryParamsString = '';
    if (options != null && options.trim() != '' && options.trim() != '{}') {
        queryParamsString = '?options=' + EncodingUtil.urlEncode(options, 'UTF-8');
    }
         
        String payload = '{"pdfUrl":"' + url + '"';
        if (options != null && options.trim() != '') {
            payload += ',' + options.trim().substring(1, options.length() - 1);
        }
        payload += '}';
        
    String contentType = 'application/pdf';
    String docCompressUrl = DOCUMENTS_API_URL + 'documents/compressURL';
    try{
    Blob result = DocumentsHttpUtils.sendMultiPartFormRequest(docCompressUrl, 'compressed_file.pdf', template,          options,contentType);
            // Do whatever you want with the Blob...
        }catch (Exception e) {
            throw new DocumentGenerationException('Error while compressing document. ' + e.getMessage());
        }
    }
}
```