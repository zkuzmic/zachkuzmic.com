import React from 'react';
import PropTypes from 'prop-types';

import styles from './softwareBox.module.css';

const SoftwareBox = ({spine, front}) => {
  return (
    <div className={styles.scene}>
      <div className={styles.box}>
        <div className={styles.spine}>{spine}</div>
        <div className={styles.front}>{front}</div>
        <div className={styles.bottom}></div>
      </div>
    </div>
  );
}

SoftwareBox.propTypes = {
  front: PropTypes.element,
  spine: PropTypes.element,
}

export default SoftwareBox;
