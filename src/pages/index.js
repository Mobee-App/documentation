import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Translate from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';


import styles from './index.module.css';

function Feature({ imageUrl, title, description }) {
  const handleAskForDemo = () => {
    // Add your logic to handle the "Ask for a Demo" button click event here
    const url = 'https://appexchange.salesforce.com/listingDetail?listingId=a0N3u00000ONmC7EAL&tab=e';
    window.open(url, '_blank');
  };

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {imageUrl && (
          <img src={imageUrl} className={styles.featureImage} alt="Feature" />
        )}
      </div>
      <div className={clsx('text--left', 'padding-horiz--md')}>
        <h3>{title}</h3>
        <p>{description}</p>
        {title === 'Watch What we do' && (
          <Link
            className={clsx('button button--secondary button--lg margin-bottom--lg', styles.demoButton)}
            to={useBaseUrl('/')}
            onClick={handleAskForDemo}
          >
            <Translate id="homepage.askForDemoButton">Ask for a Demo</Translate>
          </Link>
        )}
      </div>
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle"><Translate>
          By Uprizon
        </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/documentation-api">
            <Translate id="homepage.gettingStartedButton" >Getting Started </Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Documentation`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/* Render the Feature components here */}
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <Feature
                imageUrl="https://i0.wp.com/mobee-app.com/wp-content/uploads/2022/09/logo-by-uprizon-final.png?fit=448%2C148&ssl=1"
                title="Watch What we do"
                description={
                  <Translate id="homepage.feature1Description">
                    Docusaurus was designed from the ground up to be easily installed and
                    used to get your website up and running quickly.
                  </Translate>
                }
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
