import React from 'react';
import { Desktop, Tablet, Mobile } from '../screenSizes';

import WordHighlight from './wordHighlight';

const Content = ({ pFontSize, wordHighlightProps, marginRight, marginLeft }) => (
  <div style={{ marginRight, marginLeft }}>
    <h1 style={{ marginBottom: '1rem', fontSize: '36px' }}>Hello,</h1>
    <p style={{ fontSize: pFontSize }}>
      I'm <WordHighlight {...wordHighlightProps} id="wh-zach">Zach Kuzmic</WordHighlight>,
      a Front End Developer with a background in User Experience Design, currently working
      at <WordHighlight {...wordHighlightProps} id="wh-athena">athenahealth</WordHighlight> in <WordHighlight {...wordHighlightProps} id="wh-austin">Austin, TX</WordHighlight>.
    </p>
    <p style={{ fontSize: pFontSize }}>
      In my spare time, I like to make <WordHighlight {...wordHighlightProps} id="wh-music">music</WordHighlight>, do <WordHighlight {...wordHighlightProps} id="wh-wood">woodworking</WordHighlight>, and watch <WordHighlight {...wordHighlightProps} id="wh-sports">sports</WordHighlight>. I'm
      from <WordHighlight {...wordHighlightProps} id="wh-ohio">Ohio</WordHighlight> and probably care too much about the <WordHighlight {...wordHighlightProps} id="wh-indians">Cleveland Indians</WordHighlight>.
    </p>
  </div>
);

class HeroText extends React.Component {
  handleMouseEnter = ({ target }) => {
    this.props.onHighlightChange(target.id);
  }

  render() {
    const wordHighlightProps = {
      onMouseEnter: this.handleMouseEnter,
      selectedId: this.props.highlightedLink,
    }

    return (
    <React.Fragment>
      <Desktop>
        <Content
          pFontSize="18px"
          wordHighlightProps={wordHighlightProps}
          marginRight="20px"
          marginLeft="20px"
        />
      </Desktop>
      <Tablet>
        <Content
          pFontSize="14px"
          wordHighlightProps={wordHighlightProps}
          marginRight="0"
        />
      </Tablet>
      <Mobile>
        <Content
          pFontSize="14px"
          wordHighlightProps={wordHighlightProps}
          marginRight="0"
        />
      </Mobile>
    </React.Fragment>
    );
  }
}

export default HeroText;
