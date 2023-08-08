// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mobee-app',
  tagline: 'By Salesforce',
  favicon: 'img/circle-32.png',

  // Set the production url of your site here
  url: 'https://mobee-app.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/documentation',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mobee-app', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.


  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  plugins: [require.resolve('docusaurus-lunr-search')],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      baseUrl: '/documentation/',
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Mobee-app',
        logo: {
          alt: 'My Site Logo',
          src: 'img/appstore.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/documentation-api',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              
             
              {
                label: 'Twitter',
                href: 'https://twitter.com/AppMobee',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/mobee-app-by-uprizon/',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@mobeeapp/featured',
              },
              {
                label: 'Play Store',
                href: 'https://play.google.com/store/apps/details?id=com.mobee_app',
              },
              {
                label: 'Apple Store',
                href: 'https://apps.apple.com/fr/app/mobee-app/id1617645272',
              },
             
              
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'AppExchange get a free Demo',
                href: 'https://appexchange.salesforce.com/listingDetail?listingId=a0N3u00000ONmC7EAL&tab=e',
              },
              {
                label: 'Official Site',
                href: 'https://mobee-app.com/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Mobee-App/documentation',
              },
            ],
          },
        ],
        copyright: `<a href="https://mobee-app.com/privacy-policy/">Privacy Policy</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
