## Deploy
To deploy your changes, you need to execute these commands:
```bash
npm run build
GIT_USER=<github_username> yarn deploy
```
## Translate Markdown files
1. Open the docusaurus.config.js file and add the following code snippet to enable language translation features:
```js
items: [
  {
    type: 'localeDropdown',
    position: 'right',
  }
],
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'fr', 'esp'],
  localeConfigs: {
    en: {
      label: 'English',
    },
    fr: {
      label: 'Français',
    },
    esp: {
      label: 'Español',
    },
  },
},
```
2. To translate your documentation Markdown files, follow these steps:
+ Create the necessary directory structure for translations:
```bash
mkdir -p i18n/<language>/docusaurus-plugin-content-docs/current
```
+ Copy your existing documentation Markdown files from the docs/ directory to the translation directory:
```bash
cp -r docs/** i18n/<language>/docusaurus-plugin-content-docs/current
```
3. Additionally, if you have other content like blogs and Components, you can copy them from your project to the translation directory as well.
+ Translate these files as needed.
+ Run the translation command for the documentation:
```bash
npm run write-translations -- --locale <language>
```

```sql
Please make sure to replace `<language>` with the appropriate language code in the paths and commands.
```
## Automated Sidebar Generation
The sidebars in your case are automatically generated. You only need to include the following code snippet:
```js
@type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
const sidebars = {
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
};
```
This will generate sidebars based on the directory structure of your documentation files. You don't need to manually update the sidebars when adding new content.
