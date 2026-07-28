# Configuration du connecteur KwSoft

Cette page explique la configuration initiale a effectuer une seule fois apres l'installation.

## 1. Creer un objet de suivi des documents

Les documents interactifs sont modifies en dehors de Salesforce avant leur finalisation. Vous devez donc conserver dans Salesforce une reference vers ces brouillons.

Creez un objet personnalise (nom d'exemple : KwSoft Document Log) avec au minimum les champs suivants :

1. Document Name (Texte)
2. Document URL (URL)
3. Related Record (Lookup vers votre objet metier, par exemple Case)
4. Status (Liste de selection, valeurs recommandees : Draft, Finalized)

Cet objet aide les utilisateurs a retrouver et reprendre les documents non termines.

## 2. Ajouter la liste associée sur les enregistrements metier

Ajoutez cet objet personnalise comme liste liee dans la mise en page de l'objet principal (par exemple, Case).

Les utilisateurs verront ainsi clairement :

1. Quels documents interactifs existent
2. Quels documents sont encore en brouillon
3. A quel enregistrement chaque document est rattache

## 3. Verifier les permissions utilisateurs

Pour les utilisateurs metier :

1. Droits de lecture/creation sur les fichiers et pieces jointes
2. Acces au Flow de generation
3. Acces a l'objet de suivi personnalise

Pour les administrateurs :

1. Gerer les Flows
2. Mettre a jour les mises en page
3. Maintenir les modeles et metadonnees KwSoft

## 4. Definir votre mode operatoire

Choisissez l'une des approches suivantes :

1. Mode simple : PDF automatique uniquement
2. Mode avance : PDF automatique + documents interactifs

La plupart des equipes commencent par le mode simple, puis activent le mode avance une fois les utilisateurs a l'aise.

## 5. Valider avec un utilisateur pilote

Avant la mise en production, effectuez un test de bout en bout :

1. Ouvrir un enregistrement de test
2. Lancer le Flow de generation
3. Generer un document automatique
4. Generer un document interactif
5. Verifier le comportement de la piece jointe PDF et de l'objet de suivi

Si ce test est concluant, vous pouvez deployer au reste des utilisateurs.
