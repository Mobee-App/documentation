# Connecteur kwsoft® pour Salesforce

Le connecteur kwsoft® permet a vos equipes de generer des documents depuis des enregistrements Salesforce a l'aide de Flows preconfigures.

Ce guide est redige pour les administrateurs et les utilisateurs fonctionnels. Vous n'avez pas besoin de connaissances en developpement pour comprendre le processus.

> Note de terminologie : les noms de champs et d'objets Salesforce (par exemple `Case`, `Record Id`, `Template Filter`) sont conserves en anglais pour correspondre exactement a l'interface.

## Ce que fait ce module

Avec ce module, les utilisateurs peuvent :

1. Ouvrir un Flow depuis un enregistrement (par exemple, un Case).
2. Selectionner un modele kwsoft.
3. Generer un document.
4. Enregistrer le resultat dans Salesforce.

Deux modes de document sont pris en charge :

- Document automatique : genere directement en PDF et attache a l'enregistrement.
- Document interactif : ouvert dans kwsoft pour edition, puis exporte ensuite.

## Ce qui est inclus dans le package

Le package fournit des Flows modele pour demarrer rapidement :

1. Mobee - kwsoft Document Generation
2. Mobee - Export kwsoft Document

Vous pouvez conserver la plupart de ces Flows et les adapter facilement a votre processus metier.

## Ordre de lecture recommande

Pour simplifier la mise en place, suivez ces pages dans cet ordre :

1. [Configuration du connecteur kwsoft](2-kwsoft-connector-setup.md).
2. [Flow de generation de documents](3-kwsoft-document-generation-flow.md).
3. [Documents interactifs et export final](4-kwsoft-interactive-documents.md).
4. [Checklist admin et depannage](5-kwsoft-admin-checklist-and-troubleshooting.md).

## Avant de commencer

Verifiez que :

1. Le package est installe.
2. Les administrateurs peuvent modifier les Flows.
3. Les utilisateurs ont acces a l'objet ou les documents sont generes (par exemple, Case).
4. Au moins un modele kwsoft est disponible.

## Besoin d'un resultat rapide

Pour un deploiement rapide, commencez par les documents automatiques uniquement. Vous pourrez ajouter la gestion des documents interactifs dans une seconde phase.
