import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

import styles from './amigaScreen.module.css';

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
      <div className={styles.screenWrapper}>
        <Img fixed={data.athenaImage.childImageSharp.fixed} />
      </div>
    )}
  /> 
);
