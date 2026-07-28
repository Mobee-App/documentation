import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Translate from '@docusaurus/Translate';


import styles from './index.module.css';

const PACKAGE_FEATURES = [
  { id: 'homepage.feature.1', message: 'Fast Salesforce package onboarding and setup' },
  { id: 'homepage.feature.2', message: 'QR code generation, scanning, and email integration' },
  { id: 'homepage.feature.3', message: 'Document generation with templates and automation' },
  { id: 'homepage.feature.4', message: 'Community configuration and supported features' },
  { id: 'homepage.feature.5', message: 'Time tracking and approval workflows' },
  { id: 'homepage.feature.6', message: 'Configurable notifications banner' },
  { id: 'homepage.feature.7', message: 'Reusable flow blueprints for operations' },
  { id: 'homepage.feature.8', message: 'Interactive graphical components for dashboards' },
  { id: 'homepage.feature.9', message: 'Extensible data connector integrations' },
  { id: 'homepage.feature.10', message: 'End-to-end Mobee E-Signature process' },
];

const DOCUMENTATION_LINKS = [
  {
    title: 'Mobee Installation Guide',
    descId: 'homepage.card.installation.description',
    description: 'Install the package, configure permissions, and onboard users quickly.',
    to: '/docs/documentation-api/Mobee Installation Guide/package-installation-guide/',
  },
  {
    title: 'QR Code Module',
    descId: 'homepage.card.qrCode.description',
    description: 'Set up QR generation, scanning flows, and email template usage.',
    to: '/docs/documentation-api/QR Code Module/qr-code-generator-guide/',
  },
  {
    title: 'Document Generation Module',
    descId: 'homepage.card.docGen.description',
    description: 'Create templates, configure access, and automate document production.',
    to: '/docs/documentation-api/Document Generation Module/mobee-document-introduction/',
  },
  {
    title: 'Community',
    descId: 'homepage.card.community.description',
    description: 'Prepare community resources and configure supported features.',
    to: '/docs/documentation-api/Community/Mobee Community Setup/',
  },
  {
    title: 'Timesheet Module',
    descId: 'homepage.card.timesheet.description',
    description: 'Manage time entries, assignments, and approval processes.',
    to: '/docs/documentation-api/Timesheet Module/Admin Guide/',
  },
  {
    title: 'Notifications Banner',
    descId: 'homepage.card.notifications.description',
    description: 'Deploy and customize on-page notifications for users.',
    to: '/docs/documentation-api/Notifications Banner/notifications-banner/',
  },
  {
    title: 'Flows',
    descId: 'homepage.card.flows.description',
    description: 'Use ready-to-adapt flow templates for common business scenarios.',
    to: '/docs/documentation-api/Flows/campaign-presence-registration-flow/',
  },
  {
    title: 'Graphical Components',
    descId: 'homepage.card.graphical.description',
    description: 'Build richer Salesforce pages with chart-based components.',
    to: '/docs/documentation-api/Graphical Components/gauge-chart/',
  },
  {
    title: 'Data Connector Module',
    descId: 'homepage.card.dataConnector.description',
    description: 'Configure secure external data connections and field mappings.',
    to: '/docs/documentation-api/Data Connector Module/data-connector-module-introduction/',
  },
  {
    title: 'Mobee E-Signature',
    descId: 'homepage.card.esignature.description',
    description: 'Configure Yousign integration and signature lifecycle in Salesforce.',
    to: '/docs/documentation-api/Mobee E-Signature/mobee-esignature-configuration-guide/',
  },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const logoUrl = useBaseUrl('img/appstore.png');
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src={logoUrl} alt="Mobee" className={styles.heroLogo} />
        <p className={styles.heroEyebrow}>Mobee Documentation</p>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
          <Translate id="homepage.heroSubtitle">
            Professional guides for installation, configuration, and advanced usage of the Mobee package.
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/documentation-api/">
            <Translate id="homepage.gettingStartedButton">Getting Started</Translate>
          </Link>
          <Link
            className="button button--outline button--lg margin-left--md"
            to="/docs/documentation-api/Mobee Installation Guide/package-installation-guide/">
            <Translate id="homepage.installationGuideButton">Installation Guide</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={`Documentation`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <h2><Translate id="homepage.packageFeaturesHeading">Package Features</Translate></h2>
              <p>
                <Translate id="homepage.packageFeaturesSubtitle">
                  Explore what the Mobee package includes and jump directly into each documentation area.
                </Translate>
              </p>
            </div>
            <ul className={styles.featuresList}>
              {PACKAGE_FEATURES.map((f) => (
                <li key={f.id}><Translate id={f.id}>{f.message}</Translate></li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.searchSection}>
          <div className="container">
            <div className={styles.searchPanel}>
              <h3><Translate id="homepage.searchPanelHeading">Need something quickly?</Translate></h3>
              <p>
                <Translate id="homepage.searchPanelText">
                  Use the search bar at the top of the site to locate exactly what you are looking for faster, including specific setup steps and module topics.
                </Translate>
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <h2><Translate id="homepage.docsModulesHeading">Documentation Modules</Translate></h2>
              <p><Translate id="homepage.docsModulesSubtitle">Open any module to access detailed implementation guides.</Translate></p>
            </div>
            <div className={styles.cardGrid}>
              {DOCUMENTATION_LINKS.map((doc) => (
                <article key={doc.title} className={styles.docCard}>
                  <h3>{doc.title}</h3>
                  <p><Translate id={doc.descId}>{doc.description}</Translate></p>
                  <Link className={styles.docLink} to={encodeURI(doc.to)}>
                    <Translate id="homepage.openDocumentationLink">Open documentation</Translate>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
