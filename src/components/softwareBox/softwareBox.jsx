import React from 'react';
import PropTypes from 'prop-types';

import styles from './softwareBox.module.css';

const SoftwareBox = ({
  spine,
  front,
  direction,
}) => (
  <div
    className={`${styles.scene} ${styles[direction]}`}
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
  direction: PropTypes.oneOf(['left', 'right']),
};

SoftwareBox.defaultProps = {
  direction: 'left',
};

export default SoftwareBox;
