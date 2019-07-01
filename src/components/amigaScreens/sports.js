import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

import styles from './amigaScreen.module.css';

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
      <div className={styles.screenWrapper}>
        <Img
          fixed={data.image.childImageSharp.fixed}
          loading="eager"
        />
      </div>
    )}
  /> 
);
