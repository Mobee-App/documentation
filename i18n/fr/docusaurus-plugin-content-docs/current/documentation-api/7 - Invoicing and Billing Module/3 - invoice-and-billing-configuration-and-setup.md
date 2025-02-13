# Configuration et Paramétrage pour la Facturation

Cette section vous guidera dans la configuration des fonctionnalités clés telles que le processus d'approbation, l'ajout du bouton "Générer une Facture", la configuration des affectations de pages Lightning, la gestion des autorisations des utilisateurs et des administrateurs, ainsi que l'attribution des types d'enregistrement aux profils.

## Gestion des Jeux d'Autorisations Personnalisés

Deux jeux d'autorisations personnalisés sont fournis dans le package pour contrôler l'accès aux fonctionnalités de facturation :

1. **Administrateur Mobee Facturation**
2. **Utilisateur Mobee Facturation**

Ces jeux d'autorisations définissent les niveaux d'accès pour différents types d'utilisateurs, garantissant que les administrateurs peuvent gérer pleinement les opérations de facturation, tandis que les utilisateurs standard ont un accès restreint en lecture seule avec la possibilité de générer des factures via un Flow.

### **Administrateur Mobee Facturation**

Le jeu d'autorisations **Administrateur Mobee Facturation** est destiné aux administrateurs responsables de la gestion du processus de facturation, des modèles et de la configuration. Les administrateurs ont un contrôle total sur tous les objets et flows liés à la facturation.

#### Autorisations :
- **Lecture/Écriture** sur tous les objets personnalisés liés à la facturation, y compris :
  - **Facture**
  - **Élément de Ligne de Facture**
  - **Modèle de Taxe**
  - **Taxe par Catégorie de Produit**
  - **Taxes Applicables**
- **Contrôle total** des flows liés à la facturation :
  - Les administrateurs peuvent créer, modifier et supprimer les **Flows Modèles** utilisés pour générer des factures.

#### Utilisation :
- Le jeu d'autorisations **Administrateur Mobee Facturation** est attribué aux utilisateurs qui doivent gérer tous les aspects de la facturation, y compris la personnalisation des flows de génération de factures et la gestion des paramètres fiscaux. Ce rôle convient aux équipes financières et opérationnelles responsables de la supervision du processus de facturation.

---

### **Utilisateur Mobee Facturation**

Le jeu d'autorisations **Utilisateur Mobee Facturation** est destiné aux utilisateurs standard qui interagissent avec le processus de facturation mais ne nécessitent pas un accès administratif complet. Les utilisateurs disposant de cette autorisation peuvent générer des factures via un Flow mais ne peuvent pas modifier les modèles ou les paramètres de configuration de la facturation.

#### Autorisations :
- **Accès en Lecture seule** sur tous les objets personnalisés liés à la facturation, y compris :
  - **Facture**
  - **Élément de Ligne de Facture**
  - **Modèle de Taxe**
  - **Taxe par Catégorie de Produit**
  - **Taxes Applicables**
- **Accès Flow** : Les utilisateurs peuvent accéder au Flow et l'utiliser pour créer et soumettre des factures, mais ils ne peuvent pas modifier la configuration ou les modèles de Flow.

#### Utilisation :
- Le jeu d'autorisations **Utilisateur Mobee Facturation** est conçu pour les membres des équipes commerciales, de service ou de projet qui doivent générer des factures mais ne gèrent pas le système de facturation. Ce rôle permet aux utilisateurs d'interagir avec le Flow de facturation tout en maintenant un contrôle strict sur les données et configurations liées à la facturation.

---

## Attribution des Jeux d'Autorisations aux Utilisateurs

Les jeux d'autorisations personnalisés sont déjà inclus dans le package **Mobee Facturation**. Suivez ces étapes pour les attribuer aux utilisateurs :

### Attribuer le Jeu d'Autorisations Administrateur Mobee Facturation :

1. **Accédez à Configuration** > **Jeux d'Autorisations**.
2. Recherchez le jeu d'autorisations : `Administrateur Mobee Facturation`.
3. Cliquez sur le jeu d'autorisations et sélectionnez **Gérer les Attributions**.
4. Cliquez sur **Ajouter des Attributions**.
5. Sélectionnez les utilisateurs qui ont besoin d'un accès **administrateur** au système de facturation.
6. Cliquez sur **Attribuer**.

