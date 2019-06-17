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
      borderRadius: '4px',
      padding: '2px 3px',
      margin: '0 -3px',
      background: '#20407A',
      color: '#A9E4FF',
      textShadow: '1px 0 3px #98FAF1'
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
