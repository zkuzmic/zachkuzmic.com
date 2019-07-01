import React from "react";
// import { Link } from "gatsby";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroText from '../components/heroText/heroText';
import Amiga from '../components/amiga';

// Styles
import styles from './index.module.css';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { highlightedLink: null };
  }

  handleHighlightChange = (newHighlight) => {
    const previousHighlight = this.state.highlightedLink;
    if (previousHighlight !== newHighlight) {
      this.setState({ highlightedLink: newHighlight });
    };
  }

  render() {
    return (
      <Layout includeHeader={false}>
        <SEO title="Zach Kuzmic - Home" keywords={[`Zach Kuzmic`, `Front End Engineer`, `UX`, `Design`, `react`]} />
        <div className={styles.heroWrapper}>
          <HeroText
            onHighlightChange={this.handleHighlightChange}
            highlightedLink={this.state.highlightedLink}
          />
          <Amiga
            highlightedLink={this.state.highlightedLink}
          />
        </div>
        {/* <Link to="/page-2/">Go to page 2</Link> */}
        <p style={{ marginTop: 24, fontSize: 14, textAlign: 'center' }}>I'll be updating this site with some examples of my work soon.</p>
      </Layout>
    );
  }
}

export default IndexPage;
