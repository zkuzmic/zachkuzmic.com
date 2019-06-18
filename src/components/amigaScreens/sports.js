import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

export default () => (
  <StaticQuery
    query={graphql`
      query SportsQuery {
        image: file(relativePath: { eq: "sports.png" }) {
          childImageSharp {
            fixed(width: 110, height: 110) {
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
        <Img fixed={data.image.childImageSharp.fixed} />
      </div>
    )}
  /> 
);
