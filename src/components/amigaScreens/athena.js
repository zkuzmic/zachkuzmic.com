import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

export default () => (
  <StaticQuery
    query={graphql`
      query AthenaQuery {
        athenaImage: file(relativePath: { eq: "athena-logo.png" }) {
          childImageSharp {
            fixed(width: 118, height: 118) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <div style={{
        alignItems: 'center',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        width: '100%',
      }}>
        <Img fixed={data.athenaImage.childImageSharp.fixed} />
      </div>
    )}
  /> 
);
