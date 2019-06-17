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
        <h1 style={{ marginBottom: '1rem' }}>Hello,</h1>
        <p style={{ fontSize: '18px' }}>
          I'm <WordHighlight {...wordHighlightProps} id="wh-zach">Zach Kuzmic</WordHighlight>,
          a Front End Developer with a background in User Experience Design, currently working at <WordHighlight {...wordHighlightProps} id="wh-athena">athenahealth</WordHighlight> in Austin, TX.
        </p>
        <p style={{ fontSize: '18px' }}>
          In my spare time, I like to make music, do woodworking, and watch sports. I'm from
          Ohio and probably care too much about the Cleveland Indians.
        </p>
      </div>
    );
  }
}

export default HeroText;
