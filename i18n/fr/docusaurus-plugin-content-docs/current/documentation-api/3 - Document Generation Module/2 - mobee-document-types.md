# Types de modèles et syntaxe

## Types de modèles

Mobee prend en charge deux types de modèles :

### Modèle de document simple

Lorsque la case à cocher **Document regroupé** n'est pas cochée, le modèle est conçu pour une génération unitaire. Cela signifie que le modèle inclut des informations pour un seul enregistrement. Par exemple, si vous créez un modèle simple pour l'objet "Contact", il incorporera les informations d'un contact et ses données associées.

### Modèle de document regroupé

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

## Images dynamiques

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

## Filtres

Avec les filtres, il est possible de manipuler n'importe quel champ de données fourni. Mobee propose plusieurs filtres conçus pour formater, manipuler et personnaliser le contenu dynamique au sein des modèles de documents. Ces filtres aident les utilisateurs à formater les dates, à modifier la casse du texte et à générer un contenu adapté.

**Exemple d'utilisation**

**Scénario :**  
Un utilisateur génère un document contractuel qui inclut un formatage de date personnalisé et des noms formatés dynamiquement. Le système doit retourner les dates dans différents formats et convertir les noms en majuscules ou minuscules selon les besoins.

**Modèle :**  
```markdown
Bonjour {Salutation} {FirstName} {LastName | upper} !  
La date d'aujourd'hui est {docUtils.today | formatDate: '[["year": "numeric", "month": "long", "day": "numeric"]]'} .  
La date de début du contrat est {StartDate | shortDate}.  
L'année prochaine, cette date sera {StartDate | followingYear}.  
```

**Données d'entrée :**

| Champ       | Valeur      |
|-------------|-------------|
| Salutation  | M.          |
| FirstName   | John        |
| LastName    | Doe         |
| StartDate   | 2022-01-21  |

**Sortie attendue :**  
```markdown
Bonjour M. John DOE !  
La date d'aujourd'hui est 21 janvier 2022.  
La date de début du contrat est 21/01/2022.  
L'année prochaine, cette date sera 2023.  
```

---

### Filtres de chaînes de caractères

- **`lower`** : Convertit le texte en minuscules.

  **Exemple :**  
  ```markdown
  {"Bonjour Monde" | lower}
  ```  
  **Sortie :**  
  ```
  bonjour monde
  ```

- **`upper`** : Convertit le texte en majuscules.

  **Exemple :**  
  ```markdown
  {"bonjour monde" | upper}
  ```  
  **Sortie :**  
  ```
  BONJOUR MONDE
  ```

---

### Filtres de dates

- **`shortDate`** : Formate la date en un format concis.

  **Exemple :**  
  ```markdown
  {StartDate | shortDate}
  ```  
  **Sortie :**  
  ```
  21/01/2022
  ```

- **`followingMonth`** : Retourne le mois suivant la date donnée.

  **Exemple :**  
  ```markdown
  {StartDate | followingMonth: '[["year": "numeric", "month": "long"]]'}
  ```  
  **Sortie :**  
  ```
  février 2022
  ```

- **`followingYear`** : Retourne l'année suivant la date donnée.

  **Exemple :**  
  ```markdown
  {StartDate | followingYear: '[["year": "numeric"]]'}
  ```  
  **Sortie :**  
  ```
  2023
  ```

- **`lastWorkingDayOfMonth`** : Retourne le dernier jour ouvrable du mois de la date donnée.

  **Exemple :**  
  ```markdown
  {StartDate | lastWorkingDayOfMonth}
  ```  
  **Sortie :**  
  ```
  31/01/2022
  ```

- **`formatDate`** : Formate la date selon les options spécifiées.

  **Exemple :**  
  ```markdown
  {StartDate | formatDate: '[["year": "numeric", "month": "short", "day": "2-digit"]]'}
  ```  
  **Sortie :**  
  ```
  21 janv. 2022
  ```

---

#### Options de formatage pour les filtres de dates

Les filtres de dates (`followingMonth`, `followingYear`, `lastWorkingDayOfMonth`, et `formatDate`) prennent en charge des options de formatage personnalisées comme suit :

