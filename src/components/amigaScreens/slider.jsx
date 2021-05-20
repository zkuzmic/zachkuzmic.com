import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as styles from './amigaScreen.module.css';

export default () => (
  <div className={styles.screenWrapper}>
    <StaticImage
      src="../../images/slider.png"
      placeholder="none"
      alt="slider"
    />
  </div>
);
