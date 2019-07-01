import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';
import reactLogo from '../images/react.svg';

// Amiga screens
import Athena from '../components/amigaScreens/athena';
import Austin from '../components/amigaScreens/austin';
import Music from '../components/amigaScreens/music';
import Ohio from '../components/amigaScreens/ohio';
import Slider from '../components/amigaScreens/slider';
import Sports from '../components/amigaScreens/sports';
import Wood from '../components/amigaScreens/wood';
import Zach from '../components/amigaScreens/zach';

// Styles
import styles from './amiga.module.css';

const DefaultScreen = () => (
  <div className={styles.defaultScreenWrapper}>
    <img
      src={reactLogo}
      alt="React"
      className={styles.defaultScreenSpin}
    />
  </div>
);

export default (props) => (
  <StaticQuery
    query={graphql`
      query AmigaQuery {
        amigaImage: file(relativePath: { eq: "amiga.png" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => {
      let CurrentScreen;
      switch (props.highlightedLink) {
        case 'wh-athena':
          CurrentScreen = Athena;
          break;
        case 'wh-zach':
          CurrentScreen = Zach;
          break;
        case 'wh-austin':
          CurrentScreen = Austin;
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
          CurrentScreen = DefaultScreen;
      }

      return (
        <div className={styles.amigaWrapper}>
          <Img fluid={data.amigaImage.childImageSharp.fluid} />
          <div className={styles.screenWrapper}>
            <div className={styles.positionedScreen}>
              <CurrentScreen />
            </div>
            <div className={styles.screenOverlay}>
            </div>
          </div>
        </div>
      );
    }}
  /> 
);
