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
  url: `https://docs.copernik.io`,
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

  scripts: [
    {
      src: 'https://stats.cyberand.co/script.js',
      defer: true,
      'data-website-id': '6b823f17-908a-49fb-a5cf-3f64d1ebaea0',
    },
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
        links: [],
        copyright: `
          <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--ifm-toc-border-color);">
            <!-- Logo -->
            <div style="text-align: center; margin-bottom: 2rem;">
              <a href="https://copernik.io" style="display: inline-block; margin-bottom: 1rem;">
                <img src="/img/logo_mini.png" alt="Copernik Logo" style="width: 48px; height: 48px; border-radius: 8px;" />
              </a>
            </div>

            <!-- Mission statement -->
            <div style="text-align: center; margin-bottom: 2rem;">
              <div style="display: inline-flex; align-items: center; gap: 0.5rem; background: var(--ifm-color-primary-lightest); color: var(--ifm-color-primary-darkest); padding: 0.5rem 1rem; border-radius: 1rem; font-weight: 600; font-size: 0.875rem; margin-bottom: 1rem;">
                <span>🛡️</span>
                <span>Notre mission</span>
              </div>
              <p style="color: var(--ifm-color-content); font-size: 0.875rem; line-height: 1.6; max-width: 32rem; margin: 0 auto;">
                Protéger vos systèmes avec des outils de cybersécurité modernes et accessibles pour tous les acteurs du numérique.
              </p>
            </div>

            <!-- Company info -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.5rem; margin-bottom: 2rem; text-align: center;">
              <div>
                <h4 style="font-weight: 600; color: var(--ifm-heading-color); margin-bottom: 0.5rem; font-size: 0.875rem;">Société</h4>
                <p style="color: var(--ifm-color-content-secondary); font-size: 0.75rem; margin: 0; line-height: 1.4;">
                  Cyber&Co SAS<br>
                  RCS : 940310303<br>
                  SIRET : 94031030300018
                </p>
              </div>

              <div>
                <h4 style="font-weight: 600; color: var(--ifm-heading-color); margin-bottom: 0.5rem; font-size: 0.875rem;">Contact</h4>
                <p style="color: var(--ifm-color-content-secondary); font-size: 0.75rem; margin: 0; line-height: 1.4;">
                  France<br>
                  <a href="mailto:contact@copernik.io" style="color: var(--ifm-link-color); text-decoration: none;">contact@copernik.io</a>
                </p>
              </div>

              <div>
                <h4 style="font-weight: 600; color: var(--ifm-heading-color); margin-bottom: 0.5rem; font-size: 0.875rem;">Hébergement</h4>
                <p style="color: var(--ifm-color-content-secondary); font-size: 0.75rem; margin: 0; line-height: 1.4;">
                  Scaleway SAS<br>
                  Paris, France
                </p>
              </div>

              <div>
                <h4 style="font-weight: 600; color: var(--ifm-heading-color); margin-bottom: 0.5rem; font-size: 0.875rem;">Conformité</h4>
                <p style="color: var(--ifm-color-content-secondary); font-size: 0.75rem; margin: 0; line-height: 1.4;">
                  RGPD<br>
                  Hébergement France
                </p>
              </div>
            </div>

            <!-- Support partner -->
            <div style="text-align: center; padding-top: 1.5rem; border-top: 1px solid var(--ifm-toc-border-color);">
              <div style="display: inline-flex; align-items: center; gap: 0.75rem; padding: 0.75rem;">
                <span style="font-size: 0.75rem; color: var(--ifm-color-content-secondary); font-weight: 500;">Projet supporté par</span>
                <img src="/img/scaleway.png" alt="Scaleway" style="height: 1rem; vertical-align: middle; opacity: 0.8;" />
              </div>
            </div>

            <!-- Copyright -->
            <div style="text-align: center; margin-top: 1.5rem; color: var(--ifm-color-content-secondary); font-size: 0.75rem;">
              © ${new Date().getFullYear()} Copernik - Un produit <strong><a href="https://cyberand.co" style="color: var(--ifm-link-color); text-decoration: none;">Cyber&Co</a></strong>
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
