import Heading from '@theme/Heading';
import styles from './styles.module.css';


function WhyCopernik() {
  return (
    <section className={styles.whySection}>
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <Heading as="h2">Pourquoi Copernik ?</Heading>
          <p className={styles.whySubtitle}>
            Dans un monde où les cyberattaques se multiplient, la sécurité ne devrait pas être un luxe réservé aux grandes entreprises.
          </p>
        </div>
        
        <div className="row margin-bottom--xl">
          <div className="col col--6">
            <div className={styles.problemCard}>
              <h3>Le problème actuel</h3>
              <ul>
                <li>Outils de cybersécurité trop complexes et coûteux</li>
                <li>PME et institutions publiques laissées pour compte</li>
                <li>Cyberattaques en augmentation constante</li>
              </ul>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.solutionCard}>
              <h3>Notre solution</h3>
              <ul>
                <li>Interface simple et intuitive pour tous</li>
                <li>Tarifs solidaires pour le secteur public</li>
                <li>Protection efficace et automatisée</li>
              </ul>
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
      {/* Why Copernik Section */}
      <WhyCopernik />
    </>
  );
}
