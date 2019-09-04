import React from 'react';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';
import HeroText from '../components/heroText/heroText';
import Amiga from '../components/amiga';
import ForgeBox from '../components/softwareBox/boxes/forgeBox';
import BenchmarcsBox from '../components/softwareBox/boxes/benchmarcsBox';
import AgilityBox from '../components/softwareBox/boxes/agilityBox';

// Styles
import styles from './index.module.css';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlightedLink: null,
    };
  }

  handleHighlightChange = (newHighlight) => {
    const { highlightedLink: previousHighlight } = this.state;
    if (previousHighlight !== newHighlight) {
      this.setState({ highlightedLink: newHighlight });
    }
  }

  render() {
    const { highlightedLink } = this.state;

    return (
      <Layout includeHeader={false}>
        <div className={styles.test} />
        <SEO title="Zach Kuzmic - Home" keywords={['Zach Kuzmic', 'Front End Engineer', 'UX', 'Design', 'react']} />
        <div className={styles.heroWrapper}>
          <HeroText
            onHighlightChange={this.handleHighlightChange}
            highlightedLink={highlightedLink}
          />
          <Amiga
            highlightedLink={highlightedLink}
          />
        </div>
        <h2 className={styles.workSectionHeading}>Recent Work</h2>
        <div className={styles.work}>
          <ForgeBox />
          <div className={styles.workText}>
            <h2 className={styles.workHeading}>Forge</h2>
            <p className={styles.workSubheading}>athenahealth Design System</p>
            <p>
              As a UX Engineer on athenahealth&apos;s Design System team, I helped build a
              UI library of React components called Forge. From simple inputs to complex multiselect
              components, Forge was built with a focus on usability and accessibility, for use
              throughout the company on a variety of user-facing products.
            </p>
          </div>
        </div>
        <div className={`${styles.work} ${styles.workRight}`}>
          <div className={styles.workText}>
            <h2 className={styles.workHeading}>benchmarcs</h2>
            <p className={styles.workSubheading}>Analytics dashboard</p>
            <p>
              I wrote front-end code in React for benchmarcs, an analytics dashboard for the
              funeral industry. This included manipulating large sets of data and displaying it
              in various charts and graphs.
            </p>
            <p>
              <a href="https://benchmarcs.com/" target="_blank">benchmarcs.com</a>
            </p>
          </div>
          <BenchmarcsBox direction="right" />
        </div>
        <div className={styles.work}>
          <AgilityBox />
          <div className={styles.workText}>
            <h2 className={styles.workHeading}>Agility Connect</h2>
            <p className={styles.workSubheading}>Job referral platform</p>
            <p>
              Another React-based project, I wrote front-end code for this tech industry job
              referral web app. With an array of user types (recruiter, job seeker, referrer,
              unauthenticated), we built components that would flex to serve a wide range
              of user needs.
            </p>
            <p>
              <a href="https://agilityconnect.io/" target="_blank">agilityconnect.io</a>
            </p>
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
