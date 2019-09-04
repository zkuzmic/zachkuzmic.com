import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import SoftwareBox from '../softwareBox';

import styles from '../softwareBox.module.css';

const AgilityBox = (props) => (
  <StaticQuery
    query={graphql`
      query AgilityBoxQuery {
        aLogo: file(relativePath: { eq: "agility_a.png" }) {
          childImageSharp {
            fluid(maxWidth: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <SoftwareBox
        direction={props.direction}
        spine={
          (
            <div className={styles.agilitySpine}>
              <div className={styles.agilitySpineText}>
                <h3 className={styles.agilitySpineTitle}>Agility Connect</h3>
              </div>
              <div className={styles.agilitySpineLogo}>
                <Img fluid={data.aLogo.childImageSharp.fluid} />
              </div>
            </div>
          )
        }
        front={
          (
            <div className={styles.agilityFront}>
              <Img
                className={styles.agilityFrontLogo}
                fluid={data.aLogo.childImageSharp.fluid}
              />
              <h3 className={styles.agilityFrontTitle}>Agility Connect</h3>
              <h4 className={styles.agilityFrontSubtitle}>
                Job Referral Platform
              </h4>
            </div>
          )
        }
      />
    )}
  />
);

AgilityBox.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']),
};

AgilityBox.defaultProps = {
  direction: 'left',
};

export default AgilityBox;
