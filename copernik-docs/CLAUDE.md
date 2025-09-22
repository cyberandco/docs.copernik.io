# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Docusaurus-based documentation website for Copernik, a French cybersecurity platform. The site is built in French and provides user guides, tutorials, and documentation for the Copernik security platform.

## Development Commands

### Core Development
- `npm start` or `yarn start` - Start development server with live reload
- `npm run build` or `yarn build` - Build static site for production
- `npm run serve` or `yarn serve` - Serve built site locally

### Docusaurus Commands
- `npm run docusaurus` - Access Docusaurus CLI
- `npm run clear` - Clear Docusaurus cache
- `npm run swizzle` - Customize theme components
- `npm run write-translations` - Generate translation files
- `npm run write-heading-ids` - Add heading IDs for anchor links

### Deployment
- `npm run deploy` or `yarn deploy` - Deploy to GitHub Pages
- `USE_SSH=true yarn deploy` - Deploy using SSH
- `GIT_USER=<username> yarn deploy` - Deploy with specific Git user

## Architecture

### Core Technology Stack
- **Framework**: Docusaurus 3.8.1 (React-based static site generator)
- **Language**: French (fr) as default locale
- **Node Version**: Requires Node.js >= 18.0
- **Package Manager**: Both npm and yarn supported (yarn preferred based on README)

### Directory Structure
- `docs/` - Markdown documentation files organized by topic
- `src/` - React components and custom CSS
  - `src/components/` - Custom React components (e.g., HomepageFeatures)
  - `src/css/custom.css` - Global custom styles
  - `src/pages/` - Custom pages including landing page
- `static/` - Static assets (images, icons, etc.)
- `sidebars.js` - Sidebar navigation configuration
- `docusaurus.config.js` - Main Docusaurus configuration

### Content Organization
- Documentation uses auto-generated sidebar from `/docs` folder structure
- Main sections include:
  - Introduction (`docs/intro.md`)
  - Tutorial basics (`docs/tutorial-basics/`)
  - User guides for Copernik platform features

### Configuration Details
- **Site URL**: https://docs.copernik.io
- **Base URL**: / (root)
- **Organization**: cyberandco
- **Project**: docs.copernik.io
- **Edit Links**: Point to GitHub repository
- **Broken Links**: Configured to throw errors (strict)

### Styling and Theming
- Uses Infima CSS framework (Docusaurus default)
- Custom CSS in `src/css/custom.css`
- French language UI with emoji icons throughout
- Light footer style with extensive link structure
- Custom logo and branding for Copernik

### Content Features
- Emoji usage throughout documentation (🛡️, 🚀, 📚, etc.)
- Screenshot documentation with images in `/static/img/`
- Prism syntax highlighting for code blocks
- Search integration ready (Algolia DocSearch)

## Development Guidelines

### Content Updates
- All content should be in French
- Use consistent emoji patterns following existing conventions
- Screenshots should be stored in `/static/img/` with descriptive names
- Follow existing Markdown frontmatter patterns with `sidebar_position`

### Component Development
- Follow existing React patterns in `src/components/`
- Use CSS modules for component-specific styles
- Maintain accessibility and responsive design
- Keep emoji usage consistent with brand style

### Configuration Changes
- Major config changes go in `docusaurus.config.js`
- Sidebar structure managed in `sidebars.js`
- Navigation and footer links maintained in main config
- URLs and metadata centrally managed

## Deployment Notes

The site is configured for GitHub Pages deployment with:
- Automatic builds to `/build` directory
- GitHub Pages integration via Docusaurus deploy command
- Base URL and organization settings for proper GitHub Pages routing
