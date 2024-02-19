# Documentation de la fonctionnalité de compression PDF

## Aperçu

Ce document fournit des informations sur la nouvelle fonctionnalité de compression PDF, qui permet aux utilisateurs de compresser des fichiers PDF pour en réduire la taille tout en contrôlant la qualité. Le processus de compression utilise Ghostscript (gs) et offre aux utilisateurs la flexibilité d'ajuster les paramètres de contrôle de qualité selon leurs préférences.

## Utilisation

### Paramètres de contrôle de qualité

Les paramètres de contrôle de qualité sont des variables que les utilisateurs peuvent ajuster pour contrôler la taille et la qualité du fichier PDF compressé. Ces paramètres comprennent :

- `ColorImageResolution` : spécifie la résolution (en points par pouce, ou dpi) pour les images en couleur dans le fichier PDF. Des valeurs plus élevées donnent une meilleure qualité d'image mais des tailles de fichier plus grandes. Des valeurs plus faibles réduisent la qualité de l'image mais entraînent des tailles de fichier plus petites.

- `GrayImageResolution` : similaire à `ColorImageResolution`, ce paramètre spécifie la résolution pour les images en niveaux de gris dans le fichier PDF.

- `MonoImageResolution` : spécifie la résolution pour les images monochromes (noir et blanc) dans le fichier PDF.

Si ces paramètres ne sont pas fournis, des valeurs par défaut seront définies à 120 pour chaque variable.

### Entrée

Les utilisateurs ont la possibilité de fournir soit un fichier PDF, soit l'URL d'un fichier PDF. Si une URL est fournie, le système téléchargera le fichier et procédera à la compression.