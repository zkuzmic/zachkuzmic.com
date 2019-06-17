import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

export default () => (
  <StaticQuery
    query={graphql`
      query ZachQuery {
        zachImage: file(relativePath: { eq: "zach.png" }) {
          childImageSharp {
            fixed(width: 40, height: 40) {
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
        <Img fixed={data.zachImage.childImageSharp.fixed} />
      </div>
    )}
  /> 
);
