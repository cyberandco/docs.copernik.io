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
  title: 'Copernik Documentation',
  tagline: '🛡️ Comprendre pour mieux se protéger - La cybersécurité accessible à tous',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: `https://docs.copernik.dev.cyberandco.ovh`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

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
        title: 'Copernik',
        logo: {
          alt: 'Logo Copernik',
          src: 'img/logo_mini.png',
          style: {
            borderRadius: '8px',
          },
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '📚 Guide utilisateur',
          },
          {
            href: 'https://copernik.io',
            label: '🌐 Copernik',
            position: 'right',
          },
          {
            href: 'https://github.com/cyberandco/docs.copernik.io',
            label: '⭐ GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: '📖 Documentation',
            items: [
              {
                label: '🚀 Démarrer avec Copernik',
                to: '/docs/intro',
              },
              {
                label: '📋 Guide utilisateur',
                to: '/docs/tutorial-basics/premiers-scans',
              },
              {
                label: '🎯 Types de scans',
                to: '/docs/tutorial-basics/type-de-scans',
              },
            ],
          },
          {
            title: '🔗 Ressources',
            items: [
              {
                label: '🌐 Copernik.io',
                href: 'https://copernik.io',
              },
              {
                label: '🛡️ Centre de sécurité',
                href: 'https://beta.copernik.io/security',
              },
            ],
          },
          {
            title: '🤝 Communauté',
            items: [
              {
                label: '📧 Support',
                href: 'mailto:contact@copernik.io',
              },
              {
                label: '💼 LinkedIn',
                href: 'https://www.linkedin.com/company/copernik-io/',
              },
              {
                label: '💬 Discord',
                href: 'https://discord.gg/PvtfRpVB',
              },
            ],
          },
          {
            title: '⚡ Outils',
            items: [
              {
                label: '🔍 Scanner de domaine',
                href: 'https://beta.copernik.io/app/domains/',
              },
              {
                label: '📊 Dashboard',
                href: 'https://beta.copernik.io/app/app',
              },
              {
                label: '🚨 Alertes',
                href: 'https://beta.copernik.io/app/alerts',
              },
            ],
          },
        ],
        logo: {
          alt: 'Copernik Logo',
          src: 'img/logo_mini.png',
          href: 'https://copernik.io',
          width: 48,
          height: 48,
        },
        copyright: `
          <div style="display: flex; flex-direction: column; align-items: center; gap: 20px; padding: 20px 0;">
            <div style="display: flex; align-items: center; gap: 16px; text-align: center;">
              <div style="font-size: 16px; color: #1e293b; font-weight: 700; background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                🛡️ La cybersécurité accessible à tous
              </div>
            </div>
            <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap; justify-content: center;">
              <span style="color: #64748b; font-size: 14px; font-weight: 500;">🔒 Sécurisé</span>
              <span style="color: #64748b; font-size: 14px; font-weight: 500;">⚡ Rapide</span>
              <span style="color: #64748b; font-size: 14px; font-weight: 500;">🎯 Précis</span>
              <span style="color: #64748b; font-size: 14px; font-weight: 500;">📱 Accessible</span>
            </div>
            <div style="color: #94a3b8; font-size: 12px; text-align: center;">
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
