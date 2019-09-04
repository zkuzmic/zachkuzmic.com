import React from 'react';
import PropTypes from 'prop-types';

import styles from './softwareBox.module.css';

const SoftwareBox = ({
  spine,
  front,
}) => (
  <div
    className={styles.scene}
  >
    <div className={styles.box}>
      <div className={styles.spine}>{spine}</div>
      <div className={styles.front}>{front}</div>
      <div className={styles.bottom} />
    </div>
  </div>
);

SoftwareBox.propTypes = {
  front: PropTypes.element.isRequired,
  spine: PropTypes.element.isRequired,
};

export default SoftwareBox;