### Attribuer le Jeu d'Autorisations Utilisateur Mobee Facturation :

1. **Accédez à Configuration** > **Jeux d'Autorisations**.
2. Recherchez le jeu d'autorisations : `Utilisateur Mobee Facturation`.
3. Cliquez sur le jeu d'autorisations et sélectionnez **Gérer les Attributions**.
4. Cliquez sur **Ajouter des Attributions**.
5. Sélectionnez les utilisateurs qui ont besoin d'un accès **utilisateur** pour interagir avec le Flow de facturation.
6. Cliquez sur **Attribuer**.

---

## Attribution des Types d'Enregistrement aux Profils

Pour garantir un accès approprié à des types d'enregistrement spécifiques, suivez ces étapes pour configurer l'accès aux types d'enregistrement pour les profils utilisateur :

1. **Accédez à Configuration** > **Profils**.
2. Sélectionnez le profil pour lequel vous souhaitez attribuer des autorisations de Type d'Enregistrement.
3. Dans la section **Paramètres des Types d'Enregistrement**, trouvez l'objet **Facture**.
4. Cliquez sur **Modifier** à côté de l'objet **Facture**.
5. Sélectionnez les Types d'Enregistrement appropriés (par exemple, **Facture Approuvée**, **Facture Brouillon**) qui doivent être disponibles pour le profil.
6. Définissez un **Type d'Enregistrement par Défaut** pour ce profil.
7. Cliquez sur **Enregistrer**.

Cette configuration garantit que les utilisateurs disposant de profils spécifiques peuvent accéder et travailler avec les types d'enregistrement pertinents pour l'objet **Facture**.

---

## Attribution des Pages Lightning pour les Factures

Le **Module Mobee Facturation** inclut deux **Pages Lightning** pour les factures, permettant d'avoir des mises en page distinctes selon le statut de la facture. Cependant, en raison des limites du package, l'attribution de ces pages à des types d'enregistrement spécifiques doit être effectuée manuellement. Cette section explique comment attribuer les pages Lightning correctement.

---

### Pages Lightning Disponibles

1. **Mobee Facture Approuvée (Page Lightning)** : Cette mise en page est conçue pour les factures ayant le type d'enregistrement **Facture Approuvée**.
2. **Mobee Facture Brouillon (Page Lightning)** : Cette mise en page est conçue pour les factures ayant le type d'enregistrement **Facture Brouillon**.

#### Important :
Les attributions de pages ne sont pas automatiquement gérées par le package, une configuration manuelle est donc requise pour s'assurer que les mises en page correctes sont appliquées en fonction du statut de la facture.

---

### Attribution Manuelle des Pages Lightning

#### Attribuer la **Page Mobee Facture Approuvée** au Type d'Enregistrement **Facture Approuvée** :

1. **Accédez à Configuration** > **Gestionnaire d'Objets**.
2. Recherchez et sélectionnez l'objet **Facture**.
3. Dans le menu de gauche, cliquez sur **Pages Lightning**.
4. Recherchez la page appelée **Mobee Facture Approuvée**.
5. Cliquez sur **Voir les Attributions** ou **Attribuer comme Valeur par Défaut**.
6. Sélectionnez **Application, Type d'Enregistrement, et Profil** dans la liste d'attribution.
7. Choisissez **Facture Approuvée** comme Type d'Enregistrement.
8. Cliquez sur **Enregistrer**.

#### Attribuer la **Page Mobee Facture Brouillon** au Type d'Enregistrement **Facture Brouillon** :

1. **Accédez à Configuration** > **Gestionnaire d'Objets**.
2. Recherchez et sélectionnez l'objet **Facture**.
3. Dans le menu de gauche, cliquez sur **Pages Lightning**.
4. Recherchez la page appelée **Mobee Facture Brouillon**.
5. Cliquez sur **Voir les Attributions** ou **Attribuer comme Valeur par Défaut**.
6. Sélectionnez **Application, Type d'Enregistrement, et Profil** dans la liste d'attribution.
7. Choisissez **Facture Brouillon** comme Type d'Enregistrement.
8. Cliquez sur **Enregistrer**.

En suivant ces étapes, vous vous assurez que les **Pages Lightning** appropriées sont attribuées aux types d'enregistrement corrects pour les factures, offrant des vues claires et distinctes selon les statuts des factures.
