// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
const organizationName = "cyberandco";
const projectName = "docs.copernik.io";
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentation',
  tagline: 'Comprendre pour mieux se protéger',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: `https://docs.copernik.dev.cyberandco.ovh`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/copernik-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName,
  projectName,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 
          `https://github.com/${organizationName}/${projectName}/tree/main/`,
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Copernik - Documentation',
        logo: {
          alt: 'Logo Copernik',
          src: 'img/logo_mini.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Démarrage rapide',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Démarrer avec Copernik',
                to: '/docs/intro',
              },
              {
                label: 'Guide utilisateur',
                to: '/docs/tutorial-basics/premiers-scans',
              },
            ],
          },
          {
            title: 'Ressources',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Tutoriels',
                to: '/docs/tutorial-basics/choisir-un-plan',
              },
            ],
          },
          {
            title: 'Contact & Support',
            items: [
              {
                label: 'Email',
                href: 'mailto:contact@copernik.fr',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/copernik',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/cyberandco/copernik-docs',
              },
            ],
          },
        ],
        logo: {
          alt: 'Copernik Logo',
          src: 'img/logo_mini.png',
          href: 'https://copernik.fr',
          width: 48,
          height: 48,
        },
        copyright: `
          <div style="display: flex; flex-direction: column; align-items: center; gap: 16px;">
            <div style="display: flex; align-items: center; gap: 12px; text-align: center;">
              <div style="font-size: 14px; color: #64748b; font-weight: 600;">
                La cybersécurité accessible à tous
              </div>
            </div>
            <div style="color: #94a3b8; font-size: 12px;">
              © ${new Date().getFullYear()} Copernik - Tous droits réservés
            </div>
          </div>
        `,
      },
      prism: {
        theme: prismThemes.github,
      },
    }),
};

export default config;
