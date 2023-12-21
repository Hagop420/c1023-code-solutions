// imports

import React from 'react';

export const CustomButton = ({ text, backgroundClr, clrTxt }) => {
  function clickFunctionPopUp() {
    alert('Button Clicked');
  }

  // button here creation

  return (
    <button
      onClick={clickFunctionPopUp}
      style={{ background: backgroundClr, color: clrTxt }}>
      {text}
    </button>
  );
};
