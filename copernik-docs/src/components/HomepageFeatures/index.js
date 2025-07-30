import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '🛡️ Sécurité Simplifiée',
    icon: '🔒',
    description: (
      <>
        Interface intuitive qui rend la cybersécurité accessible à tous, 
        sans expertise technique requise.
      </>
    ),
  },
  {
    title: '⚡ Analyse Rapide',
    icon: '🚀',
    description: (
      <>
        Scans automatisés en temps réel pour détecter les vulnérabilités 
        avant qu'elles ne deviennent critiques.
      </>
    ),
  },
  {
    title: '📊 Reporting Intelligent',
    icon: '📈',
    description: (
      <>
        Tableaux de bord clairs avec recommandations actionables 
        pour renforcer votre sécurité.
      </>
    ),
  },
];

function Feature({icon, title, description}) {
  return (
    <div className={styles.feature}>
      <div className={styles.featureIcon}>
        <span className={styles.iconLarge}>{icon}</span>
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
            🚀 Fonctionnalités Principales
          </Heading>
          <p className={styles.sectionSubtitle}>
            Découvrez comment Copernik révolutionne la cybersécurité
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <div key={idx} className="col col--4">
              <Feature {...props} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function WhyCopernik() {
  return (
    <section className={styles.whySection}>
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <Heading as="h2" className={styles.sectionTitle}>
            🎯 Pourquoi Choisir Copernik ?
          </Heading>
          <p className={styles.whySubtitle}>
            Dans un monde où les cyberattaques se multiplient exponentiellement, 
            <strong> la sécurité ne devrait pas être un luxe réservé aux grandes entreprises.</strong>
          </p>
        </div>
        
        <div className="row margin-bottom--xl">
          <div className="col col--6">
            <div className={styles.problemCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>⚠️</span>
                <h3 className={styles.cardTitle}>Le Défi Actuel</h3>
              </div>
              <div className={styles.cardContent}>
                <ul className={styles.cardList}>
                  <li>🔧 Outils de cybersécurité complexes et inaccessibles</li>
                  <li>💰 Coûts prohibitifs pour PME et institutions publiques</li>
                  <li>📈 Cyberattaques en croissance de +38% par an</li>
                  <li>👥 Manque d'expertise technique en interne</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.solutionCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>✨</span>
                <h3 className={styles.cardTitle}>Notre Réponse</h3>
              </div>
              <div className={styles.cardContent}>
                <ul className={styles.cardList}>
                  <li>🎯 Interface intuitive accessible à tous</li>
                  <li>💡 Tarifs solidaires et transparents</li>
                  <li>🤖 Protection automatisée 24h/24</li>
                  <li>🎓 Formation et accompagnement inclus</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.statsSection}>
          <div className="row">
            <div className="col col--3">
              <div className={styles.statItem}>
                <div className={styles.statNumber}>2025</div>
                <div className={styles.statLabel}>Année de création</div>
              </div>
            </div>
            <div className="col col--3">
              <div className={styles.statItem}>
                <div className={styles.statNumber}>100%</div>
                <div className={styles.statLabel}>Made in France</div>
              </div>
            </div>
            <div className="col col--3">
              <div className={styles.statItem}>
                <div className={styles.statNumber}>-1min</div>
                <div className={styles.statLabel}>Premier scan</div>
              </div>
            </div>
            <div className="col col--3">
              <div className={styles.statItem}>
                <div className={styles.statNumber}>24/7</div>
                <div className={styles.statLabel}>Monitoring continu</div>
              </div>
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
      
      {/* Why Copernik Section */}
      <WhyCopernik />
    </>
  );
}
