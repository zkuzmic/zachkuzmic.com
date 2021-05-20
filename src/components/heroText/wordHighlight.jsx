import React from 'react';

import * as styles from './wordHighlight.module.css';

const WordHighlight = (props) => {
  const {
    children,
    id,
    onMouseEnter,
    selectedId,
  } = props;

  const classname = selectedId === id
    ? styles.highlighted
    : styles.notHighlighted;

  return (
    <span
      id={id}
      onMouseEnter={onMouseEnter}
      className={classname}
    >
      { children }
    </span>
  )
}

export default WordHighlight;
