# Checklist admin et depannage

Utilisez cette page comme reference operationnelle rapide.

## Checklist avant mise en production

1. Package kwsoft installe
2. Les deux Flows modele sont disponibles
3. Objet de suivi personnalise cree
4. Liste liee ajoutee sur les mises en page cibles
5. Permissions utilisateurs validees
6. Au moins un test reussi de PDF automatique
7. Au moins un test reussi d'export interactif

## Verifications quotidiennes admin

1. Surveiller les executions de Flow en echec
2. Revoir les brouillons plus anciens que votre SLA cible
3. Verifier que les utilisateurs ne voient que les modeles pertinents
4. Verifier que les PDF generes sont attaches aux bons enregistrements

## Problemes frequents et corrections

Probleme : aucun modele n'est visible

Causes possibles :

1. Le filtre de modele est trop restrictif
2. L'utilisateur n'a pas acces aux modeles
3. Des valeurs de metadonnees requises sont manquantes

Action :

1. Retirer temporairement le filtre et tester a nouveau
2. Verifier la visibilite des modeles avec un profil administrateur
3. Reappliquer le filtre une fois la verification faite

Probleme : le PDF n'est pas attache a l'enregistrement

Causes possibles :

1. Le Record Id en entree du Flow est vide ou incorrect
2. L'utilisateur n'a pas les droits sur les fichiers/pieces jointes
3. La generation a echoue avant la fin

Action :

1. Verifier les details de debug du Flow
2. Confirmer les permissions objet et fichier
3. Refaire le test avec un utilisateur administrateur

Probleme : impossible de finaliser un document interactif

Causes possibles :

1. Le nom du document dans le suivi ne correspond pas a kwsoft
2. Le Related Record Id du suivi est manquant
3. Le document a ete supprime ou renomme hors du processus prevu

Action :

1. Verifier le nom du document dans l'enregistrement de suivi
2. Confirmer que le lookup vers l'enregistrement metier est renseigne
3. Reessayer l'export avec un nouveau document interactif

## Recommandation de modele de support

Pour une exploitation stable, definissez deux niveaux de support :

1. Support L1 admin : verifications de permissions, disponibilite des modeles, accompagnement utilisateur
2. Support L2 technique : changements de logique Flow, mise a jour des requetes, depannage d'integration

Cette separation permet un support quotidien rapide et des changements techniques mieux controles.
