import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import * as styles from './amigaScreen.module.css';

export default () => (
  <div className={styles.screenWrapper}>
    <StaticImage
      src="../../images/sports.png"
      placeholder="none"
      alt="sports"
      className={styles.faded}
    />
  </div>
);
