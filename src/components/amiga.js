import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';
import reactLogo from '../images/react.svg';

// Amiga screens
import Athena from '../components/amigaScreens/athena';
import Zach from '../components/amigaScreens/zach';

const screenPositioningStyles = {
  transform: 'rotateY(-11deg)',
  position: "absolute",
  top: '97px',
  left: '191px',
  width: '153px',
  height: '118px',
};

const DefaultScreen = () => (
  <div style={{
      alignItems: 'center',
      display: 'flex',
      width: '100%',
      height: '100%',
    }}>
      <img
        src={reactLogo}
        alt="React"
        style={{
          animation: 'spin 18s linear infinite',
          margin: '0',
          width: '100%'
        }} />
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
        default:
          CurrentScreen = DefaultScreen;
      }

      return (
        <div style={{
          flexBasis: '485px',
          flexShrink: '0',
          position: 'relative'
        }}>
          <Img fluid={data.amigaImage.childImageSharp.fluid} />
          <div
            className="screenWrapper"
            style={{
              perspective: '650px',
              perspectiveOrigin: '50% -15%',
              position: "absolute",
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
            }}
          >
            <div style={screenPositioningStyles}>
              {/* <Athena /> */}
              <CurrentScreen />
            </div>
            <div
              className="screen-overlay"
              style={{
                ...screenPositioningStyles,
                backgroundImage: 'radial-gradient(closest-side, rgba(105,182,108,0.30) 50%, rgba(105,182,108,0.00) 100%)',
              }}
            >
            </div>
          </div>
        </div>
      )
    }}
  /> 
);
