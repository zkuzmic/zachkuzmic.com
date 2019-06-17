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
      color: '#B91D1D',
      textShadow: '0 0 4px rgba(255, 172, 172, 0.6)',
      animation: 'colorPulse 1s infinite linear alternate',
    }
    : {}

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
