import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Enregistre tous tes temps',
    image: require('@site/static/img/time-mix.png').default,
    description: (
      <>
        World Timesheet te permet de regrouper tous tes temps de Contre la Montre en un seul endroit.
      </>
    ),
  },
  {
    title: 'Track tes meilleurs tours',
    image: require('@site/static/img/splits-mix.png').default,
    description: (
      <>
        World Timesheet te permet de garder une trace de tes meilleurs laps, et 
        de calculer ton meilleur temps théorique.
      </>
    ),
  },
  {
    title: 'Statistiques',
    image: require('@site/static/img/rank.png').default,
    description: (
      <>
        World Timesheet te permet de voir le rang de ton temps, son classement Players' Page
        et bien d'autre.
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('text--center', styles.featureImageWrapper)}>
        <img src={image} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
