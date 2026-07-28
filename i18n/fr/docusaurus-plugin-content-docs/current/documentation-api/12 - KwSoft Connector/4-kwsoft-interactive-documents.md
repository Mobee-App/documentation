# Documents interactifs et export final

## Flow modele : Mobee - Export KwSoft Document

Utilisez ce Flow lorsqu'un document a ete cree en mode interactif et doit etre finalise en PDF.

## Pourquoi ce Flow existe

Les documents interactifs sont des versions brouillon. Ils sont modifiables et ne constituent pas encore le fichier final pour l'archivage ou le partage.

Ce second Flow recupere le document modifie depuis KwSoft et attache le PDF final dans Salesforce.

## Informations requises

L'action d'export a besoin de :

1. **Document Name** - Source : votre objet de suivi personnalise

2. **Record Id** - Source : le lookup vers l'enregistrement lie dans l'objet de suivi

En pratique, les utilisateurs ne devraient pas saisir ces valeurs manuellement. Le Flow doit les lire depuis l'enregistrement de suivi selectionne.

## Processus utilisateur recommande

1. L'utilisateur ouvre un enregistrement et voit les brouillons associes
2. L'utilisateur ouvre le brouillon selectionne dans KwSoft et termine l'edition
3. L'utilisateur lance le Flow d'export depuis Salesforce
4. Le PDF final est attache a l'enregistrement Salesforce lie
5. Le statut de l'entree de suivi passe de Draft a Finalized

![Liste liee des documents KwSoft](img/kwsoft-documents-related-list.png)

## Comportement de redirection

Apres l'export, vous pouvez rediriger l'utilisateur vers :

1. Le fichier genere
2. L'enregistrement metier d'origine (recommande pour la plupart des equipes)

Choisissez l'option la plus adaptee a votre processus de support.

## Recommandation de gouvernance

Pour garder des enregistrements propres :

1. Conserver une entree de suivi par document interactif
2. Suivre clairement le statut (Draft, Finalized)
3. Masquer les anciens brouillons aux utilisateurs finaux une fois finalises
4. Ajouter un rapport simple pour que les administrateurs surveillent le stock de brouillons
