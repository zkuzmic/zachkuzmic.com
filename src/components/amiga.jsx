import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Amiga screens
import Chicago from './amigaScreens/chicago';
import Music from '../components/amigaScreens/music';
import Ohio from '../components/amigaScreens/ohio';
import Slider from '../components/amigaScreens/slider';
import Sports from '../components/amigaScreens/sports';
import Wood from '../components/amigaScreens/wood';
import Zach from '../components/amigaScreens/zach';

// Styles
import * as styles from './amiga.module.css';

const DefaultScreen = () => (
  <div className={styles.defaultScreenWrapper}>
    <StaticImage
      src="../images/react.svg"
      alt="React"
      className={styles.defaultScreenSpin}
      placeholder="none"
    />
  </div>
);

export default (props) => {
  let CurrentScreen;
  switch (props.highlightedLink) {
    case 'wh-zach':
      CurrentScreen = Zach;
      break;
    case 'wh-chicago':
      CurrentScreen = Chicago;
      break;
    case 'wh-wood':
      CurrentScreen = Wood;
      break;
    case 'wh-ohio':
      CurrentScreen = Ohio;
      break;
    case 'wh-music':
      CurrentScreen = Music;
      break;
    case 'wh-sports':
      CurrentScreen = Sports;
      break;
    case 'wh-indians':
      CurrentScreen = Slider;
      break;
    default:
      CurrentScreen = Zach;
  }

  return (
    <div className={styles.amigaWrapper}>
      <StaticImage src="../images/amiga.png" placeholder="none" alt="Amiga" />
      <div className={styles.screenWrapper}>
        <div className={styles.positionedScreen}>
          <CurrentScreen />
        </div>
        <div className={styles.screenOverlay} />
      </div>
    </div>
  );
};
