import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroIcon}>
            <img src="/img/logo_mini.png" alt="Copernik Logo" className={styles.logoIcon} />
          </div>
          <Heading as="h1" className={styles.heroTitle}>
            Sécurisez vos services web en toute simplicité
          </Heading>
          <p className={styles.heroSubtitle}>
            <strong>Copernik</strong> vous protège contre les cybermenaces avec des analyses automatisées 24/7,
            des rapports détaillés et des recommandations d'experts. 100% français, 100% efficace.
          </p>
          <div className={styles.heroButtons}>
            <Link
              className={clsx('button button--primary button--lg', styles.primaryButton)}
              to="/docs/intro">
              🚀 Commencer maintenant
            </Link>
            <Link
              className={clsx('button button--secondary button--lg', styles.secondaryButton)}
              to="/docs/scans">
              📋 Types de scans
            </Link>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>&lt; 5min</span>
              <span className={styles.statLabel}>Configuration</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>6 types</span>
              <span className={styles.statLabel}>d'analyses</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>Surveillance</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>🇫🇷</span>
              <span className={styles.statLabel}>Souverain</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Documentation ${siteConfig.title}`}
      description="Documentation Copernik - Plateforme française de cybersécurité accessible à tous. Guides, tutoriels et ressources pour sécuriser vos services web.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