```json
[[
  "weekday": "narrow" | "short" | "long",
  "era": "narrow" | "short" | "long",
  "year": "numeric" | "2-digit",
  "month": "numeric" | "2-digit" | "narrow" | "short" | "long",
  "day": "numeric" | "2-digit",
  "hour": "numeric" | "2-digit",
  "minute": "numeric" | "2-digit",
  "second": "numeric" | "2-digit",
  "timeZoneName": "short" | "long",
  "timeZone": "Europe/Paris",
  "hour12": true | false,
  "hourCycle": "h11" | "h12" | "h23" | "h24",
  "formatMatcher": "basic" | "best fit"
]]
```

Cela garantit que les utilisateurs peuvent facilement adapter les formats de date à leurs besoins spécifiques, rendant les documents précis et localisés pour divers publics.

---

### Filtres numériques

#### Fonction `currency`

La fonction `currency` est conçue pour formater les valeurs numériques en devises, ce qui facilite la présentation des données financières dans les documents. En spécifiant un code ISO de devise à 3 lettres, la fonction formate le nombre d'entrée et ajoute le symbole de la devise correspondant en fonction de la langue définie dans le modèle du document.

Pour gérer des devises dynamiques, telles que la devise associée à l'enregistrement actuel (par exemple, une facture ou un compte), la fonction permet de passer des valeurs dynamiques comme `$record.CurrencyIsoCode`.

**Retourne**  
La fonction renvoie une chaîne formatée représentant le nombre comme une devise, incluant :
- Le symbole de la devise approprié.
- Le formatage du nombre (séparateurs de milliers et décimales) selon la langue du document.

**Exemple d'utilisation**

**Scénario :**  
Une entreprise génère des factures dans plusieurs devises selon le pays du client. Le symbole de la devise doit s'ajuster dynamiquement en fonction de la devise spécifique de la facture, garantissant une présentation correcte des données financières.

**Modèle :**
```markdown
Revenus annuels du compte : { Account.AnnualRevenue | currency: '$record.Account.CurrencyIsoCode'}  
Montant de la facture : {Amount | currency: '$record.CurrencyIsoCode'}  
```

**Données d'entrée :**

| Champ            | Valeur       |
|------------------|--------------|
| AnnualRevenue    | 13000000     |
| CurrencyIsoCode  | USD          |
| Amount           | 15123        |
| CurrencyIsoCode  | JPY          |

**Sortie attendue :**  
```markdown
Revenus annuels du compte : $13,000,000.00  
Montant de la facture : ¥15,123  
```

La fonction `currency` simplifie la présentation des valeurs monétaires en s’adaptant dynamiquement à diverses devises, ce qui rend les documents plus conviviaux et adaptés à des audiences internationales.

---

### Filtres de liste

#### Documentation de la fonction `groupBy`

La fonction `groupBy` organise les éléments d'une collection en les regroupant selon des clés spécifiées. Plusieurs niveaux de regroupement peuvent être obtenus en fournissant plusieurs clés, séparées par des points-virgules. L'ordre des regroupements suit la séquence des clés spécifiées.

**Retourne**  
La fonction renvoie un objet contenant les propriétés suivantes :

- **`$groupedKey#`** : Représente la clé de regroupement à chaque niveau, où `#` indique le niveau de regroupement, à partir de 1.
- **`$groupedItems#`** : Contient les éléments associés à chaque clé de regroupement. Si plusieurs niveaux de regroupement sont appliqués, chaque niveau contient sa propre clé `$groupedKey#` et ses éléments `$groupedItems#`.

**Exemple d'utilisation**

**Scénario :**  
Regrouper les articles de facture par `Category` et `Subcategory`.

**Modèle :**
```markdown
Numéro de facture : {InvoiceNumber}  

{#InvoiceItems | groupBy: 'Category;Subcategory'}  
- Catégorie : {$groupedKey1}  
  {#$groupedItems1}  
  - Sous-catégorie : {$groupedKey2}  
    {#$groupedItems2}  
    - Article : {ItemName}  
      Quantité : {Quantity}  
      Prix : {Price | currency: 'USD'}  
    {/}  
  {/}  
{/}  
```

