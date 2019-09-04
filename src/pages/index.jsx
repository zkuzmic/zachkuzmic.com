import React from 'react';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';
import HeroText from '../components/heroText/heroText';
import Amiga from '../components/amiga';
import ForgeBox from '../components/softwareBox/boxes/forgeBox';

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
        <p style={{ marginTop: 24, fontSize: 14, textAlign: 'center' }}>Some of my latest work:</p>
        <div className={styles.work}>
          <ForgeBox />
          <div className={styles.workText}>
            <h2 className={styles.workHeading}>Forge</h2>
            <p className={styles.workSubheading}>athenahealth Design System</p>
            <p>
              As a UX Engineer on athenahealth&apos;s Design System team, I helped build a
              UI library of React components called Forge. From simple inputs to complex typeahead
              components, Forge was built with a focus on usability and accessibility, for use
              throughout the company on a variety of user-facing products.
            </p>
          </div>
        </div>
        <div className={`${styles.work} ${styles.workRight}`}>
          <div className={styles.workText}>
            <h2 className={styles.workHeading}>Forge</h2>
            <p className={styles.workSubheading}>athenahealth Design System</p>
            <p>
              As a UX Engineer on athenahealth&apos;s Design System team, I helped build a
              UI library of React components called Forge. From simple inputs to complex typeahead
              components, Forge was built with a focus on usability and accessibility, for use
              throughout the company on a variety of user-facing products.
            </p>
          </div>
          <ForgeBox />
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
