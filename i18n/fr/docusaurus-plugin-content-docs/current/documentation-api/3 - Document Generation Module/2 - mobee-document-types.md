# Types de Modèles et Syntaxe

## Types de Modèles

Mobee prend en charge deux types de modèles :

### Modèle de Document Simple

Lorsque la case à cocher **Document regroupé** n'est pas cochée, le modèle est conçu pour une génération unitaire. Cela signifie que le modèle inclut des informations pour un seul enregistrement. Par exemple, si vous créez un modèle simple pour l'objet "Contact", il incorporera les informations d'un contact et ses données associées.

### Modèle de Document regroupé

Lorsque la case à cocher **Document regroupé** est cochée, cela indique que le modèle sera généré pour plusieurs enregistrements simultanément. Ce modèle utilise une syntaxe spéciale pour parcourir une liste d'enregistrements. Pour accéder aux champs de chaque enregistrement dans un document regroupé, votre modèle doit commencer par boucler à travers la liste d'éléments en utilisant la balise suivante `{#items}{/}`. Consultez la section [boucles](#Boucles) pour plus de détails.

## Syntaxe

La syntaxe des balises utilisées dans les modèles Mobee est inspirée par la syntaxe [Mustache](https://mustache.github.io/), indépendante du langage.

- Les balises normales commencent par un caractère alphabétique.
- Les autres types de balises commencent par des préfixes spéciaux.

**Par exemple :**

- Accéder aux champs de fusion sur l'objet : `{Salutation} {FirstName} {Name}`
- Accéder aux données de listes associées : `{#Cases}` et `{/}` pour ouvrir et fermer une balise. Consultez la section **boucles** pour plus de détails.
- Insérer des images dynamiques : `{%ImageUrl__c}` ajoutera l'image pour le champ "ImageUrl\_\_c". Consultez la section **Images dynamiques** pour plus de détails.

Par exemple, pour accéder aux données du "Contact" en utilisant la syntaxe donnée dans votre modèle :

```markdown
Bonjour {Salutation} {FirstName} {LastName} !
```

**Résultat :**

```markdown
Bonjour M. John Doe !
```

## Conditions

Les conditions commencent par le caractère `#` et se terminent par une barre oblique. Par exemple, `{#Salutation == "M."}` commence une condition et `{/}` la termine.

**Remarque :** Pour vérifier les champs de case à cocher (`true` ou `false`), utilisez la syntaxe suivante :

```markdown
Le contact {Nom} {#HasOptedOutOfEmail == 1}a{/}{#HasOptedOutOfEmail == 0}n'a pas{/} refusé les emails.
```

**Résultat :**

```markdown
Le contact M. John Doe a refusé les emails.
```

### Expressions logiques

Vous pouvez utiliser les opérateurs suivants pour des expressions logiques plus complexes :

- AND `a && b`
- OR `a || b`
- ADDITION `a + b`
- SOUSTRACTION `a - b`
- MULTIPLICATION `a * b`
- MODULO `a % b`
- DIVISION `a / b`
- TERNARY `a ? b : c`
- ASSIGNATION `a = 1`
- ÉGALITÉ/INÉGALITÉ `a == 1, a != 1`
- RELATIONNEL `a > 1, a < 1, a >= 1, a <= 1`
- PRÉSÉANCE DES OPÉRATEURS avec des parenthèses `(a && b) || c`
- NOTATION EXPONENTIELLE : `12e3` => renvoie `12000`

Exemple :

```markdown
{#products.length > 1}Il y a plusieurs produits{/}
{#FirstName == "John"}Bonjour John{/}
```

La première condition affichera la section uniquement s'il y a 2 produits ou plus.

La deuxième condition affichera la section uniquement si le prénom est la chaîne "John".

**Résultat :**

```markdown
Il y a plusieurs produits
Bonjour John
```

## Boucles

Comme mentionné précédemment, nous commençons à boucler à travers une liste de données avec le symbole `#`. Exemple :

```markdown
{#Cases}
{CaseNumber} : {Description}.
{/}
```

**Résultat :**

```markdown
00001299 : Besoin d'une autorisation d'accès pour visiter l'emplacement.
00001624 : Support Client.
00001836 : Le câble du chargeur de batterie est manquant.
```

**Remarque :** Chaque champ de fusion utilisé dans la section de boucle fait référence aux champs de l'objet associé actuel. Si le champ n'est pas trouvé sur l'objet associé, le moteur le référencera à partir de l'objet parent.

## Images Dynamiques

Les images dynamiques peuvent être intégrées de manière transparente dans vos documents générés grâce à l'utilisation de placeholders dynamiques. Par exemple, si vous possédez un champ nommé `ProfilePicture__c` contenant l'URL d'une image ou l'image encodée en tant que chaîne Base64, elle peut être incorporée dans votre document sans effort en utilisant la balise désignée : `{%ProfilePicture__c}` (commençant par le symbole `%`).

### Images Base64

Pour inclure une image à l'aide de données base64, encodez simplement l'image au format Base64 et stockez-la directement dans votre champ Salesforce.

### Images par URL

Pour incorporer une image à l'aide d'une URL, suivez les étapes procédurales suivantes :

1. Accédez à "Configuration" dans Salesforce.
2. Dans la zone de recherche rapide, localisez et sélectionnez "Paramètres de Site Distant".
3. Cliquez sur le bouton "Nouveau Site Distant".
4. Attribuez un nom au site (par exemple, "Site Imgur").
5. Dans le champ "URL du Site Distant", saisissez l'URL de base de l'emplacement de l'image, par exemple "https://i.imgur.com".
6. Activez la case à cocher "Désactiver la Sécurité du Protocole" pour autoriser la récupération via HTTP.
7. Sélectionnez "Enregistrer" pour conserver les modifications.

![Sample Image](./img/remote_site.png)

Procédez aux étapes suivantes pour incorporer l'URL dans les URL de confiance avec toutes les directives de la politique de sécurité du contenu (CSP) activées :

1. Sur la page de configuration, localisez "URL de Confiance" à l'aide de la boîte de recherche rapide.
2. Sélectionnez le bouton "Nouvelle URL de Confiance".
3. Attribuez un nom à l'URL de confiance (par exemple, "Imgur de Confiance").
4. Dans le champ "URL du Site", saisissez la même URL de base qu'auparavant, c'est-à-dire "https://i.imgur.com".
5. Activez toutes les directives CSP : "Connecter", "Police de caractères", "Img", "Média", "Objet", "Script", "Style".
6. Confirmez les modifications en cliquant sur "Enregistrer".

![Exemple d'Image](./img/trusted_url.png)

![Exemple d'Image](./img/trusted_url2.png)

Vous avez maintenant configuré les paramètres du site distant et les URL de confiance pour récupérer en toute sécurité l'image via HTTP. Vous pouvez ensuite utiliser la balise `{%ProfilePicture__c}` pour inclure dynamiquement l'image dans vos documents générés.

## Fonctionnalités Supplémentaires

Mobee fournit plusieurs balises et filtres pour aider les utilisateurs à personnaliser leurs documents.

### Dates

La balise `{docUtils.today}` est un élément prédéfini qui permet d'inclure la date du jour dans un modèle de document pendant le processus de génération. A l'aide des filtres décrits ci-dessous, les utilisateurs ont la flexibilité de manipuler cette date selon leurs besoins spécifiques.

### Filtres

Les filtres sont des fonctions prédéfinies conçues pour la manipulation de chaînes de caractères, dates et nombres dans les modèles de documents. Ils peuvent être appliqués à n'importe quelle balise en ajoutant le caractère pipe `|` suivi du filtre souhaité.

Voici un exemple illustratif de la syntaxe :

```markdown
Bonjour {Salutation} {FirstName} {LastName | upper} !
```

**Résultat :**

```markdown
Bonjour M. John DOE !
```

Les balises et filtres suivants sont actuellement pris en charge :

**Filtres de chaîne :**

- `lower` : Utilisé pour convertir le texte en minuscules.
- `upper` : Utilisé pour convertir le texte en majuscules.

**Filtres de Date :**

- `shortDate` : Utilisé pour convertir la date dans un format abrégé plus court.
- `followingMonth` : Utilisé pour retourner le mois suivant en fonction d'une date donnée.
- `followingYear` : Utilisé pour retourner l'année suivante en fonction d'une date donnée.
- `lastWorkingDayOfMonth` : Utilisé pour retourner le dernier jour ouvrable du mois en fonction d'une date donnée.
- `formatDate` : Un filtre polyvalent pour formater différentes valeurs de date.

Exemple d'utilisation :

```markdown
La date de création est {DateDeDébut | shortDate}
Le mois suivant est {DateDeDébut | followingMonth: '[["year": "numeric", "month": "long"]]'}
L'année suivante est {DateDeDébut | followingYear: '[["year": "numeric"]]'}
Le dernier jour ouvrable du mois est {DateDeDébut | lastWorkingDayOfMonth}
```

**Résultat :**

```markdown
La date de création est 21/01/2022
Le mois suivant est février 2022
L'année suivante est 2023
Le dernier jour ouvrable du mois est 31/01/2022
```

Les fonctions `followingMonth`, `followingYear`, `lastWorkingDayOfMonth` et `formatDate` acceptent les options de formatage suivantes :

```json
[[
  weekday: 'narrow' | 'short' | 'long',
  era: 'narrow' | 'short' | 'long',
  year: 'numeric' | '2-digit',
  month: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long',
  day: 'numeric' | '2-digit',
  hour: 'numeric' | '2-digit',
  minute: 'numeric' | '2-digit',
  second: 'numeric' | '2-digit',
  timeZoneName: 'short' | 'long',

  // Time zone to express it in
  timeZone: 'Asia/Shanghai',
  // Force 12-hour or 24-hour
  hour12: true | false,

  // Rarely-used options
  hourCycle: 'h11' | 'h12' | 'h23' | 'h24',
  formatMatcher: 'basic' | 'best fit'
]]
```