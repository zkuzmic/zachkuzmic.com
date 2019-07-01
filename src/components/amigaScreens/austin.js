import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

import styles from './amigaScreen.module.css';

export default () => (
  <StaticQuery
    query={graphql`
      query AustinQuery {
        austinImage: file(relativePath: { eq: "austin.png" }) {
          childImageSharp {
            fixed(width: 90, height: 90) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <div className={styles.screenWrapper}>
        <Img
          fixed={data.austinImage.childImageSharp.fixed}
          loading="eager"
        />
      </div>
    )}
  /> 
);
