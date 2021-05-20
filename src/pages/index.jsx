import React from 'react';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';
import HeroText from '../components/heroText/heroText';
import Amiga from '../components/amiga';

// Styles
import * as styles from './index.module.css';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlightedLink: 'wh-zach',
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
        <SEO title="Zach Kuzmic | Front End Engineer" keywords={['Zach Kuzmic', 'Front End Engineer', 'UX', 'Design', 'react']} />
        <div className={styles.heroWrapper}>
          <HeroText
            onHighlightChange={this.handleHighlightChange}
            highlightedLink={highlightedLink}
          />
          <Amiga
            highlightedLink={highlightedLink}
          />
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
