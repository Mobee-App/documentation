# Configuration du Scanner de Codes QR

**Description** : Le composant Scanner de Codes QR pour Salesforce permet aux utilisateurs de scanner des codes QR directement depuis leur interface Salesforce. En intégrant ce composant, vous pouvez instantanément récupérer et saisir des données, simplifiant diverses tâches manuelles.

## Installation :

Avant d'utiliser le composant Scanner de Codes QR, assurez-vous que le package Mobee est installé dans votre environnement Salesforce.

## Comment Ajouter le Scanner de Codes QR à une Page d'Objet :

### Instructions Étape par Étape :

1. **Accédez à la Page de l'Objet** : Rendez-vous sur la page d'objet souhaitée où vous souhaitez ajouter le scanner de codes QR.
2. **Passez en Mode Édition** : Cliquez sur l'option 'Modifier la page', généralement disponible en haut à droite de l'écran, pour accéder au Lightning App Builder.
3. **Ajoutez le Composant Scanner de Codes QR** :
   - Dans le Lightning App Builder, recherchez la section des composants Lightning dans le volet de gauche.
   - Faites glisser le composant 'scanQrCode' et déposez-le à l'emplacement de votre choix sur la page.
4. **Configurez les Attributs du Composant** :
   - Cliquez sur le composant Scanner de Codes QR ajouté pour afficher ses propriétés.
   - Dans le champ 'Flow API Name', saisissez le nom de l'API du flux souhaité (précédé du préfixe de l'espace de noms si vous utilisez le flux intégré Mobee Campaign Scan). Ce flux sera exécuté lorsque le composant scanne un code QR.
   - L'attribut "Record Id" peut être laissé vide. S'il est laissé vide, il sera automatiquement renseigné avec l'ID de l'enregistrement où le composant est placé.
5. **Enregistrez et Activez** : Une fois terminé, enregistrez les modifications et activez la page pour les refléter dans l'interface Salesforce.

## Exemple d'Utilisation : Ajouter des Contacts ou des Pistes à une Campagne via le Scan de Codes QR

1. **Accédez à la Campagne** : Commencez par accéder à la campagne souhaitée dans Salesforce.
2. **Passez en Mode Édition** : Cliquez sur 'Modifier la page' pour passer au Lightning App Builder.

   ![Image d'Exemple](./img/edit_page_button.png)

3. **Insérez le Composant Scanner de Codes QR** :
   - Trouvez le composant 'scanQrCode' dans la section 'Personnalisée' à gauche.
   - Faites glisser et placez le composant où vous le souhaitez sur la mise en page de la campagne.

   ![Image d'Exemple](./img/edit_page_section.png)

4. **Configurez le Composant** : 
   - Cliquez sur le composant pour voir ses attributs.
   - Dans le champ 'Flow API Name', saisissez le nom "Mobee__Campaign_SCR_Scan" (ou le nom du flux associé à la fonction de numérisation pour les campagnes).

   ![Image d'Exemple](./img/flow_api_name.png)

5. **Effectuez la Numérisation** :
   - Quittez le Lightning App Builder et accédez à la page de la campagne.
   - À l'aide d'un téléphone ou d'un appareil doté d'une caméra, utilisez le composant Scanner de Codes QR pour scanner les codes QR des contacts ou des pistes.

   ![Image d'Exemple](./img/phone4.jpg)

6. **Vérification** :
   - Après la numérisation, vérifiez en consultant la liste des membres de la campagne.
   - Assurez-vous que le contact ou la piste numérisé a bien été ajouté à la campagne.

   ![Image d'Exemple](./img/campaign_member.png)

**Remarque** : Assurez-vous que le flux ("Mobee__Campaign_SCR_Scan" dans cet exemple) est correctement configuré pour gérer les données des codes QR et effectuer les actions souhaitées dans Salesforce.

Bonne numérisation !