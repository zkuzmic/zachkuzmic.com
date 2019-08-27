import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import SoftwareBox from '../softwareBox';

import styles from '../softwareBox.module.css';

const ForgeBox = (props) => (
  <StaticQuery
    query={graphql`
      query ForgeBoxQuery {
        forgeBoxImage: file(relativePath: { eq: "forge-flame.png" }) {
          childImageSharp {
            fluid(maxWidth: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        athenaLogo: file(relativePath: { eq: "athena-logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 46) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <SoftwareBox
        selected={props.selected}
        onClick={() => { props.onClick('forge'); }}
        spine={
          (
            <div className={styles.forgeSpine}>
              <div className={styles.forgeSpineText}>
                <h3 className={styles.forgeSpineTitle}>Forge</h3>
                <h4 className={styles.forgeSpineSubtitle}>athenahealth Design System</h4>
              </div>
              <div className={styles.forgeAthenaLogo}>
                <Img fluid={data.athenaLogo.childImageSharp.fluid} />
              </div>
            </div>
          )
        }
        front={
          (
            <div className={styles.forgeFront}>
              <Img className={styles.forgeFlame} fluid={data.forgeBoxImage.childImageSharp.fluid} />
              <h3 className={styles.forgeFrontTitle}>Forge</h3>
              <h4 className={styles.forgeFrontSubtitle}>athenahealth Design System</h4>
            </div>
          )
        }
      />
    )}
  />
);

ForgeBox.propTypes = {
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool,
};

ForgeBox.defaultProps = {
  selected: false,
};

export default ForgeBox;
