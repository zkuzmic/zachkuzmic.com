import React from "react";
import { Link, graphql } from "gatsby";
import Img from 'gatsby-image';

import Layout from "../components/layout";
import SEO from "../components/seo";
import reactLogo from '../images/react.svg';

const screenPositioningStyles = {
  transform: 'rotateY(-11deg)',
  position: "absolute",
  top: '97px',
  left: '191px',
  width: '153px',
  height: '118px',
};

const IndexPage = ({data}) => (
  <Layout includeHeader={false}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{
      display: 'flex',
      alignItems: 'center',
    }}>
      <div style={{ marginRight: '30px' }}>
        <h1>Good day,</h1>
        <p>My name is Zach Kuzmic, and I and I am a Front End Developer with a background in User Experience Design.</p>
      </div>
      <div style={{
        flexBasis: '485px',
        flexShrink: '0',
        position: 'relative'
      }}>
        <Img fluid={data.amigaImage.childImageSharp.fluid} />
        <div
          className="screenWrapper"
          style={{
            perspective: '650px',
            perspectiveOrigin: '50% -15%',
            position: "absolute",
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
          }}
        >
          <div style={screenPositioningStyles}>
            <div style={{
                alignItems: 'center',
                display: 'flex',
                width: '100%',
                height: '100%',
              }}>
                <img
                  src={reactLogo}
                  alt="React"
                  style={{
                    animation: 'spin 18s linear infinite',
                    margin: '0'
                  }} />
            </div>
          </div>
          <div
            className="screen-overlay"
            style={{
              ...screenPositioningStyles,
              backgroundImage: 'radial-gradient(closest-side, rgba(105,182,108,0.30) 50%, rgba(105,182,108,0.00) 100%)',
            }}
          >
          </div>
        </div>
      </div>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export const query = graphql`
  query IndexQuery {
    amigaImage: file(relativePath: { eq: "amiga.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