**Données d'entrée (Format Tableau) :**

| Catégorie     | Sous-catégorie | Nom de l'article   | Quantité | Prix  |
|---------------|----------------|--------------------|----------|-------|
| Électronique  | Ordinateurs    | Dell XPS 13        | 2        | 1200  |
| Électronique  | Ordinateurs    | MacBook Pro        | 1        | 2000  |
| Électronique  | Téléphones     | iPhone 14          | 3        | 999   |
| Mobilier      | Chaises        | Chaise de bureau   | 5        | 150   |

**Sortie attendue :**  
Numéro de facture : INV-2024-001  

- **Catégorie :** Électronique  
  - **Sous-catégorie :** Ordinateurs  
    - Article : Dell XPS 13  
      Quantité : 2  
      Prix : $1,200.00  
    - Article : MacBook Pro  
      Quantité : 1  
      Prix : $2,000.00  
  - **Sous-catégorie :** Téléphones  
    - Article : iPhone 14  
      Quantité : 3  
      Prix : $999.00  

- **Catégorie :** Mobilier  
  - **Sous-catégorie :** Chaises  
    - Article : Chaise de bureau  
      Quantité : 5  
      Prix : $150.00  

Cette fonction illustre comment regrouper efficacement des données selon des catégories hiérarchiques.

#### Fonction `sortBy`

La fonction `sortBy` permet de trier les éléments d'une liste selon des champs spécifiques, tels que la catégorie ou le prix.

**Exemple d'utilisation**

**Modèle :**
```markdown
{#InvoiceItems | sortBy: 'Category;Price'}  
- {ItemName} : {Price}  
{/}
```

**Données d'entrée (Format Tableau) :**

| Catégorie     | Nom de l'article   | Prix  |
|---------------|--------------------|-------|
| Mobilier      | Chaise de bureau   | 150   |
| Électronique  | Dell XPS 13        | 1200  |
| Électronique  | MacBook Pro        | 2000  |

**Sortie attendue :**  
```markdown
- Chaise de bureau : 150  
- Dell XPS 13 : 1200  
- MacBook Pro : 2000  
```

---

#### Fonction `htmlList`

La fonction `htmlList` convertit une chaîne HTML en une liste simple.

**Exemple d'utilisation**

**Modèle :**  
```markdown
{richTextField: htmlList}
```

**Données :**  
```markdown
{richTextField: '<ul><li>Article 1</li><li>Article 2</li></ul>'}
```

**Sortie attendue :**  
```markdown
- Article 1  
- Article 2  
```

---

#### Fonction `multiPicklist`

La fonction `multiPicklist` convertit une chaîne de texte délimitée en une liste avec des options spécifiées, telles qu'un séparateur et un symbole de puce.

**Exemple d'utilisation**

**Données :**  
```markdown
{fruits: 'Pomme;Orange;Banane'}
```

**Modèle :**  
```markdown
{fruits | multiPicklist: '[["separator": ";", "bulletSymbol": "-"]]' }
```

**Sortie attendue :**  
```markdown
- Pomme  
- Orange  
- Banane  
```

---

#### Fonction `where`

La fonction `where` permet de filtrer les éléments qui correspondent à certaines conditions, par exemple, sélectionner uniquement les articles électroniques.

**Exemple d'utilisation**

**Modèle :**  
```markdown
{#InvoiceItems | where: 'Category=="Électronique"'}  
- {ItemName}  
{/}
```

**Données d'entrée (Format Tableau) :**

| Catégorie     | Nom de l'article   | Prix  |
|---------------|--------------------|-------|
| Électronique  | Dell XPS 13        | 1200  |
| Électronique  | MacBook Pro        | 2000  |
| Électronique  | iPhone 14          | 999   |
| Mobilier      | Chaise de bureau   | 150   |

**Sortie attendue :**  
```markdown
- Dell XPS 13  
- MacBook Pro  
- iPhone 14  
```
