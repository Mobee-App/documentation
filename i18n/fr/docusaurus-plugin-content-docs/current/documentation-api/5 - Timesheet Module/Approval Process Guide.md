# Processus d'approbation des feuilles de temps

## Introduction

Vous pouvez ajouter un processus d'approbation pour que votre manager, ou un approbateur désigné, examine et approuve ou rejette vos saisies de temps soumises.

![Aperçu de la soumission du processus d'approbation](images/APImg/approvalProcessCreation/approvalProcessPreview.png "Aperçu de la soumission du processus d'approbation")  
<sup>*Aperçu de la soumission du processus d'approbation*</sup>

---

## Activation du processus d'approbation

### 1. Créer le processus d'approbation

La section suivante est un guide étape par étape pour créer un processus d'approbation standard, où certaines actions sont obligatoires et d'autres facultatives. **(Les étapes obligatoires sont mises en gras)**

- Allez sur la page de configuration
- Accédez aux processus d'approbation
- Gérez les processus d'approbation pour : Période de Temps
- Créez un nouveau processus d'approbation : utilisez l'assistant de configuration standard

![Introduction à la création du processus d'approbation](images/APImg/approvalProcessCreation/approvalProcessCreationIntro.png "Introduction à la création du processus d'approbation")

#### Étape 1 : Entrez le nom et la description

![Étape 1 de la création du processus d'approbation](images/APImg/approvalProcessCreation/approvalProcessCreationStep1.png "Étape 1 de la création du processus d'approbation")

#### Étape 2 : Spécifiez les critères d'entrée

*Aucune action à faire*  
![Étape 2 de la création du processus d'approbation](images/APImg/approvalProcessCreation/approvalProcessCreationStep2.png "Étape 2 de la création du processus d'approbation")

#### Étape 3 : Spécifiez le champ d'approbateur et les propriétés d'édition des enregistrements

1. Spécifiez le champ d'approbateur (pour le routage automatique des approbations)  
   Sélectionnez : *Manager*
   Cette étape est importante uniquement si vous souhaitez désigner le responsable comme approbateur (après avoir terminé la création du processus d'approbation)

2. Édition des enregistrements  
   Sélectionnez : *Les administrateurs ou l'approbateur actuellement assigné peuvent modifier les enregistrements pendant le processus d'approbation.*  

![Étape 3 de la création du processus d'approbation](images/APImg/approvalProcessCreation/approvalProcessCreationStep3.png "Étape 3 de la création du processus d'approbation")

#### Étape 4 : Sélectionnez les modèles de notification

*Aucune action à faire*  
![Étape 4 de la création du processus d'approbation](images/APImg/approvalProcessCreation/approvalProcessCreationStep4.png "Étape 4 de la création du processus d'approbation")

#### Étape 5 : Sélectionnez les champs à afficher sur la mise en page d'approbation

*Aucune action à faire*  
![Étape 5 de la création du processus d'approbation](images/APImg/approvalProcessCreation/approvalProcessCreationStep5.png "Étape 5 de la création du processus d'approbation")

#### Étape 6 : Spécifiez les soumetteurs initiaux

1. Soumetteurs initiaux  
   *Sélectionnez : Propriétaire de la période de temps, créateur de l'enregistrement*

2. **Paramètres de soumission**  
   ***Sélectionnez : Autoriser les soumetteurs à rappeler les demandes d'approbation***  

![Étape 6 de la création du processus d'approbation](images/APImg/approvalProcessCreation/approvalProcessCreationStep6.png "Étape 6 de la création du processus d'approbation")

---

### 2. Gérer le processus d'approbation

Après avoir terminé la création du processus d'approbation, vous pourrez gérer les actions (soumission initiale, approbation finale, rejet final et rappel).

Ces actions doivent être incluses pour que le processus d'approbation fonctionne comme prévu.

![Aperçu des actions et des étapes d'approbation](images/APImg/approvalProcessManagement/actionsAndApprovalStepsPreview.png "Aperçu des actions et des étapes d'approbation")  
<sup>*Aperçu des actions et des étapes d'approbation*</sup>

#### 2.1. Actions de soumission initiale

1. Ajouter existant  
2. Ajouter : *Mise à jour de champ : mettre à jour le statut à soumis (Update Status to Submitted)*

![Ajout d'action de soumission initiale](images/APImg/approvalProcessManagement/initialSubmissionAddAction.png "Ajout d'action de soumission initiale")

![Ajout d'action de soumission initiale 2](images/APImg/approvalProcessManagement/initialSubmissionAddAction2.png "Ajout d'action de soumission initiale 2")

#### 2.2. Actions d'approbation finale

1. Modifier le verrouillage de l'enregistrement et sélectionner : *Déverrouiller l'enregistrement pour modification*  
2. Ajouter existant et ajouter : *Mise à jour de champ : mettre à jour le statut à approuvé (Update Status to Approved)*

![Modification et ajout d'action d'approbation finale](images/APImg/approvalProcessManagement/finalApprovalAddAction.png "Modification et ajout d'action d'approbation finale")

![Modification du verrouillage de l'enregistrement d'approbation finale](images/APImg/approvalProcessManagement/finalApprovalAddAction1.png "Modification du verrouillage de l'enregistrement d'approbation finale")

![Ajout d'action d'approbation finale](images/APImg/approvalProcessManagement/finalApprovalAddAction2.png "Ajout d'action d'approbation finale")

#### 2.3. Actions de rejet final

1. Ajouter existant  
2. Ajouter :  
   a. *Mise à jour de champ : mettre à jour le statut à rejeté (Update Status to Rejected)*  
   b. *Alerte e-mail : envoyer une notification par e-mail à l'assigné lors du rejet (Send Email Notification to Assignee on Rejection)* (c'est une alerte e-mail envoyée au soumetteur de la feuille de temps si sa feuille de temps est rejetée par l'approbateur. si elle n'est pas nécessaire, cette alerte e-mail ne doit pas être ajoutée)

![Ajout d'action de rejet final](images/APImg/approvalProcessManagement/finalRejectionAddAction.png "Ajout d'action de rejet final")

![Ajout d'action de rejet final 2](images/APImg/approvalProcessManagement/finalRejectionAddAction2.png "Ajout d'action de rejet final 2")

#### 2.4. Actions de rappel

1. Ajouter existant  
2. Ajouter : *Mise à jour de champ : mettre à jour le statut à brouillon (Field Update: Update Status to Draft)*

![Ajout d'action de rappel](images/APImg/approvalProcessManagement/recallAddAction.png "Ajout d'action de rappel")

![Ajout d'action de rappel 2](images/APImg/approvalProcessManagement/recallAddAction1.png "Ajout d'action de rappel 2")

---

### 3. Choisir l'approbateur

#### 3.1. Assigner l'approbateur sur le processus d'approbation

L'approbateur peut être le manager du soumetteur ou un utilisateur spécifique responsable de tous les soumetteurs, tel que le responsable des ressources humaines, garantissant que toutes les feuilles de temps sont dirigées vers un individu pour approbation. Cela est également contrôlé au niveau du processus d'approbation après sa création.

![Étapes d'approbation](images/APImg/approvalProcessManagement/approvalStepsEdit.png "Étapes d'approbation")

![Changement d'approbateur dans les étapes d'approbation](images/APImg/approvalProcessManagement/approvalStepsEditStep3.png "Changement d'approbateur dans les étapes d'approbation")

#### 3.2. Affectation des ensembles d'autorisations

Dans configuration > utilisateurs, affectez l'ensemble d'autorisations *Mobee Approve All Timesheets* à l'utilisateur approbateur.

![Modification des ensembles d'autorisations sur l'utilisateur](images/APImg/approvalProcessManagement/editPermissionSetOnUser.png "Modification des ensembles d'autorisations sur l'utilisateur")

![Modification des ensembles d'autorisations sur l'utilisateur 2](images/APImg/approvalProcessManagement/editPermissionSetOnUser2.png "Modification des ensembles d'autorisations sur l'utilisateur")

---

## Utilisation du processus d'approbation

#### 1. Soumetteur

L'utilisateur soumet sa feuille de temps pour approbation  
*Cette action est rappelable (1)*  
*Commentaire de soumission (2)*  
*Indicateur de saisies de temps soumises (3)*

![Feuille de temps soumise](images/APImg/approvalProcessBehavior/submittedTimeSheet.png "Feuille de temps soumise")

#### 2. Approbateur

L'approbateur assigné peut approuver/rejeter sur le contact du soumetteur  
*l'approbateur assigné examine la feuille de temps (saisies de temps soumises) et a l'option d'approuver ou de rejeter la soumission.*

![Feuille de temps soumise](images/APImg/approvalProcessBehavior/submittedTimeSheet2.png "Feuille de temps soumise")

---

## Comportement et considérations du processus d'approbation

- L'approbation partielle est possible

Exemple A :  
*l'utilisateur soumet une demande de congés, qui est approuvée. plus tard, il soumet sa charge de travail assignée pour les jours restants*

![Exemple de processus d'approbation partielle](images/APImg/approvalProcessBehavior/partialApprovalExample1.png "Exemple de processus d'approbation partielle")  
![Exemple de processus d'approbation partielle](images/APImg/approvalProcessBehavior/partialApprovalExample2.png "Exemple de processus d'approbation partielle")

Exemple B :  
*l'utilisateur soumet les derniers jours du mois pour approbation. le mois suivant, pour la même mission, il soumet les jours de semaine restants pour approbation*

![Exemple de processus d'approbation partielle](images/APImg/approvalProcessBehavior/partialApprovalExample3.png "Exemple de processus d'approbation partielle")  
![Exemple de processus d'approbation partielle](images/APImg/approvalProcessBehavior/partialApprovalExample4.png "Exemple de processus d'approbation partielle")

- Lorsqu'une feuille de temps est approuvée, une notification est envoyée au soumetteur  
- Lorsqu'une feuille de temps est rejetée, une notification et un e-mail sont envoyés au soumetteur (l'e-mail est envoyé si ajouté selon les actions de rejet final en 2.3.)  
- Lorsque des saisies de temps en attente sur une feuille de temps sont rejetées, la feuille de temps entière devient modifiable  
- En survolant les icônes suivantes ![Icône soumise](images/APImg/approvalProcessBehavior/submittedIcon.png "Icône soumise"), ![Icône approuvée](images/APImg/approvalProcessBehavior/approvedIcon.png "Icône approuvée") et ![Icône rejetée](images/APImg/approvalProcessBehavior/rejectedIcon.png "Icône rejetée"), des commentaires du soumetteur ou de l'approbateur liés à la soumission, à l'approbation ou au rejet sont affichés  
- Les icônes suivantes ![Icône cellule soumise](images/APImg/approvalProcessBehavior/submittedIconCell.png "Icône cellule soumise") et ![Icône cellule approuvée](images/APImg/approvalProcessBehavior/approvedIconCell.png "Icône cellule approuvée") servent d'indicateurs montrant le statut de l'saisie de temps