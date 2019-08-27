import React from 'react';
import PropTypes from 'prop-types';

import styles from './softwareBox.module.css';

const SoftwareBox = ({
  spine,
  front,
  onClick,
  selected,
}) => {
  const sceneStyles = selected
    ? `${styles.scene} ${styles.sceneSelected}`
    : styles.scene;

  return (
    <div
      className={sceneStyles}
      onClick={onClick}
    >
      <div className={styles.box}>
        <div className={styles.spine}>{spine}</div>
        <div className={styles.front}>{front}</div>
        <div className={styles.bottom} />
      </div>
    </div>
  )
};

SoftwareBox.propTypes = {
  front: PropTypes.element.isRequired,
  spine: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool,
};

SoftwareBox.defaultProps = {
  selected: false,
};

export default SoftwareBox;
