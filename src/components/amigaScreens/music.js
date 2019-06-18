import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

export default () => (
  <StaticQuery
    query={graphql`
      query MusicQuery {
        image: file(relativePath: { eq: "drums.png" }) {
          childImageSharp {
            fixed(width: 120, height: 90) {
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
