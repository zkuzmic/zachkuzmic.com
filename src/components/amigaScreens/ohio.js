import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

import styles from './amigaScreen.module.css';

export default () => (
  <StaticQuery
    query={graphql`
      query OhioQuery {
        image: file(relativePath: { eq: "ohio.png" }) {
          childImageSharp {
            fixed(width: 110, height: 110) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <div className={styles.screenWrapper}>
        <Img fixed={data.image.childImageSharp.fixed} />
      </div>
    )}
  /> 
);
