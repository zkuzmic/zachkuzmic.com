import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroText from '../components/heroText/heroText';
import Amiga from '../components/amiga';

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
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div style={{
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid rgba(0,0,0,0.1)',
          paddingBottom: '30px'
        }}>
          <HeroText
            onHighlightChange={this.handleHighlightChange}
            highlightedLink={this.state.highlightedLink}
          />
          <Amiga
            highlightedLink={this.state.highlightedLink}
          />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    );
  }
}

export default IndexPage;
