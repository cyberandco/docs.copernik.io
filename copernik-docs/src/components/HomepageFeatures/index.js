import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Configuration Ultra-Rapide',
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    description: (
      <>
        Ajoutez vos services web et lancez vos premiers scans en moins de 5 minutes.
        Interface intuitive sans expertise technique requise.
      </>
    ),
  },
  {
    title: 'Surveillance Continue',
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    description: (
      <>
        Monitoring automatique 24/7 de vos services web avec détection proactive des menaces.
        Alertes instantanées par email et tableau de bord temps réel.
      </>
    ),
  },
  {
    title: 'Analyses Complètes',
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description: (
      <>
        6 types de scans spécialisés : SSL/TLS, DNS, vulnérabilités, sous-domaines,
        serveurs web et ports TCP pour une couverture sécurité maximale.
      </>
    ),
  },
  {
    title: 'Rapports Actionables',
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    description: (
      <>
        Rapports détaillés avec recommandations prioritaires et guides de correction.
        Historique complet et suivi des améliorations sécurité.
      </>
    ),
  },
  {
    title: 'Souveraineté Française',
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    description: (
      <>
        Solution 100% française, conforme RGPD et hébergée en France.
        Support technique en français et respect de la souveraineté numérique.
      </>
    ),
  },
  {
    title: 'Accompagnement Expert',
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    description: (
      <>
        Équipe d'experts en cybersécurité pour vous guider et répondre à vos questions.
        Formations et documentation complète pour une montée en compétences rapide.
      </>
    ),
  },
];

function Feature({icon, title, description}) {
  return (
    <div className={styles.feature}>
      <div className={styles.featureIcon}>
        {icon}
      </div>
      <div className={styles.featureContent}>
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <Heading as="h2" className={styles.sectionTitle}>
            La cybersécurité accessible à tous
          </Heading>
          <p className={styles.sectionSubtitle}>
            Découvrez comment Copernik simplifie la protection de vos services web avec des outils puissants et une interface intuitive
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <div key={idx} className="col col--4 margin-bottom--lg">
              <Feature {...props} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function GetStartedSection() {
  return (
    <section className={styles.getStartedSection}>
      <div className="container">
        <div className="text--center">
          <Heading as="h2" className={styles.ctaTitle}>
            Commencez dès aujourd'hui
          </Heading>
          <p className={styles.ctaSubtitle}>
            Rejoignez les entreprises qui font confiance à Copernik pour sécuriser leurs services web.
            Configuration en 5 minutes, premiers résultats immédiats.
          </p>
          <div className={styles.ctaButtons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro">
              🚀 Guide de démarrage
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/scans">
              🛡️ Types de scans
            </Link>
          </div>

          <div className={styles.quickStats}>
            <div className={styles.quickStat}>
              <span className={styles.quickStatNumber}>5min</span>
              <span className={styles.quickStatLabel}>Configuration</span>
            </div>
            <div className={styles.quickStat}>
              <span className={styles.quickStatNumber}>6 scans</span>
              <span className={styles.quickStatLabel}>Spécialisés</span>
            </div>
            <div className={styles.quickStat}>
              <span className={styles.quickStatNumber}>24/7</span>
              <span className={styles.quickStatLabel}>Surveillance</span>
            </div>
            <div className={styles.quickStat}>
              <span className={styles.quickStatNumber}>🇫🇷</span>
              <span className={styles.quickStatLabel}>Hébergement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      {/* Features Section */}
      <FeaturesSection />

      {/* Get Started Section */}
      <GetStartedSection />
    </>
  );
}
