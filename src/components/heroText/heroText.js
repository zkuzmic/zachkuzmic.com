import React from 'react';

import WordHighlight from './wordHighlight';

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
      <div style={{ marginRight: '30px' }}>
        <h1 style={{ marginBottom: '1rem', fontSize: '36px' }}>Hello,</h1>
        <p style={{ fontSize: '18px' }}>
          I'm <WordHighlight {...wordHighlightProps} id="wh-zach">Zach Kuzmic</WordHighlight>,
          a Front End Developer with a background in User Experience Design, currently working
          at <WordHighlight {...wordHighlightProps} id="wh-athena">athenahealth</WordHighlight> in <WordHighlight {...wordHighlightProps} id="wh-austin">Austin, TX</WordHighlight>.
        </p>
        <p style={{ fontSize: '18px' }}>
          In my spare time, I like to make <WordHighlight {...wordHighlightProps} id="wh-music">music</WordHighlight>, do <WordHighlight {...wordHighlightProps} id="wh-wood">woodworking</WordHighlight>, and watch <WordHighlight {...wordHighlightProps} id="wh-sports">sports</WordHighlight>. I'm
          from <WordHighlight {...wordHighlightProps} id="wh-ohio">Ohio</WordHighlight> and probably care too much about the <WordHighlight {...wordHighlightProps} id="wh-indians">Cleveland Indians</WordHighlight>.
        </p>
      </div>
    );
  }
}

export default HeroText;
