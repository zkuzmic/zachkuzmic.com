import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

import styles from './amigaScreen.module.css';

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
      <div className={styles.screenWrapper}>
        <Img fixed={data.image.childImageSharp.fixed} />
      </div>
    )}
  /> 
);
