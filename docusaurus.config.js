// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'World Timesheet',
  tagline: '',
  favicon: 'img/SpeedrunnerLink.ico',

  future: {
    v4: true,
  },

  url: 'mkworld-timesheet.vercel.app',
  baseUrl: '/',

  organizationName: 'Zephyrtvn-dev',
  projectName: 'MKWorld-Timesheet',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'World Timesheet',
        logo: {
          alt: 'SpeedrunnerLink',
          src: 'img/SpeedrunnerLink-nobg.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/Zephyrtvn-dev/MKWorld-Timesheet',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Des questions ?',
            items: [
              {
                label: 'Me contacter',
                href: 'https://discord.com/channels/@me/933341886217879642',
              },
            ],
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;