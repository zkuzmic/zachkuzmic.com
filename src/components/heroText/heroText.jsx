import React from 'react';

// Components
import WordHighlight from './wordHighlight';

// Styles
import * as styles from './heroText.module.css';

class HeroText extends React.Component {
  handleMouseEnter = ({ target }) => {
    const { onHighlightChange } = this.props;
    onHighlightChange(target.id);
  }

  render() {
    const { highlightedLink } = this.props;

    const wordHighlightProps = {
      onMouseEnter: this.handleMouseEnter,
      selectedId: highlightedLink,
    };

    return (
      <div className={styles.contentWrapper}>
        <h1 className={styles.heading}>Hello,</h1>
        <p className={styles.paragraph}>
          I&apos;m
          {' '}
          <WordHighlight {...wordHighlightProps} id="wh-zach">Zach Kuzmic</WordHighlight>
          , a Front End Developer with a background in User Experience Design, currently
          living and working in
          {' '}
          <WordHighlight {...wordHighlightProps} id="wh-chicago">Chicago, IL</WordHighlight>
          .
        </p>
        <p className={styles.paragraph}>
          In my spare time, I like to make
          {' '}
          <WordHighlight {...wordHighlightProps} id="wh-music">music</WordHighlight>
          , do
          {' '}
          <WordHighlight {...wordHighlightProps} id="wh-wood">woodworking</WordHighlight>
          , and watch
          {' '}
          <WordHighlight {...wordHighlightProps} id="wh-sports">sports</WordHighlight>
          . I&apos;m from
          {' '}
          <WordHighlight {...wordHighlightProps} id="wh-ohio">Ohio</WordHighlight>
          {' '}
          and probably care too much about the
          {' '}
          <WordHighlight {...wordHighlightProps} id="wh-indians">Cleveland Guardians</WordHighlight>
          .
        </p>
      </div>
    );
  }
}

export default HeroText;
