// imports
import React from 'react';
import { useState } from 'react';

export const ToggleButton = ({ text }) => {
  const [curr, isClicked] = useState(false);

  const divStyle = {
    color: 'blue',

    backgroundColor: 'orange',
  };
  const divStyle2 = {
    color: 'orange',

    backgroundColor: 'black',
  };

  function handleClick() {
    if (curr) {
      isClicked(false);
    } else {
      isClicked(true);
    }
  }

  // rendering button\

  if (curr) {
    return (
      <button onClick={handleClick} style={divStyle}>
        {text}
      </button>
    );
  } else {
    return (
      <button onClick={handleClick} style={divStyle2}>
        {text}
      </button>
    );
  }
};
