# Configuration des identifiants externes pour le générateur de documents Mobee

Ce document fournit un guide étape par étape sur la configuration des identifiants externes pour le générateur de documents Mobee, notamment la création d'un protocole d'authentification personnalisé, l'ajout de paramètres, d'en-têtes personnalisés, et l'intégration avec Uprizon pour l'authentification.

## Configuration des identifiants externes

1. Ouvrez l'interface de gestion des identifiants externes en naviguant vers **Configuration** > **Sécurité** > **Identifiants nommés**.

   ![Image d'exemple](./img/Setup-Named-Credentials.png)

2. Cliquez sur l'onglet "Identifiants Externes".

   ![Image d'exemple](./img/Named-Credentials.png)

3. Localisez l'identifiant externe portant le libellé "Document Generation External Credentials" et cliquez dessus.

   ![Image d'exemple](./img/External-Credentials.png)

   ![Image d'exemple](./img/External-Credentials-Page.png)

4. À l'intérieur de "Document Generation External Credentials", trouvez le principal avec le nom de paramètre "User", cliquez sur la flèche à droite et sélectionnez "Modifier".

   ![Image d'exemple](./img/Principals.png)

   ![Image d'exemple](./img/Principals-Edit-Button.png)

5. À l'intérieur de la fenêtre des principaux, ajoutez des paramètres d'authentification :
   - Cliquez sur le bouton "Ajouter" à côté des Paramètres d'authentification.
   - Dans la section Paramètre 1, ajoutez :
      - **Nom :** Authorization
      - **Valeur :** Bearer [Jeton fourni par Mobee]

         **Note :** Avant de sauvegarder, assurez-vous que le jeton a le préfixe "Bearer ". Si ce n'est pas le cas, ajoutez le préfixe avec un espace. 
         
         Par exemple : Si le jeton est `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`, faites-le : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`

   - Cliquez sur "Enregistrer" pour sauvegarder les modifications.

![Image d'exemple](./img/Principals-Add-Parameter.png)

6. Dans "Document Generation External Credentials", trouvez l'en-tête personnalisé avec le nom "Authorization", cliquez sur la flèche à droite et sélectionnez "Modifier".

   ![Image d'exemple](./img/Custom-Headers.png)

   ![Image d'exemple](./img/Custom-Headers-Edit-Button.png)

7. À l'intérieur de la fenêtre En-tête personnalisé, ajoutez le jeton à l'en-tête personnalisé :
    - Remplacez la **Valeur** par le jeton fourni par Mobee :
        - **Nom :** Authorization
        - **Valeur :** Bearer [Jeton fourni par Mobee]

          **Remarque :** Avant de sauvegarder, assurez-vous que le jeton a le préfixe "Bearer ". Si ce n'est pas le cas, ajoutez le préfixe suivi d'un espace.

            Par exemple : Si le jeton est `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`, faites-le : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`

    - Cliquez sur "Enregistrer" pour sauvegarder l'en-tête personnalisé.
    
   ![Image d'exemple](./img/Custom-Headers-Windows.png)

8. Vous avez maintenant terminé la configuration des identifiants externes pour le générateur de documents Mobee.

   Assurez-vous que lorsque le jeton fourni par Mobee est mis à jour, vous devez mettre à jour le jeton dans les paramètres d'authentification et les en-têtes personnalisés.
