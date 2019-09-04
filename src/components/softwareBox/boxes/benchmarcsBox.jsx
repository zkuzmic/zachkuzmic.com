import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import SoftwareBox from '../softwareBox';

import styles from '../softwareBox.module.css';

const BenchmarcsBox = (props) => (
  <StaticQuery
    query={graphql`
      query BenchmarcsBoxQuery {
        benchmarcsBoxImage: file(relativePath: { eq: "benchmarcs_logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        bLogo: file(relativePath: { eq: "benchmarcs_b.png" }) {
          childImageSharp {
            fluid(maxWidth: 46) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        bGraph: file(relativePath: { eq: "benchmarcs_graph.png" }) {
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
            <div className={styles.benchmarcsSpine}>
              <div className={styles.benchmarcsSpineText}>
                <h3 className={styles.benchmarcsSpineTitle}>benchmarcs</h3>
              </div>
              <div className={styles.benchmarcsBLogo}>
                <Img fluid={data.bLogo.childImageSharp.fluid} />
              </div>
            </div>
          )
        }
        front={
          (
            <div className={styles.benchmarcsFront}>
              <Img className={styles.benchmarcsGraph} fluid={data.bGraph.childImageSharp.fluid} />
              <Img
                className={styles.benchmarcsFrontLogo}
                fluid={data.benchmarcsBoxImage.childImageSharp.fluid}
              />
              <h4 className={styles.benchmarcsFrontSubtitle}>
                Funeral Industry Analytics Dashboard
              </h4>
            </div>
          )
        }
      />
    )}
  />
);

BenchmarcsBox.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']),
};

BenchmarcsBox.defaultProps = {
  direction: 'left',
};

export default BenchmarcsBox;
