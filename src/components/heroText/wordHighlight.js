import React from 'react';

const WordHighlight = (props) => {
  const {
    children,
    id,
    onMouseEnter,
    selectedId,
  } = props;

  const style = selectedId === id
    ? {
      borderBottom: '1px dotted #871616',
      color: '#871616',
      textShadow: '0 0 4px rgba(255, 172, 172, 0.6)',
      animation: 'colorPulse 2s infinite linear alternate',
    }
    : {
      borderBottom: '1px dotted #000'
    };

  return (
    <span
      id={id}
      onMouseEnter={onMouseEnter}
      style={style}
    >
      { children }
    </span>
  )
}

export default WordHighlight;
